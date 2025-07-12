import { ChevronDownIcon, SunIcon } from '@heroicons/react/24/outline';

import { AccordionContained } from '@/components/atoms/accordion';
import { Button } from '@/components/atoms/button';
import { ScrollToButton } from '@/components/atoms/button/scroll-to-button';
import { CodeBlock } from '@/components/atoms/codeblock';
import { Container } from '@/components/atoms/container';
import { Marker } from '@/components/atoms/marker';
import { ButtonGroup } from '@/components/molecules/button-group';
import { ComponentShowcase } from '@/components/organisms/component-showcase';
import {
  ColorThemeSetting,
  FontSizeThemeSetting,
  ModifyThemeDrawer
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
            <Button variant="ghost">
              <SunIcon className="size-5" /> Light
              <ChevronDownIcon className="size-4" />
            </Button>
            <ColorThemeSetting />
            <FontSizeThemeSetting />
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
          <ModifyThemeDrawer />
          <ScrollToButton
            scrollIntoViewProps={{ id: 'frontend-vision-faqs' }}
            buttonProps={{ variant: 'ghost' }}
          >
            Read more
          </ScrollToButton>
        </ButtonGroup>
      </Container>

      <Container>
        <div className="space-y-1">
          <h2>Design Tokens</h2>
          <p>
            The smallest pieces of the design system. They <i>are</i> the actual
            tokens (variables) themselves, which are getting consumed by the
            rest of the group elements: Atoms, Molecules, Organisms, Templates
            and Pages. They define the style and overall visual appearance.
          </p>
        </div>

        <CodeBlock
          fileName="globals.css"
          code={`:root {
    --background: hsl(0 0% 100%);
    --foreground: hsl(0 0% 18.8%);
    --primary: hsl(255 92% 65%);
    --primary-foreground: hsl(0 0% 100%);
    --primary-hover: hsl(255 92% 69%);
    --muted: hsl(240 23.8% 95.9%);
    --muted-foreground: hsl(240 2.3% 44%);
    --muted-hover: hsl(240, 7%, 83%);
    --border: hsl(0 0% 92%);
    --hover: hsl(240 23.8% 95.9%);
    --radius: 6px;
    --radius-md: calc(var(--radius) - 2px);
    --radius-sm: calc(var(--radius) - 4px);
    --container: 96rem;
    --readable-container: 48rem;
}`}
          borderless
        />
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
