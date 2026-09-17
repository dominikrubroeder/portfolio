import './globals.css';
import { ReactNode, Suspense } from 'react';

import { Geist, JetBrains_Mono, Outfit } from 'next/font/google';

import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';

import { Footer } from '@/components/organisms/footer';
import { Header } from '@/components/organisms/header';
import {
  themeInitializationScript,
  ThemeProvider
} from '@/components/organisms/theme';

import type { Metadata } from 'next';
import { jsonLd, SEO_KEYWORDS } from '@/lib/seo';
import { ROUTING_PUBLIC_DOMAIN } from '@/lib/routing';
import { ScrollToTop } from '@/components/atoms/scroll-to-top';
import { cn } from '@/lib/utils';
import { SvgShapes } from '@/components/atoms/svg';
import { IntroProvider } from '@/components/molecules/intro-context';

const geist = Geist({ subsets: ['latin'], variable: '--font-sans' });

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-jetbrains-mono'
});

const outfit = Outfit({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-outfit'
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
        'scroll-smooth',
        'bg-background',
        jetbrainsMono.variable,
        outfit.variable,
        'font-sans',
        geist.variable
      )}
      suppressHydrationWarning
      data-scroll-behavior="smooth"
    >
      <body className="relative flex min-h-screen flex-col overflow-x-hidden bg-background text-base leading-[1.6] font-normal text-muted-foreground selection:bg-primary selection:text-primary-foreground">
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
            <SvgShapes className="pointer-events-none absolute top-0 right-0 left-0 z-10 hidden lg:block" />

            <Header />

            <main className="flex-1 space-y-8 pt-4 sm:space-y-12">
              <Suspense>
                <ScrollToTop />
              </Suspense>

              {children}
            </main>

            <Footer />
          </IntroProvider>
        </ThemeProvider>

        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
