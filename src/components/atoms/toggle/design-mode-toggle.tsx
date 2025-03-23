'use client';

import { Toggle } from '@/components/atoms/toggle';
import { cn } from '@/lib/utils';
import { useTheme } from '@/components/organisms/context/theme-context';

export function DesignModeToggle({ className }: { className?: string }) {
  const { theme, setTheme } = useTheme();

  return (
    <div className={cn('inline-grid gap-4 rounded border p-4', className)}>
      <Toggle
        label="Design mode"
        onClick={() => {
          setTheme('design');
        }}
        enabled={theme === 'design'}
      />
    </div>
  );
}
