'use client';

import { Moon, Sun, SunMoon } from 'lucide-react';
import { Button } from '@/components/atoms/button';
import { useTheme } from '@/components/organisms/theme';
import { cn } from '@/lib/utils';

export function ThemeAppearanceSwitch({ className }: { className?: string }) {
  const { themeAppearance, toggleThemeAppearance } = useTheme();

  return (
    <Button
      variant="ghost-foreground"
      onClick={() => toggleThemeAppearance()}
      className={cn(className)}
    >
      {themeAppearance === 'light' && <Sun />}
      {themeAppearance === 'dark' && <Moon />}
      {(!themeAppearance || themeAppearance === 'system') && <SunMoon />}
    </Button>
  );
}
