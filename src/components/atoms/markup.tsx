import type { ReactNode } from 'react';

import type { HTMLTag } from '@/lib/types';
import { cn } from '@/lib/utils';

export function Markup({
  color = 'neutral',
  size = 'medium',
  as = 'div',
  withBackticks = true,
  className,
  children,
  ...rest
}: {
  color?: 'primary' | 'neutral' | 'muted';
  size?: 'small' | 'medium' | 'large';
  as?: HTMLTag;
  withBackticks?: boolean;
  className?: string;
  children: ReactNode;
} & React.HTMLAttributes<HTMLDivElement>) {
  const Comp = as;

  return (
    <Comp
      className={cn(
        'mx-1 inline-flex rounded border',
        color === 'primary' && 'bg-primary/10 text-primary',
        color === 'neutral' && 'bg-muted text-foreground',
        size === 'small' && 'px-2.5 py-0.5 text-sm',
        size === 'medium' && 'px-1 py-0.5 text-base',
        size === 'large' && 'px-4 py-2',
        className
      )}
      {...rest}
    >
      {withBackticks && '`'}
      {children}
      {withBackticks && '`'}
    </Comp>
  );
}
