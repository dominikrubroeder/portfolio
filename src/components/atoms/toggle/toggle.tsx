'use client';

import { useCallback, useState } from 'react';
import { cn } from '@/lib/utils';

export default function Toggle({
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
  const [isEnabled, setIsEnabled] = useState(enabled);

  const handleOnClick = useCallback(() => {
    setIsEnabled((prevState) => !prevState);
    onClick ? onClick() : null;
  }, []);

  return (
    <div
      className={cn(
        'flex cursor-pointer select-none items-center gap-2',
        className
      )}
      onClick={handleOnClick}
    >
      {label && <span>{label}</span>}

      <div
        className={cn(
          'relative flex h-8 w-14 items-center rounded-full px-1 transition',
          isEnabled ? 'bg-primary' : 'bg-muted'
        )}
      >
        <span
          className={cn(
            'absolute size-6 rounded-full bg-white transition',
            isEnabled ? 'translate-x-full' : 'translate-x-0'
          )}
        ></span>
      </div>
    </div>
  );
}
