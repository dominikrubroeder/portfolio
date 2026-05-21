import type { ReactNode } from 'react';
import React from 'react';

import { cn } from '@/lib/utils';
import { ColorReducedProp } from '@/lib/types';

export function Blockquote({
  variant = 'muted',
  indent,
  quoteBar = true,
  centered = true,
  quotes,
  author,
  horizontalOffset = true,
  withBackground,
  isHighlight,
  className,
  children,
  ...rest
}: {
  variant?: ColorReducedProp;
  indent?: boolean;
  quoteBar?: boolean;
  centered?: boolean;
  quotes?: boolean;
  author?: ReactNode;
  horizontalOffset?: boolean;
  withBackground?: boolean;
  isHighlight?: boolean;
  className?: string;
  children?: ReactNode;
} & React.HTMLAttributes<HTMLElement>) {
  return (
    <blockquote
      {...rest}
      className={cn(
        variant === 'primary' && 'text-primary',
        variant === 'foreground' && 'text-foreground',
        variant === 'muted' && 'text-muted-foreground',
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
