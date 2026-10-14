'use client';

import { cn } from '@/lib/utils';

export function Toggle({
  label,
  isEnabled,
  onClick,
  stretchWidth,
  className
}: {
  label?: string;
  isEnabled: boolean;
  onClick: () => void;
  stretchWidth?: boolean;
  className?: string;
}) {
  return (
    <div
      className={cn(
        'flex cursor-pointer items-center gap-2 select-none',
        !isEnabled && 'interactive',
        stretchWidth && 'justify-between',
        className
      )}
      onClick={onClick}
    >
      {label && <span className="text-foreground">{label}</span>}

      <div
        className={cn(
          'relative flex h-8 w-14 items-center rounded-full px-1',
          'transition in-data-[theme-animate=false]:transition-none',
          isEnabled ? 'bg-primary' : 'bg-muted-hover',
          'in-data-[theme=wireframe]:border in-data-[theme=wireframe]:bg-background'
        )}
      >
        <span
          className={cn(
            'absolute size-6 interactive rounded-full bg-primary-foreground',
            'transition in-data-[theme-animate=false]:transition-none',
            isEnabled ? 'translate-x-full' : 'translate-x-0',
            'in-data-[theme=wireframe]:border in-data-[theme=wireframe]:bg-muted',
            isEnabled && 'in-data-[theme=wireframe]:bg-primary'
          )}
        />
      </div>
    </div>
  );
}
