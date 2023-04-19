import Footer from '../Footer/Footer';
import { JSXElement } from 'solid-js';
import Navbar from '../Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar';
import ToTop from '../ToTop/ToTop';
import { Toaster } from 'solid-toast';
import styles from './Layout.module.scss';
import { useApplicationContext } from '~/context/context';

interface SectionProps {
  children: JSXElement;
}

export default function Layout({ children }: SectionProps) {
  const store = useApplicationContext();
  const [theme] = store.theme;

  return (
    <div
      class={`${theme() === 'dark' ? 'dark-mode' : 'light-mode'} ${
        styles.layout
      }`}
    >
      <Navbar />
      <ToTop />
      <Sidebar />
      <main class={styles.main}>{children}</main>
      <Footer />
      <Toaster position="bottom-center" />
    </div>
  );
}
