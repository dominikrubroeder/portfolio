'use client';

import { Toggle } from '@/components/atoms/toggle';
import { useUpdateSearchParams } from '@/hooks/useUpdateSearchParams';
import { cn } from '@/lib/utils';

export default function CleanViewToggle({ className }: { className?: string }) {
  const { updateSearchParams, searchParams } = useUpdateSearchParams();
  const cleanViewMode = searchParams.get('clean-view');

  return (
    <Toggle
      label="Clean view"
      onClick={() =>
        updateSearchParams({
          withName: 'clean-view',
          withValue: cleanViewMode ? 'false' : 'true'
        })
      }
      className={cn('shrink-0', className)}
      enabled={cleanViewMode === 'true'}
    />
  );
}
