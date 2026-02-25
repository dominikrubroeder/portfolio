import { Container } from '@/components/atoms/container';
import { Animate } from '@/components/molecules/animate/animate';
import { ProjectCarousel } from '@/components/organisms/projects';

export function Projects() {
  return (
    <Animate>
      <Container
        className="relative space-y-8 rounded bg-background px-0"
        id="projects"
      >
        <h2 className="mx-auto max-w-(--readable-container) bg-background">
          Projects
          <span className="ml-2 font-medium text-muted-foreground">
            I’ve contributed to
          </span>
        </h2>

        <ProjectCarousel />
      </Container>
    </Animate>
  );
}
