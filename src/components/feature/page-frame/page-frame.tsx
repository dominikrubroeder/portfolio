import { cn } from '@/lib/utils';

import type { BaseComponentProps } from '@/lib/types';

// Crop marks in the four corners of the positioned parent. Static, drawn in the accent color.
export function CropMark({ className }: { className: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      className={cn('absolute size-16', className)}
      aria-hidden="true"
    >
      <path
        d="M0 0H64M0 0V64"
        strokeWidth="7"
        strokeLinecap="round"
        vectorEffect="non-scaling-stroke"
        style={{ stroke: 'var(--color-primary)' }}
      />
    </svg>
  );
}

export function PageFrame({ id, className }: BaseComponentProps) {
  return (
    <div
      id={id}
      className={cn('pointer-events-none absolute inset-0', className)}
      aria-hidden="true"
    >
      <CropMark className="top-19 left-4 xl:top-20 xl:left-12" />
      <CropMark className="top-19 right-4 rotate-90 xl:right-12" />
      <CropMark className="bottom-11 left-4 -rotate-90 xl:bottom-24 xl:left-12" />
      <CropMark className="right-4 bottom-11 rotate-180 xl:right-12 xl:bottom-24" />
    </div>
  );
}
