import { Button } from '@/components/atoms/button';
import DevModeLabel from '@/components/atoms/dev-mode-label';
import { EnvelopeIcon } from '@heroicons/react/24/outline';
import {
  BooksAccordion,
  HowIWorkAccordion,
  MyBackgroundAccordion,
  TechStackAccordion
} from '@/components/organisms/introduction';
import { GithubLogo, LinkedinLogo } from '@/components/atoms/logo';
import React from 'react';

export function Introduction() {
  return (
    <div className="animate-fade-up-1rem">
      <div className="relative mx-auto w-full space-y-6 rounded border bg-background px-4 py-4">
        <DevModeLabel>div | introduction.tsx</DevModeLabel>

        <p>Hey there! 👋</p>

        <div className="space-y-3 text-wrap">
          <p>
            <b className="mr-1.5 text-foreground">
              My work is committed to the frontend. I like to create and build
              dynamic interfaces that are designed to be for an interactive web.
            </b>
          </p>

          <p>
            Building user interfaces is something i follow for almost 10 years
            now. In that area, i found myself enjoying building components and
            setting up the design system as the most fitting and fulfilling
            thing to me.
          </p>

          <p>
            One component can connect to the next, and the next, and the next,
            and all of a sudden we have a complete, streamlined and holistic
            user interface, that can be adjusted in color, size, spacing,
            typography and other theme-related settings from some root files.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <Button href="mailto:dominik.rubroeder@icloud.com?subject=I want to wright you about...">
            <EnvelopeIcon />
            Contact
          </Button>

          <div className="sm:hidden">
            <Button
              variant="ghost"
              href="https://github.com/dominikrubroeder"
              target="_blank"
              title="Go to GitHub profile of Dominik Rubröder"
              aria-label="Go to GitHub profile of Dominik Rubröder"
              size="large"
            >
              <GithubLogo />
            </Button>

            <Button
              variant="ghost"
              href="https://www.linkedin.com/in/dominik-rubröder-49a63817b"
              target="_blank"
              title="Go to LinkedIn profile of Dominik Rubröder"
              aria-label="Go to LinkedIn profile of Dominik Rubröder"
              size="large"
            >
              <LinkedinLogo />
            </Button>
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
