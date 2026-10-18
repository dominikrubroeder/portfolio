# Research: Wireframe theme and theme-ready app

Findings from reading the current code, followed by decisions. No open NEEDS CLARIFICATION.

## Current state (gaps found)

1. `Theme` type, `THEME_OPTIONS` and wireframe tokens exist, but `handleTheme` hard-codes per-theme branches (`default`,
   `wireframe`, `notes`) instead of reading defaults from one place.
2. Animation setting is never read by `Animate`. `shouldAnimate` is `theme === 'default' && !isEnabled`, which is
   inverted in meaning and unused by components. The toggle changes state only.
3. Persistence is partial: theme, appearance, color, font size, winter, persona are stored; animation is not. `initTheme`
   ignores a stored `foreground` color, and the pre-paint script defaults color to `blue` even for wireframe (flash).
4. Border section in `ThemeSettings` renders three `ThemeAnimationEnabledToggle` copies as placeholders. The container
   width control calls `setTheme` with a width value (wrong handler).
5. `ThemeSidebarTrigger` exists but the header renders only appearance switch and color setting. No trigger opens the panel.
6. Wireframe tokens set `--muted`, `--muted-foreground` and `--border` to pure foreground, so body text equals
   headings and every border is full contrast. This conflicts with "non-border" and with the two-step text hierarchy.
7. Rounded corners: `rounded-theme-*` utilities apply radius only when `data-theme=default`; other utilities
   (`rounded-2xl`, `--radius-*`) scale from `--radius`, so one variable can drive all corners.
8. Ambient effects (`animate-in-to-*`, dot bounce, core pulse) are already limited to `data-theme='default'` by CSS, but
   there is no user override, and `Animate` (motion) runs in every theme.

## Decisions

### D1. One theme registry

- **Decision**: `theme-definitions.ts` holds `{ id, label, defaults: { color, animation, radius, containerWidth } }` per
  theme. Option list, switching, init script and tests read it.
- **Rationale**: FR-018 (new theme = one entry). Removes branches in the context.
- **Alternatives**: keep `if` branches (rejected: per-theme code); CSS-only themes with no defaults (rejected: defaults
  like animation off need JS state).

### D2. Live updates through `<html>` attributes and CSS variables

- **Decision**: Every setting maps to a `data-theme-*` attribute on `<html>`; CSS selectors and variables react. React state
  only drives the controls and the `Animate` switch.
- **Setters write the attributes directly** (`document.documentElement.dataset…`) in the same call that updates state and storage, not in a later effect, so the DOM changes in the same frame. React state exists only for the controls.
- **Context shape**: a stable actions object (setters never change) plus per-setting subscriptions through a small external store read with `useSyncExternalStore` (`useThemeSetting(name)`). A change re-renders only components that read that setting; a radius or width change re-renders only its control. `useTheme()` stays as a thin combined hook for existing callers (constitution VI).
- **Rationale**: Native CSS first (UX_PRINCIPLES), instant, no re-render of the page tree, same mechanism as accent today.
- **Alternatives**: per-component `useTheme` branching (rejected: constitution/DESIGN forbid forking components).

### D3. Radius

- **Decision**: `data-theme-radius` = `none | sm | md | lg` maps to `--radius` (0, 4px, 6px, 10px). Wireframe default `none`,
  Default theme default `md` (current 6px). `rounded-theme-*` utilities lose the `data-theme=default` condition and use
  the token scale.
- **Rationale**: Existing `--radius-*` and Tailwind radius scale derive from `--radius`; one variable changes everything.
- **Alternatives**: separate class per component (rejected).

### D4. Container width

- **Decision**: `data-theme-container-width` = `default | wide | full` overrides `--spacing-container-readable` (40rem, 64rem,
  90rem). The existing `Container` already reads this token.
- **Rationale**: Matches the three existing options; no component change.
- **Alternatives**: arbitrary slider (rejected: scope).

### D5. Animation switch

- **Decision**: State `animationsEnabled` (per-theme default: Default true, Wireframe false) is persisted and mirrored to
  `data-theme-animations="on|off"`. `ui/animate` exports an `AnimationsProvider` (boolean); `ThemeProvider` renders it.
  `Animate` marks its element and, when off, renders the final state with no transition. A CSS rule under
  `[data-theme-animations='off']` forces `opacity: 1; transform: none` on reveal elements and disables keyframe utilities,
  so there is no hidden-content flash before hydration. Typewriter, intro overlay and dot bounce check the same flag
  (CSS where possible). Reduced motion still wins.
- **CSS/JS boundary**: CSS is the source of truth (the `[data-theme-animations='off']` rules decide what the visitor sees, before and after hydration). The provider is the JS fallback: it only stops `motion` from doing work. `AnimationsProvider` is the only new client code in `ui`. Server components `DotsDivider` and `Container` use CSS only. JS is allowed only where CSS cannot work: `Typewriter`, `TypewriterOverlay`, `IntroProvider` and `Snowfall` (already client).
- **Rationale**: Honors FR-010/FR-011/FR-020 with CSS-first behavior and no `ui → feature` import.
- **Alternatives**: read `document.documentElement.dataset` inside `Animate` (rejected: not reactive, SSR mismatch);
  remove `motion` (rejected: out of scope).

### D6. Wireframe tokens

- **Decision**: Black and white surfaces with tone steps, not borders: `--background` white/black, `--foreground`
  black/white, `--muted` light/dark gray surface, `--muted-foreground` mid gray (AA verified), `--border` a faint gray
  hairline kept only where a control needs an edge (inputs, focus). Decorative borders removed from wireframe via
  selectors, not component forks. Default accent `foreground`; user may pick blue, violett or orange, or return to neutral.
- **Rationale**: "Non-border", black and white, text hierarchy preserved, contrast AA.
- **Alternatives**: keep full-contrast borders (rejected: contradicts brief).

### D7. Switching resets tweaks (clarification 2026-10-17)

- **Decision**: `setTheme` applies the target theme's defaults for accent, radius, container width and animation. Appearance
  and font size stay.

### D8. Header trigger

- **Decision**: Add `ThemeSidebarTrigger` (icon-only, label "Theme settings", tooltip) to the header next to existing quick
  controls; keep it reachable at 375 px.
- **Rationale**: FR-002. Reuses the existing sidebar pattern.

### D9. Persistence keys and validation

- **Decision**: New keys `dr-theme-animation`, `dr-theme-radius`, `dr-theme-container-width`. Invalid values fall back to
  the current theme's defaults; unknown theme falls back to `default`. Init script and context share one validator.

### D10. Testing

- **Decision**: Vitest unit tests for the registry, validators and defaults-on-switch logic. Stories for new `ui`
  pieces. Manual matrix in quickstart (theme × appearance × accent × font size, 375 px).
- **Rationale**: The repo has Vitest but no tests yet; pure logic is cheap to cover; visual checks stay manual.

### D11. Settings panel loads on demand (FR-021, SC-011)

- **Decision**: The header keeps only `ThemeSidebarTrigger` as a client leaf (the header stays a server component). `ThemeSidebar`
  and its controls render only while the sidebar is open, or are loaded on first open through a client wrapper (`theme-sidebar-lazy.tsx`) that holds the `next/dynamic` call, because `ssr: false` is not allowed in Server Components (Next docs, `lazy-loading.md`), so `layout.tsx` never calls `dynamic` itself; the saved-settings
  restore stays in the small init script and provider.
- **Rationale**: Most visitors never open the panel; its client `Select` controls should not hydrate on every page.
- **Alternatives**: always mount (rejected: hydration cost on every page).

### D12. Default theme must not change (SC-012)

- **Decision**: Capture baseline screenshots of every page in Default (light and dark) before any style change; compare after
  the radius and `rounded-theme-*` change. Default radius `md` (6px) reproduces today's value exactly.

### D13. Storage can fail (P9)

- **Decision**: Every `localStorage` read and write is wrapped in try/catch, in the init script and in the provider. On failure the
  setting still applies to `<html>` for the session and the registry defaults return on the next load.
- **Rationale**: Private windows and blocked site data make `localStorage` throw; the theme switch must still work.

### D14. Import hygiene for server code (N5 prerequisite)

- **Decision**: `theme-definitions.ts` and `theme-helper.ts` stay free of `'use client'` and import from `./theme-definitions` and `./theme-constants`, not the `@/components/feature/theme` barrel, because `layout.tsx` (server) reads the init script string from them.

## Revision 2026-10-18 (spec "Manual edits")

D8 and D11 stay true in intent (header trigger, on-demand load) but their sidebar wording is superseded by D15–D16.

### D15. Theme drawer replaces the sidebar (FR-022)

- **Decision**: Rebuild the settings panel on `ui/drawer` (Base UI Drawer): bottom sheet below `xl`, side panel from `xl`,
  swipe, `Esc`, scrim, `DrawerClose` ("Done"). Delete `ui/sidebar` and `SidebarProvider`. The old `theme-drawer.tsx` holds
  unfinished placeholder sections (Border color/width/style, Modes, Spacing) and is rewritten, not reused.
- **Rationale**: One panel pattern in the site (constitution II). Base UI supplies focus trap, focus return, inert
  background and `Esc`, which the custom sidebar lacked (constitution IV).
- **Alternatives**: keep the sidebar and restyle it (rejected: second pattern, a11y gaps stay); build the drawer by hand
  (rejected: Base UI exists).
- **Decision (clarified 2026-10-18)**: keep the standard drawer scrim (dimmed below `xl`, transparent from `xl`). No
  lighter scrim, no non-modal mode.
- **Risk**: on small screens the modal scrim covers part of the page, so the live result is less visible. `xl` keeps a
  transparent scrim. Accepted: this matches the other drawers.

### D16. On-demand load without a provider (FR-021, SC-011)

- **Decision**: `theme-drawer-trigger.tsx` is one small client component: the header button plus local state. On first
  click it mounts the drawer (loaded with `next/dynamic`, `ssr: false`) and opens it; later clicks only toggle. No context,
  so `layout.tsx` loses `SidebarProvider` and stays a server component. Mount closed, then open on the next frame, so the
  first open slides in. Set `finalFocus` to the trigger so focus returns to it.
- **Rationale**: Pages that never open settings load only the trigger (SC-011). Drawer root and settings stay out of the
  initial bundle.
- **Alternatives**: `DrawerTrigger` in the header (rejected: ships drawer code to every page); shared sidebar context
  (rejected: extra provider for one panel).

### D17. Header: trigger, then three swatches (FR-023, FR-024)

- **Decision**: Header order: theme trigger, then blue, violett, orange swatches (from `sm`, as today). The appearance
  switch leaves the header. `ThemeColorSetting` takes a prop to include the neutral swatch; the header omits it, the drawer
  includes it. In Wireframe with neutral accent no header swatch is selected, which is correct (neutral is active).
- **Rationale**: The header stays quiet; full control lives in one place. Neutral is a theme default, not a quick pick.
- **Check**: at 375 px the swatches stay hidden below `sm`; verify trigger and name still fit.

### D18. `ui/select` on Base UI (FR-025)

- **Decision**: Rebuild `ui/select` on `@base-ui/react/select` (Trigger, Value, Popup, Item, ItemIndicator). Keep the
  look: same `Button` trigger with chevron, same popup surface (`bg-background`, 1 px `border`, radius token) and item rows
  with the check mark. Options and the controlled `value` use the option `key` (stable id), not the label; the three theme
  callers and the appearance select adapt. `use-select.tsx` is deleted. Optional `icon` on an option lets the appearance
  select show sun, moon and sparkles without a second dropdown implementation.
- **Rationale**: Listbox roles, arrow keys, typeahead, `Esc` and focus return for free. The popup must sit above the
  drawer (`z-max` portal) and animate only when animations are on.
- **Alternatives**: keep the hand-rolled dropdown (rejected by the spec); native `select` (rejected: look cannot be kept).
- **Inside the drawer**: `Esc` closes the open list first, then the drawer; the popup is portaled above the drawer and its scroll does not start a drawer swipe (verify; if it does, stop swipe propagation on the popup).
- **Add**: a `ui/select` story.

### D19. Groups (FR-026)

- **Decision**: Drawer sections: Base (theme, appearance, color), Typography (font size), Animation (enable animations),
  Border (radius), Layout (container width). Controls are unchanged; only the grouping moves.

### D20. Accessibility follow-ups (constitution v1.3.0)

- **Closed by this revision**: focus trap, focus return, `Esc`, inert background, closed-panel tab stops, select semantics.
- **Planned here (spec FR-027, optional)**: announce setting changes to screen readers through one polite live region in the drawer ("Radius:
  large"), and keep every control a 44 px target at 375 px.
- **Still open, logged in `DESIGN.md` known gaps**: orange accent text 3.85 : 1 (UI and large text only).

## Revision 2026-10-18 – 2 (spec "Manual edits 2", FR-028–FR-030)

### D21. Monochrome images and graphics in Wireframe (FR-028)

- **Decision**: One CSS rule under `html[data-theme='wireframe']`: `filter: grayscale(1)` on `img` and on every `svg`. This
  covers photos, project previews, raster and SVG logos, interface icons (Lucide, Heroicons, bespoke `ui/icon` SVGs) and
  the decorative crop marks (`SvgShapes` in `page-frame`). Owner clarification 2026-10-18: everything graphic is black and
  white; the accent shows only on text, buttons and links. Cursor images are CSS images and stay as they are (known gap
  in `DESIGN.md` §16). The earlier `logo` marker class in `logo-config.ts` is **not needed** and is dropped (supersedes the
  first draft of this decision).
- **Rationale**: Pure CSS, applies in the same frame as the theme attribute, no re-render, no per-component fork, no
  per-file audit (constitution VI). A filter is non-destructive: Default shows the colors again at once.
- **Meaning of "black and white"**: grayscale (owner-confirmed 2026-10-18), so photos stay readable. A two-tone threshold
  would destroy the avatar and project previews.
- **Utilities beat base rules** (Tailwind layers): `grayscale-0` on the avatar `img` in `avatar.tsx` and
  `avatar-lightbox.tsx` would override the rule; remove it or scope it to Default (analysis F1).
- **White on accent**: an icon that is white inside a `bg-primary` button stays white under grayscale; only hue is
  removed. Contrast of icon against its button is re-checked in the a11y gate.
- **Alternatives**: grayscale versions of every asset (rejected: 100+ files, two sources of truth); `fill="currentColor"` on
  every logo (rejected: edits brand artwork, still leaves raster images); a JS class on each image (rejected: JS for a CSS
  job); a `logo` marker class (rejected: icons and crop marks are now in scope, so `svg` alone is simpler).
- **Checks**: logos stay recognizable (edge case); lightbox photo is monochrome too; no layout change; paint cost of the
  filter on all SVGs (many small icons, the large philosophy diagram) is measured with the existing 4x CPU trace.

### D22. Patrick Hand as the Wireframe text font (FR-029)

- **Decision**: Font roles become runtime tokens. `font-heading` and `font-body` currently resolve to Outfit inside
  `@theme inline` (the value is inlined, so a later override would not apply). Change them to read `--font-role-heading` and
  `--font-role-body`, defined on `:root` as Outfit and overridden by `html[data-theme='wireframe']` to `--font-sketch`
  (Patrick Hand). `font-code` keeps JetBrains Mono. No new font file: Patrick Hand is already loaded and preloaded by
  `next/font` in `layout.tsx` for the sketch accents.
- **Weights**: Patrick Hand ships one weight (400). Semibold and bold text uses the browser's synthesized bold, which keeps
  emphasis and the two-step hierarchy; if it reads badly in review, set the semibold token to 400 for Wireframe and
  let size carry hierarchy. Decide in the review task, not in code first.
- **Size**: Patrick Hand has a smaller x-height than Outfit. Compare line counts and width at 100 % on `/` and `/projects`;
  if body text reads small, scale with one wireframe root-size token (not per component). The 90 / 110 % font size
  setting keeps working because everything stays in `rem`.
- **Rationale**: Switch is one attribute, CSS only, no flash (the font is preloaded; fallback metrics are adjusted by
  `next/font`), no new network request for any visitor.
- **Layout shift**: the font swap reflows text on a theme switch; the switch is a user input, so it is excluded from the
  layout-shift metric (SC-009 stays 0 as measured). First paint with Wireframe saved uses the preloaded font.
- **Alternatives**: a second `next/font` instance with a Wireframe-only class (rejected: duplicate of the loaded font); a
  system handwriting stack (rejected: differs per OS).
- **Accessibility**: a handwriting face is less legible than Outfit at small sizes. Mitigations: contrast unchanged, line
  height kept, text scales 90–110 %, and the visitor can switch back to Default in two interactions. Check at 375 px.

### D23. "Sketch-based UI" is the Wireframe character (FR-030)

- **Decision**: The registry gets `description` per theme. Wireframe: "Sketch-based UI". Default: "Intense accent UI" (owner-given
  2026-10-18). Docs (`DESIGN.md` §9 table, `UX_PRINCIPLES.md` theme switching, `STORY.md`) use the same
  phrase for Wireframe. The theme id and label stay `wireframe` / "Wireframe".
- **Rationale**: One place for the phrase (registry); the selector reads it; a new theme brings its own description (FR-018).

### D24. Where the description shows

- **Decision**: `SelectOption` gains an optional `description`. The option rows in the theme select show it under the label
  (muted, `text-sm`); the trigger keeps the label only, so the header and drawer layout do not change. Other selects pass no
  description. The row stays one `option` with an accessible name of "Wireframe, Sketch-based UI" through the item text.
- **Alternatives**: static helper text under the select (rejected: shows only the current theme, hides the other choice);
  tooltip (rejected: not reachable on touch).
