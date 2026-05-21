'use client';

import { Typewriter, TypewriterProps } from '@/components/atoms/typewriter';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export function TypewriterOverlay({ ...props }: TypewriterProps) {
  const { refresh } = useRouter();
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const time = setTimeout(() => {
      refresh();
      setIsVisible(false);
    }, 6200);

    return () => clearTimeout(time);
  }, [isVisible, refresh]);

  if (!isVisible) return null;

  return (
    <div className="absolute inset-0 top-0 right-0 bottom-0 left-0 z-100 flex items-center justify-center bg-background">
      <Typewriter {...props} />
    </div>
  );
}
