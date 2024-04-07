'use client';

import { ArrowLongLeftIcon } from '@heroicons/react/24/outline';
import Avatar from '@/components/ui/avatar';
import { useRouter } from 'next/navigation';
import GitHubLink from '@/components/sections/social-section/github-link';
import Link from 'next/link';
import { cn } from '@/utils';
import LinkedInLink from '@/components/ui/links/linked-in-link';

export default function SecondaryNavigation({
  sticky,
  backButton
}: {
  sticky?: boolean;
  backButton?: boolean;
}) {
  const router = useRouter();

  return (
    <div
      className={cn(
        'z-50 flex items-center border-b border-gray-5 bg-gray-6 p-4 backdrop-blur',
        sticky && 'sticky top-0'
      )}
    >
      {backButton && (
        <button
          className="mr-4 flex size-8 shrink-0 items-center justify-center rounded-full bg-gray-5"
          title="Navigate back"
          aria-label="Navigate one page back"
          onClick={() => router.back()}
        >
          <ArrowLongLeftIcon className="size-4" />
        </button>
      )}

      <div className="mx-auto flex w-full max-w-screen-lg items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-4">
          <Avatar width={44} height={44} as="Image" />
          Dominik Rubröder
        </Link>

        <div className="flex items-center gap-2">
          <GitHubLink className="size-5 text-gray transition hover:text-theme-contrary" />
          <LinkedInLink />
        </div>
      </div>
    </div>
  );
}
