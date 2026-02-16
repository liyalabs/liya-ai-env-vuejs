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
// Liya AI Environment - Vue Plugin

import type { App } from 'vue'
import type { LiyaAiEnvVuejsConfig } from './types'
import { liyaAiEnvVuejsInitializeClient } from './api'
import { useLiyaAiEnvVuejsI18n } from './i18n'

export interface LiyaAiEnvVuejsPluginOptions extends LiyaAiEnvVuejsConfig {}

export const LiyaAiEnvVuejsPlugin = {
  install(app: App, options: LiyaAiEnvVuejsPluginOptions) {
    // Validate required options
    if (!options.apiKey) {
      console.error('[LiyaAiEnvVuejs] apiKey is required')
      return
    }
    if (!options.apiUrl) {
      console.error('[LiyaAiEnvVuejs] apiUrl is required')
      return
    }
    if (!options.assistantId) {
      console.error('[LiyaAiEnvVuejs] assistantId is required')
      return
    }

    // Initialize API client
    liyaAiEnvVuejsInitializeClient(options)

    // Initialize i18n locale
    const { initLocale } = useLiyaAiEnvVuejsI18n()
    initLocale(options.locale)

    // Provide config globally
    app.config.globalProperties.$liyaAiEnvVuejs = {
      config: options
    }

    // Provide via injection
    app.provide('liyaAiEnvVuejsConfig', options)
  }
}

export default LiyaAiEnvVuejsPlugin
