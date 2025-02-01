'use client';

import { cn } from '@/lib/utils';
import { ReactNode, useState } from 'react';
import { ChevronRightIcon } from '@heroicons/react/20/solid';

export default function AccordionClean({
  title,
  children,
  className
}: {
  title: ReactNode;
  children: ReactNode;
  className?: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={cn('max-w-(--breakpoint-sm) space-y-4 sm:mx-auto', className)}
    >
      <button
        className="flex items-center gap-4"
        onClick={() => setOpen((previousState) => !previousState)}
      >
        <ChevronRightIcon
          className={cn(
            'size-5 shrink-0 text-primary transition',
            open && 'rotate-90'
          )}
        />
        <p>{title}</p>
      </button>

      {open && <div className="animate-fade-up">{children}</div>}
    </div>
  );
}
