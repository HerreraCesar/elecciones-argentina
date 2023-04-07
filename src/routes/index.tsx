import './index.css';

import { A } from 'solid-start';
import Counter from '~/components/Counter';

export default function Home() {
  return (
    <main>
      <h1>Hello world!</h1>
      <Counter />
      <p>
        Visit{' '}
        <a href="https://solidjs.com" target="_blank">
          solidjs.com
        </a>{' '}
        to learn how to build Solid apps.
        <A href="/timeline">Go to timeline</A>
      </p>
    </main>
  );
}
