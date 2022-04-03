import i18n, { t } from "i18next";
import { initReactI18next } from "react-i18next";
import { messages } from "./languages"

i18n
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: 'pt',
    interpolation: {
      escapeValue: false,
    },
    ns: ['translation'],
    resources: messages,
    parseMissingKeyHandler: (key) => { 
      return i18n.t("ERROR.MISSING_KEY") + key
    }
  });


export default i18n;

export const translate = (key: string) => {
  key = key.replace(" ", "").toUpperCase();
  return i18n.t(key)
}
