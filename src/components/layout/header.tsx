import React from 'react';
import Avatar from '@/components/ui/avatar';
import GitHubLink from '@/components/sections/social-section/github-link';
import LinkedinLink from '@/components/ui/links/linkedin-link';

export default function Header() {
  return (
    <header className="mx-auto flex max-w-screen-xl items-center justify-between gap-4 border-b bg-background px-4 py-3 md:py-4">
      <div className="flex items-center gap-4">
        <Avatar width={56} height={56} as="Image" />
        <h1 className="grid gap-2">
          <p className="font-bold leading-none text-foreground">
            Dominik Rubröder
          </p>
          <p className="space-x-1 leading-none">
            <span>UX Design Engineer</span>
            <span>@</span>
            <a href="https://www.mediawave.de" target="_blank">
              mediawave
            </a>
          </p>
        </h1>
      </div>

      <div className="flex -space-x-1">
        <GitHubLink className="size-6" />
        <LinkedinLink className="size-6" />
      </div>
    </header>
  );
}
