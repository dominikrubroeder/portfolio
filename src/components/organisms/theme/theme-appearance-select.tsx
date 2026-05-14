'use client';

import { useCallback, useState } from 'react';

import { MoonIcon, SparklesIcon, SunIcon } from '@heroicons/react/24/outline';
import {
  ChevronDownIcon,
  MoonIcon as MoonIconSolid,
  SparklesIcon as SparklesIconSolid,
  SunIcon as SunIconSolid
} from '@heroicons/react/24/solid';

import type { BaseComponentProps, PositionProp } from '@/lib/types';
import { cn } from '@/lib/utils';

import { Button } from '@/components/atoms/button';
import type { ThemeAppearance } from '@/components/organisms/theme';
import { useTheme } from '@/components/organisms/theme';

const options = [
  {
    value: 'light',
    label: (
      <div className="flex items-center gap-2">
        <SunIcon className="size-5" /> <span>Light</span>
      </div>
    )
  },
  {
    value: 'dark',
    label: (
      <div className="flex items-center gap-2">
        <MoonIcon className="size-5" /> <span>Dark</span>
      </div>
    )
  },
  {
    value: 'system',
    label: (
      <div className="flex items-center gap-2">
        <SparklesIcon className="size-5" /> <span>Auto</span>
      </div>
    )
  }
];

export function ThemeAppearanceSelect({
  menuPosition = 'bottom',
  className
}: {
  menuPosition?: PositionProp;
} & BaseComponentProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { theme, themeAppearance, setThemeAppearance } = useTheme();

  const handleThemeChange = useCallback(
    (value: ThemeAppearance) => {
      setIsOpen(false);
      setThemeAppearance(value);
    },
    [setThemeAppearance]
  );

  return (
    <div className={cn('relative inline-flex', className)}>
      <Button
        variant="ghost-foreground"
        onClick={() => setIsOpen((prevState) => !prevState)}
        className={cn(isOpen && 'bg-muted')}
      >
        {themeAppearance === 'light' && (
          <>
            <SunIconSolid className="size-5" /> Light
          </>
        )}

        {themeAppearance === 'dark' && (
          <>
            <MoonIconSolid className="size-5" /> Dark
          </>
        )}

        {themeAppearance === 'system' && (
          <>
            <SparklesIconSolid className="size-5" /> Auto
          </>
        )}
        <ChevronDownIcon className="size-4" />
      </Button>

      {isOpen && (
        <div
          className={cn(
            'absolute z-max rounded border bg-background px-3 shadow-xl motion-safe:animate-fade-up-1rem',
            menuPosition === 'bottom' &&
              'top-full left-1/2 mt-2 -translate-x-1/2',
            menuPosition === 'bottom-right' && 'top-full right-0 mt-2'
          )}
        >
          <ul className={cn(theme.key === 'wireframe' && 'space-y-2')}>
            {options.map(({ value, label }) => (
              <li key={value}>
                <Button
                  variant="ghost-foreground"
                  onClick={() => handleThemeChange(value as ThemeAppearance)}
                  className="w-full font-normal"
                >
                  {label}
                </Button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
