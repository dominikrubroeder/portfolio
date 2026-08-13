import { Avatar } from '@/components/atoms/avatar';
import { ExternalLink } from '@/components/atoms/external-link';
import {
  ThemeColorSetting,
  ThemeSidebarTrigger
} from '@/components/organisms/theme';
import { cn } from '@/lib/utils';
import { EVENTS_WINTER_SCENE_ENABLED } from '@/components/organisms/events';
import { ThemeAppearanceSwitch } from '@/components/organisms/theme/theme-appearance-switch';
import { ButtonGroup } from '@/components/molecules/button-group';

export function Header() {
  return (
    <header className="sticky top-0 z-100 mx-auto flex w-full max-w-(--container-readable) items-center justify-between gap-2 border-b bg-background p-4 xs:gap-4 lg:relative lg:h-24 lg:border-none">
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

        <h1 className="mb-0 w-max">
          <span className="block w-max text-base leading-snug">
            Dominik Rubröder
          </span>
          <span className="block text-sm font-normal text-muted-foreground">
            <span>UX Design Engineer</span>
            <span className="ml-1 hidden sm:inline-block">@</span>
            <ExternalLink
              href="https://www.mediawave.de"
              color="muted"
              size="sm"
              title="Open mediawave commerce GmbH website"
              aria-label="Open mediawave commerce GmbH website"
              className="hidden sm:inline-block"
            >
              mediawave
            </ExternalLink>
          </span>
        </h1>
      </div>

      <div className="hidden xs:flex xs:items-center xs:gap-1.5">
        <ButtonGroup minimizeSpacing>
          <ThemeAppearanceSwitch />
          <ThemeSidebarTrigger />
        </ButtonGroup>

        <ThemeColorSetting className="gap-1.5 sm:gap-2" />
      </div>
    </header>
  );
}
