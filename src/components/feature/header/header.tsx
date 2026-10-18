import { AgentViewLink } from '@/components/feature/agent-view';
import { Avatar } from '@/components/feature/avatar';
import { EVENTS_WINTER_SCENE_ENABLED } from '@/components/feature/events';
import { headerIdentity } from '@/components/feature/header/header-content';
import {
  ThemeColorSetting,
  ThemeDrawerTrigger
} from '@/components/feature/theme';

import { cn } from '@/lib/utils';

export function Header() {
  return (
    <header className="sticky top-0 z-200 bg-background lg:relative lg:z-0 lg:h-24">
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
            <div className="leading-tight font-bold">{headerIdentity.name}</div>

            <div className="flex flex-nowrap text-sm font-normal text-muted-foreground">
              {headerIdentity.role}
            </div>
          </div>
        </div>

        <div className="flex items-center gap-1.5">
          <ThemeDrawerTrigger />

          <ThemeColorSetting
            includeNeutral={false}
            className="hidden gap-1.5 sm:flex sm:gap-2"
          />
        </div>
      </div>

      <AgentViewLink className="absolute top-1/2 right-4 hidden -translate-y-1/2 in-data-[theme-container-width=full]:max-[112rem]:hidden! in-data-[theme-container-width=wide]:max-[83rem]:hidden! lg:inline-flex" />
    </header>
  );
}
