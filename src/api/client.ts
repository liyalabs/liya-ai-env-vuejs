// Liya AI Environment - API Client

import axios, { AxiosInstance, AxiosError } from 'axios'
import type { LiyaAiEnvVuejsConfig, LiyaAiEnvVuejsApiResponse } from '../types'

let liyaAiEnvVuejsApiClient: AxiosInstance | null = null
let liyaAiEnvVuejsConfig: LiyaAiEnvVuejsConfig | null = null

export function liyaAiEnvVuejsInitializeClient(config: LiyaAiEnvVuejsConfig): void {
  liyaAiEnvVuejsConfig = config
  
  liyaAiEnvVuejsApiClient = axios.create({
    baseURL: config.apiUrl,
    timeout: 60000,
    headers: {
      'Content-Type': 'application/json',
      'X-API-Key': config.apiKey
    }
  })

  // Response interceptor for error handling
  liyaAiEnvVuejsApiClient.interceptors.response.use(
    (response) => response,
    (error: AxiosError) => {
      return Promise.reject(error)
    }
  )
}

export function liyaAiEnvVuejsGetClient(): AxiosInstance {
  if (!liyaAiEnvVuejsApiClient) {
    throw new Error('[LiyaAiEnvVuejs] API client not initialized. Call liyaAiEnvVuejsInitializeClient first.')
  }
  return liyaAiEnvVuejsApiClient
}

export function liyaAiEnvVuejsGetConfig(): LiyaAiEnvVuejsConfig {
  if (!liyaAiEnvVuejsConfig) {
    throw new Error('[LiyaAiEnvVuejs] Config not initialized. Call liyaAiEnvVuejsInitializeClient first.')
  }
  return liyaAiEnvVuejsConfig
}

export function liyaAiEnvVuejsIsInitialized(): boolean {
  return liyaAiEnvVuejsApiClient !== null && liyaAiEnvVuejsConfig !== null
}

export async function liyaAiEnvVuejsApiRequest<T>(
  method: 'GET' | 'POST' | 'PUT' | 'DELETE',
  endpoint: string,
  data?: unknown
): Promise<LiyaAiEnvVuejsApiResponse<T>> {
  const client = liyaAiEnvVuejsGetClient()
  
  try {
    const response = await client.request<LiyaAiEnvVuejsApiResponse<T>>({
      method,
      url: endpoint,
      data
    })
    return response.data
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return {
        status: 'error',
        message: error.response?.data?.message || error.message,
        code: error.response?.data?.code || undefined
      }
    }
    return {
      status: 'error',
      message: 'An unexpected error occurred'
    }
  }
}
