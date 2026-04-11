import { cn } from '@/lib/utils';
import { HrProps } from '@/components/atoms/hr/types';
import type { BaseComponentProps } from '@/lib/types';

export function Hr({
  variant = 'full-width',
  className
}: HrProps & BaseComponentProps) {
  return (
    <hr
      className={cn(
        'block h-1',
        variant === 'full-width' && 'w-full',
        variant === 'contained' && 'mx-auto sm:max-w-(--container-readable)',
        className
      )}
    />
  );
}
