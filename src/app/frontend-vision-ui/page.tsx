import { AccordionContained } from '@/components/atoms/accordion';
import { ScrollToButton } from '@/components/atoms/button/scroll-to-button';
import { Container } from '@/components/atoms/container';
import { Marker } from '@/components/atoms/marker';
import { ButtonGroup } from '@/components/molecules/button-group';
import { ComponentShowcase } from '@/components/organisms/component-showcase';
import {
  ThemeAppearanceSetting,
  ThemeColorSetting,
  ThemeFontSizeSetting,
  ThemeModifyDrawer
} from '@/components/organisms/theme';

export default async function FrontendVisionPage() {
  return (
    <div className="animate-fade-up-1rem space-y-12">
      <Container
        as="section"
        size="container"
        className="relative mt-4 space-y-4 sm:mt-18 sm:text-center"
      >
        <div className="mx-auto max-w-[60rem] space-y-3">
          <div className="flex items-center gap-4 sm:absolute sm:-top-16 sm:left-1/2 sm:-translate-x-1/2 sm:justify-center">
            <ThemeAppearanceSetting />
            <ThemeColorSetting />
            <ThemeFontSizeSetting />
          </div>

          <h1>
            The joy of{' '}
            <Marker color="primary" className="mr-0.5">
              coding
            </Marker>
            , with <Marker color="primary">design</Marker>. Envision your
            frontend like lego bricks. Stack, stack, stack... frontend complete.
          </h1>

          <p className="mx-auto max-w-(--readable-container)">
            Frontend Vision UI brings variable elements to the table, which can
            be added together to build the user interface ingredients we see on
            all pages.
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
          <AccordionContained title="Someting here">
            And here
          </AccordionContained>
          <AccordionContained title="Someting here">
            And here
          </AccordionContained>
          <AccordionContained title="Someting here">
            And here
          </AccordionContained>
          <AccordionContained title="Architecture, what?">
            And here
          </AccordionContained>
        </div>
      </Container>
    </div>
  );
}
