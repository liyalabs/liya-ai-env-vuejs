/**
 * ==================================================
 * ██╗     ██╗██╗   ██╗ █████╗ 
 * ██║     ██║╚██╗ ██╔╝██╔══██╗
 * ██║     ██║ ╚████╔╝ ███████║
 * ██║     ██║  ╚██╔╝  ██╔══██║
 * ███████╗██║   ██║   ██║  ██║
 * ╚══════╝╚═╝   ╚═╝   ╚═╝  ╚═╝
 *        AI Assistant
 * ==================================================
 * Author / Creator : Mahmut Denizli (With help of LiyaAi)
 * License          : MIT
 * Connect          : liyalabs.com, info@liyalabs.com
 * ==================================================
 */
<script setup lang="ts">
import { ref, computed, watch, nextTick, onMounted, onUnmounted } from 'vue'
import LiyaAiEnvVuejsClassroomScene from './ClassroomScene.vue'
import type { 
  LiyaAiEnvVuejsThemeConfig,
  LiyaAiEnvVuejsPosition,
  LiyaAiEnvVuejsCameraConfig
} from '../../types'
import { useLiyaAiEnvVuejsEnvironment } from '../../composables/useEnvironment'
import { useLiyaAiEnvVuejsVoice } from '../../composables/useVoice'
import { liyaAiEnvVuejsCheckBrowserCompatibility } from '../../composables/useBrowserCompat'
import { useLiyaAiEnvVuejsAvatarColors } from '../../composables/useAvatarColors'
import { liyaAiEnvVuejsGetAvatarModel, liyaAiEnvVuejsGetSceneBackground, liyaAiEnvVuejsCheckUserAccess, liyaAiEnvVuejsGetPresentations, liyaAiEnvVuejsGetConfig } from '../../api'
import { useLiyaAiEnvVuejsI18n } from '../../i18n'

interface Props {
  isOpen?: boolean
  showBackButton?: boolean
  showCloseButton?: boolean
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
  isOpen: false,
  showBackButton: false,
  showCloseButton: true,
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
  close: []
  back: []
  opened: []
  closed: []
  loaded: []
  'message-sent': [message: string]
  'message-received': [message: string]
  'speaking-started': []
  'speaking-ended': []
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
  lastApiErrorCode,
  clearApiError,
  handleMessage,
  speakWithAvatar,
  stopAudio,
  setListening,
  addWelcomeMessage,
  updateWelcomeMessage,
  setPresentation,
  cleanup
} = useLiyaAiEnvVuejsEnvironment()

// Welcome message flag - only speak once per session
const liyaAiEnvVuejsHasPlayedWelcome = ref(false)

const { t: liyaAiEnvVuejsT, locale: liyaAiEnvVuejsLocale, setLocale: liyaAiEnvVuejsSetLocale } = useLiyaAiEnvVuejsI18n()

function liyaAiEnvVuejsToggleLocale(): void {
  const newLocale = liyaAiEnvVuejsLocale.value === 'tr' ? 'en' : 'tr'
  liyaAiEnvVuejsSetLocale(newLocale)
}

const {
  isRecording,
  transcript,
  isSupported: isVoiceSupported,
  startRecording,
  stopRecording,
  checkMicPermission,
  requestMicPermission
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
const liyaAiEnvVuejsIsLoadingAvatar = ref(false)

// Access control state
const liyaAiEnvVuejsIsCheckingAccess = ref(true)
const liyaAiEnvVuejsAccessError = ref<{ code: string; message: string } | null>(null)
const liyaAiEnvVuejsHasAccessError = computed(() => liyaAiEnvVuejsAccessError.value !== null)

// Browser compatibility state
const liyaAiEnvVuejsIsBrowserSupported = ref(true)
const liyaAiEnvVuejsBrowserCompatReason = ref<string | undefined>(undefined)

// Microphone permission gate state
const liyaAiEnvVuejsIsMicPermissionPending = ref(false)

// Settings panel visibility state
const liyaAiEnvVuejsIsSettingsPanelOpen = ref(false)

// Avatar colors composable
const { colors: liyaAiEnvVuejsAvatarColors, presets: liyaAiEnvVuejsColorPresets, currentPresetId: liyaAiEnvVuejsCurrentPresetId, setPreset: liyaAiEnvVuejsSetPreset, setColor: liyaAiEnvVuejsSetColor, reset: liyaAiEnvVuejsResetColors, init: liyaAiEnvVuejsInitColors } = useLiyaAiEnvVuejsAvatarColors()

// ClassroomScene ref for color application
const liyaAiEnvVuejsClassroomSceneRef = ref<InstanceType<typeof LiyaAiEnvVuejsClassroomScene> | null>(null)

// Apply colors when avatar is loaded
function liyaAiEnvVuejsOnAvatarLoaded(): void {
  liyaAiEnvVuejsApplyCurrentColors()
  emit('opened')
}

// Apply current colors to avatar
function liyaAiEnvVuejsApplyCurrentColors(): void {
  if (liyaAiEnvVuejsClassroomSceneRef.value?.applyOutfitColors) {
    liyaAiEnvVuejsClassroomSceneRef.value.applyOutfitColors({
      top: liyaAiEnvVuejsAvatarColors.value.top,
      bottom: liyaAiEnvVuejsAvatarColors.value.bottom,
      footwear: liyaAiEnvVuejsAvatarColors.value.footwear
    })
  }
}

// Watch for color changes and apply them
watch(liyaAiEnvVuejsAvatarColors, () => {
  liyaAiEnvVuejsApplyCurrentColors()
}, { deep: true })

const liyaAiEnvVuejsAccessErrorMessage = computed(() => {
  if (!liyaAiEnvVuejsAccessError.value) return ''
  const code = liyaAiEnvVuejsAccessError.value.code
  if (code === 'PREMIUM_PLUS_REQUIRED') {
    return liyaAiEnvVuejsT.value.premium.upgradePremiumPlus
  }
  return liyaAiEnvVuejsT.value.premium.upgradePremium
})

// Ensure URL uses HTTPS for security (Mixed Content fix)
function liyaAiEnvVuejsEnsureHttps(url: string): string {
  if (!url) return url
  return url.replace(/^http:\/\//i, 'https://')
}

// Default welcome suggestions (reactive, from i18n)
const LIYA_AI_ENV_VUEJS_WELCOME_SUGGESTIONS = computed(() => liyaAiEnvVuejsT.value.welcomeSuggestions)

// Chat input
const liyaAiEnvVuejsChatInput = ref('')

// Debounce for button actions (3 seconds)
const LIYA_AI_ENV_VUEJS_ACTION_DEBOUNCE_MS = 3000
let liyaAiEnvVuejsLastActionTime = 0

// Patience tooltip state (shown when user clicks too fast)
const liyaAiEnvVuejsPatienceTooltipVisible = ref(false)
const liyaAiEnvVuejsPatienceTooltipText = ref('')
let liyaAiEnvVuejsPatienceTooltipTimer: ReturnType<typeof setTimeout> | null = null

function liyaAiEnvVuejsShowPatienceTooltip(): void {
  // Pick a random tooltip message
  const tooltips = liyaAiEnvVuejsT.value.patienceTooltips
  const randomIndex = Math.floor(Math.random() * tooltips.length)
  liyaAiEnvVuejsPatienceTooltipText.value = tooltips[randomIndex]
  liyaAiEnvVuejsPatienceTooltipVisible.value = true
  
  // Clear existing timer
  if (liyaAiEnvVuejsPatienceTooltipTimer) {
    clearTimeout(liyaAiEnvVuejsPatienceTooltipTimer)
  }
  
  // Hide after 2 seconds
  liyaAiEnvVuejsPatienceTooltipTimer = setTimeout(() => {
    liyaAiEnvVuejsPatienceTooltipVisible.value = false
  }, 2000)
}

// Status indicator
type LiyaAiEnvVuejsStatus = 'idle' | 'listening' | 'preparing' | 'speaking'
const liyaAiEnvVuejsStatus = computed<LiyaAiEnvVuejsStatus>(() => {
  if (isSpeaking.value) return 'speaking'
  if (isProcessing.value) return 'preparing'
  if (isRecording.value) return 'listening'
  return 'idle'
})

// Rotating fun messages for long processing (reactive, from i18n)
const LIYA_AI_ENV_VUEJS_PREPARING_MESSAGES = computed(() => liyaAiEnvVuejsT.value.preparingMessages)
const liyaAiEnvVuejsPreparingIndex = ref(0)
const liyaAiEnvVuejsPreparingStartTime = ref(0)
let liyaAiEnvVuejsPreparingTimer: ReturnType<typeof setInterval> | null = null

watch(isProcessing, (processing) => {
  if (processing) {
    liyaAiEnvVuejsPreparingIndex.value = 0
    liyaAiEnvVuejsPreparingStartTime.value = Date.now()
    liyaAiEnvVuejsPreparingTimer = setInterval(() => {
      const elapsed = Date.now() - liyaAiEnvVuejsPreparingStartTime.value
      if (elapsed > 8000) {
        liyaAiEnvVuejsPreparingIndex.value = 
          (liyaAiEnvVuejsPreparingIndex.value + 1) % LIYA_AI_ENV_VUEJS_PREPARING_MESSAGES.value.length
      }
    }, 4000)
  } else {
    if (liyaAiEnvVuejsPreparingTimer) {
      clearInterval(liyaAiEnvVuejsPreparingTimer)
      liyaAiEnvVuejsPreparingTimer = null
    }
    liyaAiEnvVuejsPreparingIndex.value = 0
  }
})

const liyaAiEnvVuejsStatusText = computed(() => {
  switch (liyaAiEnvVuejsStatus.value) {
    case 'listening': return liyaAiEnvVuejsT.value.status.listening
    case 'preparing': return LIYA_AI_ENV_VUEJS_PREPARING_MESSAGES.value[liyaAiEnvVuejsPreparingIndex.value]
    case 'speaking': return liyaAiEnvVuejsT.value.status.speaking
    default: return liyaAiEnvVuejsT.value.status.ready
  }
})

// Cancel current action
function liyaAiEnvVuejsCancelAction(): void {
  const now = Date.now()
  if (now - liyaAiEnvVuejsLastActionTime < LIYA_AI_ENV_VUEJS_ACTION_DEBOUNCE_MS) {
    liyaAiEnvVuejsShowPatienceTooltip()
    return
  }
  liyaAiEnvVuejsLastActionTime = now
  
  if (isRecording.value) {
    stopRecording()
    setListening(false)
  }
  // Note: Audio stop would be handled by useEnvironment
}

// Refresh/replay last message from local state (no chat API call, only TTS)
function liyaAiEnvVuejsRefreshAction(): void {
  const now = Date.now()
  if (now - liyaAiEnvVuejsLastActionTime < LIYA_AI_ENV_VUEJS_ACTION_DEBOUNCE_MS) {
    liyaAiEnvVuejsShowPatienceTooltip()
    return
  }
  liyaAiEnvVuejsLastActionTime = now
  
  // Stop any current speech first
  if (isSpeaking.value) {
    stopAudio()
  }
  
  // Find last assistant message and replay via TTS only
  const lastAssistantMessage = messages.value
    .filter(m => m.role === 'assistant')
    .pop()
  
  if (lastAssistantMessage) {
    let textToSpeak = lastAssistantMessage.content
    try {
      const parsed = JSON.parse(lastAssistantMessage.content)
      if (typeof parsed?.response === 'string') {
        textToSpeak = parsed.response
      } else if (typeof parsed?.answer === 'string') {
        textToSpeak = parsed.answer
      }
    } catch {
      // JSON parse failed — try regex extraction for malformed JSON
      const responseMatch = lastAssistantMessage.content.match(/"(?:response|answer)"\s*:\s*"((?:[^"\\]|\\.)*)"/);
      if (responseMatch) {
        try {
          textToSpeak = JSON.parse(`"${responseMatch[1]}"`)
        } catch {
          textToSpeak = responseMatch[1]
        }
      }
    }
    speakWithAvatar(textToSpeak)
  }
}

// Parse JSON response to extract response text
function liyaAiEnvVuejsFormatMessageContent(content: string): string {
  try {
    const parsed = JSON.parse(content)
    if (typeof parsed?.response === 'string') {
      return parsed.response
    }
    if (typeof parsed?.answer === 'string') {
      return parsed.answer
    }
  } catch {
    // JSON parse failed — try regex extraction for malformed JSON
    const responseMatch = content.match(/"(?:response|answer)"\s*:\s*"((?:[^"\\]|\\.)*)"/);
    if (responseMatch) {
      try {
        return JSON.parse(`"${responseMatch[1]}"`)
      } catch {
        return responseMatch[1]
      }
    }
  }
  return content
}

// Parse suggestions from JSON response
function liyaAiEnvVuejsParseSuggestions(content: string): string[] {
  try {
    const parsed = JSON.parse(content)
    if (Array.isArray(parsed?.suggestions)) {
      return parsed.suggestions
    }
  } catch {
    // JSON parse failed — try regex extraction for malformed JSON
    const suggestionsMatch = content.match(/"suggestions"\s*:\s*\[((?:[^\[\]])*?)\]/)
    if (suggestionsMatch) {
      try {
        return JSON.parse(`[${suggestionsMatch[1]}]`)
      } catch { /* ignore */ }
    }
  }
  return []
}

// Computed messages with parsed content
interface LiyaAiEnvVuejsParsedMessage {
  role: 'user' | 'assistant'
  content: string
  suggestions: string[]
}

const liyaAiEnvVuejsParsedMessages = computed<LiyaAiEnvVuejsParsedMessage[]>(() => {
  // Read welcome suggestions eagerly to ensure Vue tracks this dependency
  const defaultSuggestions = LIYA_AI_ENV_VUEJS_WELCOME_SUGGESTIONS.value

  const parsed = messages.value.map(msg => {
    const apiSuggestions = msg.role === 'assistant' ? liyaAiEnvVuejsParseSuggestions(msg.content) : []
    return {
      role: msg.role,
      content: liyaAiEnvVuejsFormatMessageContent(msg.content),
      suggestions: apiSuggestions
    }
  })
  
  // If only welcome message exists (first assistant msg), add default suggestions
  if (parsed.length === 1 && parsed[0].role === 'assistant' && parsed[0].suggestions.length === 0) {
    parsed[0].suggestions = defaultSuggestions
  }
  
  return parsed
})

// Chat messages container ref for auto-scroll
const liyaAiEnvVuejsMessagesRef = ref<HTMLDivElement | null>(null)

// Auto-scroll to bottom when messages change
function liyaAiEnvVuejsScrollToBottom(): void {
  nextTick(() => {
    if (liyaAiEnvVuejsMessagesRef.value) {
      liyaAiEnvVuejsMessagesRef.value.scrollTop = liyaAiEnvVuejsMessagesRef.value.scrollHeight
    }
  })
}

// Watch for message changes to auto-scroll
watch(() => messages.value.length, () => {
  liyaAiEnvVuejsScrollToBottom()
})

// Handle suggestion click
function liyaAiEnvVuejsHandleSuggestionClick(suggestion: string): void {
  liyaAiEnvVuejsHandleSendMessage(suggestion)
  liyaAiEnvVuejsScrollToBottom()
}

// Handle chat form submit
async function liyaAiEnvVuejsHandleChatSubmit(): Promise<void> {
  const message = liyaAiEnvVuejsChatInput.value.trim()
  if (!message) return
  
  liyaAiEnvVuejsChatInput.value = ''
  liyaAiEnvVuejsScrollToBottom()
  await liyaAiEnvVuejsHandleSendMessage(message)
}

// Check user access before loading any resources
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
      // Non-premium error, assume no access
      liyaAiEnvVuejsAccessError.value = {
        code: 'FEATURE_NOT_AVAILABLE',
        message: liyaAiEnvVuejsT.value.premium.upgradePremium
      }
    }
  } finally {
    liyaAiEnvVuejsIsCheckingAccess.value = false
  }
}

// Load avatar model from API when modal opens
async function liyaAiEnvVuejsLoadAvatarModel(): Promise<void> {
  if (liyaAiEnvVuejsAvatarModelUrl.value) return // Already have URL
  
  liyaAiEnvVuejsIsLoadingAvatar.value = true
  try {
    const response = await liyaAiEnvVuejsGetAvatarModel()
    liyaAiEnvVuejsAvatarModelUrl.value = liyaAiEnvVuejsEnsureHttps(response.model_url)
  } catch (error) { /* avatar model not available */ } finally {
    liyaAiEnvVuejsIsLoadingAvatar.value = false
  }
}

// Load scene background from API
async function liyaAiEnvVuejsLoadSceneBackground(): Promise<void> {
  if (liyaAiEnvVuejsSceneModelUrl.value) return // Already have URL from prop
  
  try {
    const response = await liyaAiEnvVuejsGetSceneBackground()
    liyaAiEnvVuejsSceneModelUrl.value = liyaAiEnvVuejsEnsureHttps(response.model_url)
  } catch (error) { /* will use default programmatic environment as fallback */ }
}

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

// Append api_key query param to image URL for <img src> access
function liyaAiEnvVuejsAuthImageUrl(url: string | null): string | null {
  if (!url) return null
  try {
    const config = liyaAiEnvVuejsGetConfig()
    const separator = url.includes('?') ? '&' : '?'
    return `${url}${separator}api_key=${config.apiKey}`
  } catch {
    return url
  }
}

// Load presentations and show first page on the board
async function liyaAiEnvVuejsLoadInitialPresentation(): Promise<void> {
  try {
    const presentations = await liyaAiEnvVuejsGetPresentations()
    if (presentations.length > 0) {
      const firstPres = presentations[0]
      if (firstPres.pages && firstPres.pages.length > 0) {
        const firstPage = firstPres.pages[0]
        setPresentation({
          success: true,
          action: 'show_page',
          presentation_id: firstPres.id,
          presentation_title: firstPres.title,
          page_number: firstPage.page_number,
          page_title: firstPage.title,
          page_image_url: liyaAiEnvVuejsAuthImageUrl(firstPage.image_url),
          total_pages: firstPres.total_pages,
          reason: 'initial_load'
        })
      }
    }
  } catch (error) { /* initial presentations not available */ }
}

// Watch for open state: check access first, then load avatar model, then speak welcome
watch(() => props.isOpen, async (open) => {
  if (open) {
    // Check browser compatibility first
    const compat = liyaAiEnvVuejsCheckBrowserCompatibility()
    liyaAiEnvVuejsIsBrowserSupported.value = compat.supported
    liyaAiEnvVuejsBrowserCompatReason.value = compat.reason
    
    if (!compat.supported) {
      liyaAiEnvVuejsIsCheckingAccess.value = false
      return
    }
    
    // Request microphone permission early (before user clicks mic button)
    if (isVoiceSupported.value) {
      const status = await checkMicPermission()
      if (status === 'prompt') {
        liyaAiEnvVuejsIsMicPermissionPending.value = true
      }
    }
    
    await liyaAiEnvVuejsCheckAccess()
    if (!liyaAiEnvVuejsHasAccessError.value) {
      await Promise.all([
        liyaAiEnvVuejsLoadAvatarModel(),
        liyaAiEnvVuejsLoadSceneBackground(),
        liyaAiEnvVuejsLoadInitialPresentation()
      ])
      
      // Add welcome message to chat and speak on first open
      if (!liyaAiEnvVuejsHasPlayedWelcome.value && liyaAiEnvVuejsResolvedWelcome.value) {
        liyaAiEnvVuejsHasPlayedWelcome.value = true
        addWelcomeMessage(liyaAiEnvVuejsResolvedWelcome.value)
        // Speak after short delay
        setTimeout(() => {
          speakWithAvatar(liyaAiEnvVuejsResolvedWelcome.value)
        }, 500)
      }
    }
    emit('opened')
  } else {
    emit('closed')
  }
}, { immediate: true })

// Watch locale changes - update welcome message and re-speak
watch(liyaAiEnvVuejsLocale, () => {
  // Update the welcome message content via composable
  updateWelcomeMessage(liyaAiEnvVuejsResolvedWelcome.value)
  // Stop any current audio and re-speak in new language
  stopAudio()
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

function liyaAiEnvVuejsHandleClose(): void {
  cleanup()
  emit('close')
}

// Handle mic permission request
async function liyaAiEnvVuejsHandleMicPermissionRequest(): Promise<void> {
  await requestMicPermission()
  liyaAiEnvVuejsIsMicPermissionPending.value = false
}

function liyaAiEnvVuejsHandleKeydown(e: KeyboardEvent): void {
  if (e.key === 'Escape') {
    liyaAiEnvVuejsHandleClose()
  }
}

onMounted(() => {
  document.addEventListener('keydown', liyaAiEnvVuejsHandleKeydown)
  // Initialize avatar colors from localStorage
  liyaAiEnvVuejsInitColors()
})

onUnmounted(() => {
  document.removeEventListener('keydown', liyaAiEnvVuejsHandleKeydown)
  // Safari fix: Clear preparing timer to prevent memory leak
  if (liyaAiEnvVuejsPreparingTimer) {
    clearInterval(liyaAiEnvVuejsPreparingTimer)
    liyaAiEnvVuejsPreparingTimer = null
  }
  // Clear patience tooltip timer
  if (liyaAiEnvVuejsPatienceTooltipTimer) {
    clearTimeout(liyaAiEnvVuejsPatienceTooltipTimer)
    liyaAiEnvVuejsPatienceTooltipTimer = null
  }
  cleanup()
})
</script>

<template>
  <Teleport to="body">
    <Transition name="liya-ai-env-vuejs-modal">
      <div 
        v-if="isOpen" 
        class="liya-ai-env-vuejs-modal-overlay"
        @click.self="liyaAiEnvVuejsHandleClose"
      >
        <div class="liya-ai-env-vuejs-modal-container">
          <!-- Header -->
          <header class="liya-ai-env-vuejs-header">
            <div class="liya-ai-env-vuejs-header__title">
              <div 
                class="liya-ai-env-vuejs-status-dot"
                :class="{ 'liya-ai-env-vuejs-status-dot--speaking': isSpeaking }"
              ></div>
              <span>{{ liyaAiEnvVuejsResolvedName }}</span>
            </div>
            <div class="liya-ai-env-vuejs-header__actions">
              <button 
                class="liya-ai-env-vuejs-header__lang-btn"
                @click="liyaAiEnvVuejsToggleLocale"
                :title="liyaAiEnvVuejsLocale === 'tr' ? 'Switch to English' : 'Türkçe\'ye geç'"
              >
                <span class="liya-ai-env-vuejs-header__lang-text">{{ liyaAiEnvVuejsLocale === 'tr' ? 'EN' : 'TR' }}</span>
              </button>
              <!-- Settings Button -->
              <button 
                class="liya-ai-env-vuejs-header__settings-btn"
                :class="{ 'liya-ai-env-vuejs-header__settings-btn--active': liyaAiEnvVuejsIsSettingsPanelOpen }"
                @click="liyaAiEnvVuejsIsSettingsPanelOpen = !liyaAiEnvVuejsIsSettingsPanelOpen"
                :title="liyaAiEnvVuejsT.settings.title"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                  <path d="M19.14 12.94c.04-.31.06-.63.06-.94 0-.31-.02-.63-.06-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.04.31-.06.63-.06.94s.02.63.06.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"/>
                </svg>
              </button>
              <button 
                v-if="showCloseButton"
                class="liya-ai-env-vuejs-header__close-btn"
                @click="liyaAiEnvVuejsHandleClose"
                :aria-label="liyaAiEnvVuejsT.controls.close"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
                  <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
                </svg>
              </button>
            </div>
          </header>
          
          <!-- Settings Panel -->
          <Transition name="liya-ai-env-vuejs-settings-panel">
            <div v-if="liyaAiEnvVuejsIsSettingsPanelOpen" class="liya-ai-env-vuejs-settings-panel">
              <div class="liya-ai-env-vuejs-settings-panel__header">
                <h3 class="liya-ai-env-vuejs-settings-panel__title">{{ liyaAiEnvVuejsT.settings.outfitColors }}</h3>
                <button 
                  class="liya-ai-env-vuejs-settings-panel__close"
                  @click="liyaAiEnvVuejsIsSettingsPanelOpen = false"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
                  </svg>
                </button>
              </div>
              
              <!-- Presets -->
              <div class="liya-ai-env-vuejs-settings-panel__section">
                <label class="liya-ai-env-vuejs-settings-panel__label">{{ liyaAiEnvVuejsT.settings.presets }}</label>
                <div class="liya-ai-env-vuejs-settings-panel__presets">
                  <button
                    v-for="preset in liyaAiEnvVuejsColorPresets"
                    :key="preset.id"
                    class="liya-ai-env-vuejs-settings-panel__preset"
                    :class="{ 'liya-ai-env-vuejs-settings-panel__preset--active': liyaAiEnvVuejsCurrentPresetId === preset.id }"
                    :style="{ background: preset.top }"
                    :title="preset.name"
                    @click="liyaAiEnvVuejsSetPreset(preset.id)"
                  ></button>
                </div>
              </div>
              
              <!-- Custom Colors -->
              <div class="liya-ai-env-vuejs-settings-panel__section">
                <label class="liya-ai-env-vuejs-settings-panel__label">{{ liyaAiEnvVuejsT.settings.customColor }}</label>
                <div class="liya-ai-env-vuejs-settings-panel__colors">
                  <div class="liya-ai-env-vuejs-settings-panel__color-row">
                    <span>{{ liyaAiEnvVuejsT.settings.top }}</span>
                    <input type="color" :value="liyaAiEnvVuejsAvatarColors.top" @input="(e) => liyaAiEnvVuejsSetColor('top', (e.target as HTMLInputElement).value)" />
                  </div>
                  <div class="liya-ai-env-vuejs-settings-panel__color-row">
                    <span>{{ liyaAiEnvVuejsT.settings.bottom }}</span>
                    <input type="color" :value="liyaAiEnvVuejsAvatarColors.bottom" @input="(e) => liyaAiEnvVuejsSetColor('bottom', (e.target as HTMLInputElement).value)" />
                  </div>
                  <div class="liya-ai-env-vuejs-settings-panel__color-row">
                    <span>{{ liyaAiEnvVuejsT.settings.footwear }}</span>
                    <input type="color" :value="liyaAiEnvVuejsAvatarColors.footwear" @input="(e) => liyaAiEnvVuejsSetColor('footwear', (e.target as HTMLInputElement).value)" />
                  </div>
                </div>
              </div>
              
              <!-- Reset Button -->
              <button 
                class="liya-ai-env-vuejs-settings-panel__reset"
                @click="liyaAiEnvVuejsResetColors"
              >
                {{ liyaAiEnvVuejsT.settings.reset }}
              </button>
            </div>
          </Transition>

          <!-- Mic Permission Banner -->
          <div v-if="liyaAiEnvVuejsIsMicPermissionPending" class="liya-ai-env-vuejs-mic-permission">
            <div class="liya-ai-env-vuejs-mic-permission__icon">
              <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
                <path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm-1-9c0-.55.45-1 1-1s1 .45 1 1v6c0 .55-.45 1-1 1s-1-.45-1-1V5zm6 6c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z"/>
              </svg>
            </div>
            <div class="liya-ai-env-vuejs-mic-permission__text">
              <span class="liya-ai-env-vuejs-mic-permission__title">{{ liyaAiEnvVuejsT.mic.permissionRequired }}</span>
              <span class="liya-ai-env-vuejs-mic-permission__desc">{{ liyaAiEnvVuejsT.mic.permissionMessage }}</span>
            </div>
            <button 
              class="liya-ai-env-vuejs-mic-permission__btn"
              @click="liyaAiEnvVuejsHandleMicPermissionRequest"
            >
              {{ liyaAiEnvVuejsT.mic.allowButton }}
            </button>
          </div>

          <!-- Scene -->
          <div class="liya-ai-env-vuejs-scene">
            <!-- Browser Not Supported Overlay -->
            <div v-if="!liyaAiEnvVuejsIsBrowserSupported" class="liya-ai-env-vuejs-unsupported-overlay">
              <div class="liya-ai-env-vuejs-unsupported-overlay__content">
                <div class="liya-ai-env-vuejs-unsupported-overlay__icon">
                  <svg viewBox="0 0 24 24" fill="currentColor" width="48" height="48">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>
                  </svg>
                </div>
                <h3 class="liya-ai-env-vuejs-unsupported-overlay__title">{{ liyaAiEnvVuejsT.browser.unsupportedTitle }}</h3>
                <p class="liya-ai-env-vuejs-unsupported-overlay__text">{{ liyaAiEnvVuejsT.browser.unsupportedMessage }}</p>
                <p class="liya-ai-env-vuejs-unsupported-overlay__browsers">{{ liyaAiEnvVuejsT.browser.recommendedBrowsers }}</p>
              </div>
            </div>

            <!-- Access Loading Spinner -->
            <div v-else-if="liyaAiEnvVuejsIsCheckingAccess" class="liya-ai-env-vuejs-access-loading">
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
                ref="liyaAiEnvVuejsClassroomSceneRef"
                :classroom-model-url="liyaAiEnvVuejsSceneModelUrl"
                :avatar-model-url="liyaAiEnvVuejsAvatarModelUrl"
                :avatar-position="avatarPosition"
                :camera-config="cameraConfig"
                :is-speaking="isSpeaking"
                :visemes="visemes"
                :gestures="enableGestures ? gestures : []"
                :current-time="audioTime"
                :presentation-result="currentPresentation"
                @loaded="liyaAiEnvVuejsOnAvatarLoaded"
                @error="(e) => $emit('error', e)"
              />

              <!-- API Error Popup (Liquid Glass) -->
              <Transition name="liya-ai-env-vuejs-glass-fade">
                <div 
                  v-if="lastApiErrorCode" 
                  class="liya-ai-env-vuejs-glass-popup"
                >
                  <div class="liya-ai-env-vuejs-glass-popup__card">
                    <button 
                      class="liya-ai-env-vuejs-glass-popup__close"
                      @click="clearApiError"
                      :aria-label="liyaAiEnvVuejsT.controls.close"
                    >
                      <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                        <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
                      </svg>
                    </button>
                    <div class="liya-ai-env-vuejs-glass-popup__icon">⚠️</div>
                    <h4 class="liya-ai-env-vuejs-glass-popup__title">{{ liyaAiEnvVuejsT.errors.problemOccurred }}</h4>
                    <p class="liya-ai-env-vuejs-glass-popup__text">{{ liyaAiEnvVuejsT.errors.tryAgainLater }}</p>
                  </div>
                </div>
              </Transition>

              <!-- Status Indicator - Bottom Left -->
              <div 
                class="liya-ai-env-vuejs-status-indicator"
                :class="`liya-ai-env-vuejs-status-indicator--${liyaAiEnvVuejsStatus}`"
              >
                <span class="liya-ai-env-vuejs-status-indicator__dot"></span>
                <span class="liya-ai-env-vuejs-status-indicator__text">{{ liyaAiEnvVuejsStatusText }}</span>
                <!-- Cancel button (when not idle) -->
                <button 
                  v-if="liyaAiEnvVuejsStatus !== 'idle'"
                  class="liya-ai-env-vuejs-status-indicator__btn"
                  @click="liyaAiEnvVuejsCancelAction"
                  :title="liyaAiEnvVuejsT.controls.cancel"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
                  </svg>
                </button>
                <!-- Refresh button (when idle) -->
                <button 
                  v-if="liyaAiEnvVuejsStatus === 'idle' && messages.length > 0"
                  class="liya-ai-env-vuejs-status-indicator__btn"
                  @click="liyaAiEnvVuejsRefreshAction"
                  :title="liyaAiEnvVuejsT.controls.replay"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                    <path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"/>
                  </svg>
                </button>
                
                <!-- Patience Tooltip (shown when clicking too fast) -->
                <Transition name="liya-ai-env-vuejs-patience-tooltip">
                  <div 
                    v-if="liyaAiEnvVuejsPatienceTooltipVisible" 
                    class="liya-ai-env-vuejs-patience-tooltip"
                  >
                    {{ liyaAiEnvVuejsPatienceTooltipText }}
                  </div>
                </Transition>
              </div>

              <!-- Controls - Bottom Center -->
              <div class="liya-ai-env-vuejs-controls">
                <p class="liya-ai-env-vuejs-controls__label">{{ liyaAiEnvVuejsT.controls.pressAndSpeak }}</p>
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

              <!-- Chat Panel - Bottom Right (Liquid Glass) -->
              <div class="liya-ai-env-vuejs-chat-panel">
                <div class="liya-ai-env-vuejs-chat-panel__messages" ref="liyaAiEnvVuejsMessagesRef">
                  <div 
                    v-for="(msg, index) in liyaAiEnvVuejsParsedMessages" 
                    :key="index"
                    class="liya-ai-env-vuejs-chat-panel__message"
                    :class="{ 
                      'liya-ai-env-vuejs-chat-panel__message--user': msg.role === 'user',
                      'liya-ai-env-vuejs-chat-panel__message--assistant': msg.role === 'assistant'
                    }"
                  >
                    <span class="liya-ai-env-vuejs-chat-panel__role">
                      {{ msg.role === 'user' ? liyaAiEnvVuejsT.chat.userRole : liyaAiEnvVuejsResolvedName }}
                    </span>
                    <p>{{ msg.content }}</p>
                    <!-- Suggestions as clickable links -->
                    <div v-if="msg.suggestions.length > 0" class="liya-ai-env-vuejs-chat-panel__suggestions">
                      <button 
                        v-for="(suggestion, sIndex) in msg.suggestions" 
                        :key="sIndex"
                        class="liya-ai-env-vuejs-chat-panel__suggestion"
                        @click="liyaAiEnvVuejsHandleSuggestionClick(suggestion)"
                      >
                        {{ suggestion }}
                      </button>
                    </div>
                  </div>
                  <div v-if="liyaAiEnvVuejsParsedMessages.length === 0" class="liya-ai-env-vuejs-chat-panel__empty">
                    {{ liyaAiEnvVuejsResolvedWelcome }}
                  </div>
                </div>
                <form class="liya-ai-env-vuejs-chat-panel__input-form" @submit.prevent="liyaAiEnvVuejsHandleChatSubmit">
                  <input
                    v-model="liyaAiEnvVuejsChatInput"
                    type="text"
                    class="liya-ai-env-vuejs-chat-panel__input"
                    :placeholder="liyaAiEnvVuejsHasAccessError ? liyaAiEnvVuejsT.chat.premiumRequired : liyaAiEnvVuejsT.chat.placeholder"
                    :disabled="isProcessing || isSpeaking || liyaAiEnvVuejsHasAccessError"
                  />
                  <button 
                    type="submit" 
                    class="liya-ai-env-vuejs-chat-panel__send-btn"
                    :disabled="!liyaAiEnvVuejsChatInput.trim() || isProcessing || isSpeaking || liyaAiEnvVuejsHasAccessError"
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
                      <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
                    </svg>
                  </button>
                </form>
              </div>
            </template>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.liya-ai-env-vuejs-modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.85);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10000;
}

.liya-ai-env-vuejs-modal-container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.liya-ai-env-vuejs-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 24px;
  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  z-index: 10;
}

.liya-ai-env-vuejs-header__title {
  display: flex;
  align-items: center;
  gap: 12px;
  color: #fff;
  font-size: 18px;
  font-weight: 600;
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

.liya-ai-env-vuejs-header__actions {
  display: flex;
  align-items: center;
  gap: 4px;
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

.liya-ai-env-vuejs-header__close-btn {
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

.liya-ai-env-vuejs-header__close-btn svg {
  width: 24px;
  height: 24px;
  fill: currentColor;
  flex-shrink: 0;
}

.liya-ai-env-vuejs-header__close-btn:hover {
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
  z-index: 10;
  pointer-events: auto;
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
  position: relative;
  z-index: 10;
}

.liya-ai-env-vuejs-controls__mic svg {
  width: 32px;
  height: 32px;
  fill: currentColor;
  flex-shrink: 0;
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

.liya-ai-env-vuejs-controls__label {
  color: rgba(255, 255, 255, 0.7);
  font-size: 14px;
  font-weight: 500;
  margin: 0 0 8px 0;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.5);
}

/* Chat Panel - Liquid Glass Style */
.liya-ai-env-vuejs-chat-panel {
  position: absolute;
  bottom: 20px;
  right: 20px;
  width: 360px;
  max-height: 400px;
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.15);
  box-shadow: 
    0 8px 32px rgba(0, 0, 0, 0.3),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  z-index: 10;
}

.liya-ai-env-vuejs-chat-panel__messages {
  flex: 1;
  overflow-y: auto;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  max-height: 280px;
}

.liya-ai-env-vuejs-chat-panel__message {
  padding: 10px 14px;
  border-radius: 14px;
  max-width: 85%;
}

.liya-ai-env-vuejs-chat-panel__message--user {
  align-self: flex-end;
  background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
  color: #fff;
}

.liya-ai-env-vuejs-chat-panel__message--assistant {
  align-self: flex-start;
  background: rgba(255, 255, 255, 0.1);
  color: #fff;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.liya-ai-env-vuejs-chat-panel__role {
  display: block;
  font-size: 11px;
  font-weight: 600;
  opacity: 0.7;
  margin-bottom: 4px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.liya-ai-env-vuejs-chat-panel__message p {
  margin: 0;
  font-size: 14px;
  line-height: 1.5;
}

.liya-ai-env-vuejs-chat-panel__empty {
  color: rgba(255, 255, 255, 0.5);
  font-size: 14px;
  text-align: center;
  padding: 20px;
  font-style: italic;
}

/* Suggestions */
.liya-ai-env-vuejs-chat-panel__suggestions {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: 8px;
}

.liya-ai-env-vuejs-chat-panel__suggestion {
  padding: 6px 12px;
  font-size: 12px;
  color: rgba(255, 255, 255, 0.9);
  background: rgba(99, 102, 241, 0.3);
  border: 1px solid rgba(99, 102, 241, 0.4);
  border-radius: 16px;
  cursor: pointer;
  transition: all 0.2s ease;
}

.liya-ai-env-vuejs-chat-panel__suggestion:hover {
  background: rgba(99, 102, 241, 0.5);
  border-color: rgba(99, 102, 241, 0.6);
}

.liya-ai-env-vuejs-chat-panel__input-form {
  display: flex;
  gap: 8px;
  padding: 12px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(0, 0, 0, 0.2);
}

.liya-ai-env-vuejs-chat-panel__input {
  flex: 1;
  padding: 12px 16px;
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.08);
  color: #fff;
  font-size: 14px;
  outline: none;
  transition: all 0.2s ease;
}

.liya-ai-env-vuejs-chat-panel__input::placeholder {
  color: rgba(255, 255, 255, 0.4);
}

.liya-ai-env-vuejs-chat-panel__input:focus {
  border-color: rgba(99, 102, 241, 0.5);
  background: rgba(255, 255, 255, 0.12);
}

.liya-ai-env-vuejs-chat-panel__input:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.liya-ai-env-vuejs-chat-panel__send-btn {
  width: 44px;
  height: 44px;
  border: none;
  border-radius: 12px;
  background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
  color: #fff;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
}

.liya-ai-env-vuejs-chat-panel__send-btn svg {
  width: 24px;
  height: 24px;
  fill: currentColor;
  flex-shrink: 0;
}

.liya-ai-env-vuejs-chat-panel__send-btn:hover:not(:disabled) {
  transform: scale(1.05);
  box-shadow: 0 4px 15px rgba(99, 102, 241, 0.4);
}

.liya-ai-env-vuejs-chat-panel__send-btn:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}

/* Status Indicator - Liquid Glass Style */
.liya-ai-env-vuejs-status-indicator {
  position: absolute;
  bottom: 20px;
  left: 20px;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 16px;
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.15);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
  z-index: 10;
}

.liya-ai-env-vuejs-status-indicator__dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #22c55e;
  box-shadow: 0 0 8px rgba(34, 197, 94, 0.5);
}

.liya-ai-env-vuejs-status-indicator--listening .liya-ai-env-vuejs-status-indicator__dot {
  background: #ef4444;
  box-shadow: 0 0 8px rgba(239, 68, 68, 0.5);
  animation: liya-ai-env-vuejs-pulse 1.5s ease-in-out infinite;
}

.liya-ai-env-vuejs-status-indicator--preparing .liya-ai-env-vuejs-status-indicator__dot {
  background: #f59e0b;
  box-shadow: 0 0 8px rgba(245, 158, 11, 0.5);
  animation: liya-ai-env-vuejs-pulse 1s ease-in-out infinite;
}

.liya-ai-env-vuejs-status-indicator--speaking .liya-ai-env-vuejs-status-indicator__dot {
  background: #6366f1;
  box-shadow: 0 0 8px rgba(99, 102, 241, 0.5);
  animation: liya-ai-env-vuejs-pulse 0.8s ease-in-out infinite;
}

@keyframes liya-ai-env-vuejs-pulse {
  0%, 100% { transform: scale(1); opacity: 1; }
  50% { transform: scale(1.2); opacity: 0.7; }
}

.liya-ai-env-vuejs-status-indicator__text {
  color: rgba(255, 255, 255, 0.9);
  font-size: 13px;
  font-weight: 500;
}

.liya-ai-env-vuejs-status-indicator__btn {
  width: 32px;
  height: 32px;
  border: none;
  border-radius: 8px;
  background: rgba(99, 102, 241, 0.5);
  color: #fff;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  margin-left: 6px;
}

.liya-ai-env-vuejs-status-indicator__btn svg {
  width: 20px;
  height: 20px;
  fill: currentColor;
  flex-shrink: 0;
}

.liya-ai-env-vuejs-status-indicator__btn:hover {
  background: rgba(99, 102, 241, 0.7);
  color: #fff;
  transform: scale(1.05);
}

/* Patience Tooltip */
.liya-ai-env-vuejs-patience-tooltip {
  position: absolute;
  top: -50px;
  left: 50%;
  transform: translateX(-50%);
  background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);
  color: #fff;
  padding: 10px 16px;
  border-radius: 12px;
  font-size: 14px;
  font-weight: 500;
  white-space: nowrap;
  box-shadow: 0 4px 20px rgba(245, 158, 11, 0.4);
  z-index: 100;
  animation: liya-ai-env-vuejs-tooltip-bounce 0.5s ease;
}

.liya-ai-env-vuejs-patience-tooltip::after {
  content: '';
  position: absolute;
  bottom: -8px;
  left: 50%;
  transform: translateX(-50%);
  border-width: 8px 8px 0 8px;
  border-style: solid;
  border-color: #d97706 transparent transparent transparent;
}

@keyframes liya-ai-env-vuejs-tooltip-bounce {
  0% { transform: translateX(-50%) scale(0.5) translateY(10px); opacity: 0; }
  50% { transform: translateX(-50%) scale(1.1) translateY(-5px); }
  100% { transform: translateX(-50%) scale(1) translateY(0); opacity: 1; }
}

.liya-ai-env-vuejs-patience-tooltip-enter-active {
  animation: liya-ai-env-vuejs-tooltip-bounce 0.4s ease;
}

.liya-ai-env-vuejs-patience-tooltip-leave-active {
  transition: all 0.2s ease;
}

.liya-ai-env-vuejs-patience-tooltip-leave-to {
  opacity: 0;
  transform: translateX(-50%) translateY(-10px);
}

/* Transitions */
.liya-ai-env-vuejs-modal-enter-active,
.liya-ai-env-vuejs-modal-leave-active {
  transition: all 0.3s ease;
}

.liya-ai-env-vuejs-modal-enter-from,
.liya-ai-env-vuejs-modal-leave-to {
  opacity: 0;
}

.liya-ai-env-vuejs-modal-enter-from .liya-ai-env-vuejs-modal-container,
.liya-ai-env-vuejs-modal-leave-to .liya-ai-env-vuejs-modal-container {
  transform: scale(0.95);
}

/* Responsive */
@media (max-width: 768px) {
  .liya-ai-env-vuejs-header {
    padding: 12px 16px;
  }

  .liya-ai-env-vuejs-header__title {
    font-size: 16px;
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

/* Liquid Glass Error Popup */
.liya-ai-env-vuejs-glass-popup {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
  pointer-events: all;
}

.liya-ai-env-vuejs-glass-popup__card {
  position: relative;
  padding: 32px 36px;
  min-width: 300px;
  max-width: 380px;
  text-align: center;
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.12) 0%,
    rgba(255, 255, 255, 0.05) 50%,
    rgba(255, 255, 255, 0.08) 100%
  );
  backdrop-filter: blur(40px) saturate(1.8);
  -webkit-backdrop-filter: blur(40px) saturate(1.8);
  border-radius: 24px;
  border: 1px solid rgba(255, 255, 255, 0.25);
  box-shadow:
    0 8px 32px rgba(0, 0, 0, 0.3),
    0 0 0 1px rgba(255, 255, 255, 0.05) inset,
    0 1px 0 rgba(255, 255, 255, 0.2) inset;
  animation: liya-ai-env-vuejs-glass-in 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}

.liya-ai-env-vuejs-glass-popup__close {
  position: absolute;
  top: 12px;
  right: 12px;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  color: rgba(255, 255, 255, 0.7);
  cursor: pointer;
  transition: all 0.2s ease;
}

.liya-ai-env-vuejs-glass-popup__close:hover {
  background: rgba(255, 255, 255, 0.2);
  color: white;
  transform: scale(1.1);
}

.liya-ai-env-vuejs-glass-popup__icon {
  font-size: 40px;
  margin-bottom: 12px;
  filter: drop-shadow(0 2px 8px rgba(0, 0, 0, 0.3));
}

.liya-ai-env-vuejs-glass-popup__title {
  margin: 0 0 8px;
  font-size: 18px;
  font-weight: 700;
  color: rgba(255, 255, 255, 0.95);
  letter-spacing: -0.02em;
}

.liya-ai-env-vuejs-glass-popup__text {
  margin: 0;
  font-size: 14px;
  line-height: 1.5;
  color: rgba(255, 255, 255, 0.65);
}

@keyframes liya-ai-env-vuejs-glass-in {
  0% {
    opacity: 0;
    transform: scale(0.9) translateY(10px);
  }
  100% {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}

.liya-ai-env-vuejs-glass-fade-enter-active {
  transition: opacity 0.3s ease;
}
.liya-ai-env-vuejs-glass-fade-leave-active {
  transition: opacity 0.2s ease;
}
.liya-ai-env-vuejs-glass-fade-enter-from,
.liya-ai-env-vuejs-glass-fade-leave-to {
  opacity: 0;
}

/* Browser Not Supported Overlay */
.liya-ai-env-vuejs-unsupported-overlay {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, rgba(239, 68, 68, 0.1) 0%, rgba(185, 28, 28, 0.15) 100%);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  z-index: 10;
}

.liya-ai-env-vuejs-unsupported-overlay__content {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 32px;
  max-width: 380px;
}

.liya-ai-env-vuejs-unsupported-overlay__icon {
  width: 72px;
  height: 72px;
  border-radius: 50%;
  background: rgba(239, 68, 68, 0.15);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  box-shadow: 0 8px 24px rgba(239, 68, 68, 0.3);
  color: #ef4444;
}

.liya-ai-env-vuejs-unsupported-overlay__icon svg {
  width: 48px;
  height: 48px;
  fill: currentColor;
  flex-shrink: 0;
}

.liya-ai-env-vuejs-unsupported-overlay__title {
  font-size: 20px;
  font-weight: 700;
  color: #fff;
  margin: 0 0 10px 0;
}

.liya-ai-env-vuejs-unsupported-overlay__text {
  font-size: 14px;
  color: rgba(255, 255, 255, 0.7);
  margin: 0 0 12px 0;
  line-height: 1.6;
}

.liya-ai-env-vuejs-unsupported-overlay__browsers {
  font-size: 12px;
  color: rgba(255, 255, 255, 0.5);
  margin: 0;
}

/* Mic Permission Banner */
.liya-ai-env-vuejs-mic-permission {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 16px;
  background: linear-gradient(135deg, rgba(99, 102, 241, 0.15) 0%, rgba(139, 92, 246, 0.15) 100%);
  border-bottom: 1px solid rgba(99, 102, 241, 0.2);
}

.liya-ai-env-vuejs-mic-permission__icon {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(99, 102, 241, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #a5b4fc;
  flex-shrink: 0;
}

.liya-ai-env-vuejs-mic-permission__text {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.liya-ai-env-vuejs-mic-permission__title {
  font-size: 13px;
  font-weight: 600;
  color: #f1f5f9;
}

.liya-ai-env-vuejs-mic-permission__desc {
  font-size: 11px;
  color: #94a3b8;
}

.liya-ai-env-vuejs-mic-permission__btn {
  padding: 8px 16px;
  border: none;
  border-radius: 8px;
  background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
  color: white;
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  white-space: nowrap;
}

.liya-ai-env-vuejs-mic-permission__btn:hover {
  transform: scale(1.05);
  box-shadow: 0 4px 12px rgba(99, 102, 241, 0.4);
}

/* Settings Button */
.liya-ai-env-vuejs-header__settings-btn {
  width: 36px;
  height: 36px;
  border: none;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.7);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
}

.liya-ai-env-vuejs-header__settings-btn:hover {
  background: rgba(255, 255, 255, 0.2);
  color: white;
}

.liya-ai-env-vuejs-header__settings-btn--active {
  background: rgba(99, 102, 241, 0.3);
  color: #a5b4fc;
}

/* Settings Panel */
.liya-ai-env-vuejs-settings-panel {
  position: absolute;
  top: 70px;
  right: 16px;
  width: 280px;
  background: linear-gradient(135deg, rgba(30, 41, 59, 0.95) 0%, rgba(15, 23, 42, 0.98) 100%);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  padding: 16px;
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5);
  z-index: 100;
}

.liya-ai-env-vuejs-settings-panel__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
  padding-bottom: 12px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.liya-ai-env-vuejs-settings-panel__title {
  font-size: 14px;
  font-weight: 600;
  color: #f1f5f9;
  margin: 0;
}

.liya-ai-env-vuejs-settings-panel__close {
  width: 28px;
  height: 28px;
  border: none;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.6);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
}

.liya-ai-env-vuejs-settings-panel__close:hover {
  background: rgba(239, 68, 68, 0.2);
  color: #f87171;
}

.liya-ai-env-vuejs-settings-panel__section {
  margin-bottom: 16px;
}

.liya-ai-env-vuejs-settings-panel__label {
  display: block;
  font-size: 11px;
  font-weight: 500;
  color: #94a3b8;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 8px;
}

.liya-ai-env-vuejs-settings-panel__presets {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.liya-ai-env-vuejs-settings-panel__preset {
  width: 28px;
  height: 28px;
  border: 2px solid transparent;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
}

.liya-ai-env-vuejs-settings-panel__preset:hover {
  transform: scale(1.1);
}

.liya-ai-env-vuejs-settings-panel__preset--active {
  border-color: #6366f1;
  box-shadow: 0 0 0 2px rgba(99, 102, 241, 0.3);
}

.liya-ai-env-vuejs-settings-panel__colors {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.liya-ai-env-vuejs-settings-panel__color-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 12px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 8px;
}

.liya-ai-env-vuejs-settings-panel__color-row span {
  font-size: 12px;
  color: #cbd5e1;
}

.liya-ai-env-vuejs-settings-panel__color-row input[type="color"] {
  width: 32px;
  height: 24px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  background: transparent;
}

.liya-ai-env-vuejs-settings-panel__color-row input[type="color"]::-webkit-color-swatch-wrapper {
  padding: 0;
}

.liya-ai-env-vuejs-settings-panel__color-row input[type="color"]::-webkit-color-swatch {
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 4px;
}

.liya-ai-env-vuejs-settings-panel__reset {
  width: 100%;
  padding: 10px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  background: transparent;
  color: #94a3b8;
  font-size: 12px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
}

.liya-ai-env-vuejs-settings-panel__reset:hover {
  background: rgba(255, 255, 255, 0.05);
  color: #f1f5f9;
  border-color: rgba(255, 255, 255, 0.2);
}

/* Settings Panel Transition */
.liya-ai-env-vuejs-settings-panel-enter-active,
.liya-ai-env-vuejs-settings-panel-leave-active {
  transition: all 0.3s ease;
}

.liya-ai-env-vuejs-settings-panel-enter-from,
.liya-ai-env-vuejs-settings-panel-leave-to {
  opacity: 0;
  transform: translateY(-10px) scale(0.95);
}
</style>
