# Implementation Plan: Wireframe theme and theme-ready app

**Branch**: `001-wireframe-theme` | **Date**: 2026-10-17 | **Spec**: [spec.md](./spec.md)

**Input**: Feature specification from `/specs/001-wireframe-theme/spec.md`

## Summary

Make the existing theme system complete and theme-agnostic. A single theme registry (id, label, defaults) drives the
settings UI, switching, persistence and the pre-paint init script. Settings (theme, appearance, accent, font size,
animation, radius, container width) are mirrored to `<html>` as `data-*` attributes and CSS custom properties, so the
whole UI updates live through CSS. Wireframe gets a redesigned token set (black and white, tone-based structure, square
corners, no animation). The `Animate` reveal, intro and ambient effects honor one animation switch. A header trigger
opens the theme settings. Research in [research.md](./research.md).

**Revision 2026-10-18** (spec "Manual edits", FR-022–FR-026): the settings panel becomes a **theme drawer** built on the
site's `ui/drawer` (Base UI), replacing the custom `ui/sidebar`. Appearance moves from the header into the drawer, the
header shows trigger + three swatches, `ui/select` is rebuilt on the Base UI select, and the drawer groups settings as
Base, Typography, Animation, Border (radius) and Layout (container width). See research D15–D20.

**Revision 2026-10-18 – 2** (spec "Manual edits 2", FR-028–FR-030): Wireframe becomes a "Sketch-based UI": monochrome
images and SVGs (logos, icons, crop marks), the Patrick Hand font for text, and a one-phrase description per theme in the registry. All
three are CSS and registry changes, no new client code. See research D21–D24.

**Revision 2026-10-22** (spec "Manuel edits 2026-10-22"): seven polish items for the Wireframe look and the drawer. A
hand-drawn (sketch) border on the page frame in Wireframe, no description line in the theme list, a visible border on
the avatar in Wireframe, a "Default" marker on the option that equals the active theme's default, no "Layout" group in
the drawer, a `background`-colored enabled indicator on the toggle, and rounded drawer groups. All are CSS, class or
registry changes; no new client code, no dependency. See research D25–D31.

## Technical Context

**Language/Version**: TypeScript 5, React 19.3, Next.js 16.4 (App Router; read `node_modules/next/dist/docs/` before framework code)

**Primary Dependencies**: Tailwind CSS 4 (tokens in `src/app/globals.css`), Base UI, `motion`, `cva` + `cn()`, Lucide

**Storage**: Browser `localStorage`, keys prefixed `dr-` (see [data-model.md](./data-model.md))

**Testing**: Vitest with a new node `unit` project for pure theme logic (existing Storybook browser project stays) and stories; manual matrix in [quickstart.md](./quickstart.md); `npm run lint`, `npm run format`

**Target Platform**: Modern browsers, desktop and mobile (375 px up)

**Project Type**: Web app (single Next.js project)

**Performance Goals**: Setting change visible in < 300 ms; no task > 50 ms; no flash of wrong theme on first paint; no layout shift; no full-tree React re-render on a switch; settings panel code loaded on first open

**Constraints**: Constitution I–VII; server components first (client only where the feature needs state, events or browser APIs); CSS is the source of truth for every theme effect, JS is the fallback; WCAG AA; reduced motion honored; `ui` must not import `feature`

**Scale/Scope**: 2 themes, 3 pages (`/`, `/projects`, `/projects/*`), ~30 theme files, all `ui` components touched by tokens

## Constitution Check

_GATE: passed before Phase 0; re-checked after Phase 1 design and again for the 2026-10-18 revision against constitution v1.3.0: still passes._

| Principle                            | Status         | How                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| ------------------------------------ | -------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| I. Design Source of Truth            | Pass           | Tokens only; new values (font roles, monochrome rule) added to `globals.css` first; `DESIGN.md` §9, §14, §15 and `UX_PRINCIPLES.md` §5 updated in the same change                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| II. Existing Architecture First      | Pass           | Work stays in `feature/theme` (prefixed files), `ui/animate`, `ui/container`, `feature/header`. `ui` gets a prop/context, never imports `feature`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| III. ESLint/Prettier                 | Pass           | Run `npm run format` and `npm run lint` as a gate in every phase                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| IV. Accessible by Default            | Pass           | Contrast checked per theme × appearance × accent; `MotionConfig` kept; CSS-first. Revision: Base UI drawer and select supply focus trap, focus return, `Esc`, inert background, listbox roles and typeahead, which closes the sidebar gaps. Revision 2: Patrick Hand legibility checked at 90 / 110 % and in both appearances (D22); images keep their `alt`. Remaining gaps are tracked in D20 and `DESIGN.md` known gaps                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| V. Simplicity                        | Pass with note | No new dependency. Registry replaces scattered `if (theme === …)` branches, which reduces code                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| VI. Server-First and CSS-First       | Pass           | Every theme effect is CSS driven by `<html>` `data-*` attributes (revision 2 adds no client code: font and monochrome images are CSS, the description is registry data); `layout.tsx`, `header.tsx`, `Container` and `DotsDivider` stay server components; per-setting subscriptions keep re-renders to the readers of a setting; the settings panel loads on demand (D11). New client files and why: `ui/animate/animate-context.tsx` (React context for the JS fallback), `feature/theme/theme-radius-setting.tsx` (event handler), `feature/theme/theme-drawer.tsx` (the Base UI drawer, loaded on first open), `feature/theme/theme-settings-announcer.tsx` (polite live region for FR-027, needs a store subscription), `feature/theme/theme-drawer-trigger.tsx` (`next/dynamic` with `ssr: false` needs a client component; revision D16), `feature/theme/theme-animations-bridge.tsx` (store subscription so `ThemeProvider` itself does not re-render). Existing client files are only edited |
| VII. Documentation and Feature Story | Pass           | Tasks update `DESIGN.md`, `UX_PRINCIPLES.md`, the `ui` and `feature` READMEs, and create and finalize `specs/001-wireframe-theme/STORY.md`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |

Revision 2026-10-22 re-check: pass. I (tokens and `DESIGN.md` §5–§7, §9, §10, §15 and `UX_PRINCIPLES.md` §4–§5 updated in the same change; the sketch border adds one named rule, no raw values in components), II (edits stay in `page-frame`, `avatar`, `ui/toggle`, `ui/select`, `feature/theme`), IV (borders and indicator keep AA/3 : 1 non-text contrast, checked in the a11y task), VI (CSS only; no new client file; `ui/select` stays a client file that already exists).

No violations; Complexity Tracking not needed.

## Project Structure

### Documentation (this feature)

```text
specs/001-wireframe-theme/
├── plan.md
├── STORY.md             # constitution VII (created with the feature)
├── research.md
├── data-model.md
├── quickstart.md
├── contracts/
│   ├── theme-html-contract.md
│   └── theme-context-contract.md
└── tasks.md             # /speckit-tasks
```

### Source Code (repository root)

```text
src/
├── app/
│   ├── globals.css                       # wireframe tokens, radius + container-width + animation selectors;
│   │                                     # REVISED: font role tokens (heading, body) switched by theme, wireframe
│   │                                     # monochrome rule for `img` and `svg` (D21, D22)
│   └── layout.tsx                        # unchanged shape; init script gets new attributes
├── components/
│   ├── ui/
│   │   ├── select/                       # REVISED: Base UI select, same look; options may show a description (D24); rev. 3: `isDefault` marker (D28)
│   │   ├── toggle/toggle.tsx             # REV. 3: enabled indicator is `bg-background` in Wireframe (D30)
│   │   ├── sidebar/                      # REMOVED (replaced by ui/drawer)
│   │   ├── animate/                      # animation switch (context + off state), no feature import
│   │   ├── container.tsx                 # reads width token (no change if token-driven)
│   │   ├── typewriter*.tsx               # client (needs JS); respect switch
│   │   └── dots-divider.tsx              # stays a server component; CSS-only switch
│   └── feature/
│       ├── page-frame/page-frame.tsx     # REV. 3: sketch border in Wireframe, CSS only (D25)
│       ├── avatar/avatar.tsx (+ avatar-lightbox.tsx)  # REV. 3: visible `foreground` border in Wireframe (D27)
│       ├── header/header.tsx             # REVISED: trigger, then 3 swatches; no appearance switch
│       ├── intro/                        # skip intro typing when animations are off
│       └── theme/
│           ├── theme-definitions.ts      # NEW registry (themes, defaults, one-phrase description)
│           ├── theme-constants.ts        # keys, option list derived from registry
│           ├── theme-types.ts            # radius, container width types
│           ├── theme-context.tsx         # registry-driven switch, persistence, html sync
│           ├── theme-helper.ts           # init script generated from registry
│           ├── theme-settings.tsx        # Radius + Container width + animation controls
│           ├── theme-drawer.tsx          # REWRITTEN: Drawer + grouped settings (old placeholder file replaced)
│           ├── theme-drawer-trigger.tsx  # NEW (replaces theme-sidebar-lazy/-trigger): button + on-demand drawer
│           ├── theme-appearance-select.tsx  # REVISED: Base UI select, lives in the drawer
│           ├── theme-animations-bridge.tsx  # NEW client bridge: animation setting → AnimationsProvider
│           ├── theme-radius-setting.tsx  # NEW
│           ├── theme-spacing-container-width-setting.tsx  # fixed in rev. 1; DELETED 2026-10-22 (control removed, D29)
│           ├── theme-color-setting.tsx   # add neutral swatch, token-based classes
│           └── theme-definitions.test.ts # NEW unit tests (run by a new `unit` Vitest project)
```

Removed: `ui/sidebar/*`, `SidebarProvider` in `layout.tsx`, `theme-sidebar*.tsx`, the header use of `theme-appearance-switch.tsx`. The retired `ui/sidebar` is deleted with all references (exports, README, `DESIGN.md` z-index and motion
lines, `UX_PRINCIPLES.md` Sidebar section).

**Structure Decision**: Keep the existing `ui`/`feature` split. All new files live in `feature/theme` and carry the
`theme-` prefix. `ui/animate` exposes a small context so the `feature/theme` provider can switch animation off without
`ui` knowing about themes.

## Complexity Tracking

None.
