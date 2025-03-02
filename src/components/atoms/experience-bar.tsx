'use client';

import { cn } from '@/lib/utils';

import { Knowledge } from '@/components/organisms/tools/types';

export default function ExperienceBar({
  progress,
  className
}: {
  progress: Knowledge;
  className?: string;
}) {
  return (
    <div className={cn('shrink-0 space-y-1', className)}>
      <div className="text-xs">{progress}</div>
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
