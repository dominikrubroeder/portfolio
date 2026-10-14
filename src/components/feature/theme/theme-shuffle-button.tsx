'use client';

import { ShuffleIcon } from 'lucide-react';

import { Button } from '@/components/ui/button';

import { useTheme } from '@/components/feature/theme';

export function ThemeShuffleButton() {
  const { shuffleTheme } = useTheme();

  return (
    <Button variant="ghost-foreground" size="small" onClick={shuffleTheme}>
      <ShuffleIcon /> Shuffle theme
    </Button>
  );
}
