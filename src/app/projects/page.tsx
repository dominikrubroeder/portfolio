import type { Metadata } from 'next';
import {
  getProject,
  ProjectHero,
  ProjectListSection
} from '@/components/organisms/projects';
import { projects } from '@/components/organisms/projects/data';
import { preload } from 'react-dom';
import { PageTemplate } from '@/components/templates/page-template';

export const metadata: Metadata = {
  title: 'Projects | Dominik Rubröder, UX Design Engineer',
  description: 'Contributed projects from 2016 to 2026.'
};

export default function ProjectsPage() {
  const heroProject = getProject({ title: 'Value Booster' });

  projects.forEach((project) => {
    if (project.previewImage) {
      preload(project.previewImage, {
        as: 'image',
        fetchPriority: 'high'
      });
    }
  });

  return (
    <PageTemplate
      h1="Projects"
      heroBlockquote="I contributed either as frontend designer or engineer to the following projects; in the later projects starting around 2021, my role merged into a unified role as frontend design engineer."
      heroDescription={
        <p>Only projects with a longer period than 3 months are listed.</p>
      }
      heroNavigationHiddenLink="/projects"
    >
      {heroProject && (
        <ProjectHero
          project={heroProject}
          className="-mt-6 animate-in-to-left-160"
        />
      )}

      <ProjectListSection projectHeroTitle={heroProject?.title} />
    </PageTemplate>
  );
}
