'use client';

import type { ReactNode } from 'react';

import { cn } from '@/lib/utils';

export function ButtonGroup({
  stretchButtons,
  minimizeSpacing,
  className,
  children
}: {
  stretchButtons?: boolean;
  stretchButtonsOnMobile?: boolean;
  minimizeSpacing?: boolean;
  className?: string;
  children: ReactNode;
}) {
  return (
    <div
      className={cn(
        'flex flex-wrap items-center gap-2',
        stretchButtons &&
          'flex-col sm:flex-row [&>a]:w-full [&>a]:flex-1 sm:[&>a]:w-auto sm:[&>a]:flex-none [&>button]:w-full [&>button]:flex-1 sm:[&>button]:w-auto sm:[&>button]:flex-none',
        minimizeSpacing && 'gap-0 -space-x-1',
        className
      )}
    >
      {children}
    </div>
  );
}
