'use client';

import { cn } from '@/lib/utils';

import { Button } from '@/components/atoms/button';
import { useTheme } from '@/components/organisms/theme';
import { ButtonGroup } from '@/components/molecules/button-group';

export function ThemeFontSizeSetting({ className }: { className?: string }) {
  const { fontSize, setFontSize } = useTheme();

  return (
    <ButtonGroup className={cn('gap-0', className)}>
      <Button
        variant="ghost"
        className={cn('text-sm', fontSize === 'sm' && 'underline')}
        onClick={() => setFontSize('sm')}
      >
        Aa
      </Button>

      <Button
        variant="ghost"
        className={cn('text-base', fontSize === 'md' && 'underline')}
        onClick={() => setFontSize('md')}
      >
        Aa
      </Button>

      <Button
        variant="ghost"
        className={cn('text-lg', fontSize === 'lg' && 'underline')}
        onClick={() => setFontSize('lg')}
      >
        Aa
      </Button>
    </ButtonGroup>
  );
}
