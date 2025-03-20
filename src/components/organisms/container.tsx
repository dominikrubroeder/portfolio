import { ReactNode } from 'react';
import { cn } from '@/lib/utils';
import { HTMLTag } from '@/lib/types';

export default function Container({
  htmlTag = 'div',
  className,
  children,
  ...rest
}: {
  htmlTag: HTMLTag;
  className?: string;
  children: ReactNode;
} & React.HTMLAttributes<HTMLElement>) {
  const Comp = htmlTag;

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
