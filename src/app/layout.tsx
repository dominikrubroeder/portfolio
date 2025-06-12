import './globals.css';
import { ReactNode } from 'react';
import { Metadata } from 'next';

import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';

import { Header } from '@/components/molecules/header';
import { Footer } from '@/components/molecules/footer';

export const metadata: Metadata = {
  title: 'Dominik Rubröder | UX Design Engineer',
  description:
    'Building user interfaces for the web. A craft, about UI components and design systems.',
  openGraph: {
    title: 'Dominik Rubröder | UX Design Engineer',
    description:
      'Building user interfaces for the web. A craft, about UI components and design systems.',
    url: 'https://www.dominikrubroeder.dev',
    siteName: 'dominikrubroeder.dev',
    images: [
      {
        url: 'https://www.dominikrubroeder.dev/avatar.jpg',
        width: 500,
        height: 500,
        alt: 'Profile image Dominik Rubröder'
      }
    ],
    locale: 'de_DE',
    type: 'website'
  }
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth bg-background" data-theme="auto">
      <body className="overflow-x-hidden bg-background text-base leading-[1.8] font-normal text-muted-foreground">
        <Header />
        <main>{children}</main>
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
