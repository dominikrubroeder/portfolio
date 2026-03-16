import { Container } from '@/components/atoms/container';
import { Animate } from '@/components/molecules/animate/animate';
import { BrandList } from '@/components/organisms/brand';
import {
  mainTechnologies,
  TechnologiesList
} from '@/components/organisms/technologies';

export function Technologies() {
  return (
    <Animate>
      <Container className="space-y-2" id="technologies">
        <div className="space-y-3">
          <h2>
            Technologies,
            <span className="ml-2 font-medium text-muted-foreground">
              the foundation of writing production-ready code
            </span>
          </h2>

          <p>I'm very familiar with:</p>
        </div>

        <BrandList brands={mainTechnologies} />

        <TechnologiesList />
      </Container>
    </Animate>
  );
}
