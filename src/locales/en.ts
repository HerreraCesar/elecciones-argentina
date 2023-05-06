import { language } from '~/interfaces/language';

const navbar = {
  home: 'Home',
  timeline: 'Timeline',
  contact: 'Contact',
  logo: 'Argentine Elections',
  spanish: 'Spanish',
  english: 'English',
  dark: 'Dark',
  light: 'Light',
};

const home = {
  coming_soon: 'Site under construction',
  contact_link: 'Talk to support',
};

const footer = {
  author: 'Website made by',
};

const timeline = {
  functionality_soon: 'Functionality in construction, try again later',
  timeline_title: 'Electoral schedule',
  source: 'Source:',
};

const contact = {
  title: 'Do you have a question or suggestion?',
  contact_us: 'Contact us',
  copied_mail: 'E-mail copied to clipboard',
};

const en: language = {
  ...navbar,
  ...home,
  ...timeline,
  ...footer,
  ...contact,
};

export default en;
