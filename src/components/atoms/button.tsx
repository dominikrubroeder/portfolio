import { HTMLAttributeAnchorTarget, ReactNode } from 'react';
import Link from 'next/link';

import { cn } from '@/lib/utils';

export function Button({
  variant = 'contained',
  size = 'medium',
  href,
  target,
  className,
  children,
  ...rest
}: {
  variant?: 'contained' | 'ghost' | 'link';
  size?: 'tiny' | 'small' | 'medium' | 'large';
  className?: string;
  href?: string;
  target?: HTMLAttributeAnchorTarget;
  children: ReactNode;
} & React.HTMLAttributes<HTMLButtonElement | HTMLAnchorElement>) {
  const classNames = cn(
    'group [&>svg]:shrink-0 decoration-none relative inline-flex shrink-0 items-center justify-center transition-all',
    variant === 'contained' &&
      'interactive min-h-11 min-w-11 rounded-2xl bg-primary text-white hover:rounded-xl hover:bg-primary-hover',
    variant === 'ghost' &&
      "interactive min-h-11 min-w-11 relative z-10 rounded-2xl after:absolute after:inset-0 after:-z-10 after:scale-75 after:rounded-lg after:bg-muted after:opacity-0 after:transition after:content-[''] hover:text-muted-foreground hover:after:scale-100 hover:after:rounded-xl hover:after:opacity-100 group-hover:text-muted-foreground group-hover:after:scale-100 group-hover:after:rounded-xl group-hover:after:opacity-100",
    variant === 'link' && 'text-primary hover:text-primary-hover',
    size === 'tiny' && 'text-xs px-1 gap-2 [&>svg]:size-3',
    size === 'small' && 'text-sm px-2 gap-2 [&>svg]:size-3',
    size === 'medium' && 'text-base px-3 gap-2 [&>svg]:size-4',
    size === 'large' && 'text-lg px-3 gap-3 [&>svg]:size-5',
    className
  );

  if (href && (href.includes('mailto') || href.includes('tel'))) {
    return (
      <a
        {...rest}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classNames}
      >
        {children}
      </a>
    );
  }

  if (href)
    return (
      <Link
        {...rest}
        href={href}
        target={href.includes('https') ? '_blank' : target}
        className={classNames}
      >
        {children}
      </Link>
    );

  return (
    <button {...rest} className={classNames}>
      {children}
    </button>
  );
}
