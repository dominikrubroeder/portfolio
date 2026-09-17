import React, { ReactNode } from 'react';
import { cn } from '@/lib/utils';

export function Markup({
  className,
  children
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <span
      className={cn('inline-flex rounded-2xl border bg-muted p-1', className)}
    >
      `{children}`
    </span>
  );
}
