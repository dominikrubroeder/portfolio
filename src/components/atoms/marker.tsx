import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

export default function Marker({
  color,
  as,
  className,
  children
}: {
  color: 'yellow' | 'red' | 'green' | 'primary';
  as: 'div' | 'p' | 'span';
  className?: string;
  children: ReactNode;
}) {
  const Comp = as;

  return (
    <Comp
      className={cn(
        'inline-block',
        color === 'yellow' && 'bg-yellow-200',
        className
      )}
    >
      {children}
    </Comp>
  );
}
