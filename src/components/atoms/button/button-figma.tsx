import { BaseComponentProps } from '@/lib/types';
import { BrandLink } from '@/components/organisms/brand';
import { getTools } from '@/components/organisms/tools';

export function ButtonFigma({ id, className }: BaseComponentProps) {
  const figma = getTools({ names: ['Figma'] })?.[0];

  return (
    <BrandLink
      brandLogoId={id || 'button-figma'}
      brand={figma}
      size="small"
      href="https://figma.com"
      title="Go to Figma file of Dominik Rubröders portfolio"
      aria-label="Go to Figma file of Dominik Rubröders portfolio"
      className={className}
    />
  );
}
