import React from 'react';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/solid';
import { Brand } from '@/components/atoms/brand';
import { Button } from '@/components/atoms/button';
import { ExperienceBar } from '@/components/atoms/experience-bar';
import DevModeLabel from '@/components/atoms/dev-mode-label';
import type { Tool } from '@/components/organisms/tools/types';

export default function Tool({ tool, group }: { tool: Tool; group: string }) {
  return (
    <div className="group relative w-80 space-y-6 text-center whitespace-normal">
      <div
        className={cn(
          'absolute top-4 right-4 z-10 text-center transition sm:invisible sm:translate-y-4 sm:opacity-0 sm:group-hover:visible sm:group-hover:translate-y-0 sm:group-hover:opacity-100'
        )}
      >
        <Button
          variant="ghost"
          href={tool.website}
          target="_blank"
          title={`Go to external ${tool.title} website`}
          aria-label={`Go to external ${tool.title} website`}
          className="mx-auto min-h-11 min-w-11 shrink-0"
        >
          <span className="sr-only">Open</span>
          <ArrowTopRightOnSquareIcon className="size-5 transition group-hover:text-foreground" />
        </Button>
      </div>

      <Link
        href={tool.website}
        className="group relative mx-auto flex size-80 interactive cursor-pointer items-center justify-center rounded-xl border transition hover:bg-muted"
        target="_blank"
        title={`Go to ${tool.title} website`}
        aria-label={`Go to ${tool.title} website`}
        rel="noopener noreferrer"
      >
        <DevModeLabel className="z-10">div | slider-item.tsx</DevModeLabel>

        <Brand
          brand={tool.title}
          className="h-32 w-auto transition group-hover:scale-105"
          aria-label={`${tool.title} logo`}
        />

        <ExperienceBar
          progress={tool.knowledge}
          className="absolute right-5 bottom-4 text-right"
        />
      </Link>

      <div className="mx-auto inline-flex rounded-3xl border px-3 py-2 font-bold text-foreground">
        {group}
      </div>

      <div>
        <Link
          href={tool.website}
          className="mx-auto inline-flex items-center justify-center gap-1 font-bold text-foreground"
          title={`Go to external ${tool.title} website`}
          aria-label={`Go to external ${tool.title} website`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>{tool.title}</h2>
        </Link>

        <p className="text-center italic">{tool.description}</p>
      </div>
    </div>
  );
}
