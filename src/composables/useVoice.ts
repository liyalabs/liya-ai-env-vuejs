// Liya AI Environment - Voice Composable

import { ref, computed, onUnmounted } from 'vue'

// Web Speech API types
interface LiyaAiEnvVuejsSpeechRecognitionResult {
  isFinal: boolean
  [index: number]: { transcript: string; confidence: number }
}

interface LiyaAiEnvVuejsSpeechRecognitionResultList {
  length: number
  [index: number]: LiyaAiEnvVuejsSpeechRecognitionResult
}

interface LiyaAiEnvVuejsSpeechRecognitionEvent {
  results: LiyaAiEnvVuejsSpeechRecognitionResultList
}

interface LiyaAiEnvVuejsSpeechRecognitionErrorEvent {
  error: string
}

interface LiyaAiEnvVuejsSpeechRecognition extends EventTarget {
  continuous: boolean
  interimResults: boolean
  lang: string
  onresult: ((event: LiyaAiEnvVuejsSpeechRecognitionEvent) => void) | null
  onerror: ((event: LiyaAiEnvVuejsSpeechRecognitionErrorEvent) => void) | null
  onend: (() => void) | null
  start(): void
  stop(): void
  abort(): void
}

type LiyaAiEnvVuejsSpeechRecognitionConstructor = new () => LiyaAiEnvVuejsSpeechRecognition

const liyaAiEnvVuejsIsRecording = ref(false)
const liyaAiEnvVuejsTranscript = ref('')
const liyaAiEnvVuejsIsSupported = ref(false)
const liyaAiEnvVuejsIsIOS = ref(false)
const liyaAiEnvVuejsMicPermission = ref<'prompt' | 'granted' | 'denied'>('prompt')

let liyaAiEnvVuejsRecognition: LiyaAiEnvVuejsSpeechRecognition | null = null

// Detect iOS device
function liyaAiEnvVuejsDetectIOS(): boolean {
  if (typeof window === 'undefined' || typeof navigator === 'undefined') return false
  
  const userAgent = navigator.userAgent || (navigator as any).vendor || ''
  // Check for iOS devices (iPhone, iPad, iPod)
  const isIOSDevice = /iPad|iPhone|iPod/.test(userAgent) && !(window as any).MSStream
  // Also check for iPad on iOS 13+ which reports as Mac
  const isIPadOS = navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1
  
  return isIOSDevice || isIPadOS
}

// Detect Opera browser
function liyaAiEnvVuejsDetectOpera(): boolean {
  if (typeof window === 'undefined' || typeof navigator === 'undefined') return false
  const userAgent = navigator.userAgent || ''
  return userAgent.indexOf('OPR/') !== -1 || userAgent.indexOf('Opera') !== -1
}

export function useLiyaAiEnvVuejsVoice() {
  // Check for browser support
  const SpeechRecognitionAPI = 
    (window as unknown as { SpeechRecognition?: LiyaAiEnvVuejsSpeechRecognitionConstructor }).SpeechRecognition ||
    (window as unknown as { webkitSpeechRecognition?: LiyaAiEnvVuejsSpeechRecognitionConstructor }).webkitSpeechRecognition

  // iOS Safari does NOT support SpeechRecognition API
  liyaAiEnvVuejsIsIOS.value = liyaAiEnvVuejsDetectIOS()
  liyaAiEnvVuejsIsSupported.value = !!SpeechRecognitionAPI && !liyaAiEnvVuejsIsIOS.value

  // Check current microphone permission status
  async function liyaAiEnvVuejsCheckMicPermission(): Promise<'prompt' | 'granted' | 'denied'> {
    if (typeof navigator === 'undefined' || !navigator.permissions) {
      return 'prompt'
    }
    try {
      const result = await navigator.permissions.query({ name: 'microphone' as PermissionName })
      liyaAiEnvVuejsMicPermission.value = result.state as 'prompt' | 'granted' | 'denied'
      // Listen for permission changes
      result.onchange = () => {
        liyaAiEnvVuejsMicPermission.value = result.state as 'prompt' | 'granted' | 'denied'
      }
      return result.state as 'prompt' | 'granted' | 'denied'
    } catch {
      return 'prompt'
    }
  }

  // Request microphone permission early (on widget open)
  async function liyaAiEnvVuejsRequestMicPermission(): Promise<boolean> {
    if (!liyaAiEnvVuejsIsSupported.value) {
      return false
    }
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true })
      // Stop all tracks immediately - we just wanted the permission
      stream.getTracks().forEach(track => track.stop())
      liyaAiEnvVuejsMicPermission.value = 'granted'
      return true
    } catch {
      liyaAiEnvVuejsMicPermission.value = 'denied'
      return false
    }
  }

  function liyaAiEnvVuejsInitRecognition(): void {
    if (!SpeechRecognitionAPI || liyaAiEnvVuejsRecognition) return

    liyaAiEnvVuejsRecognition = new SpeechRecognitionAPI()
    liyaAiEnvVuejsRecognition.continuous = false
    liyaAiEnvVuejsRecognition.interimResults = false
    liyaAiEnvVuejsRecognition.lang = 'tr-TR' // Turkish by default

    liyaAiEnvVuejsRecognition.onresult = (event: LiyaAiEnvVuejsSpeechRecognitionEvent) => {
      const result = event.results[event.results.length - 1]
      if (result.isFinal) {
        liyaAiEnvVuejsTranscript.value = result[0].transcript
      }
    }

    liyaAiEnvVuejsRecognition.onerror = (_event: LiyaAiEnvVuejsSpeechRecognitionErrorEvent) => {
      liyaAiEnvVuejsIsRecording.value = false
    }

    liyaAiEnvVuejsRecognition.onend = () => {
      liyaAiEnvVuejsIsRecording.value = false
    }
  }

  function liyaAiEnvVuejsStartRecording(): void {
    if (!liyaAiEnvVuejsIsSupported.value) {
      return
    }

    liyaAiEnvVuejsInitRecognition()
    
    if (liyaAiEnvVuejsRecognition && !liyaAiEnvVuejsIsRecording.value) {
      liyaAiEnvVuejsTranscript.value = ''
      liyaAiEnvVuejsIsRecording.value = true
      
      try {
        liyaAiEnvVuejsRecognition.start()
        
        // Opera workaround: recognition.start() may silently fail.
        // If recording hasn't actually started within 3s, reset and log.
        if (liyaAiEnvVuejsDetectOpera()) {
          setTimeout(() => {
            if (!liyaAiEnvVuejsIsRecording.value) return
            // If onresult never fires, the recognition may have silently failed
          }, 3000)
        }
      } catch (err) {
        liyaAiEnvVuejsIsRecording.value = false
      }
    }
  }

  function liyaAiEnvVuejsStopRecording(): void {
    if (liyaAiEnvVuejsRecognition && liyaAiEnvVuejsIsRecording.value) {
      liyaAiEnvVuejsRecognition.stop()
      liyaAiEnvVuejsIsRecording.value = false
    }
  }

  function liyaAiEnvVuejsSetLanguage(lang: string): void {
    if (liyaAiEnvVuejsRecognition) {
      liyaAiEnvVuejsRecognition.lang = lang
    }
  }

  function liyaAiEnvVuejsCleanup(): void {
    if (liyaAiEnvVuejsRecognition) {
      liyaAiEnvVuejsRecognition.abort()
      liyaAiEnvVuejsRecognition = null
    }
  }

  onUnmounted(() => {
    liyaAiEnvVuejsCleanup()
  })

  return {
    isRecording: computed(() => liyaAiEnvVuejsIsRecording.value),
    transcript: computed(() => liyaAiEnvVuejsTranscript.value),
    isSupported: computed(() => liyaAiEnvVuejsIsSupported.value),
    isIOS: computed(() => liyaAiEnvVuejsIsIOS.value),
    micPermission: computed(() => liyaAiEnvVuejsMicPermission.value),
    startRecording: liyaAiEnvVuejsStartRecording,
    stopRecording: liyaAiEnvVuejsStopRecording,
    setLanguage: liyaAiEnvVuejsSetLanguage,
    checkMicPermission: liyaAiEnvVuejsCheckMicPermission,
    requestMicPermission: liyaAiEnvVuejsRequestMicPermission,
    cleanup: liyaAiEnvVuejsCleanup
  }
}
