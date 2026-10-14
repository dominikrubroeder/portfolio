import type { ReactNode } from 'react';

import { Blockquote } from '@/components/ui/blockquote';
import { Container } from '@/components/ui/container';
import { IconLucide } from '@/components/ui/icon/icon-lucide';
import { ScrollToTop } from '@/components/ui/scroll-to-top';

export function PageTemplate({
  h1,
  heroIcon,
  heroBlockquote,
  heroDescription,
  children
}: {
  h1: string;
  heroIcon?: string;
  heroBlockquote?: ReactNode;
  heroDescription?: ReactNode;
  children: ReactNode;
}) {
  return (
    <>
      <ScrollToTop />

      <Container
        as="section"
        size="container-readable"
        className="animate-in-to-left-100"
      >
        <div className="flex items-center gap-3">
          {heroIcon && <IconLucide name={heroIcon} className="text-primary" />}
          <h1>{h1}</h1>
        </div>

        {heroBlockquote && (
          <Blockquote className="mt-3 sm:mt-5">{heroBlockquote}</Blockquote>
        )}

        {heroDescription && (
          <div className="mt-4 animate-in-to-left-160">{heroDescription}</div>
        )}
      </Container>

      {children}
    </>
  );
}
