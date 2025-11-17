'use client';

import { CheckIcon } from '@heroicons/react/16/solid';

import { useTheme } from '@/components/organisms/theme';
import { ButtonGroup } from '@/components/molecules/button-group';
import { ComponentBaseProps } from '@/lib/types';

export function ThemeColorSetting({ className }: ComponentBaseProps) {
  const { setTheme, theme } = useTheme();

  return (
    <ButtonGroup className={className}>
      {/** TODO: Replace fixed color values with color variables */}
      <button
        className="flex size-8 shrink-0 interactive items-center justify-center rounded-full border border-blue-600 bg-blue-600 hover:scale-110 hover:border-blue-600 active:scale-100"
        onClick={() => setTheme('blue')}
      >
        {theme === 'blue' && (
          <CheckIcon className="size-4 shrink-0 text-white" />
        )}
      </button>

      <button
        className="flex size-8 shrink-0 interactive items-center justify-center rounded-full border-[#7d54f8] bg-[#7d54f8] hover:scale-110 hover:border-[#7d54f8] active:scale-100"
        onClick={() => setTheme('primary')}
      >
        {theme === 'primary' && (
          <CheckIcon className="size-4 shrink-0 text-white" />
        )}
      </button>

      <button
        className="flex size-8 shrink-0 interactive items-center justify-center rounded-full border border-orange-600 bg-orange-600 hover:scale-110 hover:border-orange-600 active:scale-100"
        onClick={() => setTheme('orange')}
      >
        {theme === 'orange' && (
          <CheckIcon className="size-4 shrink-0 text-white" />
        )}
      </button>
    </ButtonGroup>
  );
}
