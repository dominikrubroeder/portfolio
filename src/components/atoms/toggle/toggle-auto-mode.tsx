'use client';

import { cn } from '@/lib/utils';

import { Toggle } from '@/components/atoms/toggle';
import { useTheme } from '@/components/organisms/theme';

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
