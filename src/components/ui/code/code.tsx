import React from 'react';

import { cn } from '@/lib/utils';

// Inline code, like text in backticks in Slack or Claude: a quiet chip in the code font.
export function Code({
  className,
  children,
  ...rest
}: React.HTMLAttributes<HTMLElement>) {
  return (
    <code
      {...rest}
      className={cn(
        'rounded-md border bg-muted px-1.5 py-0.5 font-code text-[0.85em] whitespace-nowrap text-foreground',
        className
      )}
    >
      {children}
    </code>
  );
}
