import { BaseComponentProps } from '@/lib/types';
import { cn } from '@/lib/utils';

export function SvgTriangle({
  id,
  triangleClassName,
  className
}: { triangleClassName?: string } & BaseComponentProps) {
  return (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      id={id}
      className={cn('size-8', className)}
    >
      <polygon
        points="16,0 32,32 0,32"
        className={cn('fill-primary', triangleClassName)}
      />
    </svg>
  );
}
