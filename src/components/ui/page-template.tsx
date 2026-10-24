import type { ReactNode } from 'react';

import { Animate } from '@/components/ui/animate';
import { Blockquote } from '@/components/ui/blockquote';
import { Container } from '@/components/ui/container';
import { IconLucide } from '@/components/ui/icon';
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

      <Animate delay={0.16}>
        <Container as="section" size="container-readable">
          <div className="flex items-center gap-3">
            {heroIcon && (
              <IconLucide name={heroIcon} className="text-primary" />
            )}
            <h1>{h1}</h1>
          </div>

          {heroBlockquote && (
            <Blockquote className="mt-4 sm:mt-5">{heroBlockquote}</Blockquote>
          )}

          {heroDescription && (
            <div className="mt-4 animate-in-to-top-160">{heroDescription}</div>
          )}
        </Container>
      </Animate>

      {children}
    </>
  );
}
