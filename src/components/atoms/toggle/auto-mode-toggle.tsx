'use client';

import { Toggle } from '@/components/atoms/toggle';
import { cn } from '@/lib/utils';
import { useTheme } from '@/components/organisms/app-context';

export function AutoModeToggle({ className }: { className?: string }) {
  const { theme, setTheme } = useTheme();

  return (
    <Toggle
      label="Auto mode"
      onClick={() => {
        setTheme('auto');
      }}
      className={cn('shrink-0 rounded border p-4', className)}
      enabled={theme === 'auto'}
    />
  );
}
