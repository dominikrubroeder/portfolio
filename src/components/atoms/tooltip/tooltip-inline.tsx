'use client';

import { ReactNode, useState } from 'react';
import { Button } from '@/components/atoms/button';
import { PlusIcon } from '@heroicons/react/16/solid';

export function TooltipInline({
  children,
  initialChildren
}: {
  children: ReactNode;
  initialChildren?: ReactNode;
}) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div>
      {isExpanded ? (
        <>
          {children}
          <Button title="Expand" aria-label="Click to expand">
            <PlusIcon />
          </Button>
        </>
      ) : (
        children
      )}
    </div>
  );
}
