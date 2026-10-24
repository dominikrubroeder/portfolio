import { cn } from '@/lib/utils';

import type { BaseComponentProps } from '@/lib/types';

// Crop marks in the four corners of the positioned parent. Static, drawn in the accent color. `filter-none` keeps the
// accent in Wireframe too (the grayscale rule would remove it); with the neutral accent the marks are black or white.
// Default: one clean round-capped corner. Wireframe: one uneven pencil stroke that overshoots the corner.
export function CropMark({ className }: { className: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      className={cn('absolute size-16 overflow-visible filter-none', className)}
      aria-hidden="true"
    >
      <path
        d="M0 0H64M0 0V64"
        strokeWidth="4"
        strokeLinecap="round"
        vectorEffect="non-scaling-stroke"
        className="in-data-[theme=wireframe]:hidden"
        style={{ stroke: 'var(--color-primary)' }}
      />
      <g
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        vectorEffect="non-scaling-stroke"
        className="hidden in-data-[theme=wireframe]:block"
        style={{ stroke: 'var(--color-primary)' }}
      >
        <path
          d="M-5 1.5C14 -0.8 30 2.8 46 0.9S58 1.8 63 0.3M1.2 -4.5C-0.7 14 2.5 30 0.6 46S1.9 58 0.2 63"
          vectorEffect="non-scaling-stroke"
        />
      </g>
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
      <div className="sketch-frame absolute inset-x-4 top-19 bottom-11 hidden border-2 border-foreground xl:inset-x-12 xl:top-20 xl:bottom-24" />
      <CropMark className="top-19.5 left-3 xs:left-4 xl:top-20 xl:left-12" />
      <CropMark className="top-19.5 right-3 rotate-90 xs:right-4 xl:right-12" />
      <CropMark className="bottom-11.5 left-3 -rotate-90 xs:left-4 xl:bottom-24 xl:left-12" />
      <CropMark className="right-3 bottom-11.5 rotate-180 xs:right-4 xl:right-12 xl:bottom-24" />
    </div>
  );
}
