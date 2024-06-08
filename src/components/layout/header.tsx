import React from 'react';
import Avatar from '@/components/ui/avatar';
import GitHubLink from '@/components/sections/social-section/github-link';
import LinkedinLink from '@/components/ui/links/linkedin-link';

export default function Header() {
  return (
    <header className="mx-auto flex max-w-screen-xl items-center justify-between gap-4 border-b bg-gray-6 px-4 py-3 md:py-4">
      <div className="flex items-center gap-4">
        <Avatar width={56} height={56} as="Image" />
        <h1>Dominik Rubröder UX Engineer @ mediawave</h1>
      </div>

      <div className="flex items-center gap-2">
        <GitHubLink className="size-6 text-gray-2 transition hover:text-theme-contrary" />
        <LinkedinLink className="size-6 text-gray-2 transition hover:text-theme-contrary" />
      </div>
    </header>
  );
}
