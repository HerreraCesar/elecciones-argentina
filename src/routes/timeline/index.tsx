import styles from "./index.module.scss";
import { useTransContext } from "@mbarzda/solid-i18next";

export default function Timeline() {
  const [t] = useTransContext();
  return (
    <main>
      <p>{t("coming_soon")}</p>
    </main>
  );
}
