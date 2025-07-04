import type { ReactNode } from 'react';

import { cn } from '@/lib/utils';

export function Tooltip({
  text,
  position,
  children
}: {
  text: ReactNode;
  position: 'left' | 'right' | 'top' | 'bottom';
  children: ReactNode;
}) {
  return (
    <div className="group relative">
      <span
        className={cn(
          'invisible absolute z-max w-max max-w-sm rounded border bg-muted px-2 opacity-0 group-hover:visible group-hover:opacity-100',
          position === 'top' &&
            '-top-10 left-1/2 -translate-x-1/2 group-hover:-top-8',
          position === 'bottom' &&
            '-bottom-10 left-1/2 -translate-x-1/2 group-hover:-bottom-8',
          position === 'right' && 'top-1/2 right-full -translate-y-1/2',
          position === 'left' && 'top-1/2 left-full -translate-y-1/2'
        )}
      >
        {text}
      </span>
      {children}
    </div>
  );
}
