import { Html, Head, Main, NextScript } from "next/document";


export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="shortcut icon" href='/logo.png'/>
        <link rel="apple-touch-icon" sizes="180x180" href='/nbjackson.png'/>
      </Head>
      
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
