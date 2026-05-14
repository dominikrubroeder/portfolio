'use client';

import { useSidebar } from '@/components/organisms/sidebar';
import { Button } from '@/components/atoms/button';
import { SwatchIcon } from '@heroicons/react/16/solid';
import { useTheme } from '@/components/organisms/theme';

export function ThemeSidebarTrigger() {
  const { toggle } = useSidebar();
  const { theme } = useTheme();

  return (
    <Button variant="ghost-muted" size="small" onClick={() => toggle('theme')}>
      <SwatchIcon /> Modify Theme: {theme.value}
    </Button>
  );
}
