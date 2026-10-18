import { describe, expect, it } from 'vitest';

import { THEME_OPTIONS } from './theme-constants';
import {
  getThemeDefinition,
  parseThemeAnimationsEnabled,
  parseThemeColor,
  parseThemeContainerWidth,
  parseThemeRadius,
  THEME_DEFINITIONS
} from './theme-definitions';

describe('theme registry', () => {
  it('offers exactly two themes', () => {
    expect(THEME_DEFINITIONS.map((definition) => definition.id)).toEqual([
      'default',
      'wireframe'
    ]);
  });

  it('starts wireframe neutral, still and square', () => {
    expect(getThemeDefinition('wireframe').defaults).toEqual({
      color: 'foreground',
      animationsEnabled: false,
      radius: 'none',
      containerWidth: 'default'
    });
  });

  it('keeps the current look as the default theme', () => {
    expect(getThemeDefinition('default').defaults).toEqual({
      color: 'blue',
      animationsEnabled: true,
      radius: 'md',
      containerWidth: 'default'
    });
  });

  it('describes every theme in one short phrase', () => {
    for (const definition of THEME_DEFINITIONS) {
      expect(definition.description.length).toBeGreaterThan(0);
      expect(definition.description.endsWith('.')).toBe(false);
    }
    expect(getThemeDefinition('wireframe').description).toBe('Sketch-based UI');
    expect(getThemeDefinition('default').description).toBe('Intense accent UI');
  });

  it('falls back to the default theme for unknown ids', () => {
    expect(getThemeDefinition('crazy-color').id).toBe('default');
    expect(getThemeDefinition(null).id).toBe('default');
    expect(getThemeDefinition(undefined).id).toBe('default');
  });
});

describe('theme options', () => {
  it('follow the registry, so a new theme needs no other list', () => {
    expect(THEME_OPTIONS.map((option) => option.key)).toEqual(
      THEME_DEFINITIONS.map((definition) => definition.id)
    );
    expect(THEME_OPTIONS.map((option) => option.value)).toEqual([
      'Default',
      'Wireframe'
    ]);
    expect(THEME_OPTIONS.map((option) => option.description)).toEqual([
      'Intense accent UI',
      'Sketch-based UI'
    ]);
  });
});

describe('validators', () => {
  it('falls back for invalid values', () => {
    expect(parseThemeRadius('huge', 'md')).toBe('md');
    expect(parseThemeContainerWidth(null, 'default')).toBe('default');
    expect(parseThemeColor('pink', 'blue')).toBe('blue');
    expect(parseThemeAnimationsEnabled('maybe', true)).toBe(true);
  });

  it('accepts valid values', () => {
    expect(parseThemeRadius('none', 'md')).toBe('none');
    expect(parseThemeContainerWidth('full', 'default')).toBe('full');
    expect(parseThemeColor('foreground', 'blue')).toBe('foreground');
    expect(parseThemeAnimationsEnabled('false', true)).toBe(false);
  });

  it('maps the legacy primary accent to violett', () => {
    expect(parseThemeColor('primary', 'blue')).toBe('violett');
  });
});
