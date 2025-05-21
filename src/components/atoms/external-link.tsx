import { ReactNode } from 'react';

import { cn } from '@/lib/utils';
import { ArrowUpRightIcon } from '@heroicons/react/16/solid';

export function ExternalLink({
  href,
  className,
  children,
  ...rest
}: {
  href: string;
  className?: string;
  children: ReactNode;
} & React.HTMLAttributes<HTMLAnchorElement>) {
  return (
    <a
      href={href}
      className={cn(
        'mr-1.5 ml-1 underline transition hover:decoration-primary',
        className
      )}
      target="_blank"
      rel="noopener noreferrer"
      {...rest}
    >
      {children}
      <span className="relative">
        <ArrowUpRightIcon className="absolute -top-2 -right-3 size-3.5" />
      </span>
    </a>
  );
}
