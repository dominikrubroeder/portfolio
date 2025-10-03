import type { ReactNode } from 'react';

import type { HTMLTag } from '@/lib/types';
import { cn } from '@/lib/utils';

export function Container({
  as = 'section',
  size = 'readable-container',
  horizontalPadding,
  animateIn,
  className,
  children,
  ...rest
}: {
  as?: HTMLTag;
  size?: 'container' | 'readable-container';
  horizontalPadding?: boolean;
  animateIn?: boolean;
  className?: string;
  children: ReactNode;
} & React.HTMLAttributes<HTMLElement>) {
  const Comp = as;

  return (
    <Comp
      className={cn(
        'mx-auto scroll-mt-24 md:scroll-mt-28',
        horizontalPadding && 'px-4 lg:px-0',
        animateIn && 'animate-fade-up-1rem',
        size === 'container' && 'max-w-(--container)',
        size === 'readable-container' && 'max-w-(--readable-container)',
        className
      )}
      {...rest}
    >
      {children}
    </Comp>
  );
}
