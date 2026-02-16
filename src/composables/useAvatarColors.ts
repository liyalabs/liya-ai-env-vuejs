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
import { ref, readonly } from 'vue'

export interface LiyaAiEnvVuejsAvatarColorPreset {
  id: string
  name: string
  top: string
  bottom: string
  footwear: string
}

export interface LiyaAiEnvVuejsAvatarColors {
  top: string
  bottom: string
  footwear: string
}

const LIYA_AI_ENV_VUEJS_STORAGE_KEY = 'liya-avatar-colors'

const LIYA_AI_ENV_VUEJS_DEFAULT_COLORS: LiyaAiEnvVuejsAvatarColors = {
  top: '#F8FAFC',
  bottom: '#E2E8F0',
  footwear: '#CBD5E1'
}

const LIYA_AI_ENV_VUEJS_COLOR_PRESETS: LiyaAiEnvVuejsAvatarColorPreset[] = [
  { id: 'classic-blue', name: 'Klasik Mavi', top: '#3B82F6', bottom: '#1E293B', footwear: '#374151' },
  { id: 'red-energy', name: 'Kırmızı', top: '#EF4444', bottom: '#1E293B', footwear: '#374151' },
  { id: 'green-nature', name: 'Yeşil', top: '#10B981', bottom: '#1E293B', footwear: '#374151' },
  { id: 'purple-royal', name: 'Mor', top: '#8B5CF6', bottom: '#1E293B', footwear: '#374151' },
  { id: 'orange-warm', name: 'Turuncu', top: '#F97316', bottom: '#1E293B', footwear: '#374151' },
  { id: 'pink-soft', name: 'Pembe', top: '#EC4899', bottom: '#F3E8FF', footwear: '#9333EA' },
  { id: 'dark-elegant', name: 'Koyu Zarif', top: '#1E293B', bottom: '#0F172A', footwear: '#1E293B' },
  { id: 'white-clean', name: 'Beyaz Sade', top: '#F8FAFC', bottom: '#E2E8F0', footwear: '#CBD5E1' }
]

const liyaAiEnvVuejsColors = ref<LiyaAiEnvVuejsAvatarColors>({ ...LIYA_AI_ENV_VUEJS_DEFAULT_COLORS })
const liyaAiEnvVuejsCurrentPresetId = ref<string | null>('white-clean')

function liyaAiEnvVuejsLoadFromStorage(): void {
  if (typeof window === 'undefined' || !window.localStorage) return
  
  try {
    const stored = localStorage.getItem(LIYA_AI_ENV_VUEJS_STORAGE_KEY)
    if (stored) {
      const parsed = JSON.parse(stored)
      if (parsed.colors) {
        liyaAiEnvVuejsColors.value = { ...LIYA_AI_ENV_VUEJS_DEFAULT_COLORS, ...parsed.colors }
      }
      if (parsed.presetId) {
        liyaAiEnvVuejsCurrentPresetId.value = parsed.presetId
      }
    }
  } catch {
    // Ignore parse errors
  }
}

function liyaAiEnvVuejsSaveToStorage(): void {
  if (typeof window === 'undefined' || !window.localStorage) return
  
  try {
    localStorage.setItem(LIYA_AI_ENV_VUEJS_STORAGE_KEY, JSON.stringify({
      colors: liyaAiEnvVuejsColors.value,
      presetId: liyaAiEnvVuejsCurrentPresetId.value
    }))
  } catch {
    // Ignore storage errors
  }
}

function liyaAiEnvVuejsSetPreset(presetId: string): void {
  const preset = LIYA_AI_ENV_VUEJS_COLOR_PRESETS.find(p => p.id === presetId)
  if (preset) {
    liyaAiEnvVuejsColors.value = {
      top: preset.top,
      bottom: preset.bottom,
      footwear: preset.footwear
    }
    liyaAiEnvVuejsCurrentPresetId.value = presetId
    liyaAiEnvVuejsSaveToStorage()
  }
}

function liyaAiEnvVuejsSetColor(part: 'top' | 'bottom' | 'footwear', color: string): void {
  liyaAiEnvVuejsColors.value[part] = color
  liyaAiEnvVuejsCurrentPresetId.value = null // Custom color, no preset
  liyaAiEnvVuejsSaveToStorage()
}

function liyaAiEnvVuejsSetColors(newColors: Partial<LiyaAiEnvVuejsAvatarColors>): void {
  liyaAiEnvVuejsColors.value = { ...liyaAiEnvVuejsColors.value, ...newColors }
  liyaAiEnvVuejsCurrentPresetId.value = null
  liyaAiEnvVuejsSaveToStorage()
}

function liyaAiEnvVuejsReset(): void {
  liyaAiEnvVuejsColors.value = { ...LIYA_AI_ENV_VUEJS_DEFAULT_COLORS }
  liyaAiEnvVuejsCurrentPresetId.value = 'white-clean'
  liyaAiEnvVuejsSaveToStorage()
}

function liyaAiEnvVuejsInit(): void {
  liyaAiEnvVuejsLoadFromStorage()
}

export function useLiyaAiEnvVuejsAvatarColors() {
  return {
    // State
    colors: readonly(liyaAiEnvVuejsColors),
    currentPresetId: readonly(liyaAiEnvVuejsCurrentPresetId),
    
    // Constants
    presets: LIYA_AI_ENV_VUEJS_COLOR_PRESETS,
    defaultColors: LIYA_AI_ENV_VUEJS_DEFAULT_COLORS,
    
    // Actions
    setPreset: liyaAiEnvVuejsSetPreset,
    setColor: liyaAiEnvVuejsSetColor,
    setColors: liyaAiEnvVuejsSetColors,
    reset: liyaAiEnvVuejsReset,
    init: liyaAiEnvVuejsInit
  }
}
