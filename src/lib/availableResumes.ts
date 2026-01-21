/**
 * List of locales that have resume files available
 * Update this when adding/removing resume files
 */
export const AVAILABLE_RESUME_LOCALES = ['en', 'ja', 'nl'] as const;

export type AvailableLocale = typeof AVAILABLE_RESUME_LOCALES[number];

export function isResumeAvailable(locale: string): locale is AvailableLocale {
  return AVAILABLE_RESUME_LOCALES.includes(locale as AvailableLocale);
}