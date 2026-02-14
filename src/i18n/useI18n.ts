import { ref, computed, readonly } from 'vue'
import { liyaAiEnvVuejsTranslations, liyaAiEnvVuejsDetectBrowserLocale, liyaAiEnvVuejsIsSupportedLocale, type LiyaAiEnvVuejsSupportedLocale, type LiyaAiEnvVuejsTranslations } from './translations'

const liyaAiEnvVuejsCurrentLocale = ref<LiyaAiEnvVuejsSupportedLocale>('tr')

export function useLiyaAiEnvVuejsI18n() {
  const locale = computed(() => liyaAiEnvVuejsCurrentLocale.value)

  const t = computed<LiyaAiEnvVuejsTranslations>(() => liyaAiEnvVuejsTranslations[liyaAiEnvVuejsCurrentLocale.value])

  function setLocale(newLocale: string): void {
    if (liyaAiEnvVuejsIsSupportedLocale(newLocale)) {
      liyaAiEnvVuejsCurrentLocale.value = newLocale
    } else {
      liyaAiEnvVuejsCurrentLocale.value = 'tr'
    }
  }

  function initLocale(configLocale?: string): void {
    if (configLocale && liyaAiEnvVuejsIsSupportedLocale(configLocale)) {
      liyaAiEnvVuejsCurrentLocale.value = configLocale
    } else if (configLocale) {
      liyaAiEnvVuejsCurrentLocale.value = 'tr'
    } else {
      liyaAiEnvVuejsCurrentLocale.value = liyaAiEnvVuejsDetectBrowserLocale()
    }
  }

  return {
    locale: readonly(locale),
    t,
    setLocale,
    initLocale,
    liyaAiEnvVuejsIsSupportedLocale,
  }
}
