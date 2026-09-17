'use client';

import type { ReactNode } from 'react';

import { motion, MotionConfig } from 'motion/react';

import { cn } from '@/lib/utils';

import type { AnimationGeneratorType, ViewportOptions } from 'motion';
import { useAnimate } from '@/components/molecules/animate';

export function Animate({
  direction = 'right',
  delay = 0.32,
  duration = 1.6,
  type,
  viewport = { once: true, margin: '-100px' },
  active,
  className,
  children,
  ref
}: {
  direction?: 'up' | 'left' | 'right' | 'down' | 'scaleUp';
  delay?: number;
  duration?: number;
  type?: AnimationGeneratorType;
  viewport?: ViewportOptions;
  /**
   * Controlled reveal instead of the default viewport-triggered one — pass
   * `false` to hold, `true` to play. Leave unset to reveal on scroll into
   * view (the default for content below the fold).
   */
  active?: boolean;
  className?: string;
  children: ReactNode;
  ref?: React.Ref<HTMLDivElement>;
}) {
  const { variants } = useAnimate({ delay, duration, type });

  const trigger =
    active === undefined
      ? { whileInView: 'visible' as const, viewport }
      : { animate: active ? ('visible' as const) : 'hidden' };

  return (
    <MotionConfig reducedMotion="user">
      <motion.div
        ref={ref}
        variants={variants[direction]}
        initial="hidden"
        className={cn(className)}
        {...trigger}
      >
        {children}
      </motion.div>
    </MotionConfig>
  );
}
