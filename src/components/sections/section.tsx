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
        'flex scroll-mt-24 flex-col justify-center gap-8 md:scroll-mt-16',
        className
      )}
      {...restProps}
    >
      {children}
    </section>
  );
}
