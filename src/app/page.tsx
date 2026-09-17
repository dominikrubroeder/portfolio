import {
  EVENTS_WINTER_SCENE_ENABLED,
  Snowfall
} from '@/components/organisms/events';
import { ThemeNotesBackgroundCornellNotes } from '@/components/organisms/theme';
import { Container } from '@/components/organisms/layout';
import { ButtonGroup } from '@/components/molecules/button-group';
import {
  Button,
  ButtonFigma,
  ButtonGithub,
  ButtonLinkedin
} from '@/components/atoms/button';
import { ArrowRightIcon } from '@heroicons/react/16/solid';
import { Blockquote } from '@/components/atoms/blockquote';
import { H2 } from '@/components/organisms/typography';
import { BrandList } from '@/components/organisms/brand';
import { mainTools } from '@/components/organisms/tools';
import { mainTechnologies } from '@/components/organisms/technologies';
import { DrawerTools } from '@/components/molecules/drawer/drawer-tools';
import { Animate } from '@/components/molecules/animate';
import { DrawerTechnologies } from '@/components/molecules/drawer/drawer-technologies';
import { Divider } from '@/components/atoms/divider';
import { ScrollToTop } from '@/components/atoms/scroll-to-top';

export const instant = false;

export default async function HomePage() {
  return (
    <>
      <ScrollToTop />

      {EVENTS_WINTER_SCENE_ENABLED && <Snowfall />}

      <ThemeNotesBackgroundCornellNotes />

      <Animate direction="up" delay={0.16}>
        <Container className="space-y-3">
          <h1>Hands-on: User Interfaces for the Web</h1>

          <div className="text-foreground">
            <Blockquote className="mt-0 mb-3">
              <p>
                I'm a multi-discipline interface engineer, driven by design and
                component systems and their user experience.
              </p>
            </Blockquote>

            <p>
              Together with today's tools and technologies we build
              user/business-need orientated and scalable user interfaces.
            </p>

            <p>
              The user experience is the leading factor how well a UI is
              perceived and consumed by the user. It is the winning factor of
              how satisfied users are interacting with (digital) products and
              services.
            </p>
          </div>

          <ButtonGroup stretchButtons>
            <Button
              href="/projects"
              className="bg-primary text-primary-foreground"
            >
              Projects
              <ArrowRightIcon />
            </Button>

            <div className="flex">
              <ButtonFigma id="hero-figma" className="hidden" />
              <ButtonGithub id="header-github" />
              <ButtonLinkedin id="header-linkedin" />
            </div>
          </ButtonGroup>
        </Container>
      </Animate>

      <Animate
        direction="up"
        className="mb-0"
        viewport={{ once: true, margin: '-16px' }}
      >
        <Container as="section">
          <Divider variant="three-dotted" />
          <span className="block h-2" />
          <h3 className="text-4xl leading-[1.1] text-balance xs:text-5xl sm:text-7xl">
            I connect the worlds of design and code
          </h3>
          <span className="block h-2" />
          <Divider variant="three-dotted" />
        </Container>
      </Animate>

      <Animate direction="up">
        <Container as="section">
          <H2 className="flex items-center justify-between gap-4">
            Main tools <DrawerTools />
          </H2>
          <BrandList brands={mainTools} />
        </Container>
      </Animate>

      <Animate direction="up" delay={0.44}>
        <Container as="section">
          <H2 className="flex items-center justify-between gap-4">
            Main technologies <DrawerTechnologies />
          </H2>
          <BrandList brands={mainTechnologies} />
        </Container>
      </Animate>
    </>
  );
}
