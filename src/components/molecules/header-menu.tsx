'use client';

import { useState } from 'react';

import { cn } from '@/lib/utils';

import { EllipsisVerticalIcon } from '@heroicons/react/20/solid';
import {
  Button,
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
        <div className="fixed top-20 right-0 left-0 z-50 w-full animate-fade-down-1rem border-b bg-background px-4 pt-0 pb-3">
          <GitHubButton />
          <LinkedInButton />
        </div>
      )}
    </div>
  );
}
