'use client';

import type { ReactNode } from 'react';
import { useState } from 'react';

import { ChevronRightIcon } from '@heroicons/react/20/solid';

import { cn } from '@/lib/utils';

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
      <button
        className="flex items-center gap-4"
        onClick={() => setIsOpen((previousState) => !previousState)}
      >
        <ChevronRightIcon
          className={cn(
            'size-5 shrink-0 text-primary transition',
            isOpen && 'rotate-90'
          )}
        />
        <p>{title}</p>
      </button>

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
