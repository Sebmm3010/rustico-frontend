import type { AppProps } from 'next/app';
import { SessionProvider } from 'next-auth/react';
import { SWRConfig } from 'swr';

import { AuthProvider, OrdersProvider, UiProvider } from '@/context';
import '@/styles/globals.css';

export default function App({
  Component,
  pageProps: { session, ...pageProps }
}: AppProps) {
  return (
    <SessionProvider session={session}>
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
    </SessionProvider>
  );
}
