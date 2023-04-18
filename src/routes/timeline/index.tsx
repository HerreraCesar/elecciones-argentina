import Footer from '~/components/Footer/Footer';
import Navbar from '~/components/Navbar/Navbar';
import styles from './index.module.scss';
import { useTransContext } from '@mbarzda/solid-i18next';

export default function Timeline() {
  const [t] = useTransContext();
  return (
    <>
      <Navbar />
      <main>
        <section>
          <p>{t('coming_soon')}</p>
        </section>
      </main>
      <Footer />
    </>
  );
}
