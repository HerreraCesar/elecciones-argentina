import { language } from "~/interfaces/language";

const navbar = {
  home: "Home",
  timeline: "Timeline",
  logo: "Argentine Elections",
};

const home = {
  coming_soon: "Site under construction",
};

const timeline = {};

const en: language = {
  ...navbar,
  ...home,
  ...timeline,
};

export default en;
