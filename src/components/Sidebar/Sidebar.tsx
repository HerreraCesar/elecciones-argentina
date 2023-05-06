import { A } from 'solid-start';
import { FaSolidCircleChevronUp } from 'solid-icons/fa';
import { IoToday } from 'solid-icons/io';
import styles from './Sidebar.module.scss';
import { t } from '~/helpers/translate';
import toast from 'solid-toast';
import { useApplicationContext } from '~/context/context';

export default function Sidebar() {
  const store = useApplicationContext();
  const [theme, { changeTheme }] = store.theme;
  const [language, { changeLanguage }] = store.language;

  return (
    <div class={styles.container}>
      <button onClick={() => toast(() => t('functionality_soon'))}>
        <FaSolidCircleChevronUp />
      </button>
      <button onClick={() => toast(() => t('functionality_soon'))}>
        <IoToday />
      </button>
      <button onClick={() => toast(() => t('functionality_soon'))}>
        <FaSolidCircleChevronUp />
      </button>
    </div>
  );
}
