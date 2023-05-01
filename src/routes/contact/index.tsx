import styles from "./index.module.scss";
import { t } from "~/helpers/translate";
import Layout from "~/components/Layout/Layout";
import Soon from "~/components/Soon/Soon";
import Footer from "~/components/Footer/Footer";
import { FaSolidCopy } from "solid-icons/fa";
import toast from "solid-toast";

export default function Contact() {
  return (
    <Layout>
      <div class={styles.card}>
        <h1 class={styles.title}>
          {t("title")}
          <strong>{t("contact_us")}</strong>
        </h1>
        <div
          class={styles.email}
          onClick={() => {
            navigator.clipboard.writeText("email.themovieplace@gmail.com");
            toast.success("Email copied to clipboard");
          }}
        >
          <h2>email.themovieplace@gmail.com</h2>
          <div class={styles.copy}>
            <FaSolidCopy />
          </div>
        </div>
      </div>
      <Footer />
    </Layout>
  );
}
