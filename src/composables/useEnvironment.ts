// Liya AI Environment - Environment Composable

import { ref, computed, readonly } from 'vue'
import type {
  LiyaAiEnvVuejsEnvironmentState,
  LiyaAiEnvVuejsViseme,
  LiyaAiEnvVuejsGesture,
  LiyaAiEnvVuejsMessage,
  LiyaAiEnvVuejsPresentationResult
} from '../types'
import { liyaAiEnvVuejsSendMessage, liyaAiEnvVuejsGenerateSpeech, liyaAiEnvVuejsGetConfig, LiyaAiEnvVuejsApiError } from '../api'

const liyaAiEnvVuejsState = ref<LiyaAiEnvVuejsEnvironmentState>({
  isOpen: false,
  isLoading: true,
  isReady: false,
  isSpeaking: false,
  isListening: false,
  isProcessing: false,
  currentMessage: '',
  error: null,
  loadProgress: 0
})

const liyaAiEnvVuejsMessages = ref<LiyaAiEnvVuejsMessage[]>([])
const liyaAiEnvVuejsSessionId = ref<string | null>(null)
const liyaAiEnvVuejsCurrentVisemes = ref<LiyaAiEnvVuejsViseme[]>([])
const liyaAiEnvVuejsCurrentGestures = ref<LiyaAiEnvVuejsGesture[]>([])
const liyaAiEnvVuejsAudioCurrentTime = ref(0)
const liyaAiEnvVuejsCurrentPresentation = ref<LiyaAiEnvVuejsPresentationResult | null>(null)
const liyaAiEnvVuejsLastApiErrorCode = ref<string | null>(null)

let liyaAiEnvVuejsAudioContext: AudioContext | null = null
let liyaAiEnvVuejsAudioSource: AudioBufferSourceNode | null = null
let liyaAiEnvVuejsStartTime = 0

export function useLiyaAiEnvVuejsEnvironment() {
  // Computed properties
  const isOpen = computed(() => liyaAiEnvVuejsState.value.isOpen)
  const isLoading = computed(() => liyaAiEnvVuejsState.value.isLoading)
  const isReady = computed(() => liyaAiEnvVuejsState.value.isReady)
  const isSpeaking = computed(() => liyaAiEnvVuejsState.value.isSpeaking)
  const isListening = computed(() => liyaAiEnvVuejsState.value.isListening)
  const isProcessing = computed(() => liyaAiEnvVuejsState.value.isProcessing)
  const currentMessage = computed(() => liyaAiEnvVuejsState.value.currentMessage)
  const error = computed(() => liyaAiEnvVuejsState.value.error)
  const loadProgress = computed(() => liyaAiEnvVuejsState.value.loadProgress)
  const messages = computed(() => liyaAiEnvVuejsMessages.value)
  const visemes = computed(() => liyaAiEnvVuejsCurrentVisemes.value)
  const gestures = computed(() => liyaAiEnvVuejsCurrentGestures.value)
  const audioTime = computed(() => liyaAiEnvVuejsAudioCurrentTime.value)
  const currentPresentation = computed(() => liyaAiEnvVuejsCurrentPresentation.value)

  // Actions
  function liyaAiEnvVuejsOpen() {
    liyaAiEnvVuejsState.value.isOpen = true
  }

  function liyaAiEnvVuejsClose() {
    liyaAiEnvVuejsStopAudio()
    liyaAiEnvVuejsState.value.isOpen = false
    liyaAiEnvVuejsState.value.isSpeaking = false
    liyaAiEnvVuejsState.value.isListening = false
  }

  function liyaAiEnvVuejsSetLoading(loading: boolean) {
    liyaAiEnvVuejsState.value.isLoading = loading
  }

  function liyaAiEnvVuejsSetReady(ready: boolean) {
    liyaAiEnvVuejsState.value.isReady = ready
    if (ready) {
      liyaAiEnvVuejsState.value.isLoading = false
    }
  }

  function liyaAiEnvVuejsSetLoadProgress(progress: number) {
    liyaAiEnvVuejsState.value.loadProgress = Math.min(100, Math.max(0, progress))
  }

  function liyaAiEnvVuejsSetError(errorMessage: string | null) {
    liyaAiEnvVuejsState.value.error = errorMessage
  }

  // Extract only the response/answer text from JSON content for TTS
  function liyaAiEnvVuejsExtractResponseText(content: string): string {
    try {
      const parsed = JSON.parse(content)
      // Check for response or answer field
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

  async function liyaAiEnvVuejsHandleMessage(message: string): Promise<void> {
    if (!message.trim() || liyaAiEnvVuejsState.value.isProcessing) return

    liyaAiEnvVuejsState.value.isProcessing = true
    liyaAiEnvVuejsState.value.currentMessage = message
    liyaAiEnvVuejsState.value.error = null

    // Optimistic update - add user message immediately
    const tempUserMessage: LiyaAiEnvVuejsMessage = {
      id: `temp-user-${Date.now()}`,
      content: message.trim(),
      role: 'user',
      created_at: new Date().toISOString()
    }
    liyaAiEnvVuejsMessages.value.push(tempUserMessage)

    try {
      // Send message to API
      const response = await liyaAiEnvVuejsSendMessage(
        message,
        liyaAiEnvVuejsSessionId.value || undefined
      )

      if (response) {
        // Update session ID
        if (response.session_id) {
          liyaAiEnvVuejsSessionId.value = response.session_id
        }

        // Replace temp user message with real one if available
        if (response.user_message) {
          const tempIndex = liyaAiEnvVuejsMessages.value.findIndex(m => m.id === tempUserMessage.id)
          if (tempIndex !== -1) {
            liyaAiEnvVuejsMessages.value[tempIndex] = response.user_message
          }
        }

        // Add assistant message
        // Backend parses AI JSON and sends clean text in response.response
        // and suggestions separately in response.suggestions.
        // We reconstruct a JSON content string so EnvironmentModal's existing
        // liyaAiEnvVuejsFormatMessageContent / liyaAiEnvVuejsParseSuggestions work.
        if (response.assistant_message) {
          // If backend already parsed suggestions, enrich the message content
          if (response.suggestions && response.suggestions.length > 0) {
            try {
              const contentObj = JSON.parse(response.assistant_message.content)
              if (!contentObj.suggestions) {
                contentObj.suggestions = response.suggestions
              }
              response.assistant_message.content = JSON.stringify(contentObj)
            } catch {
              // Content is plain text — wrap it with suggestions
              response.assistant_message.content = JSON.stringify({
                response: response.assistant_message.content,
                suggestions: response.suggestions
              })
            }
          }
          liyaAiEnvVuejsMessages.value.push(response.assistant_message)
        } else if (response.response) {
          // Build message content: if suggestions exist, wrap as JSON for frontend parsing
          let messageContent = response.response
          if (response.suggestions && response.suggestions.length > 0) {
            messageContent = JSON.stringify({
              response: response.response,
              suggestions: response.suggestions
            })
          }
          liyaAiEnvVuejsMessages.value.push({
            id: `msg-${Date.now()}`,
            content: messageContent,
            role: 'assistant',
            created_at: new Date().toISOString()
          })
        }

        // Handle presentation result (sunum tahtası güncelleme)
        if (response.presentation_result && response.presentation_result.success) {
          const presResult = { ...response.presentation_result }
          // Ensure page_image_url is authenticated (append api_key for <img src>)
          if (presResult.page_image_url) {
            try {
              const cfg = liyaAiEnvVuejsGetConfig()
              const baseUrl = cfg.apiUrl.replace(/\/$/, '')
              const imgUrl = presResult.page_image_url.startsWith('http')
                ? presResult.page_image_url
                : `${baseUrl}${presResult.page_image_url}`
              const sep = imgUrl.includes('?') ? '&' : '?'
              presResult.page_image_url = `${imgUrl}${sep}api_key=${cfg.apiKey}`
            } catch { /* keep original URL */ }
          }
          liyaAiEnvVuejsCurrentPresentation.value = presResult
        }

        // Get clean response text for TTS (no JSON, no suggestions)
        const textToSpeak = response.response || liyaAiEnvVuejsExtractResponseText(
          response.assistant_message?.content || ''
        )

        if (textToSpeak) {
          // Generate speech with visemes and gestures
          await liyaAiEnvVuejsSpeakWithAvatar(textToSpeak)
        }
      }
    } catch (err) {
      if (err instanceof LiyaAiEnvVuejsApiError && err.code) {
        liyaAiEnvVuejsLastApiErrorCode.value = err.code
      }
      liyaAiEnvVuejsState.value.error = 'Mesaj gönderilemedi'
      // Remove temp message on error
      liyaAiEnvVuejsMessages.value = liyaAiEnvVuejsMessages.value.filter(m => m.id !== tempUserMessage.id)
    } finally {
      liyaAiEnvVuejsState.value.isProcessing = false
      liyaAiEnvVuejsState.value.currentMessage = ''
    }
  }

  async function liyaAiEnvVuejsSpeakWithAvatar(text: string): Promise<void> {
    try {
      const speechData = await liyaAiEnvVuejsGenerateSpeech(text, {
        include_audio: true,
        include_gestures: true
      })

      if (speechData) {
        liyaAiEnvVuejsCurrentVisemes.value = speechData.visemes || []
        liyaAiEnvVuejsCurrentGestures.value = speechData.gestures || []

        if (speechData.audio_base64) {
          await liyaAiEnvVuejsPlayAudioWithSync(speechData.audio_base64)
        } else {
          // Fallback: simulate speaking
          liyaAiEnvVuejsSimulateSpeaking(text)
        }
      }
    } catch (err) {
      // Fallback: simulate speaking
      liyaAiEnvVuejsSimulateSpeaking(text)
    }
  }

  async function liyaAiEnvVuejsPlayAudioWithSync(base64Audio: string): Promise<void> {
    try {
      // Decode base64 audio
      const binaryString = atob(base64Audio)
      const bytes = new Uint8Array(binaryString.length)
      for (let i = 0; i < binaryString.length; i++) {
        bytes[i] = binaryString.charCodeAt(i)
      }

      // Create audio context
      if (!liyaAiEnvVuejsAudioContext) {
        liyaAiEnvVuejsAudioContext = new AudioContext()
      }

      // Decode audio data
      const audioBuffer = await liyaAiEnvVuejsAudioContext.decodeAudioData(bytes.buffer)

      // Stop any existing audio
      liyaAiEnvVuejsStopAudio()

      // Create and play audio source
      liyaAiEnvVuejsAudioSource = liyaAiEnvVuejsAudioContext.createBufferSource()
      liyaAiEnvVuejsAudioSource.buffer = audioBuffer
      liyaAiEnvVuejsAudioSource.connect(liyaAiEnvVuejsAudioContext.destination)

      liyaAiEnvVuejsState.value.isSpeaking = true
      liyaAiEnvVuejsStartTime = liyaAiEnvVuejsAudioContext.currentTime

      // Update current time for viseme sync
      const updateTime = () => {
        if (liyaAiEnvVuejsState.value.isSpeaking && liyaAiEnvVuejsAudioContext) {
          liyaAiEnvVuejsAudioCurrentTime.value = liyaAiEnvVuejsAudioContext.currentTime - liyaAiEnvVuejsStartTime
          requestAnimationFrame(updateTime)
        }
      }
      updateTime()

      liyaAiEnvVuejsAudioSource.onended = () => {
        liyaAiEnvVuejsState.value.isSpeaking = false
        liyaAiEnvVuejsAudioCurrentTime.value = 0
        liyaAiEnvVuejsCurrentVisemes.value = []
        liyaAiEnvVuejsCurrentGestures.value = []
      }

      liyaAiEnvVuejsAudioSource.start()
    } catch (err) {
      liyaAiEnvVuejsState.value.isSpeaking = false
    }
  }

  function liyaAiEnvVuejsSimulateSpeaking(text: string): void {
    const duration = text.length * 0.05
    const visemes: LiyaAiEnvVuejsViseme[] = []

    let time = 0
    for (let i = 0; i < text.length; i++) {
      const char = text[i].toLowerCase()
      let viseme = 0

      if ('aeiouäöü'.includes(char)) viseme = 10 + Math.floor(Math.random() * 5)
      else if ('bcdfghjklmnpqrstvwxyz'.includes(char)) viseme = 1 + Math.floor(Math.random() * 9)

      visemes.push({ time, viseme, duration: 0.05 })
      time += 0.05
    }

    liyaAiEnvVuejsCurrentVisemes.value = visemes
    liyaAiEnvVuejsState.value.isSpeaking = true
    liyaAiEnvVuejsAudioCurrentTime.value = 0

    // Animate through visemes
    const startMs = Date.now()
    const animate = () => {
      const elapsed = (Date.now() - startMs) / 1000
      liyaAiEnvVuejsAudioCurrentTime.value = elapsed

      if (elapsed < duration) {
        requestAnimationFrame(animate)
      } else {
        liyaAiEnvVuejsState.value.isSpeaking = false
        liyaAiEnvVuejsCurrentVisemes.value = []
      }
    }
    animate()
  }

  function liyaAiEnvVuejsStopAudio(): void {
    if (liyaAiEnvVuejsAudioSource) {
      try {
        liyaAiEnvVuejsAudioSource.stop()
        liyaAiEnvVuejsAudioSource.disconnect()
      } catch {
        // Ignore errors when stopping
      }
      liyaAiEnvVuejsAudioSource = null
    }
    liyaAiEnvVuejsState.value.isSpeaking = false
    liyaAiEnvVuejsAudioCurrentTime.value = 0
  }

  function liyaAiEnvVuejsSetListening(listening: boolean): void {
    liyaAiEnvVuejsState.value.isListening = listening
  }

  function liyaAiEnvVuejsAddWelcomeMessage(welcomeText: string): void {
    if (liyaAiEnvVuejsMessages.value.length === 0) {
      liyaAiEnvVuejsMessages.value.push({
        id: `welcome-${Date.now()}`,
        content: welcomeText,
        role: 'assistant',
        created_at: new Date().toISOString()
      })
    }
  }

  function liyaAiEnvVuejsUpdateWelcomeMessage(newText: string): void {
    if (liyaAiEnvVuejsMessages.value.length > 0 && liyaAiEnvVuejsMessages.value[0].id.startsWith('welcome-')) {
      liyaAiEnvVuejsMessages.value[0] = { ...liyaAiEnvVuejsMessages.value[0], content: newText }
    }
  }

  function liyaAiEnvVuejsSetPresentation(presentation: LiyaAiEnvVuejsPresentationResult | null): void {
    liyaAiEnvVuejsCurrentPresentation.value = presentation
  }

  function liyaAiEnvVuejsCleanup(): void {
    liyaAiEnvVuejsStopAudio()
    if (liyaAiEnvVuejsAudioContext) {
      liyaAiEnvVuejsAudioContext.close()
      liyaAiEnvVuejsAudioContext = null
    }
  }

  return {
    // State (readonly)
    state: readonly(liyaAiEnvVuejsState),
    isOpen,
    isLoading,
    isReady,
    isSpeaking,
    isListening,
    isProcessing,
    currentMessage,
    error,
    loadProgress,
    messages,
    visemes,
    gestures,
    audioTime,
    currentPresentation,
    lastApiErrorCode: computed(() => liyaAiEnvVuejsLastApiErrorCode.value),
    clearApiError: () => { liyaAiEnvVuejsLastApiErrorCode.value = null },

    // Actions
    open: liyaAiEnvVuejsOpen,
    close: liyaAiEnvVuejsClose,
    setLoading: liyaAiEnvVuejsSetLoading,
    setReady: liyaAiEnvVuejsSetReady,
    setLoadProgress: liyaAiEnvVuejsSetLoadProgress,
    setError: liyaAiEnvVuejsSetError,
    handleMessage: liyaAiEnvVuejsHandleMessage,
    speakWithAvatar: liyaAiEnvVuejsSpeakWithAvatar,
    stopAudio: liyaAiEnvVuejsStopAudio,
    setListening: liyaAiEnvVuejsSetListening,
    addWelcomeMessage: liyaAiEnvVuejsAddWelcomeMessage,
    updateWelcomeMessage: liyaAiEnvVuejsUpdateWelcomeMessage,
    setPresentation: liyaAiEnvVuejsSetPresentation,
    cleanup: liyaAiEnvVuejsCleanup
  }
}
