'use client';

import type { ReactNode } from 'react';

import { motion, MotionConfig } from 'motion/react';

import { useAnimate, useAnimationsEnabled } from '@/components/ui/animate';

import { cn } from '@/lib/utils';

import type { AnimationGeneratorType, ViewportOptions } from 'motion';

export function Animate({
  direction = 'up',
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
  const enabled = useAnimationsEnabled();
  const { variants } = useAnimate({ delay, duration, type });

  // Animations off: render the final state at once. CSS (`[data-animate]` under
  // `html[data-theme-animations='off']`) guarantees the same before hydration.
  const trigger = !enabled
    ? { animate: 'visible' as const }
    : active === undefined
      ? { whileInView: 'visible' as const, viewport }
      : { animate: active ? ('visible' as const) : 'hidden' };

  return (
    <MotionConfig reducedMotion="user">
      <motion.div
        ref={ref}
        variants={enabled ? variants[direction] : variants.disabledAnimations}
        initial={enabled ? 'hidden' : 'visible'}
        data-animate=""
        className={cn(className)}
        {...trigger}
      >
        {children}
      </motion.div>
    </MotionConfig>
  );
}
