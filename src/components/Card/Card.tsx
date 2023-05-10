import './Card.scss';

import { JSXElement } from 'solid-js';

interface CardProps {
  children?: JSXElement;
  side: 'card-right' | 'card-left';
  distance: number;
  opacity: number;
}

export default function Card({ children, side, distance, opacity }: CardProps) {
  return (
    <div
      class={`card ${side}`}
      style={{ 'margin-top': `${distance}vh`, opacity: `${opacity}` }}
    >
      <div class="card-dot" />
      <div class="card-arrow" />
      {children}
    </div>
  );
}
