import { Social, Technology } from '@/interfaces';
import Link from 'next/link';
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/solid';
import Brand from '@/components/atoms/brand';
import type { BrandType as BrandType } from '@/types';
import { cn } from '@/lib/utils';
import Button from '@/components/atoms/button';
import ExperienceBar from '@/components/atoms/experience-bar';
import { Tool } from '@/components/organisms/tools/types';
import { CheckBadgeIcon } from '@heroicons/react/24/outline';

export default function SliderItem({
  sliderItem,
  type,
  showActions,
  isFirstItemInList,
  className
}: {
  sliderItem: Technology | Social;
  type: 'Technology' | 'Social';
  showActions?: boolean;
  isFirstItemInList?: boolean;
  className?: string;
}) {
  return (
    <div className={cn('group w-80 space-y-6 whitespace-normal', className)}>
      <div className="interactive relative mx-auto size-80 rounded-xl border transition group-hover:bg-muted">
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

          {sliderItem['certificate'] && (
            <div className="absolute bottom-14 right-5 flex w-24 items-center justify-between gap-1">
              <span className="text-xs">Certified</span>
              <CheckBadgeIcon className="size-5 shrink-0 text-primary" />
            </div>
          )}

          <ExperienceBar
            progress={sliderItem['knowledge']}
            className="absolute bottom-4 right-5"
          />
        </Link>
      </div>

      {'type' in sliderItem && (
        <div className="mx-auto w-max rounded-3xl border px-3 py-2 font-bold text-foreground">
          {sliderItem.type}
        </div>
      )}

      <div
        className={cn(
          'grid content-start gap-2',
          (type === 'Tool' || type === 'Technology') && 'h-20'
        )}
      >
        {type === 'Social' ? (
          <Link
            href={sliderItem.website}
            className="group mx-auto flex items-center gap-2 font-bold text-foreground"
            target="_blank"
          >
            <h2>{sliderItem.title}</h2>
          </Link>
        ) : (
          <Link
            href={sliderItem.website}
            className="group mx-auto flex items-center gap-2 font-bold text-foreground"
            target="_blank"
          >
            <h2>{sliderItem.title}</h2>
          </Link>
        )}

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
            variant="secondary"
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
                  ? 'text-foreground'
                  : 'group-hover:text-foreground'
              } size-5 transition`}
            />
          </Button>
        </div>
      )}
    </div>
  );
}
