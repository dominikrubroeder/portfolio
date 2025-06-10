import {
  ContactButton,
  GitHubButton,
  LinkedInButton
} from '@/components/atoms/button';
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
            dynamic interfaces that are designed to be for an interactive web.
          </h3>

          <p>
            Building user interfaces is something i follow for almost 10 years
            now. In that area, i found myself enjoying building components and
            setting up the design system for it as the most fitting and
            fulfilling thing for me.
          </p>

          <p>
            One component can connect to the next, and the next, and the next,
            and all of a sudden we have a complete, streamlined and holistic
            user interface, that can be adjusted in color, size, spacing,
            typography and other theme-related settings from some root files.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <ContactButton withLabel />

          <div className="sm:hidden">
            <GitHubButton />
            <LinkedInButton />
          </div>
        </div>

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
