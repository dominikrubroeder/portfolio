'use client';

import { CheckIcon } from '@heroicons/react/16/solid';

import { ButtonGroup } from '@/components/ui/button-group';
import { Tooltip } from '@/components/ui/tooltip';

import { useTheme } from '@/components/feature/theme';

import type { BaseComponentProps } from '@/lib/types';

export function ThemeColorSetting({ className }: BaseComponentProps) {
  const { themeColor, setThemeColor, isInitialized } = useTheme();

  /** TODO: Replace fixed color values with color variables */
  const colors = [
    {
      value: 'blue',
      label: 'Blue accent color',
      selected: isInitialized && themeColor === 'blue',
      className: 'border border-blue bg-blue hover:border-blue',
      checkClassName: 'text-blue-foreground'
    },
    {
      value: 'violett',
      label: 'Violet accent color',
      selected:
        (isInitialized && themeColor === 'primary') || themeColor === 'violett',
      className: 'border-violett bg-violett hover:border-violett',
      checkClassName: 'text-violett-foreground'
    },
    {
      value: 'orange',
      label: 'Orange accent color',
      selected: isInitialized && themeColor === 'orange',
      className: 'border border-orange bg-orange hover:border-orange',
      checkClassName: 'text-orange-foreground'
    }
  ] as const;

  return (
    <ButtonGroup className={className}>
      {colors.map((color) => (
        <Tooltip
          key={color.value}
          content={color.label}
          render={
            <button
              type="button"
              aria-label={color.label}
              aria-pressed={color.selected}
              className={`flex size-6.5 shrink-0 items-center justify-center rounded-full hover:scale-110 active:scale-100 sm:size-8 [html[data-theme=default]_&]:motion-safe:interactive ${color.className}`}
              onClick={() => setThemeColor(color.value)}
            />
          }
        >
          {color.selected && (
            <CheckIcon
              className={`size-3.5 shrink-0 sm:size-4 ${color.checkClassName}`}
            />
          )}
        </Tooltip>
      ))}
    </ButtonGroup>
  );
}
