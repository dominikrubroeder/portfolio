import type { ReactNode } from 'react';

import type { HTMLTag } from '@/lib/types';
import { cn } from '@/lib/utils';

export function Container({
  as = 'div',
  size = 'readable-container',
  className,
  children,
  ...rest
}: {
  as?: HTMLTag;
  size?: 'container' | 'readable-container';
  className?: string;
  children: ReactNode;
} & React.HTMLAttributes<HTMLElement>) {
  const Comp = as;

  return (
    <Comp
      className={cn(
        'mx-auto scroll-mt-24 px-4 md:scroll-mt-28',
        size === 'container' && 'max-w-(--container)',
        size === 'readable-container' && 'max-w-(--readable-container) xl:px-0',
        className
      )}
      {...rest}
    >
      {children}
    </Comp>
  );
}
