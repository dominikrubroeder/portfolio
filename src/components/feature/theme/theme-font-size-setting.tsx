'use client';

import { Button } from '@/components/ui/button';
import { ButtonGroup } from '@/components/ui/button-group';

import { useTheme } from '@/components/feature/theme';

import { cn } from '@/lib/utils';

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
        className={cn('text-xl', themeFontSize === 'lg' && 'underline')}
        onClick={() => setThemeFontSize('lg')}
      >
        Aa
      </Button>
    </ButtonGroup>
  );
}
