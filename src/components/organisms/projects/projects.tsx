import { Container } from '@/components/atoms/container';
import { Animate } from '@/components/molecules/animate/animate';
import { ProjectCarousel } from '@/components/organisms/projects';

export function Projects() {
  return (
    <Animate direction="up">
      <Container className="relative space-y-6 px-0" id="projects">
        <h2 className="bg-background">
          Projects
          <span className="ml-2 font-medium text-muted-foreground">
            show you, in which teams i have participated yet
          </span>
        </h2>

        <ProjectCarousel />
      </Container>
    </Animate>
  );
}
