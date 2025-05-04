'use client';

import { Toggle } from '@/components/atoms/toggle';
import { cn } from '@/lib/utils';
import { useApp } from '@/components/organisms/context/app-context';

export function DesignModeToggle({ className }: { className?: string }) {
  const { theme, setTheme } = useApp();

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
