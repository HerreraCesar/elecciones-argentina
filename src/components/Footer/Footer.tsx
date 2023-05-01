import { t } from "~/helpers/translate";
import styles from "./Footer.module.scss";
import { FaBrandsGithub, FaBrandsLinkedin } from "solid-icons/fa";
import { BsBriefcaseFill } from "solid-icons/bs";
import { A } from "solid-start";
import { links } from "~/config";

export default function Footer() {
  return (
    <footer class={styles.footer}>
      <div class={styles.icons}>
        <A href={links.github} target="_blank">
          <FaBrandsGithub />
        </A>
        <A href={links.linkedin} target="_blank">
          <FaBrandsLinkedin />
        </A>
        <A href={links.portfolio} target="_blank">
          <BsBriefcaseFill />
        </A>
      </div>
      <span class={styles.author}>
        {t("author")}
        <A href={links.portfolio} target="_blank">
          Herrera César
        </A>
      </span>
    </footer>
  );
}
