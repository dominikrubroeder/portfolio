'use client';

import { useCallback, useState } from 'react';

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
  const [isEnabled, setIsEnabled] = useState<boolean | undefined>(enabled);

  const handleOnClick = useCallback(() => {
    setIsEnabled((previousState) => !previousState);
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
          isEnabled ? 'bg-primary' : 'bg-muted-hover'
        )}
      >
        <span
          className={cn(
            'absolute size-6 interactive rounded-full bg-primary-foreground transition',
            isEnabled ? 'translate-x-full' : 'translate-x-0'
          )}
        ></span>
      </div>
    </div>
  );
}
