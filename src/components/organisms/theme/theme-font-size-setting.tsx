'use client';

import { cn } from '@/lib/utils';

import { Button } from '@/components/atoms/button';
import { useTheme } from '@/components/organisms/theme';
import { ButtonGroup } from '@/components/molecules/button-group';

export function ThemeFontSizeSetting({ className }: { className?: string }) {
  const { themeFontSize, setThemeFontSize } = useTheme();

  return (
    <ButtonGroup className={cn('gap-0', className)} minimizeSpacing>
      <Button
        variant="ghost-foreground"
        className={cn('text-sm', themeFontSize === 'sm' && 'underline')}
        onClick={() => setThemeFontSize('sm')}
      >
        Aa
      </Button>

      <Button
        variant="ghost-foreground"
        className={cn('text-base', themeFontSize === 'md' && 'underline')}
        onClick={() => setThemeFontSize('md')}
      >
        Aa
      </Button>

      <Button
        variant="ghost-foreground"
        className={cn('text-lg', themeFontSize === 'lg' && 'underline')}
        onClick={() => setThemeFontSize('lg')}
      >
        Aa
      </Button>
    </ButtonGroup>
  );
}
