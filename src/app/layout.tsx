import './globals.css';
import './cursor.css';
import type { ReactNode } from 'react';
import { Suspense } from 'react';

import type { Metadata } from 'next';

import { Outfit, Patrick_Hand } from 'next/font/google';

import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';

import { ScrollToTop } from '@/components/ui/scroll-to-top';

import { Footer } from '@/components/feature/footer';
import { Header } from '@/components/feature/header';
import { IntroProvider } from '@/components/feature/intro/intro-context';
import { PageFrame } from '@/components/feature/page-frame';
import { PageNavigationBar } from '@/components/feature/page-navigation-bar';
import {
  themeInitializationScript,
  ThemeProvider
} from '@/components/feature/theme';

import { ROUTING_PUBLIC_DOMAIN } from '@/lib/routing';
import { jsonLd, SEO_KEYWORDS } from '@/lib/seo';
import { cn } from '@/lib/utils';

const outfit = Outfit({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-outfit'
});

const patrickHand = Patrick_Hand({
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
  variable: '--font-patrick-hand'
});

export const metadata: Metadata = {
  title:
    'Design and code speak the same language | Dominik Rubröder, UX Engineer',
  description:
    'Design and code speak the same language. I connect the worlds of design and code as a UX Engineer.',
  metadataBase: new URL(ROUTING_PUBLIC_DOMAIN),
  openGraph: {
    title:
      'Design and code speak the same language | Dominik Rubröder, UX Engineer',
    description:
      'Design and code speak the same language. I connect the worlds of design and code as a UX Engineer.',
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
    <html
      lang="en"
      className={cn(
        'scroll-smooth bg-background',
        outfit.variable,
        patrickHand.variable
      )}
      suppressHydrationWarning
      data-scroll-behavior="smooth"
    >
      <body className="relative flex min-h-screen flex-col overflow-x-hidden bg-background font-body text-base leading-normal font-normal selection:bg-primary selection:text-primary-foreground">
        <ThemeProvider>
          <script
            id="theme-initializer"
            dangerouslySetInnerHTML={{ __html: themeInitializationScript }}
          />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          />

          <IntroProvider>
            <Header />

            <main className="relative flex-1 space-y-8 pt-8 sm:space-y-12">
              <PageFrame className="fixed inset-0 z-50" />

              <Suspense>
                <ScrollToTop />
              </Suspense>

              {children}
            </main>

            <PageNavigationBar />

            <Footer />
          </IntroProvider>
        </ThemeProvider>

        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
