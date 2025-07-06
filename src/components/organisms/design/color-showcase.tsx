'use client';

import { CheckIcon } from '@heroicons/react/16/solid';

import { cn } from '@/lib/utils';

import { useApp } from '@/components/organisms/app';

export function ColorShowcase({ className }: { className?: string }) {
  const { setTheme, theme } = useApp();

  return (
    <div className={cn('flex gap-2', className)}>
      <span
        className="flex size-8 shrink-0 interactive items-center justify-center rounded-full border border-blue-600 bg-blue-600 hover:scale-110 hover:border-blue-600 active:scale-100"
        onClick={() => setTheme('blue')}
      >
        {theme === 'blue' && (
          <CheckIcon className="size-4 shrink-0 text-white" />
        )}
      </span>

      <span
        className="flex size-8 shrink-0 interactive items-center justify-center rounded-full border-primary bg-primary hover:scale-110 hover:border-primary active:scale-100"
        onClick={() => setTheme('primary')}
      >
        {theme === 'primary' && (
          <CheckIcon className="size-4 shrink-0 text-primary-foreground" />
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
