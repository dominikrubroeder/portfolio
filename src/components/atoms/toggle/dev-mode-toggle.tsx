'use client';

import { Toggle } from '@/components/atoms/toggle';
import { useUpdateSearchParams } from '@/hooks/useUpdateSearchParams';
import { cn } from '@/lib/utils';

export default function DevModeToggle({ className }: { className?: string }) {
  const { updateSearchParams, searchParams } = useUpdateSearchParams();
  const devMode = searchParams.get('devMode');

  return (
    <Toggle
      label="Dev mode"
      onClick={() =>
        updateSearchParams({
          withName: 'devMode',
          withValue: devMode ? 'false' : 'true'
        })
      }
      className={cn('shrink-0', className)}
      enabled={devMode === 'true'}
    />
  );
}
