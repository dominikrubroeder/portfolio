'use client';

import { ReactNode } from 'react';
import { useLiveEdit } from '@/components/organisms/live-edit';
import { cn } from '@/lib/utils';

export function LiveEditContainer({
  componentName,
  children
}: {
  componentName: string;
  children: ReactNode;
}) {
  const { liveEditEnabled, liveEditElement, setLiveEditElement } =
    useLiveEdit();

  return (
    <div
      className={cn(
        liveEditEnabled &&
          'relative mx-auto w-max max-w-full interactive overflow-visible rounded border hover:border-primary',
        componentName === liveEditElement?.name && 'border-primary'
      )}
      onClick={() =>
        setLiveEditElement({
          id: componentName.toLowerCase(),
          name: componentName
        })
      }
    >
      {children}
    </div>
  );
}
