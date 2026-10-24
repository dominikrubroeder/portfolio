import { BrandLink } from '@/components/feature/brand';
import { socials } from '@/components/feature/socials';

import { cn } from '@/lib/utils';

import type { BaseComponentProps } from '@/lib/types';

export function ButtonLinkedin({ id, className }: BaseComponentProps) {
  const linkedin = socials.find((social) => social.name === 'LinkedIn');

  if (!linkedin) return null;

  return (
    <BrandLink
      brandLogoId={id || 'button-linkedin'}
      brand={linkedin}
      href="https://www.linkedin.com/in/dominik-rubröder-49a63817b"
      label="Go to LinkedIn profile of Dominik Rubröder"
      size="small"
      className={cn(className)}
    />
  );
}
