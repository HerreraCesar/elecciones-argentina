import { A } from "solid-start";
import { FaSolidPlus } from "solid-icons/fa";
import { createEffect, createSignal } from "solid-js";
import styles from "./Navbar.module.scss";
import { t } from "~/helpers/translate";
import { useApplicationContext } from "~/context/context";
import { FaSolidArrowRightLong } from "solid-icons/fa";

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
                noScroll
              >
                {t("timeline")}
              </A>
            </li>
          </ul>
        </nav>
        <div
          class={`${menuOpen() ? styles.touched_button : styles.button}`}
          onClick={() => setMenuOpen(!menuOpen())}
        >
          <FaSolidPlus class={styles.icon} />
        </div>
        <div class={`${menuOpen() && styles.open} ${styles.menu}`}>
          <div class={styles.card}>
            <A
              href="/timeline"
              class={styles.link}
              onClick={() => setMenuOpen(!menuOpen())}
            >
              <span>
                {t("timeline")} <FaSolidArrowRightLong />
              </span>
            </A>
          </div>
          <div class={styles.card}>
            <span>{t("spanish")}</span>
            <label class={styles.switch}>
              <input
                class={styles.input}
                type="checkbox"
                checked={language() === "en" && true}
                onclick={() =>
                  changeLanguage(language() === "es" ? "en" : "es")
                }
              />
              <div class={styles.slider} />
            </label>
            <span>{t("english")}</span>
          </div>
          <div class={styles.card}>
            <span>{t("dark")}</span>
            <label class={styles.switch}>
              <input
                class={styles.input}
                type="checkbox"
                checked={theme() === "light" && true}
                onclick={() =>
                  changeTheme(theme() === "dark" ? "light" : "dark")
                }
              />
              <div class={styles.slider} />
            </label>
            <span>{t("light")}</span>
          </div>
          <div class={styles.card}>
            <A
              href="/contact"
              class={styles.link}
              onClick={() => setMenuOpen(false)}
            >
              <span>
                {t("contact")}
                <FaSolidArrowRightLong />
              </span>
            </A>
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
