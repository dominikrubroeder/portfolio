import React from 'react';
import Avatar from '@/components/atoms/avatar';
import Link from '@/components/atoms/link';
import { Button } from '@/components/atoms/button';
import { GithubLogo, LinkedinLogo } from '@/components/atoms/logo';
import { Container } from '@/components/atoms/container';

export function Header() {
  return (
    <header id="header">
      <Container className="flex items-center justify-between gap-4 py-4">
        <div className="flex items-center gap-4">
          <Avatar
            className="size-11 sm:size-14"
            width={56}
            height={56}
            as="Link"
          />

          <h1 className="space-y-1 text-wrap">
            <p className="leading-none font-bold text-foreground">
              Dominik Rubröder
            </p>
            <p className="space-x-0.5 text-xs xs:text-base md:text-muted-foreground">
              <span>UX Design Engineer @</span>
              <Link
                href="https://www.mediawave.de"
                title="Open mediawave commerce GmbH website"
                aria-label="Open mediawave commerce GmbH website"
              >
                mediawave
              </Link>
            </p>
          </h1>
        </div>

        <div>
          <Button
            variant="secondary"
            href="https://github.com/dominikrubroeder"
            target="_blank"
            title="Go to GitHub profile of Dominik Rubröder"
            aria-label="Go to GitHub profile of Dominik Rubröder"
            size="large"
          >
            <GithubLogo />
          </Button>

          <Button
            variant="secondary"
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
    </header>
  );
}
