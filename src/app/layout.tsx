import './globals.css';
import type { ReactNode } from 'react';
import { Suspense } from 'react';

import type { Metadata } from 'next';

import { Outfit, Patrick_Hand } from 'next/font/google';

import { ArrowRightIcon } from '@heroicons/react/16/solid';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';

import { Button } from '@/components/ui/button';
import { ScrollToTop } from '@/components/ui/scroll-to-top';

import { Footer } from '@/components/feature/footer';
import { Frame } from '@/components/feature/frame';
import { Header } from '@/components/feature/header';
import { IntroProvider } from '@/components/feature/intro/intro-context';
import {
  ButtonGithub,
  ButtonLinkedin
} from '@/components/feature/profile-links';
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
    'Hands-on: User Interfaces for the Web | Dominik Rubröder, UX Engineer',
  description: 'I connect the worlds of design and code',
  metadataBase: new URL(ROUTING_PUBLIC_DOMAIN),
  openGraph: {
    title:
      'Hands-on: User Interfaces for the Web | Dominik Rubröder, UX Engineer',
    description: 'I connect the worlds of design and code',
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
      <body className="relative flex min-h-screen flex-col overflow-x-hidden bg-background font-body text-base leading-normal font-normal text-muted-foreground selection:bg-primary selection:text-primary-foreground">
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

            <main className="relative flex-1 space-y-8 pt-4 sm:space-y-12">
              <Frame className="fixed inset-0 z-50" />

              <Suspense>
                <ScrollToTop />
              </Suspense>

              {children}
            </main>

            <div className="sticky bottom-0 z-50 mt-8 bg-background py-4">
              <div className="mx-auto flex max-w-container-readable items-center gap-3 px-4">
                <Button href="/projects" className="flex-1 sm:flex-none">
                  Selected work
                  <ArrowRightIcon />
                </Button>

                <div className="flex">
                  <ButtonGithub id="header-github" />
                  <ButtonLinkedin id="header-linkedin" />
                </div>
              </div>
            </div>

            <Footer />
          </IntroProvider>
        </ThemeProvider>

        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
