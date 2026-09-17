import { BaseComponentProps } from '@/lib/types';
import { cn } from '@/lib/utils';

export function SvgArrow({
  id,
  pointLeft = false,
  strokeWidth = 2,
  arrowClassName,
  className
}: {
  pointLeft?: boolean;
  strokeWidth?: number;
  arrowClassName?: string;
} & BaseComponentProps) {
  return (
    <div
      id={id}
      className={cn(
        'flex w-full items-center',
        pointLeft && 'flex-row-reverse',
        className
      )}
    >
      <svg
        viewBox="0 0 100 2"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        className="h-0.5 flex-1"
      >
        <line
          x1="0"
          y1="1"
          x2="100"
          y2="1"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
          className={cn('stroke-primary', arrowClassName)}
        />
      </svg>
      <svg
        viewBox="0 0 16 32"
        xmlns="http://www.w3.org/2000/svg"
        className={cn('-ml-2 h-4 w-2 shrink-0', pointLeft && 'scale-x-[-1]')}
      >
        <path
          d="M1,2 L14,16 L1,30"
          fill="none"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          vectorEffect="non-scaling-stroke"
          className={cn('stroke-primary', arrowClassName)}
        />
      </svg>
    </div>
  );
}
