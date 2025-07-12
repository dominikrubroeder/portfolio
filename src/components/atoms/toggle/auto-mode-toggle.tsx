'use client';

import { cn } from '@/lib/utils';

import { Toggle } from '@/components/atoms/toggle';
import { useTheme } from '@/components/organisms/theme';

export function AutoModeToggle({ className }: { className?: string }) {
  const { appearance, setAppearance } = useTheme();

  return (
    <Toggle
      label="Auto mode"
      onClick={() => {
        setAppearance('system');
      }}
      className={cn('shrink-0 rounded border p-4', className)}
      enabled={appearance === 'system'}
    />
  );
}
