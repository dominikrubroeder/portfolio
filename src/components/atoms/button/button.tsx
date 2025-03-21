import { cn } from '@/lib/utils';
import { HTMLAttributeAnchorTarget, ReactNode } from 'react';
import Link from 'next/link';

export function Button({
  variant,
  href,
  target,
  className,
  children,
  ...rest
}: {
  variant: 'primary' | 'secondary' | 'outline' | 'naked';
  className?: string;
  href?: string;
  target?: HTMLAttributeAnchorTarget;
  children: ReactNode;
} & React.HTMLAttributes<HTMLButtonElement | HTMLAnchorElement>) {
  const classNames = cn(
    'interactive group relative inline-flex min-h-11 min-w-11 shrink-0 items-center justify-center gap-2 p-3 transition',
    variant === 'primary' &&
      'rounded-2xl bg-primary text-white hover:rounded-xl hover:bg-violet-500',
    variant === 'outline' && 'rounded border hover:bg-muted',
    variant === 'secondary' &&
      "relative z-10 rounded-2xl after:absolute after:inset-0 after:-z-10 after:scale-75 after:rounded-lg after:bg-black/6 after:opacity-0 after:transition after:content-[''] hover:text-muted-foreground hover:after:scale-100 hover:after:rounded-xl hover:after:opacity-100 group-hover:text-muted-foreground group-hover:after:scale-100 group-hover:after:rounded-xl group-hover:after:opacity-100",
    className
  );

  if (variant === 'naked') {
    return (
      <button {...rest} className={className}>
        {children}
      </button>
    );
  }

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
