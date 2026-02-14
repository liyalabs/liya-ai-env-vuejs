// Liya AI Environment - Gesture Type Definitions

import type { LiyaAiEnvVuejsGestureType } from './index'

// ============================================================================
// Gesture Animation Definitions
// ============================================================================

export interface LiyaAiEnvVuejsGestureKeyframe {
  time: number // 0.0 - 1.0 (normalized)
  leftArm?: LiyaAiEnvVuejsArmPose
  rightArm?: LiyaAiEnvVuejsArmPose
  head?: LiyaAiEnvVuejsHeadPose
  body?: LiyaAiEnvVuejsBodyPose
}

export interface LiyaAiEnvVuejsArmPose {
  shoulderRotation?: { x: number; y: number; z: number }
  elbowRotation?: { x: number; y: number; z: number }
  wristRotation?: { x: number; y: number; z: number }
}

export interface LiyaAiEnvVuejsHeadPose {
  rotation?: { x: number; y: number; z: number }
  eyeLookAt?: { x: number; y: number }
}

export interface LiyaAiEnvVuejsBodyPose {
  rotation?: { x: number; y: number; z: number }
  lean?: { x: number; z: number }
}

export interface LiyaAiEnvVuejsGestureDefinition {
  type: LiyaAiEnvVuejsGestureType
  name: string
  duration: number // seconds
  keyframes: LiyaAiEnvVuejsGestureKeyframe[]
  loop?: boolean
  easing?: 'linear' | 'ease-in' | 'ease-out' | 'ease-in-out'
}

// ============================================================================
// Predefined Gesture Animations
// ============================================================================

export const LIYA_AI_ENV_VUEJS_GESTURE_DEFINITIONS: Record<LiyaAiEnvVuejsGestureType, LiyaAiEnvVuejsGestureDefinition> = {
  idle: {
    type: 'idle',
    name: 'Idle',
    duration: 4.0,
    loop: true,
    easing: 'ease-in-out',
    keyframes: [
      {
        time: 0,
        body: { lean: { x: 0, z: 0 } },
        head: { rotation: { x: 0, y: 0, z: 0 } }
      },
      {
        time: 0.5,
        body: { lean: { x: 0.01, z: 0 } },
        head: { rotation: { x: 0.02, y: 0.01, z: 0 } }
      },
      {
        time: 1,
        body: { lean: { x: 0, z: 0 } },
        head: { rotation: { x: 0, y: 0, z: 0 } }
      }
    ]
  },
  
  explain: {
    type: 'explain',
    name: 'Explain',
    duration: 2.0,
    loop: false,
    easing: 'ease-in-out',
    keyframes: [
      {
        time: 0,
        leftArm: { shoulderRotation: { x: 0, y: 0, z: 0 }, elbowRotation: { x: 0, y: 0, z: 0 } },
        rightArm: { shoulderRotation: { x: 0, y: 0, z: 0 }, elbowRotation: { x: 0, y: 0, z: 0 } }
      },
      {
        time: 0.3,
        leftArm: { shoulderRotation: { x: -0.3, y: 0.2, z: 0 }, elbowRotation: { x: 0.5, y: 0, z: 0 } },
        rightArm: { shoulderRotation: { x: -0.4, y: -0.2, z: 0 }, elbowRotation: { x: 0.6, y: 0, z: 0 } }
      },
      {
        time: 0.7,
        leftArm: { shoulderRotation: { x: -0.4, y: 0.3, z: 0 }, elbowRotation: { x: 0.4, y: 0, z: 0 } },
        rightArm: { shoulderRotation: { x: -0.3, y: -0.3, z: 0 }, elbowRotation: { x: 0.5, y: 0, z: 0 } }
      },
      {
        time: 1,
        leftArm: { shoulderRotation: { x: 0, y: 0, z: 0 }, elbowRotation: { x: 0, y: 0, z: 0 } },
        rightArm: { shoulderRotation: { x: 0, y: 0, z: 0 }, elbowRotation: { x: 0, y: 0, z: 0 } }
      }
    ]
  },
  
  emphasize: {
    type: 'emphasize',
    name: 'Emphasize',
    duration: 1.5,
    loop: false,
    easing: 'ease-out',
    keyframes: [
      {
        time: 0,
        rightArm: { shoulderRotation: { x: 0, y: 0, z: 0 }, elbowRotation: { x: 0, y: 0, z: 0 } },
        head: { rotation: { x: 0, y: 0, z: 0 } }
      },
      {
        time: 0.2,
        rightArm: { shoulderRotation: { x: -0.5, y: 0, z: 0 }, elbowRotation: { x: 0.8, y: 0, z: 0 } },
        head: { rotation: { x: 0.05, y: 0, z: 0 } }
      },
      {
        time: 0.4,
        rightArm: { shoulderRotation: { x: -0.6, y: 0, z: 0 }, elbowRotation: { x: 0.6, y: 0, z: 0 } },
        head: { rotation: { x: -0.05, y: 0, z: 0 } }
      },
      {
        time: 1,
        rightArm: { shoulderRotation: { x: 0, y: 0, z: 0 }, elbowRotation: { x: 0, y: 0, z: 0 } },
        head: { rotation: { x: 0, y: 0, z: 0 } }
      }
    ]
  },
  
  point: {
    type: 'point',
    name: 'Point',
    duration: 2.0,
    loop: false,
    easing: 'ease-in-out',
    keyframes: [
      {
        time: 0,
        rightArm: { shoulderRotation: { x: 0, y: 0, z: 0 }, elbowRotation: { x: 0, y: 0, z: 0 } }
      },
      {
        time: 0.3,
        rightArm: { shoulderRotation: { x: -0.8, y: 0.3, z: 0 }, elbowRotation: { x: 0.2, y: 0, z: 0 } }
      },
      {
        time: 0.7,
        rightArm: { shoulderRotation: { x: -0.8, y: 0.3, z: 0 }, elbowRotation: { x: 0.2, y: 0, z: 0 } }
      },
      {
        time: 1,
        rightArm: { shoulderRotation: { x: 0, y: 0, z: 0 }, elbowRotation: { x: 0, y: 0, z: 0 } }
      }
    ]
  },
  
  wave: {
    type: 'wave',
    name: 'Wave',
    duration: 2.0,
    loop: false,
    easing: 'ease-in-out',
    keyframes: [
      {
        time: 0,
        rightArm: { shoulderRotation: { x: 0, y: 0, z: 0 }, wristRotation: { x: 0, y: 0, z: 0 } }
      },
      {
        time: 0.2,
        rightArm: { shoulderRotation: { x: -1.2, y: 0.5, z: 0 }, wristRotation: { x: 0, y: 0, z: 0.3 } }
      },
      {
        time: 0.4,
        rightArm: { shoulderRotation: { x: -1.2, y: 0.5, z: 0 }, wristRotation: { x: 0, y: 0, z: -0.3 } }
      },
      {
        time: 0.6,
        rightArm: { shoulderRotation: { x: -1.2, y: 0.5, z: 0 }, wristRotation: { x: 0, y: 0, z: 0.3 } }
      },
      {
        time: 0.8,
        rightArm: { shoulderRotation: { x: -1.2, y: 0.5, z: 0 }, wristRotation: { x: 0, y: 0, z: -0.3 } }
      },
      {
        time: 1,
        rightArm: { shoulderRotation: { x: 0, y: 0, z: 0 }, wristRotation: { x: 0, y: 0, z: 0 } }
      }
    ]
  },
  
  think: {
    type: 'think',
    name: 'Think',
    duration: 3.0,
    loop: false,
    easing: 'ease-in-out',
    keyframes: [
      {
        time: 0,
        rightArm: { shoulderRotation: { x: 0, y: 0, z: 0 }, elbowRotation: { x: 0, y: 0, z: 0 } },
        head: { rotation: { x: 0, y: 0, z: 0 } }
      },
      {
        time: 0.3,
        rightArm: { shoulderRotation: { x: -0.3, y: 0.8, z: 0 }, elbowRotation: { x: 1.5, y: 0, z: 0 } },
        head: { rotation: { x: 0.1, y: 0.1, z: 0.05 } }
      },
      {
        time: 0.7,
        rightArm: { shoulderRotation: { x: -0.3, y: 0.8, z: 0 }, elbowRotation: { x: 1.5, y: 0, z: 0 } },
        head: { rotation: { x: 0.1, y: -0.1, z: -0.05 } }
      },
      {
        time: 1,
        rightArm: { shoulderRotation: { x: 0, y: 0, z: 0 }, elbowRotation: { x: 0, y: 0, z: 0 } },
        head: { rotation: { x: 0, y: 0, z: 0 } }
      }
    ]
  },
  
  nod: {
    type: 'nod',
    name: 'Nod',
    duration: 1.0,
    loop: false,
    easing: 'ease-in-out',
    keyframes: [
      {
        time: 0,
        head: { rotation: { x: 0, y: 0, z: 0 } }
      },
      {
        time: 0.25,
        head: { rotation: { x: 0.15, y: 0, z: 0 } }
      },
      {
        time: 0.5,
        head: { rotation: { x: -0.05, y: 0, z: 0 } }
      },
      {
        time: 0.75,
        head: { rotation: { x: 0.1, y: 0, z: 0 } }
      },
      {
        time: 1,
        head: { rotation: { x: 0, y: 0, z: 0 } }
      }
    ]
  },
  
  shrug: {
    type: 'shrug',
    name: 'Shrug',
    duration: 1.5,
    loop: false,
    easing: 'ease-in-out',
    keyframes: [
      {
        time: 0,
        leftArm: { shoulderRotation: { x: 0, y: 0, z: 0 } },
        rightArm: { shoulderRotation: { x: 0, y: 0, z: 0 } },
        head: { rotation: { x: 0, y: 0, z: 0 } }
      },
      {
        time: 0.3,
        leftArm: { shoulderRotation: { x: 0, y: 0, z: -0.3 } },
        rightArm: { shoulderRotation: { x: 0, y: 0, z: 0.3 } },
        head: { rotation: { x: 0, y: 0, z: 0.05 } }
      },
      {
        time: 0.6,
        leftArm: { shoulderRotation: { x: 0, y: 0, z: -0.3 } },
        rightArm: { shoulderRotation: { x: 0, y: 0, z: 0.3 } },
        head: { rotation: { x: 0, y: 0, z: -0.05 } }
      },
      {
        time: 1,
        leftArm: { shoulderRotation: { x: 0, y: 0, z: 0 } },
        rightArm: { shoulderRotation: { x: 0, y: 0, z: 0 } },
        head: { rotation: { x: 0, y: 0, z: 0 } }
      }
    ]
  }
}

// ============================================================================
// Gesture Utilities
// ============================================================================

export function liyaAiEnvVuejsGetGestureDefinition(type: LiyaAiEnvVuejsGestureType): LiyaAiEnvVuejsGestureDefinition {
  return LIYA_AI_ENV_VUEJS_GESTURE_DEFINITIONS[type]
}

export function liyaAiEnvVuejsInterpolateKeyframes(
  keyframes: LiyaAiEnvVuejsGestureKeyframe[],
  progress: number
): LiyaAiEnvVuejsGestureKeyframe {
  if (keyframes.length === 0) {
    return { time: 0 }
  }
  
  if (keyframes.length === 1) {
    return keyframes[0]
  }
  
  // Find surrounding keyframes
  let prevKeyframe = keyframes[0]
  let nextKeyframe = keyframes[keyframes.length - 1]
  
  for (let i = 0; i < keyframes.length - 1; i++) {
    if (progress >= keyframes[i].time && progress <= keyframes[i + 1].time) {
      prevKeyframe = keyframes[i]
      nextKeyframe = keyframes[i + 1]
      break
    }
  }
  
  // Calculate local progress between keyframes
  const localProgress = (progress - prevKeyframe.time) / (nextKeyframe.time - prevKeyframe.time)
  
  // Interpolate values
  return liyaAiEnvVuejsLerpKeyframe(prevKeyframe, nextKeyframe, localProgress)
}

function liyaAiEnvVuejsLerpKeyframe(
  a: LiyaAiEnvVuejsGestureKeyframe,
  b: LiyaAiEnvVuejsGestureKeyframe,
  t: number
): LiyaAiEnvVuejsGestureKeyframe {
  const result: LiyaAiEnvVuejsGestureKeyframe = { time: a.time + (b.time - a.time) * t }
  
  // Interpolate arm poses
  if (a.leftArm || b.leftArm) {
    result.leftArm = liyaAiEnvVuejsLerpArmPose(a.leftArm, b.leftArm, t)
  }
  if (a.rightArm || b.rightArm) {
    result.rightArm = liyaAiEnvVuejsLerpArmPose(a.rightArm, b.rightArm, t)
  }
  
  // Interpolate head pose
  if (a.head || b.head) {
    result.head = liyaAiEnvVuejsLerpHeadPose(a.head, b.head, t)
  }
  
  // Interpolate body pose
  if (a.body || b.body) {
    result.body = liyaAiEnvVuejsLerpBodyPose(a.body, b.body, t)
  }
  
  return result
}

function liyaAiEnvVuejsLerpArmPose(
  a: LiyaAiEnvVuejsArmPose | undefined,
  b: LiyaAiEnvVuejsArmPose | undefined,
  t: number
): LiyaAiEnvVuejsArmPose {
  const defaultPose = { x: 0, y: 0, z: 0 }
  return {
    shoulderRotation: liyaAiEnvVuejsLerpVec3(
      a?.shoulderRotation || defaultPose,
      b?.shoulderRotation || defaultPose,
      t
    ),
    elbowRotation: liyaAiEnvVuejsLerpVec3(
      a?.elbowRotation || defaultPose,
      b?.elbowRotation || defaultPose,
      t
    ),
    wristRotation: liyaAiEnvVuejsLerpVec3(
      a?.wristRotation || defaultPose,
      b?.wristRotation || defaultPose,
      t
    )
  }
}

function liyaAiEnvVuejsLerpHeadPose(
  a: LiyaAiEnvVuejsHeadPose | undefined,
  b: LiyaAiEnvVuejsHeadPose | undefined,
  t: number
): LiyaAiEnvVuejsHeadPose {
  return {
    rotation: liyaAiEnvVuejsLerpVec3(
      a?.rotation || { x: 0, y: 0, z: 0 },
      b?.rotation || { x: 0, y: 0, z: 0 },
      t
    ),
    eyeLookAt: {
      x: (a?.eyeLookAt?.x || 0) + ((b?.eyeLookAt?.x || 0) - (a?.eyeLookAt?.x || 0)) * t,
      y: (a?.eyeLookAt?.y || 0) + ((b?.eyeLookAt?.y || 0) - (a?.eyeLookAt?.y || 0)) * t
    }
  }
}

function liyaAiEnvVuejsLerpBodyPose(
  a: LiyaAiEnvVuejsBodyPose | undefined,
  b: LiyaAiEnvVuejsBodyPose | undefined,
  t: number
): LiyaAiEnvVuejsBodyPose {
  return {
    rotation: liyaAiEnvVuejsLerpVec3(
      a?.rotation || { x: 0, y: 0, z: 0 },
      b?.rotation || { x: 0, y: 0, z: 0 },
      t
    ),
    lean: {
      x: (a?.lean?.x || 0) + ((b?.lean?.x || 0) - (a?.lean?.x || 0)) * t,
      z: (a?.lean?.z || 0) + ((b?.lean?.z || 0) - (a?.lean?.z || 0)) * t
    }
  }
}

function liyaAiEnvVuejsLerpVec3(
  a: { x: number; y: number; z: number },
  b: { x: number; y: number; z: number },
  t: number
): { x: number; y: number; z: number } {
  return {
    x: a.x + (b.x - a.x) * t,
    y: a.y + (b.y - a.y) * t,
    z: a.z + (b.z - a.z) * t
  }
}
