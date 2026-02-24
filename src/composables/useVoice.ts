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

  // Detect platform for UX hints (not for blocking)
  liyaAiEnvVuejsIsIOS.value = liyaAiEnvVuejsDetectIOS()
  const liyaAiEnvVuejsIsOpera = liyaAiEnvVuejsDetectOpera()
  // Allow SpeechRecognition on iOS/Safari if the API is available (iPadOS 16+, macOS Ventura+)
  // Only block Opera which silently fails
  liyaAiEnvVuejsIsSupported.value = !!SpeechRecognitionAPI && !liyaAiEnvVuejsIsOpera

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
  // Works on ALL platforms including iOS Safari — mic permission is independent of SpeechRecognition
  async function liyaAiEnvVuejsRequestMicPermission(): Promise<boolean> {
    if (typeof navigator === 'undefined' || !navigator.mediaDevices) {
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

    liyaAiEnvVuejsRecognition.onerror = (event: LiyaAiEnvVuejsSpeechRecognitionErrorEvent) => {
      liyaAiEnvVuejsIsRecording.value = false
      // If SpeechRecognition fails on this platform, mark as unsupported for future attempts
      if (event.error === 'not-allowed' || event.error === 'service-not-allowed' || event.error === 'language-not-supported') {
        liyaAiEnvVuejsIsSupported.value = false
      }
    }

    liyaAiEnvVuejsRecognition.onend = () => {
      liyaAiEnvVuejsIsRecording.value = false
    }
  }

  function liyaAiEnvVuejsStartRecording(): void {
    if (!SpeechRecognitionAPI) {
      return
    }

    liyaAiEnvVuejsInitRecognition()
    
    if (liyaAiEnvVuejsRecognition && !liyaAiEnvVuejsIsRecording.value) {
      liyaAiEnvVuejsTranscript.value = ''
      liyaAiEnvVuejsIsRecording.value = true
      
      try {
        liyaAiEnvVuejsRecognition.start()
        
        // Safari/iOS workaround: recognition.start() may silently fail.
        // If no result within 8s, reset recording state.
        setTimeout(() => {
          if (liyaAiEnvVuejsIsRecording.value && !liyaAiEnvVuejsTranscript.value) {
            // Still recording but no transcript — may have silently failed
          }
        }, 8000)
      } catch (err) {
        liyaAiEnvVuejsIsRecording.value = false
        // If start() throws, this platform doesn't support SpeechRecognition
        liyaAiEnvVuejsIsSupported.value = false
      }
    }
  }

  function liyaAiEnvVuejsStopRecording(): void {
    if (liyaAiEnvVuejsRecognition && liyaAiEnvVuejsIsRecording.value) {
      liyaAiEnvVuejsRecognition.stop()
      // Do NOT set isRecording = false here!
      // Browser will fire onresult (transcript) → onend (isRecording = false) in order.
      // Setting it here causes the watch to trigger before transcript is available.
      
      // Safety fallback: if onend never fires within 3s, force reset
      setTimeout(() => {
        if (liyaAiEnvVuejsIsRecording.value) {
          liyaAiEnvVuejsIsRecording.value = false
        }
      }, 3000)
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
