'use client';

import { StarIcon } from '@heroicons/react/24/solid';

import { cn } from '@/lib/utils';

import type { Knowledge } from '@/components/organisms/tools/types';

export function ExperienceBar({
  progress,
  hideFavoriteMarker = false,
  className
}: {
  progress: Knowledge;
  hideFavoriteMarker?: boolean;
  className?: string;
}) {
  return (
    <div className={cn('relative shrink-0 space-y-1', className)}>
      <div className="relative flex gap-1 text-xs">
        {!hideFavoriteMarker && progress === 'Daily' && (
          <StarIcon className="absolute top-0 -left-7 size-5 text-primary sm:-left-8" />
        )}
        {progress}
      </div>

      <div className="relative h-2 w-18 overflow-hidden rounded-full bg-muted sm:w-24">
        <span
          className={cn(
            'absolute top-0 left-0 h-full rounded-full border-0 bg-primary transition-all',
            progress === 'Not started' && 'w-0',
            progress === 'Used' && 'w-1/4',
            progress === 'Experienced' && 'w-1/2',
            progress === 'Professional' && 'w-3/4',
            progress === 'Daily' && 'w-full'
          )}
        />
      </div>
    </div>
  );
}
