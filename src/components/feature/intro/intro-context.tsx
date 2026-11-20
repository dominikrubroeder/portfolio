'use client';

import type { ReactNode } from 'react';
import React, {
  createContext,
  Suspense,
  use,
  useEffect,
  useState
} from 'react';

import { AnimateHold } from '@/components/ui/animate';
import { TypewriterOverlay } from '@/components/ui/typewriter-overlay';

import { useThemeSetting } from '@/components/feature/theme';

import { AGENT_MODE } from '@/lib/agent-mode';

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
  ['Connecting to the world ...'],
  ['For the user!'],
  ['What you do today matters most'],
  ['There are no coincidences'],
  ['Happy coding!'],
  ['Designing ...'],
  ['Setting up the environment ...'],
  ['Applying color, typography and grids ...'],
  ['Design your way!'],
  ['Organizing ...']
];

export function IntroProvider({ children }: { children: ReactNode }) {
  // Agent mode starts without the intro: no cover, no overlay, no held reveals.
  const [isPlaying, setIsPlaying] = useState<boolean>(!AGENT_MODE);
  const [currentPhrase, setCurrentPhrase] = useState<string[] | null>(null);
  const { isEnabled } = useThemeSetting('themeAnimationSettings');
  const isInitialized = useThemeSetting('isInitialized');

  // Animations off when the saved settings arrive: no typing intro, the content is there at
  // once. Decided once: turning animations on later never brings the intro back.
  if (isPlaying && isInitialized && !isEnabled) setIsPlaying(false);

  // Reduced motion (OS setting): no intro, like animations off. Otherwise the random phrase is
  // picked after mount: Math.random() must not run during prerender.
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      // eslint-disable-next-line react-hooks/set-state-in-effect -- OS preference is only known after hydration
      setIsPlaying(false);
      return;
    }

    setCurrentPhrase(phrases[Math.floor(Math.random() * phrases.length)]);
  }, []);

  const value: IntroContextType | null = {
    isPlaying,
    setIsPlaying
  };

  // The page is always rendered, so the server HTML holds the full content. While the intro plays,
  // an opaque layer covers it (`IntroCover` until the phrase is picked, then the typewriter) and
  // `AnimateHold` keeps the reveals back, so they still play once the layer is gone.
  return (
    <IntroContext.Provider value={value}>
      <AnimateHold hold={isPlaying}>{children}</AnimateHold>
      {isPlaying &&
        (currentPhrase ? (
          <Suspense fallback={<IntroCover />}>
            <TypewriterOverlay
              phrases={currentPhrase}
              loop={false}
              deleteLastPhrase={false}
              dismissible
              onExitComplete={() => {
                setIsPlaying(false);
              }}
              endHoldDuration={1200}
            />
          </Suspense>
        ) : (
          <IntroCover />
        ))}
    </IntroContext.Provider>
  );
}

/**
 * Server-rendered stand-in for the typewriter: a page-colored layer in the same place, so the first
 * paint is the background, not the content, and the swap to the typewriter does not flicker.
 * `globals.css` hides it with animations off, with reduced motion and without scripting.
 */
function IntroCover() {
  return (
    <div
      data-intro-cover=""
      aria-hidden="true"
      className="fixed inset-0 z-100 bg-background"
    />
  );
}

export const useIntro = (): IntroContextType => {
  const context = use(IntroContext);

  if (context === null) {
    throw new Error('useIntro: useIntro must be used within a IntroProvider');
  }

  return context;
};
