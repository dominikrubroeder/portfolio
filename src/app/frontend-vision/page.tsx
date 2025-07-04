import { SparklesIcon } from '@heroicons/react/24/outline';

import { Button } from '@/components/atoms/button';
import { Container } from '@/components/atoms/container';
import { ComponentShowcase } from '@/components/organisms/component-showcase';

export default async function FrontendVisionPage() {
  return (
    <div className="space-y-12">
      <Container as="section" className="mt-12 space-y-4 text-center">
        <h1 className="max-w-[60rem]">
          The joy of coding, with design. Envision your frontend like lego
          bricks. Stack, stack, stack... frontend complete.
        </h1>

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
