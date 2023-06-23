import type { AppProps } from 'next/app';
import { UiProvider } from '@/context';
import { SWRConfig } from 'swr';
import '@/styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SWRConfig
      value={{
        fetcher: (resouce, init) =>
          fetch(resouce, init).then((res) => res.json())
      }}
    >
      <UiProvider>
        <Component {...pageProps} />
      </UiProvider>
    </SWRConfig>
  );
}
