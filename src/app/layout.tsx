import { ReactNode } from 'react';
import './globals.css';
import Header from '@/components/molecules/header';
import Footer from '@/components/molecules/footer';
import { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { ThemeProvider } from '@/components/organisms/app-context';

export const metadata: Metadata = {
  title: 'UX Design Engineer | Dominik Rubröder',
  description:
    'Creating and building dynamic interfaces that are designed to be for a joyful Web'
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider>
      <html
        lang="en"
        className="scroll-smooth bg-background leading-[1.8]"
        data-theme="auto"
      >
        <body className="overflow-x-hidden font-normal text-muted-foreground">
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
