'use client';

import Link from 'next/link';

import { cn } from '@/lib/utils';
import { useTheme } from '@/components/organisms/theme';
import { ButtonProps } from '@/components/atoms/button/types';
import { extractEmail, extractPhoneNumber } from './helper';

export function Button({
  variant = 'contained',
  size = 'medium',
  href,
  target,
  rounded,
  className,
  children,
  ...rest
}: ButtonProps) {
  const { theme } = useTheme();

  const classNames = cn(
    'interactive select-none group [&>svg]:shrink-0 decoration-none relative inline-flex shrink-0 items-center justify-center transition-all',
    variant === 'contained' &&
      'min-h-11 min-w-11 rounded-2xl bg-primary text-primary-foreground hover:rounded-xl hover:bg-primary-hover',
    variant === 'contained-muted' &&
      'min-h-11 min-w-11 rounded-2xl bg-muted text-foreground hover:rounded-xl hover:bg-muted-hover',
    variant?.includes('ghost') &&
      "min-h-11 min-w-11 text-foreground relative z-10 rounded-2xl hover:text-foreground group-hover:text-foreground after:absolute after:inset-0 after:-z-10 after:scale-75 after:rounded-lg after:bg-muted after:opacity-0 after:transition after:content-[''] active:text-foreground active:after:scale-100 hover:after:scale-100 hover:after:rounded-xl active:after:rounded-xl active:after:opacity-100 hover:after:opacity-100 group-hover:text-foreground active:text-foreground group-hover:after:scale-100 group-hover:after:rounded-xl group-hover:after:opacity-100",
    variant === 'ghost' && 'text-foreground',
    variant === 'ghost-muted' && 'text-muted-foreground',
    variant === 'text' && 'text-primary hover:text-primary-hover',
    variant === 'text-muted' &&
      'text-muted-foreground hover:text-foreground group-hover:text-foreground',
    size === 'tiny' && 'text-xs py-1 px-1 gap-2 [&>svg]:size-3',
    size === 'small' && 'text-sm py-1 px-2 gap-2 [&>svg]:size-3',
    size === 'medium' && 'text-base py-2 px-3 gap-2 [&>svg]:size-5',
    size === 'large' && 'text-lg py-2 px-3 gap-3 [&>svg]:size-6',
    rounded && 'rounded-full',
    theme.key !== 'animate' && 'transition-none',
    theme.key === 'wireframe' &&
      variant === 'ghost' &&
      'border hover:text-white hover:bg-muted after:hidden',
    className
  );

  const isMail = href?.includes('mailto');
  const isPhone = href?.includes('tel');

  if (href && (isMail || isPhone)) {
    const email = extractEmail({ input: href });
    const phoneNumber = extractPhoneNumber({ input: href });
    const title = isMail
      ? `Write email to ${email}`
      : isPhone
        ? `Call ${phoneNumber}`
        : undefined;
    const ariaLabel = isMail
      ? `Write email to ${email}`
      : isPhone
        ? `Call ${phoneNumber}`
        : undefined;

    return (
      <a
        {...rest}
        href={href}
        title={title}
        aria-label={ariaLabel}
        target="_blank"
        rel="noopener noreferrer"
        className={classNames}
      >
        {isMail && <span className="sr-only">Write email to {email}</span>}
        {isPhone && <span className="sr-only">Call {phoneNumber}</span>}
        {children}
      </a>
    );
  }

  if (href)
    return (
      <Link
        {...rest}
        href={href}
        title={rest.title ?? `Go to ${href}`}
        aria-label={rest['aria-label'] ?? `Go to ${href}`}
        target={href.includes('https') ? '_blank' : target}
        rel={
          rest.rel ??
          (href.includes('https') ? 'noopener noreferrer' : undefined)
        }
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
