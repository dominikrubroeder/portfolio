# UI

Baseline components of the design system. This is the generic component folder.

Examples: `button`, `badge`, `divider`, `tooltip`, `drawer`, `tabs`, `dialog`, `toggle`, `layout`, `icon`.

## Rules

- A `ui` component is generic and reusable. It knows nothing about a specific feature or domain (tools, projects,
  playground, …).
- `ui` components never import from `@/components/feature`. Dependencies only point from `feature` to `ui`. ESLint
  enforces this.
- A `ui` component may import other `ui` components.
- Token-driven styling only. React to the active theme with CSS (`in-data-[theme=wireframe]:…`), not with
  `useTheme`, which lives in `feature/theme`.
- Reusable components come with a story.

> Tip: When a `ui` component needs feature data or feature components, pass them in via props or `children` instead.
