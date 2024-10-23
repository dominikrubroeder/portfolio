import GithubIcon from '@/components/ui/svg/github-icon';
import { cn } from '@/lib/utils';
import Button from '@/components/atoms/button';

export default function GitHubLink({ className }: { className?: string }) {
  return (
    <Button
      variant="secondary"
      asLink
      href="https://github.com/dominikrubroeder"
      target="_blank"
      title="Go to GitHub repositories from Dominik Rubröder"
      aria-label="Go to GitHub repositories from Dominik Rubröder"
    >
      <GithubIcon className={cn(className)} />
    </Button>
  );
}
