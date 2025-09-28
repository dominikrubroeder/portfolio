import { Button } from '@/components/atoms/button';
import { LinkedinLogo } from '@/components/atoms/logo';

export function LinkedInButton({ className }: { className?: string }) {
  return (
    <Button
      variant="ghost"
      href="https://www.linkedin.com/in/dominik-rubröder-49a63817b"
      title="Go to LinkedIn profile of Dominik Rubröder"
      aria-label="Go to LinkedIn profile of Dominik Rubröder"
      size="large"
      className={className}
    >
      <LinkedinLogo />
    </Button>
  );
}
