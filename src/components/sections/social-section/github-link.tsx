import GitHub from '@/components/ui/svg/github';
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
      <GitHub className={cn(className)} />
    </Button>
  );
}
