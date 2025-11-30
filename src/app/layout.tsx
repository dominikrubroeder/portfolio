import './globals.css';
import type { ReactNode } from 'react';

import { JetBrains_Mono } from 'next/font/google';

import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';

import { Footer } from '@/components/organisms/footer';
import { Header } from '@/components/organisms/header';
import { ThemeProvider } from '@/components/organisms/theme';

import type { Metadata } from 'next';
import { LiveEditProvider } from '@/components/organisms/live-edit';

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-jetbrains-mono'
});

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
    <ThemeProvider>
      <html
        lang="en"
        className={`scroll-smooth bg-background ${jetbrainsMono.variable}`}
      >
        <body className="overflow-x-hidden bg-background text-base leading-[1.8] font-normal text-muted-foreground">
          <Header />

          <LiveEditProvider>
            <main>{children}</main>
          </LiveEditProvider>

          <Footer />
          <Analytics />
          <SpeedInsights />
        </body>
      </html>
    </ThemeProvider>
  );
}
