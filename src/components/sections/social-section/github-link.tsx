import Link from 'next/link';
import GitHub from '@/components/ui/svg/github';
import { cn } from '@/utils';

export default function GitHubLink({ className }: { className?: string }) {
  return (
    <Link
      href="https://github.com/dominikrubroeder"
      target="_blank"
      title="Go to GitHub repositories from Dominik Rubröder"
      aria-label="Go to GitHub repositories from Dominik Rubröder"
    >
      <GitHub className={cn(className)} />
    </Link>
  );
}
