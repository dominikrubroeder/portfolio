import { Html, Head, Main, NextScript } from 'next/document';

const Document = () => {
  return (
    <Html lang="en" data-theme="dark" className="dark">
      <Head />
      <body className="min-h-screen bg-theme-base text-theme-contrary/40">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
