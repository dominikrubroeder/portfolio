import { BrandLink } from '@/components/feature/brand';
import { getTools } from '@/components/feature/tools';

import type { BaseComponentProps } from '@/lib/types';

export function ButtonGithub({ id, className }: BaseComponentProps) {
  const github = getTools({ names: ['GitHub'] })?.[0];

  return (
    <BrandLink
      brandLogoId={id || 'button-github'}
      brand={github}
      size="small"
      href="https://github.com/dominikrubroeder"
      label="Go to GitHub profile of Dominik Rubröder"
      className={className}
    />
  );
}
