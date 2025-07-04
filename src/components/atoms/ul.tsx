import type { ReactNode } from 'react';

import { cn } from '@/lib/utils';

export function Ul({
  headline,
  className,
  children,
  ...rest
}: {
  headline?: string;
  className?: string;
  children: ReactNode;
} & React.HTMLAttributes<HTMLUListElement>) {
  return (
    <div>
      {headline && <b className="block">{headline}</b>}
      <ul className={cn('list-disc pl-4', className)} {...rest}>
        {children}
      </ul>
    </div>
  );
}
