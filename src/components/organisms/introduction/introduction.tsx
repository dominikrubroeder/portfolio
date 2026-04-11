import { Container } from '@/components/atoms/container';
import {
  IntroductionHowIWorkAccordion,
  IntroductionMyBackgroundAccordion,
  IntroductionTechStackAccordion
} from '@/components/organisms/introduction';
import { TrainingAccordion } from '@/components/organisms/training';
import { Accordion } from '@/components/atoms/accordion';
import { Hr } from '@/components/atoms/hr';
import { ContactButton } from '@/components/organisms/contact';

export function Introduction() {
  return (
    <Container id="introduction">
      <div className="relative z-10 rounded border bg-background p-4 pb-0 sm:pb-2">
        <p className="p-1">
          Building user interfaces is my passion for over 10 years now. It is
          commited to the frontend, where one component connects to the next,
          and the next, and the next, and all of a sudden we have a complete,
          streamlined, holistic and homogenous user interface that can be
          adjusted in color, size, spacing, typography and other theme-related
          properties from some root files.
        </p>

        <p className="p-1">
          Building user interfaces for the web: It's a craft about UI components
          and design systems, to enable companies shipping user interfaces
          reliably, predictably and with a strategic approach.
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
              children: <IntroductionMyBackgroundAccordion />
            },
            {
              title: 'Education',
              children: <TrainingAccordion />
            },
            {
              title: 'Principles',
              children: <IntroductionHowIWorkAccordion />
            },
            {
              title: 'Base Tech Stack',
              children: <IntroductionTechStackAccordion />
            }
          ]}
          accordionGroupId="accordion-group-introduction"
          focusView="start"
        />
      </div>
    </Container>
  );
}
