import { cn } from '@/lib/utils';
import { HTMLAttributeAnchorTarget, ReactNode } from 'react';
import Link from 'next/link';

export default function Button({
  variant,
  children,
  className,
  asLink,
  href,
  title,
  ariaLabel,
  target,
  disabled,
  onClick
}: {
  variant: 'primary' | 'secondary';
  children: ReactNode;
  className?: string;
  asLink?: boolean;
  href?: string;
  title?: string;
  ariaLabel?: string;
  target?: HTMLAttributeAnchorTarget;
  disabled?: boolean;
  onClick?: () => void;
}) {
  const classNames = cn(
    'interactive group relative inline-flex items-center justify-center gap-2 px-4 py-3 transition-all',
    variant === 'primary' &&
      'rounded-2xl bg-accent text-white hover:rounded-xl hover:bg-violet-500',
    variant === 'secondary' &&
      "relative z-10 rounded-2xl after:absolute after:inset-0 after:-z-10 after:scale-75 after:rounded-lg after:bg-hover after:opacity-0 after:transition after:content-[''] hover:text-muted-foreground hover:after:scale-100 hover:after:rounded-xl hover:after:opacity-100 group-hover:text-muted-foreground group-hover:after:scale-100 group-hover:after:rounded-xl group-hover:after:opacity-100",
    className
  );

  if (asLink && href)
    return (
      <Link
        href={href}
        className={classNames}
        target={target}
        title={title}
        aria-label={ariaLabel}
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
    >
      {children}
    </button>
  );
}
