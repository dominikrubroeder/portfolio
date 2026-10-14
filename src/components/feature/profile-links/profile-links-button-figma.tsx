import { BrandLink } from '@/components/feature/brand';
import { getTools } from '@/components/feature/tools';

import type { BaseComponentProps } from '@/lib/types';

export function ButtonFigma({ id, className }: BaseComponentProps) {
  const figma = getTools({ names: ['Figma'] })?.[0];

  return (
    <BrandLink
      brandLogoId={id || 'button-figma'}
      brand={figma}
      size="small"
      href="https://www.figma.com/design/yGICVbl9clikVNXP2Lkkue/Portfolio?node-id=745-2&t=VgM8HleoXUZm4M9t-1"
      label="Go to Figma file of Dominik Rubröders portfolio"
      className={className}
    />
  );
}
