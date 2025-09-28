import { Container } from '@/components/atoms/container';
import { ProjectCarousel } from '@/components/organisms/projects';

export function Projects() {
  return (
    <Container className="space-y-6 px-0" id="projects">
      <h2>
        Projects
        <span className="ml-2 font-medium text-muted-foreground">
          show you, in which teams i have participated yet
        </span>
      </h2>

      <ProjectCarousel />
    </Container>
  );
}
