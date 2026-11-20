import type { StaticImageData } from 'next/image';

import { projects } from './selected-works-data';

import type {
  ProjectCardVariant,
  ProjectResponsibility
} from './selected-works-types';

// Rendered width of a preview image per card variant. Next.js builds the `srcset` from it.
export const PROJECT_IMAGE_WIDTH: Record<ProjectCardVariant, number> = {
  hero: 1920,
  list: 800
};

// `width` and `height` of a preview image at the ratio of the real file, so the
// space reserved before it loads matches the loaded image and the page does not jump.
export function getProjectImageSize(
  image: StaticImageData,
  variant: ProjectCardVariant
) {
  const width = PROJECT_IMAGE_WIDTH[variant];

  return { width, height: Math.round((width * image.height) / image.width) };
}

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
