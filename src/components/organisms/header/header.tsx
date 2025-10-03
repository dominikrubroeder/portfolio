import React from 'react';

import { Avatar } from '@/components/atoms/avatar';
import {
  ContactButton,
  GitHubButton,
  LinkedInButton
} from '@/components/atoms/button';
import { ExternalLink } from '@/components/atoms/external-link';
import { HeaderMenu } from '@/components/organisms/header';
import { ThemeQuickSettings } from '@/components/organisms/theme';

export function Header() {
  return (
    <header className="max-w-container sticky top-0 z-100 mx-auto flex h-20 items-center justify-between gap-4 border-b bg-background px-4 lg:relative lg:h-24 lg:border-none">
      <div className="flex items-center gap-4">
        <Avatar
          className="size-11 lg:size-14"
          width={56}
          height={56}
          as="Link"
        />

        <h1 className="w-max text-base leading-6">
          <span className="block w-max">Dominik Rubröder</span>
          <span className="block text-sm font-normal text-muted-foreground lg:text-base">
            <span>UX Design Engineer</span>
            <span className="hidden pr-0.5 pl-1 sm:inline-block">@</span>
            <ExternalLink
              variant="prominent"
              href="https://www.mediawave.de"
              title="Open mediawave commerce GmbH website"
              aria-label="Open mediawave commerce GmbH website"
              className="hidden sm:inline-flex"
            >
              mediawave
            </ExternalLink>
          </span>
        </h1>
      </div>

      <HeaderMenu />

      <div className="hidden lg:flex lg:items-center lg:gap-4">
        <ThemeQuickSettings animateOut={true} />

        <div className="flex items-center">
          <GitHubButton />
          <LinkedInButton />
          <ContactButton
            iconPosition="right"
            buttonProps={{ variant: 'contained', className: 'ml-2' }}
          />
        </div>
      </div>
    </header>
  );
}
