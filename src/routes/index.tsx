import { Trans, useTransContext } from '@mbarzda/solid-i18next';

import { createEffect } from 'solid-js';
import styles from './index.module.scss';
import { t } from '~/helpers/translate';
import { useApplicationContext } from '~/context/context';

export default function Home() {
  /* const [t, actions] = useTransContext(); */
  const store = useApplicationContext();
  const [theme, { changeTheme }] = store.theme;
  const [_, { changeLanguage }] = store.language;
  createEffect(() => {
    console.log(theme());
  });
  return (
    <main class={theme() === 'dark' ? 'dark-mode' : 'light-mode'}>
      <div class={styles.background}>
        <div class={styles.card}>
          <h1 class={styles.title}>{t('coming_soon')}</h1>
          <button onClick={() => changeLanguage('es')}>ES</button>
          <button onClick={() => changeLanguage('en')}>EN</button>
          <button onClick={() => changeTheme('dark')}>dark</button>
          <button onClick={() => changeTheme('light')}>light</button>
        </div>
      </div>
    </main>
  );
}
