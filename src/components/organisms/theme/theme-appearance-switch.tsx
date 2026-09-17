'use client';

import { Moon, Sun, SunMoon } from 'lucide-react';
import { Button, ButtonProps } from '@/components/atoms/button';
import { useTheme } from '@/components/organisms/theme';
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

  return (
    <Button
      variant="ghost-foreground"
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
