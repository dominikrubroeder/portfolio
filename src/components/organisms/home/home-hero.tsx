import { Container } from '@/components/atoms/container';
import { Animate } from '@/components/molecules/animate/animate';
import { Introduction } from '@/components/organisms/introduction';
import { SvgCircle, SvgRectangle, SvgTriangle } from '@/components/atoms/svg';

export function HomeHero() {
  return (
    <Animate direction="scaleUp" className="space-y-3">
      <Container
        as="section"
        className="relative z-10 space-y-6 pt-5 pb-1 lg:px-0 lg:pb-2"
        id="hero"
      >
        <div className="xs:space-y-2">
          <div className="flex justify-between gap-2">
            <div className="space-x-1.5 text-primary">
              <span>The art of</span>
              <span className="font-handwritten text-2xl">composing</span>
            </div>

            <div className="hidden">
              <SvgCircle className="hover:scale-105 motion-safe:interactive motion-safe:transition" />
              <SvgRectangle className="rounded hover:rounded-none motion-safe:interactive motion-safe:transition" />
              <SvgTriangle className="hover:-rotate-90 motion-safe:interactive motion-safe:transition" />
            </div>
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
