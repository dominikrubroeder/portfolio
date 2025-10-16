'use client';

import type { ReactNode } from 'react';
import { useState } from 'react';

import { ChevronRightIcon } from '@heroicons/react/20/solid';

import { cn } from '@/lib/utils';

import { Button } from '@/components/atoms/button';
import { ButtonGroup } from '@/components/molecules/button-group';

export function Accordion({
  title,
  open,
  offsetInnerContent,
  children,
  className
}: {
  title: ReactNode;
  open?: boolean;
  /** Move inner content slightly to the right */
  offsetInnerContent?: boolean;
  children: ReactNode;
  className?: string;
}) {
  const [isOpen, setIsOpen] = useState(open);

  return (
    <div className={cn('space-y-4', className)}>
      <ButtonGroup className="-ml-2.5 gap-0">
        <Button
          variant="ghost"
          className="text-foreground"
          onClick={() => setIsOpen((previousState) => !previousState)}
        >
          <span className="sr-only">Toggle accordion</span>
          <ChevronRightIcon
            className={cn('text-primary transition', isOpen && 'rotate-90')}
          />
        </Button>

        <Button
          variant="ghost"
          className="text-foreground"
          onClick={() => setIsOpen((previousState) => !previousState)}
        >
          {title}
        </Button>
      </ButtonGroup>

      {isOpen && (
        <div
          className={cn('animate-fade-up-1rem', offsetInnerContent && 'pl-9')}
        >
          {children}
        </div>
      )}
    </div>
  );
}
