import { ReactNode } from 'react';
import { cn } from '@/utils';

export default function Section({
  headline,
  showHeadlineMobileOnly,
  className,
  children
}: {
  headline: string;
  showHeadlineMobileOnly?: boolean;
  className?: string;
  children: ReactNode;
}) {
  return (
    <section className={cn('grid gap-6', className)}>
      <h2
        className={cn(
          'sticky top-0 mx-auto w-full max-w-screen-sm border-b border-b-gray-5 bg-gray-6 py-3 lg:top-20',
          showHeadlineMobileOnly && 'lg:hidden'
        )}
      >
        {headline}
      </h2>

      <div className="mx-auto w-full max-w-screen-sm py-4">{children}</div>
    </section>
  );
}
