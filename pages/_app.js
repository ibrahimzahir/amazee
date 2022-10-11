import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

import "../styles/globals.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Market MV</title>
        <link rel="icon" href="/" />
      </Head>

      <Navbar />

      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
