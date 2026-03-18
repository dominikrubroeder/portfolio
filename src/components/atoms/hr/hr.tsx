import { cn } from '@/lib/utils';
import { HrProps } from '@/components/atoms/hr/types';
import type { BaseComponentProps } from '@/lib/types';

export function Hr({
  variant = 'md',
  className
}: HrProps & BaseComponentProps) {
  return (
    <hr
      className={cn(
        'block h-1 w-full',
        variant === 'md' && 'mx-auto sm:max-w-(--readable-container)',
        className
      )}
    />
  );
}
