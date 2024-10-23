import NextLink from 'next/link';
import { cn } from '@/lib/utils';
import { ReactNode } from 'react';
import { ArrowUpRightIcon } from '@heroicons/react/20/solid';

export default function Link({
  href,
  title,
  target = '_self',
  ariaLabel,
  className,
  children
}: {
  href: string;
  title?: string;
  target?: '_blank' | '_self';
  ariaLabel?: string;
  className?: string;
  children: ReactNode;
}) {
  const externalLink = href.includes('https');

  return (
    <NextLink
      href={href}
      title={title}
      target={externalLink ? '_blank' : target}
      aria-label={ariaLabel}
      className={cn(
        'relative ml-1 inline-flex items-center gap-1 text-foreground transition',
        className
      )}
    >
      {children}

      <span className="absolute inset-x-0 -bottom-1 h-1 w-full rounded-full bg-primary" />

      {externalLink ? (
        <ArrowUpRightIcon className="size-4 text-primary" />
      ) : null}
    </NextLink>
  );
}
