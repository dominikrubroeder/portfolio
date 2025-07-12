'use client';

import { useCallback, useState } from 'react';

import {
  ChevronDownIcon,
  MoonIcon,
  SunIcon
} from '@heroicons/react/24/outline';
import { AppWindowMacIcon } from 'lucide-react';

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
        <SunIcon className="size-5" /> <span>Auto</span>
      </div>
    )
  }
];

export function ThemeAppearanceSetting() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { appearance, setAppearance } = useTheme();

  const handleThemeChange = useCallback(
    (value: ThemeAppearance) => {
      setAppearance(value);
      setIsOpen(false);
    },
    [setAppearance]
  );

  return (
    <div className="relative inline-flex">
      <Button
        variant="ghost"
        onClick={() => setIsOpen((prevState) => !prevState)}
        className={cn(isOpen && 'bg-muted')}
      >
        {appearance === 'light' && (
          <>
            <SunIcon className="size-5" /> Light
          </>
        )}

        {appearance === 'dark' && (
          <>
            <MoonIcon className="size-5" /> Dark
          </>
        )}

        {appearance === 'system' && (
          <>
            <AppWindowMacIcon className="size-5" /> Auto
          </>
        )}
        <ChevronDownIcon className="size-4" />
      </Button>

      {isOpen && (
        <div className="absolute top-full left-1/2 z-max mt-2 min-w-[8rem] -translate-x-1/2 animate-fade-up-1rem rounded border bg-background px-3 shadow-xl">
          <ul>
            {options.map(({ value, label }) => (
              <li key={value}>
                <Button
                  onClick={() => handleThemeChange(value as ThemeAppearance)}
                  variant="ghost"
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
