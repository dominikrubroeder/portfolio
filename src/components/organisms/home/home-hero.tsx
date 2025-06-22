import { Container } from '@/components/atoms/container';
import { Badge } from '@/components/atoms/badge';

export function HomeHero() {
  return (
    <Container className="flex flex-col items-center justify-center pt-5 pb-1 lg:pb-2">
      <div className="space-y-2">
        <Badge className="font-bold tracking-wider text-primary">
          Team Frontend
        </Badge>
        <h2 className="space-y-8 sm:max-w-(--readable-container)">
          Building user interfaces for the web. A craft, about UI components and
          design systems.
        </h2>
      </div>
    </Container>
  );
}
