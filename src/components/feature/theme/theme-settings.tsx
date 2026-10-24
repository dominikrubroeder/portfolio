import { ThemeAnimationEnabledToggle } from './theme-animation-enabled-toggle';
import { ThemeAppearanceSelect } from './theme-appearance-select';
import { ThemeColorSetting } from './theme-color-setting';
import { ThemeFontSizeSetting } from './theme-font-size-setting';
import { ThemeRadiusSetting } from './theme-radius-setting';
import { ThemeSelect } from './theme-select';
import { ThemeSettingOption } from './theme-setting-option';
import { ThemeSettingSection } from './theme-setting-section';

export function ThemeSettings() {
  return (
    <>
      <ThemeSettingSection title="Base">
        <ThemeSettingOption>
          <div className="text-foreground">Theme</div>
          <ThemeSelect />
        </ThemeSettingOption>

        <ThemeSettingOption>
          <div className="text-foreground">Appearance</div>
          <ThemeAppearanceSelect />
        </ThemeSettingOption>

        <ThemeSettingOption>
          <div className="text-foreground">Color</div>
          <ThemeColorSetting />
        </ThemeSettingOption>
      </ThemeSettingSection>

      <ThemeSettingSection title="Typography">
        <ThemeSettingOption>
          <div className="text-foreground">Font size</div>
          <ThemeFontSizeSetting />
        </ThemeSettingOption>
      </ThemeSettingSection>

      <ThemeSettingSection title="Animation">
        <ThemeSettingOption>
          <div className="text-foreground">Enable animations</div>
          <ThemeAnimationEnabledToggle />
        </ThemeSettingOption>
      </ThemeSettingSection>

      <ThemeSettingSection title="Border">
        <ThemeSettingOption>
          <div className="text-foreground">Radius</div>
          <ThemeRadiusSetting />
        </ThemeSettingOption>
      </ThemeSettingSection>
    </>
  );
}
