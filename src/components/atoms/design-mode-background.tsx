'use client';

import { motion } from 'motion/react';

import { Shapes } from '@/components/atoms/svg';
import { useApp } from '@/components/organisms/app';

export default function DesignModeBackground() {
  const { theme } = useApp();

  if (theme !== 'design') return null;

  return (
    <motion.div animate={{ scale: [0.8, 1] }} className="absolute top-96 -z-20">
      <Shapes />
    </motion.div>
  );
}
