'use client';

import { CheckIcon } from '@heroicons/react/16/solid';

import { useTheme } from '@/components/organisms/theme';
import { ButtonGroup } from '@/components/molecules/button-group';
import { ComponentBaseProps } from '@/lib/types';
import { useEffect } from 'react';

export function ThemeColorSetting({ className }: ComponentBaseProps) {
  const { theme, themeColor, setThemeColor } = useTheme();

  useEffect(() => {
    if (theme.key === 'wireframe') {
      setThemeColor(undefined);
    }

    if (theme.key === 'animate') {
      setThemeColor('primary');
    }

    if (theme.key === 'notes') {
      setThemeColor('orange');
    }
  }, [theme.key]);

  return (
    <ButtonGroup className={className}>
      {/** TODO: Replace fixed color values with color variables */}
      <button
        className="flex size-8 shrink-0 items-center justify-center rounded-full border border-blue bg-blue hover:scale-110 hover:border-blue active:scale-100 motion-safe:interactive"
        onClick={() => setThemeColor('blue')}
      >
        {themeColor === 'blue' && (
          <CheckIcon className="size-4 shrink-0 text-blue-foreground" />
        )}
      </button>

      <button
        className="flex size-8 shrink-0 items-center justify-center rounded-full border-violett bg-violett hover:scale-110 hover:border-violett active:scale-100 motion-safe:interactive"
        onClick={() => setThemeColor('violett')}
      >
        {(themeColor === 'primary' || themeColor === 'violett') && (
          <CheckIcon className="size-4 shrink-0 text-violett-foreground" />
        )}
      </button>

      <button
        className="flex size-8 shrink-0 items-center justify-center rounded-full border border-orange bg-orange hover:scale-110 hover:border-orange active:scale-100 motion-safe:interactive"
        onClick={() => setThemeColor('orange')}
      >
        {themeColor === 'orange' && (
          <CheckIcon className="size-4 shrink-0 text-orange-foreground" />
        )}
      </button>
    </ButtonGroup>
  );
}
