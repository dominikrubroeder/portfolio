import { BaseComponentProps } from '@/lib/types';
import { BrandLink } from '@/components/organisms/brand';
import { getTools } from '@/components/organisms/tools';

export function ButtonGithub({ id, className }: BaseComponentProps) {
  const github = getTools({ names: ['GitHub'] })?.[0];

  return (
    <BrandLink
      brandLogoId={id || 'button-github'}
      brand={github}
      size="small"
      href="https://github.com/dominikrubroeder"
      title="Go to GitHub profile of Dominik Rubröder"
      aria-label="Go to GitHub profile of Dominik Rubröder"
      className={className}
    />
  );
}
