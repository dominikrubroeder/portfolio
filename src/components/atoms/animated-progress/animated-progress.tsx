'use client';

import { AnimatePresence, motion } from 'motion/react';

import { cn } from '@/lib/utils';
import {
  AnimatedProgressProps,
  useAnimatedProgress
} from '@/components/atoms/animated-progress';

export function AnimatedProgress({
  size = 200,
  strokeWidth = 15,
  progress = 75,
  animateNumber = true,
  animateProgress = true,
  color = 'text-primary',
  strokeColor = 'stroke-primary',
  backgroundColor = 'bg-transparent',
  className
}: AnimatedProgressProps) {
  const {
    ref,
    currentProgress,
    center,
    radius,
    circumference,
    controls,
    shouldAnimate
  } = useAnimatedProgress({ size, strokeWidth, progress, animateNumber });

  return (
    <div
      className={cn(
        'relative flex items-center justify-center rounded-full',
        backgroundColor,
        className
      )}
      style={{ width: size, height: size }}
      ref={ref}
    >
      <div
        aria-label={`Progress: ${currentProgress}%`}
        role="progressbar"
        aria-valuenow={currentProgress}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        <svg width={size} height={size} className="-rotate-90">
          <circle
            cx={center}
            cy={center}
            r={radius}
            fill="none"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            className="stroke-muted group-hover:stroke-primary/15"
          />

          <AnimatePresence>
            <motion.circle
              cx={center}
              cy={center}
              r={radius}
              fill="none"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeDasharray={circumference}
              initial={
                animateProgress
                  ? { strokeDashoffset: circumference }
                  : {
                      strokeDashoffset:
                        circumference - (progress / 100) * circumference
                    }
              }
              animate={controls}
              className={cn(strokeColor)}
            />
          </AnimatePresence>
        </svg>

        <div className="absolute inset-0 flex items-center justify-center">
          <span
            className={cn('font-bold', color)}
            style={{
              fontSize: `${progress === 100 ? 8 : size > 50 ? size / 6 : 9}px`
            }}
            aria-hidden="true"
          >
            {shouldAnimate ? currentProgress : progress}
            {size > 50 ? '%' : ''}
          </span>
        </div>
      </div>
    </div>
  );
}
