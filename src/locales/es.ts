import { language } from "~/interfaces/language";

const navbar = {
  home: "Inicio",
  timeline: "Línea de tiempo",
};

const home = {
  coming_soon: "Sitio en construcción",
};

const timeline = {};

const es: language = {
  ...navbar,
  ...home,
  ...timeline,
};

export default es;
