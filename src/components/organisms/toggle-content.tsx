'use client';

import { ReactNode, useState } from 'react';
import { Button } from '@/components/atoms/button';
import { MinusIcon, PlusIcon } from '@heroicons/react/16/solid';

export function ToggleContent({
  label,
  children
}: {
  label?: ReactNode;
  children: ReactNode;
}) {
  const [show, setShow] = useState<boolean>(false);
  return (
    <div className="space-y-8">
      <div className="flex items-center gap-2">
        <Button
          variant="primary"
          onClick={() => setShow((prevState) => !prevState)}
        >
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
            variant="secondary"
            onClick={() => setShow((prevState) => !prevState)}
          >
            {label}
          </Button>
        )}
      </div>

      {show && <div className="animate-fade-up-1rem">{children}</div>}
    </div>
  );
}
