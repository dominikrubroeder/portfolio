'use client';

import Image from 'next/image';

import { Dialog } from '@base-ui/react/dialog';

import { cn } from '@/lib/utils';

const AVATAR_ALT = 'Image of Dominik Rubröder';

export function AvatarLightbox({
  width,
  height,
  className
}: {
  width: number;
  height: number;
  className?: string;
}) {
  return (
    <Dialog.Root>
      <Dialog.Trigger
        className="relative shrink-0 interactive cursor-zoom-in rounded-full hover:scale-[1.06] active:scale-[0.98] motion-safe:transition"
        title="Enlarge photo"
        aria-label="Enlarge photo of Dominik Rubröder"
      >
        <Image
          src="/avatar.jpg"
          alt={AVATAR_ALT}
          width={width}
          height={height}
          className={cn('shrink-0 rounded-full border-2', className)}
          draggable={false}
          loading="eager"
        />
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Backdrop className="fixed inset-0 z-100 bg-background/90 duration-250 [animation-timing-function:cubic-bezier(0.22,1,0.36,1)] motion-reduce:animate-none data-open:animate-in data-open:fade-in-0 data-closed:animate-out data-closed:fade-out-0" />
        <Dialog.Popup className="fixed top-1/2 left-1/2 z-max size-[min(80vmin,31.25rem)] -translate-x-1/2 -translate-y-1/2 duration-250 outline-none [animation-timing-function:cubic-bezier(0.22,1,0.36,1)] motion-reduce:animate-none data-open:animate-in data-open:fade-in-0 data-open:zoom-in-80 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-90">
          <Dialog.Title className="sr-only">
            Photo of Dominik Rubröder
          </Dialog.Title>
          <Dialog.Close
            className="block size-full cursor-zoom-out rounded-full"
            aria-label="Close photo"
          >
            <Image
              src="/avatar.jpg"
              alt={AVATAR_ALT}
              width={500}
              height={500}
              className="size-full max-w-none rounded-full border-2"
              draggable={false}
            />
          </Dialog.Close>
        </Dialog.Popup>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
