import Link from 'next/link';

import { ArrowUpRightIcon } from '@heroicons/react/16/solid';

import { BrandLogo } from '@/components/feature/brand';
import type { Brand } from '@/components/feature/brand';

export function BrandRow({
  brand,
  showDescription = true,
  index
}: {
  brand: Brand;
  showDescription?: boolean;
  index: number;
}) {
  return (
    <Link
      href={brand.href}
      title={`Go to external ${brand.name} website`}
      aria-label={`Click to go to external ${brand.name} website`}
      target="_blank"
      className="group relative flex items-center justify-between gap-3 rounded-2xl p-2 hover:bg-muted motion-safe:transition xs:gap-4 xl:gap-8"
    >
      <div className="flex items-center gap-6 sm:gap-8">
        <BrandLogo
          id={`brand-row-${brand.name}-${index}`}
          brand={brand.name}
          className="size-8 shrink-0 xs:size-11 sm:size-12 [&>svg]:size-8 xs:[&>svg]:size-11"
        />

        <div className="break-words">
          <b>{brand.name}</b>

          {showDescription && brand.description && (
            <p className="hidden leading-snug font-normal text-muted-foreground sm:block">
              {brand.description}
            </p>
          )}
        </div>
      </div>

      <ArrowUpRightIcon
        aria-hidden
        className="size-4 shrink-0 text-muted-foreground group-hover:text-foreground"
      />
    </Link>
  );
}
