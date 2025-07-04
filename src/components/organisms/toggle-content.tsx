'use client';

import type { ReactNode} from 'react';
import { useState } from 'react';

import { MinusIcon, PlusIcon } from '@heroicons/react/16/solid';

import { cn } from '@/lib/utils';

import { Button } from '@/components/atoms/button';

export function ToggleContent({
  label,
  className,
  children
}: {
  label?: ReactNode;
  className?: string;
  children: ReactNode;
}) {
  const [show, setShow] = useState<boolean>(false);

  return (
    <div className={cn('space-y-8', className)}>
      <div className="flex items-center gap-2">
        <Button onClick={() => setShow((prevState) => !prevState)}>
          <span className="sr-only">{show ? 'Hide' : 'Close'}</span>

          <div>
            {show ? (
              <MinusIcon className="size-5" />
            ) : (
              <PlusIcon className="size-5" />
            )}
          </div>
        </Button>

        {label && (
          <Button
            variant="ghost"
            onClick={() => setShow((prevState) => !prevState)}
          >
            {label}
          </Button>
        )}
      </div>

      <div
        className={cn(
          'invisible hidden h-0 opacity-0',
          show && 'visible block h-auto animate-fade-up-1rem opacity-100'
        )}
      >
        {children}
      </div>
    </div>
  );
}
