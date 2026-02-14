// Liya AI Environment - Audio Analyzer Composable

import { ref, computed, onUnmounted } from 'vue'

const liyaAiEnvVuejsAudioLevel = ref(0)
const liyaAiEnvVuejsIsAnalyzing = ref(false)
const liyaAiEnvVuejsFrequencyData = ref<Uint8Array>(new Uint8Array(0))

let liyaAiEnvVuejsAnalyzerContext: AudioContext | null = null
let liyaAiEnvVuejsAnalyzerNode: AnalyserNode | null = null
let liyaAiEnvVuejsSourceNode: MediaStreamAudioSourceNode | null = null
let liyaAiEnvVuejsAnalyzerFrameId: number | null = null

export function useLiyaAiEnvVuejsAudioAnalyzer() {
  const audioLevel = computed(() => liyaAiEnvVuejsAudioLevel.value)
  const isAnalyzing = computed(() => liyaAiEnvVuejsIsAnalyzing.value)
  const frequencyData = computed(() => liyaAiEnvVuejsFrequencyData.value)

  async function liyaAiEnvVuejsStartAnalyzing(): Promise<boolean> {
    try {
      // Get microphone access
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true })

      // Create audio context and analyzer (iOS compatible)
      const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext
      liyaAiEnvVuejsAnalyzerContext = new AudioContextClass()
      
      // iOS requires resume() after user interaction
      if (liyaAiEnvVuejsAnalyzerContext.state === 'suspended') {
        await liyaAiEnvVuejsAnalyzerContext.resume()
      }
      
      liyaAiEnvVuejsAnalyzerNode = liyaAiEnvVuejsAnalyzerContext.createAnalyser()
      liyaAiEnvVuejsAnalyzerNode.fftSize = 256
      liyaAiEnvVuejsAnalyzerNode.smoothingTimeConstant = 0.8

      // Connect microphone to analyzer
      liyaAiEnvVuejsSourceNode = liyaAiEnvVuejsAnalyzerContext.createMediaStreamSource(stream)
      liyaAiEnvVuejsSourceNode.connect(liyaAiEnvVuejsAnalyzerNode)

      // Initialize frequency data array
      const bufferLength = liyaAiEnvVuejsAnalyzerNode.frequencyBinCount
      liyaAiEnvVuejsFrequencyData.value = new Uint8Array(bufferLength)

      liyaAiEnvVuejsIsAnalyzing.value = true
      liyaAiEnvVuejsAnalyzeLoop()

      return true
    } catch (err) {
      return false
    }
  }

  function liyaAiEnvVuejsAnalyzeLoop(): void {
    if (!liyaAiEnvVuejsIsAnalyzing.value || !liyaAiEnvVuejsAnalyzerNode) return

    // Get frequency data
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    liyaAiEnvVuejsAnalyzerNode.getByteFrequencyData(liyaAiEnvVuejsFrequencyData.value as any)

    // Calculate average level
    let sum = 0
    for (let i = 0; i < liyaAiEnvVuejsFrequencyData.value.length; i++) {
      sum += liyaAiEnvVuejsFrequencyData.value[i]
    }
    liyaAiEnvVuejsAudioLevel.value = sum / liyaAiEnvVuejsFrequencyData.value.length / 255

    liyaAiEnvVuejsAnalyzerFrameId = requestAnimationFrame(liyaAiEnvVuejsAnalyzeLoop)
  }

  function liyaAiEnvVuejsStopAnalyzing(): void {
    liyaAiEnvVuejsIsAnalyzing.value = false

    if (liyaAiEnvVuejsAnalyzerFrameId) {
      cancelAnimationFrame(liyaAiEnvVuejsAnalyzerFrameId)
      liyaAiEnvVuejsAnalyzerFrameId = null
    }

    if (liyaAiEnvVuejsSourceNode) {
      liyaAiEnvVuejsSourceNode.disconnect()
      liyaAiEnvVuejsSourceNode = null
    }

    if (liyaAiEnvVuejsAnalyzerNode) {
      liyaAiEnvVuejsAnalyzerNode.disconnect()
      liyaAiEnvVuejsAnalyzerNode = null
    }

    if (liyaAiEnvVuejsAnalyzerContext) {
      liyaAiEnvVuejsAnalyzerContext.close()
      liyaAiEnvVuejsAnalyzerContext = null
    }

    liyaAiEnvVuejsAudioLevel.value = 0
  }

  function liyaAiEnvVuejsGetGestureIntensityFromAudio(): number {
    // Map audio level to gesture intensity
    // Low audio = subtle gestures, high audio = more intense gestures
    const level = liyaAiEnvVuejsAudioLevel.value
    
    if (level < 0.1) return 0.2 // Minimal
    if (level < 0.3) return 0.4 // Low
    if (level < 0.5) return 0.6 // Medium
    if (level < 0.7) return 0.8 // High
    return 1.0 // Maximum
  }

  function liyaAiEnvVuejsGetSpeakingEmphasis(): 'low' | 'medium' | 'high' {
    const level = liyaAiEnvVuejsAudioLevel.value
    
    if (level < 0.3) return 'low'
    if (level < 0.6) return 'medium'
    return 'high'
  }

  onUnmounted(() => {
    liyaAiEnvVuejsStopAnalyzing()
  })

  return {
    audioLevel,
    isAnalyzing,
    frequencyData,
    startAnalyzing: liyaAiEnvVuejsStartAnalyzing,
    stopAnalyzing: liyaAiEnvVuejsStopAnalyzing,
    getGestureIntensityFromAudio: liyaAiEnvVuejsGetGestureIntensityFromAudio,
    getSpeakingEmphasis: liyaAiEnvVuejsGetSpeakingEmphasis
  }
}
