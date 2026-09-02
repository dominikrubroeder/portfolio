'use client';

import { cn } from '@/lib/utils';
import { useTheme } from '@/components/organisms/theme';

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
  const { theme, shouldAnimate } = useTheme();

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
          shouldAnimate ? 'transition' : 'transition-none',
          isEnabled ? 'bg-primary' : 'bg-muted-hover',
          theme.key === 'wireframe' && 'border bg-background'
        )}
      >
        <span
          className={cn(
            'absolute size-6 interactive rounded-full bg-primary-foreground',
            shouldAnimate ? 'transition' : 'transition-none',
            isEnabled ? 'translate-x-full' : 'translate-x-0',
            theme.key === 'wireframe' && 'border bg-muted',
            theme.key === 'wireframe' && isEnabled && 'bg-primary'
          )}
        />
      </div>
    </div>
  );
}
