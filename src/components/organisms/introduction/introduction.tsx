import { ArrowRightIcon } from '@heroicons/react/16/solid';

import {
  Button,
  ContactButton,
  GitHubButton,
  LinkedInButton
} from '@/components/atoms/button';
import { ButtonGroup } from '@/components/molecules/button-group';
import {
  IntroductionHowIWorkAccordion,
  IntroductionMyBackgroundAccordion,
  IntroductionTechStackAccordion
} from '@/components/organisms/introduction';
import { TrainingAccordion } from '@/components/organisms/training';

export function Introduction() {
  return (
    <section className="animate-fade-up-1rem scroll-mt-24" id="introduction">
      <div className="relative w-full space-y-6 rounded border bg-background px-4 py-4">
        <p>Hey there! 👋</p>

        <div className="space-y-3 text-wrap">
          <h3 className="text-base font-bold">
            My work is committed to the frontend. I like to create and build
            dynamic interfaces that are designed to be for a interactive and
            scalable web.
          </h3>

          <p>
            Building user interfaces is something i follow for almost 10 years
            now. In that area, i found myself enjoying building components and
            setting up the design system for them as the most fitting thing for
            me.
          </p>

          <p>
            One component can connect to the next, and the next, and the next,
            and all of a sudden we have a complete, streamlined, holistic and
            homogenous user interface, that can be adjusted in color, size,
            spacing, typography and other theme-related settings from some root
            files.
          </p>

          <p>
            This is also how <i>Frontend Vision UI</i> was created, and thought
            of. It’s a combination of well-known best practises, put together in
            one system. It&#39;s my take on components living in the design
            system world.
          </p>
        </div>

        <div className="space-y-3">
          <ButtonGroup>
            <Button href="/frontend-vision-ui">
              <span>Explore Frontend Vision UI</span>
              <ArrowRightIcon />
            </Button>

            <ContactButton />

            <GitHubButton className="sm:hidden" />

            <LinkedInButton className="sm:hidden" />
          </ButtonGroup>

          <small className="block">
            Note: This is non-commercial. I don&#39;t distribute this
            vision-sharing in a commercial manner. It&#39;s about sharing
            knowledge and perspective about frontend UI engineering and design.
          </small>
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
    </section>
  );
}
