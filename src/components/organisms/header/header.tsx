import { Avatar } from '@/components/atoms/avatar';
import { ExternalLink } from '@/components/atoms/external-link';
import { ThemeColorSetting } from '@/components/organisms/theme';
import { cn } from '@/lib/utils';
import { EVENTS_WINTER_SCENE_ENABLED } from '@/components/organisms/events';
import { ThemeAppearanceSwitch } from '@/components/organisms/theme/theme-appearance-switch';
import { ButtonGroup } from '@/components/molecules/button-group';
import { Container } from '@/components/organisms/layout';

export function Header() {
  return (
    <header className="sticky top-0 z-100 border-b bg-background lg:relative lg:h-24 lg:border-none">
      <Container className="flex items-center justify-between gap-2 py-4 xs:gap-4">
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
              <span>UX Engineer</span>
              <span className="ml-0.5 hidden sm:inline-block">@</span>
              <ExternalLink
                href="https://www.mediawave.de"
                color="muted"
                size="sm"
                title="Open mediawave commerce GmbH website"
                aria-label="Open mediawave commerce GmbH website"
              >
                <span>mediawave</span>
              </ExternalLink>
            </span>
          </h1>
        </div>

        <div className="hidden xs:flex xs:items-center xs:gap-1.5">
          <ButtonGroup minimizeSpacing>
            <ThemeAppearanceSwitch />
          </ButtonGroup>

          <ThemeColorSetting className="gap-1.5 sm:gap-2" />
        </div>
      </Container>
    </header>
  );
}
