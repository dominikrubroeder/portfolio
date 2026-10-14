'use client';

import { ButtonGroup } from '@/components/ui/button-group';

import {
  ThemeAppearanceSelect,
  ThemeColorSetting,
  ThemeFontSizeSetting
} from '@/components/feature/theme';

import { cn } from '@/lib/utils';

import type { BaseComponentProps } from '@/lib/types';

export function ThemeQuickSettings({ className }: BaseComponentProps) {
  return (
    <ButtonGroup className={cn('flex items-center gap-4', className)}>
      <ThemeAppearanceSelect />
      <ThemeColorSetting />
      <ThemeFontSizeSetting />
    </ButtonGroup>
  );
}
