'use client';

import type { ReactNode } from 'react';
import { useState } from 'react';

import { MinusIcon, PlusIcon } from '@heroicons/react/16/solid';

import { cn } from '@/lib/utils';

import { Button, ButtonProps } from '@/components/atoms/button';
import { ButtonGroup } from '@/components/molecules/button-group';

export function ToggleContent({
  label,
  buttonPropsFirst,
  buttonPropsSecond,
  className,
  children
}: {
  label?: ReactNode;
  buttonPropsFirst?: Partial<Pick<ButtonProps, 'variant'>>;
  buttonPropsSecond?: ButtonProps;
  className?: string;
  children: ReactNode;
}) {
  const [show, setShow] = useState<boolean>(false);

  return (
    <div className={cn('space-y-8', className)}>
      <ButtonGroup>
        <Button
          onClick={() => setShow((prevState) => !prevState)}
          {...buttonPropsFirst}
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

        <Button
          variant="ghost"
          onClick={() => setShow((prevState) => !prevState)}
          {...buttonPropsSecond}
        >
          {label}
        </Button>
      </ButtonGroup>

      <div
        className={cn(
          'invisible hidden h-0 opacity-0 motion-safe:animate-fade-up-1rem',
          show && 'visible block h-auto opacity-100'
        )}
      >
        {children}
      </div>
    </div>
  );
}
