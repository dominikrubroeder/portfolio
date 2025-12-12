import { Container } from '@/components/atoms/container';
import { Animate } from '@/components/molecules/animate/animate';
import { BrandList } from '@/components/organisms/brand';
import {
  AllTechnologies,
  mainTechnologies
} from '@/components/organisms/technologies';
import { LiveEditContainer } from '@/components/organisms/live-edit';

export function Technologies() {
  return (
    <Animate direction="up">
      <LiveEditContainer componentName="technologies.tsx">
        <Container className="space-y-8" id="technologies">
          <h2>
            Technologies
            <span className="ml-2 font-medium text-muted-foreground">
              are the foundation of writing production-ready code. I use
            </span>
          </h2>

          <BrandList brands={mainTechnologies} />

          <AllTechnologies />
        </Container>
      </LiveEditContainer>
    </Animate>
  );
}
