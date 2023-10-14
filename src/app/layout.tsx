'use client';

import { ReactNode } from 'react';
import '../globals.css';
import { UiContextProvider } from '../context/UiContext';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" data-theme="dark" className="dark">
      <body className="min-h-screen bg-theme-base leading-[1.8] text-theme-contrary/40">
        <UiContextProvider>{children}</UiContextProvider>
      </body>
    </html>
  );
}
