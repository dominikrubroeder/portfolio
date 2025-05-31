import React from 'react';
import Avatar from '@/components/atoms/avatar';
import { Button } from '@/components/atoms/button';
import { GithubLogo, LinkedinLogo } from '@/components/atoms/logo';
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

        <h2 className="h2 leading-6">
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
        <Button
          variant="ghost"
          href="https://github.com/dominikrubroeder"
          title="Go to GitHub profile of Dominik Rubröder"
          aria-label="Go to GitHub profile of Dominik Rubröder"
          size="large"
        >
          <GithubLogo />
        </Button>

        <Button
          variant="ghost"
          href="https://www.linkedin.com/in/dominik-rubröder-49a63817b"
          title="Go to LinkedIn profile of Dominik Rubröder"
          aria-label="Go to LinkedIn profile of Dominik Rubröder"
          size="large"
        >
          <LinkedinLogo />
        </Button>
      </div>
    </Container>
  );
}
