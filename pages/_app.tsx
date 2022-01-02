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

        <meta property="og:URL" content="%PUBLIC_URL%/localImage.jpg" />

        <meta property="og:type" content="article" />

        <meta property="og:title" content="lorem ipsum lorem ipsum" />

        <meta property="og:description" content="lorem ipsum" />

        <meta property="og:image" content="%PUBLIC_URL%/localImage.jpg" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
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
