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
import { HeroNavigation } from '@/components/molecules/hero-navigation/hero-navigation';
import { H2 } from '@/components/organisms/typography';

export default async function HomePage() {
  return (
    <>
      {EVENTS_WINTER_SCENE_ENABLED && <Snowfall />}

      <ThemeNotesBackgroundCornellNotes />

      <Container className="animate-in-to-top-100 space-y-3">
        <h1>
          Design with code, <br />
          code by design
        </h1>

        <p>
          Composing the frontend, its architecture, the user experience, the
          components, design systems, patterns, principles is my home to work
          with. Weather it's working in a design tool like Figma, or writing the
          components in code is the same language it is originated from: a idea
          from the mind and heart. Now, bringing this together with the
          requirements from the project is a powerful combination that drives my
          contribution to the frontend experience and when working in motivated
          teams.
        </p>

        <ButtonGroup stretchButtons>
          <Button
            href="/projects"
            className="bg-primary text-primary-foreground"
          >
            Projects
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
          and mentally, joyful or frustrating. It is our job as interface and
          experience designers to build a great experience, and to build up the
          details that make this experience a delightful and easy to use one.
        </p>

        <p>
          And there are more types of "users" than the regular user on websites,
          apps and ecommerce shops. Also the developer is a user, a user of the
          codebase. The marketer is a user, a user of a content management
          system, preparing a new landing page. The CEO is a user, a user of a
          concept that is provided to him when evaluating a new feature. In all
          of these areas, it is again the job for us designers to make a great
          interaction possible, provide good, understandable, comprehensive and
          justified concepts for these integrations.
        </p>
      </Container>

      <HeroNavigation hiddenLink="/projects" />
    </>
  );
}
