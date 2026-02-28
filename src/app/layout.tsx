import './globals.css';
import type { ReactNode } from 'react';

import { Indie_Flower, JetBrains_Mono } from 'next/font/google';

import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';

import { Footer } from '@/components/organisms/footer';
import { Header } from '@/components/organisms/header';
import { ThemeProvider } from '@/components/organisms/theme';

import type { Metadata } from 'next';
import { jsonLd, SEO_KEYWORDS } from '@/lib/seo';
import { ROUTING_PUBLIC_DOMAIN } from '@/lib/routing';
import { TooltipProvider } from '@/components/atoms/tooltip/shadcnui/tooltip';

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
  metadataBase: new URL(ROUTING_PUBLIC_DOMAIN),
  openGraph: {
    title: 'Dominik Rubröder | UX Design Engineer',
    description:
      'Sync frontend design and code in frontend design engineering. Build user interfaces based on brand values, user needs and business goals.',
    url: ROUTING_PUBLIC_DOMAIN,
    siteName: ROUTING_PUBLIC_DOMAIN.replace('https://www.', ''),
    images: [
      {
        url: `${ROUTING_PUBLIC_DOMAIN}/avatar.jpg`,
        width: 500,
        height: 500,
        alt: 'Profile image Dominik Rubröder'
      }
    ],
    locale: 'en_US',
    type: 'website'
  },
  keywords: SEO_KEYWORDS,
  authors: [{ name: 'Dominik Rubröder', url: ROUTING_PUBLIC_DOMAIN }]
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider>
      <html
        lang="en"
        className={`scroll-smooth bg-background ${indieFlower.variable} ${jetbrainsMono.variable}`}
      >
        <body>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          />

          <Header />

          <main>
            <TooltipProvider>{children}</TooltipProvider>
          </main>

          <Footer />
          <Analytics />
          <SpeedInsights />
        </body>
      </html>
    </ThemeProvider>
  );
}
