import { Show } from "solid-js";
import Footer from "~/components/Footer/Footer";
import Layout from "~/components/Layout/Layout";
import Sidebar from "~/components/Sidebar/Sidebar";
import Soon from "~/components/Soon/Soon";
import { useApplicationContext } from "~/context/context";

export default function Timeline() {
  const store = useApplicationContext();
  const [showAccesories] = store.showAccesories;
  return (
    <Layout>
      <Show when={showAccesories()}>
        <Sidebar />
      </Show>
      <Soon />
      <Footer />
    </Layout>
  );
}
