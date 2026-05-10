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
  THEME_KEY_EVENT_WINTER,
  THEME_KEY_FONT_SIZE,
  THEME_KEY_MODE,
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
  const [isInitialized, setIsInitialized] = useState(false);
  const [themeAnimationSettings, setThemeAnimationSettings] =
    useState<ThemeAnimationSettings>({
      disableAnimations: false,
      delay: 0.24,
      duration: 0.4,
      type: 'spring'
    });

  const applyThemeAppearance = useCallback((appearance: ThemeAppearance) => {
    const htmlElement = document.documentElement;
    let resolvedAppearance = appearance;

    if (appearance === 'system') {
      resolvedAppearance = window.matchMedia('(prefers-color-scheme: dark)')
        .matches
        ? 'dark'
        : 'light';
    }

    htmlElement.classList.forEach((className) => {
      if (className.startsWith('theme-appearance-')) {
        htmlElement.classList.remove(className);
      }
    });

    htmlElement.classList.add(`theme-appearance-${resolvedAppearance}`);
    htmlElement.dataset.themeAppearance = appearance;
  }, []);

  useEffect(() => {
    if (!isInitialized) return;

    applyThemeAppearance(themeAppearance);

    if (themeAppearance === 'system') {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      const handleChange = () => applyThemeAppearance('system');

      mediaQuery.addEventListener('change', handleChange);
      return () => mediaQuery.removeEventListener('change', handleChange);
    }
  }, [themeAppearance, applyThemeAppearance]);

  const handleThemeColor = useCallback((themeColor: ThemeColor) => {
    setThemeColor(themeColor);

    if (themeColor) {
      localStorage.setItem(THEME_KEY_COLOR, themeColor);
    } else {
      localStorage.removeItem(THEME_KEY_COLOR);
    }
  }, []);

  const handleThemeAppearance = useCallback(
    (themeAppearance: ThemeAppearance) => {
      setThemeAppearance(themeAppearance);
      localStorage.setItem(THEME_KEY_APPEARANCE, themeAppearance);
    },
    []
  );

  const handleTheme = useCallback(
    (themeOption: ThemeOption) => {
      setTheme(themeOption);
      localStorage.setItem(THEME_KEY, themeOption.key);

      if (themeOption.key === 'wireframe') {
        handleThemeColor(undefined);
      }

      if (themeOption.key === 'default') {
        handleThemeColor('primary');
      }

      if (themeOption.key === 'notes') {
        handleThemeColor('orange');
      }
    },
    [handleThemeColor]
  );

  const handleThemeFontSize = useCallback((themeFontSize: ThemeFontSize) => {
    setThemeFontSize(themeFontSize);
    localStorage.setItem(THEME_KEY_FONT_SIZE, themeFontSize);
  }, []);

  useEffect(() => {
    if (!isInitialized) return;

    const htmlTag = document.documentElement;
    const themeOptionKey = theme.key;

    htmlTag.classList.forEach((className) => {
      if (className.startsWith('theme-style')) {
        htmlTag.classList.remove(className);
      }
    });

    htmlTag.classList.add(`theme-style-${themeOptionKey}`);
    htmlTag.dataset.theme = themeOptionKey;
  }, [theme.key]);

  useEffect(() => {
    if (!isInitialized) return;

    const htmlTag = document.documentElement;

    htmlTag.classList.forEach((className) => {
      if (className.startsWith('theme-color-')) {
        htmlTag.classList.remove(className);
      }
    });

    htmlTag.dataset.themeColor = themeColor;

    if (themeColor) {
      htmlTag.classList.add(`theme-color-${themeColor}`);
    }
  }, [themeColor]);

  useEffect(() => {
    if (!isInitialized) return;

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
  }, [themeFontSize]);

  const handleIsEventWinterEnabled = useCallback(
    (isEventWinterEnabled: boolean) => {
      setThemeEvents((prevState) => {
        return { ...prevState, isEventWinterEnabled };
      });
      localStorage.setItem(
        THEME_KEY_EVENT_WINTER,
        JSON.stringify(isEventWinterEnabled)
      );
    },
    []
  );

  const initTheme = useCallback(() => {
    const localTheme = localStorage.getItem(THEME_KEY);
    const localThemeColor = localStorage.getItem(THEME_KEY_COLOR);
    const localThemeAppearance = localStorage.getItem(THEME_KEY_APPEARANCE);
    const localThemeFontSize = localStorage.getItem(THEME_KEY_FONT_SIZE);
    const localThemeMode = localStorage.getItem(THEME_KEY_MODE);
    const localIsEventWinterEnabled = localStorage.getItem(
      THEME_KEY_EVENT_WINTER
    );

    if (localTheme && THEME_OPTIONS.some((opt) => opt.key === localTheme)) {
      setTheme({
        key: localTheme as Theme,
        value: capitalizeWords(localTheme)
      });
    }

    if (
      localThemeAppearance === 'light' ||
      localThemeAppearance === 'dark' ||
      localThemeAppearance === 'system'
    ) {
      handleThemeAppearance(localThemeAppearance);
    }

    if (
      localThemeColor === 'primary' ||
      localThemeColor === 'violett' ||
      localThemeColor === 'blue' ||
      localThemeColor === 'orange'
    ) {
      handleThemeColor(localThemeColor);
    }

    if (
      localThemeFontSize === 'sm' ||
      localThemeFontSize === 'md' ||
      localThemeFontSize === 'lg'
    ) {
      handleThemeFontSize(localThemeFontSize);
    }

    if (localThemeMode === 'design' || localThemeMode === 'dev') {
      setThemeMode(localThemeMode);
    }

    if (localIsEventWinterEnabled !== null) {
      handleIsEventWinterEnabled(JSON.parse(localIsEventWinterEnabled));
    }

    setIsInitialized(true);
  }, [
    handleTheme,
    handleThemeAppearance,
    handleThemeColor,
    handleThemeFontSize,
    handleIsEventWinterEnabled
  ]);

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
    () => theme.key === 'default' && !themeAnimationSettings.disableAnimations,
    [theme.key, themeAnimationSettings.disableAnimations]
  );

  useEffect(() => {
    if (isInitialized) {
      if (themeMode) {
        localStorage.setItem(THEME_KEY_MODE, themeMode);
      } else {
        localStorage.removeItem(THEME_KEY_MODE);
      }
    }
  }, [themeMode, isInitialized]);

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
    shouldAnimate,
    isInitialized
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
