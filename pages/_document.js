import Document, { Html, Head, Main, NextScript } from "next/document";

function MyDocument() {
  return (
    <Html>
      <Head>
        <link rel="icon" href="/images/logo.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crosscrossOrigin="true"
          Origin
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

export default MyDocument;
