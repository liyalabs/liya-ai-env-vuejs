<script setup lang="ts">
import { computed } from 'vue'
import LiyaAiEnvVuejsEnvironmentModal from './EnvironmentModal.vue'
import LiyaAiEnvVuejsEnvironmentStandalone from './EnvironmentStandalone.vue'
import type { 
  LiyaAiEnvVuejsMode,
  LiyaAiEnvVuejsThemeConfig,
  LiyaAiEnvVuejsPosition,
  LiyaAiEnvVuejsCameraConfig
} from '../../types'

interface Props {
  mode?: LiyaAiEnvVuejsMode
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
  mode: 'modal_fullscreen',
  isOpen: false,
  showBackButton: true,
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

defineEmits<{
  close: []
  back: []
  opened: []
  closed: []
  'message-sent': [message: string]
  'message-received': [message: string]
  'speaking-started': []
  'speaking-ended': []
  loaded: []
  error: [error: Error]
}>()

const isModalMode = computed(() => props.mode === 'modal_fullscreen')
</script>

<template>
  <component
    :is="isModalMode ? LiyaAiEnvVuejsEnvironmentModal : LiyaAiEnvVuejsEnvironmentStandalone"
    :is-open="isOpen"
    :show-back-button="showBackButton"
    :show-close-button="showCloseButton"
    :classroom-model-url="classroomModelUrl"
    :avatar-model-url="avatarModelUrl"
    :avatar-position="avatarPosition"
    :camera-config="cameraConfig"
    :welcome-message="welcomeMessage"
    :enable-gestures="enableGestures"
    :enable-subtitles="enableSubtitles"
    :assistant-name="assistantName"
    :theme="theme"
    @close="$emit('close')"
    @back="$emit('back')"
    @opened="$emit('opened')"
    @closed="$emit('closed')"
    @message-sent="(msg: string) => $emit('message-sent', msg)"
    @message-received="(msg: string) => $emit('message-received', msg)"
    @speaking-started="$emit('speaking-started')"
    @speaking-ended="$emit('speaking-ended')"
    @loaded="$emit('loaded')"
    @error="(e) => $emit('error', e)"
  />
</template>
