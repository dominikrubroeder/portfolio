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
        'group inline-flex interactive transition',
        variant === 'inline' && 'mr-2.5 ml-0.5 rounded px-1 hover:bg-muted',
        variant === 'prominent' &&
          'relative mx-1 inline-flex items-center gap-1 text-foreground hover:text-foreground!',
        color === 'primary' && 'text-primary hover:text-primary-hover',
        color === 'muted' && 'text-muted-foreground hover:text-foreground',
        color === 'foreground' && 'text-foreground',
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
              'absolute top-1 -right-4 size-3.5 text-current',
            variant === 'prominent' && 'size-4 text-primary',
            variant === 'unstyled' && 'ml-0.5'
          )}
        />
      </span>

      {variant === 'prominent' && (
        <span className="absolute inset-x-0 -bottom-1 h-1 w-full rounded-full bg-primary group-hover:scale-x-[1.04] group-hover:bg-primary-hover" />
      )}
    </a>
  );
}
