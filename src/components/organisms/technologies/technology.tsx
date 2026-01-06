import React from 'react';

import Link from 'next/link';

import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/solid';

import { cn } from '@/lib/utils';

import { BrandLogo } from '@/components/atoms/brand-logo';
import { Button } from '@/components/atoms/button';
import DevModeLabel from '@/components/atoms/dev-mode-label';
import { KnowledgeBar } from '@/components/atoms/knowledge-bar';
import type { Brand } from '@/components/organisms/brand';

export default function Technology({
  technology,
  group
}: {
  technology: Brand;
  group: string;
}) {
  return (
    <div className="group relative w-80 space-y-6 text-center whitespace-normal">
      <div
        className={cn(
          'absolute top-4 right-4 z-10 text-center transition sm:invisible sm:translate-y-4 sm:opacity-0 sm:group-hover:visible sm:group-hover:translate-y-0 sm:group-hover:opacity-100'
        )}
      >
        <Button
          variant="ghost"
          href={technology.href}
          target="_blank"
          title={`Go to external ${technology.name} website`}
          aria-label={`Go to external ${technology.name} website`}
          className="mx-auto min-h-11 min-w-11 shrink-0"
        >
          <span className="sr-only">Open</span>
          <ArrowTopRightOnSquareIcon className="size-5 transition group-hover:text-foreground" />
        </Button>
      </div>

      <Link
        href={technology.href}
        className="group relative mx-auto flex size-80 interactive cursor-pointer items-center justify-center rounded-xl border transition hover:bg-muted"
        target="_blank"
        title={`Go to ${technology.name} website`}
        aria-label={`Go to ${technology.name} website`}
        rel="noopener noreferrer"
      >
        <DevModeLabel className="z-10">div | slider-item.tsx</DevModeLabel>

        <BrandLogo
          brand={technology.name}
          className="h-32 w-auto transition group-hover:scale-105"
          aria-label={`${technology.name} logo`}
        />

        <KnowledgeBar
          progress={technology.knowledge}
          className="absolute right-5 bottom-4 text-right"
        />
      </Link>

      <div className="mx-auto inline-flex rounded-3xl border px-3 py-2 font-bold text-foreground">
        {group}
      </div>

      <div>
        <Link
          href={technology.href}
          className="mx-auto inline-flex items-center justify-center gap-1 font-bold text-foreground"
          target="_blank"
          title={`Go to external ${technology.name} website`}
          aria-label={`Go to external ${technology.name} website`}
          rel="noopener noreferrer"
        >
          <h2>{technology.name}</h2>
        </Link>

        <p className="text-center italic">{technology.description}</p>
      </div>
    </div>
  );
}
