import { ReactNode } from 'react';

import { cn } from '@/lib/utils';

export function Ul({
  className,
  children,
  ...rest
}: {
  className?: string;
  children: ReactNode;
} & React.HTMLAttributes<HTMLUListElement>) {
  return (
    <ul className={cn('list-disc pl-4', className)} {...rest}>
      {children}
    </ul>
  );
}
