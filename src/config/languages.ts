import { Language } from "@/types/language";

/**
 * Supported languages configuration
 */
export const SUPPORTED_LANGUAGES: readonly Language[] = [
  {
    code: "en",
    name: "English",
    flag: "🇺🇸",
    displayName: "ENG",
  },
  {
    code: "es",
    name: "Español",
    flag: "🇻🇪",
    displayName: "ESP",
  },
] as const;

/**
 * Default application language
 */
export const DEFAULT_LANGUAGE = SUPPORTED_LANGUAGES[0];
