'use client';

import { Toggle } from '@/components/atoms/toggle';
import { cn } from '@/lib/utils';
import { useTheme } from '@/components/organisms/context/theme-context';

export function DevModeToggle({ className }: { className?: string }) {
  const { theme, setTheme } = useTheme();

  return (
    <div className={cn('inline-grid gap-4 rounded border p-4', className)}>
      <Toggle
        label="Dev mode"
        onClick={() => {
          setTheme('dev');
        }}
        enabled={theme === 'dev'}
      />
    </div>
  );
}
