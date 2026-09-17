import type { ReactNode } from 'react';

import type { HTMLTag } from '@/lib/types';
import { cn } from '@/lib/utils';

export function Container({
  as = 'section',
  size = 'container-readable',
  animateIn,
  className,
  children,
  ref,
  ...rest
}: {
  as?: HTMLTag;
  size?: 'container' | 'container-readable' | 'full-width';
  animateIn?: boolean;
  className?: string;
  children: ReactNode;
  ref?: React.Ref<any>;
} & React.HTMLAttributes<HTMLElement>) {
  const Comp = as;

  return (
    <Comp
      ref={ref}
      className={cn(
        'relative z-20 mx-auto scroll-mt-responsive',
        size === 'container' && 'max-w-(--container) px-4',
        size === 'container-readable' && 'max-w-(--container-readable) px-4',
        size === 'full-width' && 'w-full',
        animateIn && 'motion-safe:animate-fade-up-1rem',
        className
      )}
      {...rest}
    >
      {children}
    </Comp>
  );
}
