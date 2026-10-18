<!--
Sync Impact Report
- Version change: 1.2.0 → 1.3.0
- Modified principles: IV renamed "Accessible, Semantic and Reduced-Motion Aware" → "Accessible by Default, Verified Every Time"
  (existing rules kept, expanded)
- Added sections: workflow gate for accessibility checks
- Removed sections: none
- Follow-up TODOs: none
-->

# Portfolio Constitution

## Core Principles

### I. Design Source of Truth

All UI work MUST follow `DESIGN.md` (look) and `UX_PRINCIPLES.md` (behavior). Both MUST be read before UI is
added or changed. Colors, radii, fonts, widths and motion MUST come from tokens in `src/app/globals.css`; a new
value needs a new token first. Every component MUST work in light, dark, all accents, the wireframe theme, reduced
motion and 90–110 % font size. A lasting design or behavior decision MUST update both documents (including the
`DESIGN.md` decision log) in the same change.

Rationale: the portfolio is itself the proof of the "design and code" claim. Documents and code must not drift.

### II. Existing Architecture First

New code MUST follow the architecture of the app. Components live in `src/components/ui` (generic, domain-free) or
`src/components/feature/<name>` (domain-specific). `feature` consumes `ui`; `ui` MUST NOT import `feature`. Every
file in a feature folder MUST be prefixed with the folder name; only `index.ts` barrels are exempt. Reusable `ui`
components MUST have a Storybook story. Pages in `src/app` compose `ui` and `feature` components, use
`PageTemplate` or `Container`, and export `metadata` with the `… | Dominik Rubröder, UX Engineer` title pattern.
Reuse an existing component, hook or pattern before creating a new one. Imports use the `@/` alias.

Rationale: a predictable place for every file keeps the system legible to humans and agents.

### III. ESLint and Prettier Compliance (NON-NEGOTIABLE)

Generated code MUST pass `npm run lint` and `npm run format` without errors. This includes the local rules
`local/component-layer-order` and `local/component-structure`, `import/order` (react, next, external, `ui`,
`feature`, relative, then types; alphabetized; blank lines between groups), `consistent-type-imports` and the ban
on arbitrary color values in Tailwind classes. Prettier settings apply: semicolons, single quotes, no trailing
commas, 80 columns, Tailwind class sorting. Rules MUST NOT be disabled to make code pass, except where the
configuration already allows it (brand logos).

Rationale: the configuration encodes the architecture; passing it is the cheapest proof of compliance.

### IV. Accessible by Default, Verified Every Time

Accessibility MUST be considered in every UI change, from the first line, not added afterwards. Target is WCAG 2.2 AA.

- **Semantics**: use native elements (`Button`/`Link`, `button` with `role="switch"` for toggles), never `div` + `onClick`.
  Landmarks and heading order MUST be correct. Every control MUST have an accessible name, role and state
  (`aria-pressed`, `aria-checked`, `aria-expanded`); icon-only controls MUST use `iconOnly` + `label`.
- **Keyboard and focus**: everything MUST be operable by keyboard in visual order, with a visible focus state.
  Overlays (drawer, dialog, sidebar, popups) MUST close with `Esc`, scrim and a control, move focus in, return it to the
  trigger, and make the page behind (and closed overlays) unreachable (`inert` or a focus trap). Content hidden off
  screen MUST NOT stay focusable.
- **Contrast**: text MUST meet 4.5 : 1 (3 : 1 for large text); control boundaries, focus rings and state indicators
  MUST meet 3 : 1 in every theme, appearance and accent. Color MUST NOT be the only signal.
- **Targets and zoom**: touch targets MUST be at least 44 px for `medium` and larger; layouts MUST work at 375 px and at
  90–110 % text size without loss of content or horizontal scrolling.
- **Motion**: animation MUST honor `prefers-reduced-motion` and the in-app animation setting. Native CSS animation MUST
  be preferred; `motion` is allowed only where CSS cannot do the job.
- **Feedback**: async state MUST show inside the triggering button; changes the visitor cannot see MUST be announced
  when they matter (for example through a live region).
- **Verification**: a known violation MUST be fixed or recorded in `DESIGN.md` known gaps with its measured value.
  Storybook `addon-a11y` violations are bugs.

Rationale: the product is for every visitor. Accessibility and restraint are requirements, not polish, and problems are
cheapest to prevent while the component is being written.

### V. Simplicity and Content First

Build the smallest change that meets the request. Content leads; chrome stays quiet. No shadows, gradients, glass
or parallax; at most one full-bleed `bg-primary` band per page; no looping motion in content areas. Size with
`rem`/Tailwind classes, not px font sizes or inline `style` (except genuinely dynamic values). Add no dependency,
abstraction or option without a present need. Preferences persist only in `localStorage` under `dr-` keys.

Rationale: bold minimalism is the design language; complexity must be justified.

### VI. Server-First and CSS-First

Components MUST be React Server Components by default. A component MUST become a client component (`'use client'`)
only when it needs state, effects, event handlers or browser APIs that cannot be provided by a server component, and
the client boundary MUST sit on the smallest leaf possible (for example the trigger button, not the header). Pages,
layouts and `ui` components without interactivity MUST stay server components. Props and `children` MUST be used to
keep server content inside client wrappers.

Visual state and effects (theme, appearance, accent, radius, width, hover, focus, reveal, motion on/off) MUST be
implemented in CSS first: tokens, `data-*` attributes on `<html>`, selectors, media queries and native
transitions/keyframes. JavaScript MUST be used only where CSS cannot do the job, and then as a fallback that does not
replace the CSS behavior. A setting change MUST NOT re-render the page tree; it MUST update the DOM attribute and only
the components that display that setting. Rarely used UI (such as the theme settings panel) MUST load on demand.

Rationale: server rendering and native CSS keep bundles small, avoid hydration cost and make live updates instant,
which keeps the theme switch and the whole site fast.

### VII. Documentation and Feature Story

Documentation MUST be updated in the same change as the code it describes: `DESIGN.md` for look, `UX_PRINCIPLES.md`
for behavior, the README of the affected layer (`ui` or `feature`), and any other file that states the changed
behavior. A change that leaves a document wrong MUST NOT be merged.

Every feature MUST have a `STORY.md` in its feature directory (`specs/<feature>/STORY.md`), created with the feature
and finished before it ships. It MUST state, in clear and straightforward language: the purpose of the feature, what it
provides, and how it benefits the visitor and the app. It MUST be short (one page), written for a non-technical reader,
and compelling: lead with the outcome, avoid jargon and implementation detail, and make no claim the shipped feature
does not deliver. When a feature changes, its `STORY.md` MUST change with it.

Rationale: the portfolio is itself the proof of its claim. Current documentation and a plain story of why each feature
exists keep humans and coding agents aligned, and make the value of every feature easy to explain.

## Technical Constraints

- Stack: Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS 4 (CSS-first config), Base UI and Radix
  behind shadcn-style wrappers, `motion`, `class-variance-authority` + `cn()`, Lucide and Heroicons.
- This Next.js version has breaking changes. Contributors MUST read the relevant guide in
  `node_modules/next/dist/docs/` before writing framework code (see `AGENTS.md`).
- A new `'use client'` file MUST be justified in the plan or the task (state, effect, event handler or browser API).
- Variants MUST use `cva` + `cn`; prefer explicit `variant`/`size` props over class overrides.
- Theme differences MUST use tokens and `html[data-theme=…]` selectors, not forked components.
- Accent changes MUST update `globals.css` in all three places and, for cursor images,
  `scripts/generate-cursor-tokens.mjs` followed by `npm run cursors`.

## Development Workflow and Quality Gates

- Before UI work: read `DESIGN.md` and `UX_PRINCIPLES.md`, and inspect neighboring components.
- Every feature plan and task list MUST include tasks for documentation updates and for `STORY.md`.
- Before commit: `npm run format` and `npm run lint` MUST pass, and documentation and `STORY.md` MUST match the code.
- UI changes MUST be checked in light, dark, wireframe, 375 px width and reduced motion, and by keyboard alone (tab order,
  focus visible, `Esc` on overlays); new or changed components MUST also be checked for name, role and state.
- Every feature plan and task list MUST include accessibility checks for the UI it adds.
- Changes that add client components or JS-driven visuals MUST show why a server component or CSS could not do it.
- Reviews MUST verify compliance with this constitution; deviations MUST be justified in the change description.
- Commit messages follow the Conventional Commits style used in the repository history.

## Governance

This constitution supersedes other practices for AI-assisted and manual work in this repository. `CLAUDE.md`,
`AGENTS.md`, `DESIGN.md` and `UX_PRINCIPLES.md` provide runtime guidance; on conflict, the CSS tokens win over
`DESIGN.md`, and this constitution wins over convenience.

Amendments MUST be made by editing this file, with an updated Sync Impact Report, a version bump and a clear commit
message. Versioning follows semantic versioning: MAJOR for removed or redefined principles, MINOR for new principles
or materially expanded guidance, PATCH for clarifications. Compliance is reviewed on every feature plan (the
Constitution Check) and on every pull request.

**Version**: 1.3.0 | **Ratified**: 2026-10-17 | **Last Amended**: 2026-10-18
