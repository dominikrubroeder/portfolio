import type { ReactNode } from 'react';

import { cn } from '@/lib/utils';

export function Ul({
  headline,
  offsetLeft,
  listStyle = 'none',
  className,
  containerClassName,
  children,
  ...rest
}: {
  headline?: string;
  offsetLeft?: boolean;
  listStyle?: 'disc' | 'none';
  className?: string;
  containerClassName?: string;
  children: ReactNode;
} & React.HTMLAttributes<HTMLUListElement>) {
  return (
    <div className={cn(containerClassName)}>
      {headline && <b className="block">{headline}</b>}

      <ul
        className={cn(
          offsetLeft && 'pl-4',
          listStyle === 'disc' && 'list-disc pl-5 leading-7',
          listStyle === 'none' && 'list-none',
          className
        )}
        {...rest}
      >
        {children}
      </ul>
    </div>
  );
}
