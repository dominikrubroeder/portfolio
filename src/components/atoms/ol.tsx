import type { ReactNode } from 'react';

import { cn } from '@/lib/utils';

export function Ol({
  headline,
  offsetLeft,
  listStyle,
  className,
  children,
  ...rest
}: {
  headline?: string;
  offsetLeft?: boolean;
  listStyle?: 'decimal' | 'none';
  className?: string;
  children: ReactNode;
} & React.HTMLAttributes<HTMLUListElement>) {
  return (
    <div className="space-y-2">
      {headline && <b className="block">{headline}</b>}

      <ol
        className={cn(
          'space-y-2',
          offsetLeft && 'pl-4',
          listStyle === 'decimal' && 'list-decimal pl-5 leading-7',
          listStyle === 'none' && 'list-none',
          className
        )}
        {...rest}
      >
        {children}
      </ol>
    </div>
  );
}
