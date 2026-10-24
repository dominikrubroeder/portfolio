---
description: 'Task list for the Wireframe theme and theme-ready app'
---

# Tasks: Wireframe theme and theme-ready app

**Input**: Design documents from `/specs/001-wireframe-theme/`

**Prerequisites**: plan.md, spec.md, research.md, data-model.md, contracts/, quickstart.md

**Tests**: Not requested in the spec. One small Vitest file, run by a new node `unit` project, covers the pure registry logic (plan decision D10). Everything else is verified by the quickstart matrix.

**Organization**: Grouped by user story. Paths are relative to the repository root.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: US1–US4 from spec.md
- Before every task that touches framework code, read the matching guide in `node_modules/next/dist/docs/`.
- Imports: ui → feature → lib, alphabetized (ESLint `import/order`). Run `npm run format` and `npm run lint` after each phase.

---

## Phase 1: Setup

- [x] T001 Re-read `DESIGN.md` §4, §7, §8, §9 and `UX_PRINCIPLES.md` §4–§5 and note tokens to change; confirm baseline with `npm run lint` and `npm run format` (no file changes expected); capture baseline screenshots of `/`, `/projects` and one `/projects/*` page in Default, light and dark, 375 px and 1440 px, into the scratchpad directory (outside the repo) for the Default-unchanged check (SC-012); run `npm run build` and save the per-route script sizes from its output in the scratchpad directory as the baseline for SC-011
- [x] T002 Create the draft `specs/001-wireframe-theme/STORY.md` (constitution VII): one page, plain language for a non-technical reader, three parts: purpose (why the site gets a second look), what it provides (Default and Wireframe, header trigger, live updates, static by default, accent, radius, width), and how it benefits the visitor (control, comfort, accessibility) and the app (proof of design-system and token thinking, theme-ready foundation, fast CSS-first switch); lead with the outcome, no jargon or implementation detail

---

## Phase 2: Foundational (blocks all user stories)

**Purpose**: One registry, new setting types, one validator, new persistence keys.

- [x] T003 Extend `src/components/feature/theme/theme-types.ts`: add `ThemeRadius = 'none' | 'sm' | 'md' | 'lg'`, `ThemeContainerWidth = 'default' | 'wide' | 'full'`, `ThemeDefinition` (`id`, `label`, `defaults.color`, `defaults.animationsEnabled`, `defaults.radius`, `defaults.containerWidth`); extend `ThemeContextType` with `themeRadius`, `setThemeRadius`, `themeContainerWidth`, `setThemeContainerWidth`; remove `shouldAnimate`
- [x] T004 Create `src/components/feature/theme/theme-definitions.ts` (plain TypeScript: no `'use client'`, imports only from `./theme-types`, never from the `@/components/feature/theme` barrel): registry `THEME_DEFINITIONS` with `default` (color `blue`, animations `true`, radius `md`, container `default`) and `wireframe` (color `foreground`, animations `false`, radius `none`, container `default`), plus helpers `getThemeDefinition(id)` (unknown → `default`) and validators `parseThemeRadius`, `parseThemeContainerWidth`, `parseThemeColor` (legacy `primary` → `violett`; invalid → fallback)
- [x] T005 Update `src/components/feature/theme/theme-constants.ts`: derive `THEME_OPTIONS` from the registry (labels "Default", "Wireframe"); add keys `THEME_KEY_ANIMATION = 'dr-theme-animation'`, `THEME_KEY_RADIUS = 'dr-theme-radius'`, `THEME_KEY_CONTAINER_WIDTH = 'dr-theme-container-width'`; remove unused `THEME_BORDER_SETTINGS_DEFAULT`; export from `src/components/feature/theme/index.ts`
- [x] T006 Add a Vitest `unit` project to `vitest.config.ts` (node environment, `include: ['src/**/*.test.ts']`) beside the existing Storybook browser project, and add the script `"test": "vitest run --project unit"` to `package.json`
- [x] T007 Add Vitest file `src/components/feature/theme/theme-definitions.test.ts`: exactly two themes; wireframe defaults (color `foreground`, animations off, radius `none`); unknown theme → `default`; validators fall back; legacy `primary` → `violett`
- [x] T008 Rewrite `themeInitializationScript` in `src/components/feature/theme/theme-helper.ts` (no `'use client'`; import from `./theme-definitions` and `./theme-constants`, not the barrel, because server `layout.tsx` reads this string) to be generated from the registry: read all keys inside the existing try/catch (a throwing `localStorage` must fall back to the registry defaults and still set every attribute), validate, fall back to the stored theme's defaults (not hard-coded `blue`), and set `data-theme`, `data-theme-appearance`, `data-theme-color`, `data-theme-font-size`, `data-theme-radius`, `data-theme-container-width`, `data-theme-animations` plus the existing classes, per `contracts/theme-html-contract.md`
- [x] T009 Rework `src/components/feature/theme/theme-context.tsx` (client; keep it the only provider): every `localStorage` read and write is wrapped in try/catch (storage unavailable: the setting still applies for the session and defaults return on the next load), and every setter always writes a valid value, never `undefined` (the attribute is never removed, P11), writes the matching `<html>` `data-theme-*` attribute directly in the same call as state and storage (no later effect), then updates React state; memoize the context value, split it into a stable actions context (setters never change) and per-setting subscriptions (a small external store read with `useSyncExternalStore`, hook `useThemeSetting('radius' | 'containerWidth' | 'animations' | …)`) so a change re-renders only components that read that setting; keep `useTheme()` as a thin combined hook for existing callers (principle VI); the store's server snapshot is the registry default and controls rendered on the server (header color swatches) keep the `isInitialized` gate, so there is no hydration mismatch; state for radius, container width, animations; `handleTheme` replaces color, animations, radius and container width with the registry defaults and persists them (appearance and font size stay); `initTheme` restores every key through the validators; one effect per attribute mirrors state to `<html>`; remove `shouldAnimate`, the `notes` branch and the inverted `themeAnimate` dataset effect; keep `useTheme` API from `contracts/theme-context-contract.md`

**Checkpoint**: `npm run test` passes; app builds; Default looks unchanged.

---

## Phase 3: User Story 1 - Switch to the Wireframe theme (P1) 🎯 MVP

**Goal**: Header trigger opens settings; choosing Wireframe restyles the whole site live, black and white, tone-based structure, no flash on reload.

**Independent Test**: quickstart scenarios 1, 4 and 5.

- [x] T010 [US1] Mount the theme settings panel on demand (FR-021): wrap the app in `SidebarProvider` and render `<ThemeSidebar />` once inside `src/app/layout.tsx` (import `SidebarProvider` from `@/components/ui/sidebar`, `ThemeSidebar` from `@/components/feature/theme`), but make the panel content render only while open (inside the client `Sidebar`) or load it through a small client wrapper `src/components/feature/theme/theme-sidebar-lazy.tsx` that holds the `next/dynamic` call (`ssr: false` is not allowed in Server Components, see `node_modules/next/dist/docs/01-app/02-guides/lazy-loading.md`), never `next/dynamic` in `layout.tsx`; `layout.tsx` and `header.tsx` stay server components, `ThemeSidebarTrigger` is the only new client leaf in the header, and the wrapper is justified because `dynamic` with `ssr: false` needs a client component; confirm `Esc`, scrim click and **Done** close it
- [x] T011 [US1] Add `<ThemeSidebarTrigger />` to `src/components/feature/header/header.tsx` (icon-only, label "Theme settings", visible at 375 px, 44 px target); update `label` in `src/components/feature/theme/theme-sidebar-trigger.tsx` from "Modify theme" to "Theme settings"
- [x] T012 [P] [US1] Redesign wireframe tokens in `src/app/globals.css` (research D6): `:root[data-theme='wireframe']` light and dark blocks with white/black `--background`/`--foreground`, tone-step `--muted` and `--muted-hover`, a mid-gray AA-safe `--muted-foreground` (body text must differ from headings), faint `--border`; remove the `--muted* = foreground` and `--border = foreground` overrides; keep the `@media (prefers-color-scheme: dark)` mirror consistent
- [x] T013 [US1] Add wireframe structure selectors in `src/app/globals.css` (no `transition: all` and no global color or radius transition on token changes: a theme or setting change renders in one frame) using `html[data-theme='wireframe']` only (no component forks): drop decorative borders and ring lines on cards, panels, drawer, tooltip, badge; keep a visible focus ring, input edge and selected/disabled cues via tone or underline (spec edge case "elements that rely on borders")
- [x] T014 [P] [US1] Neutral accent mapping in `src/app/globals.css`: add `:root[data-theme-color='foreground']` setting `--primary`, `--primary-foreground`, `--primary-hover`, `--primary-border` from neutrals (black on light, white on dark) in all three places (`:root`, dark media query, `@theme inline`) per DESIGN §4.2
- [x] T015 [P] [US1] Update `src/components/feature/theme/theme-color-setting.tsx`: add a neutral swatch (`foreground`), replace the hard-coded `border-*`/`bg-*` TODO classes with token classes, keep `aria-label`/`aria-pressed` and tooltip text
- [x] T016 [US1] Update `src/components/feature/theme/theme-select.tsx` so the displayed value follows the context theme live and `ThemeSidebarTrigger` shows the active theme; make `shuffleTheme` in `theme-context.tsx` use the registry and never pick the current theme
- [x] T017 [US1] Run `grep -rn "data-theme=default\|theme.key ===" src` first and edit only the confirmed hits: components must react through tokens or `html[data-theme=…]` selectors (likely candidates: `src/components/feature/theme/theme-notes-background-cornell-notes.tsx`, `src/hooks/use-scroll-to-top.ts`, `src/components/feature/theme/theme-appearance-select.tsx`)
- [x] T018 [US1] Verify US1 per quickstart scenarios 1, 4, 5 in light and dark; verify no flash on hard reload with Wireframe saved; compare Default against the T001 baseline screenshots (SC-012): no visible difference

**Checkpoint**: MVP: two selectable themes, live, persistent.

---

## Phase 4: User Story 2 - Static by default, motion on purpose (P1)

**Goal**: Wireframe has no animation; the toggle turns it on; Default behaves as today.

**Independent Test**: quickstart scenarios 2 and 7.

- [x] T019 [P] [US2] Add `AnimationsProvider` and `useAnimationsEnabled` to `src/components/ui/animate/` (new `animate-context.tsx`, export from `index.ts`); no import from `@/components/feature`; this is the JS fallback only, the CSS rule in T021 is the source of truth, and it is the only new client code in `ui`
- [x] T020 [US2] Update `src/components/ui/animate/animate.tsx` (already client; add no further client components): when animations are off render `initial="visible"` with no transition (use `variants.disabledAnimations`), add `data-animate` to the element; keep `MotionConfig reducedMotion="user"`
- [x] T021 [US2] In `src/app/globals.css` add `html[data-theme-animations='off'] [data-animate] { opacity: 1 !important; transform: none !important; }` and make the keyframe utilities (`animate-in-to-top-*`, `animate-in-to-left-*`, `animate-dot-bounce-*`, `animate-core-pulse`) run only when `data-theme-animations='on'` and `prefers-reduced-motion: no-preference` (replace the `data-theme='default'` condition)
- [x] T022 [US2] Create the small client bridge `src/components/feature/theme/theme-animations-bridge.tsx` (justified: reads a store subscription) that reads only `useThemeSetting('animations')` and renders `<AnimationsProvider enabled={…}>`; mount it once inside `ThemeProvider` in `src/components/feature/theme/theme-context.tsx` so `ThemeProvider` itself never subscribes to the animation value (no re-render of the page tree); export from `index.ts`
- [x] T023 [P] [US2] Respect the switch (JS is allowed here because typing needs it; these files are already client) in `src/components/ui/typewriter.tsx`, `src/components/ui/typewriter-overlay.tsx` and `src/components/feature/intro/intro-context.tsx`: with animations off show the full text immediately and release content without waiting for typing (same behavior as reduced motion)
- [x] T024 [P] [US2] Respect the switch in `src/components/ui/dots-divider.tsx` with CSS only (`[data-theme-animations='off']` selector turns the bounce off); it MUST stay a server component (no `'use client'`, no hook). Check the winter scene in `src/components/feature/events/winter/`: do not mount `Snowfall` (client, JS canvas) when animations are off, default off in Wireframe
- [x] T025 [US2] Rewrite the Animation section of `src/components/feature/theme/theme-settings.tsx`: one labelled toggle "Enable animations" bound to `themeAnimationSettings.isEnabled` via `src/components/feature/theme/theme-animation-enabled-toggle.tsx`; remove unused `theme-animation-setting.tsx` (full removal: file, export in `index.ts`, any references)
- [x] T026 [US2] Verify US2 per quickstart scenarios 2 and 7: Wireframe is static on load, scroll and navigation; toggle works live; switching theme resets it; changing theme while the intro overlay runs finishes the intro without losing content; with storage blocked (DevTools: block site data) the theme still switches for the session

**Checkpoint**: Wireframe is static; motion is opt-in.

---

## Phase 5: User Story 3 - Fine-tune the theme (P2)

**Goal**: Radius, container width and accent work live in both themes.

**Independent Test**: quickstart scenario 3.

- [x] T027 [P] [US3] Add radius selectors to `src/app/globals.css`: `:root[data-theme-radius='none'|'sm'|'md'|'lg']` set `--radius` to `0`, `4px`, `6px`, `10px`, and clamp derived tokens so none goes negative (`--radius-sm: max(0px, calc(var(--radius) - 4px))`, same for `--radius-md`); remove the fixed `--radius: 6px` default in favor of the `md` rule; change `rounded-theme-*` utilities to use the token scale in every theme (drop the `data-theme=default` condition); Default (`md`, 6px) MUST render exactly as today, then re-compare against the T001 baseline (SC-012)
- [x] T028 [P] [US3] Add container width selectors to `src/app/globals.css`: `:root[data-theme-container-width='default'|'wide'|'full']` set `--container-readable` to `44rem`, `64rem`, `90rem`; confirm `src/components/ui/container.tsx` needs no change
- [x] T029 [US3] Create `src/components/feature/theme/theme-radius-setting.tsx` (`Select` or segmented control: None, Small, Medium, Large; current value visible; bound to `themeRadius`); export from `index.ts`
- [x] T030 [US3] Fix `src/components/feature/theme/theme-spacing-container-width-setting.tsx`: options Default (44 rem), Wide (64 rem), Full (90 rem); bind to `themeContainerWidth` and `setThemeContainerWidth` instead of `setTheme`; show the current value
- [x] T031 [US3] Replace the placeholder Border section in `src/components/feature/theme/theme-settings.tsx` with "Shape": Radius and Container width settings; remove the Style and Width placeholders; keep section order Base, Typography, Animation, Shape
- [x] T032 [US3] Verify US3 per quickstart scenario 3: each option updates the page instantly, persists across reload, resets on theme switch, no horizontal scroll at 375 px

---

## Phase 6: User Story 4 - Theme-ready foundation (P2)

**Goal**: No element keeps another theme's look; a new theme is one registry entry.

**Independent Test**: quickstart scenarios 5 and 6.

- [x] T033 [US4] Audit every `ui` and `feature` component in both themes (`src/components/ui/*`, `src/components/feature/*`) for raw colors, fixed radii or theme branches; fix with tokens or `html[data-theme=…]` selectors; fix Base UI popups (drawer, dialog, tooltip, select) which render in portals and must still inherit `<html>` tokens
- [x] T034 [P] [US4] Check logos and imagery in Wireframe and dark (`src/components/feature/logo/`, `public/projects/*`): logos stay visible via `currentColor` or a dark variant
- [x] T035 [P] [US4] Add a Storybook story for `AnimationsProvider` + `Animate` (on and off) in `src/components/ui/animate/stories/animate.stories.tsx`
- [x] T036 [US4] Prove FR-018: temporarily add a third registry entry, confirm it appears in the selector, switches live and persists with no other file changes; then remove it

---

## Phase 7: Polish and cross-cutting

- [x] T037 Contrast pass: theme × appearance × accent (foreground, blue, violett, orange) for text, focus ring and disabled states; fix tokens in `src/app/globals.css`; regenerate cursor images if `--background` or accents changed (`scripts/generate-cursor-tokens.mjs`, `npm run cursors`)
- [x] T038 Update `DESIGN.md`: §4.2 neutral accent, §7 radius setting, §8 animation switch, §9 theme table and registry rules, §10, §16 known gaps (remove fixed items), and add decision-log rows (version · decision · why)
- [x] T039 Update `UX_PRINCIPLES.md`: §4 Sidebar and header trigger, §5 Settings persistence (new `dr-` keys), Theme switching (reset rule), Motion (animation switch); keep both files consistent with the code
- [x] T040 Update the remaining documentation to match the code (constitution VII; serves FR-017 and the docs gate): `src/components/ui/README.md` (animation switch via `AnimationsProvider`), `src/components/feature/README.md` (theme registry: a new theme is one entry in `theme-definitions.ts`), `README.md` if it describes themes or settings, and `todos.md` (mark done items); grep `DESIGN.md`, `UX_PRINCIPLES.md` and the READMEs for stale statements about Wireframe, borders, animation defaults and settings
- [x] T041 Finalize `specs/001-wireframe-theme/STORY.md`: reread against the shipped feature, remove any claim not delivered, confirm it stays one page and readable by a non-technical visitor, and that it matches `spec.md` and the updated `DESIGN.md` and `UX_PRINCIPLES.md`
- [x] T042 Measure performance (SC-009, SC-010, SC-011): in React DevTools Profiler record a theme switch and a radius change and confirm only the control for that setting and components that read that setting re-render (a radius change re-renders only the radius control); in Chrome Performance (CPU 4x slowdown) confirm no task > 50 ms and 0 layout shift; compare built page script size (`npm run build` output) before and after, within 2 % for pages that never open the panel; record results in `specs/001-wireframe-theme/quickstart.md`
- [x] T043 Run the full `quickstart.md` matrix including keyboard, reduced motion, 90/110 % font size and 375 px, content parity between themes (same text, links and section order), and Default against the T001 baseline
- [x] T044 Run `npm run format`, `npm run lint`, `npm run test`, `npm run build`; fix every error

---

## Dependencies and execution order

- Phase 1 → Phase 2 (blocks everything) → Phases 3–6 → Phase 7.
- **US1** needs Phase 2. **US2** needs Phase 2 and the `theme-context.tsx` rework (T009); it is otherwise independent of US1 except T018 sharing the header. **US3** needs Phase 2 and T031 depends on T025 (same file `theme-settings.tsx`). **US4** needs US1–US3 complete.
- `STORY.md` is drafted in Phase 1 and finalized in Phase 7 before the final gates; docs tasks (DESIGN.md, UX_PRINCIPLES.md, READMEs, STORY.md) block merge.
- Same-file sequencing: `globals.css` (T012, T013, T014, T021, T027, T028 run in that order), `theme-context.tsx` (T009, T016, T022), `theme-settings.tsx` (T025, T031).

## Parallel examples

- Phase 2: T008 (init script) after T004/T005; T007 (test file) needs T006 (`unit` project) and T004.
- US1: T012, T014 and T015 touch different files or sections (T012 and T014 edit different blocks of `globals.css`; apply sequentially if using one editor).
- US2: T019, T023, T024 in parallel.
- US3: T027 and T028 in parallel with T029.

## Implementation strategy

1. **MVP**: Phases 1–3 (US1). Two themes selectable from the header, live and persistent.
2. Add US2 (static Wireframe), validate, then US3 (shape controls), then US4 (audit).
3. Phase 7 last: docs, contrast and full gates. Commit per phase.

---

## Phase 8: Revision 2026-10-18 (theme drawer, spec FR-022–FR-026)

**Purpose**: Replace the sidebar with a theme drawer, move appearance into it, trim the header, rebuild `Select` on Base UI, regroup settings. Decisions: research D15–D20. T010, T011, T016 and T025/T031 above describe the retired sidebar; these tasks supersede them. Container width default is 40 rem (not the 44 rem in T028/T030). Spec FR-022–FR-027 and SC-001/SC-012 were reworded 2026-10-18.

**Order**: T045 first; then T046, T047, T048 and T049 in parallel (T046 needs the new component from T045); T050 needs T045–T049; T051 → T052 → T053; T054 with T050; T055–T058 last.

- [x] T045 [US4] Rebuild `src/components/ui/select/select.tsx` on `@base-ui/react/select` (Trigger, Value, Portal/Positioner/Popup, Item, ItemIndicator; read `node_modules/@base-ui/react/select` types first). Keep today's look: `Button` trigger with chevron, popup `bg-background` with 1 px `border` and radius token, item rows with check mark, popup `z-max` so it sits above the drawer, `Esc` closes the open list before the drawer, popup scroll must not start a drawer swipe (stop propagation if it does), fade only under `html[data-theme-animations=on]` and `motion-safe:`. Controlled `value` and `onValueChange(option)` use the option `key`; `SelectOption` in `src/components/ui/select/types.ts` gains optional `icon?: ReactNode`; delete `src/components/ui/select/use-select.tsx` and update `src/components/ui/select/index.ts` (full removal: no remaining import)
- [x] T046 [P] [US4] (after T045) Add `src/components/ui/select/stories/select.stories.tsx` (default, with icons, controlled) per constitution II
- [x] T047 [US4] Move callers to key-based values: `src/components/feature/theme/theme-select.tsx`, `theme-radius-setting.tsx`, `theme-spacing-container-width-setting.tsx` (pass `value={themeRadius}` etc., not the label)
- [x] T048 [US1] Rewrite `src/components/feature/theme/theme-appearance-select.tsx` on `ui/select` with icon options Light, Dark, Auto (value `system`); delete the hand-rolled dropdown and its `menuPosition` prop; update `ThemeQuickSettings` callers or delete `theme-quick-settings.tsx` if unused
- [x] T049 [P] [US1] Add `includeNeutral?: boolean` (default `true`) to `src/components/feature/theme/theme-color-setting.tsx`; when `false` render only blue, violett, orange (contract: `contracts/theme-context-contract.md`)
- [x] T050 [US1] Rewrite `src/components/feature/theme/theme-drawer.tsx` (the old file holds unfinished placeholders: replace it, keep nothing of Modes/Spacing/Border placeholders) as `Drawer` + `DrawerContent` from `@/components/ui/drawer`: `DrawerHeader`/`DrawerTitle` "Theme settings", `<ThemeSettings />` as body, sticky `DrawerFooter` with `DrawerClose` labelled "Done"; accepts `open` and `onOpenChange`, `finalFocus` (confirmed on `DrawerPopup`) set to the trigger ref; add one visually hidden `aria-live="polite"` region that announces a changed setting ("Radius: Large") (D20)
- [x] T051 [US1] Create `src/components/feature/theme/theme-drawer-trigger.tsx` (client): header `Button` (`iconOnly`, label "Theme settings", Palette icon, `ghost-foreground`, 44 px target) with local `hasOpened`/`open` state; first click mounts `ThemeDrawer` through `next/dynamic` (`ssr: false`, see `node_modules/next/dist/docs/01-app/02-guides/lazy-loading.md`), mounted closed then opened on the next frame so the first open slides in; `finalFocus` returns focus to the button. Export from `index.ts`
- [x] T052 [US1] Update `src/components/feature/header/header.tsx`: render `ThemeDrawerTrigger` first, then `<ThemeColorSetting includeNeutral={false} />` (`hidden sm:flex`); remove `ThemeAppearanceSwitch` and its `ButtonGroup`; header stays a server component; verify name, avatar and controls fit at 375 px with no horizontal scroll, and without `sm` swatches nothing is lost (neutral and appearance remain in the drawer)
- [x] T053 [US1] Remove the sidebar completely: delete `src/components/ui/sidebar/` (`sidebar.tsx`, `sidebar-context.tsx`, `index.ts`), `theme-sidebar.tsx`, `theme-sidebar-lazy.tsx`, `theme-sidebar-trigger.tsx`; drop `SidebarProvider` and `ThemeSidebarLazy` from `src/app/layout.tsx` and the exports in `src/components/feature/theme/index.ts`; delete `theme-appearance-switch.tsx` if nothing uses it; `grep -rn "sidebar\|Sidebar" src` must show no stale hit (z-index `z-100` scrim usage stays only where the avatar lightbox uses it)
- [x] T054 [US3] Regroup `src/components/feature/theme/theme-settings.tsx`: Base (Theme, Appearance via `ThemeAppearanceSelect`, Color with neutral swatch), Typography (Font size), Animation (Enable animations), Border (Radius), Layout (Container width); remove the "Shape" section
- [x] T055 [US4] Accessibility checks for the drawer (constitution IV gate): keyboard only (Tab stays inside, visible focus, every select by arrows/typeahead/Enter, `Esc` closes a select first then the drawer, focus returns to the trigger, page behind not reachable); screen reader names, roles and the live-region message; 44 px targets and 375 px / 90–110 % text; contrast of drawer, select popup and swatch check marks in both themes, light and dark, all accents; reduced motion; the drawer uses the standard scrim (dim below `xl`, transparent from `xl`) and the live change is visible at `xl`; `Esc` order select then drawer. Fix or log each violation in `DESIGN.md` known gaps with the measured value
- [x] T056 Update documentation (constitution VII): `DESIGN.md` §6.3 z-index (drop sidebar layers), §8 motion (drop the Sidebar line, drawer is the panel), §10 components (remove `Sidebar`, add theme drawer and Base UI `Select`), §12, decision-log rows (drawer replaces sidebar, appearance in drawer, header trigger + three swatches, Select on Base UI), §16 known gaps; `UX_PRINCIPLES.md` §2 header, replace the "Sidebar" section with "Theme drawer", Toggle / Select behavior, §6 responsive table, §7; `src/components/ui/README.md` and `src/components/feature/README.md`; `specs/001-wireframe-theme/STORY.md`; grep all for "sidebar" and "Modify"
- [x] T057 Run quickstart scenarios 8 and 12–18 plus the full matrix on the production build; for SC-012 compare page content only (header controls and the drawer are excepted) and compare the Select popup before/after; re-measure SC-011 (script size of `/` and `/projects` within 2 % of baseline) and SC-009/SC-010 on a theme switch with the drawer open; record results in `specs/001-wireframe-theme/quickstart.md`
- [x] T058 Run `npm run format`, `npm run lint`, `npm run test`, `npm run build`, and the Storybook a11y check for the new `Select` story (not run here: Chromium for Playwright is missing; the live control passed an axe scan instead); fix every error

### Revision dependencies

- T045 blocks T047, T048, T050. T049 blocks T052. T050 and T051 block T052 and T053. T053 runs after T052. T056–T058 run last.
- Same-file sequencing: `theme-settings.tsx` (T054 after T048), `src/components/feature/theme/index.ts` (T051, T053), `header.tsx` (T052 only).

---

## Phase 9: Convergence

- [x] T059 Resolve the orange accent contrast in `src/app/globals.css` (white on orange is 3.85 : 1, axe flags it on the page, the drawer and the select trigger in every theme and appearance): darken `--orange` (and its `-hover`/`-border` siblings, all three mapping places) until `orange-foreground` text reaches 4.5 : 1, then run `npm run cursors` and rerun the axe color-contrast matrix; if the design keeps the current orange instead, record that SC-005 excludes it in `DESIGN.md` §16 and `quickstart.md` so SC-005 and the code agree per SC-005 / FR-019 / Constitution IV (partial)
- [x] T060 Raise the drawer controls to a 44 px touch target without changing their look in `src/components/feature/theme/theme-color-setting.tsx` (swatches are 26 px, 32 px from `sm`) and `src/components/ui/toggle/toggle.tsx` (switch 32 px high), for example with a transparent hit area, then remove the matching line from `DESIGN.md` §16 per Constitution IV targets / FR-019 (partial)
- [x] T061 Run the Storybook browser tests, including the new `src/components/ui/select/stories/select.stories.tsx` and `animate.stories.tsx`, after installing Chromium for Playwright (`npx playwright install chromium`), and fix every violation reported by `addon-a11y` per T058 / Constitution IV verification (partial)
- [x] T062 Add `src/components/feature/theme/theme-settings-announcer.tsx` and `theme-drawer.tsx` to the client-component justification and file list in `specs/001-wireframe-theme/plan.md` (Constitution VI: every new client file is justified), and mention the live region in `DESIGN.md` §12 per FR-027 / Constitution VI (partial)
- [x] T063 Decide what to do with the theme files nothing imports (`theme-settings-backup.tsx`, `theme-shuffle-button.tsx`, `theme-toggle-auto-mode.tsx`, `theme-toggle-design-mode.tsx`, `theme-toggle-dev-mode.tsx`, `theme-spacing-section-break-*.tsx`) and the `shuffleTheme` action: remove them with every reference (exports, docs) or give each a reachable use; `UX_PRINCIPLES.md` §5 still describes "Shuffle" although no control offers it, so fix that line in the same change per Constitution V / UX_PRINCIPLES (unrequested)

---

## Phase 10: Revision 2026-10-18 – 2 (sketch-based Wireframe, spec FR-028–FR-030)

**Purpose**: Wireframe becomes a "Sketch-based UI": monochrome images and SVGs (logos, icons, crop marks), Patrick Hand for text, one-phrase theme descriptions. Decisions: research D21–D24; quickstart scenarios 19–22. Everything is CSS or registry data, no new client component. T059–T063 (Phase 9) stay open and are independent of this phase, except T059/T060 touch `globals.css` and `theme-color-setting.tsx` (apply them in task-number order).

**Order**: T064 → T065, T066; T067 → T068; T069 and T070 touch different files; T071 after T066, T068, T070; T072–T074 last.

- [x] T064 [US1] Add the theme description (FR-030): in `src/components/feature/theme/theme-types.ts` add `description: string` to `ThemeDefinition` and an optional `description?: string` to `ThemeOption`; in `src/components/feature/theme/theme-definitions.ts` set Wireframe to `'Sketch-based UI'` and Default to `'Intense accent UI'` (owner-given copy, spec FR-030), and make `getThemeOption` return `{ key, value: label, description }`; extend `src/components/feature/theme/theme-definitions.test.ts` (each theme has a non-empty description; Wireframe equals "Sketch-based UI"; `THEME_OPTIONS` carry it). Description is one short phrase, no trailing period
- [x] T065 [P] [US4] Let `Select` show an option description (D24): add `description?: string` to `SelectOption` in `src/components/ui/select/types.ts`; in `src/components/ui/select/select.tsx` render it under the label inside the option row (`text-sm text-muted-foreground`, `SelectPrimitive.ItemText` keeps the label only so the trigger and typeahead use the label; the description is a sibling element in the same `Item`, so the option reads "Wireframe, Sketch-based UI"); the trigger shows the label only; add a `WithDescriptions` story in `src/components/ui/select/stories/select.stories.tsx`
- [x] T066 [US1] Wire the descriptions into the theme select in `src/components/feature/theme/theme-select.tsx` (options come from `THEME_OPTIONS`, so the new field flows through); verify the open list at 375 px and 1440 px in Default and Wireframe, light and dark, keyboard (arrow keys, typeahead by label) and that the drawer layout does not change
- [x] T067 [US1] Switch the text font by theme (FR-029, D22) in `src/app/globals.css`: today `--font-heading` and `--font-body` are inlined to Outfit inside `@theme inline`, so an override would not apply; introduce runtime tokens `--font-role-heading` and `--font-role-body` on `:root` (Outfit, as now), point `--font-heading` and `--font-body` in the theme block at them without `inline` substitution (or move those two lines out of `@theme inline`), and override both role tokens to `var(--font-sketch)` under `html[data-theme='wireframe']`; keep `--font-code` JetBrains Mono; no new `next/font` instance (Patrick Hand is already loaded in `src/app/layout.tsx`); confirm Default renders byte-identical font-family values
- [x] T068 [US1] Review the sketch font and tune with one token (D22): at 100 %, 90 % and 110 % font size, 375 px and 1440 px, light and dark, on `/` and `/projects`, check legibility, line counts versus Default, clipped or overlapping text, emphasis (semibold and bold use synthesized bold because Patrick Hand ships weight 400); if bold reads badly set the semibold and bold weight tokens to 400 under Wireframe only; if body text reads small add a single wireframe root-size token in `src/app/globals.css` (never per component); record the decision and values in `research.md` D22
- [x] T069 [P] [US1] Let the monochrome rule reach the avatar (FR-028, D21, analysis F1): remove `grayscale-0` from the `img` classes in `src/components/feature/avatar/avatar.tsx` and `src/components/feature/avatar/avatar-lightbox.tsx` (a Tailwind utility beats the base-layer rule, so the avatar would stay in color), or scope it to Default with `in-data-[theme=default]:grayscale-0` if Default relied on it; grep `src` for any other `grayscale-0` or `filter` utility on `img`/`svg` and handle the same way; no `logo` marker class and no change to `src/components/feature/logo/logo-config.ts` (superseded by D21)
- [x] T070 [US1] Add the monochrome rule (FR-028, D21) in `src/app/globals.css` under the Wireframe structure block: `html[data-theme='wireframe'] :is(img, svg) { filter: grayscale(1); }`, no transition; it covers photos, project previews, raster and SVG logos, interface icons and the corner crop marks (`src/components/feature/page-frame/page-frame.tsx`); cursor images stay as they are (known gap in `DESIGN.md` §16); verify avatar (header and lightbox), previews, logos, icons and crop marks show no hue in Wireframe with each accent, return to color in Default in the same frame, and that the accent shows only on text, buttons and links
- [x] T071 [US4] Accessibility and parity checks for the sketch look (Constitution IV gate): axe (WCAG 2.0–2.2 A/AA plus best practice) on `/` and `/projects` and on the open drawer with the theme select open, Wireframe and Default, light and dark, 1440 and 375 px; confirm images keep their `alt`, logos stay recognizable (edge case) and icons on `bg-primary` buttons keep their contrast with each accent (grayscale removes hue only; measure); confirm content parity of both themes is unchanged (text, links, headings); confirm reduced motion and animations-off behaviour are unchanged; log any new violation in `DESIGN.md` §16 with its measured value
- [x] T072 Update documentation (Constitution VII): `DESIGN.md` §5 (Wireframe uses Patrick Hand for headings and body, weights and size decision from T068), §9 theme table and rules (Wireframe described as "Sketch-based UI", monochrome media, registry `description`), §11 imagery (Wireframe images and SVGs, icons and crop marks included, are grayscale; Default described as "Intense accent UI"), decision-log rows, §16 known gaps if T071 finds any; `UX_PRINCIPLES.md` (theme switching: the theme select shows each theme's description; Wireframe media and font); `src/components/ui/README.md` (`Select` option description); `src/components/feature/README.md` (registry `description`); `specs/001-wireframe-theme/STORY.md` (Wireframe is a sketch-based look with monochrome images and a handwritten font, in plain language); grep every doc for "blueprint", "black-and-white" and "Outfit" statements that no longer hold
- [x] T073 Measure the revision (SC-009, SC-010, SC-011, quickstart scenario 22) on the production build: gzip script size of `/` and `/projects` within 2 % of the pre-feature baseline; layout shift 0 on a theme switch (in-page clicks); no task over 50 ms at 4x CPU with the monochrome filter on all SVGs on `/projects` and the philosophy diagram on `/`; Wireframe saved plus hard reload shows Patrick Hand from first paint with no flash and no extra font request (network panel); record results in `specs/001-wireframe-theme/quickstart.md`
- [x] T074 Run `npm run format`, `npm run lint`, `npm run test`, `npm run build`; fix every error, then rerun the quickstart scenarios 19–22

### Revision 2 dependencies

- T065 is independent of T064 (it adds the `SelectOption.description` type; T064 adds the registry data); T066 needs both. T067 blocks T068. T069 and T070 are independent files but both must land before the check in T070. T071 needs T066, T068 and T070. T072–T074 run last.
- Same-file sequencing: `src/app/globals.css` (T059, T067, T068, T070 in that order); `avatar.tsx` and `avatar-lightbox.tsx` (T069 only), `src/components/ui/select/select.tsx` (T065 only), `theme-definitions.ts` (T064 only).

## Revision 3 (2026-10-22): sketch frame, leaner drawer

**Purpose**: Seven manual edits from `spec.md` "Manuel edits 2026-10-22". Decisions: research D25–D31; quickstart 23–30.

**Order**: T075, T076, T077 are independent (different files); T078 before T079 (both in `ui/select` and the radius setting); T080 after T078; T081 after all; T082 last.

- [x] T075 [P] [US1] Sketch border (D25): in `src/components/feature/page-frame/page-frame.tsx` add a `pointer-events-none` `aria-hidden` child shown only in Wireframe (`hidden in-data-[theme=wireframe]:lg:block`) with `border-2 border-foreground` and the named uneven-radius rule from `src/app/globals.css`; add that rule under the Wireframe block
- [x] T076 [P] [US1] Avatar border (D27): add `in-data-[theme=wireframe]:border-foreground` to the photo in `src/components/feature/avatar/avatar.tsx` (both instances) and `avatar-lightbox.tsx` (thumbnail and enlarged photo)
- [x] T077 [P] [US4] Toggle and groups (D30, D31): in `src/components/ui/toggle/toggle.tsx` make the enabled knob `bg-background` in Wireframe (replace `bg-primary`); in `src/components/feature/theme/theme-setting-section.tsx` replace the invalid `rounded-2xl-xl` with `rounded-xl`
- [x] T078 [US4] Remove the theme description (D26): delete `description` from `ThemeDefinition`, `ThemeOption`, `theme-definitions.ts` (both entries and the `THEME_OPTIONS` mapping), `theme-definitions.test.ts`, and the description rendering in `src/components/ui/select/select.tsx` and `types.ts` unless T079 needs it; update the Select story
- [x] T079 [US4] Default marker (D28): add `isDefault?: boolean` to `SelectOption`, render a muted "Default" tag in the open list and add it to the option's accessible name in `select.tsx`; in `theme-radius-setting.tsx` mark the option equal to `getThemeDefinition(theme).defaults.radius` (read `theme` with `useThemeSetting('theme')`); add a story
- [x] T080 [US4] Remove the Layout group (D29): delete the "Layout" `ThemeSettingSection` and the container-width import from `src/components/feature/theme/theme-settings.tsx`; keep store, attribute, persistence and CSS; confirm with the owner whether `theme-spacing-container-width-setting.tsx` is deleted; update the announcer only if it names the group
- [x] T081 Update documentation (Constitution VII): `DESIGN.md` (§6.1 width wording, §7, §9 table and rules, §10 Select/Toggle/Avatar notes, §15 decision-log rows), `UX_PRINCIPLES.md` (§4 Theme drawer groups and Toggle/Select, §5 theme switching and container width), `STORY.md`; mark FR-026 (Layout part) and FR-030 superseded in `spec.md` notes only through the owner's spec edit
- [x] T082 Run `npm run format`, `npm run lint`, `npm run test`, `npm run build`; run quickstart scenarios 23–30 on the production build, including axe on the open drawer in Wireframe light and dark, and log the results in `quickstart.md`
- [x] T083 [US1] Keep the accent on the crop marks in Wireframe (FR-034, D32): add `filter-none` to the `CropMark` svg in `src/components/feature/page-frame/page-frame.tsx`; update the grayscale rule comment in `src/app/globals.css`, `DESIGN.md` §9 and its decision log; verify quickstart 31
- [x] T084 [US1] Sketch quote bar (D33): in `src/components/ui/blockquote/blockquote.tsx` add Wireframe-only variants on the `before:` bar (`in-data-[theme=wireframe]:before:` wider box, no radius, `mask-image: var(--sketch-quote-bar)`, `mask-size: 100% 100%`); define `--sketch-quote-bar` (inline SVG pencil stroke, two uneven paths) in the `:root[data-theme='wireframe']` block of `src/app/globals.css`; the bar keeps `bg-primary`, so it carries the picked accent; update `DESIGN.md` §9 and decision log; verify quickstart 32
- [x] T085 [US1] Sketch outline for contained buttons (D34): in `src/components/ui/button/button.tsx` add Wireframe-only variants to the `contained` variants (uneven fill radius from `--sketch-button-radius`, a `before:` pencil outline: `border-2 border-foreground`, `-inset-0.5`, `-rotate-1`, `--sketch-button-outline-radius`); define both radius tokens in the `:root[data-theme='wireframe']` block of `src/app/globals.css`; ghost, text and link variants stay as they are; update `DESIGN.md` §10 and decision log; verify quickstart 33
- [x] T086 [US1] Sketch toggle and color swatches (D35): in `src/components/ui/toggle/toggle.tsx` replace the Wireframe track `border` with a `before:` pencil outline and give track and knob the wobbly blob radius; in `src/components/feature/theme/theme-color-setting.tsx` give each swatch the same blob radius and pencil outline; define `--sketch-blob-radius` and `--sketch-blob-outline-radius` in the `:root[data-theme='wireframe']` block of `src/app/globals.css`; update `DESIGN.md` and the decision log; verify quickstart 34
- [x] T087 [US1] Refine the sketch toggle (D35, revised): in `src/app/globals.css` add `--sketch-pill-radius`, `--sketch-pill-outline-radius` and `--sketch-knob-radius` (capsule track, capsule outline, near-circle knob); in `src/components/ui/toggle/toggle.tsx` use them for track, track outline and knob instead of the blob tokens; swatches keep the blob tokens; verify quickstart 34
- [x] T088 [US1] Sketch the toggle knob (D35, revised again): in `src/app/globals.css` set `--sketch-knob-radius` to percentages that sum to 100 % per side so nothing clamps; in `src/components/ui/toggle/toggle.tsx` give the Wireframe knob `border-2` and a slight rotation; verify quickstart 34
- [x] T089 [US1] Sketch pattern on the remaining controls (D36): `DotsDivider` dots (`src/components/ui/dots-divider.tsx`: blob radius, 1.5 px `foreground` border, tilt); typewriter frame (`typewriter-overlay.tsx`: `.sketch-frame`, 2 px `foreground` border, blob corner squares); ghost buttons (`button.tsx`: the hover `after:` pill gets the outline radius and a 2 px `foreground` border); `Tabs` (`tabs.tsx`: trigger radius, active trigger gets the pencil outline as `before:`); drawer panel (`drawer.tsx`: `--sketch-frame-radius`, 2 px `foreground` border); theme setting groups (`theme-setting-section.tsx`: sketch radius, 1.5 px `foreground` border); toggle knob (`toggle.tsx`: pencil outline `before:` in both states like the swatches, no own border); add `--sketch-frame-radius` to the Wireframe block of `src/app/globals.css`; update `DESIGN.md`; verify quickstart 35
- [x] T090 [US1] Sketch the philosophy diagram (D37): in `src/components/feature/philosophy/philosophy-core.tsx` give every `Petal` (base classes, so both tabs) the Wireframe blob radius and a 2 px `foreground` pencil outline (`before:`), and the two "UI" core circles the same with a `-inset-0.5` outline; Default unchanged; update `DESIGN.md`; verify quickstart 36
- [x] T091 [US1] Label background in the philosophy diagram (D37, revised): in `src/components/feature/philosophy/philosophy-core.tsx` wrap the `Petal` children in a `span` that is `bg-background` with the sketch button radius and `px-1.5` in Wireframe only; verify quickstart 36
- [x] T092 [US1] Sketch `Hr` (D38): in `src/components/ui/hr/hr.tsx` add Wireframe-only variants (`h-0`, `border-t-[0.5rem]`, `border-current`, `mask-image: var(--sketch-hr-line)`, `mask-size: 100% 100%`); define `--sketch-hr-line` (inline SVG: uneven stroke plus thin echo) in the Wireframe block of `src/app/globals.css`; give the `Hr` on the accent band in `src/app/projects/page.tsx` `text-primary-foreground` so the line is visible on it; update `DESIGN.md`; verify quickstart 37
