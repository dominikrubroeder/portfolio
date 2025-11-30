import { Container } from '@/components/atoms/container';
import {
  IntroductionHowIWorkAccordion,
  IntroductionMyBackgroundAccordion,
  IntroductionTechStackAccordion
} from '@/components/organisms/introduction';
import { TrainingAccordion } from '@/components/organisms/training';

export function Introduction() {
  return (
    <Container id="introduction">
      <div className="relative z-10 space-y-6 rounded border bg-background p-4">
        <p className="font-bold text-foreground">Hey there! 👋</p>

        <div className="space-y-3 text-wrap">
          <h3 className="text-base font-bold">
            My work is committed to the frontend. I like to create and build
            dynamic interfaces that are designed to be for an interactive and
            scalable web.
          </h3>

          <p>
            Building user interfaces is something i follow for almost 10 years
            now. In that area, i found myself enjoying building components and
            creating the design system for them as the most fitting thing for me
            – some call this <i>design system engineering</i>. An even easier
            metaphor is building Lego bricks, that can be stacked together.
          </p>

          <p>
            One component can connect to the next, and the next, and the next,
            and all of a sudden we have a complete, streamlined, holistic and
            homogenous user interface, that can be adjusted in color, size,
            spacing, typography and other theme-related properties from some
            root files.
          </p>
        </div>

        <ul className="space-y-6">
          <li>
            <IntroductionMyBackgroundAccordion />
          </li>

          <li>
            <IntroductionHowIWorkAccordion />
          </li>

          <li>
            <TrainingAccordion />
          </li>

          <li>
            <IntroductionTechStackAccordion />
          </li>
        </ul>
      </div>
    </Container>
  );
}
