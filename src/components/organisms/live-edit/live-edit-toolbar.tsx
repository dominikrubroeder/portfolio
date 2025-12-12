'use client';

import { useLiveEdit } from '@/components/organisms/live-edit/live-edit-context';
import { cn } from '@/lib/utils';
import { LiveEditDrawer } from '@/components/organisms/live-edit/live-edit-drawer';
import { ButtonGroup } from '@/components/molecules/button-group';
import { Button } from '@/components/atoms/button';
import { XMarkIcon } from '@heroicons/react/16/solid';
import { VerticalLine } from '@/components/atoms/VerticalLine';

export function LiveEditToolbar() {
  const { liveEditEnabled, isOpenToolbar, setIsOpenToolbar, liveEditElement } =
    useLiveEdit();

  if (!liveEditEnabled) return null;

  return (
    <div
      className={cn(
        'fixed bottom-4 left-1/2 z-50 flex -translate-x-1/2 animate-fade-up-1rem items-center justify-center gap-4 rounded bg-primary px-3 py-1 pl-4.5 text-primary-foreground',
        liveEditEnabled && isOpenToolbar && 'translate-y-0'
      )}
    >
      <div>{liveEditElement?.name}</div>

      <ButtonGroup className="gap-0">
        {liveEditElement?.name && (
          <LiveEditDrawer componentName={liveEditElement?.name} />
        )}

        <VerticalLine />

        <Button
          onClick={() => {
            setIsOpenToolbar(false);
          }}
        >
          <span className="sr-only">Close toolbar</span>
          <XMarkIcon />
        </Button>
      </ButtonGroup>
    </div>
  );
}
