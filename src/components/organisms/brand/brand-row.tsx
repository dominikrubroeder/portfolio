import { Button } from '@/components/atoms/button';
import Link from 'next/link';
import type { Brand } from '@/components/organisms/brand';
import { BrandLogo } from '@/components/atoms/brand-logo';
import { ArrowUpRightIcon } from '@heroicons/react/16/solid';
import { KnowledgeBar } from '@/components/atoms/knowledge-bar';

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
      <div className="flex size-14 items-center justify-center [&>svg]:size-10">
        <span className="sr-only">{`Go to external ${brand.name} website`}</span>
        <BrandLogo brand={brand.name} className="size-10" />
      </div>

      <div className="flex-1">
        <div className="self-center leading-normal font-bold">{brand.name}</div>

        {showDescription && brand.description && (
          <p className="leading-normal text-muted-foreground">
            {brand.description}
          </p>
        )}
      </div>

      <div className="flex items-center justify-between gap-2 pl-8 sm:gap-4">
        {showKnowledgeBar && <KnowledgeBar progress={brand.knowledge} />}

        <Button variant="text-muted" className="hidden sm:flex">
          <ArrowUpRightIcon className="size-5" />
          <span className="sr-only">Go to external ${brand.name} website</span>
        </Button>
      </div>
    </Link>
  );
}
