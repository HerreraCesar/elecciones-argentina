import { FaSolidCircleArrowUp } from 'solid-icons/fa';
import { createEffect } from 'solid-js';
import styles from './ToTop.module.scss';

export default function ToTop() {
  return (
    <div class={styles.container}>
      <button class={styles.button} onClick={() => window.scrollTo(0, 0)}>
        <FaSolidCircleArrowUp color={'var(--text)'} />
      </button>
    </div>
  );
}
