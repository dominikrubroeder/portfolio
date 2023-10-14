'use client';

import React from 'react';
import '../globals.css';
import { UiContextProvider } from '../context/UiContext';
import { AnimatePresence } from 'framer-motion';

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="dark" className="dark">
      <body className="min-h-screen bg-theme-base leading-[1.8] text-theme-contrary/40">
        <UiContextProvider>
          <AnimatePresence
            mode="wait"
            initial={false}
            onExitComplete={() => window.scrollTo(0, 0)}
          >
            {children}
          </AnimatePresence>
        </UiContextProvider>
      </body>
    </html>
  );
}
