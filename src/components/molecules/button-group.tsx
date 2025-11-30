'use client';

import type { ReactNode } from 'react';

import { cn } from '@/lib/utils';
import { useTheme } from '@/components/organisms/theme';

export function ButtonGroup({
  className,
  children
}: {
  className?: string;
  children: ReactNode;
}) {
  const { theme } = useTheme();

  return (
    <div
      className={cn(
        'flex flex-wrap items-center gap-2',
        theme.key === 'wireframe' && className?.includes('gap-0') && '!gap-2',
        className
      )}
    >
      {children}
    </div>
  );
}
