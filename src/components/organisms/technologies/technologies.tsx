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
        <Container className="space-y-6" id="technologies">
          <div className="space-y-3">
            <h2>
              Technologies
              <span className="ml-2 font-medium text-muted-foreground">
                are the foundation of writing production-ready code
              </span>
            </h2>

            <p>A selection of technologies I use regularly:</p>
          </div>

          <BrandList brands={mainTechnologies} />

          <AllTechnologies />
        </Container>
      </LiveEditContainer>
    </Animate>
  );
}
