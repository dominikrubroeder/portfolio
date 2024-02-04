import Image from 'next/image';
import Link from 'next/link';
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/solid';
import { Technology, Tool } from '@/interfaces';
import { ArrowLongRightIcon } from '@heroicons/react/24/outline';

export default function RowItem({ rowItem }: { rowItem: Tool | Technology }) {
  return (
    <div className="flex items-start justify-between gap-4 border-b border-gray-5 py-4 pr-4 text-xs md:items-center">
      <div className="grid gap-4">
        <Link
          href={rowItem.website}
          title={`Go to ${rowItem.title} external website`}
          aria-label={`Go to ${rowItem.title} external website`}
          target="_blank"
          className="flex items-center justify-center gap-4"
        >
          <Image
            width={32}
            height={32}
            className="object-contain"
            src={rowItem.logo}
            alt={rowItem.title}
            draggable={false}
          />

          <h3 className="font-bold text-theme-contrary">{rowItem.title}</h3>

          <div className="mr-auto w-max whitespace-nowrap rounded-3xl border border-gray-4 px-3 py-2 font-bold text-theme-contrary">
            {rowItem.keyword}
          </div>
        </Link>

        <p className="max-w-screen-lg flex-1 pl-12">{rowItem.description}</p>
      </div>

      {/* Change in later release to Technology Detail Page
             – target={rowItem.href.includes('https') ? '_blank' : '_self'}
             - title={`Go to external ${rowItem.title} project page`}
             - aria-label={`Go to ${rowItem.title} project page`}
             */}
      <div className="flex items-center gap-2 transition">
        <Link
          href={rowItem.website}
          className="button group flex items-center justify-center rounded-2xl bg-gray-5 p-4 transition hover:bg-gray-4"
          target="_blank"
          title={`Go to ${rowItem.title} website`}
          aria-label={`Go to ${rowItem.title} website`}
        >
          <ArrowTopRightOnSquareIcon className="h-5 w-5 transition group-hover:text-theme-contrary" />
        </Link>

        <button
          className="button group relative flex items-center justify-center rounded-2xl p-4 transition hover:bg-gray-5"
          title={`Projects with ${rowItem.title}`}
          aria-label={`Projects with ${rowItem.title}`}
          disabled
        >
          <ArrowLongRightIcon className="h-5 w-5 transition group-hover:text-theme-contrary" />
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
