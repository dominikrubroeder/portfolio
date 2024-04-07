import GitHub from '@/components/ui/svg/github';
import Link from 'next/link';

export default function GitHubLink() {
  return (
    <Link
      href="https://www.github.com/dominikrubroeder"
      target="_blank"
      title="GitHub Dominik Rubröder"
      aria-label="Go to external GitHub page from Dominik Rubröder"
    >
      <GitHub className="size-6 shrink-0" />
    </Link>
  );
}
