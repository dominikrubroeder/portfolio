<!--
Sync Impact Report
- Version change: 1.6.0 → 1.7.0
- Modified principles: I. Design Source of Truth (cross-theme compatibility and the documented style patterns are now
  explicit, testable rules for every new or changed component)
- Added principles: none
- Added rules: a new component MUST match the style patterns of every theme; a pattern one component introduces MUST
  be recorded in `DESIGN.md` and applied to the components it covers; Development Workflow gate to verify every theme
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

Every new or changed component MUST be cross-theme compatible and MUST match the documented style patterns of every
theme. It MUST look and behave as intended in each registered theme (today Default and Wireframe) without a forked
component: differences MUST come from tokens and `html[data-theme=…]` selectors. A component MUST NOT ship with the
style of one theme only. For Wireframe this means the sketch pattern recorded in `DESIGN.md` (hand-drawn corners and
pencil outline, one `foreground` stroke, accent kept where documented) and the grayscale media rule; for Default it
means the documented tokens, radii and accent behavior. Before building a component, the author MUST look for the
pattern that already covers its kind of element (button, control, frame, divider, shape, text on a shape) and reuse its
tokens. When no pattern covers it, the author MUST define one as a token, apply it to the components it covers, and
record it in `DESIGN.md` (see §10 and the decision log) in the same change. A theme added later MUST be applied to
every existing component, and the registry entry MUST NOT land before they all work in it.

Rationale: the portfolio is itself the proof of the "design and code" claim. Documents and code must not drift.

### II. Existing Architecture First

New code MUST follow the architecture of the app. Components live in `src/components/ui` (generic, domain-free) or
`src/components/feature/<name>` (domain-specific). `feature` consumes `ui`; `ui` MUST NOT import `feature`. Every
file in a feature folder MUST be prefixed with the folder name; only `index.ts` barrels are exempt. Reusable `ui`
components MUST have a Storybook story. Pages in `src/app` compose `ui` and `feature` components, use
`PageTemplate` or `Container`, and export `metadata` with the `… | Dominik Rubröder, UX Engineer` title pattern.
Reuse an existing component, hook or pattern before creating a new one. Imports MUST use the `@/` alias (for
example `@/components/ui/button`); parent-relative paths such as `../../../x` MUST NOT be used. A same-folder
import (`./x`) is allowed.

Rationale: a predictable place for every file keeps the system legible to humans and agents.

### III. ESLint and Prettier Compliance (NON-NEGOTIABLE)

Generated code MUST pass `npm run lint` and `npm run format` without errors. This includes the local rules
`local/component-layer-order` and `local/component-structure`, `import/order` (react, next, external, `ui`,
`feature`, relative, then types; alphabetized; blank lines between groups), `consistent-type-imports`, the ban
on arbitrary color values in Tailwind classes and the ban on parent-relative imports (`no-restricted-imports`; use
`@/`, and `@/public/` for files in `public/`). Prettier settings apply: semicolons, single quotes, no trailing
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

### VIII. Agent View Parity

`/agent-view` (see `specs/002-agent-view/`) is the plain-markdown twin of the site content. Whenever a feature adds,
changes or removes content on a page that agent view covers (today `/` and `/selected-works`, including content shown only
through drawers and tabs), it MUST update agent view in the same change:

- The copy MUST live in a shared content or data module (for example `home-content.ts`, `projects-data.tsx`,
  `tools-data.ts`) that both the page and `buildAgentViewMarkdown()` read. Copy written inline in a page that agent view
  should show MUST first move to such a module.
- New content types MUST get an output rule in the builder and in
  `specs/002-agent-view/contracts/agent-view-markdown-contract.md`, and the builder's unit test MUST cover them.
- A new top-level page MUST record in its plan whether agent view includes it; if it does, the page's content follows
  the rules above.
- Agent view MUST stay plain: no HTML, no styling, no script, no theme dependence.

Rationale: agent view exists so that people and AI tools get the full portfolio from one address. A page change that
skips it leaves a stale or incomplete document without anyone noticing.

## Technical Constraints

- Stack: Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS 4 (CSS-first config), Base UI and Radix
  behind shadcn-style wrappers, `motion`, `class-variance-authority` + `cn()`, Lucide and Heroicons.
- This Next.js version has breaking changes. Contributors MUST read the relevant guide in
  `node_modules/next/dist/docs/` before writing framework code (see `AGENTS.md`).
- A new `'use client'` file MUST be justified in the plan or the task (state, effect, event handler or browser API).
- Variants MUST use `cva` + `cn`; prefer explicit `variant`/`size` props over class overrides.
- Theme differences MUST use tokens and `html[data-theme=…]` selectors, not forked components.
- Tailwind scans every file in the repository for class names. Planning documents (`specs/`, `.specify/`) are excluded
  in `src/app/globals.css` (`@source not`), and documents MUST NOT quote placeholder class names (for example with an
  ellipsis) anywhere else, because a malformed candidate makes `next dev` warn or fail while `next build` still passes.
- Accent changes MUST update `globals.css` in all three places and, for cursor images,
  `scripts/generate-cursor-tokens.mjs` followed by `npm run cursors`.

## Development Workflow and Quality Gates

- Before UI work: read `DESIGN.md` and `UX_PRINCIPLES.md`, and inspect neighboring components.
- Every feature plan and task list MUST include tasks for documentation updates and for `STORY.md`.
- Before commit: `npm run format` and `npm run lint` MUST pass, and documentation and `STORY.md` MUST match the code.
- UI changes MUST be checked in light, dark, every registered theme (Default and Wireframe), 375 px width and reduced
  motion, and by keyboard alone (tab order, focus visible, `Esc` on overlays); new or changed components MUST also be
  checked for name, role and state.
- Every feature plan and task list that adds or changes a component MUST include a task to verify it against the style
  patterns of each theme (principle I) and to update `DESIGN.md` when it introduces or extends a pattern.
- Every feature plan and task list MUST include accessibility checks for the UI it adds.
- Changes that add client components or JS-driven visuals MUST show why a server component or CSS could not do it.
- Every feature plan and task list MUST state whether the feature changes content covered by agent view; if it does, the
  tasks MUST include the shared-module change, the builder and contract update, the unit test, and a check that
  `/agent-view` shows the change (principle VIII).
- After a feature is implemented, `next dev` and the production bundle MUST both work, and the result MUST be recorded
  in the feature's `quickstart.md`. The dev check: start `next dev` from a clean `.next`, request every route the
  feature adds or touches, and confirm HTTP 200, no warning or error in the terminal log (including CSS parse
  warnings), no console error in the browser, and that a hot-reload edit shows up and reverts cleanly. The production
  check: `npm run build` has no warnings, new routes are listed with the expected static or dynamic mode, `next start`
  serves them, and the browser console is clean. A passing `next build` alone is not enough: the two runtimes parse
  CSS and render differently.
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

**Version**: 1.7.0 | **Ratified**: 2026-10-17 | **Last Amended**: 2026-10-23
