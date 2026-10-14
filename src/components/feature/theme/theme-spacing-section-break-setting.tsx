import { Button } from '@/components/ui/button';
import { ButtonGroup } from '@/components/ui/button-group';

import { ThemeSpacingSectionBreakLgIcon } from '@/components/feature/theme/theme-spacing-section-break-lg-icon';
import { ThemeSpacingSectionBreakMdIcon } from '@/components/feature/theme/theme-spacing-section-break-md-icon';
import { ThemeSpacingSectionBreakSmIcon } from '@/components/feature/theme/theme-spacing-section-break-sm-icon';

export function ThemeSpacingSectionBreakSetting() {
  return (
    <ButtonGroup className="gap-0">
      <Button variant="ghost-foreground">
        <span className="sr-only">Spacing section break – sm</span>
        <ThemeSpacingSectionBreakSmIcon />
      </Button>

      <Button variant="ghost-foreground">
        <span className="sr-only">Spacing section break – md</span>
        <ThemeSpacingSectionBreakMdIcon />
      </Button>

      <Button variant="ghost-foreground">
        <span className="sr-only">Spacing section break – lg</span>
        <ThemeSpacingSectionBreakLgIcon />
      </Button>
    </ButtonGroup>
  );
}
