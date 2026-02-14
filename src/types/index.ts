// Liya AI Environment - TypeScript Type Definitions

// ============================================================================
// Configuration Types
// ============================================================================

export type LiyaAiEnvVuejsMode = 'modal_fullscreen' | 'standalone'

export interface LiyaAiEnvVuejsConfig {
  apiKey: string
  apiUrl: string
  assistantId: string
  assistantName?: string
  classroomModelUrl?: string
  avatarModelUrl?: string
  theme?: LiyaAiEnvVuejsThemeConfig
  features?: LiyaAiEnvVuejsFeaturesConfig
  locale?: string
}

export interface LiyaAiEnvVuejsThemeConfig {
  primaryColor?: string
  secondaryColor?: string
  backgroundColor?: string
  textColor?: string
  fontFamily?: string
  borderRadius?: string
  zIndex?: number
}

export interface LiyaAiEnvVuejsFeaturesConfig {
  voice?: boolean
  subtitles?: boolean
  gestures?: boolean
  soundEffects?: boolean
}

// ============================================================================
// Environment Types
// ============================================================================

export interface LiyaAiEnvVuejsPosition {
  x: number
  y: number
  z: number
}

export interface LiyaAiEnvVuejsCameraConfig {
  position: LiyaAiEnvVuejsPosition
  lookAt: LiyaAiEnvVuejsPosition
  fov?: number
}

export interface LiyaAiEnvVuejsAvatarConfig {
  modelUrl: string
  position: LiyaAiEnvVuejsPosition
  rotation?: LiyaAiEnvVuejsPosition
  scale?: number
}

export interface LiyaAiEnvVuejsClassroomConfig {
  modelUrl: string
  position?: LiyaAiEnvVuejsPosition
  rotation?: LiyaAiEnvVuejsPosition
  scale?: number
}

// ============================================================================
// Gesture Types
// ============================================================================

export type LiyaAiEnvVuejsGestureType = 
  | 'idle'
  | 'explain'
  | 'emphasize'
  | 'point'
  | 'wave'
  | 'think'
  | 'nod'
  | 'shrug'

export interface LiyaAiEnvVuejsGesture {
  time: number
  type: LiyaAiEnvVuejsGestureType
  intensity: number
  duration: number
}

export interface LiyaAiEnvVuejsGestureState {
  currentGesture: LiyaAiEnvVuejsGestureType
  intensity: number
  progress: number
}

// ============================================================================
// Avatar Animation Types
// ============================================================================

export interface LiyaAiEnvVuejsViseme {
  time: number
  viseme: number
  duration: number
}

export interface LiyaAiEnvVuejsAvatarState {
  isSpeaking: boolean
  isIdle: boolean
  currentVisemes: LiyaAiEnvVuejsViseme[]
  currentGestures: LiyaAiEnvVuejsGesture[]
  audioCurrentTime: number
}

export interface LiyaAiEnvVuejsAnimationConfig {
  lipSyncSpeed?: number
  lipSyncIntensity?: number
  blinkSpeed?: number
  blinkIntervalMin?: number
  blinkIntervalMax?: number
  eyeMoveSpeed?: number
  eyeMoveIntervalMin?: number
  eyeMoveIntervalMax?: number
  eyeMoveRange?: number
  breathingSpeed?: number
  breathingIntensity?: number
  gestureSpeed?: number
  gestureIntensity?: number
}

// ============================================================================
// API Types
// ============================================================================

export interface LiyaAiEnvVuejsApiResponse<T = unknown> {
  status: 'success' | 'error'
  data?: T
  message?: string
  code?: string
  errors?: Record<string, string[]>
}

export interface LiyaAiEnvVuejsSpeechRequest {
  text: string
  voice?: string
  speed?: number
  include_audio?: boolean
  include_gestures?: boolean
}

export interface LiyaAiEnvVuejsSpeechResponse {
  visemes: LiyaAiEnvVuejsViseme[]
  audio_base64: string
  gestures?: LiyaAiEnvVuejsGesture[]
  duration?: number
}

export interface LiyaAiEnvVuejsChatRequest {
  assistant_id: string
  message: string
  session_id?: string
  external_session_id?: string
}

export interface LiyaAiEnvVuejsPresentationResult {
  success: boolean
  action: string
  presentation_id: string
  presentation_title: string
  page_number: number
  page_title: string
  page_image_url: string | null
  total_pages: number
  reason: string
}

export interface LiyaAiEnvVuejsChatResponse {
  session_id: string
  message_id?: string
  response?: string
  response_time?: number
  user_message?: LiyaAiEnvVuejsMessage
  assistant_message?: LiyaAiEnvVuejsMessage
  presentation_result?: LiyaAiEnvVuejsPresentationResult
  suggestions?: string[]
  metadata?: Record<string, any>
}

export interface LiyaAiEnvVuejsMessage {
  id: string
  content: string
  role: 'user' | 'assistant'
  created_at: string
  response_time?: number
}

// ============================================================================
// Component Props Types
// ============================================================================

export interface LiyaAiEnvVuejsEnvironmentProps {
  mode?: LiyaAiEnvVuejsMode
  isOpen?: boolean
  showBackButton?: boolean
  showCloseButton?: boolean
  classroomModelUrl?: string
  avatarModelUrl?: string
  avatarPosition?: LiyaAiEnvVuejsPosition
  cameraPosition?: LiyaAiEnvVuejsPosition
  welcomeMessage?: string
  enableGestures?: boolean
  enableSubtitles?: boolean
  theme?: LiyaAiEnvVuejsThemeConfig
}

export interface LiyaAiEnvVuejsClassroomSceneProps {
  classroomModelUrl?: string
  avatarModelUrl?: string
  avatarPosition?: LiyaAiEnvVuejsPosition
  cameraConfig?: LiyaAiEnvVuejsCameraConfig
  isSpeaking?: boolean
  visemes?: LiyaAiEnvVuejsViseme[]
  gestures?: LiyaAiEnvVuejsGesture[]
  currentTime?: number
  animationConfig?: LiyaAiEnvVuejsAnimationConfig
}

export interface LiyaAiEnvVuejsFullBodyAvatarProps {
  modelUrl?: string
  isSpeaking?: boolean
  visemes?: LiyaAiEnvVuejsViseme[]
  gestures?: LiyaAiEnvVuejsGesture[]
  currentTime?: number
  animationConfig?: LiyaAiEnvVuejsAnimationConfig
}

// ============================================================================
// Event Types
// ============================================================================

export interface LiyaAiEnvVuejsEvents {
  'opened': () => void
  'closed': () => void
  'back': () => void
  'message-sent': (message: string) => void
  'message-received': (message: string) => void
  'speaking-started': () => void
  'speaking-ended': () => void
  'gesture-triggered': (gesture: LiyaAiEnvVuejsGestureType) => void
  'error': (error: Error) => void
  'loaded': () => void
}

// ============================================================================
// State Types
// ============================================================================

export interface LiyaAiEnvVuejsEnvironmentState {
  isOpen: boolean
  isLoading: boolean
  isReady: boolean
  isSpeaking: boolean
  isListening: boolean
  isProcessing: boolean
  currentMessage: string
  error: string | null
  loadProgress: number
}

// ============================================================================
// Plugin Types
// ============================================================================

export interface LiyaAiEnvVuejsPlugin {
  install: (app: unknown, options: LiyaAiEnvVuejsConfig) => void
}

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $liyaAiEnvVuejs: {
      config: LiyaAiEnvVuejsConfig
    }
  }
}
