'use client';

import { Snowfall as ReactSnowfall } from 'react-snowfall';
import { useTheme } from '@/components/organisms/theme';

export function Snowfall() {
  const { isEventWinterEnabled } = useTheme();

  if (!isEventWinterEnabled) return null;

  return <ReactSnowfall />;
}
