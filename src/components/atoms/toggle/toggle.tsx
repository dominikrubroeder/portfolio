'use client';

import { useCallback } from 'react';

import { cn } from '@/lib/utils';

export function Toggle({
  label,
  className,
  enabled,
  onClick
}: {
  label?: string;
  className?: string;
  enabled?: boolean;
  onClick?: () => void;
}) {
  const handleOnClick = useCallback(() => {
    onClick ? onClick() : null;
  }, [onClick]);

  return (
    <div
      className={cn(
        'flex cursor-pointer items-center gap-2 select-none',
        className
      )}
      onClick={handleOnClick}
    >
      {label && <span>{label}</span>}

      <div
        className={cn(
          'relative flex h-8 w-14 items-center rounded-full px-1 transition',
          enabled ? 'bg-primary' : 'bg-muted-hover'
        )}
      >
        <span
          className={cn(
            'absolute size-6 rounded-full bg-primary-foreground transition',
            enabled ? 'translate-x-full' : 'translate-x-0'
          )}
        ></span>
      </div>
    </div>
  );
}
