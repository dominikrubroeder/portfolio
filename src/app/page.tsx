import { EVENTS_WINTER_SCENE_ENABLED, Snowfall } from '@/components/organisms/events';
import { ThemeNotesBackgroundCornellNotes } from '@/components/organisms/theme';
import { Container } from '@/components/organisms/layout';
import { ButtonGroup } from '@/components/molecules/button-group';
import { Button, ButtonFigma, ButtonGithub, ButtonLinkedin } from '@/components/atoms/button';
import { ArrowRightIcon } from '@heroicons/react/16/solid';
import { ArrowDownOnSquareIcon } from '@heroicons/react/24/outline';
import { Accordion } from '@/components/molecules/accordion';
import { Mission, Vision, Why } from '@/components/organisms/foundation';
import { IntroductionTechStack } from '@/components/organisms/introduction';
import { HeroNavigation } from '@/components/molecules/hero-navigation/hero-navigation';

export default async function HomePage() {
  return (
    <>
      {EVENTS_WINTER_SCENE_ENABLED && <Snowfall />}

      <ThemeNotesBackgroundCornellNotes />

      <Container className="animate-in-to-top-100 bg-background">
        <div className="mx-auto mb-3 text-4xl leading-[1.1] font-black text-foreground xs:text-7xl sm:text-7xl sm:leading-none">
          Stack stack stack... frontend complete.
        </div>

        <p>
          <b>Design engineering</b> UI components, scalable design systems and
          themable user interfaces for the web – strategically and
          systematically.
        </p>

        <ButtonGroup stretchButtons>
          <Button href="/introduction">
            Introduction
            <ArrowRightIcon />
          </Button>
          <Button
            variant="contained-foreground"
            href="/Dominik-Rubröder-Lebenslauf-2026.pdf"
            download
          >
            <ArrowDownOnSquareIcon /> Download CV
          </Button>

          <div className="flex">
            <ButtonFigma />
            <ButtonGithub id="header-github" />
            <ButtonLinkedin id="header-linkedin" />
          </div>
        </ButtonGroup>
      </Container>

      <Container className="animate-in-to-top-160">
        <Accordion
          variant="contained"
          buttonVariant={{ variant: 'contained-foreground' }}
          items={[
            {
              title: 'Vision: About Design Systems',
              children: <Vision />
            },
            {
              title: 'Mission: About my motiviation',
              children: <Mission />
            },
            {
              title: 'The reason why',
              children: <Why />
            },
            {
              title: 'Architecture',
              children: (
                <div className="text-muted-foreground">
                  <p>
                    <b>Atomic Design</b>, meanwhile extended with{' '}
                    <b>Subatomic</b>. This approach was introduced in 2013 by
                    Brad Frost, which had a remarkable impact on how we organize
                    and structure component systems and design system in
                    general.
                  </p>

                  <p>
                    While this approach is very handy and can be applied across
                    systems, touchpoints (Note: Make tooltip here, what does
                    cross-system mean) and cross-tooling (Note: Make tooltip
                    here, what does cross-tooling mean), in design and in code –
                    Brad himself is repeatably says that it is more about even
                    <i>having a system</i> in place is even more important than
                    having this exact structure in place.
                  </p>

                  <p>
                    So it is more about the mindset, the mental model and making
                    thoughts about a clear way to structure and organize
                    component systems what's important. The people working in
                    the team need to understand and being able to work with the
                    system appropriate.
                  </p>

                  <p>
                    I cannot encourage you enough to check out his work and
                    courses on his website, also providing material about AI +
                    Design Tokens.
                  </p>

                  <p>Sources: Brad Frost Website</p>
                  <p>Sources: Atomic Design Course by Brad Frost</p>
                  <p>Sources: Subatomic by Brad and Ian Frost</p>
                  <p>
                    Sources: AI + Design Tokens by Brad Frost, TJ, and Ian Frost
                  </p>
                </div>
              )
            },
            {
              title: 'My Tech Stack of Choice',
              children: <IntroductionTechStack />
            }
          ]}
          accordionGroupId="accordion-group-introduction"
          focusView="start"
          className="mt-0"
        />
      </Container>

      <HeroNavigation
        hiddenLink="/introduction"
        showContactButton={false}
        className="animate-in-to-top-240"
      />
    </>
  );
}
