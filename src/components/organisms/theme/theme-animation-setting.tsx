'use client';

import {
  ThemeDrawerOption,
  ThemeDrawerSection,
  ThemeFontSizeSetting,
  useTheme
} from '@/components/organisms/theme';
import { Toggle } from '@/components/atoms/toggle';

export function ThemeAnimationSetting() {
  const { themeAnimationSettings, setThemeAnimationSettings } = useTheme();

  return (
    <ThemeDrawerSection title="Animation">
      <ThemeDrawerOption>
        <div className="text-foreground">Disable Animations</div>
        <Toggle
          enabled={themeAnimationSettings.disableAnimations}
          onClick={() =>
            setThemeAnimationSettings((prevState) => {
              return {
                ...prevState,
                disableAnimations: !prevState.disableAnimations
              };
            })
          }
        />
      </ThemeDrawerOption>

      <ThemeDrawerOption>
        <div className="text-foreground">Duration</div>
        <ThemeFontSizeSetting />
      </ThemeDrawerOption>

      <ThemeDrawerOption>
        <div className="text-foreground">Delay</div>
        <ThemeFontSizeSetting />
      </ThemeDrawerOption>

      <ThemeDrawerOption>
        <div className="text-foreground">Type</div>
        <ThemeFontSizeSetting />
      </ThemeDrawerOption>
    </ThemeDrawerSection>
  );
}
