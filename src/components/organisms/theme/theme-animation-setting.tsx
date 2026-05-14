'use client';

import {
  ThemeFontSizeSetting,
  ThemeSettingOption,
  ThemeSettingSection,
  useTheme
} from '@/components/organisms/theme';
import { Toggle } from '@/components/atoms/toggle';

export function ThemeAnimationSetting() {
  const { themeAnimationSettings, setThemeAnimationSettings } = useTheme();

  return (
    <ThemeSettingSection title="Animation">
      <ThemeSettingOption>
        <div className="text-foreground">Disable Animations</div>
        <Toggle
          isEnabled={themeAnimationSettings.isEnabled}
          onClick={() =>
            setThemeAnimationSettings((prevState) => {
              return {
                ...prevState,
                isEnabled: !prevState.isEnabled
              };
            })
          }
        />
      </ThemeSettingOption>

      <ThemeSettingOption>
        <div className="text-foreground">Duration</div>
        <ThemeFontSizeSetting />
      </ThemeSettingOption>

      <ThemeSettingOption>
        <div className="text-foreground">Delay</div>
        <ThemeFontSizeSetting />
      </ThemeSettingOption>

      <ThemeSettingOption>
        <div className="text-foreground">Type</div>
        <ThemeFontSizeSetting />
      </ThemeSettingOption>
    </ThemeSettingSection>
  );
}
