import { cn } from '@/lib/utils';

import type { HrProps } from './types';
import type { BaseComponentProps } from '@/lib/types';

export function Hr({
  variant = 'full-width',
  className
}: HrProps & BaseComponentProps) {
  return (
    <hr
      className={cn(
        'block h-1 min-w-32 in-data-[theme=wireframe]:h-0 in-data-[theme=wireframe]:border-t-[0.5rem] in-data-[theme=wireframe]:border-current in-data-[theme=wireframe]:[mask-image:var(--sketch-hr-line)] in-data-[theme=wireframe]:[mask-size:100%_100%]',
        variant === 'full-width' && 'w-full',
        variant !== 'full-width' && 'mx-auto',
        variant === 'container-readable' && 'sm:max-w-(--container-readable)',
        variant === 'container' && 'sm:max-w-(--container)',
        className
      )}
    />
  );
}
