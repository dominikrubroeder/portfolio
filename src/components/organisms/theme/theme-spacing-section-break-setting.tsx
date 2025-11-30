import { Button } from '@/components/atoms/button';
import { ButtonGroup } from '@/components/molecules/button-group';
import { ThemeSpacingSectionBreakSmIcon } from '@/components/organisms/theme/theme-spacing-section-break-sm-icon';
import { ThemeSpacingSectionBreakMdIcon } from '@/components/organisms/theme/theme-spacing-section-break-md-icon';
import { ThemeSpacingSectionBreakLgIcon } from '@/components/organisms/theme/theme-spacing-section-break-lg-icon';

export function ThemeSpacingSectionBreakSetting() {
  return (
    <ButtonGroup className="gap-0">
      <Button variant="ghost">
        <span className="sr-only">Spacing section break – sm</span>
        <ThemeSpacingSectionBreakSmIcon />
      </Button>

      <Button variant="ghost">
        <span className="sr-only">Spacing section break – md</span>
        <ThemeSpacingSectionBreakMdIcon />
      </Button>

      <Button variant="ghost">
        <span className="sr-only">Spacing section break – lg</span>
        <ThemeSpacingSectionBreakLgIcon />
      </Button>
    </ButtonGroup>
  );
}
