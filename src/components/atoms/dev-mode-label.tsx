'use client';

import type { ReactNode } from 'react';

import { motion } from 'motion/react';

import { cn } from '@/lib/utils';

import { useTheme } from '@/components/organisms/theme';

export default function DevModeLabel({
  className,
  classNameLabel,
  children
}: {
  className?: string;
  classNameLabel?: string;
  children: ReactNode;
}) {
  const { themeMode } = useTheme();

  if (themeMode !== 'dev') return null;

  return (
    <motion.div className={cn('absolute inset-0 -z-10', className)}>
      <div
        className={cn(
          'absolute -top-4.5 right-0 w-max shrink-0 rounded-t bg-primary px-2 text-xs text-primary-foreground',
          classNameLabel
        )}
      >
        {children}
      </div>
    </motion.div>
  );
}
