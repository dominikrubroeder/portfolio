'use client';

import type { ReactNode } from 'react';

import { motion } from 'motion/react';

import { cn } from '@/lib/utils';

import type { Variants, ViewportOptions } from 'motion';

export function Animate({
  direction = 'up',
  delay = 0.16,
  viewport = { once: true, margin: '-50px' },
  className,
  children
}: {
  direction: 'up' | 'left' | 'right' | 'down';
  delay?: number;
  viewport?: ViewportOptions;
  className?: string;
  children: ReactNode;
}) {
  const fadeInUp: Variants = {
    hidden: {
      opacity: 0,
      y: 60
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
        delay
      }
    }
  };

  const fadeInDown: Variants = {
    hidden: {
      opacity: 0,
      y: -60
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
        delay
      }
    }
  };

  const fadeInLeft: Variants = {
    hidden: {
      opacity: 0,
      x: -60
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
        delay
      }
    }
  };

  const fadeInRight: Variants = {
    hidden: {
      opacity: 0,
      x: 60
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
        delay
      }
    }
  };

  const variants = {
    up: fadeInUp,
    down: fadeInDown,
    left: fadeInLeft,
    right: fadeInRight
  };

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
