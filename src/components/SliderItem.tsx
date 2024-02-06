import { Social, Technology, Tool } from '@/interfaces';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/solid';
import { ArrowLongRightIcon } from '@heroicons/react/24/outline';

export default function SliderItem({
  sliderItem,
  showActions,
  isFirstItemInList
}: {
  sliderItem: Tool | Technology | Social;
  showActions?: boolean;
  isFirstItemInList?: boolean;
}) {
  return (
    <div className="group grid w-80 gap-6 whitespace-normal">
      <div className="relative h-80 w-80 rounded-xl border border-gray-4">
        {/* Change in later release to
             – href={sliderItem.href}
             – target={sliderItem.href.includes('https') ? '_blank' : '_self'}
             – title={`Go to ${sliderItem.href}`}
             – aria-label={`Go to ${sliderItem.href}`}`}

             When Detail pages are available
             */}
        <Link
          href={sliderItem.website}
          className="absolute inset-0 flex h-full w-full cursor-pointer items-center justify-center"
          target="_blank"
          title={`Go to ${sliderItem.title} page`}
          aria-label={`Go to ${sliderItem.title} page`}
        >
          <Image
            src={sliderItem.logo}
            alt={sliderItem.title}
            className="max-h-32 max-w-32 shrink-0 object-contain"
            width="128"
            height="128"
            draggable={false}
            aria-label={`${sliderItem.title} logo`}
          />
        </Link>
      </div>

      <div className="mx-auto w-max rounded-3xl border border-gray-4 px-3 py-2 font-bold text-theme-contrary">
        {'keyword' in sliderItem ? sliderItem.keyword : sliderItem.badge}
      </div>

      <div className="grid h-20 content-start gap-2">
        <Link
          href={sliderItem.website}
          className="mx-auto font-bold text-theme-contrary"
          target="_blank"
        >
          <h2>{sliderItem.title}</h2>
        </Link>

        {'description' in sliderItem && (
          <p className="line-clamp-2 text-center italic">
            {sliderItem.description}
          </p>
        )}
      </div>

      {showActions && (
        <div
          className={`${
            isFirstItemInList
              ? 'visible translate-y-0 opacity-100'
              : 'invisible translate-y-4 opacity-0'
          } grid grid-cols-2 gap-4 transition group-hover:visible group-hover:translate-y-0 group-hover:opacity-100`}
        >
          <Link
            href={sliderItem.website}
            target="_blank"
            title={`Go to external ${sliderItem.title} website`}
            aria-label={`Go to external ${sliderItem.title} website`}
            className="button group flex h-16 items-center justify-center rounded-2xl transition hover:bg-gray-5"
          >
            <ArrowTopRightOnSquareIcon
              className={`${
                isFirstItemInList
                  ? 'text-theme-contrary'
                  : 'group-hover:text-theme-contrary'
              } h-5 w-5 transition`}
            />
          </Link>

          <button
            title={`Projects with ${sliderItem.title}`}
            aria-label={`Projects with ${sliderItem.title}`}
            className="relative flex h-16 items-center justify-center rounded-2xl hover:bg-gray-5"
            disabled
          >
            <ArrowLongRightIcon className="h-5 w-5 transition group-hover:text-theme-contrary" />
            <span
              title={`Projects with ${sliderItem.title}`}
              aria-label={`Projects with ${sliderItem.title}`}
              className="absolute top-0 -translate-y-2 rounded bg-accent p-1 px-1.5 text-xs text-white"
            >
              Soon
            </span>
          </button>
        </div>
      )}
    </div>
  );
}
