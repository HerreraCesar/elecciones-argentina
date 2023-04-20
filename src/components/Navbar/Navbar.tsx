import styles from "./Navbar.module.scss";
import { t } from "~/helpers/translate";
import { useApplicationContext } from "~/context/context";
import { A } from "solid-start";
import { FaSolidPlus } from "solid-icons/fa";
import { createSignal } from "solid-js";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = createSignal(false);
  const store = useApplicationContext();
  const [theme, { changeTheme }] = store.theme;
  const [language, { changeLanguage }] = store.language;

  return (
    <header class={styles.header}>
      <nav class={styles.navbar}>
        <ul>
          <li>
            <A href="/home" class={styles.link} activeClass={styles.active}>
              {t("logo")}
            </A>
          </li>
          <li>
            <A href="/timeline" class={styles.link} activeClass={styles.active}>
              {t("timeline")}
            </A>
          </li>
        </ul>
      </nav>
      <div class={styles.button} onClick={() => setMenuOpen(!menuOpen())}>
        <FaSolidPlus />
        <div class={`${styles.square} ${menuOpen() && styles.open}`}>
          <div class={styles.one}></div>
          <div class={styles.two}></div>
          <div class={styles.three}></div>
          <div class={styles.four}></div>
          <div class={styles.five}></div>
          <div class={styles.six}></div>
          <div class={styles.seven}></div>
          <div class={styles.eight}></div>
          <div class={styles.nine}></div>
        </div>
        {/* <button onClick={() => changeLanguage("es")}>ES</button>
        <button onClick={() => changeLanguage("en")}>EN</button>
        <button onClick={() => changeTheme("dark")}>dark</button>
        <button onClick={() => changeTheme("light")}>light</button> */}
      </div>
    </header>
  );
}
