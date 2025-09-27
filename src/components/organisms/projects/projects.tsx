import { ProjectCarousel } from '@/components/organisms/projects';

export function Projects() {
  return (
    <section className="scroll-mt-24 space-y-6" id="projects">
      <h2>
        Projects
        <span className="ml-2 font-medium text-muted-foreground">
          show you, in which teams i have participated yet
        </span>
      </h2>

      <ProjectCarousel />
    </section>
  );
}
