import { Container } from '@/components/atoms/container';

export function HomeHero() {
  return (
    <Container
      className="flex flex-col items-center justify-center pt-4 pb-1 lg:pb-2"
      id="hero"
    >
      <h1 className="space-y-8 sm:max-w-(--readable-container)">
        Building user interfaces for the web. A craft, about UI components and
        design systems.
      </h1>
    </Container>
  );
}
