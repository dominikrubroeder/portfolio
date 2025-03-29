import { ReactNode } from 'react';
import { cn } from '@/lib/utils';
import { HTMLTag } from '@/lib/types';

export function Container({
  tag = 'div',
  className,
  children,
  ...rest
}: {
  tag: HTMLTag;
  className?: string;
  children: ReactNode;
} & React.HTMLAttributes<HTMLElement>) {
  const Comp = tag;

  return (
    <Comp
      className={cn(
        'mx-auto max-w-(--container) scroll-mt-24 px-6 md:scroll-mt-28',
        className
      )}
      {...rest}
    >
      {children}
    </Comp>
  );
}
