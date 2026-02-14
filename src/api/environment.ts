// Liya AI Environment - Environment API Functions

import { liyaAiEnvVuejsApiRequest, liyaAiEnvVuejsGetConfig } from './client'
import type {
  LiyaAiEnvVuejsSpeechRequest,
  LiyaAiEnvVuejsSpeechResponse,
  LiyaAiEnvVuejsChatRequest,
  LiyaAiEnvVuejsChatResponse,
  LiyaAiEnvVuejsMessage
} from '../types'

export class LiyaAiEnvVuejsApiError extends Error {
  code?: string
  constructor(message: string, code?: string) {
    super(message)
    this.code = code
    this.name = 'LiyaAiEnvVuejsApiError'
  }
}

export async function liyaAiEnvVuejsSendMessage(
  message: string,
  sessionId?: string
): Promise<LiyaAiEnvVuejsChatResponse | null> {
  const config = liyaAiEnvVuejsGetConfig()
  
  const request: LiyaAiEnvVuejsChatRequest = {
    assistant_id: config.assistantId,
    message,
    session_id: sessionId
  }
  
  const response = await liyaAiEnvVuejsApiRequest<LiyaAiEnvVuejsChatResponse>(
    'POST',
    '/api/v1/external/chat/',
    request
  )
  
  if (response.status === 'success' && response.data) {
    return response.data
  }
  
  // Throw typed error so composable can detect specific error codes
  if (response.code) {
    throw new LiyaAiEnvVuejsApiError(response.message || 'API error', response.code)
  }
  
  return null
}

export async function liyaAiEnvVuejsGenerateSpeech(
  text: string,
  options?: Partial<LiyaAiEnvVuejsSpeechRequest>
): Promise<LiyaAiEnvVuejsSpeechResponse | null> {
  const request: LiyaAiEnvVuejsSpeechRequest = {
    text,
    voice: options?.voice || 'nova',
    speed: options?.speed || 1.0,
    include_audio: options?.include_audio ?? true,
    include_gestures: options?.include_gestures ?? true
  }
  
  const response = await liyaAiEnvVuejsApiRequest<LiyaAiEnvVuejsSpeechResponse>(
    'POST',
    '/api/v1/external/avatar/speech/',
    request
  )
  
  if (response.status === 'success' && response.data) {
    return response.data
  }
  
  return null
}

export async function liyaAiEnvVuejsGetSessionHistory(
  sessionId: string
): Promise<LiyaAiEnvVuejsMessage[]> {
  const response = await liyaAiEnvVuejsApiRequest<{ messages: LiyaAiEnvVuejsMessage[] }>(
    'GET',
    `/api/v1/external/sessions/${sessionId}/messages/`
  )
  
  if (response.status === 'success' && response.data) {
    return response.data.messages
  }
  
  return []
}

// Avatar Model API
export interface LiyaAiEnvVuejsAvatarModelResponse {
  model_url: string
  model_type: string
  source: 'default' | 'assistant'
}

export class LiyaAiEnvVuejsAvatarApiError extends Error {
  code: string
  constructor(message: string, code: string) {
    super(message)
    this.code = code
    this.name = 'LiyaAiEnvVuejsAvatarApiError'
  }
}

export async function liyaAiEnvVuejsGetAvatarModel(
  assistantId?: string
): Promise<LiyaAiEnvVuejsAvatarModelResponse> {
  const config = liyaAiEnvVuejsGetConfig()
  const effectiveAssistantId = assistantId || config.assistantId
  
  const params = effectiveAssistantId ? `?assistant_id=${effectiveAssistantId}` : ''
  
  const response = await liyaAiEnvVuejsApiRequest<LiyaAiEnvVuejsAvatarModelResponse>(
    'GET',
    `/api/v1/external/avatar/model/${params}`
  )
  
  if (response.status === 'success' && response.data) {
    return response.data
  }
  
  throw new LiyaAiEnvVuejsAvatarApiError(
    response.message || 'Failed to get avatar model',
    'AVATAR_MODEL_ERROR'
  )
}

// Scene Background API
export interface LiyaAiEnvVuejsSceneBackgroundResponse {
  model_url: string
  model_type: string
  source: 'default' | 'custom'
  custom_scene_enabled: boolean
}

export async function liyaAiEnvVuejsGetSceneBackground(
  assistantId?: string
): Promise<LiyaAiEnvVuejsSceneBackgroundResponse> {
  const config = liyaAiEnvVuejsGetConfig()
  const effectiveAssistantId = assistantId || config.assistantId
  
  const params = effectiveAssistantId ? `?assistant_id=${effectiveAssistantId}` : ''
  
  const response = await liyaAiEnvVuejsApiRequest<LiyaAiEnvVuejsSceneBackgroundResponse>(
    'GET',
    `/api/v1/external/scene/background/${params}`
  )
  
  if (response.status === 'success' && response.data) {
    return response.data
  }
  
  throw new LiyaAiEnvVuejsAvatarApiError(
    response.message || 'Failed to get scene background',
    'SCENE_BACKGROUND_ERROR'
  )
}

// Presentation List API
export interface LiyaAiEnvVuejsPresentationPageItem {
  id: string
  page_number: number
  title: string
  image_url: string | null
  thumbnail_url: string | null
}

export interface LiyaAiEnvVuejsPresentationListItem {
  id: string
  title: string
  description: string
  total_pages: number
  pages: LiyaAiEnvVuejsPresentationPageItem[]
}

export async function liyaAiEnvVuejsGetPresentations(
  assistantId?: string
): Promise<LiyaAiEnvVuejsPresentationListItem[]> {
  const config = liyaAiEnvVuejsGetConfig()
  const effectiveAssistantId = assistantId || config.assistantId

  const params = effectiveAssistantId ? `?assistant_id=${effectiveAssistantId}` : ''

  const response = await liyaAiEnvVuejsApiRequest<LiyaAiEnvVuejsPresentationListItem[]>(
    'GET',
    `/api/v1/external/presentations/${params}`
  )

  if (response.status === 'success' && response.data) {
    return response.data
  }

  return []
}

export interface LiyaAiEnvVuejsUserAccessResponse {
  has_avatar_access: boolean
  account_type: 'standard' | 'premium' | 'premium_plus' | 'system_admin'
  can_use_custom_avatar: boolean
}

export async function liyaAiEnvVuejsCheckUserAccess(): Promise<LiyaAiEnvVuejsUserAccessResponse> {
  const response = await liyaAiEnvVuejsApiRequest<LiyaAiEnvVuejsUserAccessResponse>(
    'GET',
    '/api/v1/external/user/access/'
  )
  
  if (response.status === 'success' && response.data) {
    return response.data
  }
  
  throw new LiyaAiEnvVuejsAvatarApiError(
    response.message || 'Failed to check user access',
    'USER_ACCESS_ERROR'
  )
}
