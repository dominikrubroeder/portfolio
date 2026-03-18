import { BaseComponentProps } from '@/lib/types';
import { cn } from '@/lib/utils';

export function SvgCircle({
  id,
  size = 16,
  circleClassName,
  className
}: { size?: number; circleClassName?: string } & BaseComponentProps) {
  return (
    <svg
      viewBox={`0 0 ${size * 2} ${size * 2}`}
      xmlns="http://www.w3.org/2000/svg"
      id={id}
      className={cn('size-8', className)}
    >
      <circle
        cx={size}
        cy={size}
        r={size}
        className={cn('fill-primary', circleClassName)}
      />
    </svg>
  );
}
