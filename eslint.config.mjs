import { defineConfig, globalIgnores } from 'eslint/config';
import nextVitals from 'eslint-config-next/core-web-vitals';
import nextTs from 'eslint-config-next/typescript';
import importPlugin from 'eslint-plugin-import';

import localPlugin from './eslint-rules/index.mjs';

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  {
    plugins: {
      import: importPlugin,
      local: localPlugin
    },
    settings: {
      'import/resolver': {
        typescript: true
      }
    },
    rules: {
      'local/component-layer-order': 'error',
      'local/component-structure': 'error',
      '@typescript-eslint/consistent-type-imports': [
        'error',
        { prefer: 'type-imports' }
      ],
      'no-restricted-syntax': [
        'error',
        {
          selector: 'Literal[value=/-\\[(#|rgba?\\(|hsla?\\()/]',
          message:
            'No arbitrary color values (hex/rgb/hsl) in Tailwind classes — add a design token to globals.css and use that instead.'
        },
        {
          selector: 'TemplateElement[value.raw=/-\\[(#|rgba?\\(|hsla?\\()/]',
          message:
            'No arbitrary color values (hex/rgb/hsl) in Tailwind classes — add a design token to globals.css and use that instead.'
        }
      ],
      'import/order': [
        'error',
        {
          groups: [
            'builtin',
            'external',
            'internal',
            'parent',
            'sibling',
            'index',
            'unknown',
            'type'
          ],
          pathGroups: [
            { pattern: 'react', group: 'external', position: 'before' },
            { pattern: 'react/**', group: 'external', position: 'before' },
            { pattern: 'next', group: 'external', position: 'before' },
            { pattern: 'next/**', group: 'external', position: 'before' },
            {
              pattern: '@/components/ui/**',
              group: 'internal',
              position: 'before'
            },
            {
              pattern: '@/components/feature/**',
              group: 'internal',
              position: 'before'
            },
            { pattern: '**/*.css', group: 'unknown', position: 'after' }
          ],
          pathGroupsExcludedImportTypes: ['react', 'next'],
          'newlines-between': 'always',
          alphabetize: { order: 'asc', caseInsensitive: true }
        }
      ]
    }
  },
  {
    files: ['src/components/ui/**/*.{ts,tsx}'],
    rules: {
      'no-restricted-imports': [
        'error',
        {
          patterns: [
            {
              group: ['@/components/feature', '@/components/feature/**'],
              message:
                'ui components must not import feature components. Features consume ui, never the other way around.'
            }
          ]
        }
      ]
    }
  },
  {
    // Brand logos carry the colors of the brands they depict.
    files: ['src/components/feature/logo/**/*.{ts,tsx}'],
    rules: { 'no-restricted-syntax': 'off' }
  },
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    '.next/**',
    'out/**',
    'build/**',
    'next-env.d.ts'
  ])
]);

export default eslintConfig;
