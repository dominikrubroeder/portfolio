import { Container } from '@/components/atoms/container';
import { Animate } from '@/components/molecules/animate/animate';
import { BrandList } from '@/components/organisms/brand';
import { AllTools, mainTools } from '@/components/organisms/tools';

export function Tools() {
  return (
    <Animate direction="up">
      <Container className="scroll-mt-24 space-y-8" id="tools">
        <div className="space-y-6">
          <h2>
            Tools
            <span className="ml-2 font-medium text-muted-foreground">
              help to visualize and communicate the application we build. I use
            </span>
          </h2>

          <BrandList brands={mainTools} />
        </div>

        <AllTools />
      </Container>
    </Animate>
  );
}
