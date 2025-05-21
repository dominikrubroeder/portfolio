import { Container } from '@/components/atoms/container';

export function HomeHero() {
  return (
    <Container
      className="flex flex-col items-center justify-center pt-4 pb-1 lg:py-8"
      id="hero"
    >
      <div className="space-y-8 sm:max-w-(--readable-container)">
        <h2>
          Building user interfaces for the web.
          <span className="ml-1">
            A craft, about UI components and design systems.
          </span>
        </h2>
      </div>
    </Container>
  );
}
