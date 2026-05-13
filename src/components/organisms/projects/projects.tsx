import { preload } from 'react-dom';
import { Container } from '@/components/organisms/layout';
import { Animate } from '@/components/molecules/animate/animate';
import { getProjects, ProjectCarousel } from '@/components/organisms/projects';

export function Projects() {
  const projects = getProjects({ sorting: 'is-current-first' });

  projects.forEach((project) => {
    if (project.previewImage) {
      preload(project.previewImage, {
        as: 'image',
        fetchPriority: 'high'
      });
    }
  });

  return (
    <Animate>
      <Container
        className="relative space-y-8 rounded bg-background px-0"
        id="projects"
      >
        <h2 className="mx-auto max-w-(--readable-container) bg-background">
          Projects
          <span className="ml-2 font-medium text-muted-foreground">
            I’ve contributed to and educational projects
          </span>
        </h2>

        <ProjectCarousel />
      </Container>
    </Animate>
  );
}
