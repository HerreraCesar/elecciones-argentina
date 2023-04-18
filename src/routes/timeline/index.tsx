import styles from "./index.module.scss";
import { t } from "~/helpers/translate";
import Layout from "~/components/Layout/Layout";

export default function Timeline() {
  return (
    <Layout>
      <section>
        <p>{t("coming_soon")}</p>
      </section>
    </Layout>
  );
}
