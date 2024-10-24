import React from 'react';
import Avatar from '@/components/ui/avatar';
import Link from '@/components/atoms/link';
import Button from '@/components/atoms/button';
import LinkedinIcon from '@/components/ui/svg/linkedin-icon';
import GithubIcon from '@/components/ui/svg/github-icon';

export default function Header() {
  return (
    <header
      id="header"
      className="sticky top-0 z-max mx-auto flex max-w-screen-xl items-center justify-between gap-4 border-b bg-background p-4 sm:py-3 md:relative md:py-4 xl:px-0"
    >
      <div className="flex items-center gap-4">
        <Avatar
          className="size-11 shrink-0 sm:size-14"
          width={56}
          height={56}
          as="Image"
        />

        <h1 className="space-y-1 text-wrap">
          <p className="font-bold leading-none text-foreground">
            Dominik Rubröder
          </p>
          <p className="space-x-1 text-xs xs:text-base md:text-muted-foreground">
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

      <div className="hidden md:flex md:-space-x-1">
        <Button
          variant="secondary"
          href="https://github.com/dominikrubroeder"
          target="_blank"
          title="Go to GitHub profile of Dominik Rubröder"
          aria-label="Go to GitHub profile of Dominik Rubröder"
          asLink
        >
          <GithubIcon />
        </Button>

        <Button
          variant="secondary"
          href="https://www.linkedin.com/in/dominik-rubröder-49a63817b"
          target="_blank"
          title="Go to LinkedIn profile of Dominik Rubröder"
          aria-label="Go to LinkedIn profile of Dominik Rubröder"
          asLink
        >
          <LinkedinIcon />
        </Button>
      </div>
    </header>
  );
}
