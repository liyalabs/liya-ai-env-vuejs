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
// Liya AI Environment - Internationalization Translations

export type LiyaAiEnvVuejsSupportedLocale = 'tr' | 'en'

export interface LiyaAiEnvVuejsTranslations {
  // Status
  status: {
    ready: string
    listening: string
    preparing: string
    speaking: string
    online: string
  }
  // Browser compatibility
  browser: {
    unsupportedTitle: string
    unsupportedMessage: string
    webglRequired: string
    recommendedBrowsers: string
    closeButton: string
  }
  // Microphone permission
  mic: {
    permissionRequired: string
    permissionMessage: string
    allowButton: string
    denied: string
  }
  // Preparing rotating messages
  preparingMessages: string[]
  // Chat
  chat: {
    placeholder: string
    premiumRequired: string
    userRole: string
    emptyWelcome: string
  }
  // Welcome suggestions
  welcomeSuggestions: string[]
  // Voice
  voice: {
    startRecording: string
    stopRecording: string
    listening: string
    thinking: string
    pressToSpeak: string
    notSupported: string
  }
  // Controls
  controls: {
    close: string
    back: string
    cancel: string
    replay: string
    pressAndSpeak: string
  }
  // Patience tooltips (shown when user clicks too fast)
  patienceTooltips: string[]
  // Premium overlay
  premium: {
    title: string
    upgradePremium: string
    upgradePremiumPlus: string
    viewPlans: string
  }
  // Errors
  errors: {
    problemOccurred: string
    tryAgainLater: string
    connectionError: string
    sendError: string
  }
  // Branding
  branding: {
    environmentTitle: string
  }
  // Settings
  settings: {
    title: string
    outfitColors: string
    top: string
    bottom: string
    footwear: string
    presets: string
    customColor: string
    reset: string
  }
}

export const liyaAiEnvVuejsTranslations: Record<LiyaAiEnvVuejsSupportedLocale, LiyaAiEnvVuejsTranslations> = {
  tr: {
    status: {
      ready: 'Hazır',
      listening: 'Dinliyorum...',
      preparing: 'Hazırlanıyor...',
      speaking: 'Konuşuyor...',
      online: 'Çevrimiçi',
    },
    browser: {
      unsupportedTitle: 'Tarayıcı Desteklenmiyor',
      unsupportedMessage: 'Bu ortam tarayıcınızda çalışmıyor. 3D sahne için WebGL desteği gereklidir.',
      webglRequired: 'WebGL desteği gerekli',
      recommendedBrowsers: 'Önerilen: Chrome, Edge, Firefox, Safari',
      closeButton: 'Kapat',
    },
    mic: {
      permissionRequired: 'Mikrofon İzni Gerekli',
      permissionMessage: 'Sesli iletişim için mikrofon erişimine izin verin.',
      allowButton: 'İzin Ver',
      denied: 'Mikrofon izni reddedildi',
    },
    preparingMessages: [
      'Hazırlanıyor...',
      'Düşünüyorum... 🤔',
      'Biraz daha bekleyin...',
      'Cevabı hazırlıyorum... ✍️',
      'Neredeyse bitti... ⏳',
      'Az kaldı, sabırlı olun... 😊',
      'Detaylı bir cevap geliyor...',
      'Hâlâ düşünüyorum... 🧠',
      'Bu güzel bir soru, biraz zaman alıyor...',
      'Son rötuşlar... ✨',
    ],
    chat: {
      placeholder: 'Mesajınızı yazın...',
      premiumRequired: 'Premium abonelik gerekli',
      userRole: 'Sen',
      emptyWelcome: 'Merhaba! Size nasıl yardımcı olabilirim?',
    },
    welcomeSuggestions: [
      'Kendini tanıt',
      'Konu hakkında özet bilgi ver',
      'Derse başla',
      'Bir sonraki slayta geç',
      'Bir önceki slayta geç',
    ],
    voice: {
      startRecording: 'Konuşmaya başla',
      stopRecording: 'Dinlemeyi durdur',
      listening: 'Dinliyorum...',
      thinking: 'Düşünüyorum...',
      pressToSpeak: 'Konuşmak için mikrofona basın',
      notSupported: 'Ses tanıma bu tarayıcıda desteklenmiyor',
    },
    controls: {
      close: 'Kapat',
      back: 'Geri',
      cancel: 'İptal',
      replay: 'Tekrar Oynat',
      pressAndSpeak: 'Bas ve Konuş',
    },
    patienceTooltips: [
      'Sakin ol, çay demle ☕',
      'Acele işe şeytan karışır! 😈',
      'Biraz sabır, güzel şeyler geliyor... ✨',
      'Yavaş yavaş, torba dolacak 🐢',
      'Beklemek de bir sanattır 🎨',
      'Nefes al, ver... 🧘',
      'Roma bir günde kurulmadı! 🏛️',
      'Sabır acıdır, meyvesi tatlıdır 🍎',
    ],
    premium: {
      title: 'Premium Özellik',
      upgradePremium: 'Bu özelliği kullanmak için Premium veya Premium Plus abonelik gereklidir.',
      upgradePremiumPlus: 'Bu özelliği kullanmak için Premium Plus abonelik gereklidir.',
      viewPlans: 'Planları İncele',
    },
    errors: {
      problemOccurred: 'Bir sorun oluştu',
      tryAgainLater: 'En kısa zamanda çözülecektir. Lütfen daha sonra tekrar deneyin.',
      connectionError: 'Bağlantı hatası oluştu',
      sendError: 'Mesaj gönderilemedi',
    },
    branding: {
      environmentTitle: 'Liya AI Environment',
    },
    settings: {
      title: 'Ayarlar',
      outfitColors: 'Kıyafet Renkleri',
      top: 'Üst',
      bottom: 'Alt',
      footwear: 'Ayakkabı',
      presets: 'Hazır Renkler',
      customColor: 'Özel Renk',
      reset: 'Sıfırla',
    },
  },
  en: {
    status: {
      ready: 'Ready',
      listening: 'Listening...',
      preparing: 'Preparing...',
      speaking: 'Speaking...',
      online: 'Online',
    },
    browser: {
      unsupportedTitle: 'Browser Not Supported',
      unsupportedMessage: 'This environment does not work in your browser. WebGL support is required for 3D scene.',
      webglRequired: 'WebGL support required',
      recommendedBrowsers: 'Recommended: Chrome, Edge, Firefox, Safari',
      closeButton: 'Close',
    },
    mic: {
      permissionRequired: 'Microphone Permission Required',
      permissionMessage: 'Allow microphone access for voice communication.',
      allowButton: 'Allow',
      denied: 'Microphone permission denied',
    },
    preparingMessages: [
      'Preparing...',
      'Thinking... 🤔',
      'Hold on a moment...',
      'Preparing the answer... ✍️',
      'Almost done... ⏳',
      'Just a bit more, please be patient... 😊',
      'A detailed answer is coming...',
      'Still thinking... 🧠',
      'Great question, it takes a moment...',
      'Final touches... ✨',
    ],
    chat: {
      placeholder: 'Type your message...',
      premiumRequired: 'Premium subscription required',
      userRole: 'You',
      emptyWelcome: 'Hello! How can I help you?',
    },
    welcomeSuggestions: [
      'Introduce yourself',
      'Give a summary about the topic',
      'Start the lesson',
      'Go to next slide',
      'Go to previous slide',
    ],
    voice: {
      startRecording: 'Start speaking',
      stopRecording: 'Stop listening',
      listening: 'Listening...',
      thinking: 'Thinking...',
      pressToSpeak: 'Press the microphone to speak',
      notSupported: 'Voice recognition is not supported in this browser',
    },
    controls: {
      close: 'Close',
      back: 'Back',
      cancel: 'Cancel',
      replay: 'Replay',
      pressAndSpeak: 'Press & Speak',
    },
    patienceTooltips: [
      'Easy there, tiger! 🐯',
      'Patience, young padawan... ✨',
      'Good things come to those who wait ⏳',
      'Take a deep breath... 🧘',
      'Rome wasn\'t built in a day! 🏛️',
      'Slow and steady wins the race 🐢',
      'Chill out, grab a coffee ☕',
      'The best things in life are worth waiting for 🌟',
    ],
    premium: {
      title: 'Premium Feature',
      upgradePremium: 'A Premium or Premium Plus subscription is required to use this feature.',
      upgradePremiumPlus: 'A Premium Plus subscription is required to use this feature.',
      viewPlans: 'View Plans',
    },
    errors: {
      problemOccurred: 'A problem occurred',
      tryAgainLater: 'It will be resolved as soon as possible. Please try again later.',
      connectionError: 'Connection error occurred',
      sendError: 'Failed to send message',
    },
    branding: {
      environmentTitle: 'Liya AI Environment',
    },
    settings: {
      title: 'Settings',
      outfitColors: 'Outfit Colors',
      top: 'Top',
      bottom: 'Bottom',
      footwear: 'Footwear',
      presets: 'Presets',
      customColor: 'Custom Color',
      reset: 'Reset',
    },
  },
}

export function liyaAiEnvVuejsIsSupportedLocale(locale: string): locale is LiyaAiEnvVuejsSupportedLocale {
  return locale === 'tr' || locale === 'en'
}

export function liyaAiEnvVuejsDetectBrowserLocale(): LiyaAiEnvVuejsSupportedLocale {
  if (typeof window === 'undefined' || typeof navigator === 'undefined') {
    return 'tr'
  }

  const browserLang = navigator.language || (navigator as { userLanguage?: string }).userLanguage || ''
  const langCode = browserLang.split('-')[0].toLowerCase()

  if (liyaAiEnvVuejsIsSupportedLocale(langCode)) {
    return langCode
  }

  return 'tr'
}
