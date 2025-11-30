'use client';

import { Snowfall as ReactSnowfall } from 'react-snowfall';
import { useTheme } from '@/components/organisms/theme';

export function Snowfall() {
  const { themeAppearance, isEventWinterEnabled } = useTheme();

  if (!isEventWinterEnabled) return null;

  return (
    <ReactSnowfall color={themeAppearance === 'light' ? 'gray' : 'white'} />
  );
}
