import { createSignal } from 'solid-js';
import styles from './Loader.module.scss';

export default function Loader() {
  const [count, setCount] = createSignal(0);
  return (
    <div class={styles.background}>
      <div class={styles.container}></div>
      <div class={styles.loader}></div>
    </div>
  );
}
