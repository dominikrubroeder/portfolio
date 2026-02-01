'use client';

import { StarIcon } from '@heroicons/react/24/solid';

import { cn } from '@/lib/utils';

import type { KnowledgeLevel } from '@/components/organisms/tools/types';
import { useTheme } from '@/components/organisms/theme';

export function KnowledgeBar({
  progress,
  hideFavoriteMarker = false,
  className
}: {
  progress: KnowledgeLevel;
  hideFavoriteMarker?: boolean;
  className?: string;
}) {
  const { shouldAnimate } = useTheme();

  return (
    <div className={cn('flex shrink-0 gap-2', className)}>
      {!hideFavoriteMarker && progress === 'Daily' && (
        <StarIcon className="size-5 text-primary" />
      )}

      <div className="shrink-0 space-y-1">
        <div className="relative flex gap-1 text-xs">{progress}</div>

        <div className="relative h-2 w-18 overflow-hidden rounded-full bg-muted transition group-hover:bg-muted-hover sm:w-24">
          <span
            className={cn(
              'absolute top-0 left-0 h-full rounded-full border-0 bg-primary',
              shouldAnimate && 'transition',
              progress === 'Not started' && 'w-0',
              progress === 'Used' && 'w-1/4',
              progress === 'Experienced' && 'w-1/2',
              progress === 'Professional' && 'w-3/4',
              progress === 'Daily' && 'w-full'
            )}
          />
        </div>
      </div>
    </div>
  );
}
