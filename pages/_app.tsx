import type { AppProps } from 'next/app';
import { AuthProvider, OrdersProvider, UiProvider } from '@/context';
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
      <AuthProvider>
        <OrdersProvider>
          <UiProvider>
            <Component {...pageProps} />
          </UiProvider>
        </OrdersProvider>
      </AuthProvider>
    </SWRConfig>
  );
}
