import Link from 'next/link';
import LinkedIn from '@/components/ui/svg/linkedin';

export default function LinkedInLink() {
  return (
    <Link
      href="https://www.linkedin.com/in/dominik-rubröder-49a63817b"
      target="_blank"
      title="LinkedIn Dominik Rubröder"
      aria-label="Go to external LinkedIn page from Dominik Rubröder"
    >
      <LinkedIn className="size-6 shrink-0" />
    </Link>
  );
}
