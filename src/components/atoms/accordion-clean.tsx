'use client';

import { cn } from '@/lib/utils';
import { ReactNode, useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';

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
    <div className={cn('max-w-screen-sm space-y-4 sm:mx-auto', className)}>
      <button
        className="flex items-center gap-4"
        onClick={() => setOpen((previousState) => !previousState)}
      >
        <ChevronDownIcon className="size-5 shrink-0 text-primary" />
        <p>{title}</p>
      </button>

      {open && <div className="animate-fadeUp">{children}</div>}
    </div>
  );
}
