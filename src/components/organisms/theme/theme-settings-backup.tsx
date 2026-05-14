'use client';

import { ThemeSettingSection } from '@/components/organisms/theme/theme-setting-section';
import { ThemeSettingOption } from '@/components/organisms/theme/theme-setting-option';
import { ThemeSelect } from '@/components/organisms/theme/theme-select';
import { ThemeAppearanceSelect } from '@/components/organisms/theme/theme-appearance-select';
import { ThemeColorSetting } from '@/components/organisms/theme/theme-color-setting';
import { ThemeFontSizeSetting } from '@/components/organisms/theme/theme-font-size-setting';
import { ThemeSpacingContainerWidthSetting } from '@/components/organisms/theme/theme-spacing-container-width-setting';
import { ThemeSpacingSectionBreakSetting } from '@/components/organisms/theme/theme-spacing-section-break-setting';
import { ThemeAnimationSetting } from '@/components/organisms/theme/theme-animation-setting';
import { ThemeWinterToggle } from '@/components/organisms/events';
import { Toggle } from '@/components/atoms/toggle';
import { useTheme } from '@/components/organisms/theme';

export function ThemeSettingsBackup() {
  const { themeMode, setThemeMode } = useTheme();

  return (
    <>
      <ThemeSettingSection title="Theme">
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

      <ThemeSettingSection title="Font">
        <ThemeSettingOption>
          <div className="text-foreground">Size</div>
          <ThemeFontSizeSetting />
        </ThemeSettingOption>
      </ThemeSettingSection>

      <ThemeSettingSection title="Spacing">
        <ThemeSettingOption>
          <div className="text-foreground">Container Width</div>
          <ThemeSpacingContainerWidthSetting />
        </ThemeSettingOption>

        <ThemeSettingOption>
          <div className="text-foreground">Section Break</div>
          <ThemeSpacingSectionBreakSetting />
        </ThemeSettingOption>
      </ThemeSettingSection>

      <ThemeAnimationSetting />

      <ThemeSettingSection title="Border">
        <ThemeSettingOption>
          <div className="text-foreground">Color</div>
          <ThemeColorSetting />
        </ThemeSettingOption>

        <ThemeSettingOption>
          <div className="text-foreground">Radius</div>
          <ThemeColorSetting />
        </ThemeSettingOption>

        <ThemeSettingOption>
          <div className="text-foreground">Width</div>
          <ThemeFontSizeSetting />
        </ThemeSettingOption>

        <ThemeSettingOption>
          <div className="text-foreground">Style</div>
          <ThemeFontSizeSetting />
        </ThemeSettingOption>
      </ThemeSettingSection>

      <ThemeSettingSection title="Events">
        <ThemeSettingOption>
          <div className="text-foreground">Enable winter scene</div>
          <ThemeWinterToggle />
        </ThemeSettingOption>
      </ThemeSettingSection>

      <ThemeSettingSection title="Modes">
        <ThemeSettingOption>
          <div className="text-foreground">Dev Mode</div>
          <Toggle
            isEnabled={themeMode === 'dev'}
            onClick={() => setThemeMode('dev')}
          />
        </ThemeSettingOption>

        <ThemeSettingOption>
          <div className="text-foreground">Design Mode</div>
          <Toggle
            isEnabled={themeMode === 'design'}
            onClick={() => setThemeMode('design')}
          />
        </ThemeSettingOption>
      </ThemeSettingSection>
    </>
  );
}
