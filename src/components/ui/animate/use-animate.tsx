'use client';

import type { AnimationGeneratorType, Transition, Variants } from 'motion';

// Expo-out: quick first frames, very long soft landing, so the motion never visibly stops.
const EASE_OUT_SOFT = [0.16, 1, 0.3, 1] as const;
// Opacity eases in gently and finishes before the travel does.
const EASE_OPACITY = [0.25, 0.1, 0.25, 1] as const;

const DISTANCE = 20;

export const useAnimate = ({
  duration = 1.8,
  delay,
  type
}: {
  duration: number | undefined;
  delay: number | undefined;
  type?: AnimationGeneratorType;
}) => {
  // Travel and scale glide on the soft ease, with no spring overshoot. Opacity finishes earlier
  // on a plain ease-out, so the content is fully visible while it is still settling into place.
  const transition = (): Transition => ({
    delay,
    ...(type === 'spring'
      ? { type: 'spring', duration, bounce: 0 }
      : { duration, ease: EASE_OUT_SOFT }),
    opacity: { duration: duration * 0.75, ease: EASE_OPACITY, delay }
  });

  const fadeY = (from: number): Variants => ({
    hidden: { opacity: 0, y: from },
    visible: { opacity: 1, y: 0, transition: transition() }
  });

  const fadeX = (from: number): Variants => ({
    hidden: { opacity: 0, x: from },
    visible: { opacity: 1, x: 0, transition: transition() }
  });

  const scaleUp: Variants = {
    hidden: { opacity: 0, scale: 0.94 },
    visible: { opacity: 1, scale: 1, transition: transition() }
  };

  const disabledAnimations: Variants = {
    hidden: {},
    visible: {}
  };

  const variants = {
    up: fadeY(DISTANCE),
    down: fadeY(-DISTANCE),
    left: fadeX(-DISTANCE),
    right: fadeX(DISTANCE),
    scaleUp,
    disabledAnimations
  };

  return {
    variants
  };
};
