import { ReactNode } from 'react';
import { cn } from '@/utils';
import { ArrowLongRightIcon } from '@heroicons/react/24/outline';

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
          'sticky top-0 mx-auto w-full max-w-screen-sm border-b border-b-gray-5 bg-gray-6 py-3 md:top-20',
          showHeadlineMobileOnly && 'lg:hidden'
        )}
      >
        <div className="absolute -left-8 top-6 h-1.5 w-full -translate-x-full rounded-full bg-accent"></div>
        <ArrowLongRightIcon className="absolute -left-20 -top-[5px] size-16 stroke-2 text-accent" />
        {headline}
      </h2>

      <div className="mx-auto w-full max-w-screen-sm py-4">{children}</div>
    </section>
  );
}
