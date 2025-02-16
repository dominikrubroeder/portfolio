import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

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
        'scroll-mt-24 space-y-8 md:scroll-mt-28 xl:scroll-mt-16',
        className
      )}
      {...restProps}
    >
      {children}
    </section>
  );
}
