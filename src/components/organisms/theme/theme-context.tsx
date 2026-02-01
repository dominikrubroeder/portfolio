'use client';

import {
  createContext,
  ReactNode,
  use,
  useCallback,
  useEffect,
  useMemo,
  useState
} from 'react';
import {
  Theme,
  THEME_APPEARANCE_DEFAULT,
  THEME_COLOR_DEFAULT,
  THEME_KEY,
  THEME_KEY_APPEARANCE,
  THEME_KEY_COLOR,
  THEME_KEY_FONT_SIZE,
  THEME_OPTION_DEFAULT,
  THEME_OPTIONS,
  ThemeAnimationSettings,
  ThemeAppearance,
  ThemeColor,
  ThemeContextType,
  ThemeEvents,
  ThemeFontSize,
  ThemeMode,
  ThemeOption
} from '@/components/organisms/theme';
import { capitalizeWords } from '@/lib/utils';

const ThemeContext = createContext<ThemeContextType | null>(null);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<ThemeOption>(THEME_OPTION_DEFAULT);
  const [themeColor, setThemeColor] = useState<ThemeColor>(THEME_COLOR_DEFAULT);
  const [themeAppearance, setThemeAppearance] = useState<ThemeAppearance>(
    THEME_APPEARANCE_DEFAULT
  );
  const [themeFontSize, setThemeFontSize] = useState<ThemeFontSize>('md');
  const [themeMode, setThemeMode] = useState<ThemeMode | undefined>(undefined);
  const [themeEvents, setThemeEvents] = useState<ThemeEvents>({
    isEventWinterEnabled: true
  });
  const [themeAnimationSettings, setThemeAnimationSettings] =
    useState<ThemeAnimationSettings>({
      disableAnimations: false,
      delay: 0.24,
      duration: 0.4,
      type: 'spring'
    });

  const handleTheme = useCallback((themeOption: ThemeOption) => {
    setTheme(themeOption);

    const htmlTag = document.documentElement;

    const themeOptionKey = themeOption.key;

    // TODO: Only remove real "Themes" here
    htmlTag.classList.forEach((className) => {
      if (className.startsWith('theme-style')) {
        htmlTag.classList.remove(className);
      }
    });

    htmlTag.classList.add(`theme-style-${themeOptionKey}`);

    htmlTag.dataset.theme = themeOptionKey;

    localStorage.setItem(THEME_KEY, themeOptionKey);
  }, []);

  // TODO: Check why in night times, explicit `light` appearance is not working
  const handleThemeAppearance = useCallback(
    (themeAppearance: ThemeAppearance) => {
      setThemeAppearance(themeAppearance);

      const htmlElement = document.documentElement;

      if (themeAppearance === 'system') {
        const systemPrefersDark = window.matchMedia(
          '(prefers-color-scheme: dark)'
        ).matches;
        htmlElement.classList.toggle(
          'theme-appearance-dark',
          systemPrefersDark
        );
      } else {
        htmlElement.classList.forEach((className) => {
          if (className.startsWith('theme-appearance-')) {
            htmlElement.classList.remove(className);
          }
        });

        htmlElement.classList.add(`theme-appearance-${themeAppearance}`);
      }

      htmlElement.dataset.themeAppearance = themeAppearance;

      localStorage.setItem(THEME_KEY_APPEARANCE, themeAppearance);
    },
    []
  );

  const handleThemeColor = useCallback((themeColor: ThemeColor) => {
    setThemeColor(themeColor);

    const htmlTag = document.documentElement;

    htmlTag.classList.forEach((className) => {
      if (className.startsWith('theme-color-')) {
        htmlTag.classList.remove(className);
      }
    });

    htmlTag.dataset.themeColor = themeColor;

    if (themeColor) {
      htmlTag.classList.add(`theme-color-${themeColor}`);
      localStorage.setItem(THEME_KEY_COLOR, themeColor);
    } else {
      localStorage.removeItem(THEME_KEY_COLOR);
    }
  }, []);

  const handleThemeFontSize = useCallback((themeFontSize: ThemeFontSize) => {
    setThemeFontSize(themeFontSize);

    const htmlTag = document.documentElement;

    const themeFontSizeKey = `theme-font-size-${themeFontSize}`;

    htmlTag.classList.forEach((className) => {
      if (className.startsWith('theme-font-size-')) {
        htmlTag.classList.remove(className);
      }
    });

    htmlTag.style.fontSize =
      themeFontSize === 'sm'
        ? '90%'
        : themeFontSize === 'md'
          ? '100%'
          : themeFontSize === 'lg'
            ? '110%'
            : '100%';

    htmlTag.classList.add(themeFontSizeKey);

    htmlTag.dataset.themeFontSize = themeFontSize;

    localStorage.setItem(THEME_KEY_FONT_SIZE, themeFontSize);
  }, []);

  const initTheme = useCallback(() => {
    const localTheme = localStorage.getItem(THEME_KEY);
    const localThemeColor = localStorage.getItem(THEME_KEY_COLOR);
    const localThemeAppearance = localStorage.getItem(THEME_KEY_APPEARANCE);
    const localThemeFontSize = localStorage.getItem(THEME_KEY_FONT_SIZE);

    // TODO: Make a safer type-check for `localTheme` value
    if (localTheme)
      handleTheme({
        key: localTheme as Theme,
        value: capitalizeWords(localTheme)
      });

    // TODO: Make a safer type-check for `localThemeAppearance` value
    if (localThemeAppearance)
      handleThemeAppearance(localThemeAppearance as ThemeAppearance);

    // TODO: Make a safer type-check for `localThemeColor` value
    if (localThemeColor) handleThemeColor(localThemeColor as ThemeColor);

    // TODO: Make a safer type-check for `localThemeFontSize` value
    if (localThemeFontSize)
      handleThemeFontSize(localThemeFontSize as ThemeFontSize);
  }, [handleThemeColor, themeColor]);

  const handleIsEventWinterEnabled = useCallback(
    (isEventWinterEnabled: boolean) => {
      // TODO: Save this state to local storage
      setThemeEvents((prevState) => {
        return { ...prevState, isEventWinterEnabled };
      });
    },
    []
  );

  const shuffleTheme = useCallback(() => {
    let randomIndex = Math.floor(Math.random() * THEME_OPTIONS.length);

    const nextThemeIsCurrentTheme =
      THEME_OPTIONS[randomIndex].key === theme.key;

    if (nextThemeIsCurrentTheme) {
      handleTheme(
        THEME_OPTIONS[
          randomIndex + 1 <= THEME_OPTIONS.length - 1
            ? randomIndex + 1
            : randomIndex - 1
        ]
      );
    } else {
      handleTheme(THEME_OPTIONS[randomIndex]);
    }
  }, [theme]);

  const shouldAnimate = useMemo(
    () => theme.key === 'animate' && themeAnimationSettings.disableAnimations,
    [theme.key, themeAnimationSettings.disableAnimations]
  );

  useEffect(() => {
    if (theme.key !== 'animate') {
      handleIsEventWinterEnabled(false);
    }

    if (theme.key === 'animate' && !themeEvents.isEventWinterEnabled) {
      handleIsEventWinterEnabled(true);
    }
  }, [theme.key]);

  useEffect(() => initTheme(), []);

  const value: ThemeContextType | null = {
    theme,
    setTheme: handleTheme,
    shuffleTheme,
    themeColor,
    setThemeColor: handleThemeColor,
    themeFontSize: themeFontSize,
    setThemeFontSize: handleThemeFontSize,
    themeAppearance: themeAppearance,
    setThemeAppearance: handleThemeAppearance,
    themeAnimationSettings,
    setThemeAnimationSettings,
    themeMode,
    setThemeMode,
    ...themeEvents,
    setIsEventWinterEnabled: handleIsEventWinterEnabled,
    shouldAnimate
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = use(ThemeContext);

  if (context === null) {
    throw new Error('useTheme: useTheme must be used within a ThemeProvider');
  }

  return context;
};
