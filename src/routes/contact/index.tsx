import { FaSolidCopy } from 'solid-icons/fa';
import Footer from '~/components/Footer/Footer';
import Layout from '~/components/Layout/Layout';
import Soon from '~/components/Soon/Soon';
import { personal_data } from '~/config';
import styles from './index.module.scss';
import { t } from '~/helpers/translate';
import toast from 'solid-toast';

export default function Contact() {
  return (
    <Layout>
      <div class={styles.card}>
        <h1 class={styles.title}>
          {t('title')}
          <strong>{t('contact_us')}</strong>
        </h1>
        <div
          class={styles.email}
          onClick={() => {
            navigator.clipboard.writeText(personal_data.email);
            toast.success(() => t('copied_mail'));
          }}
        >
          <h2>{personal_data.email}</h2>
          <div class={styles.copy}>
            <FaSolidCopy />
          </div>
        </div>
      </div>
      <Footer />
    </Layout>
  );
}
