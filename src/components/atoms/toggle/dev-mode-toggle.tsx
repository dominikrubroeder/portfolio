'use client';

import { Toggle } from '@/components/atoms/toggle';
import { cn } from '@/lib/utils';
import { useApp } from '@/components/organisms/context/app-context';

export function DevModeToggle({ className }: { className?: string }) {
  const { theme, setTheme } = useApp();

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
