// Liya AI Environment - Gestures Composable

import { ref, computed } from 'vue'
import type { LiyaAiEnvVuejsGesture, LiyaAiEnvVuejsGestureType, LiyaAiEnvVuejsGestureState } from '../types'
import { 
  LIYA_AI_ENV_VUEJS_GESTURE_DEFINITIONS, 
  liyaAiEnvVuejsInterpolateKeyframes,
  type LiyaAiEnvVuejsGestureKeyframe
} from '../types/gestures'

const liyaAiEnvVuejsCurrentGestureState = ref<LiyaAiEnvVuejsGestureState>({
  currentGesture: 'idle',
  intensity: 0,
  progress: 0
})

const liyaAiEnvVuejsGestureQueue = ref<LiyaAiEnvVuejsGesture[]>([])
const liyaAiEnvVuejsIsAnimating = ref(false)

let liyaAiEnvVuejsAnimationFrameId: number | null = null
let liyaAiEnvVuejsGestureStartTime = 0

export function useLiyaAiEnvVuejsGestures() {
  const currentGesture = computed(() => liyaAiEnvVuejsCurrentGestureState.value.currentGesture)
  const gestureIntensity = computed(() => liyaAiEnvVuejsCurrentGestureState.value.intensity)
  const gestureProgress = computed(() => liyaAiEnvVuejsCurrentGestureState.value.progress)
  const isAnimating = computed(() => liyaAiEnvVuejsIsAnimating.value)

  function liyaAiEnvVuejsTriggerGesture(type: LiyaAiEnvVuejsGestureType, intensity: number = 1.0): void {
    const definition = LIYA_AI_ENV_VUEJS_GESTURE_DEFINITIONS[type]
    if (!definition) {
      return
    }

    // Add to queue
    liyaAiEnvVuejsGestureQueue.value.push({
      time: 0,
      type,
      intensity: Math.min(1, Math.max(0, intensity)),
      duration: definition.duration
    })

    // Start animation if not already running
    if (!liyaAiEnvVuejsIsAnimating.value) {
      liyaAiEnvVuejsStartGestureAnimation()
    }
  }

  function liyaAiEnvVuejsSetGesturesFromApi(gestures: LiyaAiEnvVuejsGesture[]): void {
    liyaAiEnvVuejsGestureQueue.value = [...gestures]
    
    if (gestures.length > 0 && !liyaAiEnvVuejsIsAnimating.value) {
      liyaAiEnvVuejsStartGestureAnimation()
    }
  }

  function liyaAiEnvVuejsStartGestureAnimation(): void {
    if (liyaAiEnvVuejsGestureQueue.value.length === 0) {
      liyaAiEnvVuejsIsAnimating.value = false
      liyaAiEnvVuejsCurrentGestureState.value = {
        currentGesture: 'idle',
        intensity: 0,
        progress: 0
      }
      return
    }

    const gesture = liyaAiEnvVuejsGestureQueue.value[0]
    liyaAiEnvVuejsCurrentGestureState.value.currentGesture = gesture.type
    liyaAiEnvVuejsCurrentGestureState.value.intensity = gesture.intensity
    liyaAiEnvVuejsGestureStartTime = performance.now()
    liyaAiEnvVuejsIsAnimating.value = true

    liyaAiEnvVuejsAnimateGesture()
  }

  function liyaAiEnvVuejsAnimateGesture(): void {
    if (liyaAiEnvVuejsGestureQueue.value.length === 0) {
      liyaAiEnvVuejsIsAnimating.value = false
      return
    }

    const gesture = liyaAiEnvVuejsGestureQueue.value[0]
    const definition = LIYA_AI_ENV_VUEJS_GESTURE_DEFINITIONS[gesture.type]
    const elapsed = (performance.now() - liyaAiEnvVuejsGestureStartTime) / 1000
    const progress = Math.min(1, elapsed / gesture.duration)

    liyaAiEnvVuejsCurrentGestureState.value.progress = progress

    if (progress >= 1) {
      // Gesture complete, move to next
      liyaAiEnvVuejsGestureQueue.value.shift()
      
      if (liyaAiEnvVuejsGestureQueue.value.length > 0) {
        liyaAiEnvVuejsStartGestureAnimation()
      } else if (definition.loop) {
        // Restart looping gesture
        liyaAiEnvVuejsGestureQueue.value.push(gesture)
        liyaAiEnvVuejsStartGestureAnimation()
      } else {
        liyaAiEnvVuejsIsAnimating.value = false
        liyaAiEnvVuejsCurrentGestureState.value = {
          currentGesture: 'idle',
          intensity: 0,
          progress: 0
        }
      }
      return
    }

    liyaAiEnvVuejsAnimationFrameId = requestAnimationFrame(liyaAiEnvVuejsAnimateGesture)
  }

  function liyaAiEnvVuejsGetCurrentKeyframe(): LiyaAiEnvVuejsGestureKeyframe {
    const { currentGesture, progress, intensity } = liyaAiEnvVuejsCurrentGestureState.value
    const definition = LIYA_AI_ENV_VUEJS_GESTURE_DEFINITIONS[currentGesture]
    
    if (!definition) {
      return { time: 0 }
    }

    const keyframe = liyaAiEnvVuejsInterpolateKeyframes(definition.keyframes, progress)
    
    // Apply intensity scaling
    return liyaAiEnvVuejsScaleKeyframe(keyframe, intensity)
  }

  function liyaAiEnvVuejsScaleKeyframe(
    keyframe: LiyaAiEnvVuejsGestureKeyframe, 
    intensity: number
  ): LiyaAiEnvVuejsGestureKeyframe {
    const scaled: LiyaAiEnvVuejsGestureKeyframe = { time: keyframe.time }

    if (keyframe.leftArm) {
      scaled.leftArm = {
        shoulderRotation: keyframe.leftArm.shoulderRotation ? {
          x: keyframe.leftArm.shoulderRotation.x * intensity,
          y: keyframe.leftArm.shoulderRotation.y * intensity,
          z: keyframe.leftArm.shoulderRotation.z * intensity
        } : undefined,
        elbowRotation: keyframe.leftArm.elbowRotation ? {
          x: keyframe.leftArm.elbowRotation.x * intensity,
          y: keyframe.leftArm.elbowRotation.y * intensity,
          z: keyframe.leftArm.elbowRotation.z * intensity
        } : undefined,
        wristRotation: keyframe.leftArm.wristRotation ? {
          x: keyframe.leftArm.wristRotation.x * intensity,
          y: keyframe.leftArm.wristRotation.y * intensity,
          z: keyframe.leftArm.wristRotation.z * intensity
        } : undefined
      }
    }

    if (keyframe.rightArm) {
      scaled.rightArm = {
        shoulderRotation: keyframe.rightArm.shoulderRotation ? {
          x: keyframe.rightArm.shoulderRotation.x * intensity,
          y: keyframe.rightArm.shoulderRotation.y * intensity,
          z: keyframe.rightArm.shoulderRotation.z * intensity
        } : undefined,
        elbowRotation: keyframe.rightArm.elbowRotation ? {
          x: keyframe.rightArm.elbowRotation.x * intensity,
          y: keyframe.rightArm.elbowRotation.y * intensity,
          z: keyframe.rightArm.elbowRotation.z * intensity
        } : undefined,
        wristRotation: keyframe.rightArm.wristRotation ? {
          x: keyframe.rightArm.wristRotation.x * intensity,
          y: keyframe.rightArm.wristRotation.y * intensity,
          z: keyframe.rightArm.wristRotation.z * intensity
        } : undefined
      }
    }

    if (keyframe.head) {
      scaled.head = {
        rotation: keyframe.head.rotation ? {
          x: keyframe.head.rotation.x * intensity,
          y: keyframe.head.rotation.y * intensity,
          z: keyframe.head.rotation.z * intensity
        } : undefined,
        eyeLookAt: keyframe.head.eyeLookAt
      }
    }

    if (keyframe.body) {
      scaled.body = {
        rotation: keyframe.body.rotation ? {
          x: keyframe.body.rotation.x * intensity,
          y: keyframe.body.rotation.y * intensity,
          z: keyframe.body.rotation.z * intensity
        } : undefined,
        lean: keyframe.body.lean ? {
          x: keyframe.body.lean.x * intensity,
          z: keyframe.body.lean.z * intensity
        } : undefined
      }
    }

    return scaled
  }

  function liyaAiEnvVuejsStopGestures(): void {
    if (liyaAiEnvVuejsAnimationFrameId) {
      cancelAnimationFrame(liyaAiEnvVuejsAnimationFrameId)
      liyaAiEnvVuejsAnimationFrameId = null
    }
    liyaAiEnvVuejsGestureQueue.value = []
    liyaAiEnvVuejsIsAnimating.value = false
    liyaAiEnvVuejsCurrentGestureState.value = {
      currentGesture: 'idle',
      intensity: 0,
      progress: 0
    }
  }

  return {
    currentGesture,
    gestureIntensity,
    gestureProgress,
    isAnimating,
    triggerGesture: liyaAiEnvVuejsTriggerGesture,
    setGesturesFromApi: liyaAiEnvVuejsSetGesturesFromApi,
    getCurrentKeyframe: liyaAiEnvVuejsGetCurrentKeyframe,
    stopGestures: liyaAiEnvVuejsStopGestures
  }
}
