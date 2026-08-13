'use client';

import { Moon, Sun, SunMoon } from 'lucide-react';
import { Button } from '@/components/atoms/button';
import { useTheme } from '@/components/organisms/theme';

export function ThemeAppearanceSwitch() {
  const { themeAppearance, toggleThemeAppearance } = useTheme();

  return (
    <Button variant="ghost-foreground" onClick={() => toggleThemeAppearance()}>
      {themeAppearance === 'light' && <Sun />}
      {themeAppearance === 'dark' && <Moon />}
      {(!themeAppearance || themeAppearance === 'system') && <SunMoon />}
    </Button>
  );
}
