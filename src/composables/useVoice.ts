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

let liyaAiEnvVuejsRecognition: LiyaAiEnvVuejsSpeechRecognition | null = null

export function useLiyaAiEnvVuejsVoice() {
  // Check for browser support
  const SpeechRecognitionAPI = 
    (window as unknown as { SpeechRecognition?: LiyaAiEnvVuejsSpeechRecognitionConstructor }).SpeechRecognition ||
    (window as unknown as { webkitSpeechRecognition?: LiyaAiEnvVuejsSpeechRecognitionConstructor }).webkitSpeechRecognition

  liyaAiEnvVuejsIsSupported.value = !!SpeechRecognitionAPI

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
      liyaAiEnvVuejsRecognition.start()
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
    startRecording: liyaAiEnvVuejsStartRecording,
    stopRecording: liyaAiEnvVuejsStopRecording,
    setLanguage: liyaAiEnvVuejsSetLanguage,
    cleanup: liyaAiEnvVuejsCleanup
  }
}
