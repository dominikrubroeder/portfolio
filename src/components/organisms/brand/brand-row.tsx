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
      className="group relative flex items-center justify-between gap-3 rounded p-2 transition hover:bg-muted xs:gap-4"
    >
      <span className="sr-only">{`Go to external ${brand.name} website`}</span>

      <div className="flex min-w-0 flex-1 basis-0 items-center gap-4 overflow-hidden sm:gap-8">
        <BrandLogo
          brand={brand.name}
          className="size-11 min-h-0 min-w-0 sm:size-12 [&>svg]:size-11 sm:[&>svg]:size-12"
        />

        <div className="max-w-full min-w-0">
          <div className="max-w-full truncate text-sm font-bold sm:text-base">
            {brand.name}
          </div>

          {showDescription && brand.description && (
            <p className="hidden text-muted-foreground sm:block">
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
