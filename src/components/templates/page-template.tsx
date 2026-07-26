import { ReactNode } from 'react';
import { Blockquote } from '@/components/atoms/blockquote';
import { Container } from '@/components/organisms/layout';
import { H1 } from '@/components/organisms/typography';
import {
  HeroNavigation,
  HeroNavigationPathname
} from '@/components/molecules/hero-navigation';
import { Hr } from '@/components/atoms/hr';
import { IconLucide } from '@/components/atoms/icon/icon-lucide';

export function PageTemplate({
  h1,
  heroIcon,
  heroBlockquote,
  heroDescription,
  heroNavigationHiddenLink,
  children
}: {
  h1: string;
  heroIcon?: string;
  heroBlockquote: ReactNode;
  heroDescription?: ReactNode;
  heroNavigationHiddenLink?: HeroNavigationPathname;
  children: ReactNode;
}) {
  return (
    <>
      <div className="animate-in-to-left-100">
        <Container as="section" size="container-readable">
          <div className="flex items-center gap-3">
            {heroIcon && (
              <IconLucide name={heroIcon} className="text-primary" />
            )}
            <H1>{h1}</H1>
          </div>

          <Blockquote className="mt-3 sm:mt-5">{heroBlockquote}</Blockquote>

          {heroDescription && <div>{heroDescription}</div>}
        </Container>
      </div>

      {children}

      <Hr />

      <HeroNavigation hiddenLink={heroNavigationHiddenLink} />
    </>
  );
}
