import { ThemeAnimationEnabledToggle } from '@/components/feature/theme/theme-animation-enabled-toggle';
import { ThemeAppearanceSelect } from '@/components/feature/theme/theme-appearance-select';
import { ThemeColorSetting } from '@/components/feature/theme/theme-color-setting';
import { ThemeFontSizeSetting } from '@/components/feature/theme/theme-font-size-setting';
import { ThemeSelect } from '@/components/feature/theme/theme-select';
import { ThemeSettingOption } from '@/components/feature/theme/theme-setting-option';
import { ThemeSettingSection } from '@/components/feature/theme/theme-setting-section';

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

      <ThemeSettingSection title="Animation">
        <ThemeSettingOption>
          <div className="text-foreground">Enable Animations</div>
          <ThemeAnimationEnabledToggle />
        </ThemeSettingOption>
      </ThemeSettingSection>

      <ThemeSettingSection title="Border">
        <ThemeSettingOption>
          <div className="text-foreground">Radius</div>
          <ThemeAnimationEnabledToggle />
        </ThemeSettingOption>

        <ThemeSettingOption>
          <div className="text-foreground">Style</div>
          <ThemeAnimationEnabledToggle />
        </ThemeSettingOption>

        <ThemeSettingOption>
          <div className="text-foreground">Width</div>
          <ThemeAnimationEnabledToggle />
        </ThemeSettingOption>
      </ThemeSettingSection>
    </>
  );
}
