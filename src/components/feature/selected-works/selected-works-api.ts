import { toBrandApi } from '@/components/feature/brand';

import { absoluteUrl } from '@/lib/routing';

import {
  HERO_PROJECT_TITLE,
  projectsHeroBlockquote
} from './selected-works-content';
import { projects } from './selected-works-data';

import type { Project, ProjectResponsibility } from './selected-works-types';

type ResponsibilityApi = {
  text: string;
  link?: { label: string; href: string };
  items?: ResponsibilityApi[];
};

const toResponsibilityApi = (
  responsibility: ProjectResponsibility
): ResponsibilityApi =>
  typeof responsibility === 'string'
    ? { text: responsibility }
    : {
        text: responsibility.text,
        ...(responsibility.link && { link: responsibility.link }),
        ...(responsibility.items?.length && {
          items: responsibility.items.map(toResponsibilityApi)
        })
      };

// The logo is a React node and stays out; the preview image becomes a URL.
const toProjectApi = (project: Project) => ({
  title: project.title,
  ...(project.subline && { subline: project.subline }),
  featured: project.title === HERO_PROJECT_TITLE,
  category: project.category,
  url: project.url,
  isCurrent: project.isCurrent,
  isActive: project.isActive,
  description: project.description,
  ...(project.timeframe && { timeframe: project.timeframe }),
  ...(project.role && { role: project.role }),
  responsibilities: (project.responsibilities ?? []).map(toResponsibilityApi),
  tools: (project.tools ?? []).map(toBrandApi),
  technologies: (project.technologies ?? []).map(toBrandApi),
  companies: (project.companies ?? []).map(({ label, href }) => ({
    label,
    ...(href && { href })
  })),
  ...(project.demoUrls?.length && { demoUrls: project.demoUrls }),
  ...(project.previewImage && {
    previewImage: absoluteUrl(encodeURI(project.previewImage.src))
  }),
  ...(project.notes && { notes: project.notes })
});

export function buildSelectedWorksApi() {
  const hero = projects.filter(
    (project) => project.title === HERO_PROJECT_TITLE
  );
  const others = projects.filter(
    (project) => project.title !== HERO_PROJECT_TITLE
  );

  return {
    intro: projectsHeroBlockquote,
    projects: [...hero, ...others].map(toProjectApi)
  };
}
