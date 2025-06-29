import { ReactNode } from 'react';

import { cn } from '@/lib/utils';

export function Badge({
  color = 'primary',
  size = 'medium',
  className,
  children,
  ...rest
}: {
  color?: 'primary' | 'neutral';
  size?: 'small' | 'medium' | 'large';
  className?: string;
  children: ReactNode;
} & React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        'inline-flex rounded',
        color === 'primary' && 'bg-primary/10 text-primary',
        color === 'neutral' && 'bg-muted text-foreground',
        size === 'small' && 'px-2.5 py-0.5 text-sm',
        size === 'medium' && 'px-3 py-1 text-base font-bold tracking-wide',
        size === 'large' && 'text-md px-3 py-2 font-bold tracking-wider',
        className
      )}
      {...rest}
    >
      {children}
    </div>
  );
}
