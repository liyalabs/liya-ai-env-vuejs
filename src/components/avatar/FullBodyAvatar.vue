<script setup lang="ts">
import { } from 'vue'
import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import type { LiyaAiEnvVuejsViseme, LiyaAiEnvVuejsAnimationConfig } from '../../types'
import { useLiyaAiEnvVuejsGestures } from '../../composables/useGestures'

interface Props {
  modelUrl?: string
  isSpeaking?: boolean
  visemes?: LiyaAiEnvVuejsViseme[]
  currentTime?: number
  animationConfig?: LiyaAiEnvVuejsAnimationConfig
}

const props = withDefaults(defineProps<Props>(), {
  modelUrl: '',
  isSpeaking: false,
  visemes: () => [],
  currentTime: 0,
  animationConfig: () => ({
    lipSyncSpeed: 0.02,
    lipSyncIntensity: 0.5,
    blinkSpeed: 0.25,
    blinkIntervalMin: 1500,
    blinkIntervalMax: 3500,
    eyeMoveSpeed: 0.12,
    eyeMoveIntervalMin: 500,
    eyeMoveIntervalMax: 1500,
    eyeMoveRange: 0.4,
    breathingSpeed: 0.4,
    breathingIntensity: 0.015,
    gestureSpeed: 0.5,
    gestureIntensity: 0.2
  })
})

const emit = defineEmits<{
  loaded: []
  error: [error: Error]
  progress: [progress: number]
}>()

const { getCurrentKeyframe } = useLiyaAiEnvVuejsGestures()

// Refs
let liyaAiEnvVuejsModel: THREE.Object3D | null = null
let liyaAiEnvVuejsMixer: THREE.AnimationMixer | null = null
let liyaAiEnvVuejsMorphTargetMeshes: THREE.Mesh[] = []
let liyaAiEnvVuejsCurrentMorphValues: Record<string, number> = {}

// Bone references
let liyaAiEnvVuejsSpineBone: THREE.Object3D | null = null
let liyaAiEnvVuejsHeadBone: THREE.Object3D | null = null
let liyaAiEnvVuejsLeftShoulderBone: THREE.Object3D | null = null
let liyaAiEnvVuejsRightShoulderBone: THREE.Object3D | null = null
let liyaAiEnvVuejsLeftElbowBone: THREE.Object3D | null = null
let liyaAiEnvVuejsRightElbowBone: THREE.Object3D | null = null
// Wrist bones reserved for future use
// let liyaAiEnvVuejsLeftWristBone: THREE.Object3D | null = null
// let liyaAiEnvVuejsRightWristBone: THREE.Object3D | null = null

// Animation state
let liyaAiEnvVuejsLastBlinkTime = 0
let liyaAiEnvVuejsIsBlinking = false
let liyaAiEnvVuejsBlinkProgress = 0
let liyaAiEnvVuejsNextBlinkInterval = 3000
let liyaAiEnvVuejsEyeLookTarget = { x: 0, y: 0 }
let liyaAiEnvVuejsEyeLookCurrent = { x: 0, y: 0 }
let liyaAiEnvVuejsLastEyeMoveTime = 0
let liyaAiEnvVuejsNextEyeMoveInterval = 2000
let liyaAiEnvVuejsBreathPhase = 0

// Viseme mapping for Ready Player Me / ARKit
const LIYA_AI_ENV_VUEJS_VISEME_MORPH_MAP: Record<number, string[]> = {
  0: [],
  1: ['mouthClose', 'mouthPressLeft', 'mouthPressRight'],
  2: ['mouthFunnel', 'mouthLowerDownLeft', 'mouthLowerDownRight'],
  3: ['mouthLowerDownLeft', 'mouthLowerDownRight', 'tongueOut'],
  4: ['mouthLowerDownLeft', 'mouthLowerDownRight'],
  5: ['mouthLowerDownLeft', 'mouthLowerDownRight'],
  6: ['mouthFunnel', 'mouthShrugUpper'],
  7: ['mouthSmileLeft', 'mouthSmileRight', 'mouthLowerDownLeft', 'mouthLowerDownRight'],
  8: ['mouthLowerDownLeft', 'mouthLowerDownRight'],
  9: ['mouthLowerDownLeft', 'mouthLowerDownRight', 'mouthRollLower'],
  10: ['mouthLowerDownLeft', 'mouthLowerDownRight', 'mouthUpperUpLeft', 'mouthUpperUpRight'],
  11: ['mouthSmileLeft', 'mouthSmileRight', 'mouthLowerDownLeft', 'mouthLowerDownRight'],
  12: ['mouthSmileLeft', 'mouthSmileRight', 'mouthStretchLeft', 'mouthStretchRight'],
  13: ['mouthFunnel', 'mouthLowerDownLeft', 'mouthLowerDownRight'],
  14: ['mouthPucker', 'mouthFunnel']
}

function liyaAiEnvVuejsLoadModel(url: string, scene: THREE.Scene): Promise<void> {
  return new Promise((resolve, reject) => {
    const loader = new GLTFLoader()

    loader.load(
      url,
      (gltf) => {
        liyaAiEnvVuejsModel = gltf.scene
        scene.add(liyaAiEnvVuejsModel)

        // Find morph target meshes
        liyaAiEnvVuejsMorphTargetMeshes = []
        liyaAiEnvVuejsModel.traverse((child) => {
          if (child instanceof THREE.Mesh && child.morphTargetInfluences) {
            liyaAiEnvVuejsMorphTargetMeshes.push(child)
          }
        })

        // Find bones
        liyaAiEnvVuejsFindBones(liyaAiEnvVuejsModel)

        // Setup animations if available
        if (gltf.animations.length > 0) {
          liyaAiEnvVuejsMixer = new THREE.AnimationMixer(liyaAiEnvVuejsModel)
        }

        emit('loaded')
        resolve()
      },
      (progress) => {
        if (progress.total > 0) {
          const percent = (progress.loaded / progress.total) * 100
          emit('progress', percent)
        }
      },
      (error) => {
        emit('error', error as Error)
        reject(error)
      }
    )
  })
}

function liyaAiEnvVuejsFindBones(model: THREE.Object3D): void {
  model.traverse((child) => {
    const name = child.name.toLowerCase()

    if (name.includes('spine') && !liyaAiEnvVuejsSpineBone) {
      liyaAiEnvVuejsSpineBone = child
    }
    if (name.includes('head') && !liyaAiEnvVuejsHeadBone) {
      liyaAiEnvVuejsHeadBone = child
    }
    if (name.includes('leftshoulder') || name.includes('left_shoulder')) {
      liyaAiEnvVuejsLeftShoulderBone = child
    }
    if (name.includes('rightshoulder') || name.includes('right_shoulder')) {
      liyaAiEnvVuejsRightShoulderBone = child
    }
    if (name.includes('leftelbow') || name.includes('left_elbow') || name.includes('leftforearm')) {
      liyaAiEnvVuejsLeftElbowBone = child
    }
    if (name.includes('rightelbow') || name.includes('right_elbow') || name.includes('rightforearm')) {
      liyaAiEnvVuejsRightElbowBone = child
    }
    // Wrist bones reserved for future use
    // if (name.includes('leftwrist') || name.includes('left_wrist') || name.includes('lefthand')) {
    //   liyaAiEnvVuejsLeftWristBone = child
    // }
    // if (name.includes('rightwrist') || name.includes('right_wrist') || name.includes('righthand')) {
    //   liyaAiEnvVuejsRightWristBone = child
    // }
  })
}

function liyaAiEnvVuejsUpdateLipSync(deltaTime: number): void {
  if (!props.isSpeaking || props.visemes.length === 0) {
    // Reset mouth morphs
    liyaAiEnvVuejsResetMouthMorphs(deltaTime)
    return
  }

  // Find current viseme
  const currentTime = props.currentTime
  let currentViseme = 0

  for (const viseme of props.visemes) {
    if (currentTime >= viseme.time && currentTime < viseme.time + viseme.duration) {
      currentViseme = viseme.viseme
      break
    }
  }

  // Apply viseme morphs
  const morphTargets = LIYA_AI_ENV_VUEJS_VISEME_MORPH_MAP[currentViseme] || []
  const intensity = props.animationConfig?.lipSyncIntensity || 0.5
  const speed = props.animationConfig?.lipSyncSpeed || 0.02

  for (const mesh of liyaAiEnvVuejsMorphTargetMeshes) {
    if (!mesh.morphTargetDictionary || !mesh.morphTargetInfluences) continue

    for (const [morphName, index] of Object.entries(mesh.morphTargetDictionary)) {
      const targetValue = morphTargets.includes(morphName) ? intensity : 0
      const currentValue = liyaAiEnvVuejsCurrentMorphValues[morphName] || 0
      const newValue = currentValue + (targetValue - currentValue) * speed

      mesh.morphTargetInfluences[index] = newValue
      liyaAiEnvVuejsCurrentMorphValues[morphName] = newValue
    }
  }
}

function liyaAiEnvVuejsResetMouthMorphs(_deltaTime: number): void {
  const speed = props.animationConfig?.lipSyncSpeed || 0.02

  for (const mesh of liyaAiEnvVuejsMorphTargetMeshes) {
    if (!mesh.morphTargetDictionary || !mesh.morphTargetInfluences) continue

    for (const [morphName, index] of Object.entries(mesh.morphTargetDictionary)) {
      if (morphName.startsWith('mouth')) {
        const currentValue = liyaAiEnvVuejsCurrentMorphValues[morphName] || 0
        const newValue = currentValue * (1 - speed)

        mesh.morphTargetInfluences[index] = newValue
        liyaAiEnvVuejsCurrentMorphValues[morphName] = newValue
      }
    }
  }
}

function liyaAiEnvVuejsUpdateBlink(_deltaTime: number, time: number): void {
  const config = props.animationConfig || {}
  const blinkSpeed = config.blinkSpeed || 0.25
  const blinkIntervalMin = config.blinkIntervalMin || 1500
  const blinkIntervalMax = config.blinkIntervalMax || 3500

  // Check if it's time to blink
  if (!liyaAiEnvVuejsIsBlinking && time - liyaAiEnvVuejsLastBlinkTime > liyaAiEnvVuejsNextBlinkInterval) {
    liyaAiEnvVuejsIsBlinking = true
    liyaAiEnvVuejsBlinkProgress = 0
    liyaAiEnvVuejsLastBlinkTime = time
    liyaAiEnvVuejsNextBlinkInterval = blinkIntervalMin + Math.random() * (blinkIntervalMax - blinkIntervalMin)
  }

  // Animate blink
  if (liyaAiEnvVuejsIsBlinking) {
    liyaAiEnvVuejsBlinkProgress += blinkSpeed

    let blinkValue = 0
    if (liyaAiEnvVuejsBlinkProgress < 0.5) {
      blinkValue = liyaAiEnvVuejsBlinkProgress * 2
    } else {
      blinkValue = 1 - (liyaAiEnvVuejsBlinkProgress - 0.5) * 2
    }

    // Apply blink morph
    for (const mesh of liyaAiEnvVuejsMorphTargetMeshes) {
      if (!mesh.morphTargetDictionary || !mesh.morphTargetInfluences) continue

      const leftBlinkIndex = mesh.morphTargetDictionary['eyeBlinkLeft']
      const rightBlinkIndex = mesh.morphTargetDictionary['eyeBlinkRight']

      if (leftBlinkIndex !== undefined) {
        mesh.morphTargetInfluences[leftBlinkIndex] = blinkValue
      }
      if (rightBlinkIndex !== undefined) {
        mesh.morphTargetInfluences[rightBlinkIndex] = blinkValue
      }
    }

    if (liyaAiEnvVuejsBlinkProgress >= 1) {
      liyaAiEnvVuejsIsBlinking = false
    }
  }
}

function liyaAiEnvVuejsUpdateEyeMovement(_deltaTime: number, time: number): void {
  const config = props.animationConfig || {}
  const eyeMoveSpeed = config.eyeMoveSpeed || 0.12
  const eyeMoveIntervalMin = config.eyeMoveIntervalMin || 500
  const eyeMoveIntervalMax = config.eyeMoveIntervalMax || 1500
  const eyeMoveRange = config.eyeMoveRange || 0.4

  // Update eye target
  if (time - liyaAiEnvVuejsLastEyeMoveTime > liyaAiEnvVuejsNextEyeMoveInterval) {
    liyaAiEnvVuejsEyeLookTarget = {
      x: (Math.random() - 0.5) * eyeMoveRange,
      y: (Math.random() - 0.5) * eyeMoveRange * 0.5
    }
    liyaAiEnvVuejsLastEyeMoveTime = time
    liyaAiEnvVuejsNextEyeMoveInterval = eyeMoveIntervalMin + Math.random() * (eyeMoveIntervalMax - eyeMoveIntervalMin)
  }

  // Smooth eye movement
  liyaAiEnvVuejsEyeLookCurrent.x += (liyaAiEnvVuejsEyeLookTarget.x - liyaAiEnvVuejsEyeLookCurrent.x) * eyeMoveSpeed
  liyaAiEnvVuejsEyeLookCurrent.y += (liyaAiEnvVuejsEyeLookTarget.y - liyaAiEnvVuejsEyeLookCurrent.y) * eyeMoveSpeed

  // Apply eye morphs
  for (const mesh of liyaAiEnvVuejsMorphTargetMeshes) {
    if (!mesh.morphTargetDictionary || !mesh.morphTargetInfluences) continue

    const lookLeftIndex = mesh.morphTargetDictionary['eyeLookOutLeft']
    const lookRightIndex = mesh.morphTargetDictionary['eyeLookOutRight']
    const lookUpIndex = mesh.morphTargetDictionary['eyeLookUpLeft']
    const lookDownIndex = mesh.morphTargetDictionary['eyeLookDownLeft']

    if (liyaAiEnvVuejsEyeLookCurrent.x > 0 && lookRightIndex !== undefined) {
      mesh.morphTargetInfluences[lookRightIndex] = liyaAiEnvVuejsEyeLookCurrent.x
    }
    if (liyaAiEnvVuejsEyeLookCurrent.x < 0 && lookLeftIndex !== undefined) {
      mesh.morphTargetInfluences[lookLeftIndex] = -liyaAiEnvVuejsEyeLookCurrent.x
    }
    if (liyaAiEnvVuejsEyeLookCurrent.y > 0 && lookUpIndex !== undefined) {
      mesh.morphTargetInfluences[lookUpIndex] = liyaAiEnvVuejsEyeLookCurrent.y
    }
    if (liyaAiEnvVuejsEyeLookCurrent.y < 0 && lookDownIndex !== undefined) {
      mesh.morphTargetInfluences[lookDownIndex] = -liyaAiEnvVuejsEyeLookCurrent.y
    }
  }
}

function liyaAiEnvVuejsUpdateBreathing(deltaTime: number, _time: number): void {
  const config = props.animationConfig || {}
  const breathingSpeed = config.breathingSpeed || 0.4
  const breathingIntensity = config.breathingIntensity || 0.015

  liyaAiEnvVuejsBreathPhase += deltaTime * breathingSpeed
  const breathValue = Math.sin(liyaAiEnvVuejsBreathPhase) * breathingIntensity

  // Apply to spine bone
  if (liyaAiEnvVuejsSpineBone) {
    liyaAiEnvVuejsSpineBone.position.y += breathValue * 0.01
  }
}

function liyaAiEnvVuejsUpdateGestures(_deltaTime: number): void {
  const keyframe = getCurrentKeyframe()

  // Apply arm rotations
  if (keyframe.leftArm && liyaAiEnvVuejsLeftShoulderBone) {
    if (keyframe.leftArm.shoulderRotation) {
      liyaAiEnvVuejsLeftShoulderBone.rotation.x = keyframe.leftArm.shoulderRotation.x
      liyaAiEnvVuejsLeftShoulderBone.rotation.y = keyframe.leftArm.shoulderRotation.y
      liyaAiEnvVuejsLeftShoulderBone.rotation.z = keyframe.leftArm.shoulderRotation.z
    }
  }

  if (keyframe.rightArm && liyaAiEnvVuejsRightShoulderBone) {
    if (keyframe.rightArm.shoulderRotation) {
      liyaAiEnvVuejsRightShoulderBone.rotation.x = keyframe.rightArm.shoulderRotation.x
      liyaAiEnvVuejsRightShoulderBone.rotation.y = keyframe.rightArm.shoulderRotation.y
      liyaAiEnvVuejsRightShoulderBone.rotation.z = keyframe.rightArm.shoulderRotation.z
    }
  }

  if (keyframe.leftArm?.elbowRotation && liyaAiEnvVuejsLeftElbowBone) {
    liyaAiEnvVuejsLeftElbowBone.rotation.x = keyframe.leftArm.elbowRotation.x
  }

  if (keyframe.rightArm?.elbowRotation && liyaAiEnvVuejsRightElbowBone) {
    liyaAiEnvVuejsRightElbowBone.rotation.x = keyframe.rightArm.elbowRotation.x
  }

  // Apply head rotation
  if (keyframe.head?.rotation && liyaAiEnvVuejsHeadBone) {
    liyaAiEnvVuejsHeadBone.rotation.x = keyframe.head.rotation.x
    liyaAiEnvVuejsHeadBone.rotation.y = keyframe.head.rotation.y
    liyaAiEnvVuejsHeadBone.rotation.z = keyframe.head.rotation.z
  }

  // Apply body lean
  if (keyframe.body?.lean && liyaAiEnvVuejsSpineBone) {
    liyaAiEnvVuejsSpineBone.rotation.x = keyframe.body.lean.x
    liyaAiEnvVuejsSpineBone.rotation.z = keyframe.body.lean.z
  }
}

function liyaAiEnvVuejsUpdate(deltaTime: number, time: number): void {
  if (!liyaAiEnvVuejsModel) return

  // Update mixer if available
  if (liyaAiEnvVuejsMixer) {
    liyaAiEnvVuejsMixer.update(deltaTime)
  }

  // Update animations
  liyaAiEnvVuejsUpdateLipSync(deltaTime)
  liyaAiEnvVuejsUpdateBlink(deltaTime, time)
  liyaAiEnvVuejsUpdateEyeMovement(deltaTime, time)
  liyaAiEnvVuejsUpdateBreathing(deltaTime, time)
  liyaAiEnvVuejsUpdateGestures(deltaTime)
}

function liyaAiEnvVuejsGetModel(): THREE.Object3D | null {
  return liyaAiEnvVuejsModel
}

function liyaAiEnvVuejsDispose(): void {
  if (liyaAiEnvVuejsModel) {
    liyaAiEnvVuejsModel.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        child.geometry?.dispose()
        if (Array.isArray(child.material)) {
          child.material.forEach((m) => m.dispose())
        } else {
          child.material?.dispose()
        }
      }
    })
  }
  liyaAiEnvVuejsMixer = null
  liyaAiEnvVuejsMorphTargetMeshes = []
}

// Expose methods
defineExpose({
  loadModel: liyaAiEnvVuejsLoadModel,
  update: liyaAiEnvVuejsUpdate,
  getModel: liyaAiEnvVuejsGetModel,
  dispose: liyaAiEnvVuejsDispose
})
</script>

<template>
  <div class="liya-ai-env-vuejs-full-body-avatar">
    <slot></slot>
  </div>
</template>

<style scoped>
.liya-ai-env-vuejs-full-body-avatar {
  width: 100%;
  height: 100%;
}
</style>
