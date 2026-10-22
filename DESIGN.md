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

Hierarchy of what a visitor must grasp, in order: **identity → expertise → selected work → technical depth → contact**.

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
`cn()` for variants · Lucide and Heroicons for icons · Storybook for `ui` components · Vercel Analytics + Speed Insights.

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

Body text is `text-muted-foreground`; headings, emphasis and interactive labels are `text-foreground`. This two-step
text hierarchy is deliberate — do not flatten it.

### 4.2 Accent colors

The user can pick the accent color at runtime (`data-theme-color`): **blue** (Default theme start), **violett**,
**orange** and the neutral **foreground** (Wireframe start: black on light, white on dark). A saved legacy `primary`
reads as `violett`. Each color accent defines `-foreground`, `-hover` and `-border` siblings; the neutral accent is
derived from `foreground` and `background`. Adding an accent means adding the full set and mapping it in the three
places in `globals.css` (`:root`, `@media (prefers-color-scheme: dark)`, `@theme inline`). Orange (`oklch(0.58 0.237 31.3)`) with white text
measures 4.8 : 1; every accent passes AA with its foreground text.

### 4.3 Appearance

`light`, `dark` and `system`. Dark mode is applied by the `.theme-appearance-dark` class / `data-theme-appearance`
attribute on `<html>` (custom Tailwind `dark:` variant), not by the media query alone. Dark mode only overrides neutral
tokens (`background`, `foreground`, `muted*`, `border`); accents are shared. Wireframe has its own neutral set for
both appearances (pure white / pure black, gray tone steps).

### 4.4 60 / 30 / 10

- **60 %** `background` — calm foundation.
- **30 %** `muted`, `border` — structure, grouping, hover surfaces.
- **10 %** `primary` — energy. One full-bleed `bg-primary` band per page is the ceiling (see the home statement
  "We compose, direct and oversee", and the hero project on `/projects`).

## 5. Typography

| Role     | Font           | Token / utility |
| -------- | -------------- | --------------- |
| Headline | Outfit         | `font-heading`  |
| Body     | Outfit         | `font-body`     |
| Sketch   | Patrick Hand   | `font-sketch`   |
| Code     | JetBrains Mono | `font-code`     |

- Outfit is loaded through `next/font/google` (`display: swap`, CSS variable `--font-outfit`).
- `font-heading` and `font-body` read the runtime role tokens `--font-role-heading` and `--font-role-body`. Default maps
  both to Outfit; Wireframe maps both to Patrick Hand (`--font-sketch`, weight 400 only, so bold is synthesized). Code
  keeps JetBrains Mono. Patrick Hand is already loaded for the sketch accents, so the switch adds no font request.
- Base text size is `1.125rem` (`--text-base`). The user can scale the whole UI via root font size: small 90 %,
  medium 100 %, large 110 %. **Always size with `rem`/Tailwind classes** so this scaling works.
- Element defaults live in `globals.css` (`@layer base`). Use bare `h1`–`h6`, `p`, `ul`, `ol`, `small`, `b` when
  possible; use the typography components (`H1`–`H6`, `Ul`, `Ol`) when you need props.

| Level           | Size (mobile → desktop)                                                     | Weight   |
| --------------- | --------------------------------------------------------------------------- | -------- |
| Statement       | `text-4xl` → `xs:text-5xl` → `sm:text-7xl`, `leading-[1.1]`, `text-balance` | semibold |
| `h1`            | `text-4xl` → `xs:text-5xl` → `sm:text-6xl`                                  | semibold |
| `h2`            | `text-3xl` → `xs:text-4xl`                                                  | semibold |
| `h3` / `.title` | `text-2xl`                                                                  | semibold |
| Body            | `text-base` (1.125 rem)                                                     | normal   |
| `small`         | `text-sm`, muted                                                            | normal   |

Rules: sentence case everywhere; `text-balance` on large statements; headings are `font-heading`; no more than two
weights on a screen (normal, semibold/bold).

## 6. Layout and spacing

### 6.1 Containers

Use `<Container>` (`ui/container`). Never hand-roll `max-w-*` on page sections.

| `size`               | Width              | Use                                  |
| -------------------- | ------------------ | ------------------------------------ |
| `container-readable` | `40rem` (default)  | Text, lists, most sections           |
| `container`          | `90rem` (+ `px-4`) | Wide grids and galleries             |
| `full-width`         | 100 %              | Full-bleed bands (e.g. primary hero) |
| (panorama token)     | `120rem`           | Large preview imagery on `/projects` |

The reading column is intentionally narrow (40rem by default). A saved setting can widen it (the theme drawer has no control for it since 2026-10-22)
(`data-theme-container-width`: default 40rem, wide 64rem, full 90rem; it overrides `--spacing-container-readable`). It is the signature of the layout: one column, centered,
scannable.

### 6.2 Rhythm

- `main` stacks sections with `space-y-8` (mobile) and `space-y-12` (`sm`+).
- Sections are separated by `<DotsDivider />` (three `primary` dots) or an `hr` (`my-8`).
- Headings: `h3`/`h4` get `mt-8 mb-3`; paragraphs `mb-3`; lists `my-4 space-y-2`.
- Spacing follows the Tailwind 4 px scale (1 unit = 0.25rem). Prefer even steps (2, 3, 4, 6, 8, 12).
- Breakpoints: Tailwind defaults plus `xs: 375px`.
- Page order puts the highest-impact content first and goes deeper toward the bottom.

### 6.3 Z-index

`z-20` content containers · `z-50` header and sticky bars · `z-100` (`z-index-100`) avatar lightbox scrim · `z-max` (250)
drawer panels, popups and lightbox photo. Do not invent other layers.

## 7. Shape

- Base radius token: `--radius` (6px at the default `md` setting); derived `sm`, `md` (clamped at 0), `lg`, `xl` (×1.4), `2xl` (×1.8), `3xl`, `4xl`.
- The visitor sets the radius (`data-theme-radius`: none 0, sm 4px, md 6px, lg 10px). One variable drives every `rounded-*`
  utility, so the whole UI follows live. Default starts at `md`, Wireframe at `none`.
- Interactive controls (buttons, tabs) use `rounded-2xl` and tighten to `rounded-xl` on hover.
- Panels (drawers) use `rounded-2xl`; badges are `rounded-full` (in Wireframe they follow the radius token, `rounded-md`).
- `rounded-theme-*` utilities are plain aliases of `rounded-*` and follow the radius setting in every theme.
- Borders are 1 px, `border` token, solid. Depth comes from borders and surface tone, not shadows.

## 8. Motion

Library: `motion`. Wrapper: `<Animate>` (`ui/animate`).

Motion principles and behavior rules (including "Native CSS first") live in
[UX_PRINCIPLES.md](./UX_PRINCIPLES.md#motion). This section lists the visual specs only.

- Reveal on scroll: `direction` `up | left | right | down | scaleUp`, `once: true`, viewport margin `-100px`. Use
  `direction="up"` for vertical page content, stagger via `delay` (0.16, 0.32, 0.44).
- Reveal motion is a glide, not a spring: 1.8 s, expo-out `cubic-bezier(0.16, 1, 0.3, 1)`, 20 px travel, no overshoot. Opacity finishes earlier (0.75 × duration, `ease`) so content is readable while it settles.
- Page-load entrance utilities: `animate-in-to-top-{ms}` / `animate-in-to-left-{ms}` (1.1 s,
  `cubic-bezier(0.22, 1, 0.36, 1)`, 1.6 rem travel). They run only while animations are on
  (`html[data-theme-animations='on']`) and under `prefers-reduced-motion: no-preference`.
- Drawer (floating bottom sheet and `xl`+ floating side panel): pure slide from its edge, 700 ms `cubic-bezier(0.32, 0.72, 0, 1)`; the backdrop fades with it. No scale or fade on the panel itself: scaling a panel that holds small controls (the close icon) makes them shimmer and jump while it settles. Swipe-to-dismiss keeps its own velocity-based timing.
- Hover/press: `interactive` utility (`transition`, `active:scale-95`); ghost buttons grow a tinted `primary/10` pill
  from `scale-80`.
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
is a new entry plus its token block in `globals.css`. Selecting a theme applies its defaults (accent, animations, radius,
container width); appearance and font size stay. The styles `crazy-color` and `notes` and the Cornell-notes background
were removed.

Rules:

- Wireframe media: every `img` and `svg` (photos, project previews, logos, interface icons) is grayscale
  through one filter rule in `globals.css`. The accent shows only on text, buttons, links and the page-frame crop marks
  (they carry `filter-none`, so a picked accent color shows; the neutral accent keeps them black or white). Never use
  `grayscale-0` or another filter utility on any other image: a utility beats the base rule.
- Structure differs by tokens and `html[data-theme=…]` selectors, not by forking components.
- Wireframe: `--border` is a faint hairline kept only where a control needs an edge (toggle outlines use `foreground`);
  groupings read as tone (`muted`), not lines. Drop shadows are off (`--tw-shadow` is zeroed); focus rings stay.
- Every setting is mirrored to a `data-theme-*` attribute on `<html>` before first paint and on every change; CSS reacts
  in the same frame. Tokens never transition on a theme or setting change.
- Prefer CSS for theme differences (`in-data-[theme=wireframe]:…`, `html[data-theme=…]` selectors). A component may read
  one setting with `useThemeSetting(name)` only when CSS cannot express the difference (for example the intro skips
  typing when animations are off) — keep these minimal.
- Persona/`ThemeMode` (`design` | `dev`) is stored but currently has no visible effect.
- State lives in `feature/theme/theme-store.ts`, outside React. Read one value with `useThemeSetting(name)` (re-renders only
  on that value), setters with `useThemeActions()`. `useTheme()` returns everything and re-renders on any change.

## 10. Components

Architecture: `src/components/{ui,feature}`. See the READMEs in [`ui`](./src/components/ui/README.md) and
[`feature`](./src/components/feature/README.md). One folder per component with `index.ts`, `types.ts` and `stories/`
where applicable. Imports use the `@/` alias and are grouped ui → feature → lib. Pages in `src/app` compose feature and
ui components.

Dependency rule: `feature` consumes `ui`; `ui` never imports from `feature`. ESLint enforces the dependency rule, the
layer order of imports and the feature file prefix (`npm run lint`, `npm run format`).

### UI (`src/components/ui`)

Baseline, domain-free components: `Button`, `Badge`, `Divider`, `Hr`, `Blockquote`, `ExternalLink`,
`Icon*`, `Select` (Base UI listbox: `Button` trigger with chevron, `bg-background` popup with a 1 px border, check mark on the chosen row; options may carry an icon), `Toggle`, `Tooltip`, `DotsDivider`, `Typewriter`, `TypewriterOverlay`, `Animate`, `ButtonGroup`, `Drawer`,
`Dialog`, `Tabs`, `Container` and `PageTemplate` (h1, hero blockquote and content slot used by
inner pages).

- **Button** — `variant` = `{contained|ghost|text|link}-{primary|foreground|muted}` (+ `contained-white`), `size` =
  `tiny | small | medium | large`. Minimum touch target 44 px for `medium`/`large`. The component picks `a`, `Link` or
  `button`, adds the external-link arrow, `rel`, `aria-label` and `title` automatically for `https`, `mailto:`, `tel:`
  and downloads. `prefetch={false}` (internal `href` only) stops Next.js from prefetching a target that is not a
  page, such as `/agent-view`; the prop goes to `Link` and never to the DOM.
- **Tooltip** — Base UI popup, `bg-popover` with a `ring-foreground/10` border, `text-sm`, `rounded-xl`, `z-max`, 150 ms
  opacity fade (`motion-safe:`). Used for `Button` with `iconOnly` + `label`.
- **Badge** — `primary | foreground | muted | white`; `sm | md | lg`; pill-shaped.
- **Divider** — `hr`, `dot`, `three-dotted`.
- **DotsDivider** — `alignment` = `vertical` (default, stacked dots) | `horizontal` (dots in a row); `dots` = `1 | 3`; `animate={false}` turns the bounce off.

### Feature (`src/components/feature`)

Domain and feature components, one folder per feature: `header`, `footer`, `page-navigation-bar`, `page-frame`, `avatar`, `profile-links` (`ButtonGithub`,
`ButtonLinkedin`), `brand`, `tools`, `technologies`, `projects`, `philosophy`, `socials`, `intro`, `theme`
(registry, store, hooks, tokens and settings UI), `typography` (`H2`, `Ul`, `Ol`), `logo` (`Logo*`), `events` (winter
scene), `home` (home page copy), `agent-view` (`AgentViewLink`, markdown builder for `/agent-view`).

File naming: every file in a feature directory is prefixed with the directory name (`tools/tools-data.ts`). Only
`index.ts` is exempt.

- **Avatar** — round photo; `variant` = `default | lightbox`. `lightbox` opens the photo centered on a
  `background/90` scrim (`z-100`, photo at `z-max`) with a 250 ms scale-and-fade, no shadow.

### Agent view

`/agent-view` is a route handler, not a styled page: it returns the home and projects content as raw markdown
(`text/plain`) with no layout, theme, CSS or script. Its text comes from the same content modules as the pages
(`home-content.ts`, `projects-content.ts`, `philosophy-data.ts`, the data files), so a copy edit shows in both.

`AgentViewLink` (`Button` `text-foreground`, `small`: a quiet text button, `hover:text-primary`) is the only entry point. It sits in the footer, centered on its own line directly above the copyright line, at every width and container-width setting; the header has no link. It is `small` on purpose: a standalone link in a dense, non-primary context (rule 5); no other target sits within 24 px of it. The footer no longer shows the framework-version line (Next.js, React, Tailwind CSS) and uses `py-6` / `space-y-4` (was `py-12` / `space-y-6`).

### Variants

Use `cva` + `cn` for variants. Prefer an explicit `variant`/`size` prop over free-form class overrides. `className`
passthrough is for layout (margin, width), not for restyling.

## 11. Imagery and iconography

- Project previews are wide wallpapers (`public/projects/*`), shown unframed; `width`/`height` always set; alt text
  `"<Title> preview image"`. Hero imagery uses `preload`.
- In Wireframe all images and SVGs render grayscale (see §9). Do not rely on hue alone to tell logos apart.
- Logos are SVG components in `feature/logo`; raster fallbacks sit in `feature/logo/img`. Logos must work in dark mode
  (use `currentColor` or provide a dark variant).
- Icons: Lucide for UI icons (`IconLucide`), Heroicons 16/solid for inline arrows. Size via the button (`size-5` at
  medium). Custom conceptual icons (Atomic Design, Flower of Product Engineering, …) are bespoke SVG `ui` components.
- Decorative SVG shapes (`SvgShapes`) are four corner crop marks of the page, desktop-only (`lg:block`), `pointer-events-none`, `z-10`.

### Cursor

The default pointer is replaced by an accent-colored dot (`src/app/cursor.css`, images in generated
`src/app/cursor-tokens.css`). Native CSS cursor images: no JavaScript, no lag. Every image has a 2.5 px ring in the page background color (`background`) inside a
1.5 px accent ring, so the dot looks cut out of the page, including on the `bg-primary` band. Each state changes the **silhouette**,
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

Accent and background are baked into each image (images cannot read CSS variables). One set per accent plus wireframe, each for light and dark (wireframe core: black on light, white on dark).
After changing an accent or `--background` in `globals.css`, update `ACCENTS` / `BACKGROUNDS` in `scripts/generate-cursor-tokens.mjs` and run
`npm run cursors`. Limits: states swap, they do not animate (cursor images cannot transition); OS pointer-size settings
do not apply to custom images.

## 12. Accessibility

- WCAG AA contrast for text in every theme/accent. Check `primary-foreground` on every accent when adding one.
- Visible focus on all interactive elements (do not remove outlines; Base UI/shadcn patterns use `focus-visible:ring`).
- Everything operable by keyboard; overlays trap focus and close on `Esc` (provided by Base UI primitives).
- Semantic landmarks: `header`, `main`, `footer`, `aside`, `section` + headings in order.
- Icon-only controls get `aria-label`; links that open a new tab say so in `aria-label`/`title`.
- Theme setting changes are announced to screen readers through a polite live region (`ThemeSettingsAnnouncer`) inside the drawer.
- Reduced motion honored via `motion-safe:`, `prefers-reduced-motion` and `MotionConfig`.
- Storybook runs `addon-a11y` (`test: 'todo'`); treat reported violations as bugs.

## 13. Dos and don'ts

**Do**

- Use semantic tokens and Tailwind utilities that resolve to them.
- Wrap page sections in `Container`; reveal them with `Animate`.
- Start new UI as a `ui` component with a story when it is reusable.
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
- Put body copy in `text-foreground` — reserve it for emphasis, headings and labels.
- Use `div` + `onClick` for something that navigates or acts; use `Button`/`Link`.
- Style with inline `style` unless a value is genuinely dynamic.

## 14. Rules (enforced in review)

1. New color, radius, font, duration or width ⇒ add a token in `globals.css` first.
2. New accent ⇒ full `-foreground/-hover/-border` set, mapped in all three places, contrast verified.
3. New component ⇒ correct layer (`ui` or `feature`), `index.ts` barrel, typed props, a story for `ui` components, works in wireframe.
4. New page ⇒ `PageTemplate` (or `Container` sections), `metadata` with the `… | Dominik Rubröder, UX Engineer` title
   pattern, `HeroNavigation` entry if it is top-level. Exception: `/agent-view` is a route handler returning plain
   markdown, so it has no `PageTemplate`, `metadata` or `HeroNavigation` entry (no layout, no `<head>`); its link lives in
   the header and footer.
5. Interactive elements ≥ 44 px (`medium`+) on touch layouts; `tiny`/`small` only inside dense, non-primary contexts.
6. Run `npm run format` (Prettier incl. Tailwind class sorting) and `npm run lint` before committing.
7. Every visual decision of lasting effect gets a line in the decision log below.

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

| 3.0.6 | Three-dotted divider dots bounce one after another, infinite | Small living punctuation between statements; sequential so it reads as a rhythm, not a flash. |
| 3.0.6 | Avatar `lightbox` variant: zoom to centered round photo on a flat scrim | Lets visitors see the person behind the portfolio; no frame, shadow or caption added. |
| 3.0.6 | Philosophy core "UI" center pulses (`animate-core-pulse`, scale 1 → 1.12 → 0.96, 2.1 s loop) | Same rhythm as the three-dot divider; the shared center of the diagram reads as the living part. |
| 3.0.6 | Icon-only buttons use `iconOnly` + `label`: accessible name and `Tooltip` text, no native `title` | Native `title` is unreachable by keyboard and touch; one source for name and explanation. |
| 3.0.6 | Components split into `ui` (baseline, domain-free) and `feature` (domain-specific); `feature` consumes `ui`, never the reverse | Replaces the four Atomic Design layers. Clear ownership: a feature keeps all its parts in one folder; `ui` stays reusable. |
| 3.0.6 | `PageNavigationBar` feature: the sticky bottom bar on every page; on `/projects` the "Selected work" button cross-fades to "Home" (300 ms, `cubic-bezier(0.22, 1, 0.36, 1)`, 0.75rem horizontal slide, no vertical movement) | One bar, one primary action that always points to the other half of the site; the leaving button leaves the flow, so the bar fits the visible button and reserves no space for the other. |
| 3.0.6 | `DotsDivider` (`ui`) extracted from `Divider variant="three-dotted"`; used on home and between projects on `/projects` instead of `hr`; `dots={1}` renders the single dot with a hover target; three dots always use the same fixed wave, only the single dot takes a `delay` | Identical to the home dividers (vertical stack, sequential bounce): one punctuation mark across the site. |
| 3.0.6 | `DotsDivider` gets an `alignment` prop (`vertical` default, `horizontal`); `animate={false}` opts out of the bounce | Same punctuation fits inline contexts (rows, meta lines) without a second component; static variant for places where motion would distract. |
| 3.0.6 | `Animate` reveals use a 1.8 s expo-out glide with 20 px travel instead of a bouncy spring; opacity runs shorter than travel | Spring overshoot and a hard-stopping 24 px slide felt jittery; a long soft tail and less distance read as smooth. |
| 3.0.6 | `Drawer` enters like the `Sidebar`: 300 ms `ease-in-out`, slide + scale 0.95 → 1 + opacity 0.75 → 1 | Two side panels, one entrance. Replaces the 450 ms custom curve on the drawer. |
| 3.0.6 | Drawer bottom sheet (mobile) slides in 700 ms with `cubic-bezier(0.32, 0.72, 0, 1)`, without scale or fade; height is no longer transitioned | Scaling and fading a full-width sheet looked jittery, and animating `height` re-lays out every frame. A plain long slide reads smooth. |
| 3.0.6 | Drawer side panel (`xl`+) slides without scale or fade, like the bottom sheet | The 0.95 → 1 scale made the close button jiggle while opening; a pure slide keeps every control on whole pixels. |
| 3.0.6 | `Drawer` floats: `--drawer-inset` (0.75 rem, 1 rem from `sm`) offsets it from the viewport edges on all open sides; rounded `2xl` (`rounded-theme-2xl`, square in wireframe), full 1 px border, no edge bleed | A detached card reads as a layer above the page, matching the rounded controls; the offset keeps the page visible around it. |
| 3.0.6 | Decorative `SvgShapes` become crop marks in the four corners of `main` (accent color, static, `lg`+; wireframe background uses `xl`+) | Quiet drafting frame that fits the design-and-code story; replaces the scattered shapes and keeps the reading column clear. |
| 3.0.6 | Home page gets a visually hidden `h1` ("Design and code speak the same language", `sr-only`); the big statements stay `div`s | The page needs one `h1` for SEO and screen readers; the statement sequence keeps its look without becoming a heading outline. |
| 3.0.6 | Custom cursor: accent dot with paper ring and accent outer ring, native CSS images, shape morphs per state (grow on clickable, shrink on press, rounded bar-rectangle at 60 % when disabled) | Brand-colored pointer (accent core and outer ring, page-background ring between) that stays legible on every surface. Native images avoid a JS follower: no lag, no hydration, no extra motion. Shape carries state, not color. |
| 3.0.6 | Philosophy tab panels share one grid cell (`col-start-1 row-start-1`) | Base UI keeps the leaving panel mounted for a frame; stacked panels doubled the height, pushed the tab list down 400 px and shifted scroll. One cell keeps layout and scroll still. |
| 3.0.6 | Themes come from one registry (`theme-definitions.ts`): id, label and defaults for accent, animations, radius and container width; selecting a theme applies its defaults, appearance and font size stay | A new theme is one entry, not scattered `if (theme === …)` branches; a switch always starts from a known state. |
| 3.0.6 | Every theme setting is mirrored to a `data-theme-*` attribute on `<html>` (theme, appearance, color, font size, radius, container width, animations); state lives in an external store, not a React context | CSS restyles the page in the same frame and only the control that shows a setting re-renders; the page tree never re-renders on a switch. |
| 3.0.6 | Wireframe is a black-and-white theme: gray tone steps instead of lines, faint `--border`, no shadows, square corners, neutral accent (`foreground`) with optional color accents; the old full-contrast tokens (text = headings, borders = foreground) are gone | "Non-border" structure that keeps the two-step text hierarchy; contrast stays AA. |
| 3.0.6 | Animations are one switch (`data-theme-animations`) that works in every theme; Wireframe starts off; off shows reveal content at once via CSS, skips the intro and mounts no snowfall | Static by default but never locked: the visitor can turn motion on on purpose. CSS is the source of truth, JS is the fallback. |
| 3.0.6 | Radius (none, small, medium, large) and container width (default, wide, full) are visitor settings in every theme; radius drives `--radius`, width overrides `--spacing-container-readable` | Personal control without per-component work: one variable each. |
| 3.0.6 | Header gets a theme settings trigger; the panel is titled "Theme settings" and loads on first open (now a drawer, see below) | Settings are one click from anywhere; pages that never open them pay no script cost. |
| 3.0.6 | Accent control gains a neutral swatch; `crazy-color`, `notes` and the Cornell-notes background are removed; the Border placeholder section becomes "Shape" | Black and white is a real choice; no dead theme styles or placeholder controls. |
| 3.0.6 | Theme settings open in the site's `Drawer` (bottom sheet below `xl`, side panel from `xl`, standard scrim); the custom `Sidebar` is removed | One panel pattern. Base UI supplies focus trap, focus return, `Esc` and inert background that the sidebar lacked. |
| 3.0.6 | Appearance (light, dark, auto) lives in the theme drawer only; the header shows the settings trigger first, then the blue, violett and orange swatches (from `sm`); the neutral swatch is drawer-only | Quiet header; neutral is a theme default, not a quick pick. |
| 3.0.6 | `Select` is rebuilt on the Base UI select with the same look; values are option keys, options can carry an icon | Listbox roles, arrow keys, typeahead and `Esc` for free; one dropdown implementation. |
| 3.0.6 | Drawer groups: Base, Typography, Animation, Border (radius); the "Layout" group (container width) is gone from the drawer, the stored setting still applies | Settings are named by what they change; the reading width is no longer a visitor control. |
| 3.0.6 | Wireframe is a "Sketch-based UI": Patrick Hand for headings and body, every image and SVG grayscale (one CSS filter rule), Default described as "Intense accent UI" (the description line in the theme select was removed again on 2026-10-22) | The theme reads as a sketch, not only as black and white; the accent stays on text, buttons and links. All CSS and registry data, no new client code. |
| 3.0.6 | Orange accent darkened to `oklch(0.58 0.237 31.3)` (hover 0.555, border 0.52) | White text on the old orange measured 3.85 : 1; the darker value reaches 4.8 : 1 and keeps the hue. |
| 3.0.6 | Agent view: `/agent-view` is a route handler returning raw markdown (`text/plain`), not a styled page; entry link is a `text-foreground` small button, centered in the footer above the © line (the earlier header link and its width thresholds are gone); footer drops the framework-version line and gets `py-6` | No theme, CSS or script can reach it, so it stays plain by construction. Page copy lives in shared content modules, so pages and agent view cannot drift. |
| 3.0.6 | Drawer swatches and the animation switch get a 44 px hit area (transparent `::after`, `min-h-11`) | Touch target without changing the look. |
| 3.0.6 | Wireframe page frame gets a hand-drawn `foreground` border (`.sketch-frame`: uneven small rem radii, `lg`+, Wireframe only); the avatar photo gets a `foreground` border in Wireframe | The sketch look reaches the frame and the avatar; the faint Wireframe `--border` hid the avatar ring. CSS only. |
| 3.0.6 | Select options can carry a "Default" tag (`isDefault`); the radius select marks the active theme's default; toggle knob is `background` colored when enabled in Wireframe; drawer group boxes use `rounded-xl` (the old class was invalid, so they were square) | The visitor sees what resetting would give; one prop, registry driven. |
| 3.0.6 | Wireframe crop marks are drawn as one uneven 2.5 px pencil stroke that overshoots the corner, instead of the 7 px round-capped corner | Matches the hand-drawn `.sketch-frame`; the clean marker line looked digital next to it. SVG paths toggled by `in-data-[theme=wireframe]`, no JS. |
| 3.0.6 | Wireframe crop marks keep the picked accent color (`filter-none` on the `CropMark` svg, exempt from the grayscale rule) | The corner marks are the one decorative graphic that carries the visitor's accent in Wireframe; with the neutral accent they stay black or white. |
| 3.0.6 | Philosophy core: the petal bloom (JS) follows the animations switch like the "UI" pulse (CSS); off shows all circles at once | Wireframe starts with animations off; the bloom ignored the switch and still moved. |
| 3.0.6 | The core pulse token is `--core-pulse-animation` (not `--animate-core-pulse`); in Wireframe an enabled `Toggle` shows the accent on the knob (`primary` fill and border) while the track stays `background` with a `foreground` outline | A `--animate-*` theme variable makes Tailwind emit an ungated `animate-core-pulse` utility that beat the gated one, so the pulse ran with animations off. The enabled toggle was indistinguishable from the idle one besides the knob side. |

> When you make a lasting design decision, add a row: _version · decision · why_.

## 16. Known gaps

- `todos.md`: "Background off" and "Focus mode" are planned.
- Persona/`ThemeMode` is stored but has no visible effect.
- Theme drawer: swatches have a 44 px high hit area but are only about 34 px wide (the 8 px gap limits it). Changes are announced
  through a polite live region, not by moving focus.
- Switching to Wireframe changes the font, so text reflows once (about 0.14 layout-shift score on `/`, 0.05 on `/projects`
  measured with synthetic clicks). The browser metric excludes it after a real click.
- axe (best practice): `region` on the portaled select list and the bottom bar, `list` (separator inside the projects `ul`)
  and accent text on dark (`color-contrast`, 3.5–3.8 : 1 for blue and orange on `/projects` links). All predate this feature.
- Wireframe cursor stays black or white even when the
  visitor picks a color accent.
