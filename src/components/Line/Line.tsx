import { For, createEffect, onMount } from "solid-js";

import Card from "../Card/Card";
import { centerElement } from "~/helpers";
import styles from "./Line.module.scss";
import { useApplicationContext } from "~/context/context";
import { data } from "../../../data";
import { calculateDays } from "~/helpers/calculateDays";

interface Props {
  today: Date;
  total: number;
  progress: number;
  initial: Date;
}

export default function Line(props: Props) {
  const store = useApplicationContext();
  const [elements, { addElement }] = store.elements;

  let todayIcon: any;

  onMount(() => {
    centerElement(todayIcon);
    addElement(todayIcon);
  });

  return (
    <div class={styles.line} style={{ height: `${props.total}vh` }}>
      <For each={data}>
        {(item) => (
          <Card
            side={item.label == "nacional" ? "card-right" : "card-left"}
            distance={calculateDays(props.initial, new Date(item.date))}
          >
            <span class="card-label">{item.label}</span>
            <h3 class="card-title">{item.title}</h3>
            <p class="card-description">{item.description}</p>
            <span class="card-date">{item.date}</span>
          </Card>
        )}
      </For>
      <div
        class={styles.today}
        ref={todayIcon}
        style={{ "margin-top": `${props.progress}vh` }}
      >
        <span>
          {props.today.toLocaleDateString("es-AR", {
            month: "long",
            day: "numeric",
          })}
        </span>
      </div>
    </div>
  );
}
