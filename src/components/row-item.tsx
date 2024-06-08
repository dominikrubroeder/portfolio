import Link from 'next/link';
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/solid';
import { Technology, Tool } from '@/interfaces';
import { ArrowLongRightIcon } from '@heroicons/react/24/outline';
import type { Brand as BrandType } from '@/types';
import Brand from '@/components/ui/brand';

export default function RowItem({ rowItem }: { rowItem: Tool | Technology }) {
  return (
    <div className="grid gap-4 border-b py-4 pl-2 sm:flex sm:items-start sm:justify-between md:items-center lg:p-6">
      <div className="grid gap-4">
        <Link
          href={rowItem.website}
          title={`Go to ${rowItem.title} external website`}
          aria-label={`Go to ${rowItem.title} external website`}
          target="_blank"
          className="flex items-center justify-center gap-4"
        >
          <Brand
            brand={rowItem.title as BrandType}
            className="size-8"
            aria-label={`${rowItem.title} logo`}
          />

          <h3 className="font-bold text-theme-contrary">{rowItem.title}</h3>

          <div className="mr-auto w-max whitespace-nowrap rounded-3xl border border-gray-4 px-3 py-2 text-xs font-bold text-theme-contrary">
            {rowItem.keyword}
          </div>
        </Link>

        <p className="max-w-screen-lg flex-1 pl-12 italic">
          {rowItem.description}
        </p>
      </div>

      {/* Change in later release to Technology Detail Page
             – target={rowItem.href.includes('https') ? '_blank' : '_self'}
             - title={`Go to external ${rowItem.title} project page`}
             - aria-label={`Go to ${rowItem.title} project page`}
             */}
      <div className="flex items-center justify-end gap-2 transition sm:justify-start">
        <Link
          href={rowItem.website}
          className="button group flex items-center justify-center rounded-2xl bg-gray-5 p-4 transition hover:bg-gray-4"
          target="_blank"
          title={`Go to ${rowItem.title} website`}
          aria-label={`Go to ${rowItem.title} website`}
        >
          <ArrowTopRightOnSquareIcon className="size-5 transition group-hover:text-theme-contrary" />
        </Link>

        <button
          className="button group relative flex items-center justify-center rounded-2xl p-4 transition hover:bg-gray-5"
          title={`Projects with ${rowItem.title}`}
          aria-label={`Projects with ${rowItem.title}`}
          disabled
        >
          <ArrowLongRightIcon className="size-5 transition group-hover:text-theme-contrary" />
          <span
            title={`Projects with ${rowItem.title}`}
            aria-label={`Projects with ${rowItem.title}`}
            className="invisible absolute top-0 -translate-y-2 rounded bg-accent p-1 px-1.5 text-xs text-white group-hover:visible"
          >
            Soon
          </span>
        </button>
      </div>
    </div>
  );
}
