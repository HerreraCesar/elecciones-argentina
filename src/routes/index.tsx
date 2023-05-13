import { Navigate } from 'solid-start';
import { inject } from '@vercel/analytics';

export default function Index() {
  inject();
  return <Navigate href={'/home'} />;
}
