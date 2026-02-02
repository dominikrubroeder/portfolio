import { Container } from '@/components/atoms/container';
import { Animate } from '@/components/molecules/animate/animate';
import { Introduction } from '@/components/organisms/introduction';

export function HomeHero() {
  return (
    <Animate direction="scaleUp" className="space-y-3">
      <Container
        as="section"
        className="relative z-10 space-y-6 pt-5 pb-1 lg:px-0 lg:pb-2"
        id="hero"
      >
        <div className="space-y-2">
          <div className="space-x-1.5 text-primary">
            <span>The art of</span>
            <span className="font-handwritten text-2xl">composing</span>
          </div>

          <h2 className="bg-background">
            Building user interfaces for the web: A craft about UI components
            and design systems.
          </h2>
        </div>
      </Container>

      <Introduction />
    </Animate>
  );
}
