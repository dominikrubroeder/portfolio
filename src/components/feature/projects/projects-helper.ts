import { projects } from './projects-data';

import type { ProjectResponsibility } from './projects-types';

export function getProject({ title }: { title: string }) {
  return projects.find((project) => project.title === title);
}

export function getResponsibilityText(responsibility: ProjectResponsibility) {
  return typeof responsibility === 'string'
    ? responsibility
    : responsibility.text;
}

export function getResponsibilityMarkdown(
  responsibility: ProjectResponsibility
) {
  if (typeof responsibility === 'string') return responsibility;

  const { label, href } = responsibility.link;

  return responsibility.text.replace(label, `[${label}](${href})`);
}
