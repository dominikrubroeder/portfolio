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
    <section className={cn('grid gap-2 sm:gap-6 sm:pl-10 md:pl-0', className)}>
      <h2
        className={cn(
          'sticky top-0 mx-auto w-full max-w-screen-sm border-b border-b-gray-5 bg-gray-6 py-3 pl-6 sm:pl-0 md:top-20',
          showHeadlineMobileOnly && 'lg:hidden'
        )}
      >
        <div>
          <div className="absolute -left-8 top-6 hidden h-1.5 w-full -translate-x-full rounded-full bg-accent sm:block"></div>
          <ArrowLongRightIcon className="absolute -left-12 -top-[5px] size-16 stroke-2 text-accent sm:-left-20" />
        </div>
        {headline}
      </h2>

      <div className="mx-auto w-full max-w-screen-sm py-4">{children}</div>
    </section>
  );
}
