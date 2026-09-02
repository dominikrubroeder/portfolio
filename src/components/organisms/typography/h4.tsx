import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

export function H4({
  className,
  children
}: {
  className?: string;
  children: ReactNode;
}) {
  return <h4 className={cn(className)}>{children}</h4>;
}
