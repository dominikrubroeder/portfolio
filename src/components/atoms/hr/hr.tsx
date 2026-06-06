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
        'block h-1 min-w-32',
        variant === 'full-width' && 'w-full',
        variant !== 'full-width' && 'mx-auto',
        variant === 'container-readable' && 'sm:max-w-(--container-readable)',
        variant === 'container' && 'sm:max-w-(--container)',
        className
      )}
    />
  );
}
