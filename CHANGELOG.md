# Changelog

## [0.0.3] - 2025-02-24

### Fixed
- Voice transcript not being sent to chat — fixed timing issue where `stopRecording()` set `isRecording=false` before `onresult` fired
- Reload/Cancel buttons not clickable — fixed z-index overlap with controls container
- Safari/iOS SpeechRecognition support — removed iOS guard, allow API if available (iPadOS 16+, macOS Ventura+)
- Microphone permission request now works independently of SpeechRecognition support

## [0.0.2] - 2025-02-20

### Added
- Initial public release
- `LiyaAiEnvVuejsEnvironmentModal` - Full-screen environment modal with 3D avatar
- `LiyaAiEnvVuejsEnvironmentStandalone` - Standalone environment component
- Voice input/output with speech recognition
- Liquid glass UI theme
- Multi-language support (English, Turkish)
