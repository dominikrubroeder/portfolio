import { BrandLink } from '@/components/feature/brand';
import { getTools } from '@/components/feature/tools';

import type { BaseComponentProps } from '@/lib/types';

export function ButtonFigma({ id, className }: BaseComponentProps) {
  const figma = getTools({ names: ['Figma'] })?.[0];

  if (!figma) return null;

  return (
    <BrandLink
      brandLogoId={id || 'button-figma'}
      brand={figma}
      size="small"
      href="https://www.figma.com/design/yGICVbl9clikVNXP2Lkkue/Portfolio-Design-System?node-id=745-2"
      label="Open my design system in Figma"
      className={className}
    />
  );
}
