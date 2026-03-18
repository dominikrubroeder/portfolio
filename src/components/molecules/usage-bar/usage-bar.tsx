'use client';

import { StarIcon } from '@heroicons/react/24/solid';

import { cn } from '@/lib/utils';

import type { UsageLevel } from '@/components/organisms/tools/types';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger
} from '@/components/atoms/tooltip/shadcnui/tooltip';
import { InformationCircleIcon } from '@heroicons/react/24/outline';
import { getUsageBarDescription } from '@/components/molecules/usage-bar/helper';

export function UsageBar({
  usageLevel,
  hideFavoriteMarker = false,
  className
}: {
  usageLevel: UsageLevel;
  hideFavoriteMarker?: boolean;
  className?: string;
}) {
  return (
    <div className={cn('flex shrink-0 gap-2', className)}>
      {!hideFavoriteMarker && usageLevel === 'Expert' && (
        <StarIcon className="size-5 text-primary" />
      )}

      <div className="shrink-0 space-y-1">
        <div className="relative flex items-center gap-1 text-xs">
          <span>{usageLevel}</span>
          <Tooltip>
            <TooltipTrigger asChild>
              <button
                className="size-4 rounded-full"
                aria-label="Tooltip about the usage level of the tool or
                  technology"
              >
                <InformationCircleIcon className="size-4" />
              </button>
            </TooltipTrigger>
            <TooltipContent>
              <p className="mb-0">
                {getUsageBarDescription({ usageLevel: usageLevel })}
              </p>
            </TooltipContent>
          </Tooltip>
        </div>

        <div className="relative h-2 w-18 overflow-hidden rounded-full bg-muted group-hover:bg-muted-hover motion-safe:transition sm:w-24">
          <span
            className={cn(
              'absolute top-0 left-0 h-full rounded-full border-0 bg-primary motion-safe:transition',
              usageLevel === 'Aware' && 'w-0',
              usageLevel === 'Basic' && 'w-1/6',
              usageLevel === 'Working' && 'w-1/4',
              usageLevel === 'Applied' && 'w-1/2',
              usageLevel === 'Advanced' && 'w-3/4',
              usageLevel === 'Expert' && 'w-full'
            )}
          />
        </div>
      </div>
    </div>
  );
}
