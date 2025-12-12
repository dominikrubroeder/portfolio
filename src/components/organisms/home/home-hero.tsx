import { Badge } from '@/components/atoms/badge';
import { Container } from '@/components/atoms/container';
import { Animate } from '@/components/molecules/animate/animate';
import { Introduction } from '@/components/organisms/introduction';
import { Marker } from '@/components/atoms/marker';

export function HomeHero() {
  return (
    <Animate direction="scaleUp" className="space-y-3">
      <Container
        as="section"
        className="relative z-10 space-y-6 pt-5 pb-1 lg:px-0 lg:pb-2"
        id="hero"
      >
        <div className="space-y-2">
          <Badge size="medium" color="primary">
            Team Frontend
          </Badge>

          <h2 className="bg-background">
            Building <Marker animate={true}>user interfaces</Marker> for the
            web. A craft, about UI components and design systems.
          </h2>
        </div>
      </Container>

      <Introduction />
    </Animate>
  );
}
