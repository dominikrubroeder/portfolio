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

### 1.1 Core design principles

Six principles sit above every rule in this file. Apply all six to each UI you design or generate, as a human or as an
agent. They come from one data module (`feature/design-principles`) that the home page, `/agent-view`,
`/api/introduction` and the inline term hints read, so the words never differ. The visual principles in §2 and the
behavior principles in [UX_PRINCIPLES.md](./UX_PRINCIPLES.md) follow from them.

| #   | Principle                  | What it asks                                                                                   | In this portfolio                                                                                                                         |
| --- | -------------------------- | ---------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| 1   | **Design in context**      | Of the environment, of the people, of the brand                                                | Environment: OS color scheme, reduced motion, font size, viewport, touch. People: keyboard, screen reader, agents. Brand: tokens, themes. |
| 2   | **Design in system**       | Streamline processes, principles, components as close as possible for one ecosystem            | `ui` + `feature` split, tokens first, one source per copy, code, docs and Figma kept in step. Same pattern, same behavior.                |
| 3   | **Design problem-focused** | Know the problem you are solving: the root problem, not its symptoms                           | State the problem before the UI. Fix a cause once (a token, a component) instead of overriding each symptom.                              |
| 4   | **Design business-aware**  | Cover the business cases of the company and its users, so design rests on an economic ground   | The page serves a goal: show the value of a UX engineer and give access to my resume.                                                     |
| 5   | **Design sustainable**     | Make maintainable systems that are documented, upgradeable, durable and efficient              | DESIGN.md and the decision log, registries, semantic HTML, native CSS first, lazy chunks, no dead code.                                   |
| 6   | **Design the experience**  | Make it enjoyable, with a satisfying, pleasurable ease of use; think of the product as a whole | One next step per view, instant feedback, short playful moments that never block, one journey from first load to contact.                 |

Check before you call a UI done: which problem does it solve (3), for whom and where (1), does it reuse the system (2),
does it serve the goal (4), will it stay maintainable (5), and does the whole journey feel good (6)?

## 2. Principles

Visual principles. They apply the core design principles in §1.1 to the look of the UI.

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

| Token                                | Role                                                                                     |
| ------------------------------------ | ---------------------------------------------------------------------------------------- |
| `background` / `foreground`          | Page surface and primary text                                                            |
| `primary` / `primary-foreground`     | Accent: CTAs, links on hover, active states, dividers                                    |
| `primary-hover`, `primary-border`    | Interaction states of the accent                                                         |
| `primary-text`, `primary-text-hover` | The accent as text on `background` (text buttons, links, badges); AA in every appearance |
| `muted` / `muted-foreground`         | Secondary surfaces and body/supporting text                                              |
| `muted-hover`, `hover`               | Hover surfaces                                                                           |
| `border`                             | All borders and `hr` (set globally on `*`)                                               |
| `popover` / `popover-foreground`     | Drawers, dialogs, floating surfaces                                                      |
| `signal-yellow`                      | Rare highlight (event/attention moments)                                                 |

Neutral token values (`globals.css`). Dark overrides only the tokens that change; `hover` keeps its light value in dark
mode. Wireframe has its own set for both appearances.

| Token                              | Light                      | Dark                       | Wireframe light   | Wireframe dark    |
| ---------------------------------- | -------------------------- | -------------------------- | ----------------- | ----------------- |
| `--black`                          | `oklch(0 0 0)`             | same                       | same              | same              |
| `--white`                          | `oklch(1 0 0)`             | same                       | same              | same              |
| `--background`                     | `oklch(1 0 0)`             | `oklch(0.193 0 0)`         | `oklch(1 0 0)`    | `oklch(0 0 0)`    |
| `--foreground`                     | `oklch(0.301 0 0)`         | `var(--white)`             | `oklch(0 0 0)`    | `oklch(1 0 0)`    |
| `--muted`                          | `oklch(0.963 0.007 286.3)` | `oklch(0.28 0 0)`          | `oklch(0.96 0 0)` | `oklch(0.18 0 0)` |
| `--muted-foreground`               | `oklch(0.539 0.008 286.1)` | `oklch(0.711 0.006 286.2)` | `oklch(0.4 0 0)`  | `oklch(0.75 0 0)` |
| `--muted-hover`                    | `oklch(0.936 0.011 286.2)` | `oklch(0.341 0 0)`         | `oklch(0.92 0 0)` | `oklch(0.24 0 0)` |
| `--hover`                          | `oklch(0.963 0.007 286.3)` | unchanged                  | `oklch(0.96 0 0)` | `oklch(0.18 0 0)` |
| `--border`                         | `oklch(0.939 0 0)`         | `oklch(0.259 0 0)`         | `oklch(0.88 0 0)` | `oklch(0.28 0 0)` |
| `--popover`                        | `var(--background)`        | same                       | same              | same              |
| `--popover-foreground`             | `var(--foreground)`        | same                       | same              | same              |
| `--color-signal-yellow`            | `var(--color-yellow-300)`  | same                       | same              | same              |
| `--color-signal-yellow-foreground` | `var(--foreground)`        | same                       | same              | same              |

Body text is `text-foreground` (set once on `<body>`); `text-muted-foreground` marks secondary text: `small`, captions,
roles, descriptions and the `muted` variants of controls. The hierarchy is deliberate — do not flatten it by
coloring everything muted.

### 4.2 Accent colors

The user can pick the accent color at runtime (`data-theme-color`): **blue** (Default theme start), **violett**,
**orange** and the neutral **foreground** (Wireframe start: black on light, white on dark). A saved legacy `primary`
reads as `violett`. Each color accent defines `-foreground`, `-hover`, `-border` and `-text` siblings; the neutral
accent is
derived from `foreground` and `background`. Adding an accent means adding the full set and mapping it in the three
places in `globals.css` (`:root`, `@media (prefers-color-scheme: dark)`, `@theme inline`). Orange
(`oklch(0.58 0.237 31.3)`) with white text
measures 4.8 : 1; every accent passes AA with its foreground text.

`-text` is the accent used as text on `background`. In light it equals the accent. In dark it is the same hue, lighter,
because the accents themselves measure only 3.3–3.8 : 1 on the dark surface: `blue` `oklch(0.7 0.196 262.9)`,
`violett` `oklch(0.7 0.202 285.9)`, `orange` `oklch(0.7 0.19 31.3)` (6.2 : 1 or more on `background`, 4.9 : 1 or more
on `muted`). The neutral accent uses `foreground`. `primary-text-hover` is `primary-hover` in light and 20 % `white`
mixed in for dark, so a hover brightens on dark and darkens on light. Use `text-primary-text`, never `text-primary`,
for accent text on `background`; `text-primary` stays for text on white fills such as `contained-white`.

| Accent                               | `--{name}`                 | `-foreground`       | `-hover`                                                        | `-border`                |
| ------------------------------------ | -------------------------- | ------------------- | --------------------------------------------------------------- | ------------------------ |
| `primary` (`:root` fallback, legacy) | `oklch(0.582 0.231 288.6)` | `oklch(1 0 0)`      | `oklch(0.526 0.261 284.4)`                                      | `oklch(0.472 0.285 277)` |
| `blue`                               | `oklch(0.546 0.245 262.9)` | `oklch(1 0 0)`      | `oklch(0.546 0.245 262.9)`                                      | `oklch(0.496 0.245 263)` |
| `violett`                            | `oklch(0.543 0.252 285.9)` | `oklch(1 0 0)`      | `oklch(0.51 0.269 282.7)`                                       | `oklch(0.483 0.281 279)` |
| `orange`                             | `oklch(0.58 0.237 31.3)`   | `oklch(1 0 0)`      | `oklch(0.555 0.234 31)`                                         | `oklch(0.52 0.219 31.1)` |
| `foreground` (neutral)               | `var(--foreground)`        | `var(--background)` | `color-mix(in oklch, var(--foreground) 82%, var(--background))` | `var(--foreground)`      |

`data-theme-color` remaps `--primary`, `--primary-foreground`, `--primary-hover` and `--primary-text` to the picked
accent (`--primary-border`
only for the neutral one). Tailwind aliases (`@theme inline`): `--color-primary`, `--color-blue`, `--color-violett`,
`--color-orange`, each with `-foreground` and `-hover`, plus `--color-primary-text` and `--color-primary-text-hover`.

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

| Token                   | Value                                                     |
| ----------------------- | --------------------------------------------------------- |
| `--font-outfit`         | `'Outfit'`                                                |
| `--font-patrick-hand`   | `'Patrick Hand'`                                          |
| `--font-jetbrains-mono` | `'JetBrains Mono'`                                        |
| `--font-headline`       | `'Outfit'`                                                |
| `--font-body`           | `'Outfit'`                                                |
| `--font-sketch`         | `var(--font-patrick-hand), 'Patrick Hand', cursive`       |
| `--font-code`           | `var(--font-jetbrains-mono), 'JetBrains Mono', monospace` |
| `--font-role-heading`   | `var(--font-outfit)` (Wireframe: `var(--font-sketch)`)    |
| `--font-role-body`      | `var(--font-outfit)` (Wireframe: `var(--font-sketch)`)    |
| `--text-base`           | `1.125rem`                                                |

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
| Statement       | `text-statement`: fluid `clamp(2rem, (100vw − 2.5rem) / 7.6, 4.5rem)`, fixed `4.5rem` from `sm`; `leading-[1]`, `text-balance` | semibold |
| `h1`            | fluid `clamp(2rem, (100vw − 2.5rem) / 7.6, 3.75rem)`                                                                           | semibold |
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
| `container-readable` | `40rem` (default)  | Text, lists, most sections (+ `px-4`)      |
| `container`          | `90rem` (+ `px-4`) | Wide grids and galleries                   |
| `full-width`         | 100 %              | Full-bleed bands (e.g. primary hero)       |
| (panorama token)     | `82rem`            | Large preview imagery on `/selected-works` |

| Token                          | Value    | Note                                                 |
| ------------------------------ | -------- | ---------------------------------------------------- |
| `--spacing-container`          | `90rem`  | `@theme`: `container` size                           |
| `--spacing-container-readable` | `40rem`  | `@theme`: reading column; `wide` 64rem, `full` 90rem |
| `--spacing-container-panorama` | `82rem`  | `@theme`: panorama imagery                           |
| `--container`                  | `108rem` | `:root` runtime token                                |
| `--container-readable`         | `44rem`  | `:root` runtime token                                |
| `--container-panorama`         | `120rem` | `:root` runtime token                                |
| `--breakpoint-xs`              | `375px`  | added to the Tailwind breakpoints                    |

The reading column is intentionally narrow (40rem by default). A saved setting can widen it (the theme drawer has no
control for it since 2026-10-22)
(`data-theme-container-width`: default 40rem, wide 64rem, full 90rem; it overrides `--spacing-container-readable`). It
is the signature of the layout: one column, centered,
scannable.

### 6.2 Rhythm

- `main` stacks sections with `space-y-8` (mobile) and `space-y-12` (`sm`+). Its top padding is `pt-3` (12 px) on mobile
  and `pt-8` (32 px) from `sm`; its bottom padding is `pb-8` (32 px) on mobile and `pb-12` (48 px) from `sm`, the same
  step as the gap between sections, so the last section never sits tight against the footer.
- Sections are separated by `<DotsDivider />` (three `primary` dots) or an `hr` (`my-8`).
- Headings: `h3`/`h4` get `mt-8 mb-3`; paragraphs `mb-3`; lists `my-4 space-y-2`.
- Spacing follows the Tailwind 4 px scale (1 unit = 0.25rem). Prefer even steps (2, 3, 4, 6, 8, 12).
- Breakpoints: Tailwind defaults plus `xs: 375px`.
- Page order puts the highest-impact content first and goes deeper toward the bottom.

### 6.3 Z-index

`z-20` content containers · `z-50` header · `z-100` (`z-index-100`) typewriter overlay and selected
works hero band · `z-max` (1000)
drawer panels and popups. Do not invent other layers.

| Token           | Value  |
| --------------- | ------ |
| `--z-index-100` | `100`  |
| `--z-index-max` | `1000` |

## 7. Shape

- Base radius token: `--radius` (6px at the default `md` setting); derived `sm`, `md` (clamped at 0), `lg`, `xl` (×1.4),
  `2xl` (×1.8), `3xl` (×2.2), `4xl` (×2.6), `5xl` (×4.4).
- The visitor sets the radius (`data-theme-radius`: none 0, sm 4px, md 6px, lg 10px). One variable drives every
  `rounded-*`
  utility, so the whole UI follows live. Default starts at `md`, Wireframe at `none`. In Wireframe the setting scales
  the uneven sketch corners (`--sketch-scale`: none 1, small 1.4, medium 1.8, large 2.4) instead of a plain radius, so
  the hand-drawn shape stays at every step.
  | Token | Formula | At `md` (6px) | `none` | `sm` (4px) | `lg` (10px) |
  |----------------|---------------------------------|---------------|--------|------------|-------------|
  | `--radius` | setting value | 6px | 0px | 4px | 10px |
  | `--radius-sm` | `max(0px, var(--radius) - 4px)` | 2px | 0px | 0px | 6px |
  | `--radius-md` | `max(0px, var(--radius) - 2px)` | 4px | 0px | 2px | 8px |
  | `--radius-lg` | `var(--radius)` | 6px | 0px | 4px | 10px |
  | `--radius-xl` | `var(--radius) * 1.4` | 8.4px | 0px | 5.6px | 14px |
  | `--radius-2xl` | `var(--radius) * 1.8` | 10.8px | 0px | 7.2px | 18px |
  | `--radius-3xl` | `var(--radius) * 2.2` | 13.2px | 0px | 8.8px | 22px |
  | `--radius-4xl` | `var(--radius) * 2.6` | 15.6px | 0px | 10.4px | 26px |
  | `--radius-5xl` | `var(--radius) * 4.4` | 26.4px | 0px | 17.6px | 44px |

- Interactive controls (buttons, tabs) use `rounded-2xl` and tighten to `rounded-xl` on hover.
- Panels (drawers) use `rounded-5xl` (the largest radius token, 4.4 × `--radius`); badges are `rounded-full` (in
  Wireframe they follow the radius token, `rounded-md`).
- `rounded-theme-*` utilities are plain aliases of `rounded-*` and follow the radius setting in every theme.
- Borders are 1 px, `border` token, solid. Depth comes from borders and surface tone, not shadows.

## 8. Motion

Library: `motion`. Wrapper: `<Animate>` (`ui/animate`).

Motion principles and behavior rules (including "Native CSS first") live in
[UX_PRINCIPLES.md](./UX_PRINCIPLES.md#motion). This section lists the visual specs only.

| Token                    | Value                                              | Use                                  |
| ------------------------ | -------------------------------------------------- | ------------------------------------ |
| `--animate-to-left`      | `to-left 1.1s cubic-bezier(0.22, 1, 0.36, 1) both` | Entrance, `translateX(1.6rem)` → 0   |
| `--animate-to-top`       | `to-top 1.1s cubic-bezier(0.22, 1, 0.36, 1) both`  | Entrance, `translateY(1.6rem)` → 0   |
| `--animate-dot-bounce`   | `dot-bounce 2.1s ease-in-out infinite`             | Three-dot divider                    |
| `--core-pulse-animation` | `core-pulse 2.1s ease-in-out infinite`             | Philosophy "UI" core (1100 ms delay) |
| `--transition-duration`  | `300ms`                                            | Hover and press transitions          |
| `--ease-interactive`     | `cubic-bezier(0.22, 1, 0.36, 1)`                   | `Button` and ghost pill easing       |

Keyframes: `to-left`, `to-top` (opacity 0 → 1 with the translate), `dot-bounce` (25 %: `translateY(-0.3rem) scale(1.3)`,
55 %: `scale(0.85)`), `core-pulse` (25 %: `scale(1.12)`, 55 %: `scale(0.96)`).

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
  stops `motion` from running. One base rule (`html[data-theme-animations='off']` on `*`, `::before`, `::after`) zeroes
  `transition-duration` and `transition-delay` with `!important`, so every hover, press and focus change (buttons, the
  ghost pill, links, tabs, brand rows, avatar) and the overlay slides land in one frame; a component needs no gate of
  its own.
- `<MotionConfig reducedMotion="user">` wraps every reveal. Never bypass it.
- Intro overlay (`TypewriterOverlay`): a full-viewport `background` layer at `z-100` above a page that is already
  rendered. It is skipped with reduced motion, with animations off and without scripting (`[data-intro-cover]` is hidden
  by CSS before first paint), and any key or pointer press dismisses it. `AnimateHold` keeps viewport reveals back while
  it plays, so they still glide in afterwards. Length is unchanged. The agent switch `NEXT_PUBLIC_AGENT_MODE="true"` (in
  `.env.local`) forces animations off before first paint (the animations-off rule above): no intro and no cover, and
  scroll reveals show their final state at once.

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

Wireframe sketch tokens (`:root[data-theme='wireframe']`). The rem-based ones scale with `--sketch-scale`: none 1, small
1.4, medium 1.8, large 2.4.

| Token                            | Value                                                                           |
| -------------------------------- | ------------------------------------------------------------------------------- |
| `--sketch-scale`                 | `1`                                                                             |
| `--sketch-frame-radius`          | `1.5rem 0.25rem 1.25rem 0.25rem / 0.25rem 1.25rem 0.25rem 1.5rem`, each × scale |
| `--sketch-button-radius`         | `0.9rem 0.25rem 0.8rem 0.3rem / 0.3rem 0.8rem 0.25rem 0.9rem`, each × scale     |
| `--sketch-button-outline-radius` | `0.3rem 0.85rem 0.25rem 0.9rem / 0.85rem 0.25rem 0.9rem 0.3rem`, each × scale   |
| `--sketch-blob-radius`           | `52% 48% 55% 45% / 48% 54% 46% 52%`                                             |
| `--sketch-blob-outline-radius`   | `46% 54% 47% 53% / 55% 45% 53% 47%`                                             |
| `--sketch-pill-radius`           | `2.1rem 1.9rem 2rem 1.8rem / 2rem 2.1rem 1.8rem 2rem`                           |
| `--sketch-pill-outline-radius`   | `1.8rem 2.1rem 1.9rem 2.1rem / 2.1rem 1.8rem 2.1rem 1.9rem`                     |
| `--sketch-knob-radius`           | `60% 40% 56% 44% / 44% 58% 42% 56%`                                             |
| `--sketch-hr-line`               | SVG mask: uneven pencil line plus a thin echo, stretches horizontally           |
| `--sketch-quote-bar`             | SVG mask: uneven double pencil stroke, stretches vertically                     |

Rules:

- Wireframe media: every `img` and `svg` (photos, project previews, logos, interface icons) is grayscale
  while the accent is the neutral one (the Wireframe start), through one filter rule in `globals.css`. A picked color
  accent (blue, violett, orange) turns the filter off, so media show their colors. The accent shows on text, buttons
  and links. Never use
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
- Switching to or from Wireframe changes the font (Outfit ↔ Patrick Hand), so text reflows once. This is accepted by
  design: the reflow is the theme change itself, both fonts are already loaded (no late swap), and the browser's
  layout-shift metric ignores shifts after a real click. Synthetic clicks in tests measure about 0.14 on `/` and 0.05 on
  `/selected-works`; that is a test artifact, not a visitor cost.
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
`Icon*`, `Term`, `Menu` (Base UI menu: `Button` trigger, `bg-background` popup with a 1 px border like `Select`, rows
are links
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
  opacity fade (`motion-safe:`). In Wireframe it takes the sketch box: `--sketch-button-radius` and a 1.5 px
  `foreground` border instead of the ring, text in Patrick Hand. Used for `Button` with `iconOnly` + `label`. The text
  is an action: a verb plus its
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
  Applied to contained and ghost-hover buttons, the active tab, toggle track and knob, color swatches, the avatar photo,
  the `DotsDivider`
  dots, the typewriter frame, the drawer panel (2 px), the theme setting groups and the tools and technologies drawer
  groups (1.5 px), the `Select`, `Menu` and `Tooltip` popups (1.5 px, `Select` and `Menu` rows with uneven corners), the
  `text-*` button hover
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
- **Term** — inline word that carries an explanation: a round dotted `primary` underline and a `Tooltip` with the hint
  on hover, focus or click. The dots are a repeating `radial-gradient` tile (about 3 px circles, 6 px pitch, 0.34 × 0.17
  rem,
  `background-repeat: round` so the row ends on a whole dot, `var(--primary)`), not `text-decoration: dotted`, which
  draws square dots in some browsers.
  This is the one sanctioned use of a gradient: it draws dots, it is not a color wash. The dotted accent line marks
  "more here" without looking like a link (links are solid, on hover). Follows the accent in every theme (neutral in
  Wireframe). In Wireframe the dots become the pencil underline (`--sketch-hr-line` mask on an `after:` element,
  `bg-primary`, like the `text-*` button hover); the label does not wrap, so one stroke sits under the whole word.
- **Divider** — `hr`, `dot`, `three-dotted`.
- **DotsDivider** — `alignment` = `vertical` (default, stacked dots) | `horizontal` (dots in a row); `dots` = `1 | 3`;
  `animate={false}` turns the bounce off.

### Feature (`src/components/feature`)

Domain and feature components, one folder per feature: `header`, `footer`, `page-navigation-bar`,
`avatar`, `profile-links` (`ButtonFigma`, `ButtonGithub`,
`ButtonLinkedin`), `brand`, `tools`, `technologies`, `selected-works`, `philosophy`, `socials`, `intro`, `theme`
(registry, store, hooks, tokens and settings UI), `typography` (`H2`, `Ul`, `Ol`), `logo` (`Logo*`), `events` (winter
scene), `design-principles` (the six core design principles as data), `introduction` (introduction page copy, statements
with optional paragraphs via `IntroductionStatementParagraphs` and the `/api/introduction` JSON builder), `agent-view`
(`AgentViewLink`, markdown builder for `/agent-view`).

File naming: every file in a feature directory is prefixed with the directory name (`tools/tools-data.ts`). Only
`index.ts` is exempt.

- **Avatar** — round photo with a 2 px border (`foreground` in Wireframe, where the photo is a hand-cut blob,
  `--sketch-blob-radius`, instead of a circle); `as` = `Link` (header, links to the
  introduction) | `Image`.

### Agent view

`/agent-view` is a route handler, not a styled page: it returns the introduction and selected works content as raw
markdown (`text/plain`) with no layout, theme, CSS or script. Its text comes from the same content modules as the pages
(`introduction-content.ts`, `projects-content.ts`, `philosophy-data.ts`, the data files), so a copy edit shows in both.

`AgentViewLink` (`Button` `ghost-foreground`, `small`: a quiet ghost button, the tinted pill grows on hover like the
icon links in the navigation bar) is the only entry
point. It sits in the footer, centered on its own line directly above the copyright line, at every width and
container-width setting; the header has no link. It is `small` on purpose: a standalone link in a dense, non-primary
context (rule 5); no other target sits within 24 px of it. The footer has no "Résumé" menu (removed; the home
navigation bar links the PDF). The footer no longer shows the framework-version line (Next.js, React, Tailwind CSS) and
uses `pb-6` / `space-y-4` (was `py-12` / `space-y-6`; the top padding is gone, the `main` bottom padding is the only gap
above it).

### Content API

`/api/introduction` and `/api/selected-works` are route handlers that return the page content as JSON, named like the
pages. They have no layout, theme or script. `buildIntroductionApi` (`feature/introduction`) and `buildSelectedWorksApi`
(`feature/selected-works`) read the same content modules as the pages and `/agent-view`, so a copy edit shows
everywhere. React nodes (logos) stay out; preview images become absolute URLs.

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
each for light and dark (wireframe core with the neutral accent: black on light, white on dark). A picked color accent
in Wireframe keeps its own cursor; on dark it sits on Wireframe's pure black ring, so the generator adds a block per
color accent for that case.
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
4. New page ⇒ `PageTemplate` (or `Container` sections), `metadata` with a plain page `title` (the root layout template
   adds `… | Portfolio, Dominik Rubröder`; `openGraph.title` uses `seoTitle()`),
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

Newest last. Derived from release history (`Release UI x.y.z`) and the current code. Each Decision and Why cell stays
within 3 lines; detail belongs in the sections above.

| When / version   | Decision                                                                                                                                                                                                                                                      | Why                                                                                                                           |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| Early            | Atomic Design architecture; replaced in 3.0.6 by the `ui` / `feature` split (`feature` consumes `ui`, never the reverse)                                                                                                                                      | Make the portfolio show system thinking. One folder holds all parts of a feature; `ui` stays reusable.                        |
| Early            | Next.js 15 → 16, `framer-motion` → `motion`                                                                                                                                                                                                                   | Stay current; smaller, maintained animation package.                                                                          |
| UI2              | Single narrow reading column as default layout (now 40rem)                                                                                                                                                                                                    | Readability and a calm rhythm; wide layouts only where imagery needs it.                                                      |
| UI2              | Outfit as the one UI typeface; Patrick Hand for sketch accents; JetBrains Mono for code                                                                                                                                                                       | One geometric family keeps hierarchy in size and weight; handwriting adds personality.                                        |
| UI2              | OKLCH tokens, runtime accent switching (blue, violett, orange) and appearance light / dark / system (class-based, `system` default since 3.1)                                                                                                                 | Even colors, visitor control, a live proof of the token architecture. OS preference wins until the visitor chooses; no flash. |
| Projects release | Selected works: one full-bleed `bg-primary` hero project, the rest in a quiet list. `/projects` became `/selected-works` in 3.1                                                                                                                               | One story first, accent held near 10 %. URL, title, folder and assets share the same words.                                   |
| 2.x              | Wireframe theme, "Sketch-based UI": black and white, Patrick Hand, uneven corners, no shadows, grayscale media while the accent is neutral. A picked color accent turns media and cursor to color                                                             | Shows the structure under the skin and doubles as a high-contrast, no-motion mode. A color accent signals the wish for color. |
| 2.x              | Theme settings in a `Drawer` (bottom sheet, side panel from `xl`) opened from the header; the custom `Sidebar` is gone. Base UI `Drawer` and `Tabs` in shadcn-style wrappers                                                                                  | One panel pattern with focus trap, `Esc` and inert background. Accessible primitives, token-driven styling.                   |
| 2.x              | Seasonal winter scene (snowfall, Santa cap) behind a toggle                                                                                                                                                                                                   | Personality and delight that never costs usability.                                                                           |
| 3.0              | Home as a sequence of large statements split by three dots; accent band "We compose, direct and oversee"                                                                                                                                                      | Lead with the philosophy before any detail; the band marks the turning point.                                                 |
| 3.0.x            | `Button` matrix `contained / ghost / text / link × primary / foreground / muted`; icon-only buttons take `iconOnly` + `label`                                                                                                                                 | A small orthogonal matrix instead of one-offs. Native `title` is unreachable by keyboard and touch.                           |
| 3.0.x            | `DESIGN.md`, `UX_PRINCIPLES.md`, `CLAUDE.md` / `AGENTS.md` at the repo root                                                                                                                                                                                   | Humans and coding agents share one design source of truth.                                                                    |
| 3.0.6            | `DotsDivider` (`ui`): three dots bounce in sequence, `alignment` and `animate={false}` options; used between statements and projects                                                                                                                          | One punctuation mark across the site; a still variant where motion would distract.                                            |
| 3.0.6            | `Animate` reveals are a 1.8 s expo-out glide, 20 px travel, opacity finishing earlier                                                                                                                                                                         | Spring overshoot and a hard-stopping slide felt jittery.                                                                      |
| 3.0.6, 3.2       | `Drawer` floats inset from the edges and slides in 700 ms, with no scale, fade or height transition. Panel is `rounded-5xl` (new `--radius-5xl`)                                                                                                              | Scale made the close button jiggle and height re-lays out every frame. A softer sheet matches the rounded controls.           |
| 3.0.6, 3.2       | Custom cursor: accent dot with a paper ring in native CSS images; shape carries state. Wireframe follows the accent                                                                                                                                           | No JS follower, no lag, no hydration. A shape stays legible where color alone would not.                                      |
| 3.0.6            | Philosophy tab panels share one grid cell, the diagram scales to the column (`diagram-fit`), tab triggers never wrap (side by side from `xs`, stacked below)                                                                                                  | The leaving panel stayed mounted a frame and doubled the height; fixed artwork overflowed at 320–390 px.                      |
| 3.0.6            | Themes come from one registry (`theme-definitions.ts`); every setting is mirrored to `data-theme-*` on `<html>`; state lives in an external store                                                                                                             | A new theme is one entry. CSS restyles in the same frame and only the control that shows a setting re-renders.                |
| 3.0.6, 3.2       | Animations are one switch in every theme (Wireframe starts off). Off means content at once, no intro, snowfall or bounce, and one base rule zeroes every CSS transition                                                                                       | Static by default, never locked. CSS is the source of truth, JS the fallback; new components inherit it.                      |
| 3.0.6, 3.2       | Radius and container width are visitor settings driven by one variable each; the width control left the drawer on 2026-10-22. Wireframe scales its sketch corners with `--sketch-scale`                                                                       | Personal control with no per-component work. The radius setting did nothing in Wireframe before.                              |
| 3.0.6, 3.2       | Dead options removed: `crazy-color`, `notes`, the Cornell background, persona. The neutral swatch joined the accents                                                                                                                                          | No dead styles, state or controls. Black and white is a real choice.                                                          |
| 3.0.6, 3.2       | `Select` is a Base UI listbox with icons and a "Default" tag; its trigger keeps full size while pressed or open; popups use `z-max`                                                                                                                           | Roles, arrow keys and typeahead for free. The list anchors on pointer down, so a scaled trigger left it narrow and offset.    |
| 3.0.6, 3.2       | Statements and `h1` size fluidly (7.6 em, the width of "orchestration"). One 16 px page gutter (`Container` `px-4`) for header, content, bar and footer                                                                                                       | Fixed steps overflowed at 320–375 px. The old 36 px gutter took a fifth of a 320 px screen.                                   |
| 3.0.6            | One Wireframe sketch pattern: uneven corners plus a `foreground` pencil outline on buttons, toggles, swatches, tabs, drawer, popups, tooltip, dots, `Hr`, `Term` and avatar                                                                                   | The theme reads as one hand-drawn UI. CSS only; percentage radii fit any size, so few tokens cover all controls.              |
| 3.0.6            | Orange accent darkened to `oklch(0.58 0.237 31.3)`                                                                                                                                                                                                            | White text on the old orange measured 3.85 : 1; the new value reaches 4.8 : 1.                                                |
| 3.0.6            | `/agent-view` is a route handler returning raw markdown. Its only link is a small ghost button in the footer                                                                                                                                                  | No theme, CSS or script can reach it, so it stays plain. Shared content modules keep pages and agent view in step.            |
| 3.0.6            | Swatches and the animation switch get a 44 px hit area through a transparent `::after`; swatches are 32 px                                                                                                                                                    | Touch target without changing the look. The 44 px targets overlap by 4 px inside the 8 px gap.                                |
| 3.0.6            | Philosophy diagram: the core pulse token is `--core-pulse-animation`, its keyframes sit outside `@theme`, the bloom follows the animations switch, petal labels sit above every outline                                                                       | A `--animate-*` variable emitted an ungated utility, and a transformed wrapper created its own stacking context.              |
| 3.0.6            | `Button` icons follow the label color; multi-color logos follow it only in Wireframe with the neutral accent. LinkedIn's glyph is a knockout                                                                                                                  | A descendant filter exemption had un-grayed multi-color logos in the neutral Wireframe.                                       |
| 3.0.6            | `PageTemplate` pulls its title block up on `lg`+ (`lg:-mt-6`)                                                                                                                                                                                                 | The `h-24` header plus `pt-8` left the inner-page title about 80 px below the header.                                         |
| 3.1              | Theme drawer chunk loads on idle (at most 2 s) and on hover, focus or press of the trigger. Since 3.2 it uses a plain `import()` and stays mounted closed (`keepMounted`)                                                                                     | `next/dynamic` held the reveal back about 300 ms. A mounted drawer only flips state and slides.                               |
| 3.1              | Philosophy blossom levels (a petal opens one level deeper) are switched off with `NAVIGATION_LEVELS_ENABLED = false`; code and data stay                                                                                                                      | Paused by the owner; one constant turns it back on.                                                                           |
| 3.1              | Inline `Code` chip (muted, hairline, code font), project `notes`, nested responsibilities and global nested list markers (circles, 1.1 numbering)                                                                                                             | Literal terms must read as literal. Depth shows in marker shape and number path, with no extra markup.                        |
| 3.2              | Figma mirrors the code: components sync in the same task (rule 10). Variables follow `globals.css` (`__core`, `theme`, `color`, `radius`, `motion`); text styles and spacing use the Tailwind names                                                           | One source in Figma as in code. Code leads, so a component that differs in one place breaks the design-and-code story.        |
| 3.2              | Figma follows Wireframe through `theme` modes and boolean layer variables (`wireframe/visible`), approximating sketch shapes with per-corner radii                                                                                                            | A `theme` variant would double every set. Figma has only circular corners and no outline tilt.                                |
| 3.2              | Storybook, the `Avatar` lightbox and `PageFrame` (crop marks, sketch border) are removed                                                                                                                                                                      | Fewer dependencies and one source less to keep in sync; unused or decorative code.                                            |
| 3.2              | `<body>` carries `text-foreground`; `muted-foreground` is only for supporting text                                                                                                                                                                            | Body text had no token color since 3.0.6 and fell back to the browser default.                                                |
| 3.2              | Tooltips and icon-only labels are actions (verb + object). Every icon-only, image-only or 3-characters-or-fewer action gets one; no native `title`                                                                                                            | A tooltip answers "what happens?". The same text is the accessible name.                                                      |
| 3.2              | Key style values: modern, vibrant, themeable                                                                                                                                                                                                                  | One phrase every contributor and doc can repeat.                                                                              |
| 3.2              | The first statement is the home `h1`; titles follow `<page> + Portfolio, Dominik Rubröder` through one root `title.template`; links to `/` say "Introduction"                                                                                                 | One heading serves sight and screen readers. One pattern per page title and one word per destination.                         |
| 3.2              | Home `PageNavigationBar`: not sticky, once under the first statement. "Selected works" leads, then "Resume" and icon links (Figma, GitHub, LinkedIn, two certificates). Below `sm` buttons stack and icons center; it reveals as soon as any of it is visible | The next step after the claim, with one dominant action. Certificates are proof beside the call to action. Fits 320 px.       |
| 3.2              | Principles sit directly under the first statement and bar; statements may hold a blockquote; the intro text is plain paragraphs                                                                                                                               | The working stance comes right after the claim, and the opening reads as one continuous story.                                |
| 3.2              | `Term` (`ui`): round dotted `primary` underline with a tooltip on hover, focus or click; pencil underline in Wireframe; never wraps                                                                                                                           | Explains a word in place and does not read as a link. A drawn dot tile keeps the dots round in every browser.                 |
| 3.2              | Less vertical space: `main` is `pt-3 sm:pt-8` and `pb-8 sm:pb-12`; the footer has no border and only `pb-6`; the footer Résumé menu is gone (`/api/resume` stays)                                                                                             | The sticky header already adds 16 px, and the last section sat tight on the footer. The résumé is one click on home.          |
| 3.2              | `Button` transitions color, background, radius and scale over 300 ms on `--ease-interactive`                                                                                                                                                                  | Only color transitioned (150 ms), so the radius change and press scale snapped.                                               |
| 3.2              | Philosophy blossom shows a muted caption below the diagram ("The core product UI is influenced by:")                                                                                                                                                          | Names what feeds the blossom without a heading, and clears the Holistic ring.                                                 |
| 3.2              | Drawer close buttons and `Tabs` triggers are 44 px high in `rem` (`h-11`)                                                                                                                                                                                     | They measured 20 and 43 px, under rule 5. `rem` keeps them on the font size setting.                                          |
| 3.2              | The intro overlay covers an always-rendered page, ends on any key or pointer press, and is skipped for reduced motion, animations off and without scripting; `AnimateHold` holds reveals back                                                                 | The old intro left an empty `<body>` for crawlers, no-JS and assistive technology, and ignored reduced motion.                |
| 3.2              | The one-time text reflow when switching to or from Wireframe is accepted by design                                                                                                                                                                            | Outfit and Patrick Hand differ in glyph width. Both are preloaded and real clicks score no layout shift.                      |

| 3.2.1 | Accent text on `background` uses `primary-text` (lighter in dark: 6.2 : 1 or more instead of 3.3–3.8 : 1);
`text-primary` stays for text on white | The accents fail AA as text on the dark surface. A role token fixes it for
every accent without touching fills. |
| 3.2.1 | Project cards are one `ProjectCard` (`hero`, `list`); preview links are named by a `Tooltip` ("Open <project>
in a new tab"), no native `title`; images use the ratio of the real file | The page repeated about 100 lines of card
markup. Image links are image-only (rule 11). A wrong ratio moved the page by 912 px. |
| 3.2.1 | The six core design principles are data in `feature/design-principles`, read by the home page, agent view, API
and term hints; §1.1 and the UX checklist apply them | One source for the words, so page, agent view, API and docs
cannot drift. Generative UI gets the same rules as humans. |

> When you make a lasting design decision, add a row: _version · decision · why_. Keep Decision and Why within 3 lines
> each, and merge a row into an earlier one it supersedes.

## 16. Known gaps

- Theme drawer: changes are announced through a polite live region, not by moving focus.
- axe (best practice): `region` on the portaled select list and the bottom bar. It predates this feature.
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
- Figma approximates the Wireframe sketch shapes with per-corner circular radii and an outline (see the 3.2 sketch row);
  it does not model the percentage blob, pill and knob radii, the 1 to 6° tilt of the outlines and the knob, the wobble
  blobs of the typewriter corner marks, the pencil crop marks or grayscale media, motion (the `motion` variables hold
  the durations and curves as
  values, but nothing binds to them), the avatar hover scale (drawn as a 106 % size), the canvas snowfall, and the
  non-visual modules (`Animate`, `ScrollToTop`, intro and home copy). The theme, tools and technologies drawers are
  copies of the `drawer` variants, because instances cannot take new children. The theme and appearance selects use
  Lucide icons, the code uses Heroicons solid. The `term` underline is a dotted text decoration in Figma, which cannot
  draw the round dot tile; the home frames differ from the page by a few pixels (hero 488 vs 496, philosophy 623 vs 680
  on desktop). Project cards are the code component `ProjectCard` (`feature/selected-works`, `variant` `hero | list`)
  and the Figma components `selected-works-item` and
  `selected-works-hero` on `↪ features`. The selected-works frames do not model the `scale-105` bleed of the project
  images (the list images are the real wallpapers at the loaded 1.75 ratio, 640 × 366), and set the Trodat inline code
  as per-word text nodes.
