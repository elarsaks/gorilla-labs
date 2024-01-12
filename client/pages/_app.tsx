// pages/_app.tsx
import { AppProps } from 'next/app';
import { SessionProvider } from 'next-auth/react';
import { ReactElement, ReactNode } from 'react';
import { NextPage } from 'next';
import { Session } from 'next-auth';
import Layout from '@/components/ui/Layout';

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
  pageProps: {
    session?: Session;
  };
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <SessionProvider session={pageProps.session}>
      <Layout>
        <Component {...pageProps} />
      </Layout>

    </SessionProvider>
  );
}

export default MyApp;
