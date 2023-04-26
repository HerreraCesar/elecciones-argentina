import { A } from "solid-start";
import { FaSolidPlus } from "solid-icons/fa";
import { createEffect, createSignal } from "solid-js";
import styles from "./Navbar.module.scss";
import { t } from "~/helpers/translate";
import { useApplicationContext } from "~/context/context";
import { Body } from "solid-start";
import solid from "solid-start";

export default function Navbar() {
  const store = useApplicationContext();
  const [menuOpen, { setMenuOpen }] = store.menuOpen;
  const [theme, { changeTheme }] = store.theme;
  const [language, { changeLanguage }] = store.language;

  createEffect(() => {
    const body = document.getElementById("body");
    if (body) {
      if (menuOpen()) {
        body.style.overflowY = "hidden";
      } else {
        body.style.overflowY = "scroll";
      }
    }
  });

  return (
    <>
      <header class={styles.header}>
        <nav class={styles.navbar}>
          <ul>
            <li>
              <A href="/home" class={styles.link} activeClass={styles.active}>
                {t("logo")}
              </A>
            </li>
            <li>
              <A
                href="/timeline"
                class={styles.link}
                activeClass={styles.active}
              >
                {t("timeline")}
              </A>
            </li>
          </ul>
        </nav>
        <div class={`${menuOpen() ? styles.touched_button : styles.button}`}>
          <FaSolidPlus onClick={() => setMenuOpen(!menuOpen())} />
          <div class={`${menuOpen() ? styles.open_menu : styles.close_menu}`}>
            <div class={styles.card}>
              <button onClick={() => changeLanguage("es")}>ES</button>
              <button onClick={() => changeLanguage("en")}>EN</button>
            </div>
            <div class={styles.card}>
              <button onClick={() => changeTheme("dark")}>dark</button>
              <button onClick={() => changeTheme("light")}>light</button>
            </div>
          </div>
        </div>
      </header>
      <div
        class={`${menuOpen() ? styles.overlay : styles.close_overlay}`}
        onClick={() => setMenuOpen(!menuOpen())}
      />
    </>
  );
}
