import * as RNLocalize from 'react-native-localize';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import id from './languages/id.json';
import en from './languages/en.json';

const translations = ['en', ' id'];
const resources = {
  en: {
    translation: en,
  },
  id: {
    translation: id,
  },
};

const { languageTag } = RNLocalize.findBestAvailableLanguage(translations) || {
  languageTag: 'en',
};

i18n.use(initReactI18next).init({
  resources,
  lng: languageTag,
  fallbackLng: 'en',
});

export default function translate(name: string, params = {}) {
  return i18n.t(name, params);
}
