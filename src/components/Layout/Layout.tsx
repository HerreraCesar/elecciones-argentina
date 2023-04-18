import { JSXElement, children, createSignal } from "solid-js";
import styles from "./Layout.module.scss";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { useApplicationContext } from "~/context/context";

interface SectionProps {
  children: JSXElement;
}

export default function Layout({ children }: SectionProps) {
  const store = useApplicationContext();
  const [theme] = store.theme;
  return (
    <div
      class={`${theme() === "dark" ? "dark-mode" : "light-mode"} ${
        styles.layout
      }`}
    >
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
