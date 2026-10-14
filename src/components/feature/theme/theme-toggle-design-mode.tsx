'use client';

import { Toggle } from '@/components/ui/toggle';

import { useTheme } from '@/components/feature/theme';

import { cn } from '@/lib/utils';

export function ToggleDesignMode({ className }: { className?: string }) {
  const { themeMode, setThemeMode } = useTheme();

  return (
    <div className={cn('inline-grid gap-4 rounded border p-4', className)}>
      <Toggle
        label="Design mode"
        onClick={() => {
          setThemeMode('design');
        }}
        isEnabled={themeMode === 'design'}
      />
    </div>
  );
}
