import { ReactNode } from 'react';
import './globals.css';
import Header from '@/components/molecules/header';
import Footer from '@/components/molecules/footer';
import { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

export const metadata: Metadata = {
  title: 'Dominik Rubröder | Team Frontend',
  description:
    'Creating and building dynamic interfaces that are designed to be for a joyful Web'
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="overflow-x-hidden bg-background font-normal text-muted-foreground">
        <Header />
        <main>{children}</main>
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
