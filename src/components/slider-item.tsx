import { Social, Technology, Tool } from '@/interfaces';
import Link from 'next/link';
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/solid';
import { ArrowUpRightIcon } from '@heroicons/react/24/outline';
import Brand from '@/components/ui/brand';
import type { Brand as BrandType } from '@/types';
import { cn } from '@/utils';
import Button from '@/components/atoms/button';

export default function SliderItem({
  sliderItem,
  type,
  showActions,
  isFirstItemInList,
  className
}: {
  sliderItem: Tool | Technology | Social;
  type: 'Tool' | 'Technology' | 'Social';
  showActions?: boolean;
  isFirstItemInList?: boolean;
  className?: string;
}) {
  return (
    <div className={cn('group w-80 space-y-6 whitespace-normal', className)}>
      <div className="interactive relative mx-auto size-80 rounded-xl border border-gray-4 transition group-hover:bg-gray-5">
        <Link
          href={sliderItem.website}
          className="absolute inset-0 flex size-full cursor-pointer items-center justify-center"
          target="_blank"
          title={`Go to ${sliderItem.title} page`}
          aria-label={`Go to ${sliderItem.title} page`}
        >
          <Brand
            brand={sliderItem.title as BrandType}
            className="h-32 w-auto"
            aria-label={`${sliderItem.title} logo`}
          />
        </Link>
      </div>

      <div className="mx-auto w-max rounded-3xl border border-gray-4 px-3 py-2 font-bold text-theme-contrary">
        {'keyword' in sliderItem ? sliderItem.keyword : sliderItem.badge}
      </div>

      <div
        className={cn(
          'grid content-start gap-2',
          (type === 'Tool' || type === 'Technology') && 'h-20'
        )}
      >
        <Link
          href={sliderItem.website}
          className="group mx-auto flex items-center gap-2 font-bold text-theme-contrary"
          target="_blank"
        >
          <h2>{sliderItem.title}</h2>
          {type === 'Social' && (
            <ArrowUpRightIcon className="size-5 shrink-0 text-gray transition group-hover:text-theme-contrary" />
          )}
        </Link>

        {'description' in sliderItem && (
          <p className="line-clamp-2 h-16 text-center italic">
            {sliderItem.description}
          </p>
        )}
      </div>

      {showActions && (
        <div
          className={`${
            isFirstItemInList
              ? 'visible translate-y-0 opacity-100'
              : 'sm:invisible sm:translate-y-4 sm:opacity-0'
          } text-center transition sm:group-hover:visible sm:group-hover:translate-y-0 sm:group-hover:opacity-100`}
        >
          <Button
            priority="secondary"
            asLink
            href={sliderItem.website}
            target="_blank"
            title={`Go to external ${sliderItem.title} website`}
            aria-label={`Go to external ${sliderItem.title} website`}
            className="mx-auto"
          >
            <ArrowTopRightOnSquareIcon
              className={`${
                isFirstItemInList
                  ? 'text-theme-contrary'
                  : 'group-hover:text-theme-contrary'
              } size-5 transition`}
            />
          </Button>
        </div>
      )}
    </div>
  );
}
