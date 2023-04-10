import { Text } from "solid-i18n";
import styles from "./index.module.scss";

export default function Home() {
  return (
    <main>
      <div class={styles.background}>
        <div class={styles.card}>
          <h1 class={styles.title}>
            <Text message="coming_soon" />
          </h1>
        </div>
      </div>
    </main>
  );
}
