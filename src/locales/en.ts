import { I18nLocales } from "i18n-mini/lib/types";

const home: I18nLocales = {
  coming_soon: "Site under construction",
};

const timeline: I18nLocales = {};

const en: I18nLocales = {
  ...home,
  ...timeline,
};

export default en;
