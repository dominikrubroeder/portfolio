'use client';

import { SunIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';
import { useDragDirectionValue } from '@/hooks';
import { cn } from '@/lib/utils';

export function IOSVerticalControl({
  initialValue = 40
}: {
  initialValue: number;
}) {
  const [value, setValue] = useState<number>(initialValue);

  const drag = useDragDirectionValue({
    axis: 'y',
    maxDistance: 200,
    onDrag: ({ change }) => {
      setValue((current) =>
        Math.ceil(Math.max(0, Math.min(100, current + change.y)))
      );
    }
  });

  return (
    <div
      className="relative inline-flex h-32 w-16 shrink-0 cursor-pointer touch-pan-y items-end justify-center overflow-hidden rounded-full bg-primary/10 py-6"
      {...drag}
    >
      <div
        className="absolute right-0 bottom-0 left-0 bg-primary transition-all"
        style={{ height: `${value}%` }}
        data-value={value}
      />

      <SunIcon
        className={cn(
          'relative z-10 size-6 text-primary-foreground',
          value > 35 ? 'text-primary-foreground' : 'text-primary'
        )}
      />
    </div>
  );
}
