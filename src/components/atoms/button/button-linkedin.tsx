import { Button } from '@/components/atoms/button';
import { LogoLinkedin } from '@/components/atoms/logo';

export function ButtonLinkedin({ className }: { className?: string }) {
  return (
    <Button
      variant="ghost-foreground"
      href="https://www.linkedin.com/in/dominik-rubröder-49a63817b"
      title="Go to LinkedIn profile of Dominik Rubröder"
      aria-label="Go to LinkedIn profile of Dominik Rubröder"
      size="large"
      className={className}
    >
      <LogoLinkedin />
    </Button>
  );
}
