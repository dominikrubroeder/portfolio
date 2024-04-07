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
        className="flex cursor-pointer select-none justify-between gap-4"
        title="Open accordion to see more content"
        aria-label="Open accordion to see more content"
        onClick={() => setOpen((prevState) => !prevState)}
      >
        <h3 className="font-bold text-theme-contrary">{title}</h3>

        <ChevronDownIcon
          className={clsx(
            'h-4 w-4 text-gray-2 transition',
            open ? '-rotate-90' : 'rotate-0'
          )}
        />
      </div>

      {open ? <div className="my-5 animate-fadeUp">{children}</div> : null}
    </div>
  );
}
