import type { HTMLAttributes, ReactNode, Ref } from 'react';

import { cn } from '@/lib/utils';

import type { HTMLTag } from '@/lib/types';

export function Container({
  as = 'section',
  size = 'container-readable',
  className,
  children,
  ref,
  ...rest
}: {
  as?: HTMLTag;
  size?: 'container' | 'container-readable' | 'full-width';
  className?: string;
  children: ReactNode;
  ref?: Ref<HTMLDivElement>;
} & HTMLAttributes<HTMLElement>) {
  const Comp = as;

  return (
    <Comp
      ref={ref}
      className={cn(
        'relative z-20 mx-auto scroll-mt-responsive',
        size === 'container' && 'max-w-container px-4 xl:px-0',
        size === 'container-readable' &&
          'max-w-container-readable px-9 xl:px-0',
        size === 'full-width' && 'w-full',
        className
      )}
      {...rest}
    >
      {children}
    </Comp>
  );
}
