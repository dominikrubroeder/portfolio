'use client';

import { ReactNode } from 'react';
import { cn } from '@/lib/utils';
import { motion } from 'motion/react';

export default function Marker({
  variant = 'background',
  color = 'yellow',
  as = 'span',
  className,
  animate,
  children
}: {
  variant?: 'background' | 'underline';
  color?: 'yellow' | 'red' | 'green' | 'purple' | 'primary';
  as?: 'div' | 'p' | 'span';
  animate?: boolean;
  className?: string;
  children: ReactNode;
}) {
  const Comp = as;

  if (animate) {
    if (variant === 'underline') {
      return (
        <Comp className={cn('relative px-1 py-0.5', className)}>
          <motion.span
            animate={{ width: ['0%', '100%'], opacity: [0, 1] }}
            transition={{
              delay: 0.4,
              ease: 'easeOut',
              type: 'spring',
              duration: 0.72
            }}
            className={cn(
              'absolute inset-x-0 -bottom-2 -z-10 h-1 rounded opacity-0',
              color === 'yellow' && 'bg-yellow-300',
              color === 'red' && 'bg-red-200',
              color === 'green' && 'bg-green-200',
              color === 'purple' && 'bg-purple-200',
              color === 'primary' && 'bg-primary'
            )}
          />
          {children}
        </Comp>
      );
    }

    return (
      <Comp className={cn('relative px-1 py-0.5', className)}>
        <motion.span
          animate={{ width: ['0%', '100%'], opacity: [0, 1] }}
          transition={{
            delay: 0.4,
            ease: 'easeOut',
            type: 'spring',
            duration: 0.72
          }}
          className={cn(
            'absolute inset-0 -z-10 m-1 h-full rounded opacity-0',
            color === 'yellow' && 'bg-yellow-300',
            color === 'red' && 'bg-red-200',
            color === 'green' && 'bg-green-200',
            color === 'purple' && 'bg-purple-200',
            color === 'primary' && 'bg-primary'
          )}
        />
        {children}
      </Comp>
    );
  }

  if (variant === 'underline') {
    return (
      <Comp className={cn('relative', className)}>
        <span
          className={cn(
            'absolute -bottom-2 size-full h-1 w-full rounded',
            color === 'yellow' && 'bg-yellow-300',
            color === 'red' && 'bg-red-200',
            color === 'green' && 'bg-green-200',
            color === 'purple' && 'bg-purple-200',
            color === 'primary' && 'bg-primary'
          )}
        />
        {children}
      </Comp>
    );
  }

  return (
    <Comp
      className={cn(
        'inline-block rounded px-1',
        color === 'yellow' && 'bg-yellow-300',
        color === 'red' && 'bg-red-200',
        color === 'green' && 'bg-green-200',
        color === 'purple' && 'bg-purple-200',
        color === 'primary' && 'bg-primary',
        className
      )}
    >
      {children}
    </Comp>
  );
}
