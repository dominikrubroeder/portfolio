import type { CSSProperties, ReactNode } from 'react';

import { cn } from '@/lib/utils';

const dotBaseClassName =
  'size-2 shrink-0 rounded-full border-primary bg-primary in-data-[theme=wireframe]:-rotate-12 in-data-[theme=wireframe]:rounded-(--sketch-blob-radius) in-data-[theme=wireframe]:border-[1.5px] in-data-[theme=wireframe]:border-foreground';

const dotClassNames = [
  'animate-dot-bounce-0',
  'animate-dot-bounce-250',
  'animate-dot-bounce-500'
] as const;

export function DotsDivider({
  className,
  alignment = 'vertical',
  animate = true,
  dots = 3,
  delay = 0,
  children
}: {
  className?: string;
  alignment?: 'vertical' | 'horizontal';
  animate?: boolean;
  dots?: 1 | 3;
  delay?: number;
  children?: ReactNode;
}) {
  return (
    <div
      className={cn(
        'grid w-full items-center justify-center gap-3',
        alignment === 'horizontal' && 'grid-flow-col',
        className
      )}
    >
      {dots === 1 ? (
        <div className="peer flex size-4 items-center justify-center">
          <span
            className={cn(dotBaseClassName, animate && dotClassNames[0])}
            style={
              delay
                ? ({ animationDelay: `${delay}ms` } as CSSProperties)
                : undefined
            }
          />
        </div>
      ) : (
        dotClassNames.map((dotClassName) => (
          <span
            key={dotClassName}
            className={cn(dotBaseClassName, animate && dotClassName)}
          />
        ))
      )}

      {children}
    </div>
  );
}
