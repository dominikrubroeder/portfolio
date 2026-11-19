'use client';

import { Button } from '@/components/ui/button';
import { ButtonGroup } from '@/components/ui/button-group';

import { useThemeActions, useThemeSetting } from '@/components/feature/theme';

import { cn } from '@/lib/utils';

export function ThemeFontSizeSetting({ className }: { className?: string }) {
  const themeFontSize = useThemeSetting('themeFontSize');
  const { setThemeFontSize } = useThemeActions();

  return (
    <ButtonGroup className={cn('gap-0', className)} minimizeSpacing>
      <Button
        variant="ghost-foreground"
        iconOnly
        label="Set small font size"
        aria-pressed={themeFontSize === 'sm'}
        className={cn('text-sm', themeFontSize === 'sm' && 'underline')}
        onClick={() => setThemeFontSize('sm')}
      >
        Aa
      </Button>

      <Button
        variant="ghost-foreground"
        iconOnly
        label="Set medium font size"
        aria-pressed={themeFontSize === 'md'}
        className={cn('text-base', themeFontSize === 'md' && 'underline')}
        onClick={() => setThemeFontSize('md')}
      >
        Aa
      </Button>

      <Button
        variant="ghost-foreground"
        iconOnly
        label="Set large font size"
        aria-pressed={themeFontSize === 'lg'}
        className={cn('text-xl', themeFontSize === 'lg' && 'underline')}
        onClick={() => setThemeFontSize('lg')}
      >
        Aa
      </Button>
    </ButtonGroup>
  );
}
