// pages/_app.tsx

import "@rainbow-me/rainbowkit/styles.css";

import { RainbowKitProvider, getDefaultWallets } from "@rainbow-me/rainbowkit";
import { ReactElement, ReactNode } from 'react';
import { WagmiConfig, configureChains, createConfig } from "wagmi";
import { arbitrum, base, mainnet, optimism, polygon, zora } from "wagmi/chains";

import { AppProps } from 'next/app';
import Layout from '@/components/shared/Layout';
import { NextPage } from 'next';
import { Session } from 'next-auth';
import { SessionProvider } from 'next-auth/react';
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";

const { chains, publicClient } = configureChains(
  [mainnet, polygon, optimism, arbitrum, base, zora], // TODO: Add your own chains here
  [alchemyProvider({ apiKey: process.env.ALCHEMY_ID }), publicProvider()] // TODO: Add your own Alchemy API key here
);
const { connectors } = getDefaultWallets({
  appName: "My RainbowKit App",
  projectId: "YOUR_PROJECT_ID",
  chains,
});
const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
});

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
      <WagmiConfig config={wagmiConfig}>
        <RainbowKitProvider chains={chains}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </RainbowKitProvider>
      </WagmiConfig>
    </SessionProvider>

  );
}

export default MyApp;


