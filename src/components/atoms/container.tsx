import type { ReactNode } from 'react';

import type { HTMLTag } from '@/lib/types';
import { cn } from '@/lib/utils';

export function Container({
  as = 'section',
  size = 'container-readable',
  horizontalPadding,
  animateIn,
  className,
  children,
  ...rest
}: {
  as?: HTMLTag;
  size?: 'container' | 'container-readable';
  horizontalPadding?: boolean;
  animateIn?: boolean;
  className?: string;
  children: ReactNode;
} & React.HTMLAttributes<HTMLElement>) {
  const Comp = as;

  return (
    <Comp
      className={cn(
        'mx-auto scroll-mt-responsive',
        horizontalPadding && 'px-4 lg:px-0',
        animateIn && 'motion-safe:animate-fade-up-1rem',
        size === 'container' && 'max-w-(--container)',
        size === 'container-readable' && 'max-w-(--container-readable)',
        className
      )}
      {...rest}
    >
      {children}
    </Comp>
  );
}
