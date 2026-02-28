'use client';

import type { ReactNode } from 'react';
import { useState } from 'react';

import { motion } from 'motion/react';

import { cn } from '@/lib/utils';

export function Expandable({
  alwaysVisible,
  children,
  className
}: {
  alwaysVisible: ReactNode;
  children: ReactNode;
  className?: string;
}) {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <motion.div
      className={cn(
        'cursor-pointer rounded border p-4 hover:bg-muted motion-safe:transition',
        className
      )}
      onClick={() => setOpen((prev) => !prev)}
    >
      {alwaysVisible} {open && children}
    </motion.div>
  );
}
