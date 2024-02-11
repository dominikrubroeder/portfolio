'use client';

import { ReactNode, useCallback, useEffect, useRef, useState } from 'react';
import { MinusIcon, PlusIcon } from '@heroicons/react/24/outline';

export default function Accordion({
  title,
  children,
  focusView = 'center'
}: {
  title: ReactNode;
  children: ReactNode;
  focusView?: 'start' | 'center';
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  const center = useCallback(
    () => ref.current?.scrollIntoView({ behavior: 'smooth', block: focusView }),
    []
  );

  useEffect(() => {
    open ? center() : null;
  }, [center, open]);

  return (
    <div ref={ref}>
      <div
        className="mx-auto mb-5 flex cursor-pointer select-none items-center justify-between gap-4 rounded-2xl bg-gray-5 px-4 py-3 text-violet-400"
        onClick={() => setOpen((prevState) => !prevState)}
      >
        <h2>{title}</h2>
        <div className="flex items-center gap-2">
          {open && <MinusIcon className="h-4 w-4 text-gray-2" />}
          {!open && <PlusIcon className="h-4 w-4 text-gray-2" />}
        </div>
      </div>

      {open ? <div className="mb-5 animate-fadeUp p-4">{children}</div> : null}
    </div>
  );
}
