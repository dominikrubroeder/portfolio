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
import { Blockquote } from '@/components/atoms/blockquote';
import { Badge } from '@/components/atoms/badge';

export default async function HomePage() {
  return (
    <>
      {EVENTS_WINTER_SCENE_ENABLED && <Snowfall />}

      <ThemeNotesBackgroundCornellNotes />

      <Container className="animate-in-to-top-100 space-y-3">
        <div>
          <div className="text-primary">Team Frontend</div>

          <h1>Design with code, code by design</h1>
        </div>

        <p>
          This is my motto since i started my career. I love to design, even
          more with code.
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
          and mentally, joyful or frustrating. It is our job as interface and
          experience designers to build a great experience, and to build up the
          details that make this experience a joyful, delightful and a easy to
          use one.
        </p>

        <p>
          And there are more types of "users" than the regular user on websites,
          apps and ecommerce shops. Also the developer is a user, a user of the
          codebase. Or the marketer is a user, a user of the content management
          system, layout and setting CMS blocks, preparing for a new landing
          page. The CEO is a user, a user of a concept that is provided to him
          when planning and evaluate a new feature. In all of these areas, it is
          the job for us designers to make a great interaction possible, make
          understandable, comprehensive and justified concepts for these
          integrations.
        </p>
      </Container>

      <Container className="animate-in-to-top-240">
        <H2>Daily business workflow vision</H2>

        <div>
          <p>
            Great user interfaces combine everything together: requirements,
            user needs, business needs, sales requests, a consistent brand
            identity, defined design principles, clean code, marketing and
            storytelling character – good tooling, nice developer experiences,
            an easy local setup and streamlined processes with your own
            expertise. In other words: It is challenging to do it all.
          </p>

          <p>
            The thing is to know when to do what and why to do it, and why to do
            it now.
          </p>

          <p>
            With the most limited resources (time and budget), every project
            needs to balance all required aspects to build the best app possible
            to that time. Successful websites, apps and ecommerce shops stand
            the test of time by being sustainable, regularly maintained and
            supported.
          </p>

          <p>
            Design in particular solves – or at least focuses on tackling –
            user/business needs and enriching the users experience in a holistic
            whole.
          </p>

          <p>Code brings the design concept to life.</p>
        </div>
      </Container>

      <Container className="animate-in-to-top-240">
        <H2>My personal mission</H2>

        <p>
          <b>
            "Providing great user interfaces that mirror the intend, vision and
            goals of the owners for the people using them – by applying well
            known design and coding principles."
          </b>
        </p>
      </Container>

      <Container>
        <H2>Why am i design engineering?</H2>

        <div className="space-y-3">
          <Blockquote variant="foreground" className="my-0 mb-4">
            From concept to code – it is the whole spectrum that drives my
            passion for this job. Here are some tags i associate with frontend &
            UX design engineering.
          </Blockquote>

          <div className="flex flex-wrap gap-2">
            <Badge>Design</Badge>
            <Badge>Code</Badge>
            <Badge>Color</Badge>
            <Badge>Design System</Badge>
            <Badge>Psychology</Badge>
            <Badge>Cognition</Badge>
            <Badge>Perception</Badge>
            <Badge>Architecture</Badge>
            <Badge>Components</Badge>
            <Badge>Concept</Badge>
            <Badge>Research</Badge>
            <Badge>Testing</Badge>
            <Badge>Fun</Badge>
            <Badge>Expressiveness</Badge>
            <Badge>Branding</Badge>
            <Badge>Typography</Badge>
            <Badge>Accessibility</Badge>
            <Badge>Creativity</Badge>
            <Badge>Iconography</Badge>
            <Badge>Animations</Badge>
            <Badge>Transitions</Badge>
            <Badge>Motion Design</Badge>
            <Badge>Microinteractions</Badge>
            <Badge>Interaction Design</Badge>
            <Badge>Principles</Badge>
            <Badge>Values</Badge>
            <Badge>Patterns</Badge>
            <Badge>User Experience</Badge>
            <Badge>Satisfaction</Badge>
            <Badge>Prototyping</Badge>
            <Badge>Creativity</Badge>
          </div>
        </div>
      </Container>

      <HeroNavigation />
    </>
  );
}
