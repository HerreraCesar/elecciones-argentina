import { A } from 'solid-start';
import { FaSolidCircleChevronUp } from 'solid-icons/fa';
import { IoToday } from 'solid-icons/io';
import styles from './Sidebar.module.scss';
import { t } from '~/helpers/translate';
import { useApplicationContext } from '~/context/context';

export default function Sidebar() {
  const store = useApplicationContext();
  const [theme, { changeTheme }] = store.theme;
  const [language, { changeLanguage }] = store.language;

  return (
    <div class={styles.container}>
      <button>
        <FaSolidCircleChevronUp />
      </button>
      <button>
        <IoToday />
      </button>
      <button>
        <FaSolidCircleChevronUp />
      </button>
    </div>
  );
}
