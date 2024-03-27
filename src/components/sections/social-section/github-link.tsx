import Link from 'next/link';
import GitHub from '@/components/ui/svg/github';
import { clsx } from 'clsx';

export default function GitHubLink({ className }: { className?: string }) {
  return (
    <Link
      href="https://github.com/dominikrubroeder"
      target="_blank"
      title="Go to GitHub | Dominik Rubröder repositories"
      aria-label="Go to GitHub | Dominik Rubröder repositories"
    >
      <GitHub className={clsx(className)} />
    </Link>
  );
}
