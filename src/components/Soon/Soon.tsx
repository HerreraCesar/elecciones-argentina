import { createEffect } from "solid-js";
import styles from "./Soon.module.scss";
import { A } from "solid-start";
import { t } from "~/helpers/translate";

export default function Soon() {
  createEffect(() => {
    const vh = window.innerHeight;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  });
  return (
    <section class={styles.section}>
      <div class={styles.card}>
        <h1 class={styles.title}>{t("coming_soon")}</h1>
        <A class={styles.link} href="/contact">
          {t("contact_link")}
        </A>
      </div>
    </section>
  );
}
