import { cn } from '@/lib/utils';

import type { MarkupProps } from './types';

export function Markup({
  variant = 'foreground',
  size = 'md',
  as = 'div',
  backticks = false,
  className,
  children,
  ...rest
}: MarkupProps & React.HTMLAttributes<HTMLDivElement>) {
  const Comp = as;

  return (
    <Comp
      className={cn(
        'mr-0.5 ml-1 inline-flex rounded border',
        variant === 'primary' && 'text-primary',
        variant === 'foreground' && 'text-foreground',
        variant === 'muted' && 'text-muted-foreground',
        size === 'sm' && 'px-0.5 text-sm',
        size === 'md' && 'px-1 text-base',
        size === 'lg' && 'px-4 py-2 text-lg',
        className
      )}
      {...rest}
    >
      {backticks && '`'}
      {children}
      {backticks && '`'}
    </Comp>
  );
}
