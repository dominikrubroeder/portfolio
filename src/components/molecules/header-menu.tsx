'use client';

import { useState } from 'react';

import { EllipsisVerticalIcon } from '@heroicons/react/20/solid';

import { cn } from '@/lib/utils';

import {
  Button,
  ContactButton,
  GitHubButton,
  LinkedInButton
} from '@/components/atoms/button';

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
        <div className="fixed top-20 right-0 left-0 z-50 flex w-full animate-fade-down-1rem flex-wrap gap-2 border-b bg-background px-4 pt-0 pb-3">
          <ContactButton />
          <GitHubButton />
          <LinkedInButton />
        </div>
      )}
    </div>
  );
}
