'use client';

import { useState } from 'react';

import { Tooltip } from '@/components/ui/tooltip';

import { cn } from '@/lib/utils';

import type { TermProps } from './types';

// Inline word with a round dotted accent underline. Hover, focus or a click (tap) shows the
// hint in a tooltip; a click keeps it open until Esc, a click elsewhere or blur.
// The dots are a repeating radial-gradient tile (about 3 px circles, 6 px pitch): native
// `text-decoration: dotted` draws square dots in some browsers, a tile is round everywhere.
// In Wireframe the dots give way to the pencil underline (`--sketch-hr-line` mask, as on the
// `text-*` button hover); the label never wraps, so the one stroke always sits under the whole word.
export function Term({ hint, children, className }: TermProps) {
  const [open, setOpen] = useState(false);

  return (
    <Tooltip
      content={hint}
      open={open}
      onOpenChange={setOpen}
      closeOnClick={false}
      render={
        <span
          tabIndex={0}
          onClick={() => setOpen(true)}
          className={cn(
            'relative cursor-pointer rounded-sm bg-[radial-gradient(circle_at_center,var(--primary)_0.0725rem,transparent_0.0875rem)] bg-size-[0.34rem_0.17rem] bg-position-[0_100%] [background-repeat:round_no-repeat] pb-[0.05em] whitespace-nowrap',
            "in-data-[theme=wireframe]:bg-none in-data-[theme=wireframe]:after:pointer-events-none in-data-[theme=wireframe]:after:absolute in-data-[theme=wireframe]:after:inset-x-0 in-data-[theme=wireframe]:after:-bottom-1 in-data-[theme=wireframe]:after:h-2 in-data-[theme=wireframe]:after:bg-primary in-data-[theme=wireframe]:after:mask-(--sketch-hr-line) in-data-[theme=wireframe]:after:mask-size-[100%_100%] in-data-[theme=wireframe]:after:mask-no-repeat in-data-[theme=wireframe]:after:content-['']",
            className
          )}
        />
      }
    >
      {children}
    </Tooltip>
  );
}
