'use client';

import { Toggle } from '@/components/ui/toggle';

import { useTheme } from '@/components/feature/theme';

import { cn } from '@/lib/utils';

export function ToggleDevMode({ className }: { className?: string }) {
  const { themeMode, setThemeMode } = useTheme();

  return (
    <div className={cn('inline-grid gap-4 rounded border p-4', className)}>
      <Toggle
        label="Dev mode"
        onClick={() => {
          setThemeMode('dev');
        }}
        isEnabled={themeMode === 'dev'}
      />
    </div>
  );
}
