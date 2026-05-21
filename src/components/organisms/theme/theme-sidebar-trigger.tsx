'use client';

import { useSidebar } from '@/components/organisms/sidebar';
import { Button, ButtonProps } from '@/components/atoms/button';
import { SwatchIcon } from '@heroicons/react/24/outline';
import { useTheme } from '@/components/organisms/theme';

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
      <SwatchIcon /> Modify Theme{showThemeValue ? `: ${theme.value}` : ''}
    </Button>
  );
}
