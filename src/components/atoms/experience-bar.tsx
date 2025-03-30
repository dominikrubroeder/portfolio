'use client';

import { cn } from '@/lib/utils';

import { Knowledge } from '@/components/organisms/tools/types';
import { StarIcon } from '@heroicons/react/24/solid';

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
          <StarIcon className="absolute top-0 -left-8 size-5 text-primary" />
        )}
        {progress}
      </div>

      <div className="relative h-2 w-24 overflow-hidden rounded-full bg-muted">
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
