'use client';

import { useState } from 'react';
import { CheckIcon } from '@heroicons/react/16/solid';
import { cn } from '@/lib/utils';
import { DesignDrawer } from '@/components/organisms/design-drawer';

export function DesignShowcase() {
  const [state, setState] = useState<{
    enabled: boolean;
    color: 'primary' | 'neutral' | undefined;
  }>({
    enabled: false,
    color: 'neutral'
  });

  return (
    <span
      className={cn(
        'group relative inline-block border transition hover:border-primary hover:bg-muted sm:mx-4',
        state.color === 'primary' && 'text-primary',
        state.color === 'neutral' && 'text-foreground'
      )}
      onClick={() =>
        setState((prevState) => {
          return { ...prevState, enabled: !state.enabled };
        })
      }
    >
      design
      <span className="absolute -top-1 -left-1 size-2 bg-primary group-hover:animate-spin" />
      <span className="absolute -top-1 -right-1 size-2 bg-primary group-hover:animate-spin" />
      <span className="absolute -bottom-1 -left-1 size-2 bg-primary group-hover:animate-spin" />
      <span className="absolute -right-1 -bottom-1 size-2 bg-primary group-hover:animate-spin" />
      <DesignDrawer className="absolute -right-3.5 -bottom-3 text-primary sm:hidden" />
      <div className="absolute -top-10 left-1/2 flex -translate-1/2 gap-2">
        <span
          className="flex size-8 shrink-0 interactive items-center justify-center rounded-full border bg-foreground hover:border-2 hover:border-primary"
          onClick={() =>
            setState((prevState) => {
              return { ...prevState, color: 'neutral' };
            })
          }
        >
          {state.color === 'neutral' && (
            <CheckIcon className="size-4 shrink-0 text-primary-foreground" />
          )}
        </span>
        <span
          className="flex size-8 shrink-0 interactive items-center justify-center rounded-full border bg-primary hover:border-2 hover:border-primary"
          onClick={() =>
            setState((prevState) => {
              return { ...prevState, color: 'primary' };
            })
          }
        >
          {state.color === 'primary' && (
            <CheckIcon className="size-4 shrink-0 text-primary-foreground" />
          )}
        </span>

        <DesignDrawer className="hidden text-muted-foreground sm:flex" />
      </div>
      {state.color && (
        <span className="absolute top-1.5 right-1 text-[.6rem]">
          <span className="hidden sm:inline-block">Color:</span> {state.color}
        </span>
      )}
    </span>
  );
}
