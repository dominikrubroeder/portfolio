'use client';

import React, { createContext, Suspense, use, useState } from 'react';
import type { ReactNode } from 'react';

import { TypewriterOverlay } from '@/components/ui/typewriter-overlay';

type IntroContextType = {
  isPlaying: boolean;
  setIsPlaying: React.Dispatch<React.SetStateAction<boolean>>;
};

const IntroContext = createContext<IntroContextType | null>(null);

const phrases = [
  ['Hello World!'],
  ['8 5 12 12 15  23 15 18 12 4'],
  ['1 + 1 = 3'],
  ['Design and code speak the same language'],
  ['\:)'],
  ['Connecting to the world ...'],
  ['For the user!'],
  ['What you do today matters most'],
  ['There are no coincidences']
];

export function IntroProvider({ children }: { children: ReactNode }) {
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [currentPhrase] = useState<string[]>(() => {
    const max = phrases.length - 1;
    const min = 0;
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    return phrases[randomNumber];
  });

  const value: IntroContextType | null = {
    isPlaying,
    setIsPlaying
  };

  return (
    <IntroContext.Provider value={value}>
      {isPlaying ? (
        <Suspense>
          <TypewriterOverlay
            phrases={currentPhrase}
            loop={false}
            deleteLastPhrase={false}
            onExitComplete={() => {
              setIsPlaying(false);
            }}
            endHoldDuration={1200}
          />
        </Suspense>
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
