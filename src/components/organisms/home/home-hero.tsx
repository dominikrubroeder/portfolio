import { Container } from '@/components/atoms/container';

export function HomeHero() {
  return (
    <Container
      className="flex flex-col items-center justify-center py-8"
      id="hero"
    >
      <div className="space-y-8 sm:max-w-(--breakpoint-lg)">
        <div className="space-y-6">
          <h2 className="space-y-8 text-4xl leading-[1.325] font-semibold text-foreground sm:max-w-(--breakpoint-md)">
            Building user interfaces for the web. A craft, about UI components
            and design systems.
          </h2>
        </div>
      </div>
    </Container>
  );
}
