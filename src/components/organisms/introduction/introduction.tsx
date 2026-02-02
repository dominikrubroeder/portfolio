import { Container } from '@/components/atoms/container';
import {
  IntroductionHowIWorkAccordion,
  IntroductionMyBackgroundAccordion,
  IntroductionTechStackAccordion
} from '@/components/organisms/introduction';
import { TrainingAccordion } from '@/components/organisms/training';
import { Accordion } from '@/components/atoms/accordion';

export function Introduction() {
  return (
    <Container id="introduction">
      <div className="relative z-10 rounded border bg-background p-4 pb-0 sm:pb-2">
        <p className="space-x-1 font-bold text-foreground">Hey there! 👋</p>

        <p>
          <b>My work is rooted in the frontend.</b> Building user interfaces is
          something i follow for almost 10 years now. In that area, i found
          myself enjoying building components and creating the design system for
          them as the most fitting thing for me, in short:
          <i className="ml-1">design system engineering</i>.
        </p>

        <p>
          One component can connect to the next, and the next, and the next, and
          all of a sudden we have a complete, streamlined, holistic and
          homogenous user interface that can be adjusted in color, size,
          spacing, typography and other theme-related properties from some root
          files.
        </p>

        <Accordion
          variant="contained"
          items={[
            {
              title: 'My Background',
              children: <IntroductionMyBackgroundAccordion />
            },
            {
              title: 'Work ethic, how i work',
              children: <IntroductionHowIWorkAccordion />
            },
            {
              title: 'Training + Resources',
              children: <TrainingAccordion />
            },
            {
              title: 'My Tech Stack of Choice',
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
