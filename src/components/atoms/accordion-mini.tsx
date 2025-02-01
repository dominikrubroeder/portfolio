'use client';

import { ReactNode, useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import { clsx } from 'clsx';

export default function AccordionMini({
  title,
  children
}: {
  title: string;
  children: ReactNode;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <div
        className="flex interactive cursor-pointer items-center justify-between gap-4 rounded-xl py-2 transition-all select-none hover:bg-muted hover:px-3"
        title="Open accordion to see more content"
        aria-label="Open accordion to see more content"
        onClick={() => setOpen((prevState) => !prevState)}
      >
        <h3 className="font-bold text-foreground">{title}</h3>

        <ChevronDownIcon
          className={clsx(
            'h-4 w-4 text-muted-foreground transition',
            open ? '-rotate-90' : 'rotate-0'
          )}
        />
      </div>

      {open ? <div className="my-5 animate-fade-up">{children}</div> : null}
    </div>
  );
}
