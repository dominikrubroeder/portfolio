import Image from 'next/image';
import Link from 'next/link';

import {
  EVENTS_WINTER_SCENE_ENABLED,
  SantasCap
} from '@/components/feature/events';

import { cn } from '@/lib/utils';

export function Avatar({
  width,
  height,
  as,
  className
}: {
  width: number;
  height: number;
  as?: 'Image' | 'Link';
  className?: string;
}) {
  if (as === 'Image')
    return (
      <Image
        src="/avatar.jpg"
        alt="Image of Dominik Rubröder"
        width={width}
        height={height}
        className={cn(
          'shrink-0 rounded-full border-2 in-data-[theme=wireframe]:border-foreground',
          className
        )}
        draggable={false}
        loading="eager"
      />
    );

  return (
    <Link
      href="/"
      className="relative shrink-0 interactive hover:scale-[1.06] active:scale-[0.98] motion-safe:transition"
      title="Go to Introduction"
      aria-label="Go to Introduction"
    >
      {EVENTS_WINTER_SCENE_ENABLED && (
        <SantasCap className="absolute -top-5 left-1/2 z-10 -translate-x-1/2 -rotate-12" />
      )}

      <Image
        src="/avatar.jpg"
        alt="Image of Dominik Rubröder"
        width={width}
        height={height}
        className={cn(
          'shrink-0 rounded-full border-2 in-data-[theme=wireframe]:border-foreground',
          className
        )}
        draggable={false}
        loading="eager"
      />
    </Link>
  );
}
