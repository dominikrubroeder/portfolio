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
  minimizeSpacing?: boolean;
  className?: string;
  children: ReactNode;
}) {
  return (
    <div
      className={cn(
        'flex flex-wrap items-center gap-2',
        stretchButtons &&
          '[&>a]:flex-1 sm:[&>a]:flex-none [&>button]:flex-1 sm:[&>button]:flex-none',
        minimizeSpacing && 'gap-0 -space-x-1',
        className
      )}
    >
      {children}
    </div>
  );
}
