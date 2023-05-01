import Footer from "../Footer/Footer";
import { JSXElement, Show, createEffect, createSignal } from "solid-js";
import Navbar from "../Navbar/Navbar";
import ToTop from "../ToTop/ToTop";
import { Toaster } from "solid-toast";
import styles from "./Layout.module.scss";
import { useApplicationContext } from "~/context/context";

interface SectionProps {
  children: JSXElement;
}

export default function Layout({ children }: SectionProps) {
  const store = useApplicationContext();
  const [theme] = store.theme;
  const [showAccesories, { setShowAccesories }] = store.showAccesories;

  createEffect(() => {
    const body = document.getElementById("body");
    if (body) {
      setShowAccesories(body.clientHeight > window.innerHeight * 1.1);
    } else {
      setShowAccesories(false);
    }
  });

  return (
    <div
      class={`
        ${theme() === "dark" ? "dark-mode" : "light-mode"}
        ${styles.layout} 
      `}
    >
      <Navbar />
      <Show when={showAccesories()}>
        <ToTop />
      </Show>
      <main class={styles.main}>{children}</main>
      <Toaster position="bottom-center" />
    </div>
  );
}
