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
import { Mission, Why } from '@/components/organisms/foundation';
import { HeroNavigation } from '@/components/molecules/hero-navigation/hero-navigation';
import { H2 } from '@/components/organisms/typography';
import { TypewriterOverlay } from '@/components/molecules/typewriter-overlay';
import { Vision } from '@/components/molecules/vision';

export default async function HomePage() {
  return (
    <>
      {EVENTS_WINTER_SCENE_ENABLED && <Snowfall />}

      <ThemeNotesBackgroundCornellNotes />

      <TypewriterOverlay
        phrases={['Hello, world!']}
        deleteLastPhrase={false}
        typeSpeed={60}
        delay={4200}
      />

      <Container className="animate-in-to-top-100 space-y-3">
        <div>
          <div className="text-primary">Team Frontend</div>

          <h1>Design with code, code by design</h1>
        </div>

        <p>
          This is my motto since i started my career. I always combine design
          with code in my workflow to create user interfaces.
        </p>

        <ButtonGroup stretchButtons>
          <Button
            href="/introduction"
            className="bg-primary text-primary-foreground"
          >
            Introduction
            <ArrowRightIcon />
          </Button>

          <div className="flex">
            <ButtonFigma className="hidden" />
            <ButtonGithub id="header-github" />
            <ButtonLinkedin id="header-linkedin" />
          </div>
        </ButtonGroup>
      </Container>

      <Container className="animate-in-to-top-160">
        <H2>About the users experience</H2>

        <p>
          The user experience has many touchpoints: before, while and after the
          interaction of a user with a product or service. It is the overall
          satisfaction of the user about this interaction, what gets remembered
          and felt about the usage, consciously and unconsciously, physically
          and mentally, joyful or frustrating. It is our job as designers to
          build a great experience, and build up the details that make up this
          experience a joyful, delightful and easy to use one.
        </p>

        <p>
          And there are more types of "users" than the regular user on websites,
          apps and ecommerce shops. Also the developer is a user, a user of the
          codebase. Or the marketer is a user, a user of the content management
          system, building up CMS blocks, preparing a new landing page. The CEO
          is a user, a user of a concept that is provided to him when planning a
          new feature. In all of these areas, it is the job for us designers to
          make a great interaction possible, make understandable, comprehensive
          and justified concepts for these integrations.
        </p>
      </Container>

      <Container className="animate-in-to-top-240">
        <H2>Daily business workflow vision</H2>

        <Vision />
      </Container>

      <Container className="animate-in-to-top-240">
        <H2>My personal mission</H2>

        <Mission />
      </Container>

      <Container>
        <H2>Why am i design engineering?</H2>

        <Why />
      </Container>

      <HeroNavigation />
    </>
  );
}
