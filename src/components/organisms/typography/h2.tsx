import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

export function H2({
  className,
  children
}: {
  className?: string;
  children: ReactNode;
}) {
  return <h2 className={cn(className)}>{children}</h2>;
}
