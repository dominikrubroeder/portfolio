import { ReactNode } from 'react';
import { cn } from '@/utils';

export default function Section({
  children,
  className,
  ...restProps
}: {
  children: ReactNode;
  className?: string;
} & React.HTMLProps<HTMLSelectElement>) {
  return (
    <section
      className={cn(
        'flex flex-col justify-center gap-8 py-12 md:py-28',
        className
      )}
      {...restProps}
    >
      {children}
    </section>
  );
}
