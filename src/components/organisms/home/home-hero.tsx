import { Animate } from '@/components/molecules/animate/animate';
import {
  IntroductionMyBackground,
  IntroductionPrinciples,
  IntroductionTechStack
} from '@/components/organisms/introduction';
import { TrainingAccordion } from '@/components/organisms/training';
import { Accordion } from '@/components/atoms/accordion';
import { Hr } from '@/components/atoms/hr';
import { ContactButton } from '@/components/organisms/contact';
import { ThemeWireframeBackground } from '@/components/organisms/theme';
import { Container } from '@/components/organisms/layout';

export function HomeHero() {
  return (
    <section className="relative overflow-hidden">
      <ThemeWireframeBackground />

      <Animate delay={0.1} className="space-y-3">
        <Container as="div" className="space-y-3">
          <div className="relative z-10 space-y-6 pb-1 lg:pb-2">
            <div className="xs:space-y-2">
              <div className="space-x-1.5 text-primary">
                <span>The art of</span>
                <span className="font-handwritten text-2xl">composing</span>
              </div>

              <h2 className="bg-background">
                Design in system to enjoy the flexibility
              </h2>
            </div>
          </div>

          <div>
            <div className="relative z-10 rounded border bg-background p-4 pb-0 sm:pb-2">
              <p className="p-1">
                Building user interfaces is my passion for over 10 years now. I
                am commited to the frontend, where one component connects to the
                next, and the next, and the next, and all of a sudden we have a
                complete, streamlined, holistic and homogenous user interface
                that can be adjusted in color, size, spacing, typography and
                other theme-related properties from some root files.
              </p>

              <p>
                During the last years, i combined design and coding into one
                craft; design engineering. The goal is to build a smooth user
                experience by leveraging both department values at the same
                time. Personally, i want to close the gap between design and
                engineering as much as possible and bring it together with
                psychology patterns.
              </p>

              <p className="p-1">
                So, building user interfaces for the web: It's a craft about UI
                components and design systems. With it, companies ship user
                interfaces more reliably, predictably and with a systematic
                approach.
              </p>
              {/** – and as a UX Design Engineer, my goal is to close
               the gap between design and engineering as much as possible. */}

              <Hr />

              <ContactButton />

              <Hr />

              <Accordion
                variant="default"
                items={[
                  {
                    title: 'My Background',
                    children: <IntroductionMyBackground />
                  },
                  {
                    title: 'Education',
                    children: <TrainingAccordion />
                  },
                  {
                    title: 'Principles',
                    children: <IntroductionPrinciples />
                  },
                  {
                    title: 'Base Tech Stack',
                    children: <IntroductionTechStack />
                  }
                ]}
                accordionGroupId="accordion-group-introduction"
                focusView="start"
              />
            </div>
          </div>
        </Container>
      </Animate>
    </section>
  );
}
