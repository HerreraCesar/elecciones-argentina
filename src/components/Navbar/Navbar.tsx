import styles from "./Navbar.module.scss";
import { t } from "~/helpers/translate";
import { useApplicationContext } from "~/context/context";
import { A } from "solid-start";

export default function Navbar() {
  const store = useApplicationContext();
  const [theme, { changeTheme }] = store.theme;
  const [language, { changeLanguage }] = store.language;

  return (
    <header class={styles.header}>
      <div class={styles.logo}>
        <span>ELEGIR</span>
      </div>
      <nav class={styles.navbar}>
        <ul>
          <li>
            <A href="/">{t("home")}</A>
          </li>
          <li>
            <A href="/timeline">{t("timeline")}</A>
          </li>
        </ul>
      </nav>
      <div class={styles.buttons}>
        <button onClick={() => changeLanguage("es")}>ES</button>
        <button onClick={() => changeLanguage("en")}>EN</button>
        <button onClick={() => changeTheme("dark")}>dark</button>
        <button onClick={() => changeTheme("light")}>light</button>
      </div>
    </header>
  );
}
