<script setup lang="ts">
import { ref, computed, watch, onMounted, onUnmounted } from 'vue'
import LiyaAiEnvVuejsClassroomScene from './ClassroomScene.vue'
import type { 
  LiyaAiEnvVuejsThemeConfig,
  LiyaAiEnvVuejsPosition,
  LiyaAiEnvVuejsCameraConfig
} from '../../types'
import { useLiyaAiEnvVuejsEnvironment } from '../../composables/useEnvironment'
import { useLiyaAiEnvVuejsVoice } from '../../composables/useVoice'
import { liyaAiEnvVuejsGetAvatarModel, liyaAiEnvVuejsGetSceneBackground, liyaAiEnvVuejsCheckUserAccess } from '../../api'
import { useLiyaAiEnvVuejsI18n } from '../../i18n'

interface Props {
  showBackButton?: boolean
  classroomModelUrl?: string
  avatarModelUrl?: string
  avatarPosition?: LiyaAiEnvVuejsPosition
  cameraConfig?: LiyaAiEnvVuejsCameraConfig
  welcomeMessage?: string
  enableGestures?: boolean
  enableSubtitles?: boolean
  assistantName?: string
  theme?: LiyaAiEnvVuejsThemeConfig
}

const props = withDefaults(defineProps<Props>(), {
  showBackButton: true,
  classroomModelUrl: '',
  avatarModelUrl: '',
  avatarPosition: () => ({ x: 0, y: 0, z: 0 }),
  cameraConfig: () => ({
    position: { x: 0, y: 1.4, z: 4 },
    lookAt: { x: 0, y: 1.2, z: 0 },
    fov: 45
  }),
  welcomeMessage: '',
  enableGestures: true,
  enableSubtitles: true,
  assistantName: '',
  theme: () => ({})
})

const emit = defineEmits<{
  back: []
  'message-sent': [message: string]
  'message-received': [message: string]
  'speaking-started': []
  'speaking-ended': []
  loaded: []
  error: [error: Error]
}>()

const {
  isSpeaking,
  isProcessing,
  messages,
  visemes,
  gestures,
  audioTime,
  currentPresentation,
  handleMessage,
  speakWithAvatar,
  addWelcomeMessage,
  updateWelcomeMessage,
  setListening,
  cleanup
} = useLiyaAiEnvVuejsEnvironment()

// Welcome message flag - only speak once per session
const liyaAiEnvVuejsHasPlayedWelcome = ref(false)

const { t: liyaAiEnvVuejsT, locale: liyaAiEnvVuejsLocale, setLocale: liyaAiEnvVuejsSetLocale } = useLiyaAiEnvVuejsI18n()

function liyaAiEnvVuejsToggleLocale(): void {
  const newLocale = liyaAiEnvVuejsLocale.value === 'tr' ? 'en' : 'tr'
  liyaAiEnvVuejsSetLocale(newLocale)
}

// Ensure URL uses HTTPS for security (Mixed Content fix)
function liyaAiEnvVuejsEnsureHttps(url: string): string {
  if (!url) return url
  return url.replace(/^http:\/\//i, 'https://')
}

const {
  isRecording,
  transcript,
  isSupported: isVoiceSupported,
  startRecording,
  stopRecording
} = useLiyaAiEnvVuejsVoice()

// Voice not supported toast (for iOS)
const liyaAiEnvVuejsVoiceNotSupportedVisible = ref(false)
function liyaAiEnvVuejsShowVoiceNotSupported(): void {
  liyaAiEnvVuejsVoiceNotSupportedVisible.value = true
  setTimeout(() => {
    liyaAiEnvVuejsVoiceNotSupportedVisible.value = false
  }, 3000)
}

// Resolved props with i18n fallbacks
const liyaAiEnvVuejsResolvedWelcome = computed(() => props.welcomeMessage || liyaAiEnvVuejsT.value.chat.emptyWelcome)
const liyaAiEnvVuejsResolvedName = computed(() => props.assistantName || 'AI Assistant')

// Avatar model URL from API
const liyaAiEnvVuejsAvatarModelUrl = ref(props.avatarModelUrl)
// Scene background URL from API
const liyaAiEnvVuejsSceneModelUrl = ref(props.classroomModelUrl)

// Access control state
const liyaAiEnvVuejsIsCheckingAccess = ref(true)
const liyaAiEnvVuejsAccessError = ref<{ code: string; message: string } | null>(null)
const liyaAiEnvVuejsHasAccessError = computed(() => liyaAiEnvVuejsAccessError.value !== null)

const liyaAiEnvVuejsAccessErrorMessage = computed(() => {
  if (!liyaAiEnvVuejsAccessError.value) return ''
  const code = liyaAiEnvVuejsAccessError.value.code
  if (code === 'PREMIUM_PLUS_REQUIRED') {
    return liyaAiEnvVuejsT.value.premium.upgradePremiumPlus
  }
  return liyaAiEnvVuejsT.value.premium.upgradePremium
})

async function liyaAiEnvVuejsCheckAccess(): Promise<void> {
  liyaAiEnvVuejsIsCheckingAccess.value = true
  liyaAiEnvVuejsAccessError.value = null
  try {
    const result = await liyaAiEnvVuejsCheckUserAccess()
    if (!result.has_avatar_access) {
      liyaAiEnvVuejsAccessError.value = {
        code: 'FEATURE_NOT_AVAILABLE',
        message: liyaAiEnvVuejsT.value.premium.upgradePremium
      }
    }
  } catch (error: any) {
    const errorCode = error?.code || 'FEATURE_NOT_AVAILABLE'
    const errorMessage = error?.message || ''
    if (errorCode === 'FEATURE_NOT_AVAILABLE' || 
        errorCode === 'UPGRADE_REQUIRED' ||
        errorCode === 'PREMIUM_PLUS_REQUIRED' ||
        errorMessage.includes('Premium') ||
        errorMessage.includes('upgrade')) {
      liyaAiEnvVuejsAccessError.value = {
        code: errorCode,
        message: errorMessage
      }
    } else {
      liyaAiEnvVuejsAccessError.value = {
        code: 'FEATURE_NOT_AVAILABLE',
        message: liyaAiEnvVuejsT.value.premium.upgradePremium
      }
    }
  } finally {
    liyaAiEnvVuejsIsCheckingAccess.value = false
  }
}

async function liyaAiEnvVuejsLoadAvatarModel(): Promise<void> {
  if (liyaAiEnvVuejsAvatarModelUrl.value) return
  
  try {
    const response = await liyaAiEnvVuejsGetAvatarModel()
    liyaAiEnvVuejsAvatarModelUrl.value = liyaAiEnvVuejsEnsureHttps(response.model_url)
  } catch (error) { /* avatar model not available */ }
}

async function liyaAiEnvVuejsLoadSceneBackground(): Promise<void> {
  if (liyaAiEnvVuejsSceneModelUrl.value) return
  
  try {
    const response = await liyaAiEnvVuejsGetSceneBackground()
    liyaAiEnvVuejsSceneModelUrl.value = liyaAiEnvVuejsEnsureHttps(response.model_url)
  } catch (error) { /* scene background not available */ }
}

onMounted(async () => {
  await liyaAiEnvVuejsCheckAccess()
  if (!liyaAiEnvVuejsHasAccessError.value) {
    await Promise.all([
      liyaAiEnvVuejsLoadAvatarModel(),
      liyaAiEnvVuejsLoadSceneBackground()
    ])
    
    // Add welcome message to chat and speak on first mount
    if (!liyaAiEnvVuejsHasPlayedWelcome.value && liyaAiEnvVuejsResolvedWelcome.value) {
      liyaAiEnvVuejsHasPlayedWelcome.value = true
      addWelcomeMessage(liyaAiEnvVuejsResolvedWelcome.value)
      setTimeout(() => {
        speakWithAvatar(liyaAiEnvVuejsResolvedWelcome.value)
      }, 500)
    }
  }
})

// Watch for transcript changes
watch(transcript, (newTranscript) => {
  if (newTranscript && !isRecording.value) {
    liyaAiEnvVuejsHandleSendMessage(newTranscript)
  }
})

// Watch for speaking state
watch(isSpeaking, (speaking) => {
  if (speaking) {
    emit('speaking-started')
  } else {
    emit('speaking-ended')
  }
})

// Watch locale changes - update welcome message and re-speak
watch(liyaAiEnvVuejsLocale, () => {
  updateWelcomeMessage(liyaAiEnvVuejsResolvedWelcome.value)
  cleanup()
  setTimeout(() => {
    speakWithAvatar(liyaAiEnvVuejsResolvedWelcome.value)
  }, 300)
})

async function liyaAiEnvVuejsHandleSendMessage(message: string): Promise<void> {
  emit('message-sent', message)
  await handleMessage(message)
  
  const lastMessage = messages.value[messages.value.length - 1]
  if (lastMessage && lastMessage.role === 'assistant') {
    emit('message-received', lastMessage.content)
  }
}

function liyaAiEnvVuejsToggleListening(): void {
  // Show toast if voice not supported (iOS Safari)
  if (!isVoiceSupported.value) {
    liyaAiEnvVuejsShowVoiceNotSupported()
    return
  }
  
  if (isRecording.value) {
    stopRecording()
    setListening(false)
  } else {
    startRecording()
    setListening(true)
  }
}

function liyaAiEnvVuejsHandleBack(): void {
  cleanup()
  emit('back')
}

function liyaAiEnvVuejsGetLastMessage(): string {
  if (messages.value.length === 0) {
    return liyaAiEnvVuejsResolvedWelcome.value
  }
  return messages.value[messages.value.length - 1]?.content || ''
}

onUnmounted(() => {
  cleanup()
})
</script>

<template>
  <div class="liya-ai-env-vuejs-standalone-container">
    <!-- Header -->
    <header class="liya-ai-env-vuejs-header">
      <div class="liya-ai-env-vuejs-header__left">
        <button 
          v-if="showBackButton"
          class="liya-ai-env-vuejs-header__back-btn"
          @click="liyaAiEnvVuejsHandleBack"
          :aria-label="liyaAiEnvVuejsT.controls.back"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
            <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/>
          </svg>
        </button>
        <div class="liya-ai-env-vuejs-header__title">
          <div 
            class="liya-ai-env-vuejs-status-dot"
            :class="{ 'liya-ai-env-vuejs-status-dot--speaking': isSpeaking }"
          ></div>
          <span>{{ liyaAiEnvVuejsResolvedName }}</span>
        </div>
      </div>
      <div class="liya-ai-env-vuejs-header__right">
        <button 
          class="liya-ai-env-vuejs-header__lang-btn"
          @click="liyaAiEnvVuejsToggleLocale"
          :title="liyaAiEnvVuejsLocale === 'tr' ? 'Switch to English' : 'Türkçe\'ye geç'"
        >
          <span class="liya-ai-env-vuejs-header__lang-text">{{ liyaAiEnvVuejsLocale === 'tr' ? 'EN' : 'TR' }}</span>
        </button>
        <div class="liya-ai-env-vuejs-header__brand">
          {{ liyaAiEnvVuejsT.branding.environmentTitle }}
        </div>
      </div>
    </header>

    <!-- Scene -->
    <div class="liya-ai-env-vuejs-scene">
      <!-- Access Loading Spinner -->
      <div v-if="liyaAiEnvVuejsIsCheckingAccess" class="liya-ai-env-vuejs-access-loading">
        <div class="liya-ai-env-vuejs-access-loading__spinner"></div>
      </div>

      <!-- Premium Required Overlay -->
      <div v-else-if="liyaAiEnvVuejsHasAccessError" class="liya-ai-env-vuejs-premium-overlay">
        <div class="liya-ai-env-vuejs-premium-overlay__content">
          <div class="liya-ai-env-vuejs-premium-overlay__icon">
            <svg viewBox="0 0 24 24" fill="currentColor" width="48" height="48">
              <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"/>
            </svg>
          </div>
          <h3 class="liya-ai-env-vuejs-premium-overlay__title">{{ liyaAiEnvVuejsT.premium.title }}</h3>
          <p class="liya-ai-env-vuejs-premium-overlay__text">{{ liyaAiEnvVuejsAccessErrorMessage }}</p>
          <a 
            href="https://liyalabs.com/pricing" 
            target="_blank" 
            rel="noopener" 
            class="liya-ai-env-vuejs-premium-overlay__btn"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
              <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/>
            </svg>
            {{ liyaAiEnvVuejsT.premium.viewPlans }}
          </a>
        </div>
      </div>

      <!-- 3D Scene (only when access granted) -->
      <template v-else>
        <LiyaAiEnvVuejsClassroomScene
          :classroom-model-url="liyaAiEnvVuejsSceneModelUrl"
          :avatar-model-url="liyaAiEnvVuejsAvatarModelUrl"
          :avatar-position="avatarPosition"
          :camera-config="cameraConfig"
          :is-speaking="isSpeaking"
          :visemes="visemes"
          :gestures="enableGestures ? gestures : []"
          :current-time="audioTime"
          :presentation-result="currentPresentation"
          @loaded="$emit('loaded')"
          @error="(e) => $emit('error', e)"
        />

        <!-- Subtitle -->
        <div v-if="enableSubtitles" class="liya-ai-env-vuejs-subtitle">
          <div v-if="isProcessing" class="liya-ai-env-vuejs-thinking-dots">
            <span class="liya-ai-env-vuejs-thinking-dot"></span>
            <span class="liya-ai-env-vuejs-thinking-dot"></span>
            <span class="liya-ai-env-vuejs-thinking-dot"></span>
          </div>
          <p 
            v-else 
            class="liya-ai-env-vuejs-subtitle__text"
            :class="{ 'liya-ai-env-vuejs-subtitle__welcome': messages.length === 0 }"
          >
            {{ liyaAiEnvVuejsGetLastMessage() }}
          </p>
        </div>

        <!-- Controls -->
        <div class="liya-ai-env-vuejs-controls">
          <button
            class="liya-ai-env-vuejs-controls__mic"
            :class="{
              'liya-ai-env-vuejs-controls__mic--active': isRecording,
              'liya-ai-env-vuejs-controls__mic--disabled': isProcessing || isSpeaking,
              'liya-ai-env-vuejs-controls__mic--not-supported': !isVoiceSupported
            }"
            :disabled="isProcessing || isSpeaking"
            @click="liyaAiEnvVuejsToggleListening"
            :aria-label="isRecording ? liyaAiEnvVuejsT.voice.stopRecording : liyaAiEnvVuejsT.voice.startRecording"
          >
            <svg v-if="!isRecording" viewBox="0 0 24 24" fill="currentColor" width="32" height="32">
              <path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm-1-9c0-.55.45-1 1-1s1 .45 1 1v6c0 .55-.45 1-1 1s-1-.45-1-1V5zm6 6c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z"/>
            </svg>
            <svg v-else viewBox="0 0 24 24" fill="currentColor" width="32" height="32">
              <path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3z"/>
              <path d="M17 11c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z"/>
            </svg>
          </button>
          <p class="liya-ai-env-vuejs-controls__hint">
            {{ isRecording ? liyaAiEnvVuejsT.voice.listening : isProcessing ? liyaAiEnvVuejsT.voice.thinking : liyaAiEnvVuejsT.voice.pressToSpeak }}
          </p>
          
          <!-- Voice Not Supported Toast (iOS) -->
          <Transition name="liya-ai-env-vuejs-toast">
            <div 
              v-if="liyaAiEnvVuejsVoiceNotSupportedVisible" 
              class="liya-ai-env-vuejs-controls__toast"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>
              </svg>
              <span>{{ liyaAiEnvVuejsT.voice.notSupported }}</span>
            </div>
          </Transition>
        </div>
      </template>
    </div>
  </div>
</template>

<style scoped>
.liya-ai-env-vuejs-standalone-container {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background: var(--liya-env-bg-gradient, linear-gradient(180deg, #1a1a2e 0%, #16213e 100%));
  overflow: hidden;
}

.liya-ai-env-vuejs-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 24px;
  background: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  z-index: 10;
}

.liya-ai-env-vuejs-header__left {
  display: flex;
  align-items: center;
  gap: 12px;
}

.liya-ai-env-vuejs-header__title {
  display: flex;
  align-items: center;
  gap: 12px;
  color: #fff;
  font-size: 18px;
  font-weight: 600;
}

.liya-ai-env-vuejs-header__right {
  display: flex;
  align-items: center;
  gap: 8px;
}

.liya-ai-env-vuejs-header__lang-btn {
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: rgba(255, 255, 255, 0.8);
  cursor: pointer;
  padding: 4px 10px;
  border-radius: 6px;
  font-size: 12px;
  font-weight: 600;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

.liya-ai-env-vuejs-header__lang-btn:hover {
  background: rgba(255, 255, 255, 0.2);
  color: #fff;
}

.liya-ai-env-vuejs-header__lang-text {
  line-height: 1;
}

.liya-ai-env-vuejs-header__brand {
  color: rgba(255, 255, 255, 0.5);
  font-size: 14px;
}

.liya-ai-env-vuejs-status-dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #22c55e;
}

.liya-ai-env-vuejs-status-dot--speaking {
  animation: liya-ai-env-vuejs-pulse-status 1s ease-in-out infinite;
}

@keyframes liya-ai-env-vuejs-pulse-status {
  0%, 100% { transform: scale(1); opacity: 1; }
  50% { transform: scale(1.2); opacity: 0.7; }
}

.liya-ai-env-vuejs-header__back-btn {
  background: transparent;
  border: none;
  color: rgba(255, 255, 255, 0.7);
  cursor: pointer;
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  transition: all 0.2s ease;
}

.liya-ai-env-vuejs-header__back-btn:hover {
  color: #fff;
  background: rgba(255, 255, 255, 0.1);
}

.liya-ai-env-vuejs-scene {
  flex: 1;
  position: relative;
  overflow: hidden;
}

.liya-ai-env-vuejs-subtitle {
  position: absolute;
  bottom: 140px;
  left: 50%;
  transform: translateX(-50%);
  max-width: 80%;
  padding: 16px 28px;
  background: rgba(0, 0, 0, 0.75);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  z-index: 5;
}

.liya-ai-env-vuejs-subtitle__text {
  color: #fff;
  font-size: 16px;
  line-height: 1.6;
  text-align: center;
  margin: 0;
}

.liya-ai-env-vuejs-subtitle__welcome {
  color: rgba(255, 255, 255, 0.7);
}

.liya-ai-env-vuejs-thinking-dots {
  display: flex;
  gap: 6px;
  justify-content: center;
}

.liya-ai-env-vuejs-thinking-dot {
  width: 8px;
  height: 8px;
  background: #6366f1;
  border-radius: 50%;
  animation: liya-ai-env-vuejs-bounce 1.4s infinite ease-in-out both;
}

.liya-ai-env-vuejs-thinking-dot:nth-child(1) { animation-delay: -0.32s; }
.liya-ai-env-vuejs-thinking-dot:nth-child(2) { animation-delay: -0.16s; }

@keyframes liya-ai-env-vuejs-bounce {
  0%, 80%, 100% { transform: scale(0); }
  40% { transform: scale(1); }
}

.liya-ai-env-vuejs-controls {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 28px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 14px;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.85) 0%, transparent 100%);
  z-index: 5;
}

.liya-ai-env-vuejs-controls__mic {
  width: 72px;
  height: 72px;
  border-radius: 50%;
  border: none;
  background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
  color: #fff;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  box-shadow: 0 4px 20px rgba(99, 102, 241, 0.4);
}

.liya-ai-env-vuejs-controls__mic:hover:not(:disabled) {
  transform: scale(1.05);
  box-shadow: 0 6px 25px rgba(99, 102, 241, 0.5);
}

.liya-ai-env-vuejs-controls__mic--active {
  background: linear-gradient(135deg, #ef4444 0%, #f97316 100%);
  animation: liya-ai-env-vuejs-mic-pulse 1.5s ease-in-out infinite;
  box-shadow: 0 4px 20px rgba(239, 68, 68, 0.4);
}

@keyframes liya-ai-env-vuejs-mic-pulse {
  0%, 100% { box-shadow: 0 4px 20px rgba(239, 68, 68, 0.4); }
  50% { box-shadow: 0 4px 35px rgba(239, 68, 68, 0.6); }
}

.liya-ai-env-vuejs-controls__mic--disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.liya-ai-env-vuejs-controls__mic--not-supported {
  opacity: 0.6;
  background: linear-gradient(135deg, #9ca3af 0%, #6b7280 100%);
  box-shadow: 0 4px 20px rgba(107, 114, 128, 0.3);
}

.liya-ai-env-vuejs-controls__toast {
  position: absolute;
  bottom: 100px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 20px;
  background: rgba(239, 68, 68, 0.95);
  color: white;
  border-radius: 12px;
  font-size: 14px;
  font-weight: 500;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
  z-index: 100;
  white-space: nowrap;
}

.liya-ai-env-vuejs-toast-enter-active,
.liya-ai-env-vuejs-toast-leave-active {
  transition: all 0.3s ease;
}

.liya-ai-env-vuejs-toast-enter-from,
.liya-ai-env-vuejs-toast-leave-to {
  opacity: 0;
  transform: translateX(-50%) translateY(20px);
}

.liya-ai-env-vuejs-controls__hint {
  color: rgba(255, 255, 255, 0.6);
  font-size: 14px;
  margin: 0;
}

/* Responsive */
@media (max-width: 768px) {
  .liya-ai-env-vuejs-header {
    padding: 12px 16px;
  }

  .liya-ai-env-vuejs-header__title {
    font-size: 16px;
  }

  .liya-ai-env-vuejs-header__brand {
    display: none;
  }

  .liya-ai-env-vuejs-subtitle {
    max-width: 90%;
    padding: 12px 20px;
    bottom: 120px;
  }

  .liya-ai-env-vuejs-subtitle__text {
    font-size: 14px;
  }

  .liya-ai-env-vuejs-controls {
    padding: 20px;
  }

  .liya-ai-env-vuejs-controls__mic {
    width: 64px;
    height: 64px;
  }
}

/* Access Loading Styles */
.liya-ai-env-vuejs-access-loading {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--liya-env-bg-gradient, linear-gradient(180deg, #1a1a2e 0%, #16213e 100%));
  z-index: 10;
}

.liya-ai-env-vuejs-access-loading__spinner {
  width: 40px;
  height: 40px;
  border: 3px solid rgba(99, 102, 241, 0.2);
  border-top-color: #6366f1;
  border-radius: 50%;
  animation: liya-ai-env-vuejs-access-spin 0.8s linear infinite;
}

@keyframes liya-ai-env-vuejs-access-spin {
  to { transform: rotate(360deg); }
}

/* Premium Overlay Styles */
.liya-ai-env-vuejs-premium-overlay {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, rgba(245, 158, 11, 0.1) 0%, rgba(217, 119, 6, 0.15) 100%);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  z-index: 10;
}

.liya-ai-env-vuejs-premium-overlay__content {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 32px;
  max-width: 340px;
}

.liya-ai-env-vuejs-premium-overlay__icon {
  width: 72px;
  height: 72px;
  border-radius: 50%;
  background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  box-shadow: 0 8px 24px rgba(245, 158, 11, 0.4);
  color: white;
}

.liya-ai-env-vuejs-premium-overlay__icon svg {
  width: 48px;
  height: 48px;
  fill: currentColor;
  flex-shrink: 0;
}

.liya-ai-env-vuejs-premium-overlay__title {
  font-size: 20px;
  font-weight: 700;
  color: #fff;
  margin: 0 0 10px 0;
}

.liya-ai-env-vuejs-premium-overlay__text {
  font-size: 14px;
  color: rgba(255, 255, 255, 0.7);
  margin: 0 0 24px 0;
  line-height: 1.6;
}

.liya-ai-env-vuejs-premium-overlay__btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 12px 24px;
  border-radius: 12px;
  background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);
  color: white;
  font-size: 15px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.2s ease;
  box-shadow: 0 4px 12px rgba(245, 158, 11, 0.3);
}

.liya-ai-env-vuejs-premium-overlay__btn svg {
  width: 16px;
  height: 16px;
  fill: currentColor;
  flex-shrink: 0;
}

.liya-ai-env-vuejs-premium-overlay__btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(245, 158, 11, 0.5);
}
</style>
