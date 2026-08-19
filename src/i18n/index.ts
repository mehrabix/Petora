import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import { translations } from './translations';

const resources = Object.fromEntries(
  Object.entries(translations).map(([language, namespace]) => [
    language,
    { translation: namespace },
  ])
);

i18n.use(initReactI18next).init({
  resources,
  lng: 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
  react: {
    useSuspense: false,
  },
});

export default i18n;
