import { A } from "solid-start";
import Footer from "~/components/Footer/Footer";
import Layout from "~/components/Layout/Layout";
import Line from "~/components/Line/Line";
import { Show } from "solid-js";
import Sidebar from "~/components/Sidebar/Sidebar";
import Soon from "~/components/Soon/Soon";
import styles from "./index.module.scss";
import { t } from "~/helpers/translate";
import { useApplicationContext } from "~/context/context";
import { calculateDays } from "~/helpers/calculateDays";

export default function Timeline() {
  const store = useApplicationContext();
  const [showAccesories] = store.showAccesories;

  const initialDate = new Date(2023, 3, 23);
  const finalDate = new Date(2024, 1, 1);
  const today = new Date(Date.now());
  const totalDays = calculateDays(initialDate, finalDate);
  const pastDays = calculateDays(initialDate, today);

  return (
    <Layout>
      <Show when={showAccesories()}>
        <Sidebar />
      </Show>
      <section class={styles.section}>
        <h1 class={styles.title}>{t("timeline_title")}</h1>
        <span class={styles.date}>{initialDate.toLocaleDateString()}</span>
        <Line
          today={today}
          total={totalDays}
          progress={pastDays}
          initial={initialDate}
        />
        <span class={styles.date}>{finalDate.toLocaleDateString()}</span>
        <span class={styles.source}>
          {t("source")}
          <a
            target="_blank"
            href="https://www.electoral.gob.ar/nuevo/paginas/pdf/Cronograma%202023.pdf"
          >
            https://www.electoral.gob.ar/nuevo/paginas/pdf/Cronograma%202023.pdf
          </a>
        </span>
      </section>
      <Footer />
    </Layout>
  );
}
