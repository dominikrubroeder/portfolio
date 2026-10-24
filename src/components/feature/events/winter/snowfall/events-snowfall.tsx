'use client';

import { Snowfall as ReactSnowfall } from 'react-snowfall';

import { useThemeSetting } from '@/components/feature/theme';

export function Snowfall() {
  const { isEnabled } = useThemeSetting('themeAnimationSettings');

  // Snowfall is a JS canvas animation: it does not mount while animations are off.
  if (!isEnabled) return null;

  return <ReactSnowfall />;
}
