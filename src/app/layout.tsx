import { ReactNode } from 'react';
import './globals.css';
import Header from '@/components/molecules/header';
import Footer from '@/components/layout/footer';
import { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

export const metadata: Metadata = {
  title: 'Portfolio | Dominik Rubröder',
  description: 'Dominik Rubröder'
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
