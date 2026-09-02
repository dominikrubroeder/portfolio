'use client';

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger
} from '@/components/atoms/tooltip';
import { Button } from '@/components/atoms/button';
import { ArrowUturnLeftIcon } from '@heroicons/react/16/solid';
import { useRouter } from 'next/navigation';

export function PlaygroundAnimationTrigger() {
  const { refresh } = useRouter();

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button
          variant="ghost-muted"
          aria-label="Replay animation"
          title="Replay animation"
          onClick={refresh}
        >
          <span className="sr-only">Restart animation</span>
          <ArrowUturnLeftIcon />
        </Button>
      </TooltipTrigger>
      <TooltipContent className="mr-4">
        <p>Restart animation</p>
      </TooltipContent>
    </Tooltip>
  );
}
