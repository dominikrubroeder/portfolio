import { ButtonGroup } from '@/components/ui/button-group';

import { Avatar } from '@/components/feature/avatar';
import { EVENTS_WINTER_SCENE_ENABLED } from '@/components/feature/events';
import { ThemeColorSetting } from '@/components/feature/theme';
import { ThemeAppearanceSwitch } from '@/components/feature/theme/theme-appearance-switch';

import { cn } from '@/lib/utils';

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-background lg:relative lg:z-0 lg:h-24">
      <div className="mx-auto flex max-w-container-readable items-center justify-between gap-2 px-4 py-4 xs:gap-0">
        <div className="flex items-center gap-2 xs:gap-3">
          <Avatar
            className={cn(
              'size-11 lg:size-14',
              EVENTS_WINTER_SCENE_ENABLED && 'size-10 lg:size-12'
            )}
            width={56}
            height={56}
            as="Link"
          />

          <div className="shrink-0">
            <div className="leading-tight font-bold">Dominik Rubröder</div>

            <div className="flex flex-nowrap text-sm font-normal text-muted-foreground">
              UX Engineer
            </div>
          </div>
        </div>

        <div className="hidden xs:flex xs:items-center xs:gap-1.5">
          <ButtonGroup minimizeSpacing className="hidden sm:flex">
            <ThemeAppearanceSwitch />
          </ButtonGroup>

          <ThemeColorSetting className="gap-1.5 sm:gap-2" />
        </div>
      </div>
    </header>
  );
}
