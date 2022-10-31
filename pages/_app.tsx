import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from '../components/layout';
import { UiContextProvider } from '../context/UiContext';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <UiContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </UiContextProvider>
  );
}
