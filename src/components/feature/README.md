# Feature

Dedicated feature and domain related components, for example `tools`, `technologies`, `projects`, `playground`,
`philosophy`, `theme`, `typography`, `logo` or `header`.

## Rules

- One folder per feature. The folder holds everything the feature needs (components, data, types, helpers), so there is
  one single source of truth to look at, edit and expand.
- Every file in a feature directory is prefixed with the directory name: `tools/tools-data.ts`,
  `theme/theme-select.tsx`. Only `index.ts` barrels are exempt. ESLint (`local/component-structure`) enforces this.
- A feature consumes `@/components/ui` components. It builds domain behavior on top of them.
- `ui` never imports from `feature`. Dependencies only point from `feature` to `ui`. ESLint enforces this.
- Prefer features that do not depend on each other. Import another feature only through its `index.ts`.

> Tip: Once a component is referenced from two different features, this is a sign to make it generic, name it and move
> it to `ui`.
