import { Badge } from '@/components/atoms/badge';
import { Container } from '@/components/atoms/container';
import { Animate } from '@/components/molecules/animate/animate';
import { Introduction } from '@/components/organisms/introduction';

export function HomeHero() {
  return (
    <Animate direction="scaleUp" className="space-y-6">
      <Container
        as="section"
        className="space-y-6 pt-5 pb-1 lg:px-0 lg:pb-2"
        id="hero"
      >
        <div className="space-y-2">
          <Badge size="medium" color="primary">
            Team Frontend
          </Badge>

          <h2>
            Building user interfaces for the web. A craft, about UI components
            and design systems.
          </h2>
        </div>
      </Container>

      <Introduction />
    </Animate>
  );
}
