import { Button } from '@/components/atoms/button';
import Link from 'next/link';
import type { Brand } from '@/components/organisms/brand';
import { BrandLogo } from '@/components/atoms/brand-logo';
import { ArrowUpRightIcon } from '@heroicons/react/16/solid';
import { cn } from '@/lib/utils';

export function BrandRow({
  brand,
  showKnowledgeBar,
  showDescription = true,
  index
}: {
  brand: Brand;
  showKnowledgeBar?: boolean;
  showDescription?: boolean;
  index: number;
}) {
  return (
    <Link
      href={brand.href}
      title={`Go to external ${brand.name} website`}
      aria-label={`Click to go to external ${brand.name} website`}
      target="_blank"
      className="group relative flex items-center justify-between gap-3 rounded p-2 hover:bg-muted motion-safe:transition xs:gap-4 xl:gap-8"
    >
      <div className="flex items-center gap-3 sm:gap-8">
        <BrandLogo
          id={`brand-row-${brand.name}-${index}`}
          brand={brand.name}
          className="size-8 xs:size-11 sm:size-12 [&>svg]:size-8 xs:[&>svg]:size-11 sm:[&>svg]:size-12"
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

      <Button
        variant="text-muted"
        title={`Go to external ${brand.name} website`}
        aria-label={`Click to go to external ${brand.name} website`}
        className={cn(showKnowledgeBar && 'hidden xs:block')}
      >
        <ArrowUpRightIcon className="size-4" />
        <span className="sr-only">Go to external ${brand.name} website</span>
      </Button>
    </Link>
  );
}
