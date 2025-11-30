'use client';

import { Shapes } from '@/components/atoms/svg';
import { useTheme } from '@/components/organisms/theme';

export function ThemeWireframeBackground() {
  const { theme } = useTheme();

  if (theme.key !== 'wireframe') return null;

  return <Shapes className="absolute top-28 left-0 z-0 animate-fade-up-1rem" />;
}
