import { ReactNode } from 'react';
import { Blockquote } from '@/components/atoms/blockquote';
import { Container } from '@/components/organisms/layout';
import { H1 } from '@/components/organisms/typography';
import { IconLucide } from '@/components/atoms/icon/icon-lucide';

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
      <Container
        as="section"
        size="container-readable"
        className="animate-in-to-left-100"
      >
        <div className="flex items-center gap-3">
          {heroIcon && <IconLucide name={heroIcon} className="text-primary" />}
          <H1>{h1}</H1>
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
