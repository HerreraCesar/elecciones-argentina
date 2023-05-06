import { language } from '~/interfaces/language';

const navbar = {
  home: 'Inicio',
  timeline: 'Cronograma',
  contact: 'Contacto',
  logo: 'Elecciones Argentina',
  spanish: 'Español',
  english: 'Ingles',
  dark: 'Oscuro',
  light: 'Claro',
};

const home = {
  coming_soon: 'Sitio en construcción',
  contact_link: 'Hablar con soporte',
};

const footer = {
  author: 'Sitio web realizado por',
};

const timeline = {
  functionality_soon:
    'Funcionalidad en construcción, vuelve a intentarlo más tarde',
  timeline_title: 'Calendario electoral',
  source: 'Fuente:',
};

const contact = {
  title: '¿Tienes alguna pregunta o sugerencia?',
  contact_us: 'Contáctanos',
  copied_mail: 'Correo electrónico copiado al portapapeles',
};

const es: language = {
  ...navbar,
  ...home,
  ...timeline,
  ...footer,
  ...contact,
};

export default es;
