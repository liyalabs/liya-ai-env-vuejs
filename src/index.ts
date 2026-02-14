// Liya AI Environment - Main Entry Point
// Vue.js 3D Virtual Classroom with Full-Body Avatar

// Styles
import './styles/variables.css'
import './styles/liquid-glass.css'
import './styles/environment.css'

// Plugin
export { LiyaAiEnvVuejsPlugin, default } from './plugin'
export type { LiyaAiEnvVuejsPluginOptions } from './plugin'

// Components
export {
  LiyaAiEnvVuejsEnvironment,
  LiyaAiEnvVuejsEnvironmentModal,
  LiyaAiEnvVuejsEnvironmentStandalone,
  LiyaAiEnvVuejsClassroomScene,
  LiyaAiEnvVuejsFullBodyAvatar
} from './components'

// Composables
export {
  useLiyaAiEnvVuejsEnvironment,
  useLiyaAiEnvVuejsVoice,
  useLiyaAiEnvVuejsGestures,
  useLiyaAiEnvVuejsAudioAnalyzer
} from './composables'

// API
export {
  liyaAiEnvVuejsInitializeClient,
  liyaAiEnvVuejsGetClient,
  liyaAiEnvVuejsGetConfig,
  liyaAiEnvVuejsIsInitialized,
  liyaAiEnvVuejsSendMessage,
  liyaAiEnvVuejsGenerateSpeech,
  liyaAiEnvVuejsGetSessionHistory,
  liyaAiEnvVuejsGetPresentations
} from './api'

// Types
export type {
  LiyaAiEnvVuejsMode,
  LiyaAiEnvVuejsConfig,
  LiyaAiEnvVuejsThemeConfig,
  LiyaAiEnvVuejsFeaturesConfig,
  LiyaAiEnvVuejsPosition,
  LiyaAiEnvVuejsCameraConfig,
  LiyaAiEnvVuejsAvatarConfig,
  LiyaAiEnvVuejsClassroomConfig,
  LiyaAiEnvVuejsGestureType,
  LiyaAiEnvVuejsGesture,
  LiyaAiEnvVuejsGestureState,
  LiyaAiEnvVuejsViseme,
  LiyaAiEnvVuejsAvatarState,
  LiyaAiEnvVuejsAnimationConfig,
  LiyaAiEnvVuejsApiResponse,
  LiyaAiEnvVuejsSpeechRequest,
  LiyaAiEnvVuejsSpeechResponse,
  LiyaAiEnvVuejsChatRequest,
  LiyaAiEnvVuejsChatResponse,
  LiyaAiEnvVuejsPresentationResult,
  LiyaAiEnvVuejsMessage,
  LiyaAiEnvVuejsEnvironmentProps,
  LiyaAiEnvVuejsClassroomSceneProps,
  LiyaAiEnvVuejsFullBodyAvatarProps,
  LiyaAiEnvVuejsEvents,
  LiyaAiEnvVuejsEnvironmentState
} from './types'

// Gesture definitions
export {
  LIYA_AI_ENV_VUEJS_GESTURE_DEFINITIONS,
  liyaAiEnvVuejsGetGestureDefinition,
  liyaAiEnvVuejsInterpolateKeyframes
} from './types/gestures'

// i18n
export {
  useLiyaAiEnvVuejsI18n,
  liyaAiEnvVuejsTranslations,
  liyaAiEnvVuejsIsSupportedLocale,
  liyaAiEnvVuejsDetectBrowserLocale
} from './i18n'
export type {
  LiyaAiEnvVuejsSupportedLocale,
  LiyaAiEnvVuejsTranslations
} from './i18n'
