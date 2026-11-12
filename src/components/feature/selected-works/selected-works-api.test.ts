import { describe, expect, it, vi } from 'vitest';

import { buildSelectedWorksApi } from './selected-works-api';
import { HERO_PROJECT_TITLE } from './selected-works-content';
import { projects } from './selected-works-data';

import type { Project } from './selected-works-types';

// Vitest resolves an image import to a URL string, Next.js to `{ src, … }`.
vi.mock('./selected-works-data', async (importOriginal) => {
  const original = await importOriginal<{ projects: Project[] }>();

  return {
    projects: original.projects.map((project) => ({
      ...project,
      previewImage: project.previewImage && {
        src: String(project.previewImage),
        width: 1,
        height: 1
      }
    }))
  };
});

const api = buildSelectedWorksApi();

describe('buildSelectedWorksApi', () => {
  it('lists every project, the featured one first', () => {
    expect(api.projects).toHaveLength(projects.length);
    expect(api.projects[0].title).toBe(HERO_PROJECT_TITLE);
    expect(api.projects.filter(({ featured }) => featured)).toHaveLength(1);
  });

  it('turns preview images into absolute URLs', () => {
    api.projects.forEach((project) => {
      if ('previewImage' in project) {
        expect(project.previewImage).toMatch(/^https?:\/\//);
      }
    });
  });

  it('serializes to JSON without React nodes', () => {
    expect(JSON.stringify(api)).not.toContain('$$typeof');
  });
});
