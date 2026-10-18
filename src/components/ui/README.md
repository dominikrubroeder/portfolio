# UI

Baseline components of the design system. This is the generic component folder.

Examples: `button`, `badge`, `divider`, `tooltip`, `drawer`, `tabs`, `dialog`, `toggle`, `layout`, `icon`.

## Rules

- A `ui` component is generic and reusable. It knows nothing about a specific feature or domain (tools, projects,
  playground, …).
- `ui` components never import from `@/components/feature`. Dependencies only point from `feature` to `ui`. ESLint
  enforces this.
- A `ui` component may import other `ui` components.
- Token-driven styling only. React to the active theme and its settings with CSS (`in-data-[theme=wireframe]:…`,
  `[html[data-theme-animations=on]_&]:…`), not with `useTheme`, which lives in `feature/theme`.
- The one exception is animation: `ui/animate` exports `AnimationsProvider` and `useAnimationsEnabled`. `feature/theme`
  renders the provider; `Animate` and `Typewriter` read it to stop JS motion. CSS stays the source of truth.
- `ui/select` wraps the Base UI select (same look as before); an option can carry an `icon` and a `description` (shown under its label in the open list); `ui/drawer` is the panel pattern, also for the theme settings.
- Default to server components. Add `'use client'` only for state, effects, event handlers or browser APIs.
- Reusable components come with a story.

> Tip: When a `ui` component needs feature data or feature components, pass them in via props or `children` instead.
