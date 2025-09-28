import type { ReactNode } from 'react';

import { ArrowUpRightIcon } from '@heroicons/react/16/solid';

import { cn } from '@/lib/utils';

export function ExternalLink({
  href,
  variant = 'inline',
  color = 'foreground',
  className,
  children,
  ...rest
}: {
  href: string;
  variant?: 'inline' | 'prominent' | 'unstyled';
  color?: 'primary' | 'muted' | 'foreground';
  className?: string;
  children: ReactNode;
} & React.HTMLAttributes<HTMLAnchorElement>) {
  return (
    <a
      href={href}
      className={cn(
        'inline-flex transition hover:text-primary',
        variant === 'inline' &&
          'mr-1.5 ml-1 underline transition hover:decoration-primary',
        variant === 'prominent' &&
          'relative mx-1 inline-flex items-center gap-1 text-foreground transition',
        color === 'primary' && 'text-primary hover:text-primary-hover',
        color === 'muted' && 'text-muted-foreground hover:text-muted-hover',
        color === 'foreground' && 'text-foreground hover:text-primary-hover',
        className
      )}
      target="_blank"
      rel="noopener noreferrer"
      {...rest}
    >
      {children}

      <span className="relative">
        <ArrowUpRightIcon
          className={cn(
            variant === 'inline' &&
              'absolute -top-1 -right-3 size-3.5 text-current',
            variant === 'prominent' && 'size-4 text-primary',
            variant === 'unstyled' && 'ml-0.5'
          )}
        />
      </span>

      {variant === 'prominent' && (
        <span className="absolute inset-x-0 -bottom-1 h-1 w-full rounded-full bg-primary" />
      )}
    </a>
  );
}
