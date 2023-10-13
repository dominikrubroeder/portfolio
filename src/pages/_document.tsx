import { Head, Html, Main, NextScript } from 'next/document';

const Document = () => {
  return (
    <Html lang="en" data-theme="dark" className="dark">
      <Head />
      <body className="min-h-screen bg-theme-base leading-[1.8] text-theme-contrary/40">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
