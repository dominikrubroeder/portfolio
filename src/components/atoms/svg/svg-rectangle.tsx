import { BaseComponentProps } from '@/lib/types';
import { cn } from '@/lib/utils';

export function SvgRectangle({
  id,
  rectangleClassName,
  className
}: { rectangleClassName?: string } & BaseComponentProps) {
  return (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      id={id}
      className={cn('size-8', className)}
    >
      <rect
        width="32"
        height="32"
        className={cn('fill-primary', rectangleClassName)}
      />
    </svg>
  );
}
