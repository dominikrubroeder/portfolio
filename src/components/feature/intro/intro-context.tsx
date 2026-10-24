'use client';

import type { ReactNode } from 'react';
import React, {
  createContext,
  Suspense,
  use,
  useEffect,
  useState
} from 'react';

import { TypewriterOverlay } from '@/components/ui/typewriter-overlay';

import { useThemeSetting } from '@/components/feature/theme';

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
  ['There are no coincidences'],
  ['Happy coding!'],
  ['Designing ...'],
  ['Setting up the environment ...'],
  ['Applying color, typography and layout ...'],
  ['Design your way!']
];

export function IntroProvider({ children }: { children: ReactNode }) {
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [currentPhrase, setCurrentPhrase] = useState<string[] | null>(null);
  const { isEnabled } = useThemeSetting('themeAnimationSettings');
  const isInitialized = useThemeSetting('isInitialized');

  // Animations off when the saved settings arrive: no typing intro, the content is there at
  // once. Decided once: turning animations on later never brings the intro back.
  if (isPlaying && isInitialized && !isEnabled) setIsPlaying(false);

  // Random phrase is picked after mount: Math.random() must not run during prerender
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- pick random phrase after hydration
    setCurrentPhrase(phrases[Math.floor(Math.random() * phrases.length)]);
  }, []);

  const value: IntroContextType | null = {
    isPlaying,
    setIsPlaying
  };

  return (
    <IntroContext.Provider value={value}>
      {isPlaying ? (
        <Suspense>
          {currentPhrase && (
            <TypewriterOverlay
              phrases={currentPhrase}
              loop={false}
              deleteLastPhrase={false}
              onExitComplete={() => {
                setIsPlaying(false);
              }}
              endHoldDuration={1200}
            />
          )}
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
