'use client';

import { ReactNode } from 'react';
import { Button } from '@/components/atoms/button';
import { ButtonGroup } from '@/components/molecules/button-group';
import { ArrowUturnLeftIcon, PauseIcon } from '@heroicons/react/16/solid';

export function PlaygroundBox({
  title,
  filename,
  children
}: {
  title: string;
  filename: string;
  children: ReactNode;
}) {
  return (
    <div className="relative rounded-2xl border bg-background">
      <div className="group relative flex h-64 items-center justify-center overflow-hidden p-4">
        {children}

        <div className="absolute bottom-0 left-0 flex w-full justify-end p-3 px-4 transition sm:invisible sm:translate-y-2 sm:group-hover:visible sm:group-hover:translate-y-0">
          <ButtonGroup>
            <Button
              variant="ghost-muted"
              aria-label="Stop animation"
              title="Stop animation"
            >
              <span className="sr-only">Stop</span>
              <PauseIcon />
            </Button>
            <Button
              variant="ghost-muted"
              aria-label="Replay animation"
              title="Replay animation"
            >
              <span className="sr-only">Replay</span>
              <ArrowUturnLeftIcon />
            </Button>
          </ButtonGroup>
        </div>
      </div>

      <div className="border-t px-4 py-3">
        <b className="block">{title}</b> {filename}
      </div>
    </div>
  );
}
