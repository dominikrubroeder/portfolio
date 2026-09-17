'use client';

import React, { createContext, type ReactNode, use, useState } from 'react';
import { TypewriterOverlay } from '@/components/molecules/typewriter-overlay';

type IntroContextType = {
  isPlaying: boolean;
  setIsPlaying: React.Dispatch<React.SetStateAction<boolean>>;
};

const IntroContext = createContext<IntroContextType | null>(null);

export function IntroProvider({ children }: { children: ReactNode }) {
  const [isPlaying, setIsPlaying] = useState<boolean>(true);

  const value: IntroContextType | null = {
    isPlaying,
    setIsPlaying
  };

  return (
    <IntroContext.Provider value={value}>
      {isPlaying ? (
        <TypewriterOverlay
          phrases={['Hello World!']}
          loop={false}
          deleteLastPhrase={false}
          onExitComplete={() => {
            setIsPlaying(false);
          }}
          endHoldDuration={800}
        />
      ) : (
        children
      )}
    </IntroContext.Provider>
  );
}

export const useIntro = (): IntroContextType => {
  const context = use(IntroContext);

  if (context === null) {
    throw new Error('useIntro: useIntro must be used within a IntroProvider');
  }

  return context;
};
