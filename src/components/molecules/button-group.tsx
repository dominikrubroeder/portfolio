'use client';

import type { ReactNode } from 'react';

import { cn } from '@/lib/utils';
import { useTheme } from '@/components/organisms/theme';

export function ButtonGroup({
  stretchButtons,
  className,
  children
}: {
  stretchButtons?: boolean;
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
        theme.key === 'wireframe' && className?.includes('gap-0') && 'gap-2!',
        className
      )}
    >
      {children}
    </div>
  );
}
