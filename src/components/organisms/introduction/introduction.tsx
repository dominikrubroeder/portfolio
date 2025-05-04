import { Accordion } from '@/components/atoms/accordion';
import ImageSlideIn from '@/components/atoms/image-slide-in';
import DevModeLabel from '@/components/atoms/dev-mode-label';
import Animate from '@/components/molecules/animate';
import {
  Books,
  Mindset,
  TechStack,
  Vision
} from '@/components/organisms/introduction';

export function Introduction() {
  return (
    <Animate direction="up">
      <section
        className="scroll-mt-24 space-y-8 px-4 md:scroll-mt-32"
        id="introduction"
      >
        <div className="relative mx-auto w-full space-y-6 rounded border bg-background px-4 py-4 sm:max-w-(--breakpoint-sm)">
          <DevModeLabel>div | introduction.tsx</DevModeLabel>

          <div className="flex items-center gap-2.5">
            Hey there!
            <ImageSlideIn />
          </div>

          <div className="text-wrap">
            <b className="mr-1.5 text-foreground">
              My work is committed to the frontend. I like to create and build
              dynamic interfaces that are designed to be for a joyful and
              interactive web
            </b>
            <p>
              – later on, native mobile apps might join that paradigm. I am a
              designer that like&#39;s to code to make the design available to
              everyone.
            </p>

            <p>Design, code or psychological principles helps to</p>
          </div>

          <ul className="space-y-6">
            <li>
              <Accordion title="More about my vision" open>
                <Vision />
              </Accordion>
            </li>

            <li>
              <Accordion title="Things i like">
                <Mindset />
              </Accordion>
            </li>

            <li>
              <Accordion title="Books">
                <Books />
              </Accordion>
            </li>

            <li>
              <Accordion title="My tech stack">
                <TechStack />
              </Accordion>
            </li>
          </ul>
        </div>
      </section>
    </Animate>
  );
}
