import { ArrowRightIcon } from '@heroicons/react/16/solid';

import {
  Button,
  ContactButton,
  GitHubButton,
  LinkedInButton
} from '@/components/atoms/button';
import { ButtonGroup } from '@/components/molecules/button-group';
import {
  BooksAccordion,
  HowIWorkAccordion,
  MyBackgroundAccordion,
  TechStackAccordion
} from '@/components/organisms/introduction';

export function Introduction() {
  return (
    <div className="animate-fade-up-1rem">
      <div className="relative mx-auto w-full space-y-6 rounded border bg-background px-4 py-4">
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
            setting up the design system for them as the most fitting and the
            most fulfilling thing for me.
          </p>

          <p>
            One component can connect to the next, and the next, and the next,
            and all of a sudden we have a complete, streamlined, holistic and
            homogenous user interface, that can be adjusted in color, size,
            spacing, typography and other theme-related settings from some root
            files.
          </p>

          <p>
            This is also, how <i>Frontend Vision UI</i> was created, and thought
            about. It&#39;s my take on components, living in the design system:
          </p>
        </div>

        <ButtonGroup>
          <Button href="/frontend-vision-ui">
            <span>Explore Frontend Vision UI</span>
            <ArrowRightIcon />
          </Button>

          <ContactButton />

          <GitHubButton className="sm:hidden" />

          <LinkedInButton className="sm:hidden" />
        </ButtonGroup>

        <ul className="space-y-6">
          <li>
            <MyBackgroundAccordion />
          </li>

          <li>
            <HowIWorkAccordion />
          </li>

          <li>
            <BooksAccordion />
          </li>

          <li>
            <TechStackAccordion />
          </li>
        </ul>
      </div>
    </div>
  );
}
