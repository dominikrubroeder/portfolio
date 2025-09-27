import { BrandList } from '@/components/organisms/brand';
import {
  AllTechnologies,
  mainTechnologies
} from '@/components/organisms/technologies';

export function Technologies() {
  return (
    <section className="scroll-mt-24 space-y-8" id="technologies">
      <h2>
        Technologies
        <span className="ml-2 font-medium text-muted-foreground">
          are the foundation of writing production-ready code. I use
        </span>
      </h2>

      <BrandList brands={mainTechnologies} />

      <AllTechnologies />
    </section>
  );
}
