import { cn } from '@/lib/utils';

import type { BadgeProps } from '@/components/atoms/badge';

export function Badge({
  variant = 'primary',
  size = 'md',
  className,
  children,
  ...rest
}: BadgeProps & React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        'inline-flex w-max shrink-0 self-start rounded-full',
        variant === 'primary' &&
          'bg-primary/10 text-primary-hover dark:text-primary',
        variant === 'foreground' && 'bg-muted text-foreground',
        variant === 'muted' && 'bg-muted text-muted-foreground',
        size === 'sm' && 'px-2 py-0.5 text-sm',
        size === 'md' && 'px-3 py-1 text-base',
        size === 'lg' && 'text-md px-3 py-2',
        className
      )}
      {...rest}
    >
      {children}
    </div>
  );
}
