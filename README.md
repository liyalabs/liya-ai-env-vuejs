# @liyalabs/liya-ai-env-vuejs

Virtual Classroom Environment with Full-Body AI Avatar for Vue.js 3 - Interactive teaching experience with lip-sync and gestures.

## Features

- 🏫 **3D Virtual Classroom** - Immersive classroom environment with perspective
- 🧑‍🏫 **Full-Body Avatar** - Standing teacher/expert avatar with full body animations
- 👄 **Lip-Sync** - Real-time lip synchronization using viseme data
- 👀 **Facial Expressions** - Eye movements, blinking, and micro-expressions
- 🤲 **Hand Gestures** - API-driven + audio-reactive gesture system
- 🎤 **Voice Input** - Speech-to-text for hands-free interaction
- 🔊 **Voice Output** - Text-to-speech with avatar animation
- 🖼️ **Two Modes** - Full-screen modal or standalone page
- 🎨 **Liquid Glass UI** - Modern glassmorphism design

## Installation

```bash
npm install @liyalabs/liya-ai-env-vuejs
# or
yarn add @liyalabs/liya-ai-env-vuejs
# or
pnpm add @liyalabs/liya-ai-env-vuejs
```

## Quick Start

### 1. Initialize the Plugin

```typescript
// main.ts
import { createApp } from 'vue'
import App from './App.vue'
import LiyaAiEnvVuejs from '@liyalabs/liya-ai-env-vuejs'
import '@liyalabs/liya-ai-env-vuejs/style.css'

const app = createApp(App)

app.use(LiyaAiEnvVuejs, {
  apiUrl: 'https://app-X-ai.liyalabs.com', // Your assigned backend URL (see GAR section)
  apiKey: 'your-api-key',
  assistantId: 'your-assistant-id',
  assistantName: 'Öğretmen Liya',
  classroomModelUrl: '/models/classroom.glb',
  avatarModelUrl: '/models/teacher-avatar.glb'
})

app.mount('#app')
```

### 2. Modal Fullscreen Mode

```vue
<template>
  <button @click="openEnvironment">Sanal Sınıfa Gir</button>
  
  <LiyaAiEnvVuejsEnvironment
    mode="modal_fullscreen"
    :is-open="isOpen"
    assistant-name="Öğretmen Liya"
    welcome-message="Merhaba! Bugün ne öğrenmek istersiniz?"
    @close="isOpen = false"
    @message-sent="onMessageSent"
    @message-received="onMessageReceived"
  />
</template>

<script setup>
import { ref } from 'vue'
import { LiyaAiEnvVuejsEnvironment } from '@liyalabs/liya-ai-env-vuejs'

const isOpen = ref(false)

function openEnvironment() {
  isOpen.value = true
}

function onMessageSent(message) {
  console.log('User said:', message)
}

function onMessageReceived(message) {
  console.log('AI responded:', message)
}
</script>
```

### 3. Standalone Mode

```vue
<!-- pages/virtual-classroom.vue -->
<template>
  <LiyaAiEnvVuejsEnvironment
    mode="standalone"
    :show-back-button="true"
    assistant-name="Uzman Liya"
    @back="router.back()"
  />
</template>

<script setup>
import { useRouter } from 'vue-router'
import { LiyaAiEnvVuejsEnvironment } from '@liyalabs/liya-ai-env-vuejs'

const router = useRouter()
</script>
```

## Components

### LiyaAiEnvVuejsEnvironment

Main environment component that supports both modal and standalone modes.

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `mode` | `'modal_fullscreen' \| 'standalone'` | `'modal_fullscreen'` | Display mode |
| `isOpen` | `boolean` | `false` | Modal open state (modal mode only) |
| `showBackButton` | `boolean` | `true` | Show back button (standalone mode) |
| `showCloseButton` | `boolean` | `true` | Show close button (modal mode) |
| `classroomModelUrl` | `string` | `''` | URL to classroom GLB model |
| `avatarModelUrl` | `string` | `''` | URL to avatar GLB model |
| `avatarPosition` | `{ x, y, z }` | `{ x: 0, y: 0, z: 0 }` | Avatar position in scene |
| `cameraConfig` | `CameraConfig` | `...` | Camera position and settings |
| `welcomeMessage` | `string` | `'...'` | Initial welcome message |
| `enableGestures` | `boolean` | `true` | Enable hand/arm gestures |
| `enableSubtitles` | `boolean` | `true` | Show subtitle display |
| `assistantName` | `string` | `'AI Öğretmen'` | Assistant display name |
| `theme` | `ThemeConfig` | `{}` | Theme customization |

#### Events

| Event | Payload | Description |
|-------|---------|-------------|
| `opened` | - | Environment opened |
| `closed` | - | Environment closed |
| `close` | - | Close button clicked |
| `back` | - | Back button clicked |
| `message-sent` | `string` | User sent a message |
| `message-received` | `string` | AI responded |
| `speaking-started` | - | Avatar started speaking |
| `speaking-ended` | - | Avatar finished speaking |
| `loaded` | - | Scene fully loaded |
| `error` | `Error` | Error occurred |

### LiyaAiEnvVuejsClassroomScene

Standalone 3D classroom scene component.

```vue
<template>
  <LiyaAiEnvVuejsClassroomScene
    classroom-model-url="/models/classroom.glb"
    avatar-model-url="/models/avatar.glb"
    :avatar-position="{ x: 0, y: 0, z: -2 }"
    :is-speaking="isSpeaking"
    :visemes="visemeData"
    :gestures="gestureData"
    :current-time="audioTime"
    @loaded="onLoaded"
  />
</template>
```

## Composables

### useLiyaAiEnvVuejsEnvironment

Main environment state management.

```typescript
import { useLiyaAiEnvVuejsEnvironment } from '@liyalabs/liya-ai-env-vuejs'

const {
  isSpeaking,
  isListening,
  isProcessing,
  messages,
  visemes,
  gestures,
  audioTime,
  handleMessage,
  speakWithAvatar,
  cleanup
} = useLiyaAiEnvVuejsEnvironment()

// Send a message
await handleMessage('Merhaba!')

// Speak with avatar
await speakWithAvatar('Bu bir test mesajıdır.')
```

### useLiyaAiEnvVuejsGestures

Gesture animation control.

```typescript
import { useLiyaAiEnvVuejsGestures } from '@liyalabs/liya-ai-env-vuejs'

const {
  currentGesture,
  gestureProgress,
  triggerGesture,
  getCurrentKeyframe
} = useLiyaAiEnvVuejsGestures()

// Trigger a gesture
triggerGesture('explain', 0.8) // type, intensity
triggerGesture('wave')
triggerGesture('point')
```

### useLiyaAiEnvVuejsAudioAnalyzer

Audio level analysis for gesture intensity.

```typescript
import { useLiyaAiEnvVuejsAudioAnalyzer } from '@liyalabs/liya-ai-env-vuejs'

const {
  audioLevel,
  isAnalyzing,
  startAnalyzing,
  stopAnalyzing,
  getGestureIntensityFromAudio
} = useLiyaAiEnvVuejsAudioAnalyzer()

await startAnalyzing()
const intensity = getGestureIntensityFromAudio()
```

## Avatar Models

The environment supports GLB/GLTF models with ARKit-compatible blend shapes:

- **Ready Player Me** full-body avatars (recommended)
- Custom models with viseme morph targets

### Required Bone Structure

For gesture animations, the avatar should have these bones:
- `Spine` / `Spine1` / `Spine2`
- `Head`
- `LeftShoulder` / `RightShoulder`
- `LeftArm` / `RightArm`
- `LeftForeArm` / `RightForeArm`
- `LeftHand` / `RightHand`

### Supported Viseme Morph Targets

```
mouthClose, mouthFunnel, mouthPucker, mouthLeft, mouthRight,
mouthSmileLeft, mouthSmileRight, mouthFrownLeft, mouthFrownRight,
mouthDimpleLeft, mouthDimpleRight, mouthStretchLeft, mouthStretchRight,
mouthRollLower, mouthRollUpper, mouthShrugLower, mouthShrugUpper,
mouthPressLeft, mouthPressRight, mouthLowerDownLeft, mouthLowerDownRight,
mouthUpperUpLeft, mouthUpperUpRight, eyeBlinkLeft, eyeBlinkRight,
eyeLookDownLeft, eyeLookDownRight, eyeLookInLeft, eyeLookInRight,
eyeLookOutLeft, eyeLookOutRight, eyeLookUpLeft, eyeLookUpRight
```

## Gesture Types

Available gesture animations:

| Type | Description |
|------|-------------|
| `idle` | Default standing pose with subtle movement |
| `explain` | Both hands explaining gesture |
| `emphasize` | Single hand emphasis |
| `point` | Pointing gesture |
| `wave` | Waving hello/goodbye |
| `think` | Hand on chin thinking pose |
| `nod` | Head nodding |
| `shrug` | Shoulder shrug |

## API Integration

### Backend Endpoints

The environment requires these API endpoints:

- `POST /api/v1/external/chat/` - Chat messages
- `POST /api/v1/external/avatar/speech/` - Avatar speech with visemes & gestures

### Speech Response Format

```typescript
// POST /api/v1/external/avatar/speech/
{
  text: "Merhaba!",
  voice: "nova",
  speed: 1.0,
  include_audio: true,
  include_gestures: true
}

// Response
{
  status: "success",
  data: {
    visemes: [
      { time: 0.0, viseme: 10, duration: 0.1 },
      { time: 0.1, viseme: 7, duration: 0.08 },
      // ...
    ],
    audio_base64: "...",
    gestures: [
      { time: 0.0, type: "wave", intensity: 0.8, duration: 1.5 },
      { time: 2.0, type: "explain", intensity: 0.6, duration: 2.0 }
    ]
  }
}
```

## Theme Customization

```vue
<LiyaAiEnvVuejsEnvironment
  :theme="{
    primaryColor: '#6366f1',
    backgroundColor: '#1a1a2e',
    textColor: '#ffffff',
    fontFamily: 'Inter, sans-serif',
    borderRadius: '16px',
    zIndex: 10000
  }"
/>
```

## CSS Variables

```css
:root {
  --liya-primary-color: #6366f1;
  --liya-primary-hover: #4f46e5;
  --liya-env-bg-dark: #1a1a2e;
  --liya-env-bg-gradient: linear-gradient(180deg, #1a1a2e 0%, #16213e 100%);
  --liya-env-glass-bg: rgba(255, 255, 255, 0.08);
  --liya-env-glass-border: rgba(255, 255, 255, 0.15);
  --liya-env-glass-blur: 12px;
}
```

## Browser Support

- Chrome 80+
- Firefox 75+
- Safari 14+
- Edge 80+

Requires WebGL 2.0 and Web Speech API support.

## GAR (Global Application Router)

Liya AI uses a distributed backend architecture. Each user is assigned to a specific backend instance.

### Finding Your Backend URL

Your backend URL is displayed in your Liya AI dashboard under **Settings > API Configuration**:

```
https://app-{X}-ai.liyalabs.com
```

Where `{X}` is your assigned instance number (1, 2, 3, etc.).

| Instance | Backend URL |
|----------|-------------|
| 1 | `https://app-1-ai.liyalabs.com` |
| 2 | `https://app-2-ai.liyalabs.com` |
| 3 | `https://app-3-ai.liyalabs.com` |

## License

MIT © Liya Labs
