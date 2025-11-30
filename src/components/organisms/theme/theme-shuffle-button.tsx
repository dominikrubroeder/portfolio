'use client';

import { useTheme } from '@/components/organisms/theme';
import { ShuffleIcon } from 'lucide-react';
import { Button } from '@/components/atoms/button';

export function ThemeShuffleButton() {
  const { shuffleTheme } = useTheme();

  return (
    <Button variant="ghost" onClick={shuffleTheme}>
      <ShuffleIcon /> Shuffle theme
    </Button>
  );
}
