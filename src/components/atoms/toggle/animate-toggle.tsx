'use client';

import { Toggle } from '@/components/atoms/toggle';
import { useUpdateSearchParams } from '@/hooks/useUpdateSearchParams';
import { cn } from '@/lib/utils';

export default function AnimateToggle({ className }: { className?: string }) {
  const { updateSearchParams, searchParams } = useUpdateSearchParams();
  const animateMode = searchParams.get('animate');

  return (
    <Toggle
      label="Animate"
      onClick={() =>
        updateSearchParams({
          withName: 'animate',
          withValue: animateMode ? 'false' : 'true'
        })
      }
      className={cn('shrink-0', className)}
      enabled={animateMode === 'true'}
    />
  );
}
