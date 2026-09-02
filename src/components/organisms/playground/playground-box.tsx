'use client';

import Link from 'next/link';
import { PlaygroundComponent } from '@/components/organisms/playground/types';
import { ArrowRight } from 'lucide-react';
import { Badge } from '@/components/atoms/badge';

export function PlaygroundBox({
  playgroundComponent
}: {
  playgroundComponent: PlaygroundComponent;
}) {
  const { id, title, filename, component } = playgroundComponent;

  return (
    <div className="relative rounded-2xl border bg-background">
      <div className="group relative flex h-64 items-center justify-center overflow-hidden p-4">
        {component}
        <Badge className="absolute right-4 bottom-4">Ongoing</Badge>
      </div>

      <Link
        href={`/playground/${id}`}
        className="group interactive-none flex w-full shrink-0 gap-2 border-t px-4 py-3"
      >
        <div className="flex-1">
          <h2 className="h2 sticky-none leading-snug group-hover:text-primary">
            {title}
          </h2>
          <span className="block hover:text-muted-foreground">{filename}</span>
        </div>
        <ArrowRight />
      </Link>
    </div>
  );
}
