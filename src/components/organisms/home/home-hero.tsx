import { Badge } from '@/components/atoms/badge';
import { Container } from '@/components/atoms/container';
import { Animate } from '@/components/molecules/animate/animate';
import { Introduction } from '@/components/organisms/introduction';
import { ButtonGroup } from '@/components/molecules/button-group';
import { ThemeDrawer, ThemeShuffleButton } from '@/components/organisms/theme';
import { Marker } from '@/components/atoms/marker';
import {
  LiveEditContainer,
  LiveEditToggle
} from '@/components/organisms/live-edit';

export function HomeHero() {
  return (
    <Animate direction="scaleUp" className="space-y-6">
      <LiveEditContainer componentName="home-hero.tsx">
        <Container
          as="section"
          className="relative z-10 space-y-6 pt-5 pb-1 lg:px-0 lg:pb-2"
          id="hero"
        >
          <div className="space-y-2">
            <Badge size="medium" color="primary">
              Team Frontend
            </Badge>

            <h2 className="bg-background">
              Building <Marker animate={true}>user interfaces</Marker> for the
              web. A craft, about UI components and design systems.
            </h2>
          </div>

          <div className="grid gap-4 sm:flex sm:items-center sm:justify-between">
            <ButtonGroup className="grid sm:flex">
              <ThemeDrawer />
              <ThemeShuffleButton />
            </ButtonGroup>

            <LiveEditToggle />
          </div>
        </Container>
      </LiveEditContainer>

      <Introduction />
    </Animate>
  );
}
