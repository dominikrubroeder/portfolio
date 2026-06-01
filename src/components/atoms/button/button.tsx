'use client';

import Link from 'next/link';

import { cn } from '@/lib/utils';
import {
  ButtonProps,
  extractEmail,
  extractPhoneNumber
} from '@/components/atoms/button';
import { useTheme } from '@/components/organisms/theme';

export function Button({
  variant = 'contained-primary',
  size = 'medium',
  href,
  target,
  rounded,
  download,
  className,
  children,
  ...rest
}: ButtonProps) {
  const { theme } = useTheme();

  const classNames = cn(
    'interactive select-none group [&>svg]:shrink-0 decoration-none relative inline-flex shrink-0 items-center justify-center motion-safe:transition-all',
    variant.includes('contained') && '',
    variant === 'contained-primary' &&
      'bg-primary text-primary-foreground hover:bg-primary-hover',
    variant === 'contained-foreground' &&
      'bg-muted text-foreground hover:bg-muted-hover',
    variant === 'contained-muted' &&
      'bg-muted text-muted-foreground hover:bg-muted-hover hover:text-foreground',
    variant?.includes('ghost') &&
      "relative z-10 rounded-theme after:absolute after:inset-0 after:-z-10 after:motion-safe:scale-75 after:rounded-theme-lg after:bg-muted after:opacity-0 after:motion-safe:transition after:content-[''] active:text-foreground active:after:scale-100 hover:after:scale-100 hover:after:rounded-theme-xl active:after:rounded-theme-xl active:after:opacity-100 hover:after:opacity-100 group-hover:text-foreground active:text-foreground group-hover:after:scale-100 group-hover:after:rounded-theme-xl group-hover:after:opacity-100",
    variant === 'ghost-primary' && 'text-primary',
    variant === 'ghost-foreground' && 'text-foreground',
    variant === 'ghost-muted' && 'text-muted-foreground hover:text-foreground',
    variant === 'text-primary' &&
      'text-primary hover:text-primary-hover [&>svg]:hover:text-primary-hover group-hover:[&>svg]:text-primary-hover',
    variant === 'text-foreground' &&
      'text-foreground hover:text-primary [&>svg]:hover:text-primary group-hover:[&>svg]:text-primary',
    variant === 'text-muted' &&
      'text-muted-foreground hover:text-foreground [&>svg]:hover:text-foreground group-hover:[&>svg]:text-foreground',
    size === 'tiny' &&
      'min-h-6 min-w-6 rounded-theme-lg hover:rounded-theme-md text-xs py-1 px-1 gap-1 [&>svg]:size-3.5',
    size === 'small' &&
      ' min-h-8 min-w-8 rounded-theme-xl hover:rounded-theme-lg text-sm py-1 px-2 gap-1 [&>svg]:size-3.5',
    size === 'medium' &&
      'min-h-11 min-w-11 rounded-theme hover:rounded-theme-xl text-base py-2 px-3 gap-2 [&>svg]:size-5',
    size === 'large' &&
      'min-h-11 min-w-11 rounded-theme hover:rounded-theme-xl text-lg py-2 px-3.5 gap-2 [&>svg]:size-6',
    rounded && 'rounded-full hover:rounded-full',
    theme.key === 'wireframe' &&
      'rounded-none transition-none after:content-none',
    theme.key === 'wireframe' && variant.includes('ghost') && 'hover:bg-muted',
    className
  );

  const isMail = href?.includes('mailto');
  const isPhone = href?.includes('tel');
  const isDownload = href?.includes('.pdf') || !!download;
  const isExternal = href?.includes('https');

  if (isDownload) {
    return (
      <a
        {...rest}
        href={href}
        title={rest.title ?? `Download file ${href}`}
        aria-label={rest['aria-label'] ?? `Download file ${href}`}
        target="_blank"
        rel="noopener noreferrer"
        className={classNames}
      >
        {children}
      </a>
    );
  }

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

  if (isExternal)
    return (
      <a
        {...rest}
        href={href}
        target="_blank"
        rel={rest.rel}
        className={classNames}
      >
        {children}
      </a>
    );

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
