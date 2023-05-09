import { JSXElement, createSignal } from "solid-js";
import "./Card.scss";

interface CardProps {
  children?: JSXElement;
  side: "card-right" | "card-left";
  distance: number;
}

export default function Card({ children, side, distance }: CardProps) {
  return (
    <div class={`card ${side}`} style={{ "margin-top": `${distance}vh` }}>
      <div class="card-dot" />
      <div class="card-arrow" />
      {children}
    </div>
  );
}
