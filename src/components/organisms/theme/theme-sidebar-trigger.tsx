'use client';

import { useSidebar } from '@/components/organisms/sidebar';
import { Button, ButtonProps } from '@/components/atoms/button';
import { useTheme } from '@/components/organisms/theme';
import { Palette } from 'lucide-react';

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
    <Button {...buttonProps} onClick={() => toggle('theme')}>
      <Palette />

      {showLabel && (
        <span>Modify Theme {showThemeValue ? `: ${theme.value}` : ''}</span>
      )}
    </Button>
  );
}
