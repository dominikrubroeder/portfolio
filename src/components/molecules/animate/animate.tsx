'use client';

import type { ReactNode } from 'react';

import { motion } from 'motion/react';

import { cn } from '@/lib/utils';

import type { AnimationGeneratorType, ViewportOptions } from 'motion';
import { useAnimate } from '@/components/molecules/animate';
import { useTheme } from '@/components/organisms/theme';

export function Animate({
  direction = 'up',
  delay = 0.24,
  duration = 0.4,
  type,
  viewport = { once: true, margin: '-50px' },
  className,
  children
}: {
  direction: 'up' | 'left' | 'right' | 'down' | 'scaleUp';
  delay?: number;
  duration?: number;
  type?: AnimationGeneratorType;
  viewport?: ViewportOptions;
  className?: string;
  children: ReactNode;
}) {
  const { variants } = useAnimate({ delay, duration, type });
  const { theme, themeAnimationSettings } = useTheme();

  if (theme.key !== 'animate' || themeAnimationSettings.disableAnimations)
    return children;

  return (
    <motion.div
      variants={variants[direction]}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}
