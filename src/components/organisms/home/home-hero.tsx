import { Badge } from '@/components/atoms/badge';
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
          <div className="flex flex-wrap items-center gap-2">
            <Badge variant="primary">Team Frontend</Badge>
            <p className="text-primary">The art of composing</p>
          </div>

          <h2 className="bg-background">
            Building user interfaces for the web: A craft about UI components,
            design systems and thinking beyond visible parts.
          </h2>
        </div>
      </Container>

      <Introduction />
    </Animate>
  );
}
