'use client';

import { ReactNode } from 'react';
import { LiveEditDrawer, useLiveEdit } from '@/components/organisms/live-edit';
import { Badge } from '@/components/atoms/badge';
import { cn } from '@/lib/utils';

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
        <Badge className="absolute top-2 right-2">{componentName}</Badge>
      )}

      {liveEditEnabled && <LiveEditDrawer componentName={componentName} />}

      {children}
    </div>
  );
}
