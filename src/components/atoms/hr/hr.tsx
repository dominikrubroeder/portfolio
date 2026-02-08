import { cn } from '@/lib/utils';
import { HrProps } from '@/components/atoms/hr/types';
import type { BaseProps } from '@/lib/types';

export function Hr({ variant = 'md', className }: HrProps & BaseProps) {
  return (
    <hr
      className={cn(
        'mx-auto inline-block h-1 w-full',
        variant === 'md' && 'sm:max-w-(--readable-container)',
        className
      )}
    />
  );
}
