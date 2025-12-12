import { Container } from '@/components/atoms/container';
import { Animate } from '@/components/molecules/animate/animate';
import { ProjectCarousel } from '@/components/organisms/projects';
import { LiveEditContainer } from '@/components/organisms/live-edit';

export function Projects() {
  return (
    <Animate direction="up">
      <LiveEditContainer componentName="projects.tsx">
        <Container className="relative space-y-6 rounded px-0" id="projects">
          <h2 className="mx-auto max-w-(--readable-container) bg-background">
            Projects
            <span className="ml-2 font-medium text-muted-foreground">
              show you, in which teams i have participated yet
            </span>
          </h2>

          <ProjectCarousel />
        </Container>
      </LiveEditContainer>
    </Animate>
  );
}
