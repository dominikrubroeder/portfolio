import type { ReactNode } from 'react';

import type { BaseProps } from '@/lib/types';
import { cn } from '@/lib/utils';

export function TextDecoration({
  variant = 'underline',
  size = 'md',
  className,
  children
}: {
  variant?: 'underline' | 'highlight';
  size?: 'xs' | 'sm' | 'md' | 'lg';
  className?: string;
  children: ReactNode;
} & BaseProps) {
  return (
    <div className={cn('mx-1 inline-grid', className)}>
      {children}

      {variant === 'underline' && (
        <div
          className={cn(
            'block w-full rounded-full bg-primary',
            size === 'xs' && 'h-1.5',
            size === 'sm' && 'h-2',
            size === 'md' && 'h-3',
            size === 'lg' && 'h-4'
          )}
        />
      )}
    </div>
  );
}
