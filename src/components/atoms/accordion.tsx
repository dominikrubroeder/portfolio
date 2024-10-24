'use client';

import { ReactNode, useCallback, useEffect, useRef, useState } from 'react';
import { MinusIcon, PlusIcon } from '@heroicons/react/24/outline';
import { cn } from '@/lib/utils';

export default function Accordion({
  title,
  children,
  restrictHeight,
  className
}: {
  title: ReactNode;
  children: ReactNode;
  focusView?: 'start' | 'center';
  restrictHeight?: boolean;
  className?: string;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  const scrollIntoViewAction = useCallback(
    () =>
      ref.current?.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      }),
    []
  );

  useEffect(() => {
    open ? scrollIntoViewAction() : null;
  }, [open, scrollIntoViewAction]);

  return (
    <div
      ref={ref}
      className={cn('scroll-mt-20 pt-4 md:scroll-mt-24', className)}
    >
      <div
        className="group sticky top-24 z-10 mx-auto flex cursor-pointer select-none items-center justify-between gap-4 overflow-hidden rounded-2xl bg-muted px-4 py-3 leading-[1.6] text-primary transition-all md:relative md:top-0"
        title="Open accordion to see more content"
        aria-label="Open accordion to see more content"
        onClick={() => setOpen((prevState) => !prevState)}
      >
        <h2 className="font-bold">{title}</h2>
        <div className="flex items-center gap-2">
          {open && <MinusIcon className="size-4 text-muted-foreground" />}
          {!open && <PlusIcon className="size-4 text-muted-foreground" />}
        </div>

        <div className="invisible absolute inset-0 -z-10 scale-95 rounded-2xl bg-muted-hover opacity-0 transition group-hover:visible group-hover:scale-100 group-hover:opacity-100" />
      </div>

      {open ? (
        <div
          className={cn(
            'mb-5 animate-fadeUp p-4',
            restrictHeight &&
              'no-scrollbar md:max-h-[60svh] md:overflow-y-auto md:border-b'
          )}
        >
          {children}
        </div>
      ) : null}
    </div>
  );
}
