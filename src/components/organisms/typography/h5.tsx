import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

export function H5({
  className,
  children
}: {
  className?: string;
  children: ReactNode;
}) {
  return <h5 className={cn(className)}>{children}</h5>;
}
