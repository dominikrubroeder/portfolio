import { ReactNode } from 'react';
import { cn } from '@/lib/utils';
import { HTMLTag } from '@/lib/types';

export function Container({
  as = 'div',
  className,
  children,
  ...rest
}: {
  as?: HTMLTag;
  className?: string;
  children: ReactNode;
} & React.HTMLAttributes<HTMLElement>) {
  const Comp = as;

  return (
    <Comp
      className={cn(
        'mx-auto max-w-(--container) scroll-mt-24 px-4 md:scroll-mt-28 lg:px-0',
        className
      )}
      {...rest}
    >
      {children}
    </Comp>
  );
}
