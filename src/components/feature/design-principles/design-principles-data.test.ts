import { describe, expect, it } from 'vitest';

import {
  designPrinciples,
  getDesignPrinciple,
  getDesignPrincipleHint,
  getDesignPrincipleText,
  toDesignPrincipleApi
} from './design-principles-data';

describe('designPrinciples', () => {
  it('lists the six core principles with unique ids', () => {
    expect(designPrinciples).toHaveLength(6);
    expect(new Set(designPrinciples.map(({ id }) => id)).size).toBe(6);
  });

  it('starts every title with "Design"', () => {
    designPrinciples.forEach(({ title }) => expect(title).toMatch(/^Design /));
  });

  it('joins title and description with a dash', () => {
    expect(getDesignPrincipleText(getDesignPrinciple('context'))).toBe(
      'Design in context — of the environment, of the people, of the brand'
    );
  });

  it('falls back to the full text when a principle has no hint', () => {
    expect(getDesignPrincipleHint('system')).toBe(
      getDesignPrincipleText(getDesignPrinciple('system'))
    );
    expect(getDesignPrincipleHint('context')).toContain('the brand');
  });

  it('leaves the hint out of the API shape', () => {
    expect(toDesignPrincipleApi(getDesignPrinciple('context'))).toEqual({
      id: 'context',
      title: 'Design in context',
      description: 'of the environment, of the people, of the brand'
    });
  });
});
