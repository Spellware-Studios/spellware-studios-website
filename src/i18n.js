import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import locale_en from "../locales/locale_en.json";
import locale_nl from "../locales/locale_nl.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translations: locale_en },
      nl: { translations: locale_nl },
    },
    fallbackLng: "en",
    lng: "en",
    debug: false,

    // have a common namespace used around the full app
    ns: ["translations"],
    defaultNS: "translations",

    keySeparator: false, // we use content as keys

    interpolation: {
      escapeValue: false, // not needed for react
      formatSeparator: ",",
    },

    react: {
      wait: true,
    },
  });

export default i18n;
