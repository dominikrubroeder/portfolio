import { Avatar } from '@/components/atoms/avatar';
import {
  ButtonContact,
  ButtonGithub,
  ButtonLinkedin
} from '@/components/atoms/button';
import { ExternalLink } from '@/components/atoms/external-link';
import { HeaderMenu } from '@/components/organisms/header';
import { ThemeColorSetting } from '@/components/organisms/theme';
import { ButtonGroup } from '@/components/molecules/button-group';
import { cn } from '@/lib/utils';
import { EVENTS_WINTER_SCENE_ENABLED } from '@/components/organisms/events';
import { ButtonFigma } from '@/components/atoms/button/button-figma';

export function Header() {
  return (
    <header className="sticky top-0 z-100 mx-auto flex max-w-(--container) items-center justify-between gap-2 border-b bg-background p-4 xs:gap-4 lg:relative lg:h-24 lg:border-none">
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
          <span className="block w-max text-sm leading-snug sm:text-base">
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

      <HeaderMenu />

      <div className="hidden lg:flex lg:items-center lg:gap-4">
        <ButtonContact buttonProps={{ size: 'large', className: 'mr-2' }} />

        <ThemeColorSetting />

        <ButtonGroup minimizeSpacing>
          <ButtonFigma />
          <ButtonGithub id="header-github" />
          <ButtonLinkedin id="header-linkedin" />
        </ButtonGroup>
      </div>
    </header>
  );
}
