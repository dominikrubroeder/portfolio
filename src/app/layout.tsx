import { ReactNode } from 'react';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Portfolio | Dominik Rubröder',
  description: 'Dominik Rubröder'
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" data-theme="dark" className="dark">
      <body className="grid min-h-screen grid-rows-[auto_1fr_auto] bg-theme-base leading-[1.8] text-theme-contrary/40">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}