import { createEffect, onMount } from 'solid-js';

import Card from '../Card/Card';
import { centerElement } from '~/helpers';
import styles from './Line.module.scss';
import { useApplicationContext } from '~/context/context';

interface Props {
  today: Date;
  total: number;
  progress: number;
}

export default function Line(props: Props) {
  const store = useApplicationContext();
  const [elements, { addElement }] = store.elements;

  let todayIcon: any;

  onMount(() => {
    centerElement(todayIcon);
    addElement(todayIcon);
  });

  createEffect(() => {
    console.log(elements());
  });

  return (
    <div class={styles.line} style={{ height: `${props.total}vh` }}>
      <Card />
      <div
        class={styles.today}
        ref={todayIcon}
        style={{ 'margin-top': `${props.progress}vh` }}
      >
        <span>
          {props.today.toLocaleDateString('es-AR', {
            month: 'long',
            day: 'numeric',
          })}
        </span>
      </div>
    </div>
  );
}
