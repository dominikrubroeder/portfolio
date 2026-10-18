import { describe, expect, it } from 'vitest';

import { buildAgentViewMarkdown } from '@/components/feature/agent-view/agent-view-markdown';
import { footerCertifications } from '@/components/feature/footer/footer-content';
import {
  homeHeading,
  homeStatements
} from '@/components/feature/home/home-content';
import { projectsHeroBlockquote } from '@/components/feature/projects/projects-content';
import { projects } from '@/components/feature/projects/projects-data';
import { technologies } from '@/components/feature/technologies/technologies-data';
import { tools } from '@/components/feature/tools/tools-data';

const markdown = buildAgentViewMarkdown();
const lines = markdown.split('\n');

const headings = lines
  .filter((line) => /^#{1,6} /.test(line))
  .map((line) => ({
    level: line.indexOf(' '),
    text: line.slice(line.indexOf(' ') + 1)
  }));

describe('buildAgentViewMarkdown', () => {
  it('has one h1 and the h2 sections in order', () => {
    expect(headings.filter(({ level }) => level === 1)).toHaveLength(1);
    expect(
      headings.filter(({ level }) => level === 2).map(({ text }) => text)
    ).toEqual(['Home', 'Projects', 'Certifications']);
  });

  it('never skips a heading level', () => {
    headings.forEach(({ level }, index) => {
      if (index === 0) return;
      expect(level).toBeLessThanOrEqual(headings[index - 1].level + 1);
    });
  });

  it('puts the identity and profile links before Home', () => {
    const home = markdown.indexOf('## Home');

    expect(markdown.indexOf('# Dominik Rubröder, UX Engineer')).toBe(0);
    expect(markdown.indexOf('[GitHub]')).toBeLessThan(home);
    expect(markdown.indexOf('[LinkedIn]')).toBeLessThan(home);
    expect(markdown.slice(0, home).split('[GitHub]')).toHaveLength(2);
  });

  it('shows the hidden home heading and the statements in order', () => {
    const positions = homeStatements.map((statement) =>
      markdown.indexOf(`### ${statement}`)
    );

    expect(markdown.indexOf(homeHeading)).toBeGreaterThan(
      markdown.indexOf('## Home')
    );
    positions.forEach((position, index) => {
      expect(position).toBeGreaterThan(-1);
      if (index > 0) expect(position).toBeGreaterThan(positions[index - 1]);
    });
  });

  it('lists home before projects, hero project first', () => {
    const projectsAt = markdown.indexOf('## Projects');

    expect(markdown.indexOf('## Home')).toBeLessThan(projectsAt);
    expect(markdown).toContain(`> ${projectsHeroBlockquote}`);
    expect(markdown.indexOf('### Value Booster')).toBeLessThan(
      markdown.indexOf(
        `### ${projects.find((p) => p.title !== 'Value Booster')?.title}`
      )
    );

    projects.forEach((project) => {
      expect(markdown.indexOf(`### ${project.title}`)).toBeGreaterThan(
        projectsAt
      );
      expect(markdown).toContain(`(${project.url})`);
    });
  });

  it('includes every tool and technology group', () => {
    [...tools, ...technologies].forEach(({ group }) => {
      expect(markdown).toContain(`#### ${group}`);
    });
  });

  it('ends with the certifications, once, with absolute links', () => {
    const certifications = markdown.slice(
      markdown.indexOf('## Certifications')
    );

    footerCertifications.forEach(({ name }) => {
      expect(certifications).toContain(`[${name}](http`);
    });
  });

  it('emits no HTML, images or tech-stack credits', () => {
    expect(markdown).not.toMatch(/<[a-z/]/i);
    expect(markdown).not.toContain('![');
    expect(markdown).not.toContain('Next.js 16');
  });

  it('emits no blank placeholders and one trailing newline', () => {
    expect(markdown).not.toMatch(/undefined|null/);
    expect(markdown).not.toMatch(/\n{3,}/);
    expect(markdown.endsWith('\n')).toBe(true);
    expect(markdown.endsWith('\n\n')).toBe(false);
  });
});
