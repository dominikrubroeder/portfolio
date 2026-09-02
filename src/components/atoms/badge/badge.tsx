'use client';

import { cn } from '@/lib/utils';

import type { BadgeProps } from '@/components/atoms/badge';
import { useTheme } from '@/components/organisms/theme';

export function Badge({
  variant = 'primary',
  size = 'md',
  className,
  children,
  ...rest
}: BadgeProps & React.HTMLAttributes<HTMLDivElement>) {
  const { theme } = useTheme();

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
        theme.key === 'wireframe' && 'rounded-none',
        className
      )}
      {...rest}
    >
      {children}
    </div>
  );
}
