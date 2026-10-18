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

## Theme registry

Themes are listed once in `theme/theme-definitions.ts`: id, label, a one-phrase `description` (shown in the theme select) and the defaults a theme applies when selected (accent,
animations, radius, container width). The selector, the switch, persistence and the pre-paint script read that list.
Adding a theme means one registry entry plus its token block in `src/app/globals.css`.

The settings open in `theme/theme-drawer.tsx` (a `ui/drawer`). `theme-drawer-trigger.tsx` is the header button; it loads
the drawer with `next/dynamic` on the first click, so pages that never open it ship none of its controls. Keep the barrel
(`theme/index.ts`) to what other features use: a barrel export of a settings control pulls its code into every page.

Read one setting with `useThemeSetting(name)` (re-renders only when it changes) and setters with `useThemeActions()`.
`useTheme()` re-renders on any change: prefer the narrow hooks.
