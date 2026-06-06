import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

export function H6({
  className,
  children
}: {
  className?: string;
  children: ReactNode;
}) {
  return <h6 className={cn(className)}>{children}</h6>;
}
