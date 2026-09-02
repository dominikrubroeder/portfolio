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
        'group relative items-center px-1 hover:bg-muted active:bg-muted [&_img]:inline-block [&_img]:align-middle [&_svg]:inline-block [&_svg]:align-text-top [&_svg:first-child]:mb-1 [&_svg:first-child]:align-middle [html[data-theme=default]_&]:rounded',
        variant === 'underline',
        color === 'primary' && 'text-primary hover:text-primary-hover',
        color === 'primary-foreground' &&
          'text-primary-foreground hover:text-primary-hover',
        color === 'foreground' && 'text-foreground',
        color === 'muted' && 'text-muted-foreground hover:text-foreground',
        color === 'current' && 'text-current',
        size === 'xs' && 'space-x-0.5 text-xs [&_img]:size-3 [&_svg]:size-3',
        size === 'sm' && 'space-x-0.5 text-sm [&_img]:size-3 [&_svg]:size-3',
        size === 'md' && 'space-x-1 text-base [&_img]:size-4 [&_svg]:size-4',
        size === 'lg' && 'space-x-1 text-lg [&_img]:size-5 [&_svg]:size-5',
        className
      )}
      target="_blank"
      rel="noopener noreferrer"
      title={rest.title || `View ${href}`}
      aria-label={rest['aria-label'] || `Go to ${href} in an external tab`}
      {...rest}
    >
      {children}

      {showExternalIndicator && <ArrowUpRightIcon />}
    </a>
  );
}
