import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { SessionProvider } from 'next-auth/react';

export default function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    /* A wrapper for the next-auth library. */
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  );
}
