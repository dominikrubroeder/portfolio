import React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/solid';
import { Brand } from '@/components/atoms/brand';
import { Button } from '@/components/atoms/button';
import { ExperienceBar } from '@/components/atoms/experience-bar';
import DevModeLabel from '@/components/atoms/dev-mode-label';
import type { Technology } from '@/components/organisms/technologies/types';

export default function Technology({
  technology,
  group
}: {
  technology: Technology;
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
          href={technology.website}
          target="_blank"
          title={`Go to external ${technology.title} website`}
          aria-label={`Go to external ${technology.title} website`}
          className="mx-auto min-h-11 min-w-11 shrink-0"
        >
          <span className="sr-only">Open</span>
          <ArrowTopRightOnSquareIcon className="size-5 transition group-hover:text-foreground" />
        </Button>
      </div>

      <Link
        href={technology.website}
        className="group relative mx-auto flex size-80 interactive cursor-pointer items-center justify-center rounded-xl border transition hover:bg-muted"
        target="_blank"
        title={`Go to ${technology.title} website`}
        aria-label={`Go to ${technology.title} website`}
        rel="noopener noreferrer"
      >
        <DevModeLabel className="z-10">div | slider-item.tsx</DevModeLabel>

        <Brand
          brand={technology.title}
          className="h-32 w-auto transition group-hover:scale-105"
          aria-label={`${technology.title} logo`}
        />

        <ExperienceBar
          progress={technology.knowledge}
          className="absolute right-5 bottom-4 text-right"
        />
      </Link>

      <div className="mx-auto inline-flex rounded-3xl border px-3 py-2 font-bold text-foreground">
        {group}
      </div>

      <div>
        <Link
          href={technology.website}
          className="mx-auto inline-flex items-center justify-center gap-1 font-bold text-foreground"
          target="_blank"
          title={`Go to external ${technology.title} website`}
          aria-label={`Go to external ${technology.title} website`}
          rel="noopener noreferrer"
        >
          <h2>{technology.title}</h2>
        </Link>

        <p className="text-center italic">{technology.description}</p>
      </div>
    </div>
  );
}
