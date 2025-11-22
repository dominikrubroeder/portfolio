'use client';

import { cn } from '@/lib/utils';

import { Toggle } from '@/components/atoms/toggle';
import { useTheme } from '@/components/organisms/theme';

export function DesignModeToggle({ className }: { className?: string }) {
  const { themeMode, setThemeMode } = useTheme();

  return (
    <div className={cn('inline-grid gap-4 rounded border p-4', className)}>
      <Toggle
        label="Design mode"
        onClick={() => {
          setThemeMode('design');
        }}
        enabled={themeMode === 'design'}
      />
    </div>
  );
}
