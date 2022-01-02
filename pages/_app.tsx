import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import Script from "next/script";
import { useEffect } from "react";
import Layout from "../components/layout";
import * as gtag from "../lib/gtag";
import "../styles/globals.css";
import Head from 'next/head'

export default function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url: string) => {
      gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);










  return (
    <>
      <Head>
        <title>Fernando Belotto</title>
        <meta name="title" content="Fernando Belotto" />
        <meta name="description" content="Software developer specialized in frontend technologies | Based in São Paulo, Brazil" />
        <link rel="icon" href="/favicon.ico" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://fernandobelotto.com/" />
        <meta property="og:title" content="Fernando Belotto" />
        <meta property="og:description" content="Software developer specialized in frontend technologies | Based in São Paulo, Brazil" />
        <meta property="og:image" content="https://fernandobelotto.dev/fernando.png" />

        <meta property="twitter:url" content="https://fernandobelotto.com/" />
        <meta property="twitter:title" content="Fernando Belotto" />
        <meta property="twitter:description" content="Software developer specialized in frontend technologies | Based in São Paulo, Brazil" />
        <meta property="twitter:image" content="https://fernandobelotto.dev/fernando.png" />

      </Head>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gtag.GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />

      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
