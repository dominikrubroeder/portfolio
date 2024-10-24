'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { cn } from '@/lib/utils';

interface AnimatedProgressProps {
  size?: number;
  strokeWidth?: number;
  progress?: number;
  animateNumber?: boolean;
  animateProgress?: boolean;
  color?: 'text-primary' | string;
  strokeColor?: 'stroke-primary' | string;
  backgroundColor?: 'bg-background' | string;
  highlightCompletion?: boolean;
}

export default function AnimatedProgress({
  size = 200,
  strokeWidth = 15,
  progress = 75,
  animateNumber = true,
  animateProgress = true,
  color = 'text-primary',
  strokeColor = 'stroke-primary',
  backgroundColor = 'bg-transparent',
  highlightCompletion
}: AnimatedProgressProps) {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref);
  const [currentProgress, setCurrentProgress] = useState(
    animateNumber ? 0 : progress
  );

  const center = size / 2;
  const radius = size / 2 - strokeWidth / 2;
  const circumference = 2 * Math.PI * radius;

  useEffect(() => {
    if (inView) {
      if (animateProgress) {
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
  }, [
    controls,
    inView,
    circumference,
    progress,
    animateNumber,
    animateProgress
  ]);

  return (
    <div
      className={cn(
        'relative flex items-center justify-center rounded-full',
        backgroundColor
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
            className="stroke-border"
          />
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
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span
            className={cn('font-bold', color)}
            style={{
              fontSize: `${progress === 100 ? 8 : size > 50 ? size / 6 : 9}px`
            }}
            aria-hidden="true"
          >
            {currentProgress}
            {size > 50 ? '%' : ''}
          </span>
        </div>
      </div>
    </div>
  );
}
