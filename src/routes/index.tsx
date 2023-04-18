import styles from "./index.module.scss";
import { t } from "~/helpers/translate";
import { useApplicationContext } from "~/context/context";
import Layout from "~/components/Layout/Layout";

export default function Home() {
  return (
    <Layout>
      <section>
        <div class={styles.background}>
          <div class={styles.card}>
            <h1 class={styles.title}>{t("coming_soon")}</h1>
          </div>
        </div>
      </section>
    </Layout>
  );
}
