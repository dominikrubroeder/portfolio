'use client';

import { ReactNode, useCallback, useEffect, useRef, useState } from 'react';
import { MinusIcon, PlusIcon } from '@heroicons/react/24/outline';
import { cn } from '@/utils';

export default function Accordion({
  title,
  children,
  focusView = 'center',
  restrictHeight
}: {
  title: ReactNode;
  children: ReactNode;
  focusView?: 'start' | 'center';
  restrictHeight?: boolean;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  const scrollIntoViewAction = useCallback(
    () =>
      ref.current?.scrollIntoView({
        behavior: 'smooth',
        block:
          window.innerWidth > 768 ? (focusView ? focusView : 'center') : 'start'
      }),
    [focusView]
  );

  useEffect(() => {
    open ? scrollIntoViewAction() : null;
  }, [scrollIntoViewAction, open]);

  return (
    <div ref={ref} className="pt-4">
      <div
        className="interactive sticky top-4 z-10 mx-auto flex cursor-pointer select-none items-center justify-between gap-4 rounded-2xl bg-gray-5 px-4 py-3 leading-[1.6] text-accent transition hover:bg-gray-4 md:relative md:top-0"
        title="Open accordion to see more content"
        aria-label="Open accordion to see more content"
        onClick={() => setOpen((prevState) => !prevState)}
      >
        <h2 className="font-bold">{title}</h2>
        <div className="flex items-center gap-2">
          {open && <MinusIcon className="size-4 text-gray-2" />}
          {!open && <PlusIcon className="size-4 text-gray-2" />}
        </div>
      </div>

      {open ? (
        <div
          className={cn(
            'mb-5 animate-fadeUp p-4',
            restrictHeight &&
              'no-scrollbar md:max-h-[60svh] md:overflow-y-auto md:border-b md:border-b-gray-5'
          )}
        >
          {children}
        </div>
      ) : null}
    </div>
  );
}
