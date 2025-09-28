import { Button } from '@/components/atoms/button';
import { GithubLogo } from '@/components/atoms/logo';

export function GitHubButton({ className }: { className?: string }) {
  return (
    <Button
      variant="ghost"
      href="https://github.com/dominikrubroeder"
      title="Go to GitHub profile of Dominik Rubröder"
      aria-label="Go to GitHub profile of Dominik Rubröder"
      size="large"
      className={className}
    >
      <GithubLogo />
    </Button>
  );
}
