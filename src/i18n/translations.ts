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
  }
  // Controls
  controls: {
    close: string
    back: string
    cancel: string
    replay: string
    pressAndSpeak: string
  }
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
    ],
    voice: {
      startRecording: 'Konuşmaya başla',
      stopRecording: 'Dinlemeyi durdur',
      listening: 'Dinliyorum...',
      thinking: 'Düşünüyorum...',
      pressToSpeak: 'Konuşmak için mikrofona basın',
    },
    controls: {
      close: 'Kapat',
      back: 'Geri',
      cancel: 'İptal',
      replay: 'Tekrar Oynat',
      pressAndSpeak: 'Bas ve Konuş',
    },
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
  },
  en: {
    status: {
      ready: 'Ready',
      listening: 'Listening...',
      preparing: 'Preparing...',
      speaking: 'Speaking...',
      online: 'Online',
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
    ],
    voice: {
      startRecording: 'Start speaking',
      stopRecording: 'Stop listening',
      listening: 'Listening...',
      thinking: 'Thinking...',
      pressToSpeak: 'Press the microphone to speak',
    },
    controls: {
      close: 'Close',
      back: 'Back',
      cancel: 'Cancel',
      replay: 'Replay',
      pressAndSpeak: 'Press & Speak',
    },
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
