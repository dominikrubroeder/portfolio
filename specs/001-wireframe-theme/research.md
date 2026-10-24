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

## Revision 2026-10-22 (spec "Manuel edits 2026-10-22")

### D25. Sketch border on the page frame in Wireframe

- **Decision**: `PageFrame` gets one more child, a `div` with `border-2 border-foreground`, shown only in Wireframe
  (`hidden in-data-[theme=wireframe]:block`, `lg`+ like the crop marks). The hand-drawn look is one CSS rule with
  uneven corner radii (for example `border-radius: 1.5rem 0.25rem 1.25rem 0.25rem / 0.25rem 1.25rem 0.25rem 1.5rem`; small values, because large px radii on a page-tall box stretch into one big arc), defined as a named
  rule in `globals.css` under the Wireframe block, not inline. It keeps `pointer-events-none` and `aria-hidden`, and sits
  inside the same positioned parent and inset as the crop marks, so the corner marks still read as the corners of the
  sketched frame.
- **Rationale**: Pure CSS (constitution VI), no filter or SVG turbulence (a displacement filter repaints on resize and
  costs on every scroll), no JS, nothing for Default. The radius setting is irrelevant here: the sketch shape is the
  point of the rule, so the rule does not read `--radius`.
- **Grayscale**: borders are not images; `foreground` is already black or white.
- **Alternatives**: SVG path with `feTurbulence` (rejected: paint cost, one more `svg` under the grayscale rule); a
  rough.js style path (rejected: new dependency); border on the existing crop-mark SVGs (rejected: they are four
  separate corners).

### D26. Remove the theme description line

- **Decision**: Remove the `description` display from the theme list: `ThemeSelect` options carry label only. The
  `description` field leaves `ThemeDefinition` and `ThemeOption` (and the registry, tests, `DESIGN.md` §9 wording and
  `STORY.md`). `SelectOption.description` stays in `ui/select` only if D28 reuses it; otherwise it is removed with its
  rendering (T065 in revision 2), so no dead prop remains. Supersedes D23 and D24 and FR-030.
- **Rationale**: The phrase was meant to tell the themes apart; the owner now wants a plain list. One source (registry)
  gets smaller; nothing else reads the field.
- **Alternatives**: keep the field and hide it in CSS (rejected: dead data).

### D27. Avatar border in Wireframe

- **Decision**: The avatar already has `rounded-full border-2`, but the Wireframe `--border` is a faint hairline, so the
  ring is nearly invisible. Add `in-data-[theme=wireframe]:border-foreground` to the avatar image in `avatar.tsx`, in
  both `img` instances and in `avatar-lightbox.tsx` (thumbnail and enlarged photo). The shape stays `rounded-full` (it
  does not follow the radius setting, like before).
- **Rationale**: Reads as a drawn outline around the photo, matches the toggle and select outlines that already use
  `foreground` in Wireframe. No new token.
- **Alternatives**: a new `--border-strong` token (rejected: one use); wrapping div with outline (rejected: extra DOM).

### D28. "Default" marker in setting selects

- **Interpretation (recorded, owner may correct)**: "Always provide a theme Default setting value to theme select
  options" means: in every theme-drawer select whose setting has a per-theme default in the registry, the option that
  equals the active theme's default is labeled "Default", also when another value is chosen. Today that is the radius
  select (`THEME_RADIUS_OPTIONS`). Color is a swatch row and animations a switch, so they are not selects. Appearance and
  font size have no per-theme default and show no marker.
- **Decision**: `SelectOption` gets `isDefault?: boolean`; the open list shows a muted "Default" tag after the label of
  that row, and the option's accessible name reads "Medium, Default". The trigger shows the label only, as before.
  `ThemeRadiusSetting` marks the option where `key === getThemeDefinition(theme).defaults.radius`, reading the active
  theme with `useThemeSetting('theme')`. If the container-width select returns, it uses the same prop.
- **Rationale**: One prop, driven by the registry, so a new theme or select inherits the marker with no branch.
- **Alternatives**: reuse `description` ("Default") for the row (rejected: removes the generic description meaning of
  D26 and mixes data and marker); show the default in the trigger (rejected: trigger stays short).

### D29. Remove the "Layout" group

- **Decision**: Remove the `ThemeSettingSection title="Layout"` block (and the import of
  `ThemeSpacingContainerWidthSetting`) from `theme-settings.tsx`. The setting itself stays: store, `data-theme-container-width`,
  persistence, registry defaults and the CSS override remain, so a saved value still applies. Supersedes FR-026 (Layout part) and D-numbers that name the Layout group. `theme-spacing-container-width-setting.tsx`
  was deleted on 2026-10-22 at the owner's request.
- **Rationale**: The request names the group, not the feature. Removing only the control is reversible and does not
  break saved settings or the init script (contract unchanged).
- **Consequence**: Visitors can no longer change the reading width; the default 40rem column is the only reachable
  state unless an old saved value exists. `DESIGN.md` §6.1 sentence "The visitor can widen it" and `UX_PRINCIPLES.md`
  theme-switching bullet are reworded to "stored setting, no control".
- **Alternatives**: delete the whole setting (rejected: larger than asked, touches persistence and contracts).

### D30. Toggle enabled indicator

- **Decision**: In Wireframe the enabled knob uses `bg-background` instead of `bg-primary`
  (`isEnabled && 'in-data-[theme=wireframe]:bg-background'`). Default theme keeps `bg-primary-foreground`, which equals
  `background` in light and is the readable choice on `bg-primary` in dark. The knob keeps its `foreground` border, so
  it stays visible on the `bg-background` track. State is still shown by position (translate) and `aria-checked`, not
  by color alone.
- **Rationale**: "pure `background`" is only a change in Wireframe, where the knob was the accent; Default already
  shows a light knob on an accent track.
- **Open check**: on the Wireframe track (`bg-background`) an enabled knob with the same fill relies on its border and
  position; verify non-text contrast (3 : 1) of the border in light and dark in the a11y task.
- **Alternatives**: `bg-background` in all themes (rejected: on `bg-primary` in dark a dark knob loses contrast).

### D31. Rounded drawer groups

- **Decision**: Fix the typo class in `ThemeSettingSection`: `rounded-2xl-xl` is not a utility, so the group box has
  square corners today. Use `rounded-xl` for the box (same family as the tools and technologies drawer lists, which use
  `rounded border`, and the drawer panel `rounded-2xl`); it follows the radius setting and is square in Wireframe with
  radius none.
- **Rationale**: Matches the rest of the drawer content; the bug is the class, not the design.
- **Alternatives**: copy `rounded` (4 px, rejected: too tight against a 1 rem padded box); hard-code a radius (rejected: breaks token rule).

### D32. Crop marks keep the accent in Wireframe (FR-034)

- **Decision**: The `CropMark` svg in `page-frame.tsx` gets `filter-none`. The Wireframe grayscale rule
  (`html[data-theme='wireframe'] :is(img, svg)`, D21) sits in `@layer base`, so the utility wins for this one element. The
  strokes already use `var(--color-primary)`, which is the picked accent (or `foreground` for the neutral accent), so no
  other change is needed.
- **Rationale**: One class, no new token, no JS. Supersedes the crop-mark part of D21; the accent in Wireframe now shows on
  text, buttons, links and the crop marks. Every other `img` and `svg` stays grayscale.
- **Alternatives**: a `.keep-color` marker rule in `globals.css` (rejected: one use); `:not(.crop-mark)` on the base rule
  (rejected: couples the rule to a component).

### D33. Blockquote bar as a pencil stroke in Wireframe

- **Decision**: The `Blockquote` bar (`before:` pseudo-element, `bg-primary`) stays the same element. In Wireframe it gets a mask: the token `--sketch-quote-bar` in the Wireframe block of `globals.css` is an inline SVG (viewBox `0 0 8 100`, `preserveAspectRatio="none"`) with two uneven round-capped strokes, a 2.4 wide main line and a thin 1 wide echo. The bar is 0.5 rem wide with no radius and `mask-size: 100% 100%`, so only the height stretches and the stroke width stays constant. Default is untouched.
- **Rationale**: Matches the pencil frame (D25) with CSS only: no JS, no extra element, the accent color is kept because the mask only cuts the shape out of the `bg-primary` fill (an `img`/`svg` would fall under the grayscale rule, D21).
- **Alternatives**: an inline `svg` child (rejected: grayscale rule and a second DOM node in every blockquote); `border-left` with uneven radii (rejected: reads as a rounded bar, not a stroke); `clip-path: polygon` (rejected: no round caps, no second stroke).

### D34. Contained buttons get a pencil outline in Wireframe

- **Decision**: In Wireframe every `contained-*` `Button` gets (1) an uneven corner radius for the fill (`--sketch-button-radius`, important, so the size classes `rounded-2xl hover:rounded-xl` and the radius setting do not override it) and (2) a `before:` outline: `border-2 border-foreground`, offset `-inset-0.5`, rotated `-1deg`, with a second uneven radius (`--sketch-button-outline-radius`). The fill and the outline disagree slightly on purpose, so the outline reads as a second pencil pass. Ghost, text and link variants have no box and are unchanged; Default is untouched.
- **Rationale**: Same language as the sketch frame (D25) and quote bar (D33): CSS only, tokens in the Wireframe block, no new element. The outline is a pseudo-element with a border, so it is not an `img`/`svg` (grayscale rule, D21) and never blocks clicks (`pointer-events-none`).
- **Alternatives**: SVG mask outline as for the quote bar (rejected: needs a stretchable 9-slice for any button size); one `border` on the button (rejected: no uneven second pass, and the layout grows by the border); changing the radius token for all buttons (rejected: radius is a visitor setting, and ghost/text buttons need no box).

### D35. Toggle and color swatches as pencil shapes in Wireframe

- **Decision**: Two percentage-based radius tokens in the Wireframe block of `globals.css`: `--sketch-blob-radius` (a slightly uneven ellipse for fills) and `--sketch-blob-outline-radius` (a second, different one for the outline). The `Toggle` track and knob and every color swatch use the first for the shape. The track and the swatches get a `before:` outline (`border-2 border-foreground`, `-inset-0.5`, `-rotate-2`, second radius, `pointer-events-none`), the same recipe as the `Button` (D34). The track's old Wireframe `border` is removed (the outline replaces it); the knob keeps its thin `border`. The enabled knob still shows the accent (D30), a swatch still shows the check mark and its own color.
- **Rationale**: Percent radii fit any size, so the pill track (56 x 32 px), the knob (24 px) and the swatches (26 and 32 px) share two tokens. CSS only, nothing for Default. The pseudo-element is not an `img`/`svg`, so the grayscale rule (D21) does not touch the swatch colors.
- **Alternatives**: one token per shape (rejected: more tokens for no gain); SVG masks as for the quote bar (rejected: shapes are boxes, radii are enough).

### D35 (revised). Toggle uses capsule tokens, swatches keep the blobs

- **Decision**: The percentage blob radii made the 56 x 32 px track read as an ellipse, not a switch. The `Toggle` now has its own tokens in the Wireframe block of `globals.css`: `--sketch-pill-radius` (track), `--sketch-pill-outline-radius` (pencil outline) and `--sketch-knob-radius` (knob). Each is a set of eight rem values far above half the box height (2.1 rem for a 2 rem track), so the browser clamps them down together and the capsule keeps a hair of unevenness: track and outline differ, the knob is a near-circle. Color swatches keep `--sketch-blob-*`.
- **Rationale**: A capsule track with a round knob is what a switch looks like; the knob radius follows the track so the knob stays inside it at both positions.
- **Alternatives**: smaller rem radii (rejected: they stop short of a capsule and leave flat ends); `rounded-full` plus rotation only (rejected: no uneven second pass).

### D35 (revised again). Knob is a wobbly egg, not a clamped circle

- **Decision**: `--sketch-knob-radius` is `60% 40% 56% 44% / 44% 58% 42% 56%`, and the Wireframe knob gets `border-2` and `-rotate-12`. The oversized rem radii used for the track (previous revision) clamp a 1.5 rem box to a near-perfect circle, so the knob looked round and digital.
- **Rationale**: Percentages that sum to 100 % per side never clamp, so the unevenness is kept at any size. The thicker border matches the 2 px pencil outlines of the track, buttons and swatches; the rotation is the same trick as the outlines. The rotation is the separate `rotate` property, so it does not interfere with the knob's `translate` slide.
- **Alternatives**: a stronger rem wobble (rejected: it clamps again whenever the font-size setting changes the box); an SVG knob (rejected: needs a fill color per state).

### D36. One pencil pattern for the rest of the controls

- **Decision**: Reuse the recipes of D25, D33, D34 and D35 instead of new ones. (1) `DotsDivider` dots: blob radius, `border-[1.5px] border-foreground`, `-rotate-12`. (2) Typewriter frame: the existing `.sketch-frame` radius, `border-2 border-foreground`, blob corner squares. (3) Ghost buttons: the hover pill (`after:`) takes `--sketch-button-outline-radius` and `border-2 border-foreground`, so a hover shows a pencil box. (4) `Tabs` trigger: `--sketch-button-radius`, and the active trigger gets the `before:` pencil outline of the button; the underline `after:` of the `line` variant is untouched. (5) Drawer panel: `--sketch-frame-radius` (new token, same values as `.sketch-frame`) and `border-2 border-foreground`, important so `rounded-theme-2xl` does not win. (6) Theme setting groups: `--sketch-button-radius` and `border-[1.5px] border-foreground`. (7) Toggle knob: its own border is gone; a `before:` outline in `--sketch-knob-radius`, `-inset-px`, `-rotate-6` draws it in both states, like the swatches.
- **Rationale**: Every control now reads as drawn with the same pencil; no new technique, tokens only where a shape was missing. This revises the earlier Wireframe rule "groupings read as tone, not lines" (DESIGN.md §9): the owner asked for sketched borders on groups and the drawer, so those edges are now `foreground` strokes (2 px drawer, 1.5 px groups).
- **Alternatives**: a shared `.sketch-outline` class (rejected: several targets already use `before:` or `after:` for other jobs and differ in radius and width); SVG strokes (rejected: sizes vary).

### D37. Philosophy diagram circles as pencil circles in Wireframe

- **Decision**: The shared `Petal` wrapper in `philosophy-core.tsx` (used by both tabs) gets `relative`, the Wireframe `--sketch-blob-radius` (important, over `rounded-full`) and a `before:` outline (`border-2 border-foreground`, `-inset-px`, `-rotate-2`, `--sketch-blob-outline-radius`). The two "UI" core circles (core tab and holistic tab) get the same shape and a `-inset-0.5` outline. `relative` comes before the caller's `className`, so the holistic petals keep their `absolute`. The motion transforms (`x`, `y`, `scale`, `opacity`) and the core pulse act on the whole element, so the outline moves and scales with the circle; the animations-off rules are untouched.
- **Rationale**: Same recipe as D34/D35, put once in the shared component instead of per circle. The overlapping outlines turn the tone-only Venn diagram into a drawn one.
- **Alternatives**: SVG circles (rejected: the petals animate as DOM boxes and carry text); outlines only on the core tab (rejected: both tabs are one diagram).

### D37 (revised). Petal labels sit on a paper chip in Wireframe

- **Decision**: `Petal` wraps its children in a `span`. In Wireframe the span is `bg-background` with `--sketch-button-radius` and `px-1.5`; in Default it has no classes and renders as before.
- **Rationale**: The overlapping pencil outlines and gray tints cut through the labels. A chip in the page background keeps the text readable with one wrapper and no JS.
- **Limit**: Each petal moves with a transform, so it is its own stacking context: the chip covers the lines of its own petal and of petals drawn before it, but a petal drawn later can still draw an outline across it (visible on "Design" and "Code" in the holistic tab). Fixing that needs the labels in a separate layer above all petals, which would split text from its circle; not done.

### D38. `Hr` as a pencil line in Wireframe

- **Decision**: In Wireframe the `Hr` keeps its element and its border, but the border becomes the drawing surface: `h-0`, `border-t-[0.5rem]`, `border-color: currentColor`, and a mask (`--sketch-hr-line`, SVG `0 0 200 8`, `preserveAspectRatio="none"`: an uneven 2.2 wide stroke and a thin echo) cuts the stroke out of it. The mask stretches horizontally only, so the line thickness is constant at any width. The color follows the text color of the parent instead of the faint Wireframe `--border`, so a caller sets it with `text-*`; the `Hr` on the accent band on `/projects` gets `text-primary-foreground`. Default is untouched.
- **Rationale**: Same mask technique as the quote bar (D33); no extra element, `hr` semantics kept. `border-current` replaces a caller's `border-*` color in Wireframe (variant utilities sort after plain ones), which is why the band needed the text color: with the neutral accent its band is black and the line would vanish.
- **Alternatives**: `border-foreground` (rejected: invisible on the black band); an inline SVG child (rejected: a non-void child in an `hr`, and the grayscale rule).
