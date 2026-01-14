import { Button } from '@/components/atoms/button';
import Link from 'next/link';
import type { Brand } from '@/components/organisms/brand';
import { BrandLogo } from '@/components/atoms/brand-logo';
import { ArrowUpRightIcon } from '@heroicons/react/16/solid';
import { KnowledgeBar } from '@/components/atoms/knowledge-bar';
import { cn } from '@/lib/utils';

export function BrandRow({
  brand,
  showKnowledgeBar,
  showDescription = true
}: {
  brand: Brand;
  showKnowledgeBar?: boolean;
  showDescription?: boolean;
}) {
  return (
    <Link
      href={brand.href}
      title={`Go to external ${brand.name} website`}
      aria-label={`Go to external ${brand.name} website`}
      target="_blank"
      className="group relative flex w-full items-center justify-between gap-3 rounded p-2 transition hover:bg-muted xs:gap-4"
    >
      <span className="sr-only">{`Go to external ${brand.name} website`}</span>

      <div className="flex flex-1 items-center gap-4 sm:gap-8">
        <BrandLogo
          brand={brand.name}
          className="size-8 min-h-0 min-w-0 sm:size-10 [&>svg]:size-8 sm:[&>svg]:size-10"
        />

        <div className="flex-1">
          <div className="self-center text-sm leading-normal font-bold break-all sm:text-base">
            {brand.name}
          </div>

          {showDescription && brand.description && (
            <p className="hidden w-0 leading-normal text-muted-foreground sm:block sm:w-auto">
              {brand.description}
            </p>
          )}
        </div>
      </div>

      <div className="flex items-center justify-between gap-2 sm:gap-4">
        {showKnowledgeBar && <KnowledgeBar progress={brand.knowledge} />}

        <Button
          variant="text-muted"
          className={cn(showKnowledgeBar && 'hidden sm:flex')}
        >
          <ArrowUpRightIcon className="size-5" />
          <span className="sr-only">Go to external ${brand.name} website</span>
        </Button>
      </div>
    </Link>
  );
}
