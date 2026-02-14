<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted, watch } from 'vue'
import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import type { 
  LiyaAiEnvVuejsViseme, 
  LiyaAiEnvVuejsGesture,
  LiyaAiEnvVuejsPosition,
  LiyaAiEnvVuejsCameraConfig,
  LiyaAiEnvVuejsAnimationConfig,
  LiyaAiEnvVuejsPresentationResult
} from '../../types'
import { useLiyaAiEnvVuejsGestures } from '../../composables/useGestures'

interface Props {
  classroomModelUrl?: string
  avatarModelUrl?: string
  avatarPosition?: LiyaAiEnvVuejsPosition
  cameraConfig?: LiyaAiEnvVuejsCameraConfig
  isSpeaking?: boolean
  visemes?: LiyaAiEnvVuejsViseme[]
  gestures?: LiyaAiEnvVuejsGesture[]
  currentTime?: number
  animationConfig?: LiyaAiEnvVuejsAnimationConfig
  presentationResult?: LiyaAiEnvVuejsPresentationResult | null
}

const props = withDefaults(defineProps<Props>(), {
  classroomModelUrl: '',
  avatarModelUrl: '',
  avatarPosition: () => ({ x: 0, y: 0, z: 0 }),
  cameraConfig: () => ({
    position: { x: 0, y: 1.4, z: 4 },
    lookAt: { x: 0, y: 1.2, z: 0 },
    fov: 45
  }),
  isSpeaking: false,
  visemes: () => [],
  gestures: () => [],
  currentTime: 0,
  animationConfig: () => ({}),
  presentationResult: null
})

// Presentation board: when presentationResult is set, show page image on board
const liyaAiEnvVuejsHasPresentation = computed(() => !!props.presentationResult?.page_image_url)
const liyaAiEnvVuejsPresentationImageUrl = computed(() => {
  const url = props.presentationResult?.page_image_url || ''
  return url.replace(/^http:\/\//i, 'https://')
})
const liyaAiEnvVuejsPresentationInfo = computed(() => {
  if (!props.presentationResult) return ''
  return `${props.presentationResult.presentation_title} — ${props.presentationResult.page_number}/${props.presentationResult.total_pages}`
})

const emit = defineEmits<{
  loaded: []
  error: [error: Error]
  progress: [progress: number]
}>()

const { getCurrentKeyframe, setGesturesFromApi } = useLiyaAiEnvVuejsGestures()

// Refs
const liyaAiEnvVuejsContainerRef = ref<HTMLDivElement | null>(null)
const liyaAiEnvVuejsIsLoading = ref(true)
const liyaAiEnvVuejsLoadProgress = ref(0)

// Three.js objects
let liyaAiEnvVuejsScene: THREE.Scene | null = null
let liyaAiEnvVuejsCamera: THREE.PerspectiveCamera | null = null
let liyaAiEnvVuejsRenderer: THREE.WebGLRenderer | null = null
let liyaAiEnvVuejsClock: THREE.Clock | null = null
let liyaAiEnvVuejsAnimationFrameId: number | null = null

// Models
let liyaAiEnvVuejsClassroomModel: THREE.Object3D | null = null
let liyaAiEnvVuejsAvatarModel: THREE.Object3D | null = null
let liyaAiEnvVuejsMixer: THREE.AnimationMixer | null = null
let liyaAiEnvVuejsMorphTargetMeshes: THREE.Mesh[] = []
let liyaAiEnvVuejsCurrentMorphValues: Record<string, number> = {}

// Bone references
let liyaAiEnvVuejsSpineBone: THREE.Object3D | null = null
let liyaAiEnvVuejsHeadBone: THREE.Object3D | null = null
let liyaAiEnvVuejsLeftShoulderRootBone: THREE.Object3D | null = null
let liyaAiEnvVuejsRightShoulderRootBone: THREE.Object3D | null = null
let liyaAiEnvVuejsLeftShoulderBone: THREE.Object3D | null = null
let liyaAiEnvVuejsRightShoulderBone: THREE.Object3D | null = null
let liyaAiEnvVuejsLeftHandBone: THREE.Object3D | null = null
let liyaAiEnvVuejsRightHandBone: THREE.Object3D | null = null

// Safari detection for performance optimizations
const liyaAiEnvVuejsIsSafari = typeof navigator !== 'undefined' && 
  /^((?!chrome|android).)*safari/i.test(navigator.userAgent)

// Animation state
let liyaAiEnvVuejsIsAnimating = false
let liyaAiEnvVuejsLastBlinkTime = 0
let liyaAiEnvVuejsIsBlinking = false
let liyaAiEnvVuejsBlinkProgress = 0
let liyaAiEnvVuejsNextBlinkInterval = 3000
let liyaAiEnvVuejsEyeLookTarget = { x: 0, y: 0 }
let liyaAiEnvVuejsEyeLookCurrent = { x: 0, y: 0 }
let liyaAiEnvVuejsLastEyeMoveTime = 0
let liyaAiEnvVuejsNextEyeMoveInterval = 2000
let liyaAiEnvVuejsBreathPhase = 0

// Viseme mapping
const LIYA_AI_ENV_VUEJS_VISEME_MAP: Record<number, string[]> = {
  0: [],
  1: ['mouthClose', 'mouthPressLeft', 'mouthPressRight'],
  2: ['mouthFunnel', 'mouthLowerDownLeft', 'mouthLowerDownRight'],
  3: ['mouthLowerDownLeft', 'mouthLowerDownRight'],
  4: ['mouthLowerDownLeft', 'mouthLowerDownRight'],
  5: ['mouthLowerDownLeft', 'mouthLowerDownRight'],
  6: ['mouthFunnel', 'mouthShrugUpper'],
  7: ['mouthSmileLeft', 'mouthSmileRight'],
  8: ['mouthLowerDownLeft', 'mouthLowerDownRight'],
  9: ['mouthLowerDownLeft', 'mouthLowerDownRight'],
  10: ['mouthLowerDownLeft', 'mouthLowerDownRight', 'mouthUpperUpLeft', 'mouthUpperUpRight'],
  11: ['mouthSmileLeft', 'mouthSmileRight'],
  12: ['mouthSmileLeft', 'mouthSmileRight', 'mouthStretchLeft', 'mouthStretchRight'],
  13: ['mouthFunnel', 'mouthLowerDownLeft', 'mouthLowerDownRight'],
  14: ['mouthPucker', 'mouthFunnel']
}

// Watch for gesture changes from API
watch(() => props.gestures, (newGestures) => {
  if (newGestures && newGestures.length > 0) {
    setGesturesFromApi(newGestures)
  }
}, { deep: true })

// Watch for avatar model URL changes (async loading from API)
watch(() => props.avatarModelUrl, (newUrl) => {
  if (newUrl && liyaAiEnvVuejsScene && !liyaAiEnvVuejsAvatarModel) {
    liyaAiEnvVuejsLoadAvatarModel(newUrl)
  }
})

function liyaAiEnvVuejsInitScene(): void {
  if (!liyaAiEnvVuejsContainerRef.value) return

  // Scene
  liyaAiEnvVuejsScene = new THREE.Scene()
  liyaAiEnvVuejsScene.background = new THREE.Color(0x1a1a2e)

  // Camera
  const { position, lookAt, fov } = props.cameraConfig
  const aspect = liyaAiEnvVuejsContainerRef.value.clientWidth / liyaAiEnvVuejsContainerRef.value.clientHeight
  liyaAiEnvVuejsCamera = new THREE.PerspectiveCamera(fov || 45, aspect, 0.1, 1000)
  liyaAiEnvVuejsCamera.position.set(position.x, position.y, position.z)
  liyaAiEnvVuejsCamera.lookAt(lookAt.x, lookAt.y, lookAt.z)

  // Renderer - Safari optimizations applied
  liyaAiEnvVuejsRenderer = new THREE.WebGLRenderer({ 
    antialias: !liyaAiEnvVuejsIsSafari, // Safari: disable antialiasing for performance
    alpha: true,
    powerPreference: liyaAiEnvVuejsIsSafari ? 'low-power' : 'high-performance',
    preserveDrawingBuffer: liyaAiEnvVuejsIsSafari // Safari: required for WebGL stability
  })
  liyaAiEnvVuejsRenderer.setSize(
    liyaAiEnvVuejsContainerRef.value.clientWidth,
    liyaAiEnvVuejsContainerRef.value.clientHeight
  )
  // Safari fix: Lower pixel ratio to reduce GPU load (Retina can be 3x)
  const maxPixelRatio = liyaAiEnvVuejsIsSafari ? 1.5 : 2
  liyaAiEnvVuejsRenderer.setPixelRatio(Math.min(window.devicePixelRatio, maxPixelRatio))
  liyaAiEnvVuejsRenderer.outputColorSpace = THREE.SRGBColorSpace
  liyaAiEnvVuejsRenderer.toneMapping = THREE.ACESFilmicToneMapping
  liyaAiEnvVuejsRenderer.toneMappingExposure = 1.2
  // Safari fix: Disable shadow maps for better performance
  liyaAiEnvVuejsRenderer.shadowMap.enabled = !liyaAiEnvVuejsIsSafari
  liyaAiEnvVuejsRenderer.shadowMap.type = THREE.PCFSoftShadowMap
  liyaAiEnvVuejsContainerRef.value.appendChild(liyaAiEnvVuejsRenderer.domElement)

  // Lighting
  liyaAiEnvVuejsSetupLighting()

  // Clock
  liyaAiEnvVuejsClock = new THREE.Clock()

  // Load models
  liyaAiEnvVuejsLoadModels()

  // Handle resize
  window.addEventListener('resize', liyaAiEnvVuejsHandleResize)

  // Start animation loop
  liyaAiEnvVuejsIsAnimating = true
  liyaAiEnvVuejsAnimate()
}

function liyaAiEnvVuejsSetupLighting(): void {
  if (!liyaAiEnvVuejsScene) return

  // Ambient — güçlü, beyaz tonlu parlak ortam
  const ambientLight = new THREE.AmbientLight(0x8898a8, 0.7)
  liyaAiEnvVuejsScene.add(ambientLight)

  // Key light — soğuk beyaz, yukarıdan (daha güçlü)
  const keyLight = new THREE.DirectionalLight(0xe0eaf4, 1.1)
  keyLight.position.set(2, 6, 3)
  keyLight.castShadow = true
  keyLight.shadow.mapSize.width = 2048
  keyLight.shadow.mapSize.height = 2048
  keyLight.shadow.camera.near = 0.5
  keyLight.shadow.camera.far = 50
  keyLight.shadow.camera.left = -10
  keyLight.shadow.camera.right = 10
  keyLight.shadow.camera.top = 8
  keyLight.shadow.camera.bottom = -4
  keyLight.shadow.bias = -0.001
  liyaAiEnvVuejsScene.add(keyLight)

  // Fill light — soğuk dolgu soldan (daha güçlü)
  const fillLight = new THREE.DirectionalLight(0x90a0b0, 0.5)
  fillLight.position.set(-5, 3, 2)
  liyaAiEnvVuejsScene.add(fillLight)

  // Board spot — tahtayı vurgulayan beyaz spot
  const boardSpot = new THREE.SpotLight(0xf0f6fc, 1.1, 12, Math.PI / 5, 0.6, 1)
  boardSpot.position.set(0, 5.4, -1)
  boardSpot.target.position.set(0, 2.5, -3.9)
  liyaAiEnvVuejsScene.add(boardSpot)
  liyaAiEnvVuejsScene.add(boardSpot.target)

  // Teal accent glow — duvar kenarlarından teal ışık
  const tealGlow1 = new THREE.PointLight(0x00d4aa, 0.35, 10, 2)
  tealGlow1.position.set(-6, 1.5, -3)
  liyaAiEnvVuejsScene.add(tealGlow1)

  const tealGlow2 = new THREE.PointLight(0x00d4aa, 0.35, 10, 2)
  tealGlow2.position.set(6, 1.5, -3)
  liyaAiEnvVuejsScene.add(tealGlow2)

  // Üstten hafif teal ambient
  const tealTop = new THREE.PointLight(0x00b894, 0.25, 15, 2)
  tealTop.position.set(0, 5.5, -2)
  liyaAiEnvVuejsScene.add(tealTop)

  // Floor reflection glow — cam zeminde yansıma hissi
  const floorGlow = new THREE.PointLight(0x8098b0, 0.3, 10, 2)
  floorGlow.position.set(0, 0.2, -1)
  liyaAiEnvVuejsScene.add(floorGlow)
}

async function liyaAiEnvVuejsLoadModels(): Promise<void> {
  const loader = new GLTFLoader()
  let totalProgress = 0
  let modelsToLoad = 0

  if (props.classroomModelUrl) modelsToLoad++
  if (props.avatarModelUrl) modelsToLoad++

  if (modelsToLoad === 0) {
    // Create default environment
    liyaAiEnvVuejsCreateDefaultEnvironment()
    liyaAiEnvVuejsIsLoading.value = false
    emit('loaded')
    return
  }

  try {
    // Load classroom
    if (props.classroomModelUrl) {
      await new Promise<void>((resolve, reject) => {
        loader.load(
          props.classroomModelUrl,
          (gltf) => {
            liyaAiEnvVuejsClassroomModel = gltf.scene
            liyaAiEnvVuejsClassroomModel.traverse((child) => {
              if (child instanceof THREE.Mesh) {
                child.castShadow = true
                child.receiveShadow = true
              }
            })
            liyaAiEnvVuejsScene?.add(liyaAiEnvVuejsClassroomModel)
            totalProgress += 50
            liyaAiEnvVuejsLoadProgress.value = totalProgress
            emit('progress', totalProgress)
            resolve()
          },
          (progress) => {
            if (progress.total > 0) {
              const percent = (progress.loaded / progress.total) * 50
              liyaAiEnvVuejsLoadProgress.value = percent
              emit('progress', percent)
            }
          },
          (error) => reject(error)
        )
      })
    } else {
      liyaAiEnvVuejsCreateDefaultEnvironment()
      totalProgress += 50
    }

    // Load avatar
    if (props.avatarModelUrl) {
      await new Promise<void>((resolve, reject) => {
        loader.load(
          props.avatarModelUrl,
          (gltf) => {
            liyaAiEnvVuejsAvatarModel = gltf.scene
            
            // Position avatar
            const pos = props.avatarPosition
            liyaAiEnvVuejsAvatarModel.position.set(pos.x, pos.y, pos.z)
            
            // Setup shadows
            liyaAiEnvVuejsAvatarModel.traverse((child) => {
              if (child instanceof THREE.Mesh) {
                child.castShadow = true
                child.receiveShadow = true
                
                // Collect morph target meshes
                if (child.morphTargetInfluences) {
                  liyaAiEnvVuejsMorphTargetMeshes.push(child)
                }
              }
            })

            // Find bones
            liyaAiEnvVuejsFindBones(liyaAiEnvVuejsAvatarModel)

            // Setup animation mixer
            if (gltf.animations.length > 0) {
              liyaAiEnvVuejsMixer = new THREE.AnimationMixer(liyaAiEnvVuejsAvatarModel)
            }

            liyaAiEnvVuejsScene?.add(liyaAiEnvVuejsAvatarModel)
            totalProgress += 50
            liyaAiEnvVuejsLoadProgress.value = totalProgress
            emit('progress', totalProgress)
            resolve()
          },
          (progress) => {
            if (progress.total > 0) {
              const percent = 50 + (progress.loaded / progress.total) * 50
              liyaAiEnvVuejsLoadProgress.value = percent
              emit('progress', percent)
            }
          },
          (error) => reject(error)
        )
      })
    }

    liyaAiEnvVuejsIsLoading.value = false
    emit('loaded')
  } catch (error) {
    emit('error', error as Error)
    liyaAiEnvVuejsIsLoading.value = false
  }
}

// Load avatar model separately (for async URL from API)
async function liyaAiEnvVuejsLoadAvatarModel(url: string): Promise<void> {
  if (!liyaAiEnvVuejsScene || liyaAiEnvVuejsAvatarModel) return
  
  const loader = new GLTFLoader()
  
  try {
    await new Promise<void>((resolve, reject) => {
      loader.load(
        url,
        (gltf) => {
          liyaAiEnvVuejsAvatarModel = gltf.scene
          
          // Position avatar to the left (in front of desk, not blocking blackboard)
          liyaAiEnvVuejsAvatarModel.position.set(-1.8, 0, 0.8)
          
          // Avatar kameraya doğru bakıyor
          // Kamera (0, 1.4, 4), Avatar (-1.8, 0, 0.8)
          // Y rotasyonu = atan2(camX - avatarX, camZ - avatarZ)
          const camPos = props.cameraConfig.position
          const avatarPos = liyaAiEnvVuejsAvatarModel.position
          liyaAiEnvVuejsAvatarModel.rotation.y = Math.atan2(
            camPos.x - avatarPos.x,
            camPos.z - avatarPos.z
          )
          
          // Scale avatar appropriately
          liyaAiEnvVuejsAvatarModel.scale.set(1.1, 1.1, 1.1)
          
          // Setup shadows and collect morph targets
          liyaAiEnvVuejsAvatarModel.traverse((child) => {
            if (child instanceof THREE.Mesh) {
              child.castShadow = true
              child.receiveShadow = true
              
              if (child.morphTargetInfluences) {
                liyaAiEnvVuejsMorphTargetMeshes.push(child)
              }
            }
          })

          // Find bones
          liyaAiEnvVuejsFindBones(liyaAiEnvVuejsAvatarModel)
          
          // Set initial arm pose - hands raised/visible
          liyaAiEnvVuejsSetInitialArmPose()

          // Setup animation mixer
          if (gltf.animations.length > 0) {
            liyaAiEnvVuejsMixer = new THREE.AnimationMixer(liyaAiEnvVuejsAvatarModel)
          }

          liyaAiEnvVuejsScene!.add(liyaAiEnvVuejsAvatarModel)
          resolve()
        },
        undefined,
        (error) => {
          reject(error)
        }
      )
    })
  } catch (error) { /* avatar load failed silently */ }
}

function liyaAiEnvVuejsCreateDefaultEnvironment(): void {
  if (!liyaAiEnvVuejsScene) return

  // ══════════════════════════════════════════════════════════════
  // Liquid Glass Classroom — Açık tonlar, cam yansıma, teal aksan
  // Buzlu cam hissi, yumuşak gradyan, modern AI sunum odası
  // ══════════════════════════════════════════════════════════════

  // ── MALZEME PALETİ — Açık Gümüş / Light Silver ──
  const silverWall = new THREE.MeshStandardMaterial({
    color: 0xd8dce4, roughness: 0.45, metalness: 0.25
  })
  const silverWallDeep = new THREE.MeshStandardMaterial({
    color: 0xc8d0dc, roughness: 0.4, metalness: 0.3
  })
  const silverFloor = new THREE.MeshStandardMaterial({
    color: 0xc0ccd8, roughness: 0.04, metalness: 0.5
  })
  const silverCeiling = new THREE.MeshStandardMaterial({
    color: 0xd0d8e0, roughness: 0.5, metalness: 0.2
  })
  const tealNeon = new THREE.MeshStandardMaterial({
    color: 0x00d4aa, emissive: 0x00d4aa, emissiveIntensity: 0.6,
    roughness: 0.1, metalness: 0.3
  })
  const tealSoft = new THREE.MeshStandardMaterial({
    color: 0x00b894, emissive: 0x00b894, emissiveIntensity: 0.3,
    roughness: 0.15, metalness: 0.25
  })
  const boardFrame = new THREE.MeshStandardMaterial({
    color: 0x788898, roughness: 0.08, metalness: 0.5
  })
  const metalSilver = new THREE.MeshStandardMaterial({
    color: 0xc8d0dc, roughness: 0.08, metalness: 0.45
  })
  const panelMat = new THREE.MeshStandardMaterial({
    color: 0xd0d8e4, roughness: 0.25, metalness: 0.3
  })

  // ── ZEMİN — Liquid glass yansımalı yüzey ──
  const floorGeo = new THREE.PlaneGeometry(16, 12)
  const floor = new THREE.Mesh(floorGeo, silverFloor)
  floor.rotation.x = -Math.PI / 2
  floor.position.y = 0
  floor.receiveShadow = true
  liyaAiEnvVuejsScene.add(floor)

  // Zemin teal aksan çizgisi — ön kenar
  const floorTeal = new THREE.Mesh(
    new THREE.BoxGeometry(12, 0.003, 0.02), tealSoft
  )
  floorTeal.position.set(0, 0.002, -3.2)
  liyaAiEnvVuejsScene.add(floorTeal)

  // ── ARKA DUVAR — Buzlu cam yüzey ──
  const wallGeo = new THREE.PlaneGeometry(16, 6)
  const backWall = new THREE.Mesh(wallGeo, silverWall)
  backWall.position.set(0, 3, -4)
  backWall.receiveShadow = true
  liyaAiEnvVuejsScene.add(backWall)

  // Duvar alt paneli — daha derin cam bölge
  const wallLowerPanel = new THREE.Mesh(
    new THREE.BoxGeometry(16, 1.5, 0.03), silverWallDeep
  )
  wallLowerPanel.position.set(0, 0.75, -3.97)
  liyaAiEnvVuejsScene.add(wallLowerPanel)

  // Sol yan duvar
  const sideWallGeo = new THREE.PlaneGeometry(10, 6)
  const leftWall = new THREE.Mesh(sideWallGeo, silverWall.clone())
  leftWall.position.set(-8, 3, 1)
  leftWall.rotation.y = Math.PI / 2
  leftWall.receiveShadow = true
  liyaAiEnvVuejsScene.add(leftWall)

  // ── TEAL NEON AKSAN ÇİZGİLERİ ──

  // Üst yatay teal çizgi — duvar üst kenarı
  const topTealLine = new THREE.Mesh(
    new THREE.BoxGeometry(14, 0.02, 0.015), tealNeon
  )
  topTealLine.position.set(0, 5.1, -3.96)
  liyaAiEnvVuejsScene.add(topTealLine)

  // Alt yatay teal çizgi — duvar alt panel üstü
  const bottomTealLine = new THREE.Mesh(
    new THREE.BoxGeometry(14, 0.015, 0.015), tealNeon
  )
  bottomTealLine.position.set(0, 1.52, -3.96)
  liyaAiEnvVuejsScene.add(bottomTealLine)

  // Sol dikey teal çizgi
  const leftTealLine = new THREE.Mesh(
    new THREE.BoxGeometry(0.015, 3.6, 0.015), tealSoft
  )
  leftTealLine.position.set(-7, 3.3, -3.96)
  liyaAiEnvVuejsScene.add(leftTealLine)

  // Sağ dikey teal çizgi
  const rightTealLine = leftTealLine.clone()
  rightTealLine.position.set(7, 3.3, -3.96)
  liyaAiEnvVuejsScene.add(rightTealLine)

  // ── SUNUM TAHTASI — Büyük, sleek, koyu çerçeve ──

  // Board body — geniş koyu çerçeve
  const boardBody = new THREE.Mesh(
    new THREE.BoxGeometry(6.2, 3.4, 0.06), boardFrame
  )
  boardBody.position.set(0, 2.85, -3.92)
  boardBody.castShadow = true
  liyaAiEnvVuejsScene.add(boardBody)

  // Board screen — beyaz ekran, hafif glow
  const screenGeo = new THREE.PlaneGeometry(5.8, 3.1)
  const screenMat = new THREE.MeshStandardMaterial({
    color: 0xf5f5f0, emissive: 0xf0f0ec, emissiveIntensity: 0.15,
    roughness: 0.05, metalness: 0.02
  })
  const screen = new THREE.Mesh(screenGeo, screenMat)
  screen.position.set(0, 2.85, -3.88)
  liyaAiEnvVuejsScene.add(screen)

  // Board çerçeve kenar — ince koyu metalik
  const bFrameH = new THREE.BoxGeometry(6.25, 0.04, 0.08)
  const bFrameV = new THREE.BoxGeometry(0.04, 3.45, 0.08)
  const framePositions = [
    { geo: bFrameH, pos: [0, 4.575, -3.9] },
    { geo: bFrameH, pos: [0, 1.125, -3.9] },
    { geo: bFrameV, pos: [-3.125, 2.85, -3.9] },
    { geo: bFrameV, pos: [3.125, 2.85, -3.9] },
  ]
  for (const f of framePositions) {
    const frame = new THREE.Mesh(f.geo, metalSilver)
    frame.position.set(f.pos[0], f.pos[1], f.pos[2])
    liyaAiEnvVuejsScene.add(frame)
  }

  // Board teal accent — ekran etrafı ince teal glow
  const bTealH = new THREE.BoxGeometry(6.0, 0.01, 0.01)
  const bTealV = new THREE.BoxGeometry(0.01, 3.2, 0.01)
  const tealTrimPos = [
    { geo: bTealH, pos: [0, 4.42, -3.87] },
    { geo: bTealH, pos: [0, 1.28, -3.87] },
    { geo: bTealV, pos: [-2.98, 2.85, -3.87] },
    { geo: bTealV, pos: [2.98, 2.85, -3.87] },
  ]
  for (const t of tealTrimPos) {
    const trim = new THREE.Mesh(t.geo, tealSoft)
    trim.position.set(t.pos[0], t.pos[1], t.pos[2])
    liyaAiEnvVuejsScene.add(trim)
  }

  // ── DUVAR PANELLERİ — Sağ ve sol taraf dekoratif paneller ──

  // Sol panel grubu — dikey koyu paneller
  for (let i = 0; i < 3; i++) {
    const panel = new THREE.Mesh(
      new THREE.BoxGeometry(0.6, 2.5, 0.02), panelMat
    )
    panel.position.set(-5.5 + i * 0.75, 3.0, -3.97)
    liyaAiEnvVuejsScene.add(panel)
  }

  // Sağ panel grubu
  for (let i = 0; i < 3; i++) {
    const panel = new THREE.Mesh(
      new THREE.BoxGeometry(0.6, 2.5, 0.02), panelMat
    )
    panel.position.set(4.75 + i * 0.75, 3.0, -3.97)
    liyaAiEnvVuejsScene.add(panel)
  }

  // ── MİNİMAL MASA — Açık gümüş metalik ince masa ──
  const deskMat = new THREE.MeshStandardMaterial({
    color: 0xb8c4d0, roughness: 0.08, metalness: 0.45
  })

  // Masa üstü — ince, sleek
  const deskTop = new THREE.Mesh(
    new THREE.BoxGeometry(1.8, 0.04, 0.7), deskMat
  )
  deskTop.position.set(3.5, 0.75, -2.5)
  deskTop.castShadow = true
  deskTop.receiveShadow = true
  liyaAiEnvVuejsScene.add(deskTop)

  // Masa teal kenar
  const deskTeal = new THREE.Mesh(
    new THREE.BoxGeometry(1.8, 0.008, 0.008), tealSoft
  )
  deskTeal.position.set(3.5, 0.73, -2.15)
  liyaAiEnvVuejsScene.add(deskTeal)

  // Masa ayağı — tek merkez direk
  const deskLeg = new THREE.Mesh(
    new THREE.CylinderGeometry(0.04, 0.06, 0.73, 12), metalSilver
  )
  deskLeg.position.set(3.5, 0.365, -2.5)
  deskLeg.castShadow = true
  liyaAiEnvVuejsScene.add(deskLeg)

  // Masa tabanı — yuvarlak disk
  const deskBase = new THREE.Mesh(
    new THREE.CylinderGeometry(0.25, 0.25, 0.02, 16), metalSilver
  )
  deskBase.position.set(3.5, 0.01, -2.5)
  liyaAiEnvVuejsScene.add(deskBase)

  // ── PLATFORM — İnce cam yükseltme ──
  const platform = new THREE.Mesh(
    new THREE.BoxGeometry(5, 0.05, 3), silverWallDeep
  )
  platform.position.set(-0.5, 0.025, -2.5)
  platform.receiveShadow = true
  liyaAiEnvVuejsScene.add(platform)

  // Platform ön kenar teal accent
  const platTeal = new THREE.Mesh(
    new THREE.BoxGeometry(5, 0.01, 0.01), tealNeon
  )
  platTeal.position.set(-0.5, 0.045, -1.0)
  liyaAiEnvVuejsScene.add(platTeal)

  // ── TAVAN ──
  const ceilingGeo = new THREE.PlaneGeometry(16, 12)
  const ceiling = new THREE.Mesh(ceilingGeo, silverCeiling)
  ceiling.rotation.x = Math.PI / 2
  ceiling.position.set(0, 5.6, 0)
  liyaAiEnvVuejsScene.add(ceiling)

  // Tavan teal trim
  const ceilTeal = new THREE.Mesh(
    new THREE.BoxGeometry(14, 0.01, 0.01), tealSoft
  )
  ceilTeal.position.set(0, 5.55, -3.96)
  liyaAiEnvVuejsScene.add(ceilTeal)

  // ── Tavan ışık panelleri — ince, uzun, koyu ──
  const ceilLightMat = new THREE.MeshStandardMaterial({
    color: 0xd0e0f0, emissive: 0xc0d8e8, emissiveIntensity: 0.3,
    roughness: 0.1
  })
  for (let i = -1; i <= 1; i += 2) {
    const lightPanel = new THREE.Mesh(
      new THREE.BoxGeometry(0.08, 0.01, 4), ceilLightMat
    )
    lightPanel.position.set(i * 5, 5.58, -1)
    liyaAiEnvVuejsScene.add(lightPanel)
  }

  // ── BACKGROUND — Açık koyu mavi-gri (liquid glass) ──
  liyaAiEnvVuejsScene.background = new THREE.Color(0x8898a8)
}

function liyaAiEnvVuejsFindBones(model: THREE.Object3D): void {
  const boneNames: string[] = []
  
  model.traverse((child) => {
    const name = child.name.toLowerCase()
    boneNames.push(child.name)

    if (name.includes('spine') && !liyaAiEnvVuejsSpineBone) {
      liyaAiEnvVuejsSpineBone = child
    }
    if (name.includes('head') && !liyaAiEnvVuejsHeadBone) {
      liyaAiEnvVuejsHeadBone = child
    }
    if (name.includes('leftshoulder') && !liyaAiEnvVuejsLeftShoulderRootBone) {
      liyaAiEnvVuejsLeftShoulderRootBone = child
    }
    if ((name.includes('leftarm') || name.includes('left_arm') || name.includes('leftupperarm')) && !liyaAiEnvVuejsLeftShoulderBone) {
      liyaAiEnvVuejsLeftShoulderBone = child
    }
    if (name.includes('rightshoulder') && !liyaAiEnvVuejsRightShoulderRootBone) {
      liyaAiEnvVuejsRightShoulderRootBone = child
    }
    if ((name.includes('rightarm') || name.includes('right_arm') || name.includes('rightupperarm')) && !liyaAiEnvVuejsRightShoulderBone) {
      liyaAiEnvVuejsRightShoulderBone = child
    }
    if (name === 'lefthand' && !liyaAiEnvVuejsLeftHandBone) {
      liyaAiEnvVuejsLeftHandBone = child
    }
    if (name === 'righthand' && !liyaAiEnvVuejsRightHandBone) {
      liyaAiEnvVuejsRightHandBone = child
    }
  })
}

function liyaAiEnvVuejsSetInitialArmPose(): void {
  // Default: kollar A-pose'da kalır, hiçbir rotasyon uygulanmaz
}

function liyaAiEnvVuejsAnimate(): void {
  // Safari fix: Check if animation should continue before requesting next frame
  if (!liyaAiEnvVuejsIsAnimating) return
  
  liyaAiEnvVuejsAnimationFrameId = requestAnimationFrame(liyaAiEnvVuejsAnimate)

  if (!liyaAiEnvVuejsClock || !liyaAiEnvVuejsRenderer || !liyaAiEnvVuejsScene || !liyaAiEnvVuejsCamera) return

  const deltaTime = liyaAiEnvVuejsClock.getDelta()
  const elapsedTime = liyaAiEnvVuejsClock.getElapsedTime() * 1000

  // Update mixer
  if (liyaAiEnvVuejsMixer) {
    liyaAiEnvVuejsMixer.update(deltaTime)
  }

  // Update avatar animations
  if (liyaAiEnvVuejsAvatarModel) {
    liyaAiEnvVuejsUpdateLipSync(deltaTime)
    liyaAiEnvVuejsUpdateBlink(deltaTime, elapsedTime)
    liyaAiEnvVuejsUpdateEyeMovement(deltaTime, elapsedTime)
    liyaAiEnvVuejsUpdateBreathing(deltaTime, elapsedTime)
    liyaAiEnvVuejsUpdateGestures(deltaTime, elapsedTime)
  }

  liyaAiEnvVuejsRenderer.render(liyaAiEnvVuejsScene, liyaAiEnvVuejsCamera)
}

function liyaAiEnvVuejsUpdateLipSync(deltaTime: number): void {
  if (!props.isSpeaking || props.visemes.length === 0) {
    liyaAiEnvVuejsResetMouthMorphs(deltaTime)
    return
  }

  const currentTime = props.currentTime
  let currentViseme = 0

  for (const viseme of props.visemes) {
    if (currentTime >= viseme.time && currentTime < viseme.time + viseme.duration) {
      currentViseme = viseme.viseme
      break
    }
  }

  const morphTargets = LIYA_AI_ENV_VUEJS_VISEME_MAP[currentViseme] || []
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
  const speed = 0.02

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
  const blinkSpeed = 0.25
  const blinkIntervalMin = 1500
  const blinkIntervalMax = 3500

  if (!liyaAiEnvVuejsIsBlinking && time - liyaAiEnvVuejsLastBlinkTime > liyaAiEnvVuejsNextBlinkInterval) {
    liyaAiEnvVuejsIsBlinking = true
    liyaAiEnvVuejsBlinkProgress = 0
    liyaAiEnvVuejsLastBlinkTime = time
    liyaAiEnvVuejsNextBlinkInterval = blinkIntervalMin + Math.random() * (blinkIntervalMax - blinkIntervalMin)
  }

  if (liyaAiEnvVuejsIsBlinking) {
    liyaAiEnvVuejsBlinkProgress += blinkSpeed

    let blinkValue = 0
    if (liyaAiEnvVuejsBlinkProgress < 0.5) {
      blinkValue = liyaAiEnvVuejsBlinkProgress * 2
    } else {
      blinkValue = 1 - (liyaAiEnvVuejsBlinkProgress - 0.5) * 2
    }

    for (const mesh of liyaAiEnvVuejsMorphTargetMeshes) {
      if (!mesh.morphTargetDictionary || !mesh.morphTargetInfluences) continue

      const leftBlinkIndex = mesh.morphTargetDictionary['eyeBlinkLeft']
      const rightBlinkIndex = mesh.morphTargetDictionary['eyeBlinkRight']

      if (leftBlinkIndex !== undefined) mesh.morphTargetInfluences[leftBlinkIndex] = blinkValue
      if (rightBlinkIndex !== undefined) mesh.morphTargetInfluences[rightBlinkIndex] = blinkValue
    }

    if (liyaAiEnvVuejsBlinkProgress >= 1) {
      liyaAiEnvVuejsIsBlinking = false
    }
  }
}

function liyaAiEnvVuejsUpdateEyeMovement(_deltaTime: number, time: number): void {
  const eyeMoveSpeed = 0.12
  const eyeMoveIntervalMin = 500
  const eyeMoveIntervalMax = 1500
  const eyeMoveRange = 0.4

  if (time - liyaAiEnvVuejsLastEyeMoveTime > liyaAiEnvVuejsNextEyeMoveInterval) {
    liyaAiEnvVuejsEyeLookTarget = {
      x: (Math.random() - 0.5) * eyeMoveRange,
      y: (Math.random() - 0.5) * eyeMoveRange * 0.5
    }
    liyaAiEnvVuejsLastEyeMoveTime = time
    liyaAiEnvVuejsNextEyeMoveInterval = eyeMoveIntervalMin + Math.random() * (eyeMoveIntervalMax - eyeMoveIntervalMin)
  }

  liyaAiEnvVuejsEyeLookCurrent.x += (liyaAiEnvVuejsEyeLookTarget.x - liyaAiEnvVuejsEyeLookCurrent.x) * eyeMoveSpeed
  liyaAiEnvVuejsEyeLookCurrent.y += (liyaAiEnvVuejsEyeLookTarget.y - liyaAiEnvVuejsEyeLookCurrent.y) * eyeMoveSpeed

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
  const breathingSpeed = 0.4
  const breathingIntensity = 0.015

  liyaAiEnvVuejsBreathPhase += deltaTime * breathingSpeed
  const breathValue = Math.sin(liyaAiEnvVuejsBreathPhase) * breathingIntensity

  if (liyaAiEnvVuejsSpineBone) {
    liyaAiEnvVuejsSpineBone.position.y += breathValue * 0.01
  }
}

function liyaAiEnvVuejsUpdateGestures(_deltaTime: number, _elapsedTime: number): void {
  // Kollar default A-pose'da kalır — hiçbir arm rotasyon uygulanmaz
  const keyframe = getCurrentKeyframe()

  if (keyframe.head?.rotation && liyaAiEnvVuejsHeadBone) {
    liyaAiEnvVuejsHeadBone.rotation.set(
      keyframe.head.rotation.x,
      keyframe.head.rotation.y,
      keyframe.head.rotation.z
    )
  }

  if (keyframe.body?.lean && liyaAiEnvVuejsSpineBone) {
    liyaAiEnvVuejsSpineBone.rotation.x = keyframe.body.lean.x
    liyaAiEnvVuejsSpineBone.rotation.z = keyframe.body.lean.z
  }
}

function liyaAiEnvVuejsHandleResize(): void {
  if (!liyaAiEnvVuejsContainerRef.value || !liyaAiEnvVuejsCamera || !liyaAiEnvVuejsRenderer) return

  const width = liyaAiEnvVuejsContainerRef.value.clientWidth
  const height = liyaAiEnvVuejsContainerRef.value.clientHeight

  liyaAiEnvVuejsCamera.aspect = width / height
  liyaAiEnvVuejsCamera.updateProjectionMatrix()
  liyaAiEnvVuejsRenderer.setSize(width, height)
}

function liyaAiEnvVuejsDispose(): void {
  // Safari fix: Stop animation loop first
  liyaAiEnvVuejsIsAnimating = false
  
  if (liyaAiEnvVuejsAnimationFrameId) {
    cancelAnimationFrame(liyaAiEnvVuejsAnimationFrameId)
    liyaAiEnvVuejsAnimationFrameId = null
  }

  window.removeEventListener('resize', liyaAiEnvVuejsHandleResize)

  // Dispose models
  const disposeObject = (obj: THREE.Object3D) => {
    obj.traverse((child) => {
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

  if (liyaAiEnvVuejsClassroomModel) disposeObject(liyaAiEnvVuejsClassroomModel)
  if (liyaAiEnvVuejsAvatarModel) disposeObject(liyaAiEnvVuejsAvatarModel)

  // Safari fix: Force WebGL context loss to free GPU memory
  if (liyaAiEnvVuejsRenderer) {
    liyaAiEnvVuejsRenderer.dispose()
    liyaAiEnvVuejsRenderer.forceContextLoss()
    
    // Remove canvas from DOM
    if (liyaAiEnvVuejsContainerRef.value && liyaAiEnvVuejsRenderer.domElement.parentNode === liyaAiEnvVuejsContainerRef.value) {
      liyaAiEnvVuejsContainerRef.value.removeChild(liyaAiEnvVuejsRenderer.domElement)
    }
  }
  
  // Clear all references
  liyaAiEnvVuejsScene = null
  liyaAiEnvVuejsCamera = null
  liyaAiEnvVuejsRenderer = null
  liyaAiEnvVuejsClassroomModel = null
  liyaAiEnvVuejsAvatarModel = null
  liyaAiEnvVuejsMixer = null
  liyaAiEnvVuejsMorphTargetMeshes = []
  liyaAiEnvVuejsCurrentMorphValues = {}
  liyaAiEnvVuejsSpineBone = null
  liyaAiEnvVuejsHeadBone = null
  liyaAiEnvVuejsLeftShoulderRootBone = null
  liyaAiEnvVuejsRightShoulderRootBone = null
  liyaAiEnvVuejsLeftShoulderBone = null
  liyaAiEnvVuejsRightShoulderBone = null
  liyaAiEnvVuejsLeftHandBone = null
  liyaAiEnvVuejsRightHandBone = null
}

onMounted(() => {
  liyaAiEnvVuejsInitScene()
})

onUnmounted(() => {
  liyaAiEnvVuejsDispose()
})
</script>

<template>
  <div ref="liyaAiEnvVuejsContainerRef" class="liya-ai-env-vuejs-classroom-scene">
    <!-- Presentation Board Overlay -->
    <div 
      v-if="liyaAiEnvVuejsHasPresentation" 
      class="liya-ai-env-vuejs-board liya-ai-env-vuejs-presentation-board"
    >
      <img
        :src="liyaAiEnvVuejsPresentationImageUrl"
        :alt="liyaAiEnvVuejsPresentationInfo"
        class="liya-ai-env-vuejs-presentation-board__image"
      />
      <div class="liya-ai-env-vuejs-presentation-board__info">
        {{ liyaAiEnvVuejsPresentationInfo }}
      </div>
      <div class="liya-ai-env-vuejs-board__frame"></div>
    </div>

    <!-- Loading overlay -->
    <div v-if="liyaAiEnvVuejsIsLoading" class="liya-ai-env-vuejs-loading">
      <div class="liya-ai-env-vuejs-loading__spinner"></div>
      <p class="liya-ai-env-vuejs-loading__text">Ortam yükleniyor...</p>
      <div class="liya-ai-env-vuejs-loading__progress">
        <div 
          class="liya-ai-env-vuejs-loading__progress-bar" 
          :style="{ width: `${liyaAiEnvVuejsLoadProgress}%` }"
        ></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.liya-ai-env-vuejs-classroom-scene {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
}

.liya-ai-env-vuejs-loading {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 24px;
  background: var(--liya-env-bg-gradient, linear-gradient(180deg, #8898a8 0%, #98a8b8 100%));
  z-index: 100;
}

.liya-ai-env-vuejs-loading__spinner {
  width: 48px;
  height: 48px;
  border: 3px solid rgba(0, 212, 170, 0.2);
  border-top-color: #00d4aa;
  border-radius: 50%;
  animation: liya-ai-env-vuejs-spin 1s linear infinite;
}

@keyframes liya-ai-env-vuejs-spin {
  to { transform: rotate(360deg); }
}

.liya-ai-env-vuejs-loading__text {
  color: rgba(180, 200, 220, 0.7);
  font-size: 16px;
  font-weight: 300;
  letter-spacing: 0.5px;
  margin: 0;
}

.liya-ai-env-vuejs-loading__progress {
  width: 200px;
  height: 4px;
  background: rgba(0, 212, 170, 0.1);
  border-radius: 2px;
  overflow: hidden;
}

.liya-ai-env-vuejs-loading__progress-bar {
  height: 100%;
  background: linear-gradient(90deg, #00d4aa, #00b894);
  border-radius: 2px;
  transition: width 0.3s ease;
}

/* Board Overlay - positioned to match 3D board location */
.liya-ai-env-vuejs-board {
  position: absolute;
  top: 4%;
  left: 50%;
  transform: translateX(-50%);
  width: 40%;
  aspect-ratio: 16 / 9;
  z-index: 50;
  pointer-events: none;
}

.liya-ai-env-vuejs-board__frame {
  position: absolute;
  top: -6px;
  left: -6px;
  right: -6px;
  bottom: -6px;
  border: 2px solid #3a4a5a;
  border-radius: 6px;
  pointer-events: none;
  box-shadow: 
    0 4px 30px rgba(0, 0, 0, 0.5),
    0 0 0 1px rgba(0, 212, 170, 0.15),
    inset 0 0 10px rgba(0, 0, 0, 0.3);
}

/* Glow effect around board */
.liya-ai-env-vuejs-board::before {
  content: '';
  position: absolute;
  top: -10px;
  left: -10px;
  right: -10px;
  bottom: -10px;
  border: 1px solid rgba(0, 212, 170, 0.1);
  border-radius: 8px;
  pointer-events: none;
  opacity: 0.4;
}

/* Presentation Board */
.liya-ai-env-vuejs-presentation-board {
  pointer-events: none;
}

.liya-ai-env-vuejs-presentation-board__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 4px;
  background: #1a2430;
}

.liya-ai-env-vuejs-presentation-board__info {
  position: absolute;
  bottom: -22px;
  left: 0;
  right: 0;
  text-align: center;
  font-size: 10px;
  color: rgba(0, 212, 170, 0.6);
  font-weight: 300;
  letter-spacing: 0.3px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .liya-ai-env-vuejs-board {
    width: 50%;
    top: 6%;
  }
}

@media (max-width: 480px) {
  .liya-ai-env-vuejs-board {
    width: 60%;
    top: 8%;
  }
}
</style>
