import { cloneElement } from 'react';
import type { ReactElement, ReactNode } from 'react';

import Link from 'next/link';

import { ArrowUpRightIcon } from '@heroicons/react/16/solid';

import { extractEmail, extractPhoneNumber } from '@/components/ui/button';
import type { ButtonProps } from '@/components/ui/button';
import { Tooltip } from '@/components/ui/tooltip';

import { cn } from '@/lib/utils';

export function Button({
  variant = 'contained-primary',
  size = 'medium',
  href,
  target,
  download,
  hideExternalIndicator,
  className,
  children,
  customIcon,
  iconOnly,
  label,
  prefetch,
  ...rest
}: ButtonProps) {
  const classNames = cn(
    'interactive select-none group [&>svg]:shrink-0 decoration-none relative inline-flex shrink-0 items-center justify-center motion-safe:transition-colors',
    variant.includes('contained') && '',
    variant === 'contained-primary' &&
      'bg-primary text-primary-foreground hover:bg-primary-hover',
    variant === 'contained-foreground' &&
      'bg-muted text-foreground hover:bg-muted-hover',
    variant === 'contained-muted' &&
      'bg-muted text-muted-foreground hover:bg-muted-hover hover:text-foreground',
    variant === 'contained-white' && 'bg-white text-primary',
    variant?.includes('ghost') &&
      "relative rounded-2xl z-10 after:absolute after:inset-0 after:-z-10 after:rounded-2xl after:will-change-transform after:motion-safe:scale-80 after:bg-primary/10 after:opacity-0 after:motion-safe:transition after:content-[''] active:text-foreground active:after:scale-100 hover:after:scale-100 active:after:opacity-100 hover:after:opacity-100 active:text-foreground",
    variant === 'ghost-primary' && 'text-primary',
    variant === 'ghost-foreground' && 'text-foreground',
    variant === 'ghost-muted' && 'text-muted-foreground hover:text-foreground',
    variant.includes('text') && 'p-0! min-h-0!',
    variant === 'text-primary' &&
      'text-primary hover:text-primary-hover [&>svg]:hover:text-primary-hover',
    variant === 'text-foreground' &&
      'text-foreground hover:text-primary [&>svg]:hover:text-primary',
    variant === 'text-muted' &&
      'text-muted-foreground hover:text-foreground [&>svg]:hover:text-foreground',
    variant.includes('link') && 'underline p-0! min-h-0!',
    variant === 'link-muted' && 'text-muted-foreground hover:text-foreground',
    variant === 'link-foreground' && 'text-foreground hover:text-primary',
    variant === 'link-primary' && 'text-primary hover:text-primary-hover',
    size === 'tiny' &&
      'min-h-6 min-w-6 rounded-2xl hover:rounded-xl text-xs py-1 px-1 gap-1 [&>svg]:size-3.5',
    size === 'small' &&
      ' min-h-8 min-w-8 rounded-2xl hover:rounded-xl text-sm py-1 px-2 gap-1 [&>svg]:size-3.5',
    size === 'medium' &&
      'min-h-11 min-w-11 rounded-2xl hover:rounded-xl text-base py-2 px-3 gap-2 [&>svg]:size-5',
    size === 'large' &&
      'min-h-11 min-w-11 rounded-2xl hover:rounded-xl text-lg py-2 px-3.5 gap-2 [&>svg]:size-6',
    className
  );

  const isMail = href?.includes('mailto');
  const isPhone = href?.includes('tel');
  const isDownload = !!download;
  const isExternal = href?.includes('https') || href?.includes('.pdf');

  const email = isMail ? extractEmail({ input: href }) : undefined;
  const phoneNumber = isPhone ? extractPhoneNumber({ input: href }) : undefined;
  const contactLabel = isMail
    ? `Write email to ${email}`
    : isPhone
      ? `Call ${phoneNumber}`
      : undefined;

  // Icon-only: `label` is the accessible name and the tooltip text. Buttons
  // with visible text keep it as their name and are never overridden.
  const iconLabel = iconOnly
    ? (label ?? rest['aria-label'] ?? contactLabel)
    : undefined;

  if (process.env.NODE_ENV !== 'production' && iconOnly && !iconLabel) {
    console.warn('Button: `iconOnly` buttons need a `label`.');
  }

  // Icon-only buttons explain their action in a tooltip. No native `title`
  // is set, so there is no double tooltip.
  const compose = (element: ReactElement, content: ReactNode) =>
    iconLabel ? (
      <Tooltip content={iconLabel} render={element}>
        {content}
      </Tooltip>
    ) : (
      cloneElement(element, undefined, content)
    );

  if (isDownload) {
    return compose(
      <a
        {...rest}
        href={href}
        aria-label={iconLabel ?? rest['aria-label']}
        target="_blank"
        rel="noopener noreferrer"
        className={classNames}
      />,
      children
    );
  }

  if (href && (isMail || isPhone)) {
    return compose(
      <a
        {...rest}
        href={href}
        aria-label={iconLabel ?? rest['aria-label']}
        target="_blank"
        rel="noopener noreferrer"
        className={classNames}
      />,
      children
    );
  }

  if (isExternal)
    return compose(
      <a
        {...rest}
        href={href}
        aria-label={
          iconLabel ? `${iconLabel} (opens in a new tab)` : rest['aria-label']
        }
        target="_blank"
        rel={rest.rel ?? 'noopener noreferrer'}
        className={classNames}
      />,
      <>
        {children}
        {!hideExternalIndicator && !customIcon && <ArrowUpRightIcon />}
        {!iconOnly && <span className="sr-only"> (opens in a new tab)</span>}
      </>
    );

  if (href)
    return compose(
      <Link
        {...rest}
        href={href}
        prefetch={prefetch}
        aria-label={iconLabel ?? rest['aria-label']}
        target={target}
        className={classNames}
      />,
      children
    );

  return compose(
    <button
      {...rest}
      aria-label={iconLabel ?? rest['aria-label']}
      className={classNames}
    />,
    children
  );
}
