'use client';

import React, { useState } from 'react';
import { EllipsisVerticalIcon } from '@heroicons/react/20/solid';
import { Button } from '@/components/atoms/button';
import { GithubLogo, LinkedinLogo } from '@/components/atoms/logo';
import { cn } from '@/lib/utils';

export function HeaderMenu() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="relative sm:hidden">
      <Button
        variant="ghost"
        onClick={() => setIsOpen((prevState) => !prevState)}
      >
        <EllipsisVerticalIcon
          className={cn('transition', isOpen ? 'rotate-90' : 'rotate-0')}
        />
        <span className="sr-only">Open menu</span>
      </Button>

      {isOpen && (
        <div className="fixed top-20 right-0 left-0 z-50 w-full animate-fade-down-1rem border-b bg-background px-4 pt-0 pb-3">
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
      )}
    </div>
  );
}
