import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

export function H1({
  className,
  children
}: {
  className?: string;
  children: ReactNode;
}) {
  return <h1 className={cn(className)}>{children}</h1>;
}
