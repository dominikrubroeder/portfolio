'use client';

import { Toggle } from '@/components/ui/toggle';

import { useTheme } from '@/components/feature/theme';

import { cn } from '@/lib/utils';

export function ToggleAutoMode({ className }: { className?: string }) {
  const { themeAppearance, setThemeAppearance } = useTheme();

  return (
    <Toggle
      label="Auto mode"
      onClick={() => {
        setThemeAppearance('system');
      }}
      className={cn('shrink-0 rounded border p-4', className)}
      isEnabled={themeAppearance === 'system'}
    />
  );
}
