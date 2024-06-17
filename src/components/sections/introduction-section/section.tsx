import { HTMLProps, ReactNode } from 'react';
import { cn } from '@/utils';
import {
  ArrowLongLeftIcon,
  ArrowLongRightIcon
} from '@heroicons/react/24/outline';

export default function Section({
  headline,
  showHeadlineMobileOnly,
  className,
  children,
  arrowRight,
  arrowLeft,
  ...rest
}: {
  headline: string;
  showHeadlineMobileOnly?: boolean;
  className?: string;
  children: ReactNode;
  arrowRight?: boolean;
  arrowLeft?: boolean;
} & HTMLProps<HTMLElement>) {
  return (
    <section
      className={cn('grid gap-2 sm:gap-6 sm:pl-10 md:pl-0', className)}
      {...rest}
    >
      <h2
        className={cn(
          'sticky top-0 mx-auto w-full max-w-screen-sm border-b border-b-gray-5 bg-gray-6 py-3 pl-6 sm:pl-0 md:top-20',
          showHeadlineMobileOnly && 'lg:hidden'
        )}
      >
        {(arrowLeft || arrowRight) && (
          <div>
            <div
              className={cn(
                'absolute top-6 hidden h-1.5 w-full rounded-full bg-accent sm:block',
                arrowLeft && '-left-8 -translate-x-full',
                arrowRight && '-right-8 translate-x-full'
              )}
            ></div>
            {arrowLeft && (
              <ArrowLongRightIcon className="absolute -left-12 top-[-5px] size-16 stroke-2 text-accent sm:-left-20" />
            )}
            {arrowRight && (
              <ArrowLongLeftIcon className="absolute -right-12 top-[-5px] size-16 stroke-2 text-accent sm:-right-20" />
            )}
          </div>
        )}
        {headline}
      </h2>

      <div className="mx-auto w-full max-w-screen-sm py-4">{children}</div>
    </section>
  );
}
