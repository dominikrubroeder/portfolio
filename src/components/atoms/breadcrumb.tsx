import { Fragment } from 'react';

import Link from 'next/link';

import { ArrowRightIcon } from '@heroicons/react/16/solid';

import type { BaseComponentProps } from '@/lib/types';
import { cn } from '@/lib/utils';
import { Ul } from '@/components/atoms/ul';

export function Breadcrumb({
  breadcrumb,
  className
}: {
  breadcrumb: { label: string; href: string }[];
} & BaseComponentProps) {
  return (
    <Ul
      className={cn(
        'flex flex-wrap items-center gap-3 space-y-0 space-x-0',
        className
      )}
    >
      {breadcrumb.map(({ label, href }, index, array) => (
        <Fragment key={label}>
          <li>
            <Link
              href={href}
              className={cn(
                'hover:text-primary',
                index === array.length - 1 && 'text-primary'
              )}
            >
              {label}
            </Link>
          </li>

          {index < array.length - 1 && (
            <li>
              <ArrowRightIcon className="size-4" />
            </li>
          )}
        </Fragment>
      ))}
    </Ul>
  );
}
