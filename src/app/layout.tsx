import './globals.css';
import type { ReactNode } from 'react';

import { Indie_Flower, JetBrains_Mono } from 'next/font/google';

import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';

import { Footer } from '@/components/organisms/footer';
import { Header } from '@/components/organisms/header';
import { ThemeProvider } from '@/components/organisms/theme';

import type { Metadata } from 'next';

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-jetbrains-mono'
});

const indieFlower = Indie_Flower({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-handwritten'
});

export const metadata: Metadata = {
  title: 'Dominik Rubröder | UX Design Engineer',
  description:
    'Sync frontend design and code in frontend design engineering. Build user interfaces based on brand values, user needs and business goals.',
  metadataBase: new URL('https://www.dominikrubroeder.dev'),
  openGraph: {
    title: 'Dominik Rubröder | UX Design Engineer',
    description:
      'Sync frontend design and code in frontend design engineering. Build user interfaces based on brand values, user needs and business goals.',
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
    locale: 'en_US',
    type: 'website'
  },
  keywords: [
    'Frontend',
    'Design Engineer',
    'User Interface Engineer',
    'User Interface Designer',
    'User experience',
    'UX',
    'User interface',
    'UI designer',
    'UI engineer',
    'UI components',
    'Webdesign',
    'Next.js',
    'React'
  ]
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider>
      <html
        lang="en"
        className={`scroll-smooth bg-background ${indieFlower.variable} ${jetbrainsMono.variable}`}
      >
        <body>
          <Header />

          <main>{children}</main>

          <Footer />
          <Analytics />
          <SpeedInsights />
        </body>
      </html>
    </ThemeProvider>
  );
}
