import { ThemeSettingSection } from '@/components/organisms/theme/theme-setting-section';
import { ThemeSettingOption } from '@/components/organisms/theme/theme-setting-option';
import { ThemeSelect } from '@/components/organisms/theme/theme-select';
import { ThemeAppearanceSelect } from '@/components/organisms/theme/theme-appearance-select';
import { ThemeColorSetting } from '@/components/organisms/theme/theme-color-setting';
import { ThemeFontSizeSetting } from '@/components/organisms/theme/theme-font-size-setting';

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
          <div className="text-foreground">Font Size</div>
          <ThemeFontSizeSetting />
        </ThemeSettingOption>
      </ThemeSettingSection>
    </>
  );
}
