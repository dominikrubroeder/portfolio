'use client';

import { ReactNode, useEffect, useRef, useState } from 'react';
import { MinusIcon, PlusIcon } from '@heroicons/react/24/outline';

export default function Accordion({
  title,
  children
}: {
  title: ReactNode;
  children: ReactNode;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => center(), [open]);

  const center = () =>
    ref.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });

  return (
    <div ref={ref}>
      <div
        className="mx-auto mb-5 flex cursor-pointer select-none items-center justify-between gap-4 rounded-2xl bg-gray-5 px-4 py-3 text-violet-400"
        onClick={() => setOpen((prevState) => !prevState)}
      >
        <h2>{title}</h2>
        {open && <MinusIcon className="h-4 w-4 text-gray-2" />}
        {!open && <PlusIcon className="h-4 w-4 text-gray-2" />}
      </div>

      {open ? <div className="animate-fadeUp mb-5 p-4">{children}</div> : null}
    </div>
  );
}
