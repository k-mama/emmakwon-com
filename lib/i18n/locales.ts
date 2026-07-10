export const locales = [
  "en",
  "en-GB",
  "ko",
  "ja",
  "zh-TW",
  "zh-CN",
  "es",
  "es-CO",
  "pt-BR",
] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

export function generateLocaleStaticParams(): { locale: Locale }[] {
  return locales.map((locale) => ({ locale }));
}

// English display labels shown in the language switcher, regardless of the
// active locale — per site content spec, these are not translated.
export const localeLabels: Record<Locale, string> = {
  en: "English",
  "en-GB": "English · UK",
  ko: "Korean",
  ja: "Japanese",
  "zh-TW": "Traditional Chinese",
  "zh-CN": "Simplified Chinese",
  es: "Spanish",
  "es-CO": "Spanish · Colombia",
  "pt-BR": "Portuguese · Brazil",
};

// Open Graph locale tokens use the underscore region format (e.g. en_US).
export const localeOgLocale: Record<Locale, string> = {
  en: "en_US",
  "en-GB": "en_GB",
  ko: "ko_KR",
  ja: "ja_JP",
  "zh-TW": "zh_TW",
  "zh-CN": "zh_CN",
  es: "es_ES",
  "es-CO": "es_CO",
  "pt-BR": "pt_BR",
};
