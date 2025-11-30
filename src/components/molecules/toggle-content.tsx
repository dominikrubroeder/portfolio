'use client';

import type { ReactNode } from 'react';
import { useState } from 'react';

import { MinusIcon, PlusIcon } from '@heroicons/react/16/solid';

import { cn } from '@/lib/utils';

import { ButtonTextGroup } from '@/components/atoms/button';
import { useTheme } from '@/components/organisms/theme';

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
  const { shouldAnimate } = useTheme();

  return (
    <div className={cn('space-y-8', className)}>
      <ButtonTextGroup
        buttonPropsFirst={{
          children: (
            <>
              <span className="sr-only">{show ? 'Hide' : 'Close'}</span>
              <div>
                {show ? (
                  <MinusIcon className="size-5" />
                ) : (
                  <PlusIcon className="size-5" />
                )}
              </div>
            </>
          ),
          onClick: () => setShow((prevState) => !prevState)
        }}
        buttonPropsSecond={{
          variant: 'ghost',
          children: label,
          onClick: () => setShow((prevState) => !prevState)
        }}
      />

      <div
        className={cn(
          'invisible hidden h-0 opacity-0',
          shouldAnimate && 'animate-fade-up-1rem',
          show && 'visible block h-auto opacity-100'
        )}
      >
        {children}
      </div>
    </div>
  );
}
