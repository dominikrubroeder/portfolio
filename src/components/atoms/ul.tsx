import type { ReactNode } from 'react';

import { cn } from '@/lib/utils';

export function Ul({
  headline,
  offsetLeft,
  listStyle = 'none',
  className,
  children,
  ...rest
}: {
  headline?: string;
  offsetLeft?: boolean;
  listStyle?: 'disc' | 'none';
  className?: string;
  children: ReactNode;
} & React.HTMLAttributes<HTMLUListElement>) {
  return (
    <div className="space-y-2">
      {headline && <b className="block">{headline}</b>}

      <ul
        className={cn(
          'space-y-2',
          offsetLeft && 'pl-4',
          listStyle === 'disc' && 'list-disc pl-5 leading-7',
          className
        )}
        {...rest}
      >
        {children}
      </ul>
    </div>
  );
}
