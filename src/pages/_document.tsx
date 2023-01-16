import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en" className="dark">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <link rel="icon" href="/logo.svg" />
        <meta
          name="description"
          content="Jack Taylor is a Software Engineer working full-time in Web Development"
        />
      </Head>

      <body className="dark:bg-neutral-800">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
