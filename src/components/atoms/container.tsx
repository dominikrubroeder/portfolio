import { ReactNode } from 'react';
import { cn } from '@/lib/utils';
import { HTMLTag } from '@/lib/types';

export function Container({
  as = 'div',
  maxWidth = 'container',
  className,
  children,
  ...rest
}: {
  as?: HTMLTag;
  maxWidth: 'container' | 'readable-container';
  className?: string;
  children: ReactNode;
} & React.HTMLAttributes<HTMLElement>) {
  const Comp = as;

  return (
    <Comp
      className={cn(
        'mx-auto scroll-mt-24 px-4 md:scroll-mt-28 lg:px-0',
        maxWidth === 'container' && 'max-w-(--container)',
        maxWidth === 'readable-container' && 'max-w-(--readable-container)',
        className
      )}
      {...rest}
    >
      {children}
    </Comp>
  );
}
