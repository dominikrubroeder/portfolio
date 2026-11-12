# DESIGN.md

Design language of the portfolio of Dominik Rubröder, UX Engineer. This file is the source of truth for **how the app
looks**. For **how it behaves**, see [UX_PRINCIPLES.md](./UX_PRINCIPLES.md).

> Token values live in `src/app/globals.css`. If this document and the CSS disagree, the CSS wins — then fix this
> document.

## 1. Vision

> "I connect the worlds of design and code."

The portfolio is itself the proof of the claim: a UI built like a product, with a design system, themes, tokens and
documented decisions. It should feel:

- Confident — big type, few elements, clear hierarchy
- Intentional — every element has a reason; nothing decorative for its own sake
- Fast — responsive, no layout shift, motion that never blocks reading
- Personal — handwritten accents (`Patrick Hand`), playful intro phrases, a seasonal winter scene
- Systematic — composed from `ui` building blocks and `feature` modules

Root style values, in short: **modern, vibrant, themeable**. Modern: large type, few elements, rounded controls, depth
from tone and borders instead of shadows. Vibrant: one strong accent color against a calm base. Themeable: every theme,
appearance, accent, radius and font size is a token change, never a component fork. They are the root values the `ui`
and `feature` READMEs repeat.

Hierarchy of what a visitor must grasp, in order: **identity → expertise → selected works → technical depth → contact**.

## 2. Principles

1. **Bold minimalism.** Large type, generous whitespace, one strong accent color. No gradients, no glass effects, no
   shadows for decoration.
2. **Token-first.** Colors, radii, fonts, widths and motion come from tokens. Components reference semantic tokens
   (`bg-primary`, `text-muted-foreground`), never raw values.
3. **Theme-ready.** Every component works in every theme, appearance (light/dark/system) and accent color. Themes change
   token values and a few structural flags — never component logic.
4. **Composition over configuration.** Build pages from small reusable parts (`ui` + `feature` split, tokens first).
5. **Content is the interface.** Statements, project work and reasoning are the hero. Chrome stays quiet.
6. **Accessible by default.** Contrast, focus, keyboard, reduced motion and semantic HTML are requirements, not polish.

## 3. Stack

Next.js 16 (App Router) · React 19 · TypeScript · Tailwind CSS 4 (CSS-first config in `globals.css`) · shadcn/ui
patterns on top of Base UI (`@base-ui/react`) and Radix · `motion` for animation · `class-variance-authority` +
`cn()` for variants · Lucide and Heroicons for icons · Vercel Analytics + Speed Insights.

> Next.js in this repo has breaking changes against common knowledge. Read `node_modules/next/dist/docs/` before
> writing framework code (see `AGENTS.md`).

## 4. Color

Colors are OKLCH tokens defined as CSS variables in `:root`, remapped into Tailwind through `@theme inline`.

### 4.1 Semantic tokens

| Token                             | Role                                                  |
| --------------------------------- | ----------------------------------------------------- |
| `background` / `foreground`       | Page surface and primary text                         |
| `primary` / `primary-foreground`  | Accent: CTAs, links on hover, active states, dividers |
| `primary-hover`, `primary-border` | Interaction states of the accent                      |
| `muted` / `muted-foreground`      | Secondary surfaces and body/supporting text           |
| `muted-hover`, `hover`            | Hover surfaces                                        |
| `border`                          | All borders and `hr` (set globally on `*`)            |
| `popover` / `popover-foreground`  | Drawers, dialogs, floating surfaces                   |
| `signal-yellow`                   | Rare highlight (event/attention moments)              |

Body text is `text-foreground` (set once on `<body>`); `text-muted-foreground` marks secondary text: `small`, captions,
roles, descriptions and the `muted` variants of controls. The hierarchy is deliberate — do not flatten it by
coloring everything muted.

### 4.2 Accent colors

The user can pick the accent color at runtime (`data-theme-color`): **blue** (Default theme start), **violett**,
**orange** and the neutral **foreground** (Wireframe start: black on light, white on dark). A saved legacy `primary`
reads as `violett`. Each color accent defines `-foreground`, `-hover` and `-border` siblings; the neutral accent is
derived from `foreground` and `background`. Adding an accent means adding the full set and mapping it in the three
places in `globals.css` (`:root`, `@media (prefers-color-scheme: dark)`, `@theme inline`). Orange
(`oklch(0.58 0.237 31.3)`) with white text
measures 4.8 : 1; every accent passes AA with its foreground text.

### 4.3 Appearance

`light`, `dark` and `system` (the default, so first-time visitors get their OS preference). Dark mode is applied by the
`.theme-appearance-dark` class / `data-theme-appearance`
attribute on `<html>` (custom Tailwind `dark:` variant), not by the media query alone. Dark mode only overrides neutral
tokens (`background`, `foreground`, `muted*`, `border`); accents are shared. Wireframe has its own neutral set for
both appearances (pure white / pure black, gray tone steps).

### 4.4 60 / 30 / 10

- **60 %** `background` — calm foundation.
- **30 %** `muted`, `border` — structure, grouping, hover surfaces.
- **10 %** `primary` — energy. One full-bleed `bg-primary` band per page is the ceiling (see the home statement
  "We compose, direct and oversee", and the hero project on `/selected-works`).

## 5. Typography

| Role     | Font           | Token / utility |
| -------- | -------------- | --------------- |
| Headline | Outfit         | `font-heading`  |
| Body     | Outfit         | `font-body`     |
| Sketch   | Patrick Hand   | `font-sketch`   |
| Code     | JetBrains Mono | `font-code`     |

- Outfit is loaded through `next/font/google` (`display: swap`, CSS variable `--font-outfit`). JetBrains Mono loads the
  same way (`--font-jetbrains-mono`, `preload: false`): the browser fetches it only when a `Code` renders.
- `font-heading` and `font-body` read the runtime role tokens `--font-role-heading` and `--font-role-body`. Default maps
  both to Outfit; Wireframe maps both to Patrick Hand (`--font-sketch`, weight 400 only, so bold is synthesized). Code
  keeps JetBrains Mono. Patrick Hand is already loaded for the sketch accents, so the switch adds no font request.
- Base text size is `1.125rem` (`--text-base`). The user can scale the whole UI via root font size: small 90 %,
  medium 100 %, large 110 %. **Always size with `rem`/Tailwind classes** so this scaling works.
- Element defaults live in `globals.css` (`@layer base`). Use bare `h1`–`h6`, `p`, `ul`, `ol`, `small`, `b` when
  possible; use the typography components (`H1`–`H6`, `Ul`, `Ol`) when you need props.

| Level           | Size (mobile → desktop)                                                                                                        | Weight   |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------ | -------- |
| Statement       | `text-statement`: fluid `clamp(2rem, (100vw − 5rem) / 7.6, 4.5rem)`, fixed `4.5rem` from `sm`; `leading-[1.1]`, `text-balance` | semibold |
| `h1`            | fluid `clamp(2rem, (100vw − 5rem) / 7.6, 3.75rem)`                                                                             | semibold |
| `h2`            | `text-3xl` → `xs:text-4xl`                                                                                                     | semibold |
| `h3` / `.title` | `text-2xl`                                                                                                                     | semibold |
| Body            | `text-base` (1.125 rem)                                                                                                        | normal   |
| `small`         | `text-sm`, muted                                                                                                               | normal   |

Rules: sentence case everywhere; `text-balance` on large statements; headings are `font-heading`; no more than two
weights on a screen (normal, semibold/bold).

## 6. Layout and spacing

### 6.1 Containers

Use `<Container>` (`ui/container`). Never hand-roll `max-w-*` on page sections.

| `size`               | Width              | Use                                        |
| -------------------- | ------------------ | ------------------------------------------ |
| `container-readable` | `40rem` (default)  | Text, lists, most sections                 |
| `container`          | `90rem` (+ `px-4`) | Wide grids and galleries                   |
| `full-width`         | 100 %              | Full-bleed bands (e.g. primary hero)       |
| (panorama token)     | `82rem`            | Large preview imagery on `/selected-works` |

The reading column is intentionally narrow (40rem by default). A saved setting can widen it (the theme drawer has no
control for it since 2026-10-22)
(`data-theme-container-width`: default 40rem, wide 64rem, full 90rem; it overrides `--spacing-container-readable`). It
is the signature of the layout: one column, centered,
scannable.

### 6.2 Rhythm

- `main` stacks sections with `space-y-8` (mobile) and `space-y-12` (`sm`+).
- Sections are separated by `<DotsDivider />` (three `primary` dots) or an `hr` (`my-8`).
- Headings: `h3`/`h4` get `mt-8 mb-3`; paragraphs `mb-3`; lists `my-4 space-y-2`.
- Spacing follows the Tailwind 4 px scale (1 unit = 0.25rem). Prefer even steps (2, 3, 4, 6, 8, 12).
- Breakpoints: Tailwind defaults plus `xs: 375px`.
- Page order puts the highest-impact content first and goes deeper toward the bottom.

### 6.3 Z-index

`z-20` content containers · `z-50` header and sticky bars · `z-100` (`z-index-100`) typewriter overlay and selected
works hero band · `z-max` (1000)
drawer panels and popups. Do not invent other layers.

## 7. Shape

- Base radius token: `--radius` (6px at the default `md` setting); derived `sm`, `md` (clamped at 0), `lg`, `xl` (×1.4),
  `2xl` (×1.8), `3xl` (×2.2), `4xl` (×2.6), `5xl` (×4.4).
- The visitor sets the radius (`data-theme-radius`: none 0, sm 4px, md 6px, lg 10px). One variable drives every
  `rounded-*`
  utility, so the whole UI follows live. Default starts at `md`, Wireframe at `none`. In Wireframe the setting scales
  the uneven sketch corners (`--sketch-scale`: none 1, small 1.4, medium 1.8, large 2.4) instead of a plain radius, so
  the hand-drawn shape stays at every step.
- Interactive controls (buttons, tabs) use `rounded-2xl` and tighten to `rounded-xl` on hover.
- Panels (drawers) use `rounded-5xl` (the largest radius token, 4.4 × `--radius`); badges are `rounded-full` (in
  Wireframe they follow the radius token, `rounded-md`).
- `rounded-theme-*` utilities are plain aliases of `rounded-*` and follow the radius setting in every theme.
- Borders are 1 px, `border` token, solid. Depth comes from borders and surface tone, not shadows.

## 8. Motion

Library: `motion`. Wrapper: `<Animate>` (`ui/animate`).

Motion principles and behavior rules (including "Native CSS first") live in
[UX_PRINCIPLES.md](./UX_PRINCIPLES.md#motion). This section lists the visual specs only.

- Reveal on scroll: `direction` `up | left | right | down | scaleUp`, `once: true`, viewport margin `-100px`. Use
  `direction="up"` for vertical page content, stagger via `delay` (0.16, 0.32, 0.44).
- Reveal motion is a glide, not a spring: 1.8 s, expo-out `cubic-bezier(0.16, 1, 0.3, 1)`, 20 px travel, no overshoot.
  Opacity finishes earlier (0.75 × duration, `ease`) so content is readable while it settles.
- Page-load entrance utilities: `animate-in-to-top-{ms}` / `animate-in-to-left-{ms}` (1.1 s,
  `cubic-bezier(0.22, 1, 0.36, 1)`, 1.6 rem travel). They run only while animations are on
  (`html[data-theme-animations='on']`) and under `prefers-reduced-motion: no-preference`.
- Drawer (floating bottom sheet and `xl`+ floating side panel): pure slide from its edge, 700 ms
  `cubic-bezier(0.32, 0.72, 0, 1)`; the backdrop fades with it. No scale or fade on the panel itself: scaling a panel
  that holds small controls (the close icon) makes them shimmer and jump while it settles. Swipe-to-dismiss keeps its
  own velocity-based timing.
- Hover/press: `interactive` utility (`transition`, `active:scale-95`); ghost buttons grow a tinted `primary/10` pill
  from `scale-80`.
  `Button` fades color and background, tightens its radius and scales on press in one 300 ms `--ease-interactive`
  (`cubic-bezier(0.22, 1, 0.36, 1)`) transition, so none of them snaps; the ghost pill uses the same duration and curve.
- Default animation setting: enabled (Default theme), spring, 0.24 s delay, 0.4 s duration. Users can switch animations
  off or on in every theme; the Wireframe theme starts with them off. Off means no reveal, no typewriter intro, no
  bounce or pulse, no snowfall and no hover transitions. CSS (`html[data-theme-animations='off'] [data-animate]`) shows
  reveal content in its final state before and after hydration; `AnimationsProvider` is only the JS fallback that
  stops `motion` from running.
- `<MotionConfig reducedMotion="user">` wraps every reveal. Never bypass it.

Motion exists to guide attention and confirm interaction. Never for decoration, never looping in content areas (the
winter snowfall and the three-dot divider bounce are the sanctioned ambient effects).

## 9. Themes

A theme is a combination of **style** × **appearance** × **accent color** × **font size**, persisted in `localStorage`
(`dr-theme*` keys) and applied as classes and `data-*` attributes on `<html>` before first paint
(`themeInitializationScript`).

| Style       | Character                                                                                                 |
| ----------- | --------------------------------------------------------------------------------------------------------- |
| `default`   | "Intense accent UI": rounded, colored, animated. The reference experience.                                |
| `wireframe` | "Sketch-based UI": black/white, handwritten type, square corners, no animation, no shadows. Same content. |

Themes are listed once, in `feature/theme/theme-definitions.ts` (id, label and the defaults for accent, animations,
radius and container width). The selector, the switch, persistence and the pre-paint script read that list; a new theme
is a new entry plus its token block in `globals.css`. Selecting a theme applies its defaults (accent, animations,
radius,
container width); appearance and font size stay. The styles `crazy-color` and `notes` and the Cornell-notes background
were removed.

Rules:

- Wireframe media: every `img` and `svg` (photos, project previews, logos, interface icons) is grayscale
  while the accent is the neutral one (the Wireframe start), through one filter rule in `globals.css`. A picked color
  accent (blue, violett, orange) turns the filter off, so media show their colors. The accent shows on text, buttons,
  links and the page-frame crop marks (they carry `filter-none`, so a picked accent color shows; the neutral accent
  keeps them black or white). Never use
  `grayscale-0` or another filter utility on any other image: a utility beats the base rule.
- Structure differs by tokens and `html[data-theme=…]` selectors, not by forking components.
- Wireframe: `--border` is a faint hairline kept only where a control needs an edge (toggle outlines use `foreground`);
  groupings read as tone (`muted`), except the drawer panel and its setting groups, which have sketch strokes (see
  Sketch pattern in §10). Drop shadows are off (`--tw-shadow` is zeroed); focus rings stay.
- Every setting is mirrored to a `data-theme-*` attribute on `<html>` before first paint and on every change; CSS reacts
  in the same frame. Tokens never transition on a theme or setting change.
- Prefer CSS for theme differences (`in-data-[theme=wireframe]:…`, `html[data-theme=…]` selectors). A component may read
  one setting with `useThemeSetting(name)` only when CSS cannot express the difference (for example the intro skips
  typing when animations are off) — keep these minimal.
- Persona/`ThemeMode` (`design` | `dev`) is stored but currently has no visible effect.
- State lives in `feature/theme/theme-store.ts`, outside React. Read one value with `useThemeSetting(name)` (re-renders
  only
  on that value), setters with `useThemeActions()`. `useTheme()` returns everything and re-renders on any change.

## 10. Components

Architecture: `src/components/{ui,feature}`. See the READMEs in [`ui`](./src/components/ui/README.md) and
[`feature`](./src/components/feature/README.md). One folder per component with `index.ts` and `types.ts`
where applicable. Imports use the `@/` alias and are grouped ui → feature → lib. Pages in `src/app` compose feature and
ui components.

Dependency rule: `feature` consumes `ui`; `ui` never imports from `feature`. ESLint enforces the dependency rule, the
layer order of imports, the import depth (`local/import-depth`: at most three segments after `@/` in imports, dynamic
imports and re-exports, e.g. `@/components/feature/theme`; go through the folder's `index.ts` barrel) and the feature
file prefix (`npm run lint`, `npm run format`).

### UI (`src/components/ui`)

Baseline, domain-free components: `Button`, `Badge`, `Code`, `Divider`, `Hr`, `Blockquote`, `ExternalLink`,
`Icon*`, `Menu` (Base UI menu: `Button` trigger, `bg-background` popup with a 1 px border like `Select`, rows are links
with an optional icon, `newTab` adds `rel` and a hidden "(opens in a new tab)"), `Select` (Base UI listbox: `Button`
trigger with chevron, `bg-background` popup with a 1 px border, check mark on the chosen row; options may carry an
icon), `Toggle`, `Tooltip`, `DotsDivider`, `Typewriter`, `TypewriterOverlay`, `Animate`, `ButtonGroup`, `Drawer`,
`Dialog`, `Tabs`, `Container` and `PageTemplate` (h1, hero blockquote and content slot used by
inner pages).

- **Button** — `variant` = `{contained|ghost|text|link}-{primary|foreground|muted}` (+ `contained-white`), `size` =
  `tiny | small | medium | large`. Minimum touch target 44 px for `medium`/`large`. The component picks `a`, `Link` or
  `button`, adds the external-link arrow, `rel`, `aria-label` and `title` automatically for `https`, `mailto:`, `tel:`
  and downloads. `prefetch={false}` (internal `href` only) stops Next.js from prefetching a target that is not a
  page, such as `/agent-view`; the prop goes to `Link` and never to the DOM.
- **Tooltip** — Base UI popup, `bg-popover` with a `ring-foreground/10` border, `text-sm`, `rounded-xl`, `z-max`, 150 ms
  opacity fade (`motion-safe:`). Used for `Button` with `iconOnly` + `label`. The text is an action: a verb plus its
  object ("Open theme settings"), see UX_PRINCIPLES.md Tooltip.
- **Blockquote** — accent bar on the left (`before:` element). In Wireframe the bar is a hand-drawn pencil stroke (CSS
  mask from `--sketch-quote-bar`) in the same accent color.
- **Button in Wireframe** — `contained-*` buttons get uneven corners and a rotated `foreground` pencil outline
  (`before:` pseudo-element, tokens `--sketch-button-radius` and `--sketch-button-outline-radius`); ghost, text and link
  variants are unchanged.
- **Toggle and color swatches in Wireframe** — swatches are wobbly blobs (`--sketch-blob-radius`) with a rotated
  `foreground` pencil outline (`before:` pseudo-element, `--sketch-blob-outline-radius`). The toggle track is a slightly
  uneven capsule with the same kind of outline (`--sketch-pill-radius`, `--sketch-pill-outline-radius`) and an uneven,
  slightly tilted knob with a 2 px outline (`--sketch-knob-radius`, percentages that never clamp); colors, check mark
  and the accent knob are unchanged.
- **Sketch pattern in Wireframe (all controls)** — one pencil language: uneven corners plus a `foreground` outline.
  Applied to contained and ghost-hover buttons, the active tab, toggle track and knob, color swatches, the `DotsDivider`
  dots, the typewriter frame, the drawer panel (2 px), the theme setting groups and the tools and technologies drawer
  groups (1.5 px), the `Select` and `Menu` popups (1.5 px, rows with uneven corners), the `text-*` button hover
  underline (the `Hr` pencil stroke) and the philosophy diagram circles (petals and the "UI" core; petal labels sit on
  an opaque chip of `primary` at 10 % over `background`), and the `Hr` rule (a masked pencil stroke in the parent's text
  color; `--sketch-hr-line`). Tokens: `--sketch-button-*`, `--sketch-blob-*`, `--sketch-pill-*`, `--sketch-knob-radius`,
  `--sketch-frame-radius`; the rem-based ones (button, frame) scale with `--sketch-scale`, the percentage and capsule
  ones already fill their box. Default is unchanged.
- **Badge** — `primary | foreground | muted | white`; `sm | md | lg`; pill-shaped.
- **Code** — inline code chip, like text in backticks in Slack or Claude: `font-code` at `0.85em`, `bg-muted`, 1 px
  `border`, `text-foreground`, `rounded-md` (follows the radius setting), `px-1.5 py-0.5`, never wraps. Tone and a
  hairline carry it, no color accent, so it works in every theme and accent. Project responsibilities write it as
  `` `text` `` in the data.
- **Divider** — `hr`, `dot`, `three-dotted`.
- **DotsDivider** — `alignment` = `vertical` (default, stacked dots) | `horizontal` (dots in a row); `dots` = `1 | 3`;
  `animate={false}` turns the bounce off.

### Feature (`src/components/feature`)

Domain and feature components, one folder per feature: `header`, `footer`, `page-navigation-bar`, `page-frame`,
`avatar`, `profile-links` (`ButtonFigma`, `ButtonGithub`,
`ButtonLinkedin`), `brand`, `tools`, `technologies`, `selected-works`, `philosophy`, `socials`, `intro`, `theme`
(registry, store, hooks, tokens and settings UI), `typography` (`H2`, `Ul`, `Ol`), `logo` (`Logo*`), `events` (winter
scene), `introduction` (introduction page copy and the `/api/introduction` JSON builder), `agent-view` (`AgentViewLink`, markdown builder for `/agent-view`).

File naming: every file in a feature directory is prefixed with the directory name (`tools/tools-data.ts`). Only
`index.ts` is exempt.

- **Avatar** — round photo with a 2 px border (`foreground` in Wireframe); `as` = `Link` (header, links to the
  introduction) | `Image`.

### Agent view

`/agent-view` is a route handler, not a styled page: it returns the introduction and selected works content as raw markdown
(`text/plain`) with no layout, theme, CSS or script. Its text comes from the same content modules as the pages
(`introduction-content.ts`, `projects-content.ts`, `philosophy-data.ts`, the data files), so a copy edit shows in both.

`AgentViewLink` (`Button` `text-foreground`, `small`: a quiet text button, `hover:text-primary`) is the only entry
point. It sits in the footer, centered on its own line directly above the copyright line, at every width and
container-width setting; the header has no link. It is `small` on purpose: a standalone link in a dense, non-primary
context (rule 5); no other target sits within 24 px of it. A "Résumé" menu sits beside it in the same row (`Menu`
trigger: same `text-foreground` `small` button with a three-dots icon instead of an arrow, `gap-x-4`, wraps when
narrow); its two options, PDF and JSON, link to the CV file and `/api/resume`. The footer no longer shows the
framework-version line (Next.js, React, Tailwind CSS) and uses `py-6` / `space-y-4` (was `py-12` / `space-y-6`).

### Content API

`/api/introduction` and `/api/selected-works` are route handlers that return the page content as JSON, named like the pages. They have no layout, theme or script. `buildIntroductionApi` (`feature/introduction`) and `buildSelectedWorksApi` (`feature/selected-works`) read the same content modules as the pages and `/agent-view`, so a copy edit shows everywhere. React nodes (logos) stay out; preview images become absolute URLs.

### Variants

Use `cva` + `cn` for variants. Prefer an explicit `variant`/`size` prop over free-form class overrides. `className`
passthrough is for layout (margin, width), not for restyling.

## 11. Imagery and iconography

- Project previews are wide wallpapers (`public/selected-works/*`), shown unframed; `width`/`height` always set; alt
  text
  `"<Title> preview image"`. Hero imagery uses `preload`.
- In Wireframe all images and SVGs render grayscale while the neutral accent is active, and in color once the visitor
  picks a color accent (see §9). Do not rely on hue alone to tell logos apart.
- Logos are SVG components in `feature/logo`; raster fallbacks sit in `feature/logo/img`. Logos must work in dark mode
  (use `currentColor` or provide a dark variant).
- Icons: Lucide for UI icons (`IconLucide`), Heroicons 16/solid for existing inline arrows. **New icons use the outline
  style** (`@heroicons/react/24/outline`, sized `size-4` or `size-5`, `aria-hidden` when a label is present); do not add
  new solid icons. Outline icons draw a 1.5 stroke in a 24 px box, about 1 px at `size-4`, which reads thin next to
  text: add `stroke-2` (1.33 px at `size-4`). Size via the button (`size-5` at
  medium). Custom conceptual icons (Atomic Design, Flower of Product Engineering, …) are bespoke SVG `ui` components.
- Decorative SVG shapes (`SvgShapes`) are four corner crop marks of the page, desktop-only (`lg:block`),
  `pointer-events-none`, `z-10`.

### Cursor

The default pointer is replaced by an accent-colored dot (`src/app/cursor.css`, images in generated
`src/app/cursor-tokens.css`). Native CSS cursor images: no JavaScript, no lag. Every image has a 2.5 px ring in the page
background color (`background`) inside a
1.5 px accent ring, so the dot looks cut out of the page, including on the `bg-primary` band. Each state changes the
**silhouette**,
never only the color.

| State                                     | Shape                                      |
| ----------------------------------------- | ------------------------------------------ |
| Default                                   | Dot, 18 px                                 |
| Clickable (`a`, `button`, `.interactive`) | Dot, 24 px (×1.33)                         |
| Pressed (`:active`)                       | Dot, 13 px                                 |
| Text field                                | Vertical pill                              |
| Disabled / `not-allowed`                  | Rounded rectangle with a bar, 60 % opacity |
| `progress` / `wait`                       | Donut                                      |
| `zoom-in` / `zoom-out`                    | Large dot with plus / minus                |
| `grab` / `grabbing`                       | Rounded square, 22 px → 17 px              |

Accent and background are baked into each image (images cannot read CSS variables). One set per accent plus wireframe,
each for light and dark (wireframe core: black on light, white on dark).
After changing an accent or `--background` in `globals.css`, update `ACCENTS` / `BACKGROUNDS` in
`scripts/generate-cursor-tokens.mjs` and run
`npm run cursors`. Limits: states swap, they do not animate (cursor images cannot transition); OS pointer-size settings
do not apply to custom images.

## 12. Accessibility

- WCAG AA contrast for text in every theme/accent. Check `primary-foreground` on every accent when adding one.
- Visible focus on all interactive elements (do not remove outlines; Base UI/shadcn patterns use `focus-visible:ring`).
- Everything operable by keyboard; overlays trap focus and close on `Esc` (provided by Base UI primitives).
- Semantic landmarks: `header`, `main`, `footer`, `aside`, `section` + headings in order.
- Icon-only controls get `aria-label`; links that open a new tab say so in `aria-label`/`title`.
- Theme setting changes are announced to screen readers through a polite live region (`ThemeSettingsAnnouncer`) inside
  the drawer.
- Reduced motion honored via `motion-safe:`, `prefers-reduced-motion` and `MotionConfig`.

## 13. Dos and don'ts

**Do**

- Use semantic tokens and Tailwind utilities that resolve to them.
- Wrap page sections in `Container`; reveal them with `Animate`.
- Start new UI as a `ui` component when it is reusable.
- Test in light, dark, all three accents, wireframe, and 90 / 110 % font size.
- Keep one primary action per view visually dominant (`contained-primary`).
- Write short, declarative copy in sentence case.
- Keep `rem`-based sizing so font-size settings scale everything.

**Don't**

- Hard-code hex/rgb/oklch values or px font sizes in components.
- Use theme-specific names (`--blue-bg`); name by role.
- Add shadows, gradients, glass or parallax.
- Stack more than one `bg-primary` full-bleed band on a page.
- Add looping or autoplay motion to content.
- Fork a component per theme; use tokens and `html[data-theme=…]` selectors.
- Color whole paragraphs of body copy `text-muted-foreground` — body text inherits `text-foreground`; muted is for
  supporting text only.
- Use `div` + `onClick` for something that navigates or acts; use `Button`/`Link`.
- Style with inline `style` unless a value is genuinely dynamic.

## 14. Rules (enforced in review)

1. New color, radius, font, duration or width ⇒ add a token in `globals.css` first.
2. New accent ⇒ full `-foreground/-hover/-border` set, mapped in all three places, contrast verified.
3. New component ⇒ correct layer (`ui` or `feature`), `index.ts` barrel, typed props, works in wireframe.
4. New page ⇒ `PageTemplate` (or `Container` sections), `metadata` with a plain page `title` (the root layout template adds `… | Portfolio, Dominik Rubröder`; `openGraph.title` uses `seoTitle()`),
   `HeroNavigation` entry if it is top-level. Exception: `/agent-view` is a route handler returning plain
   markdown, so it has no `PageTemplate`, `metadata` or `HeroNavigation` entry (no layout, no `<head>`); its link lives
   in
   the header and footer.
5. Interactive elements ≥ 44 px (`medium`+) on touch layouts; `tiny`/`small` only inside dense, non-primary contexts.
6. Run `npm run format` (Prettier incl. Tailwind class sorting) and `npm run lint` before committing.
7. Every visual decision of lasting effect gets a line in the decision log below.
8. Every new or changed component is cross-theme compatible and follows the documented style patterns (tokens,
   typography, shape, motion, components in §4–§10). Verify it in Default and Wireframe, light and dark, every accent,
   radius setting and 90 / 110 % font size before calling the task done. Differences between themes come from tokens and
   `html[data-theme=…]` selectors, never from forked components. If a needed pattern is not documented, add it here in
   the same change.
9. Accessibility checks are part of every UI task, not a final polish step: contrast in every theme and accent, visible
   focus, keyboard operation, accessible names, semantic landmarks and reduced motion (§12). Run the checks before
   calling a task done and report violations you find.
10. Every created or updated component is synced to its Figma component in the same task (Portfolio file
    `yGICVbl9clikVNXP2Lkkue`: pages `↪ ui`, `↪ features`, `↪ tokens`, mirroring `src/components/{ui,feature}`). New
    tokens get a Figma variable. Code and Figma never differ in look, variants, props or states. Pure refactors with no
    visual or API change are exempt. If Figma is unreachable, report which component is out of sync.
11. Every actionable element that is icon-only, image-only or shows 3 characters or fewer gets a `Tooltip` that names
    the action (verb + object), via `Button` `iconOnly` + `label` or `Tooltip` `render`. No native `title` as the only
    label. See UX_PRINCIPLES.md Tooltip.

## 15. Decision log

Newest last. Derived from release history (`Release UI x.y.z`) and the current code.

| When / version   | Decision                                                                                               | Why                                                                                      |
| ---------------- | ------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------- |
| Early (≤ 2.0)    | Move to Atomic Design architecture (`atoms → templates`)                                               | Make the portfolio demonstrate system thinking; predictable place for every component.   |
| Early            | Next.js 15 → 16, `framer-motion` → `motion`                                                            | Stay current; smaller, maintained animation package.                                     |
| UI2              | Single narrow reading column (44rem) as default layout                                                 | Readability and a distinctive, calm rhythm; wide layouts only where imagery needs it.    |
| UI2              | Outfit as the single UI typeface; Patrick Hand for sketch accents; JetBrains Mono for code             | One geometric family keeps hierarchy via size/weight only; handwriting adds personality. |
| UI2              | OKLCH tokens + runtime accent switching (blue / violett / orange)                                      | Perceptually even colors; visitors can personalize; proves token architecture live.      |
| UI2              | Appearance = light / dark / **system**, class-based dark variant                                       | Respect OS preference while allowing manual override and no-flash init script.           |
| Projects release | Project showcase with one full-bleed `bg-primary` hero project, others in a quiet list                 | One story first, the rest scannable; limits accent to ≈ 10 %.                            |
| 2.x              | Wireframe theme                                                                                        | Shows the structure beneath the skin; doubles as a high-contrast, no-motion mode.        |
| 2.x              | Theme settings in a side panel ("Modify") and header quick controls                                    | Quick toggles for common needs; full control without leaving the page.                   |
| 2.x              | Base UI `Drawer`/`Tabs` wrapped in shadcn-style components                                             | Accessible, unstyled primitives; styling stays token-driven.                             |
| 2.x              | Seasonal winter scene (snowfall, Santa cap) behind a toggle                                            | Personality and delight; optional so it never costs usability.                           |
| 3.0              | Home page as a sequence of large statements separated by three dots                                    | Lead with the philosophy ("design and code") before any detail; strong first impression. |
| 3.0              | "Agents are about orchestration and execution" statement; accent band "We compose, direct and oversee" | Reflects the current working model with AI agents; accent band marks the turning point.  |
| 3.0.x            | Button system `contained / ghost / text / link × primary / foreground / muted`                         | Small, orthogonal matrix instead of one-off buttons.                                     |
| 3.0.x            | `Animate` supports a controlled `active` mode besides viewport reveal                                  | Lets intro/typewriter sequences orchestrate the first reveal.                            |
| 3.0.x            | Intro typewriter overlay with a random phrase                                                          | Memorable first moment; communicates curiosity and craft.                                |
| 3.0.x            | Docs, `CLAUDE.md`/`AGENTS.md`, `DESIGN.md`, `UX_PRINCIPLES.md` at repo root                            | Give humans and coding agents the same design source of truth.                           |

| 3.0.6 | Three-dotted divider dots bounce one after another, infinite | Small living punctuation between statements;
sequential so it reads as a rhythm, not a flash. |
| 3.0.6 | Avatar `lightbox` variant: zoom to centered round photo on a flat scrim | Lets visitors see the person behind
the portfolio; no frame, shadow or caption added. |
| 3.0.6 | Philosophy core "UI" center pulses (`animate-core-pulse`, scale 1 → 1.12 → 0.96, 2.1 s loop) | Same rhythm as
the three-dot divider; the shared center of the diagram reads as the living part. |
| 3.0.6 | Icon-only buttons use `iconOnly` + `label`: accessible name and `Tooltip` text, no native `title` | Native
`title` is unreachable by keyboard and touch; one source for name and explanation. |
| 3.0.6 | Components split into `ui` (baseline, domain-free) and `feature` (domain-specific); `feature` consumes `ui`,
never the reverse | Replaces the four Atomic Design layers. Clear ownership: a feature keeps all its parts in one
folder; `ui` stays reusable. |
| 3.0.6 | `PageNavigationBar` feature: the sticky bottom bar on every page; on `/selected-works` the "Selected works"
button cross-fades to "Introduction" (300 ms, `cubic-bezier(0.22, 1, 0.36, 1)`, 0.75rem horizontal slide, no vertical
movement) | One bar, one primary action that always points to the other half of the site; the leaving button leaves the
flow, so the bar fits the visible button and reserves no space for the other. |
| 3.0.6 | `DotsDivider` (`ui`) extracted from `Divider variant="three-dotted"`; used on home and between projects on
`/selected-works` instead of `hr`; `dots={1}` renders the single dot with a hover target; three dots always use the same
fixed wave, only the single dot takes a `delay` | Identical to the home dividers (vertical stack, sequential bounce):
one punctuation mark across the site. |
| 3.0.6 | `DotsDivider` gets an `alignment` prop (`vertical` default, `horizontal`); `animate={false}` opts out of the
bounce | Same punctuation fits inline contexts (rows, meta lines) without a second component; static variant for places
where motion would distract. |
| 3.0.6 | `Animate` reveals use a 1.8 s expo-out glide with 20 px travel instead of a bouncy spring; opacity runs
shorter than travel | Spring overshoot and a hard-stopping 24 px slide felt jittery; a long soft tail and less distance
read as smooth. |
| 3.0.6 | `Drawer` enters like the `Sidebar`: 300 ms `ease-in-out`, slide + scale 0.95 → 1 + opacity 0.75 → 1 | Two side
panels, one entrance. Replaces the 450 ms custom curve on the drawer. |
| 3.0.6 | Drawer bottom sheet (mobile) slides in 700 ms with `cubic-bezier(0.32, 0.72, 0, 1)`, without scale or fade;
height is no longer transitioned | Scaling and fading a full-width sheet looked jittery, and animating `height` re-lays
out every frame. A plain long slide reads smooth. |
| 3.0.6 | Drawer side panel (`xl`+) slides without scale or fade, like the bottom sheet | The 0.95 → 1 scale made the
close button jiggle while opening; a pure slide keeps every control on whole pixels. |
| 3.0.6 | `Drawer` floats: `--drawer-inset` (0.75 rem, 1 rem from `sm`) offsets it from the viewport edges on all open
sides; rounded `2xl` (`rounded-theme-2xl`, square in wireframe), full 1 px border, no edge bleed | A detached card reads
as a layer above the page, matching the rounded controls; the offset keeps the page visible around it. |
| 3.0.6 | Decorative `SvgShapes` become crop marks in the four corners of `main` (accent color, static, `lg`+; wireframe
background uses `xl`+) | Quiet drafting frame that fits the design-and-code story; replaces the scattered shapes and
keeps the reading column clear. |
| 3.0.6 | Home page gets a visually hidden `h1` (since 3.2 the first statement is the `h1`) ("Design and code speak the same language", `sr-only`); the big
statements stay `div`s | The page needs one `h1` for SEO and screen readers; the statement sequence keeps its look
without becoming a heading outline. |
| 3.0.6 | Custom cursor: accent dot with paper ring and accent outer ring, native CSS images, shape morphs per state
(grow on clickable, shrink on press, rounded bar-rectangle at 60 % when disabled) | Brand-colored pointer (accent core
and outer ring, page-background ring between) that stays legible on every surface. Native images avoid a JS follower: no
lag, no hydration, no extra motion. Shape carries state, not color. |
| 3.0.6 | Philosophy tab panels share one grid cell (`col-start-1 row-start-1`) | Base UI keeps the leaving panel
mounted for a frame; stacked panels doubled the height, pushed the tab list down 400 px and shifted scroll. One cell
keeps layout and scroll still. |
| 3.0.6 | Themes come from one registry (`theme-definitions.ts`): id, label and defaults for accent, animations, radius
and container width; selecting a theme applies its defaults, appearance and font size stay | A new theme is one entry,
not scattered `if (theme === …)` branches; a switch always starts from a known state. |
| 3.0.6 | Every theme setting is mirrored to a `data-theme-*` attribute on `<html>` (theme, appearance, color, font
size, radius, container width, animations); state lives in an external store, not a React context | CSS restyles the
page in the same frame and only the control that shows a setting re-renders; the page tree never re-renders on a
switch. |
| 3.0.6 | Wireframe is a black-and-white theme: gray tone steps instead of lines, faint `--border`, no shadows, square
corners, neutral accent (`foreground`) with optional color accents; the old full-contrast tokens (text = headings,
borders = foreground) are gone | "Non-border" structure that keeps the two-step text hierarchy; contrast stays AA. |
| 3.0.6 | Animations are one switch (`data-theme-animations`) that works in every theme; Wireframe starts off; off shows
reveal content at once via CSS, skips the intro and mounts no snowfall | Static by default but never locked: the visitor
can turn motion on on purpose. CSS is the source of truth, JS is the fallback. |
| 3.0.6 | Radius (none, small, medium, large) and container width (default, wide, full) are visitor settings in every
theme; radius drives `--radius`, width overrides `--spacing-container-readable` | Personal control without per-component
work: one variable each. |
| 3.0.6 | Header gets a theme settings trigger; the panel is titled "Theme settings" and loads lazily (now a drawer, see
below; preload added in 3.1) | Settings are one click from anywhere; pages that never open them pay no script cost. |
| 3.0.6 | Accent control gains a neutral swatch; `crazy-color`, `notes` and the Cornell-notes background are removed;
the Border placeholder section becomes "Shape" | Black and white is a real choice; no dead theme styles or placeholder
controls. |
| 3.0.6 | Theme settings open in the site's `Drawer` (bottom sheet below `xl`, side panel from `xl`, standard scrim);
the custom `Sidebar` is removed | One panel pattern. Base UI supplies focus trap, focus return, `Esc` and inert
background that the sidebar lacked. |
| 3.0.6 | Appearance (light, dark, auto) lives in the theme drawer only; the header shows the settings trigger first,
then the blue, violett and orange swatches (from `sm`); the neutral swatch is drawer-only | Quiet header; neutral is a
theme default, not a quick pick. |
| 3.0.6 | `Select` is rebuilt on the Base UI select with the same look; values are option keys, options can carry an
icon | Listbox roles, arrow keys, typeahead and `Esc` for free; one dropdown implementation. |
| 3.0.6 | Drawer groups: Base, Typography, Animation, Border (radius); the "Layout" group (container width) is gone from
the drawer, the stored setting still applies | Settings are named by what they change; the reading width is no longer a
visitor control. |
| 3.0.6 | Wireframe is a "Sketch-based UI": Patrick Hand for headings and body, every image and SVG grayscale (one CSS
filter rule), Default described as "Intense accent UI" (the description line in the theme select was removed again on
2026-10-22) | The theme reads as a sketch, not only as black and white; the accent stays on text, buttons and links. All
CSS and registry data, no new client code. |
| 3.0.6 | Statements and `h1` size fluidly to the viewport (7.6 em ≈ the longest word, "orchestration"); one gutter for
all text (`Container` `px-9`) | Fixed steps overflowed at 320–375 px. Fluid size is as big as the longest word allows,
never wider than the column. |
| 3.0.6 | Philosophy diagram scales down to the column (`diagram-fit`: container query width, `tan(atan2())` scale, 24
rem max); its two tab triggers sit side by side from `xs` (16 px text below `sm`) and stack full width below `xs` | The
fixed 24 rem artwork and the nowrap tab list overflowed the 20–24 rem column at 320–390 px; `body` `overflow-x-hidden`
hid it, but the page still scrolled sideways after a tab click. |
| 3.0.6 | Wireframe `Blockquote` bar is an uneven double pencil stroke (mask `--sketch-quote-bar` on the existing
`bg-primary` bar), Default keeps the straight bar | Matches the hand-drawn frame and crop marks; a mask keeps the accent
color that an `svg` child would lose to the grayscale rule. CSS only. |
| 3.0.6 | Wireframe contained `Button`: uneven fill corners plus a slightly rotated `foreground` outline as a second
pencil pass (CSS pseudo-element, two radius tokens); other variants unchanged | Same hand-drawn language as the page
frame and the quote bar, with no new element or script; the fill keeps its accent color. |
| 3.0.6 | Wireframe `Toggle` (track and knob) and theme color swatches: wobbly blob radius plus a rotated pencil outline
from two percentage radius tokens | Same hand-drawn language as the frame, quote bar and buttons; percent radii fit
every size, so two tokens cover all round controls. CSS only. |
| 3.0.6 | Wireframe `Toggle` uses capsule radius tokens (track, outline, knob) instead of the blob tokens | Percent blob
radii made the track an ellipse; oversized rem radii clamp to a capsule and keep the hand-drawn wobble, and the knob
stays inside it. |
| 3.0.6 | Wireframe toggle knob: egg-shaped percentage radius, 2 px border, slight tilt | Rem radii clamped the small
knob to a perfect circle; percentages that sum to 100 % keep the wobble at every size. |
| 3.0.6 | Sketch pattern extended to dots dividers, typewriter frame, ghost-button hover, tabs, drawer border, theme
setting groups and the toggle knob outline; groups and drawer now have `foreground` strokes in Wireframe | The theme
reads as one hand-drawn UI; supersedes "groupings read as tone, not lines" for the drawer and its groups at the owner's
request. CSS only, no new technique. |
| 3.0.6 | Philosophy diagram: every petal and the "UI" core get the blob radius and a pencil outline in Wireframe (set
once in the shared `Petal`) | The diagram reads as drawn, like the rest of the Wireframe controls; overlapping outlines
make the Venn structure visible without tone alone. |
| 3.0.6 | Wireframe `Hr` is a masked pencil stroke (mask `--sketch-hr-line` on the border), colored by `currentColor` |
Matches the hand-drawn controls; the mask keeps `hr` semantics and a constant line thickness. The color follows the
text, so the rule stays visible on the accent band. |
| 3.0.6 | Orange accent darkened to `oklch(0.58 0.237 31.3)` (hover 0.555, border 0.52) | White text on the old orange
measured 3.85 : 1; the darker value reaches 4.8 : 1 and keeps the hue. |
| 3.0.6 | Agent view: `/agent-view` is a route handler returning raw markdown (`text/plain`), not a styled page; entry
link is a `text-foreground` small button, centered in the footer above the © line (the earlier header link and its width
thresholds are gone); footer drops the framework-version line and gets `py-6` | No theme, CSS or script can reach it, so
it stays plain by construction. Page copy lives in shared content modules, so pages and agent view cannot drift. |
| 3.0.6 | Drawer swatches and the animation switch get a 44 px hit area (transparent `::after`, `min-h-11`) | Touch
target without changing the look. |
| 3.0.6 | Wireframe page frame gets a hand-drawn `foreground` border (`.sketch-frame`: uneven small rem radii, `lg`+,
Wireframe only); the avatar photo gets a `foreground` border in Wireframe | The sketch look reaches the frame and the
avatar; the faint Wireframe `--border` hid the avatar ring. CSS only. |
| 3.0.6 | Select options can carry a "Default" tag (`isDefault`); the radius select marks the active theme's default;
toggle knob is `background` colored when enabled in Wireframe; drawer group boxes use `rounded-xl` (the old class was
invalid, so they were square) | The visitor sees what resetting would give; one prop, registry driven. |
| 3.0.6 | Wireframe crop marks are drawn as one uneven 2.5 px pencil stroke that overshoots the corner, instead of the 7
px round-capped corner | Matches the hand-drawn `.sketch-frame`; the clean marker line looked digital next to it. SVG
paths toggled by `in-data-[theme=wireframe]`, no JS. |
| 3.0.6 | Wireframe crop marks keep the picked accent color (`filter-none` on the `CropMark` svg, exempt from the
grayscale rule) | The corner marks are the one decorative graphic that carries the visitor's accent in Wireframe; with
the neutral accent they stay black or white. |
| 3.0.6 | Philosophy core: the petal bloom (JS) follows the animations switch like the "UI" pulse (CSS); off shows all
circles at once, before hydration too (CSS `!important` on opacity and transform) and without waiting for the scroll
trigger | Wireframe starts with animations off; the bloom ignored the switch and still moved. |
| 3.0.6 | The core pulse token is `--core-pulse-animation` (not `--animate-core-pulse`); in Wireframe an enabled
`Toggle` shows the accent on the knob (`primary` fill and border) while the track stays `background` with a `foreground`
outline | A `--animate-*` theme variable makes Tailwind emit an ungated `animate-core-pulse` utility that beat the gated
one, so the pulse ran with animations off. The enabled toggle was indistinguishable from the idle one besides the knob
side. |
| 3.0.6 | Philosophy diagram petals split fill and outline (animated child, `aria-hidden`) from the label (`z-10`); the
petal wrapper has no transform, so labels share one stacking context and sit above every circle outline; holistic petals
center with `-m-22` instead of `-translate-1/2` | A transformed wrapper is its own stacking context, so a later circle's
pencil outline painted over an earlier circle's label in Wireframe. |
| 3.0.6 | Tools and technologies drawer groups share the theme setting group sketch box in Wireframe
(`--sketch-button-radius`, 1.5 px `foreground` border); `text-*` `Button` variants underline on hover with the `Hr`
pencil stroke (`after:` pseudo-element, `--sketch-hr-line` mask, `bg-current`) | One sketch language for every grouped
list and quiet link. CSS only; the underline fades with `motion-safe:` and shows at once with animations off. |
| 3.0.6 | `Button` icons follow the label color; logos with their own color (LinkedIn blue) follow it only in Wireframe
with the neutral accent (`html[data-theme=wireframe][data-theme-color=foreground] &>svg` `text-current`), so Default and
color accents keep the brand color; the earlier `[&_svg]:filter-none` exemption is removed | With media following the
accent, a color accent already shows icons in color. The descendant exemption also un-grayed multi-color logos inside
buttons (GitHub, LinkedIn, brand links) under the neutral accent. |
| 3.0.6 | Wireframe philosophy petal labels sit on an opaque accent-tinted chip (`primary` 10 % mixed into `background`)
instead of a plain `background` chip | The chip reads as the circle's own fill, so the label is colored like Default,
and stays opaque so no pencil outline shows through the text. |
| 3.0.6 | Wireframe media follow the accent: grayscale with the neutral accent (the start state), full color once a
color accent is picked (the filter rule is scoped with
`:not([data-theme-color]:not([data-theme-color='foreground']))`) | A color accent signals that the visitor wants color;
neutral keeps the pure sketch look. CSS only, same frame as the accent switch. |
| 3.0.6 | `PageTemplate` pulls its title block up on `lg`+ (`lg:-mt-6`) and sets the `h1` to `leading-tight` | The
non-sticky desktop header is `h-24` for 72 px of content, and `main` adds `pt-8`: the inner-page title sat about 80 px
below the header. About 30 px tighter; mobile is unchanged. |
| 3.0.6 | `LogoLinkedin` glyph is `fill-white` in every theme and `fill-background` in Wireframe with the neutral
accent | With the neutral accent the square takes the label color (`foreground`, white in dark mode) while the glyph
stayed white: the whole logo read as a white square. The glyph is a knockout, so it follows the page background. |
| 3.1 | Appearance defaults to `system` instead of `light` (`THEME_APPEARANCE_DEFAULT`, also the pre-paint script
fallback) | Respect the OS preference until the visitor chooses; saved choices still win. |
| 3.1 | Route `/projects` renamed to `/selected-works` (permanent redirect from the old path); the `projects` feature
folder and `public/projects` assets are renamed to `selected-works` too | The URL, page title and bottom-bar button now
use the same words ("Selected works"). Folder names follow the route, so URL, feature folder and assets share one name
(identifiers like `projects` stay). |
| 3.1 | `Header` wraps its row in `Container` for the reading width, with `px-4 xl:px-0` instead of the text gutter
(`px-9`) | Below `xl` the avatar and theme controls sit on the page frame's crop-mark edges (16 px at 390 px), not on
the text column; at `xl` they share the text edge. |
| 3.1 | Philosophy tab labels never wrap: `TabsTrigger` keeps `whitespace-nowrap`. From `xs` (375 px) the two triggers
sit side by side (`px-3`, 16 px text below `sm`, 18 px from `sm`); below `xs` they stack full width at 18 px and 44 px
height (`max-xs:flex-col`, `max-xs:h-11`) | Wrapped labels made the tab bar tall and uneven. At 18 px both labels need
about 335 px; the column is 303 px at 375 px and 248 px below. 16 px fits at 375 px, anything narrower stacks instead of
shrinking the targets. |
| 3.1 | `Footer` drops its own `px-4`; every row is a `Container` (the Santa credit too) | The footer's `px-4` stacked
on `Container`'s `px-9`, so its column was 16 px narrower per side than the page text below `xl`. |
| 3.1 | `@keyframes core-pulse` lives outside `@theme` | No `--animate-*` variable references it, so Tailwind dropped it
and the "UI" core stopped pulsing. |
| 3.1 | Philosophy blossom levels are switched off for now (`NAVIGATION_LEVELS_ENABLED = false` in
`philosophy-data.ts`), also in `/agent-view`; the code, data and the entry below stay | Paused by the owner, to be
picked up later. One constant turns them back on. |
| 3.1 | Philosophy blossom gets levels: a petal with detail (Design) opens one level deeper. The topic becomes the
center, styled like the root "UI" core (no ring, same pulse), its characteristics, purpose and fields bloom as the eight
petals, and the `UI / Design` trail below the diagram and a definition list below the trail replace the tab list.
Design, Code and UX open; any petal opens once it has an entry in `philosophyTopics`, and the ring spaces any number of
petals evenly. Petals that open have no border; on hover they fill with `primary` and switch to `primary-foreground`;
petals without detail have no pointer cursor | Depth reads from the new center and the trail, not from extra outlines.
Hover fill is the one cue that a petal opens. 220 ms zoom-in on leaving the overview, zoom-out on return, no motion with
animations off. |
| 3.1 | Theme drawer chunk preloads on browser idle and on hover or focus of the header trigger (shared
`loadThemeDrawer` import) | The first open waited for the lazy chunk (fetch, parse, mount) before the slide started.
Preload keeps it out of the page bundle and removes the wait. |
| 3.1 | Inline code (`Code`, `ui`): muted chip with a hairline border in the code font; project responsibility strings
mark it with backticks, `ProjectResponsibilityText` renders them, agent view keeps the backticks as Markdown | File
names such as `DESIGN.md` need to read as literal terms inside a sentence. Same convention as Slack, Claude and
Markdown, so copy stays plain text in the data. Tone, not color, keeps it theme-neutral. |
| 3.1 | Project `notes` (optional): a `small` muted line under the "View …" button (`text-primary-foreground` on the
hero band); agent view prints it after the link | Context that does not belong in the fields list, such as why a private
project has no screenshots. Quiet by design: the call to action stays the only emphasis. |
| 3.1 | Project responsibilities can nest: an object entry takes optional `items` (any depth), rendered as a `disc`
sublist (`my-2`) inside the parent `li`; `link` became optional; agent view prints the sublist as indented Markdown |
Some fields need sub-points without becoming separate fields. Same list look, one level deeper; text color inherits, so
the hero band and list cards need no variant. |
| 3.1 | Nested lists are global (`globals.css`, `Ul`, `Ol`): a `ul` inside an `li` marks items with an outlined circle
(`list-style-type: circle`); a nested `ol` continues the parent number (1., 1.1, 1.2, 2., 2.1) with CSS counters on
`::marker`, indented to `pl-9` | Depth reads from the marker shape and the number path, with no extra markup and no JS;
native markers keep list semantics and follow the text color in every theme. |
| 3.2 | `Drawer` panel is `rounded-5xl` (was `rounded-theme-2xl`); new token `--radius-5xl` (4.4 × `--radius`);
Wireframe keeps its sketch frame radius | A much softer sheet matches the rounded controls. The token follows the radius
setting (none stays square); `4xl` was too close to the old look. |
| 3.2 | `Select` and `Menu` popups use `z-max` (was `z-1100`); in Wireframe the popup gets the sketch box
(`--sketch-button-radius`, 1.5 px `foreground` border) and rows uneven corners; `Select` popup is capped to
`--available-height` and scrolls | `z-1100` was not in the layer scale. Same sketch language as the drawer groups. A
long list must stay reachable on a short viewport. CSS only. |
| 3.2 | Wireframe honors the radius setting: the rem-based sketch radii (frame, button and outline, groups, popups,
drawer) are multiplied by `--sketch-scale` (none 1, small 1.4, medium 1.8, large 2.4); `.sketch-frame` reads
`--sketch-frame-radius` | The Border setting did nothing in Wireframe because every sketch corner was a fixed value.
Scaling keeps the uneven drawn shape and gives the visitor control; `none` stays the unchanged start look. CSS only. |
| 3.2 | Visible labels that link to `/` say "Introduction" (bottom bar button on `/selected-works`, avatar link title
and accessible name) and the `/agent-view` section heading, not "Home" | The page opens with the introduction; one word
names the destination everywhere. |
| 3.2 | `Button` hover and press transition `color`, `background-color`, `border-radius` and `scale` over 300 ms with
the new `--ease-interactive` curve (`cubic-bezier(0.22, 1, 0.36, 1)`, the page-load entrance curve); the ghost pill's
scale and opacity use the same values | The button only transitioned color at Tailwind's 150 ms default, so the radius
tightening and the press scale snapped. One long expo-out curve reads smooth; `motion-safe:` keeps it off with reduced
motion. |
| 3.2 | Component changes sync to Figma in the same task (rule 10), not as a later reminder | The Figma file mirrors the
code architecture; a component that exists or differs in only one place breaks the design-and-code story. |
| 3.2 | The Figma file carries the full component set: every `ui` component on `↪ ui` (one `button` set with `variant`,
`color`, `size`, `state`, a leading icon, swappable icons and `showLabel`; `divider` with `hr`, `dot` and
`three-dotted`) and the `feature` components on `↪ features` (header, footer, avatar, brand and brand list, profile
links, agent view link, theme settings with the theme, appearance and radius selects and the animation switch, drawers,
winter toggle and Santa's cap, philosophy core, project responsibility). They are built from the `theme` and `color`
variables and the text styles. The older duplicates of the 3.0.5 design are removed; the `ui-3.2` page uses the new
`header` and `footer` | The new sets follow the code names and props one to one, so there is one source in Figma as in
code. Old nodes without a new counterpart (typography, `assets`, `resources`, `projects`, `hero-link`, `section`,
`brand-logo`) stay. |
| 3.2 | Avatar `lightbox` variant and `avatar-lightbox.tsx` removed | Unused: the header avatar only links to the
introduction. Drops a client component, a Dialog and the avatar's use of `z-100`. |
| 3.2 | Storybook tooling removed (config, all stories, dependencies, scripts); components are verified in the running
app. The Storybook logo, tool entry and project references stay | Not needed as a workshop. Fewer dependencies and one
source of truth less to keep in sync with the app and Figma. Storybook remains a tool listed in the work history. |
| 3.2 | Figma variables mirror `globals.css` (code leads). Collections: `__core` (primitives: black, white, blue,
violett, orange with `-foreground`, `-hover`, `-border`, font families), `theme` (modes default and wireframe × light
and dark: `color/background`, `foreground`, `border`, `hover`, `muted`, `muted-foreground`, `muted-hover`, `popover*`,
`signal-yellow*`, containers, `z-index/*`, `border/radius/*`), `color` (accent modes blue, violett, orange, neutral ×
light and dark: `color/primary`, `-foreground`, `-hover`, `-border`, `-muted`) and `radius` (modes none, sm, md, lg:
`radius/base` to `radius/5xl` computed as in CSS). Variable names are the CSS names with `/` instead of `--`; every code
token has `var(--…)` WEB code syntax and an explicit scope. The Notes mode, the Tailwind-aliased `primary-color-*` and
the Inter wireframe font are removed; `border/radius/xl`, `2xl`, `4xl` and `5xl` in `theme` alias `radius` by value, so
existing component bindings survive | Colors were hex aliases of the Tailwind palette from the 3.0.5 design and drifted
from the OKLCH tokens (orange, violett, muted, border, wireframe grays and font). Renaming in place keeps every binding.
OKLCH values are converted to sRGB (chroma reduced when out of gamut). |
| 3.2 | Figma text styles follow the CSS and Tailwind scale: `heading/h1` 60/75 and `h2` 36/40 take size and line height
from the `viewport` variables (`Typography/h1/*`, `h2/*`; h1 is 60 from 536 px, 32 at 320 px; h2 is 30/36 below 375 px),
`heading/h3` and `title` 24/32 semibold, `body/xs` 12/16, `sm` 14/20, `xl` 20/28 (the old `lg`; Tailwind `text-lg` is 18
px). New: `heading/statement` (72, 32 on phone, line height 110 %), `heading/dialog-title` (18 medium, `leading-none`),
`body/default/semibold` (the `b` headline of `Ul` and `Ol`), `body/small` (the `small` element, `leading-relaxed`),
`code/inline` (0.85em). Removed: `heading/h4` to `h6`, the italic styles and `body/default/default` (a duplicate of
`body/default/body`). Every style binds family, weight (`typography/font-weight/*`) and, where fluid, size to variables;
the `h6` component is now `headline` | `h4` to `h6` are not used in the app (their CSS is the body size, semibold), and
the Figma `h6` was really the `b` headline and the dialog title. Binding the weight lets the Wireframe mode resolve to
Patrick Hand (one weight, 400) without a missing font; the same variables carry the fluid sizes per viewport mode. |
| 3.2 | Figma spacing, screens and remaining tokens follow the code: `spacing/*` are the Tailwind steps with the same
name as the class number (`spacing/4` = `p-4` = 16 px; decimals as `0-5`, `1-5`, `2-5`), with the steps the code uses;
the old t-shirt names (`2xs` to `3xl`) are renamed in place. `screen/xs` to `2xl` are the Tailwind breakpoints (375,
640, 768, 1024, 1280, 1536; `screen/minimum` 320). `Body/spacing-y` is 48 (32 on phone), `Body/padding-x` 0 at `xl` and
up, 36 below (the `px-9` reading column). `border/width/sketch` 1.5 px replaces the unused 4 px. New:
`radius/sketch-scale` (1, 1.4, 1.8, 2.4 per radius mode), `size/container/readable-wide` and `-full` (1024, 1440),
`size/touch-target` (44), and a `motion` collection (durations and easing curves of `globals.css`).
`spacing/section/section-break` and the `__internal` persona colors and `font-size-max` are removed;
`spacing/component-variants` aliases `spacing/8` | The code has no spacing tokens, only the Tailwind scale, so Figma
names it the same way. Laptop 1440 and panorama 1920 were device sizes, not breakpoints. The persona colors were unbound
and aliased the Tailwind library; the persona setting has no visible effect. The motion values only document the code:
Figma cannot bind them to anything. |
| 3.2 | Figma text styles reach every text node: new `body/default/bold-tight` (18, `leading-tight` 125 %, the header
name) replaces the 16 px override; `code/inline` applies to the code chip label (15.3, was 14); statements, `h1` and
`h2` instances carry `heading/statement`, `heading/h1` and `heading/h2` instead of a size override that cleared the
style | A size override on an instance detaches its style, so 36 text nodes looked right but ignored the tokens. The
header name and the code label also differed from the code (16 vs 18 px, 14 vs 15.3 px). |

| 3.2 | `foreground` is the default text color: `<body>` carries `text-foreground` and the Figma default body text
(`body/default/*` in `container`, `blockquote`, `page-template`, `drawer`, `Project Item`,
`selected-works-responsibility`) is bound to `color/foreground`; `muted-foreground` stays for `small`, captions, roles,
descriptions and the `muted` control variants | The body had no color since 3.0.6 (the `text-muted-foreground` class
left with the old tokens, so text fell back to the browser default instead of a token) while §4.1 still said muted. One
explicit token on `<body>` makes text follow the theme in every appearance and accent, and the Figma fills match. |
| 3.2 | `ButtonFigma` (`profile-links`) joins the `PageNavigationBar`, first of the three icon buttons (Figma, GitHub,
LinkedIn); it links to the Figma design system file (cover page) in a new tab and hides below `xs`, where three icons
would squeeze the primary link (171 px) at 320 px | The portfolio claims to connect design and code, so the design file
is one click from every page, next to the code and the profile. Same `BrandLink` icon button as GitHub, no new
pattern. |
| 3.2 | Tooltip and icon-button labels are actions: verb + object, sentence case ("Open theme settings", "Set blue
accent color", "Close dialog", "Open my GitHub profile"), not a noun ("Theme settings", "Blue accent color") | A tooltip
answers "what happens when I press this?". A noun names the thing and leaves the outcome to guesswork; the same text is
the accessible name, so screen reader users hear the action too. Applied to every `iconOnly` `label`, the accent
swatches and the drawer close buttons. |
| 3.2 | Global rule: every actionable element that is icon-only, image-only or shows 3 characters or fewer gets a
tooltip. Applied to the drawer close buttons (were native `title`), the avatar link (was native `title`), the "Aa" font
size buttons and the philosophy level back controls | A glyph or a two-letter label does not say what it does. A tooltip
is the one place the action is spelled out for hover and keyboard focus; native `title` is unreachable by keyboard and
touch. Longer visible text already names the action. |
| 3.2 | Key style values are named: modern, vibrant, themeable (Vision, `ui` and `feature` READMEs, and as badges on the
Figma `readme` root) | One short phrase every contributor and the docs can repeat. Each value maps to rules already
here: bold minimalism and rounded shapes (modern), one strong accent at 10 % (vibrant), token-first themes
(themeable). |
| 3.2 | Home opens with the statement "Design and code speak the same language" as the page `h1` (the `sr-only` `h1` and `homeHeading` are gone); document titles follow `<page> \| Portfolio, Dominik Rubröder` through one root `title.template` (home default: "Introduction \| Portfolio, Dominik Rubröder"), `seoTitle()` builds the same string for `openGraph.title` | The claim that names the site was hidden; now it is the first thing read, and one heading serves sight and screen readers without a duplicate. One template keeps every page title in one pattern, so a new page only sets its own name. |
| 3.2 | Theme drawer loads with a plain `import()` (idle, at the latest 2 s after load, and on hover, focus or press of the trigger) instead of `next/dynamic`, mounts closed and stays mounted (`DrawerContent` `keepMounted`, opt-in) | `next/dynamic` with `ssr: false` wraps the drawer in `Suspense`; React holds back the reveal for 300 ms after the fallback, so the first open waited about 320 ms with the chunk already loaded. Keeping the closed drawer in the DOM also removes the mount of the whole settings tree from the first frames of the slide. |

> When you make a lasting design decision, add a row: _version · decision · why_.

## 16. Known gaps

- `todos.md`: "Background off" and "Focus mode" are planned.
- Persona/`ThemeMode` is stored but has no visible effect.
- Theme drawer: swatches have a 44 px high hit area but are only about 34 px wide (the 8 px gap limits it). Changes are
  announced
  through a polite live region, not by moving focus.
- Switching to Wireframe changes the font, so text reflows once (about 0.14 layout-shift score on `/`, 0.05 on
  `/selected-works`
  measured with synthetic clicks). The browser metric excludes it after a real click.
- axe (best practice): `region` on the portaled select list and the bottom bar, `list` (separator inside the projects
  `ul`)
  and accent text on dark (`color-contrast`, 3.5–3.8 : 1 for blue and orange on `/selected-works` links). All predate
  this feature.
- Wireframe cursor stays black or white even when the
  visitor picks a color accent.
- Figma variable limits: `color/primary-hover` of the neutral accent aliases `foreground` (CSS mixes 82 % foreground
  into `background`); `color/primary-muted` is a fixed sRGB blend of the accent at 10 % over the Default background
  (CSS: `bg-primary/10`); `color/hover` keeps its light value in dark mode, as `--hover` does in CSS (unused in code).
  Figma stores sRGB, so out-of-gamut accents (violett, orange, blue) are slightly less saturated than in the browser.
  `viewport` `Size/width` and `Size/height` are device frame sizes (1728, 1512, 744, 320), not code tokens, and
  `size/min-width` and `min-width` (300) have no counterpart in `globals.css`.
- Figma text without a style, on purpose: the "UI" glyph of the `uicolors` brand logo (Inter ExtraBold 80), the cover
  title, the moodboard specimens ("Aa", the Patrick Hand line), and the philosophy diagram labels (11.625 px, the
  diagram scales to the column like `diagram-fit`).
- Figma text in the Wireframe mode is always weight 400: Patrick Hand has one weight and the browser synthesizes bold,
  which Figma cannot do, so headings lose their faux bold there. `H4` to `H6` (`typography-h4.tsx` to
  `typography-h6.tsx`) still exist in code, unused; the Figma styles and components are removed.
- Figma does not model the Wireframe sketch shapes, motion (the `motion` variables hold the durations and curves as
  values, but nothing binds to them), the avatar hover scale (drawn as a 106 % size), the canvas snowfall, and the
  non-visual modules (`Animate`, `ScrollToTop`, intro and home copy). The theme, tools and technologies drawers are
  copies of the `drawer` variants, because instances cannot take new children. The theme and appearance selects use
  Lucide icons, the code uses Heroicons solid. Project cards still live only as the older `Project Item` and
  `Project Hero` on `↪ features`.
