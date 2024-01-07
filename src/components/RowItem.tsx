import Image from 'next/image';
import Link from 'next/link';
import { ArrowRightIcon } from '@heroicons/react/24/solid';
import { Technology, Tool } from '@/lib/interfaces';

export default function RowItem({ rowItem }: { rowItem: Tool | Technology }) {
  return (
    <div className="group flex items-center justify-between gap-4 border-b border-gray-5 py-4 pr-4 text-xs">
      <div className="grid gap-4">
        <div className="flex items-center justify-center gap-4">
          <Image
            width={32}
            height={32}
            className="object-contain"
            src={rowItem.logo}
            alt={rowItem.title}
            draggable={false}
          />

          <h3 className="font-bold text-theme-contrary">
            <Link
              href={rowItem.website}
              title={`Go to ${rowItem.title} external website`}
              target="_blank"
            >
              {rowItem.title}
            </Link>
          </h3>

          <div className="mr-auto w-max whitespace-nowrap rounded-3xl border border-gray-4 px-3 py-2 font-bold text-theme-contrary">
            {rowItem.keyword}
          </div>
        </div>

        <p className="max-w-screen-lg flex-1 pl-12">{rowItem.description}</p>
      </div>

      <div className="flex items-center gap-4 transition">
        <Link
          href={rowItem.href}
          target={rowItem.href.includes('https') ? '_blank' : '_self'}
          title={`Go to external ${rowItem.title} project page`}
          aria-label={`Go to ${rowItem.title} project page`}
          className="button group flex items-center justify-center rounded-2xl bg-gray-5 p-4 transition hover:bg-gray-4"
        >
          <ArrowRightIcon className="h-5 w-5 transition group-hover:text-theme-contrary" />
        </Link>
      </div>
    </div>
  );
}
