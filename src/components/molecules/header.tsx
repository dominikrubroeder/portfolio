import React from 'react';
import Avatar from '@/components/atoms/avatar';
import { Button } from '@/components/atoms/button';
import { GithubLogo, LinkedinLogo } from '@/components/atoms/logo';
import { Container } from '@/components/atoms/container';
import { ExternalLink } from '@/components/atoms/external-link';

export function Header() {
  return (
    <Container
      as="header"
      className="flex items-center justify-between gap-4 py-4 lg:px-4"
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

      <div>
        <Button
          variant="ghost"
          href="https://github.com/dominikrubroeder"
          target="_blank"
          title="Go to GitHub profile of Dominik Rubröder"
          aria-label="Go to GitHub profile of Dominik Rubröder"
          size="large"
        >
          <GithubLogo />
        </Button>

        <Button
          variant="ghost"
          href="https://www.linkedin.com/in/dominik-rubröder-49a63817b"
          target="_blank"
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
