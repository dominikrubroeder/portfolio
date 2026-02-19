import { Button } from '@/components/atoms/button';
import { LogoGithub } from '@/components/atoms/logo';
import { BaseComponentProps } from '@/lib/types';

export function ButtonGithub({ id, className }: BaseComponentProps) {
  return (
    <Button
      variant="ghost-foreground"
      href="https://github.com/dominikrubroeder"
      title="Go to GitHub profile of Dominik Rubröder"
      aria-label="Go to GitHub profile of Dominik Rubröder"
      size="large"
      className={className}
    >
      <LogoGithub id={id || 'button-github'} />
    </Button>
  );
}
