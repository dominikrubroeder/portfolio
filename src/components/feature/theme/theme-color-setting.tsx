'use client';

import { CheckIcon } from '@heroicons/react/16/solid';

import { ButtonGroup } from '@/components/ui/button-group';
import { Tooltip } from '@/components/ui/tooltip';

import { useThemeActions, useThemeSetting } from '@/components/feature/theme';

import type { BaseComponentProps } from '@/lib/types';

const colors = [
  {
    value: 'foreground',
    label: 'Neutral accent color',
    className: 'border border-foreground bg-foreground hover:border-foreground',
    checkClassName: 'text-background'
  },
  {
    value: 'blue',
    label: 'Blue accent color',
    className: 'border border-blue bg-blue hover:border-blue',
    checkClassName: 'text-blue-foreground'
  },
  {
    value: 'violett',
    label: 'Violet accent color',
    className: 'border border-violett bg-violett hover:border-violett',
    checkClassName: 'text-violett-foreground'
  },
  {
    value: 'orange',
    label: 'Orange accent color',
    className: 'border border-orange bg-orange hover:border-orange',
    checkClassName: 'text-orange-foreground'
  }
] as const;

export function ThemeColorSetting({
  className,
  includeNeutral = true
}: BaseComponentProps & {
  /** The neutral (foreground/background) swatch belongs in the theme drawer, not the header. */
  includeNeutral?: boolean;
}) {
  const themeColor = useThemeSetting('themeColor');
  const isInitialized = useThemeSetting('isInitialized');
  const { setThemeColor } = useThemeActions();

  return (
    <ButtonGroup className={className}>
      {colors
        .filter((color) => includeNeutral || color.value !== 'foreground')
        .map((color) => {
          const selected = isInitialized && themeColor === color.value;

          return (
            <Tooltip
              key={color.value}
              content={color.label}
              render={
                <button
                  type="button"
                  aria-label={color.label}
                  aria-pressed={selected}
                  className={`relative flex size-6.5 shrink-0 items-center justify-center rounded-full after:absolute after:-inset-x-1 after:-inset-y-[9px] after:content-[''] hover:scale-110 active:scale-100 sm:size-8 sm:after:-inset-y-1.5 [html[data-theme-animations=on]_&]:motion-safe:interactive ${color.className}`}
                  onClick={() => setThemeColor(color.value)}
                />
              }
            >
              {selected && (
                <CheckIcon
                  className={`size-3.5 shrink-0 sm:size-4 ${color.checkClassName}`}
                />
              )}
            </Tooltip>
          );
        })}
    </ButtonGroup>
  );
}
