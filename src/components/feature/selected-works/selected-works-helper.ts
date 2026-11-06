import { projects } from './selected-works-data';

import type { ProjectResponsibility } from './selected-works-types';

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
): string {
  if (typeof responsibility === 'string') return responsibility;

  const { link, items } = responsibility;
  const text = link
    ? responsibility.text.replace(link.label, `[${link.label}](${link.href})`)
    : responsibility.text;

  if (!items?.length) return text;

  const sublist = items
    .map((item) =>
      `- ${getResponsibilityMarkdown(item)}`
        .split('\n')
        .map((line) => `  ${line}`)
        .join('\n')
    )
    .join('\n');

  return `${text}\n${sublist}`;
}
