'use client';

import { ReactNode } from 'react';
import { useLiveEdit } from '@/components/organisms/live-edit/live-edit-context';
import { Badge } from '@/components/atoms/badge';
import { cn } from '@/lib/utils';
import { LiveEditDrawer } from '@/components/organisms/live-edit/live-edit-drawer';

export function LiveEditContainer({
  componentName,
  children
}: {
  componentName: string;
  children: ReactNode;
}) {
  const { liveEditEnabled } = useLiveEdit();

  return (
    <div
      className={cn(
        liveEditEnabled &&
          'relative interactive overflow-visible rounded border hover:border-primary'
      )}
    >
      {liveEditEnabled && (
        <Badge className="absolute -top-4 right-4">{componentName}</Badge>
      )}

      {liveEditEnabled && <LiveEditDrawer componentName={componentName} />}

      {children}
    </div>
  );
}
