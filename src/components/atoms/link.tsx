import NextLink, { LinkProps } from 'next/link';
import { cn } from '@/lib/utils';
import { AnchorHTMLAttributes, ReactNode } from 'react';
import { ArrowRightIcon, ArrowUpRightIcon } from '@heroicons/react/16/solid';

export default function Link({
  variant = 'underline',
  className,
  children,
  ...linkProps
}: {
  variant?: 'underline' | 'marker' | 'inline-text';
  className?: string;
  children: ReactNode;
} & LinkProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof LinkProps>) {
  const externalLink = linkProps.href.toString().includes('https');

  return (
    <NextLink
      {...linkProps}
      target={externalLink ? '_blank' : '_self'}
      className={cn(
        'relative mx-1 inline-flex items-center gap-1 text-foreground transition',
        variant === 'marker' &&
          'rounded-md bg-violet-200 px-1 hover:bg-violet-300',
        className
      )}
    >
      {children}

      {variant === 'underline' && (
        <span className="absolute inset-x-0 -bottom-1 h-1 w-full rounded-full bg-primary" />
      )}

      {externalLink ? (
        <ArrowUpRightIcon className="size-4 text-primary" />
      ) : (
        <ArrowRightIcon className="size-4 text-primary" />
      )}
    </NextLink>
  );
}
