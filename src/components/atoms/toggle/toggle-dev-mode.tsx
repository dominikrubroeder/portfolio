'use client';

import { cn } from '@/lib/utils';

import { Toggle } from '@/components/atoms/toggle';
import { useTheme } from '@/components/organisms/theme';

export function ToggleDevMode({ className }: { className?: string }) {
  const { themeMode, setThemeMode } = useTheme();

  return (
    <div className={cn('inline-grid gap-4 rounded border p-4', className)}>
      <Toggle
        label="Dev mode"
        onClick={() => {
          setThemeMode('dev');
        }}
        enabled={themeMode === 'dev'}
      />
    </div>
  );
}
