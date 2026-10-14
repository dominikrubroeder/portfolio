'use client';

import { Palette } from 'lucide-react';

import { Button } from '@/components/ui/button';
import type { ButtonProps } from '@/components/ui/button';
import { useSidebar } from '@/components/ui/sidebar';

import { useTheme } from '@/components/feature/theme';

export function ThemeSidebarTrigger({
  buttonProps = { variant: 'ghost-foreground' },
  showThemeValue = true,
  showLabel
}: {
  buttonProps?: Omit<ButtonProps, 'children'>;
  showThemeValue?: boolean;
  showLabel?: boolean;
}) {
  const { toggle, isOpen } = useSidebar();
  const { theme } = useTheme();

  return (
    <Button
      iconOnly={!showLabel}
      label="Modify theme"
      {...buttonProps}
      onClick={() => toggle('theme')}
    >
      <Palette />

      {showLabel && (
        <span>Modify Theme {showThemeValue ? `: ${theme.value}` : ''}</span>
      )}
    </Button>
  );
}
