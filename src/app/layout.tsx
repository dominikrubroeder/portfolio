import './globals.css';
import type { ReactNode } from 'react';

import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';

import { Footer } from '@/components/molecules/footer';
import { Header } from '@/components/molecules/header';
import { AppProvider } from '@/components/organisms/app';

import type { Metadata } from 'next';

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
    <AppProvider>
      <html
        lang="en"
        className="scroll-smooth bg-background"
        data-appearance="dark"
      >
        <body className="overflow-x-hidden bg-background text-base leading-[1.8] font-normal text-muted-foreground">
          <Header />
          <main>{children}</main>
          <Footer />
          <Analytics />
          <SpeedInsights />
        </body>
      </html>
    </AppProvider>
  );
}
