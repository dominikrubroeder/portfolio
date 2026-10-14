'use client';

import { useEffect, useRef, useState } from 'react';

import { useReducedMotion } from 'framer-motion';
import { useAnimation, useInView } from 'motion/react';

import type { AnimatedProgressProps } from '@/components/feature/animated-progress/animated-progress-types';
import { useTheme } from '@/components/feature/theme';

export const useAnimatedProgress = ({
  size = 200,
  strokeWidth = 15,
  progress = 75,
  animateNumber = true,
  animateProgress = true
}: Pick<
  AnimatedProgressProps,
  'size' | 'strokeWidth' | 'progress' | 'animateNumber' | 'animateProgress'
>) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref);
  const [currentProgress, setCurrentProgress] = useState(
    animateNumber ? 0 : progress
  );

  const { shouldAnimate } = useTheme();

  const isReducedMotion = useReducedMotion();

  const center = size / 2;
  const radius = size / 2 - strokeWidth / 2;
  const circumference = 2 * Math.PI * radius;

  useEffect(() => {
    if (inView) {
      if (animateProgress && !isReducedMotion) {
        controls.start({
          strokeDashoffset: circumference - (progress / 100) * circumference,
          transition: { duration: 2, ease: 'easeInOut' }
        });
      } else {
        controls.set({
          strokeDashoffset: circumference - (progress / 100) * circumference
        });
      }

      if (animateNumber && currentProgress !== progress) {
        let startTimestamp: number | null = null;
        const step = (timestamp: number) => {
          if (!startTimestamp) startTimestamp = timestamp;
          const elapsed = Math.min((timestamp - startTimestamp) / 2000, 1);
          setCurrentProgress(Math.floor(elapsed * progress));
          if (elapsed < 1) {
            window.requestAnimationFrame(step);
          }
        };
        window.requestAnimationFrame(step);
      }
    }
    // eslint-disable-next-line
  }, [
    controls,
    inView,
    circumference,
    progress,
    animateNumber,
    animateProgress,
    shouldAnimate
  ]);

  return {
    ref,
    currentProgress,
    center,
    radius,
    circumference,
    controls,
    shouldAnimate
  };
};
