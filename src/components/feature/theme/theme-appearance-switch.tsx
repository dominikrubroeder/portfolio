'use client';

import { Moon, Sun, SunMoon } from 'lucide-react';

import { Button } from '@/components/ui/button';
import type { ButtonProps } from '@/components/ui/button';

import { useTheme } from '@/components/feature/theme';

import { cn } from '@/lib/utils';

export function ThemeAppearanceSwitch({
  withLabel,
  triggerProps,
  className
}: {
  withLabel?: boolean;
  triggerProps?: Omit<ButtonProps, 'children'>;
  className?: string;
}) {
  const { themeAppearance, toggleThemeAppearance } = useTheme();

  const current = themeAppearance ?? 'system';
  const next = { light: 'dark', dark: 'system', system: 'light' }[current];

  return (
    <Button
      variant="ghost-foreground"
      iconOnly={!withLabel}
      label={`Appearance: ${current}. Switch to ${next}`}
      onClick={() => toggleThemeAppearance()}
      className={cn(className)}
      {...triggerProps}
    >
      {themeAppearance === 'light' && (
        <>
          <Sun />
          {withLabel && <span>Light</span>}
        </>
      )}
      {themeAppearance === 'dark' && (
        <>
          <Moon />
          {withLabel && <span>Dark</span>}
        </>
      )}
      {(!themeAppearance || themeAppearance === 'system') && (
        <>
          <SunMoon />
          {withLabel && <span>System</span>}
        </>
      )}
    </Button>
  );
}
