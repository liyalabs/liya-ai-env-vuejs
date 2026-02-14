import { App } from 'vue';
import { AxiosInstance } from 'axios';
import { ComponentOptionsMixin } from 'vue';
import { ComponentProvideOptions } from 'vue';
import { ComputedRef } from 'vue';
import { DefineComponent } from 'vue';
import { PublicProps } from 'vue';
import { Ref } from 'vue';
import * as THREE_2 from 'three';

declare const __VLS_component: DefineComponent<Props_5, {
loadModel: typeof liyaAiEnvVuejsLoadModel;
update: typeof liyaAiEnvVuejsUpdate;
getModel: typeof liyaAiEnvVuejsGetModel;
dispose: typeof liyaAiEnvVuejsDispose;
}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
error: (error: Error) => any;
progress: (progress: number) => any;
loaded: () => any;
}, string, PublicProps, Readonly<Props_5> & Readonly<{
onError?: ((error: Error) => any) | undefined;
onProgress?: ((progress: number) => any) | undefined;
onLoaded?: (() => any) | undefined;
}>, {
modelUrl: string;
isSpeaking: boolean;
visemes: LiyaAiEnvVuejsViseme[];
currentTime: number;
animationConfig: LiyaAiEnvVuejsAnimationConfig;
}, {}, {}, {}, string, ComponentProvideOptions, false, {}, HTMLDivElement>;

declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        default?(_: {}): any;
    };
    refs: {};
    rootEl: HTMLDivElement;
};

declare type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;

declare type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};

export declare const LIYA_AI_ENV_VUEJS_GESTURE_DEFINITIONS: Record<LiyaAiEnvVuejsGestureType, LiyaAiEnvVuejsGestureDefinition>;

export declare interface LiyaAiEnvVuejsAnimationConfig {
    lipSyncSpeed?: number;
    lipSyncIntensity?: number;
    blinkSpeed?: number;
    blinkIntervalMin?: number;
    blinkIntervalMax?: number;
    eyeMoveSpeed?: number;
    eyeMoveIntervalMin?: number;
    eyeMoveIntervalMax?: number;
    eyeMoveRange?: number;
    breathingSpeed?: number;
    breathingIntensity?: number;
    gestureSpeed?: number;
    gestureIntensity?: number;
}

export declare interface LiyaAiEnvVuejsApiResponse<T = unknown> {
    status: 'success' | 'error';
    data?: T;
    message?: string;
    code?: string;
    errors?: Record<string, string[]>;
}

declare interface LiyaAiEnvVuejsArmPose {
    shoulderRotation?: {
        x: number;
        y: number;
        z: number;
    };
    elbowRotation?: {
        x: number;
        y: number;
        z: number;
    };
    wristRotation?: {
        x: number;
        y: number;
        z: number;
    };
}

export declare interface LiyaAiEnvVuejsAvatarConfig {
    modelUrl: string;
    position: LiyaAiEnvVuejsPosition;
    rotation?: LiyaAiEnvVuejsPosition;
    scale?: number;
}

export declare interface LiyaAiEnvVuejsAvatarState {
    isSpeaking: boolean;
    isIdle: boolean;
    currentVisemes: LiyaAiEnvVuejsViseme[];
    currentGestures: LiyaAiEnvVuejsGesture[];
    audioCurrentTime: number;
}

declare interface LiyaAiEnvVuejsBodyPose {
    rotation?: {
        x: number;
        y: number;
        z: number;
    };
    lean?: {
        x: number;
        z: number;
    };
}

export declare interface LiyaAiEnvVuejsCameraConfig {
    position: LiyaAiEnvVuejsPosition;
    lookAt: LiyaAiEnvVuejsPosition;
    fov?: number;
}

export declare interface LiyaAiEnvVuejsChatRequest {
    assistant_id: string;
    message: string;
    session_id?: string;
    external_session_id?: string;
}

export declare interface LiyaAiEnvVuejsChatResponse {
    session_id: string;
    message_id?: string;
    response?: string;
    response_time?: number;
    user_message?: LiyaAiEnvVuejsMessage;
    assistant_message?: LiyaAiEnvVuejsMessage;
    presentation_result?: LiyaAiEnvVuejsPresentationResult;
    suggestions?: string[];
    metadata?: Record<string, any>;
}

export declare interface LiyaAiEnvVuejsClassroomConfig {
    modelUrl: string;
    position?: LiyaAiEnvVuejsPosition;
    rotation?: LiyaAiEnvVuejsPosition;
    scale?: number;
}

export declare const LiyaAiEnvVuejsClassroomScene: DefineComponent<Props_4, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
error: (error: Error) => any;
progress: (progress: number) => any;
loaded: () => any;
}, string, PublicProps, Readonly<Props_4> & Readonly<{
onError?: ((error: Error) => any) | undefined;
onProgress?: ((progress: number) => any) | undefined;
onLoaded?: (() => any) | undefined;
}>, {
isSpeaking: boolean;
visemes: LiyaAiEnvVuejsViseme[];
currentTime: number;
animationConfig: LiyaAiEnvVuejsAnimationConfig;
classroomModelUrl: string;
avatarModelUrl: string;
avatarPosition: LiyaAiEnvVuejsPosition;
cameraConfig: LiyaAiEnvVuejsCameraConfig;
gestures: LiyaAiEnvVuejsGesture[];
presentationResult: LiyaAiEnvVuejsPresentationResult | null;
}, {}, {}, {}, string, ComponentProvideOptions, false, {
liyaAiEnvVuejsContainerRef: HTMLDivElement;
}, HTMLDivElement>;

export declare interface LiyaAiEnvVuejsClassroomSceneProps {
    classroomModelUrl?: string;
    avatarModelUrl?: string;
    avatarPosition?: LiyaAiEnvVuejsPosition;
    cameraConfig?: LiyaAiEnvVuejsCameraConfig;
    isSpeaking?: boolean;
    visemes?: LiyaAiEnvVuejsViseme[];
    gestures?: LiyaAiEnvVuejsGesture[];
    currentTime?: number;
    animationConfig?: LiyaAiEnvVuejsAnimationConfig;
}

export declare interface LiyaAiEnvVuejsConfig {
    apiKey: string;
    apiUrl: string;
    assistantId: string;
    assistantName?: string;
    classroomModelUrl?: string;
    avatarModelUrl?: string;
    theme?: LiyaAiEnvVuejsThemeConfig;
    features?: LiyaAiEnvVuejsFeaturesConfig;
    locale?: string;
}

export declare function liyaAiEnvVuejsDetectBrowserLocale(): LiyaAiEnvVuejsSupportedLocale;

declare function liyaAiEnvVuejsDispose(): void;

export declare const LiyaAiEnvVuejsEnvironment: DefineComponent<Props, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
error: (error: Error) => any;
loaded: () => any;
close: () => any;
closed: () => any;
back: () => any;
opened: () => any;
"message-sent": (message: string) => any;
"message-received": (message: string) => any;
"speaking-started": () => any;
"speaking-ended": () => any;
}, string, PublicProps, Readonly<Props> & Readonly<{
onError?: ((error: Error) => any) | undefined;
onLoaded?: (() => any) | undefined;
onClose?: (() => any) | undefined;
onClosed?: (() => any) | undefined;
onBack?: (() => any) | undefined;
onOpened?: (() => any) | undefined;
"onMessage-sent"?: ((message: string) => any) | undefined;
"onMessage-received"?: ((message: string) => any) | undefined;
"onSpeaking-started"?: (() => any) | undefined;
"onSpeaking-ended"?: (() => any) | undefined;
}>, {
classroomModelUrl: string;
avatarModelUrl: string;
avatarPosition: LiyaAiEnvVuejsPosition;
cameraConfig: LiyaAiEnvVuejsCameraConfig;
isOpen: boolean;
showBackButton: boolean;
showCloseButton: boolean;
welcomeMessage: string;
enableGestures: boolean;
enableSubtitles: boolean;
assistantName: string;
theme: LiyaAiEnvVuejsThemeConfig;
mode: LiyaAiEnvVuejsMode;
}, {}, {}, {}, string, ComponentProvideOptions, false, {}, any>;

export declare const LiyaAiEnvVuejsEnvironmentModal: DefineComponent<Props_2, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
error: (error: Error) => any;
loaded: () => any;
close: () => any;
closed: () => any;
back: () => any;
opened: () => any;
"message-sent": (message: string) => any;
"message-received": (message: string) => any;
"speaking-started": () => any;
"speaking-ended": () => any;
}, string, PublicProps, Readonly<Props_2> & Readonly<{
onError?: ((error: Error) => any) | undefined;
onLoaded?: (() => any) | undefined;
onClose?: (() => any) | undefined;
onClosed?: (() => any) | undefined;
onBack?: (() => any) | undefined;
onOpened?: (() => any) | undefined;
"onMessage-sent"?: ((message: string) => any) | undefined;
"onMessage-received"?: ((message: string) => any) | undefined;
"onSpeaking-started"?: (() => any) | undefined;
"onSpeaking-ended"?: (() => any) | undefined;
}>, {
classroomModelUrl: string;
avatarModelUrl: string;
avatarPosition: LiyaAiEnvVuejsPosition;
cameraConfig: LiyaAiEnvVuejsCameraConfig;
isOpen: boolean;
showBackButton: boolean;
showCloseButton: boolean;
welcomeMessage: string;
enableGestures: boolean;
enableSubtitles: boolean;
assistantName: string;
theme: LiyaAiEnvVuejsThemeConfig;
}, {}, {}, {}, string, ComponentProvideOptions, false, {
liyaAiEnvVuejsMessagesRef: HTMLDivElement;
}, any>;

export declare interface LiyaAiEnvVuejsEnvironmentProps {
    mode?: LiyaAiEnvVuejsMode;
    isOpen?: boolean;
    showBackButton?: boolean;
    showCloseButton?: boolean;
    classroomModelUrl?: string;
    avatarModelUrl?: string;
    avatarPosition?: LiyaAiEnvVuejsPosition;
    cameraPosition?: LiyaAiEnvVuejsPosition;
    welcomeMessage?: string;
    enableGestures?: boolean;
    enableSubtitles?: boolean;
    theme?: LiyaAiEnvVuejsThemeConfig;
}

export declare const LiyaAiEnvVuejsEnvironmentStandalone: DefineComponent<Props_3, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
error: (error: Error) => any;
loaded: () => any;
back: () => any;
"message-sent": (message: string) => any;
"message-received": (message: string) => any;
"speaking-started": () => any;
"speaking-ended": () => any;
}, string, PublicProps, Readonly<Props_3> & Readonly<{
onError?: ((error: Error) => any) | undefined;
onLoaded?: (() => any) | undefined;
onBack?: (() => any) | undefined;
"onMessage-sent"?: ((message: string) => any) | undefined;
"onMessage-received"?: ((message: string) => any) | undefined;
"onSpeaking-started"?: (() => any) | undefined;
"onSpeaking-ended"?: (() => any) | undefined;
}>, {
classroomModelUrl: string;
avatarModelUrl: string;
avatarPosition: LiyaAiEnvVuejsPosition;
cameraConfig: LiyaAiEnvVuejsCameraConfig;
showBackButton: boolean;
welcomeMessage: string;
enableGestures: boolean;
enableSubtitles: boolean;
assistantName: string;
theme: LiyaAiEnvVuejsThemeConfig;
}, {}, {}, {}, string, ComponentProvideOptions, false, {}, HTMLDivElement>;

export declare interface LiyaAiEnvVuejsEnvironmentState {
    isOpen: boolean;
    isLoading: boolean;
    isReady: boolean;
    isSpeaking: boolean;
    isListening: boolean;
    isProcessing: boolean;
    currentMessage: string;
    error: string | null;
    loadProgress: number;
}

export declare interface LiyaAiEnvVuejsEvents {
    'opened': () => void;
    'closed': () => void;
    'back': () => void;
    'message-sent': (message: string) => void;
    'message-received': (message: string) => void;
    'speaking-started': () => void;
    'speaking-ended': () => void;
    'gesture-triggered': (gesture: LiyaAiEnvVuejsGestureType) => void;
    'error': (error: Error) => void;
    'loaded': () => void;
}

export declare interface LiyaAiEnvVuejsFeaturesConfig {
    voice?: boolean;
    subtitles?: boolean;
    gestures?: boolean;
    soundEffects?: boolean;
}

export declare const LiyaAiEnvVuejsFullBodyAvatar: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;

export declare interface LiyaAiEnvVuejsFullBodyAvatarProps {
    modelUrl?: string;
    isSpeaking?: boolean;
    visemes?: LiyaAiEnvVuejsViseme[];
    gestures?: LiyaAiEnvVuejsGesture[];
    currentTime?: number;
    animationConfig?: LiyaAiEnvVuejsAnimationConfig;
}

export declare function liyaAiEnvVuejsGenerateSpeech(text: string, options?: Partial<LiyaAiEnvVuejsSpeechRequest>): Promise<LiyaAiEnvVuejsSpeechResponse | null>;

export declare interface LiyaAiEnvVuejsGesture {
    time: number;
    type: LiyaAiEnvVuejsGestureType;
    intensity: number;
    duration: number;
}

declare interface LiyaAiEnvVuejsGestureDefinition {
    type: LiyaAiEnvVuejsGestureType;
    name: string;
    duration: number;
    keyframes: LiyaAiEnvVuejsGestureKeyframe[];
    loop?: boolean;
    easing?: 'linear' | 'ease-in' | 'ease-out' | 'ease-in-out';
}

declare interface LiyaAiEnvVuejsGestureKeyframe {
    time: number;
    leftArm?: LiyaAiEnvVuejsArmPose;
    rightArm?: LiyaAiEnvVuejsArmPose;
    head?: LiyaAiEnvVuejsHeadPose;
    body?: LiyaAiEnvVuejsBodyPose;
}

export declare interface LiyaAiEnvVuejsGestureState {
    currentGesture: LiyaAiEnvVuejsGestureType;
    intensity: number;
    progress: number;
}

export declare type LiyaAiEnvVuejsGestureType = 'idle' | 'explain' | 'emphasize' | 'point' | 'wave' | 'think' | 'nod' | 'shrug';

export declare function liyaAiEnvVuejsGetClient(): AxiosInstance;

export declare function liyaAiEnvVuejsGetConfig(): LiyaAiEnvVuejsConfig;

export declare function liyaAiEnvVuejsGetGestureDefinition(type: LiyaAiEnvVuejsGestureType): LiyaAiEnvVuejsGestureDefinition;

declare function liyaAiEnvVuejsGetModel(): THREE_2.Object3D | null;

export declare function liyaAiEnvVuejsGetPresentations(assistantId?: string): Promise<LiyaAiEnvVuejsPresentationListItem[]>;

export declare function liyaAiEnvVuejsGetSessionHistory(sessionId: string): Promise<LiyaAiEnvVuejsMessage[]>;

declare interface LiyaAiEnvVuejsHeadPose {
    rotation?: {
        x: number;
        y: number;
        z: number;
    };
    eyeLookAt?: {
        x: number;
        y: number;
    };
}

export declare function liyaAiEnvVuejsInitializeClient(config: LiyaAiEnvVuejsConfig): void;

export declare function liyaAiEnvVuejsInterpolateKeyframes(keyframes: LiyaAiEnvVuejsGestureKeyframe[], progress: number): LiyaAiEnvVuejsGestureKeyframe;

export declare function liyaAiEnvVuejsIsInitialized(): boolean;

export declare function liyaAiEnvVuejsIsSupportedLocale(locale: string): locale is LiyaAiEnvVuejsSupportedLocale;

declare function liyaAiEnvVuejsLoadModel(url: string, scene: THREE_2.Scene): Promise<void>;

export declare interface LiyaAiEnvVuejsMessage {
    id: string;
    content: string;
    role: 'user' | 'assistant';
    created_at: string;
    response_time?: number;
}

export declare type LiyaAiEnvVuejsMode = 'modal_fullscreen' | 'standalone';

declare const LiyaAiEnvVuejsPlugin: {
    install(app: App, options: LiyaAiEnvVuejsPluginOptions): void;
};
export { LiyaAiEnvVuejsPlugin }
export default LiyaAiEnvVuejsPlugin;

export declare interface LiyaAiEnvVuejsPluginOptions extends LiyaAiEnvVuejsConfig {
}

export declare interface LiyaAiEnvVuejsPosition {
    x: number;
    y: number;
    z: number;
}

declare interface LiyaAiEnvVuejsPresentationListItem {
    id: string;
    title: string;
    description: string;
    total_pages: number;
    pages: LiyaAiEnvVuejsPresentationPageItem[];
}

declare interface LiyaAiEnvVuejsPresentationPageItem {
    id: string;
    page_number: number;
    title: string;
    image_url: string | null;
    thumbnail_url: string | null;
}

export declare interface LiyaAiEnvVuejsPresentationResult {
    success: boolean;
    action: string;
    presentation_id: string;
    presentation_title: string;
    page_number: number;
    page_title: string;
    page_image_url: string | null;
    total_pages: number;
    reason: string;
}

export declare function liyaAiEnvVuejsSendMessage(message: string, sessionId?: string): Promise<LiyaAiEnvVuejsChatResponse | null>;

export declare interface LiyaAiEnvVuejsSpeechRequest {
    text: string;
    voice?: string;
    speed?: number;
    include_audio?: boolean;
    include_gestures?: boolean;
}

export declare interface LiyaAiEnvVuejsSpeechResponse {
    visemes: LiyaAiEnvVuejsViseme[];
    audio_base64: string;
    gestures?: LiyaAiEnvVuejsGesture[];
    duration?: number;
}

export declare type LiyaAiEnvVuejsSupportedLocale = 'tr' | 'en';

export declare interface LiyaAiEnvVuejsThemeConfig {
    primaryColor?: string;
    secondaryColor?: string;
    backgroundColor?: string;
    textColor?: string;
    fontFamily?: string;
    borderRadius?: string;
    zIndex?: number;
}

export declare interface LiyaAiEnvVuejsTranslations {
    status: {
        ready: string;
        listening: string;
        preparing: string;
        speaking: string;
        online: string;
    };
    preparingMessages: string[];
    chat: {
        placeholder: string;
        premiumRequired: string;
        userRole: string;
        emptyWelcome: string;
    };
    welcomeSuggestions: string[];
    voice: {
        startRecording: string;
        stopRecording: string;
        listening: string;
        thinking: string;
        pressToSpeak: string;
        notSupported: string;
    };
    controls: {
        close: string;
        back: string;
        cancel: string;
        replay: string;
        pressAndSpeak: string;
    };
    patienceTooltips: string[];
    premium: {
        title: string;
        upgradePremium: string;
        upgradePremiumPlus: string;
        viewPlans: string;
    };
    errors: {
        problemOccurred: string;
        tryAgainLater: string;
        connectionError: string;
        sendError: string;
    };
    branding: {
        environmentTitle: string;
    };
}

export declare const liyaAiEnvVuejsTranslations: Record<LiyaAiEnvVuejsSupportedLocale, LiyaAiEnvVuejsTranslations>;

declare function liyaAiEnvVuejsUpdate(deltaTime: number, time: number): void;

export declare interface LiyaAiEnvVuejsViseme {
    time: number;
    viseme: number;
    duration: number;
}

declare interface Props {
    mode?: LiyaAiEnvVuejsMode;
    isOpen?: boolean;
    showBackButton?: boolean;
    showCloseButton?: boolean;
    classroomModelUrl?: string;
    avatarModelUrl?: string;
    avatarPosition?: LiyaAiEnvVuejsPosition;
    cameraConfig?: LiyaAiEnvVuejsCameraConfig;
    welcomeMessage?: string;
    enableGestures?: boolean;
    enableSubtitles?: boolean;
    assistantName?: string;
    theme?: LiyaAiEnvVuejsThemeConfig;
}

declare interface Props_2 {
    isOpen?: boolean;
    showBackButton?: boolean;
    showCloseButton?: boolean;
    classroomModelUrl?: string;
    avatarModelUrl?: string;
    avatarPosition?: LiyaAiEnvVuejsPosition;
    cameraConfig?: LiyaAiEnvVuejsCameraConfig;
    welcomeMessage?: string;
    enableGestures?: boolean;
    enableSubtitles?: boolean;
    assistantName?: string;
    theme?: LiyaAiEnvVuejsThemeConfig;
}

declare interface Props_3 {
    showBackButton?: boolean;
    classroomModelUrl?: string;
    avatarModelUrl?: string;
    avatarPosition?: LiyaAiEnvVuejsPosition;
    cameraConfig?: LiyaAiEnvVuejsCameraConfig;
    welcomeMessage?: string;
    enableGestures?: boolean;
    enableSubtitles?: boolean;
    assistantName?: string;
    theme?: LiyaAiEnvVuejsThemeConfig;
}

declare interface Props_4 {
    classroomModelUrl?: string;
    avatarModelUrl?: string;
    avatarPosition?: LiyaAiEnvVuejsPosition;
    cameraConfig?: LiyaAiEnvVuejsCameraConfig;
    isSpeaking?: boolean;
    visemes?: LiyaAiEnvVuejsViseme[];
    gestures?: LiyaAiEnvVuejsGesture[];
    currentTime?: number;
    animationConfig?: LiyaAiEnvVuejsAnimationConfig;
    presentationResult?: LiyaAiEnvVuejsPresentationResult | null;
}

declare interface Props_5 {
    modelUrl?: string;
    isSpeaking?: boolean;
    visemes?: LiyaAiEnvVuejsViseme[];
    currentTime?: number;
    animationConfig?: LiyaAiEnvVuejsAnimationConfig;
}

export declare function useLiyaAiEnvVuejsAudioAnalyzer(): {
    audioLevel: ComputedRef<number>;
    isAnalyzing: ComputedRef<boolean>;
    frequencyData: ComputedRef<    {
    [x: number]: number;
    readonly BYTES_PER_ELEMENT: number;
    readonly buffer: {
    readonly byteLength: number;
    slice: (begin?: number, end?: number) => ArrayBuffer;
    readonly [Symbol.toStringTag]: "ArrayBuffer";
    } | {
    readonly byteLength: number;
    slice: (begin?: number, end?: number) => SharedArrayBuffer;
    readonly [Symbol.toStringTag]: "SharedArrayBuffer";
    };
    readonly byteLength: number;
    readonly byteOffset: number;
    copyWithin: (target: number, start: number, end?: number) => Uint8Array<ArrayBufferLike>;
    every: (predicate: (value: number, index: number, array: Uint8Array<ArrayBufferLike>) => unknown, thisArg?: any) => boolean;
    fill: (value: number, start?: number, end?: number) => Uint8Array<ArrayBufferLike>;
    filter: (predicate: (value: number, index: number, array: Uint8Array<ArrayBufferLike>) => any, thisArg?: any) => Uint8Array<ArrayBuffer>;
    find: (predicate: (value: number, index: number, obj: Uint8Array<ArrayBufferLike>) => boolean, thisArg?: any) => number | undefined;
    findIndex: (predicate: (value: number, index: number, obj: Uint8Array<ArrayBufferLike>) => boolean, thisArg?: any) => number;
    forEach: (callbackfn: (value: number, index: number, array: Uint8Array<ArrayBufferLike>) => void, thisArg?: any) => void;
    indexOf: (searchElement: number, fromIndex?: number) => number;
    join: (separator?: string) => string;
    lastIndexOf: (searchElement: number, fromIndex?: number) => number;
    readonly length: number;
    map: (callbackfn: (value: number, index: number, array: Uint8Array<ArrayBufferLike>) => number, thisArg?: any) => Uint8Array<ArrayBuffer>;
    reduce: {
    (callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: Uint8Array<ArrayBufferLike>) => number): number;
    (callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: Uint8Array<ArrayBufferLike>) => number, initialValue: number): number;
    <U>(callbackfn: (previousValue: U, currentValue: number, currentIndex: number, array: Uint8Array<ArrayBufferLike>) => U, initialValue: U): U;
    };
    reduceRight: {
    (callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: Uint8Array<ArrayBufferLike>) => number): number;
    (callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: Uint8Array<ArrayBufferLike>) => number, initialValue: number): number;
    <U>(callbackfn: (previousValue: U, currentValue: number, currentIndex: number, array: Uint8Array<ArrayBufferLike>) => U, initialValue: U): U;
    };
    reverse: () => Uint8Array<ArrayBufferLike>;
    set: (array: ArrayLike<number>, offset?: number) => void;
    slice: (start?: number, end?: number) => Uint8Array<ArrayBuffer>;
    some: (predicate: (value: number, index: number, array: Uint8Array<ArrayBufferLike>) => unknown, thisArg?: any) => boolean;
    sort: (compareFn?: ((a: number, b: number) => number) | undefined) => Uint8Array<ArrayBufferLike>;
    subarray: (begin?: number, end?: number) => Uint8Array<ArrayBufferLike>;
    toLocaleString: {
    (): string;
    (locales: string | string[], options?: Intl.NumberFormatOptions): string;
    };
    toString: () => string;
    valueOf: () => Uint8Array<ArrayBufferLike>;
    entries: () => ArrayIterator<[number, number]>;
    keys: () => ArrayIterator<number>;
    values: () => ArrayIterator<number>;
    includes: (searchElement: number, fromIndex?: number) => boolean;
    [Symbol.iterator]: () => ArrayIterator<number>;
    readonly [Symbol.toStringTag]: "Uint8Array";
    at: (index: number) => number | undefined;
    }>;
    startAnalyzing: () => Promise<boolean>;
    stopAnalyzing: () => void;
    getGestureIntensityFromAudio: () => number;
    getSpeakingEmphasis: () => "low" | "medium" | "high";
};

export declare function useLiyaAiEnvVuejsEnvironment(): {
    state: Readonly<Ref<    {
    readonly isOpen: boolean;
    readonly isLoading: boolean;
    readonly isReady: boolean;
    readonly isSpeaking: boolean;
    readonly isListening: boolean;
    readonly isProcessing: boolean;
    readonly currentMessage: string;
    readonly error: string | null;
    readonly loadProgress: number;
    }, {
    readonly isOpen: boolean;
    readonly isLoading: boolean;
    readonly isReady: boolean;
    readonly isSpeaking: boolean;
    readonly isListening: boolean;
    readonly isProcessing: boolean;
    readonly currentMessage: string;
    readonly error: string | null;
    readonly loadProgress: number;
    }>>;
    isOpen: ComputedRef<boolean>;
    isLoading: ComputedRef<boolean>;
    isReady: ComputedRef<boolean>;
    isSpeaking: ComputedRef<boolean>;
    isListening: ComputedRef<boolean>;
    isProcessing: ComputedRef<boolean>;
    currentMessage: ComputedRef<string>;
    error: ComputedRef<string | null>;
    loadProgress: ComputedRef<number>;
    messages: ComputedRef<    {
    id: string;
    content: string;
    role: "user" | "assistant";
    created_at: string;
    response_time?: number | undefined;
    }[]>;
    visemes: ComputedRef<    {
    time: number;
    viseme: number;
    duration: number;
    }[]>;
    gestures: ComputedRef<    {
    time: number;
    type: LiyaAiEnvVuejsGestureType;
    intensity: number;
    duration: number;
    }[]>;
    audioTime: ComputedRef<number>;
    currentPresentation: ComputedRef<    {
    success: boolean;
    action: string;
    presentation_id: string;
    presentation_title: string;
    page_number: number;
    page_title: string;
    page_image_url: string | null;
    total_pages: number;
    reason: string;
    } | null>;
    lastApiErrorCode: ComputedRef<string | null>;
    clearApiError: () => void;
    open: () => void;
    close: () => void;
    setLoading: (loading: boolean) => void;
    setReady: (ready: boolean) => void;
    setLoadProgress: (progress: number) => void;
    setError: (errorMessage: string | null) => void;
    handleMessage: (message: string) => Promise<void>;
    speakWithAvatar: (text: string) => Promise<void>;
    stopAudio: () => void;
    setListening: (listening: boolean) => void;
    addWelcomeMessage: (welcomeText: string) => void;
    updateWelcomeMessage: (newText: string) => void;
    setPresentation: (presentation: LiyaAiEnvVuejsPresentationResult | null) => void;
    cleanup: () => void;
};

export declare function useLiyaAiEnvVuejsGestures(): {
    currentGesture: ComputedRef<LiyaAiEnvVuejsGestureType>;
    gestureIntensity: ComputedRef<number>;
    gestureProgress: ComputedRef<number>;
    isAnimating: ComputedRef<boolean>;
    triggerGesture: (type: LiyaAiEnvVuejsGestureType, intensity?: number) => void;
    setGesturesFromApi: (gestures: LiyaAiEnvVuejsGesture[]) => void;
    getCurrentKeyframe: () => LiyaAiEnvVuejsGestureKeyframe;
    stopGestures: () => void;
};

export declare function useLiyaAiEnvVuejsI18n(): {
    locale: Readonly<Ref<LiyaAiEnvVuejsSupportedLocale, LiyaAiEnvVuejsSupportedLocale>>;
    t: ComputedRef<LiyaAiEnvVuejsTranslations>;
    setLocale: (newLocale: string) => void;
    initLocale: (configLocale?: string) => void;
    liyaAiEnvVuejsIsSupportedLocale: typeof liyaAiEnvVuejsIsSupportedLocale;
};

export declare function useLiyaAiEnvVuejsVoice(): {
    isRecording: ComputedRef<boolean>;
    transcript: ComputedRef<string>;
    isSupported: ComputedRef<boolean>;
    isIOS: ComputedRef<boolean>;
    micPermission: ComputedRef<"prompt" | "granted" | "denied">;
    startRecording: () => void;
    stopRecording: () => void;
    setLanguage: (lang: string) => void;
    checkMicPermission: () => Promise<"prompt" | "granted" | "denied">;
    requestMicPermission: () => Promise<boolean>;
    cleanup: () => void;
};

export { }


declare module '@vue/runtime-core' {
    interface ComponentCustomProperties {
        $liyaAiEnvVuejs: {
            config: LiyaAiEnvVuejsConfig;
        };
    }
}
