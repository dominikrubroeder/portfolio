import Image from 'next/image';
import { Container } from '@/components/atoms/container';
import { Animate } from '@/components/molecules/animate/animate';
import { getProjects, ProjectCarousel } from '@/components/organisms/projects';

export function Projects() {
  const projects = getProjects({ sorting: 'is-current-first' });

  return (
    <Animate>
      <Container
        className="relative space-y-8 rounded bg-background px-0"
        id="projects"
      >
        <div className="hidden" aria-hidden="true">
          {projects.map(
            (p) =>
              p.previewImage && (
                <Image
                  key={p.previewImage}
                  src={p.previewImage}
                  width={800}
                  height={500}
                  loading="eager"
                  alt=""
                />
              )
          )}
        </div>

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
