import en from '~/locales/en';
import es from '~/locales/es';
import { useApplicationContext } from '~/context/context';

export const t = (key: string) => {
  const store = useApplicationContext();
  const [language] = store.language;

  switch (language()) {
    case 'en':
      return en[key];
    default:
      return es[key];
  }
};
