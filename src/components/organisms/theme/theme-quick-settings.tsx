'use client';

import { usePathname } from 'next/navigation';

import type { ComponentBaseProps } from '@/lib/types';
import { cn } from '@/lib/utils';

import {
  ThemeAppearanceSetting,
  ThemeColorSetting,
  ThemeFontSizeSetting
} from '@/components/organisms/theme';

export function ThemeQuickSettings({
  animateOut,
  className
}: { animateOut: boolean } & ComponentBaseProps) {
  const pathname = usePathname();

  return (
    <div
      className={cn(
        'flex items-center gap-4',
        animateOut && pathname === '/frontend-vision-ui'
          ? '-translate-y-full opacity-0'
          : 'translate-y-0',
        className
      )}
    >
      <ThemeAppearanceSetting />
      <ThemeColorSetting />
      <ThemeFontSizeSetting />
    </div>
  );
}
