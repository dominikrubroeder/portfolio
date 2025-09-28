import { Badge } from '@/components/atoms/badge';
import { Container } from '@/components/atoms/container';

export function HomeHero() {
  return (
    <Container
      className="pt-5 pb-1 lg:px-0 lg:pb-2"
      horizontalPadding
      id="hero"
    >
      <div className="space-y-2">
        <Badge size="medium" color="primary">
          Team Frontend
        </Badge>

        <h2>
          Building user interfaces for the web. A craft, about UI components and
          design systems.
        </h2>
      </div>
    </Container>
  );
}
