import type { ReactNode } from 'react';

import { ArrowUpRightIcon } from '@heroicons/react/16/solid';

import { cn } from '@/lib/utils';
import { ColorProp, SizeProp } from '@/lib/types';

export function ExternalLink({
  href,
  variant = 'underline',
  size = 'md',
  color = 'foreground',
  className,
  showExternalIndicator = true,
  children,
  ...rest
}: {
  href: string;
  variant?: 'underline' | 'text';
  size?: SizeProp;
  color?: ColorProp;
  className?: string;
  showExternalIndicator?: boolean;
  children: ReactNode;
} & React.HTMLAttributes<HTMLAnchorElement>) {
  return (
    <a
      href={href}
      className={cn(
        'group relative font-normal',
        variant === 'underline',
        color === 'primary' && 'text-primary hover:text-primary-hover',
        color === 'foreground' && 'text-foreground',
        color === 'muted' && 'text-muted-foreground hover:text-foreground',
        size === 'xs' && 'text-xs',
        size === 'sm' && 'text-sm',
        size === 'md' && 'text-base',
        size === 'lg' && 'text-lg',
        className
      )}
      target="_blank"
      rel="noopener noreferrer"
      {...rest}
    >
      <span className="rounded px-1 hover:bg-muted active:bg-muted">
        {children}
      </span>

      {showExternalIndicator && (
        <ArrowUpRightIcon
          className={cn('inline-block size-3.5 text-current')}
        />
      )}
    </a>
  );
}
