import { ReactNode } from 'react';
import { ScrollToTop } from '@/components/atoms/scroll-to-top';
import { cn } from '@/lib/utils';

export function PageTemplate({
  className,
  children
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <main className={cn('flex-1 space-y-8 pt-4 sm:space-y-12', className)}>
      <ScrollToTop />
      {children}
    </main>
  );
}
