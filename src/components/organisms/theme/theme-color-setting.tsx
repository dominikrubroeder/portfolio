'use client';

import { CheckIcon } from '@heroicons/react/16/solid';

import { cn } from '@/lib/utils';

import { useTheme } from '@/components/organisms/theme';

export function ThemeColorSetting({ className }: { className?: string }) {
  const { setTheme, theme } = useTheme();

  return (
    <div className={cn('flex gap-2', className)}>
      {/** TODO: Replace fixed color values with color variables */}
      <span
        className="flex size-8 shrink-0 interactive items-center justify-center rounded-full border border-blue-600 bg-blue-600 hover:scale-110 hover:border-blue-600 active:scale-100"
        onClick={() => setTheme('blue')}
      >
        {theme === 'blue' && (
          <CheckIcon className="size-4 shrink-0 text-white" />
        )}
      </span>

      <span
        className="flex size-8 shrink-0 interactive items-center justify-center rounded-full border-[#7d54f8] bg-[#7d54f8] hover:scale-110 hover:border-[#7d54f8] active:scale-100"
        onClick={() => setTheme('primary')}
      >
        {theme === 'primary' && (
          <CheckIcon className="size-4 shrink-0 text-white" />
        )}
      </span>

      <span
        className="flex size-8 shrink-0 interactive items-center justify-center rounded-full border border-orange-600 bg-orange-600 hover:scale-110 hover:border-orange-600 active:scale-100"
        onClick={() => setTheme('orange')}
      >
        {theme === 'orange' && (
          <CheckIcon className="size-4 shrink-0 text-white" />
        )}
      </span>
    </div>
  );
}
