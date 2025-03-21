import { cn } from '@/lib/utils';
import { HTMLAttributeAnchorTarget, ReactNode } from 'react';
import Link from 'next/link';

export function Button({
  variant,
  children,
  className,
  asLink,
  href,
  title,
  ariaLabel,
  target,
  disabled,
  id,
  onClick
}: {
  variant: 'primary' | 'secondary' | 'outline';
  children: ReactNode;
  className?: string;
  asLink?: boolean;
  href?: string;
  title?: string;
  ariaLabel?: string;
  target?: HTMLAttributeAnchorTarget;
  disabled?: boolean;
  id?: string;
  onClick?: () => void;
}) {
  const classNames = cn(
    'interactive group relative inline-flex min-h-11 min-w-11 shrink-0 items-center justify-center gap-2 p-3 transition',
    variant === 'primary' &&
      'rounded-2xl bg-primary text-white hover:rounded-xl hover:bg-violet-500',
    variant === 'outline' && 'rounded border hover:bg-muted',
    variant === 'secondary' &&
      "relative z-10 rounded-2xl after:absolute after:inset-0 after:-z-10 after:scale-75 after:rounded-lg after:bg-black/6 after:opacity-0 after:transition after:content-[''] hover:text-muted-foreground hover:after:scale-100 hover:after:rounded-xl hover:after:opacity-100 group-hover:text-muted-foreground group-hover:after:scale-100 group-hover:after:rounded-xl group-hover:after:opacity-100",
    className
  );

  if (href && (href.includes('mailto') || href.includes('tel'))) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classNames}
        id={id}
      >
        {children}
      </a>
    );
  }

  if (asLink && href)
    return (
      <Link
        href={href}
        className={classNames}
        target={href.includes('https') ? '_blank' : target}
        title={title}
        aria-label={ariaLabel}
        id={id}
      >
        {children}
      </Link>
    );

  return (
    <button
      className={classNames}
      title={title}
      aria-label={ariaLabel}
      disabled={disabled}
      onClick={onClick}
      id={id}
    >
      {children}
    </button>
  );
}
