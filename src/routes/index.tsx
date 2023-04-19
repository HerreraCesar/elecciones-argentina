import toast, { Toaster } from 'solid-toast';

import Layout from '~/components/Layout/Layout';
import Loader from '~/components/Loader/Loader';
import styles from './index.module.scss';
import { t } from '~/helpers/translate';
import { useApplicationContext } from '~/context/context';

const notify = () => toast.success('Here is your toast.');

export default function Home() {
  return (
    <Layout>
      <Loader />
      <section>
        <div class={styles.background}>
          <div class={styles.card}>
            <h1 class={styles.title}>{t('coming_soon')}</h1>
            <button onClick={notify}>Make me a toast</button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
