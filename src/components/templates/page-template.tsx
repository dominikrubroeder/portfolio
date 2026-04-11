import { ReactNode } from 'react';
import { ScrollToTop } from '@/components/atoms/scroll-to-top';

export function PageTemplate({ children }: { children: ReactNode }) {
  return (
    <main className="space-y-6 pt-4 sm:space-y-12">
      <ScrollToTop />
      {children}
    </main>
  );
}
