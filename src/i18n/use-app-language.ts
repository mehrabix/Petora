import { useTranslation } from 'react-i18next';

import type { LanguageCode } from './translations';

const RTL_LANGUAGES: readonly LanguageCode[] = ['fa', 'ar'];

export const languageOptions: { code: LanguageCode; name: string; rtl: boolean }[] = [
  { code: 'en', name: 'English', rtl: false },
  { code: 'fa', name: 'فارسی', rtl: true },
  { code: 'ar', name: 'العربية', rtl: true },
  { code: 'fr', name: 'Français', rtl: false },
  { code: 'es', name: 'Español', rtl: false },
  { code: 'de', name: 'Deutsch', rtl: false },
  { code: 'tr', name: 'Türkçe', rtl: false },
  { code: 'ru', name: 'Русский', rtl: false },
  { code: 'zh', name: '中文', rtl: false },
];

export function isRtlLanguage(language: string): boolean {
  return RTL_LANGUAGES.includes(language as LanguageCode);
}

export function useAppLanguage() {
  const { i18n } = useTranslation();
  const current = (i18n.language.split('-')[0] as LanguageCode) || 'en';
  const isRTL = isRtlLanguage(current);

  const changeLanguage = (language: LanguageCode) => {
    i18n.changeLanguage(language);
  };

  return {
    language: current,
    isRTL,
    changeLanguage,
  };
}
