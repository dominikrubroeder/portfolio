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
      href="https://www.figma.com/design/yGICVbl9clikVNXP2Lkkue/Portfolio?node-id=745-2&t=VgM8HleoXUZm4M9t-1"
      title="Go to Figma file of Dominik Rubröders portfolio"
      aria-label="Go to Figma file of Dominik Rubröders portfolio"
      className={className}
    />
  );
}
