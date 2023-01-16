import type { AppProps } from 'next/app';

import { useEffect } from 'react';

import '@/src/styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    if (
      localStorage.theme === 'light' ||
      (!('theme' in localStorage) &&
        !window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      document.documentElement.classList.remove('dark');
    } else {
      document.documentElement.classList.add('dark');
    }
  });

  return <Component {...pageProps} />;
}
