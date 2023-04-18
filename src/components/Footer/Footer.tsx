import { createSignal } from 'solid-js';
import styles from './Footer.module.scss';

export default function Footer() {
  const [count, setCount] = createSignal(0);
  return <footer></footer>;
}
