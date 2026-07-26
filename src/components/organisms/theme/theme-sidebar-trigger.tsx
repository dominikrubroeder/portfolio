'use client';

import { useSidebar } from '@/components/organisms/sidebar';
import { Button, ButtonProps } from '@/components/atoms/button';
import { useTheme } from '@/components/organisms/theme';
import { BrushCleaning } from 'lucide-react';

export function ThemeSidebarTrigger({
  buttonProps = { variant: 'ghost-muted', size: 'small' },
  showThemeValue = true
}: {
  buttonProps?: Omit<ButtonProps, 'children'>;
  showThemeValue?: boolean;
}) {
  const { toggle } = useSidebar();
  const { theme } = useTheme();

  return (
    <Button {...buttonProps} onClick={() => toggle('theme')}>
      <BrushCleaning /> Modify Theme{showThemeValue ? `: ${theme.value}` : ''}
    </Button>
  );
}
