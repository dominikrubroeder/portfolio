'use client';

import { cn } from '@/lib/utils';

import { Button } from '@/components/atoms/button';
import { useApp } from '@/components/organisms/app';

export function FontSizeThemeSetting({ className }: { className?: string }) {
  const { fontSize, setFontSize } = useApp();

  return (
    <div className={cn(className)}>
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
    </div>
  );
}
