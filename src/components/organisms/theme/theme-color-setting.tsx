'use client';

import { CheckIcon } from '@heroicons/react/16/solid';

import { useTheme } from '@/components/organisms/theme';
import { ButtonGroup } from '@/components/molecules/button-group';
import { BaseComponentProps } from '@/lib/types';

export function ThemeColorSetting({ className }: BaseComponentProps) {
  const { themeColor, setThemeColor, isInitialized } = useTheme();

  return (
    <ButtonGroup className={className}>
      {/** TODO: Replace fixed color values with color variables */}
      <button
        className="flex size-6.5 shrink-0 items-center justify-center rounded-full border border-blue bg-blue hover:scale-110 hover:border-blue active:scale-100 sm:size-8 [html[data-theme=default]_&]:motion-safe:interactive"
        onClick={() => setThemeColor('blue')}
      >
        {isInitialized && themeColor === 'blue' && (
          <CheckIcon className="size-3.5 shrink-0 text-blue-foreground sm:size-4" />
        )}
      </button>

      <button
        className="flex size-6.5 shrink-0 items-center justify-center rounded-full border-violett bg-violett hover:scale-110 hover:border-violett active:scale-100 sm:size-8 [html[data-theme=default]_&]:motion-safe:interactive"
        onClick={() => setThemeColor('violett')}
      >
        {((isInitialized && themeColor === 'primary') ||
          themeColor === 'violett') && (
          <CheckIcon className="size-3.5 shrink-0 text-violett-foreground sm:size-4" />
        )}
      </button>

      <button
        className="flex size-6.5 shrink-0 items-center justify-center rounded-full border border-orange bg-orange hover:scale-110 hover:border-orange active:scale-100 sm:size-8 [html[data-theme=default]_&]:motion-safe:interactive"
        onClick={() => setThemeColor('orange')}
      >
        {isInitialized && themeColor === 'orange' && (
          <CheckIcon className="size-3.5 shrink-0 text-orange-foreground sm:size-4" />
        )}
      </button>
    </ButtonGroup>
  );
}
