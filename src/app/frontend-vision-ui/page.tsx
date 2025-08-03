import { AccordionContained } from '@/components/atoms/accordion';
import { Blockquote } from '@/components/atoms/blockquote';
import { ScrollToButton } from '@/components/atoms/button/scroll-to-button';
import { Container } from '@/components/atoms/container';
import { ExternalLink } from '@/components/atoms/external-link';
import { Marker } from '@/components/atoms/marker';
import { ButtonGroup } from '@/components/molecules/button-group';
import { ComponentShowcase } from '@/components/organisms/component-showcase';
import {
  ThemeModifyDrawer,
  ThemeQuickSettings
} from '@/components/organisms/theme';

export default async function FrontendVisionPage() {
  return (
    <div className="animate-fade-up-1rem space-y-12">
      <Container
        as="section"
        size="container"
        className="relative mt-4 space-y-4 sm:mt-24 sm:text-center"
      >
        <div className="mx-auto max-w-[60rem] space-y-3">
          <div className="flex items-center gap-4 sm:absolute sm:-top-16 sm:left-1/2 sm:-translate-x-1/2 sm:justify-center">
            <ThemeQuickSettings animateOut={false} />
          </div>

          <h1>
            The joy of{' '}
            <Marker color="primary" className="mr-0.5">
              design
            </Marker>
            , with <Marker color="primary">coding</Marker>. Envision your
            frontend like lego bricks. Stack, stack, stack... frontend complete.
          </h1>

          <p className="mx-auto max-w-(--readable-container)">
            Frontend Vision UI brings variable UI elements to the table, which
            can be added together to build the user interface ingredients we see
            on all pages across the application.
          </p>
        </div>

        <ButtonGroup className="justify-center">
          <ThemeModifyDrawer />
          <ScrollToButton
            scrollIntoViewProps={{ id: 'frontend-vision-faqs' }}
            buttonProps={{ variant: 'ghost' }}
          >
            Read more
          </ScrollToButton>
        </ButtonGroup>
      </Container>

      <ComponentShowcase />

      <Container
        as="section"
        size="readable-container"
        id="frontend-vision-faqs"
        className="space-y-4"
      >
        <h2>
          About <span className="text-primary">Frontend Vision UI</span>
        </h2>

        <div>
          <Blockquote withBackground>
            This is not a library, it&#39;s a collection of building blocks used
            to showcase the idea, and the vision about dynamic frontend UI
            components, and how they relate to the underlying design system.
            Enjoy!
          </Blockquote>

          <div>
            <AccordionContained title="Design Principles of Frontend Vision">
              And here
            </AccordionContained>
            <AccordionContained title="Microinteractions">
              And here
            </AccordionContained>
            <AccordionContained title="Interaction Design">
              And here
            </AccordionContained>
            <AccordionContained title="Animations and Transitions">
              And here
            </AccordionContained>
            <AccordionContained title="Atomic Design, ... Architecture, what?">
              <p>
                In my description above i used a metaphor for this architecture
                approach like your personal closet, where all the things within
                it build the complete outfit you wear day to day, made up from
                smaller things. But there are more metaphors available, you can
                also say this approach is like Lego, small blocks stacked
                together are bigger blocks, and and some point buildings or
                other replicas.
              </p>
              <p>
                The original concept comes from
                <ExternalLink href="https://bradfrost.com">
                  Brad Frost
                </ExternalLink>
                with his famous book
                <ExternalLink
                  href="https://brad-frost.myshopify.com"
                  className="mr-0"
                >
                  Atomic Design
                </ExternalLink>
                . He also brought a new concept in 2025:
                <ExternalLink href="https://designtokenscourse.com">
                  Subatomic
                </ExternalLink>
              </p>
            </AccordionContained>
            <AccordionContained title="Where are you coming from?">
              And here
            </AccordionContained>
          </div>
        </div>
      </Container>

      {/* TODO: Analytics rendering here? */}
    </div>
  );
}
