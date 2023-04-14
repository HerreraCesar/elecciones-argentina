import { Trans, useTransContext } from "@mbarzda/solid-i18next";
import styles from "./index.module.scss";

export default function Home() {
  const [t, actions] = useTransContext();
  return (
    <main>
      <div class={styles.background}>
        <div class={styles.card}>
          <h1 class={styles.title}>{t("coming_soon")}</h1>
          <button onClick={() => actions.changeLanguage("es")}>ES</button>
          <button onClick={() => actions.changeLanguage("en")}>EN</button>
        </div>
      </div>
    </main>
  );
}
