import Link from 'next/link';

import { cn } from '@/lib/utils';
import {
  ButtonProps,
  extractEmail,
  extractPhoneNumber
} from '@/components/atoms/button';
import { ArrowUpRightIcon } from '@heroicons/react/16/solid';

export function Button({
  variant = 'contained-primary',
  size = 'medium',
  href,
  target,
  download,
  hideExternalIndicator,
  className,
  children,
  ...rest
}: ButtonProps) {
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
      "relative rounded-2xl z-10 after:absolute after:inset-0 after:-z-10 after:motion-safe:scale-75 after:rounded after:bg-muted after:opacity-0 after:motion-safe:transition after:content-[''] active:text-foreground active:after:scale-100 hover:after:scale-100 hover:after:rounded-2xl active:after:rounded-2xl active:after:opacity-100 hover:after:opacity-100 group-hover:text-foreground active:text-foreground group-hover:after:scale-100 group-hover:after:rounded-2xl group-hover:after:opacity-100",
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
      'min-h-6 min-w-6 rounded-2xl hover:rounded-2xl text-xs py-1 px-1 gap-1 [&>svg]:size-3.5',
    size === 'small' &&
      ' min-h-8 min-w-8 rounded-2xl hover:rounded-2xl text-sm py-1 px-2 gap-1 [&>svg]:size-3.5',
    size === 'medium' &&
      'min-h-11 min-w-11 rounded-2xl hover:rounded-2xl text-base py-2 px-3 gap-2 [&>svg]:size-5',
    size === 'large' &&
      'min-h-11 min-w-11 rounded-2xl hover:rounded-2xl text-lg py-2 px-3.5 gap-2 [&>svg]:size-6',
    className
  );

  const isMail = href?.includes('mailto');
  const isPhone = href?.includes('tel');
  const isDownload = !!download;
  const isExternal = href?.includes('https') || href?.includes('.pdf');

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
        {!hideExternalIndicator && <ArrowUpRightIcon />}
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

        {isExternal && (
          <ArrowUpRightIcon className="mr-4 size-5 text-current" />
        )}
      </Link>
    );

  return (
    <button {...rest} className={classNames}>
      {children}
    </button>
  );
}
