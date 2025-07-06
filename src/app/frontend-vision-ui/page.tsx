import {
  ChevronDownIcon,
  SparklesIcon,
  SunIcon
} from '@heroicons/react/24/outline';

import { Button } from '@/components/atoms/button';
import { Container } from '@/components/atoms/container';
import { ComponentShowcase } from '@/components/organisms/component-showcase';
import {
  ColorThemeSetting,
  FontSizeThemeSetting
} from '@/components/organisms/theme';

export default async function FrontendVisionPage() {
  return (
    <div className="animate-fade-up-1rem space-y-12">
      <Container
        as="section"
        className="relative mt-18 space-y-4 md:text-center"
      >
        <div className="mx-auto max-w-[60rem]">
          <div className="absolute -top-12 left-1/2 flex -translate-x-1/2 items-center justify-center gap-4">
            <Button variant="ghost">
              <SunIcon className="size-5" /> Light
              <ChevronDownIcon className="size-4" />
            </Button>
            <ColorThemeSetting />
            <FontSizeThemeSetting />
          </div>
          <h1>
            The joy of coding, with design. Envision your frontend like lego
            bricks. Stack, stack, stack... frontend complete.
          </h1>
        </div>

        <p>
          <Button>
            <SparklesIcon /> Modify Theme
          </Button>
        </p>
      </Container>

      <ComponentShowcase />
    </div>
  );
}
