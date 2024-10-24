import { cn } from '@/lib/utils';
import React, { ReactNode } from 'react';

export default function Blockquote({
  indent,
  quoteBar = true,
  centered = true,
  className,
  children,
  quotes,
  author,
  horizontalOffset = true
}: {
  indent?: boolean;
  quoteBar?: boolean;
  centered?: boolean;
  className?: string;
  children?: ReactNode;
  quotes?: boolean;
  author?: ReactNode;
  horizontalOffset?: boolean;
}) {
  return (
    <blockquote
      className={cn(
        horizontalOffset && 'my-8',
        indent && 'ml-4 md:ml-8',
        quoteBar &&
          'relative pl-4 text-left before:absolute before:inset-y-0 before:left-0 before:mr-4 before:inline-block before:h-full before:w-1 before:rounded-2xl before:bg-foreground',
        centered && 'mx-auto',
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
