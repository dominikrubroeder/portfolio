import React from 'react';

import { Avatar } from '@/components/atoms/avatar';
import {
  ContactButton,
  GitHubButton,
  LinkedInButton
} from '@/components/atoms/button';
import { Container } from '@/components/atoms/container';
import { ExternalLink } from '@/components/atoms/external-link';
import { HeaderMenu } from '@/components/organisms/header/header-menu';
import { ThemeQuickSettings } from '@/components/organisms/theme';

export function Header() {
  return (
    <Container
      as="header"
      size="container"
      horizontalPadding
      className="sticky top-0 z-100 flex items-center justify-between gap-4 border-b bg-background py-4 lg:relative lg:border-none"
    >
      <div className="flex items-center gap-4">
        <Avatar
          className="size-11 lg:size-14"
          width={56}
          height={56}
          as="Link"
        />

        <h1 className="text-base leading-6">
          Dominik Rubröder
          <span className="block font-normal text-muted-foreground">
            <span>UX Design Engineer @</span>
            <ExternalLink
              variant="prominent"
              href="https://www.mediawave.de"
              title="Open mediawave commerce GmbH website"
              aria-label="Open mediawave commerce GmbH website"
            >
              mediawave
            </ExternalLink>
          </span>
        </h1>
      </div>

      <HeaderMenu />

      <div className="hidden lg:flex lg:items-center lg:gap-4">
        <ThemeQuickSettings animateOut={true} />

        <div>
          <GitHubButton />
          <LinkedInButton />
        </div>

        <ContactButton
          iconPosition="right"
          buttonProps={{ variant: 'contained' }}
        />
      </div>
    </Container>
  );
}
