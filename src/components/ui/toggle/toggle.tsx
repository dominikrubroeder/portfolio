'use client';

import { cn } from '@/lib/utils';

export function Toggle({
  label,
  ariaLabel,
  isEnabled,
  onClick,
  stretchWidth,
  className
}: {
  label?: string;
  /** Accessible name when there is no visible `label` (for example a label next to the toggle). */
  ariaLabel?: string;
  isEnabled: boolean;
  onClick: () => void;
  stretchWidth?: boolean;
  className?: string;
}) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={isEnabled}
      aria-label={label ? undefined : ariaLabel}
      className={cn(
        'flex min-h-11 cursor-pointer items-center gap-2 text-left select-none',
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
          'transition in-data-[theme-animations=off]:transition-none',
          isEnabled ? 'bg-primary' : 'bg-muted-hover',
          'in-data-[theme=wireframe]:border in-data-[theme=wireframe]:border-foreground in-data-[theme=wireframe]:bg-background'
        )}
      >
        <span
          className={cn(
            'absolute size-6 interactive rounded-full bg-primary-foreground',
            'transition in-data-[theme-animations=off]:transition-none',
            isEnabled ? 'translate-x-full' : 'translate-x-0',
            'in-data-[theme=wireframe]:border in-data-[theme=wireframe]:border-foreground in-data-[theme=wireframe]:bg-muted',
            isEnabled && 'in-data-[theme=wireframe]:bg-primary'
          )}
        />
      </div>
    </button>
  );
}
