'use client';

import { ArrowLongLeftIcon } from '@heroicons/react/24/outline';
import Avatar from '@/components/ui/avatar';
import { useRouter } from 'next/navigation';
import GitHubLink from '@/components/sections/social-section/github-link';

export default function SecondaryNavigation() {
  const router = useRouter();

  return (
    <div className="flex items-center p-4">
      <button
        className="mr-4 flex h-8 w-8 items-center justify-center rounded-full bg-gray-5"
        title="Navigate back"
        aria-label="Navigate one page back"
        onClick={() => router.back()}
      >
        <ArrowLongLeftIcon className="h-4 w-4" />
      </button>

      <div className="mx-auto flex w-full max-w-screen-lg items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <Avatar width={44} height={44} />
          Dominik Rubröder
        </div>

        <div>
          <GitHubLink className="h-5 w-5 text-gray transition hover:text-theme-contrary" />
        </div>
      </div>
    </div>
  );
}
