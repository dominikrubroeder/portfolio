'use client';

import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

export function SwipeOnHover({
  initial,
  onHover,
  className
}: {
  initial: ReactNode;
  onHover: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn('', className)}>
      <div className="translate-x-0 opacity-100 transition ease-out group-hover:-translate-x-[1rem] group-hover:opacity-0 peer-hover:-translate-x-[1rem] peer-hover:opacity-0">
        {initial}
      </div>

      <div className="-translate-x-[1rem] opacity-0 transition ease-out group-hover:translate-x-0 group-hover:opacity-100 peer-hover:translate-x-0 peer-hover:opacity-100">
        {onHover}
      </div>
    </div>
  );
}
