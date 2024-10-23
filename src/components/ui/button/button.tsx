'use client';

import { cn } from '@/lib/utils';
import { ReactNode, useCallback } from 'react';
import DynamicHeroIcon from '@/components/ui/dynamic-hero-icon';
import { ClassValue } from 'clsx';

export default function Button({
  type,
  iconLeading,
  iconLeadingClass,
  iconTrailing,
  iconTrailingClass,
  children,
  onClick
}: {
  type: 'Contained' | 'Outline' | 'Plain';
  iconLeading?: string | undefined;
  iconLeadingClass?: ClassValue | undefined;
  iconTrailing?: string | undefined;
  iconTrailingClass?: ClassValue | undefined;
  children: ReactNode;
  onClick?: () => void;
}) {
  const handleClick = useCallback(() => {
    onClick ? onClick() : null;
  }, [onClick]);

  return (
    <button
      className={cn(
        'w-max',
        type === 'Contained' &&
          'relative rounded-xl py-2 text-white transition-all after:absolute after:inset-3 after:-inset-x-3 after:inset-y-1 after:-z-10 after:rounded-2xl after:bg-accent after:transition-all hover:after:bg-accent',
        type === 'Outline' &&
          'relative rounded-xl py-2 text-accent transition-all after:absolute after:inset-3 after:-inset-x-3 after:inset-y-1 after:-z-10 after:rounded-2xl after:bg-gray-5 after:transition-all hover:after:bg-gray-4',
        type === 'Plain' &&
          'relative rounded-xl py-2 text-accent transition-all after:absolute after:inset-3 after:inset-y-1 after:-z-10 after:rounded-2xl after:bg-transparent after:transition-all hover:after:-inset-x-3 hover:after:bg-gray-5',
        (iconLeading || iconTrailing) && 'flex items-center gap-2'
      )}
      onClick={handleClick}
    >
      {iconLeading && (
        <DynamicHeroIcon
          name={iconLeading}
          className={cn('size-4 shrink-0', iconLeadingClass)}
        />
      )}

      {children}

      {iconTrailing && (
        <DynamicHeroIcon
          name={iconTrailing}
          className={cn('size-4 shrink-0', iconTrailingClass)}
        />
      )}
    </button>
  );
}
