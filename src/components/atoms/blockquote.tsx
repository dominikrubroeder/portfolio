import type { ReactNode } from 'react';
import React from 'react';

import { cn } from '@/lib/utils';

export function Blockquote({
  indent,
  quoteBar = true,
  centered = true,
  className,
  children,
  quotes,
  author,
  horizontalOffset = true,
  withBackground,
  ...rest
}: {
  indent?: boolean;
  quoteBar?: boolean;
  centered?: boolean;
  className?: string;
  children?: ReactNode;
  quotes?: boolean;
  author?: ReactNode;
  horizontalOffset?: boolean;
  withBackground?: boolean;
} & React.HTMLAttributes<HTMLElement>) {
  return (
    <blockquote
      {...rest}
      className={cn(
        horizontalOffset && 'my-8',
        indent && 'ml-4 md:ml-8',
        quoteBar &&
          'relative pl-4 text-left before:absolute before:inset-y-0 before:left-0 before:mr-4 before:inline-block before:h-full before:w-1 before:rounded-2xl before:bg-primary',
        centered && 'mx-auto',
        withBackground && 'rounded bg-primary/10 px-2 py-3 pl-5',
        className
      )}
    >
      {quotes && <span>&quot;</span>}
      {children}
      {quotes && <span>&quot;</span>}
      {author && (
        <p className="mt-2">
          – <i>{author}</i>
        </p>
      )}
    </blockquote>
  );
}
