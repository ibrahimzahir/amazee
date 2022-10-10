import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import "../styles/globals.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Market MV</title>
        <link rel="icon" href="/" />
      </Head>

      <NavBar />

      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
