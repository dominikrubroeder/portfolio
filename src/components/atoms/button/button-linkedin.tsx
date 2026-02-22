import { Button } from '@/components/atoms/button';
import { LogoLinkedin } from '@/components/atoms/logo';
import { BaseComponentProps } from '@/lib/types';

export function ButtonLinkedin({ id, className }: BaseComponentProps) {
  return (
    <Button
      variant="ghost-foreground"
      href="https://www.linkedin.com/in/dominik-rubröder-49a63817b"
      title="Go to LinkedIn profile of Dominik Rubröder"
      aria-label="Go to LinkedIn profile of Dominik Rubröder"
      size="large"
      className={className}
    >
      <LogoLinkedin id={id || 'button-linkedin'} />
    </Button>
  );
}
