import { describe, expect, it } from 'vitest';

import { buildIntroductionApi } from './introduction-api';
import {
  introductionIntro,
  introductionPrinciples,
  introductionStatements
} from './introduction-content';

const api = buildIntroductionApi();

describe('buildIntroductionApi', () => {
  it('carries the page copy unchanged', () => {
    expect(api.statements).toEqual(introductionStatements);
    expect(api.intro).toEqual(introductionIntro);
    expect(api.principles).toEqual(introductionPrinciples);
  });

  it('lists main and grouped tools and technologies', () => {
    expect(api.tools.main.length).toBeGreaterThan(0);
    expect(api.tools.groups.length).toBeGreaterThan(0);
    expect(api.technologies.main.length).toBeGreaterThan(0);
    expect(api.technologies.groups.length).toBeGreaterThan(0);
  });

  it('serializes to JSON without React nodes', () => {
    const json = JSON.stringify(api);

    expect(json).not.toContain('$$typeof');
    expect(JSON.parse(json)).toEqual(JSON.parse(JSON.stringify(api)));
  });
});
