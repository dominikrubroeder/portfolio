import { ReactNode } from 'react';

import { cn } from '@/lib/utils';
import { ArrowUpRightIcon } from '@heroicons/react/16/solid';

export function ExternalLink({
  href,
  variant = 'inline',
  className,
  children,
  ...rest
}: {
  href: string;
  variant?: 'inline' | 'prominent' | 'unstyled';
  className?: string;
  children: ReactNode;
} & React.HTMLAttributes<HTMLAnchorElement>) {
  return (
    <a
      href={href}
      className={cn(
        'inline-flex transition',
        variant === 'inline' &&
          'mr-1.5 ml-1 underline transition hover:decoration-primary',
        variant === 'prominent' &&
          'relative mx-1 inline-flex items-center gap-1 text-foreground transition',
        className
      )}
      target="_blank"
      rel="noopener noreferrer"
      {...rest}
    >
      {children}

      {variant !== 'unstyled' && (
        <span className="relative">
          <ArrowUpRightIcon
            className={cn(
              variant === 'inline' &&
                'absolute -top-1 -right-3 size-3.5 text-current',
              variant === 'prominent' && 'size-4 text-primary'
            )}
          />
        </span>
      )}

      {variant === 'prominent' && (
        <span className="absolute inset-x-0 -bottom-1 h-1 w-full rounded-full bg-primary" />
      )}
    </a>
  );
}
