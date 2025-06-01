import React from 'react';
import Avatar from '@/components/atoms/avatar';
import { GitHubButton, LinkedInButton } from '@/components/atoms/button';
import { Container } from '@/components/atoms/container';
import { ExternalLink } from '@/components/atoms/external-link';
import { HeaderMenu } from '@/components/molecules/header-menu';

export function Header() {
  return (
    <Container
      as="header"
      className="sticky top-0 z-max flex items-center justify-between gap-4 border-b bg-background py-4 sm:relative sm:border-none lg:px-4"
    >
      <div className="flex items-center gap-4">
        <Avatar
          className="size-11 sm:size-14"
          width={56}
          height={56}
          as="Link"
        />

        <h2 className="text-base leading-6">
          Dominik Rubröder
          <span className="block space-x-0.5 font-normal text-muted-foreground">
            <span>UX Design Engineer @</span>
            <ExternalLink
              href="https://www.mediawave.de"
              variant="prominent"
              title="Open mediawave commerce GmbH website"
              aria-label="Open mediawave commerce GmbH website"
            >
              mediawave
            </ExternalLink>
          </span>
        </h2>
      </div>

      <HeaderMenu />

      <div className="hidden sm:block">
        <GitHubButton />
        <LinkedInButton />
      </div>
    </Container>
  );
}
