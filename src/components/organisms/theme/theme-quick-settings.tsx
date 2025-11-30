'use client';

import type { ComponentBaseProps } from '@/lib/types';

import {
  ThemeAppearanceSelect,
  ThemeColorSetting,
  ThemeFontSizeSetting
} from '@/components/organisms/theme';
import { ButtonGroup } from '@/components/molecules/button-group';
import { cn } from '@/lib/utils';

export function ThemeQuickSettings({ className }: ComponentBaseProps) {
  return (
    <ButtonGroup className={cn('flex items-center gap-4', className)}>
      <ThemeAppearanceSelect />
      <ThemeColorSetting />
      <ThemeFontSizeSetting />
    </ButtonGroup>
  );
}
