'use client';

import { cn } from '@/lib/utils';

import { Toggle } from '@/components/atoms/toggle';
import { useApp } from '@/components/organisms/app';

export function AutoModeToggle({ className }: { className?: string }) {
  const { theme, setTheme } = useApp();

  return (
    <Toggle
      label="Auto mode"
      onClick={() => {
        setTheme('auto');
      }}
      className={cn('shrink-0 rounded border p-4', className)}
      enabled={theme === 'auto'}
    />
  );
}
