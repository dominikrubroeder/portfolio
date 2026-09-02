import './globals.css';
import { ReactNode, Suspense } from 'react';

import { JetBrains_Mono, Outfit } from 'next/font/google';

import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';

import { Footer } from '@/components/organisms/footer';
import { Header } from '@/components/organisms/header';
import {
  themeInitializationScript,
  ThemeProvider,
  ThemeSidebar
} from '@/components/organisms/theme';

import type { Metadata } from 'next';
import { jsonLd, SEO_KEYWORDS } from '@/lib/seo';
import { ROUTING_PUBLIC_DOMAIN } from '@/lib/routing';
import { TooltipProvider } from '@/components/atoms/tooltip';
import { SidebarProvider } from '@/components/organisms/sidebar';
import { ScrollToTop } from '@/components/atoms/scroll-to-top';

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
  title: 'Design with code, code by design | Dominik Rubröder, UX Engineer',
  description:
    'Composing the frontend, its architecture, the user experience, the components, design systems, patterns, principles is my home to work with.',
  metadataBase: new URL(ROUTING_PUBLIC_DOMAIN),
  openGraph: {
    title: 'Design with code, code by design | Dominik Rubröder, UX Engineer',
    description:
      'Composing the frontend, its architecture, the user experience, the components, design systems, patterns, principles is my home to work with.',
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
      className={`scroll-smooth bg-background ${jetbrainsMono.variable} ${outfit.variable}`}
      suppressHydrationWarning
      data-scroll-behavior="smooth"
    >
      <body className="flex min-h-screen flex-col">
        <ThemeProvider>
          <TooltipProvider>
            <SidebarProvider>
              <script
                id="theme-initializer"
                dangerouslySetInnerHTML={{ __html: themeInitializationScript }}
              />
              <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
              />

              <Header />

              <main className="flex-1 space-y-8 pt-4 sm:space-y-12">
                <Suspense>
                  <ScrollToTop />
                </Suspense>

                {children}
                <ThemeSidebar />
              </main>

              <Footer />
            </SidebarProvider>
          </TooltipProvider>
        </ThemeProvider>

        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
