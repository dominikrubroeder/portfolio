import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { UiContextProvider } from '../context/UiContext';
import { AnimatePresence } from 'framer-motion';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <UiContextProvider>
      <AnimatePresence
        mode="wait"
        initial={false}
        onExitComplete={() => window.scrollTo(0, 0)}
      >
        <Component {...pageProps} />
      </AnimatePresence>
    </UiContextProvider>
  );
}
