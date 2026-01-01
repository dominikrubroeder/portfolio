'use client';

import type { ReactNode } from 'react';

import { cn } from '@/lib/utils';
import { useTheme } from '@/components/organisms/theme';

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
  const { theme } = useTheme();

  return (
    <div
      className={cn(
        'flex flex-wrap items-center gap-2',
        stretchButtons &&
          '[&>a]:flex-1 sm:[&>a]:flex-none [&>button]:flex-1 sm:[&>button]:flex-none',
        minimizeSpacing && 'gap-0 -space-x-1',
        theme.key === 'wireframe' && className?.includes('gap-0') && 'gap-2!',
        className
      )}
    >
      {children}
    </div>
  );
}
