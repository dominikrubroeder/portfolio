'use client';

import { cn } from '@/lib/utils';

import { Toggle } from '@/components/atoms/toggle';
import { useApp } from '@/components/organisms/app';

export function AutoModeToggle({ className }: { className?: string }) {
  const { appearance, setAppearance } = useApp();

  return (
    <Toggle
      label="Auto mode"
      onClick={() => {
        setAppearance('auto');
      }}
      className={cn('shrink-0 rounded border p-4', className)}
      enabled={appearance === 'auto'}
    />
  );
}
