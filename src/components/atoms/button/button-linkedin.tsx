import { BaseComponentProps } from '@/lib/types';
import { BrandLink } from '@/components/organisms/brand';
import { socials } from '@/components/organisms/socials';

export function ButtonLinkedin({ id, className }: BaseComponentProps) {
  const linkedin = socials.find((social) => social.name === 'LinkedIn');

  if (!linkedin) return null;

  return (
    <BrandLink
      brandLogoId={id || 'button-linkedin'}
      brand={linkedin}
      href="https://www.linkedin.com/in/dominik-rubröder-49a63817b"
      title="Go to LinkedIn profile of Dominik Rubröder"
      aria-label="Go to LinkedIn profile of Dominik Rubröder"
      size="small"
      className={className}
    />
  );
}
