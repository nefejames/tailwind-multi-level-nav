import Head from "next/head";
import Layout from "@/layouts/Layout";

import "@/css/tailwind.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Tailwind Multilevel Nav</title>
      </Head>

      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
