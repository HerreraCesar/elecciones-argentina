import { createSignal } from 'solid-js';
import styles from './Navbar.module.scss';

export default function Navbar() {
  const [count, setCount] = createSignal(0);
  return <nav></nav>;
}
