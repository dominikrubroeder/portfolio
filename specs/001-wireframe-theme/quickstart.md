# Quickstart: validate the Wireframe theme

## Prerequisites

`npm install`, then `npm run dev` and open the local URL.

## Gates

```sh
npm run format
npm run lint
npm run test
```

## Scenarios

1. **Switch** (US1): click the header "Theme settings" trigger (first control, before the swatches) → the theme drawer opens → choose Wireframe. Expect the page to change with no reload,
   same text and order, black and white, square corners.
2. **Static** (US2): in Wireframe reload and scroll `/` and `/projects`. Expect no fade, slide, typewriter or bounce.
   Enable animations → motion returns. Switch to Default and back → animations off again.
3. **Tweaks** (US3): pick an accent, each radius and each container width. Expect immediate change, no "Apply".
4. **Persistence** (FR-015/016): reload with Wireframe saved. Expect no flash of Default. Break a stored value in DevTools
   → falls back to defaults.
5. **Coverage** (US4): open drawers, dialog, avatar lightbox, tooltip and the theme drawer in both themes, light and dark. Expect
   no leftover other-theme styling; change theme while an overlay is open.
6. **Matrix**: theme × appearance × accent × font size 90/110 %; check AA contrast and focus rings. 375 px: no horizontal scroll.
7. **Reduced motion**: OS setting on with animations enabled → no movement.
8. **Keyboard**: tab to the header trigger, open with Enter, Tab stays inside the drawer, change every setting with arrow keys and Enter on the selects, close with Done/Esc and confirm focus returns to the trigger. The page behind is not reachable while open.
9. **Performance** (SC-009–SC-011): record a theme switch in React DevTools Profiler (only the control for that setting and
   components that read it re-render) and in Chrome Performance with 4x CPU slowdown (no task > 50 ms, 0 layout shift). Compare `npm run build`
   page script size with the pre-feature build (within 2 % for pages that never open the panel).
10. **Default unchanged** (SC-012): compare every page in Default, light and dark, against the baseline screenshots.

Gate commands also include `npm run test` (the `unit` Vitest project). 11. **Storage blocked** (P9): block site data in DevTools, reload, switch theme and change a setting. Expect the change to apply for
the session and defaults on the next load, with no errors in the console. Change theme while the intro runs: the intro finishes.

## Results (2026-10-17, production build, Chrome, 4x CPU slowdown)

- **SC-009** layout shift during a theme, radius, width, accent and animation change: 0.
- **SC-010** longest main-thread task during those changes: none over 50 ms (no long task reported).
  Click to two painted frames, including the Playwright clicks that open a select: theme 204 ms, radius 237 ms, width 149 ms,
  accent 99 ms, animations 98 ms.
- **SC-011** gzip script size of the prerendered routes (sum of the scripts each page references): `/` 464,362 → 467,487 bytes
  (+0.67 %), `/projects` 448,695 → 451,820 bytes (+0.70 %). Within 2 %. The settings panel loads on first open.
- **Re-render scope**: not measured with the React Profiler (not available in this run). By design only components that read
  a setting subscribe to it (`useThemeSetting`); `ThemeProvider` renders its children unchanged.
- **SC-012** Default unchanged: tokens, radius (md = 6px), container width (40rem) and animation behavior of Default are
  unchanged by construction. A pixel comparison against the pre-feature build was not reliable (random intro phrase and
  snowfall, scroll reveals); the header gained the theme settings trigger and a neutral swatch, and below `sm` the quick
  accent swatches moved into the theme settings panel.

## Revision 2026-10-18 scenarios

12. **Drawer parity** (FR-022): the theme drawer slides in like the tools drawer: bottom sheet at 375 px, side panel at
    1280 px and up; swipe down dismisses; scrim click closes. The first open slides in too.
13. **Header** (FR-023/024): the header shows the trigger, then three swatches (no neutral, no appearance switch) from `sm`.
    The drawer shows four swatches and the appearance select. No horizontal scroll at 375 px.
14. **Select** (FR-025): all selects open as a listbox, support arrow keys, typeahead and `Esc`, and look as before.
    Change a setting while the select is open elsewhere: the shown value follows. Inside the drawer `Esc` closes the list first, then the drawer; scrolling a list does not swipe the drawer.
15. **Groups** (FR-026): Radius sits under "Border", Container width under "Layout".
16. **Preview** (edge case): the drawer uses the standard scrim: dim below `xl`, transparent at 1280 px and up where the
    live change is visible behind it; closing the drawer shows the result at once.
17. **Announce** (FR-027): a screen reader announces "Radius: Large" after a change.
18. **Cost** (SC-011): re-measure script size; pages that never open the drawer must stay within 2 % of the pre-feature build.

## Results revision 2026-10-18 (production build, Chrome)

- **Drawer** (scenarios 8, 12, 13, 15): at 1440 and 375 px the header shows the theme trigger first and, at 1440 px, the
  blue, violett and orange swatches; the drawer lists Base, Typography, Animation, Border, Layout with four swatches and
  the appearance select. After 40 Tab presses focus stays in the dialog; `Esc` closes the drawer and focus returns to the
  trigger; **Done** closes it; a second open works. Page height at 375 px is unchanged by the drawer.
- **Select** (scenario 14): theme, appearance, radius and container width open as listboxes; the first `Esc` closes the
  list and keeps the drawer open; the controls are named "Theme: Default", "Radius: Large" and so on; choices apply live
  and the shown value follows the setting.
- **Announce** (scenario 17): the live region reads "Appearance: dark" after the change.
- **Accessibility scan** (axe, WCAG 2.0 to 2.2 A/AA plus best practice, drawer and an open select, Default and Wireframe,
  light and dark, 1440 and 375 px): no contrast, name, role or target-size violations. Only the `region` best-practice
  note for the portaled list remains. Accent swatches (26 px) and the animation switch (32 px high) are under 44 px and
  are logged in `DESIGN.md` known gaps.
- **SC-011** gzip script size of the prerendered routes: `/` 464,362 → 465,598 bytes (+0.27 %), `/projects` 448,695 →
  435,589 bytes (-2.9 %). Within 2 %. A first build was +3.6 % because the barrel `theme/index.ts` re-exported the
  settings controls and pulled the drawer into every page; the barrel now exports only what other features use.
- **SC-010** a theme switch with the drawer open shows no long task at 4x CPU when clicked inside the page. A click through
  Playwright adds about 50 ms of its own hit testing, so those numbers are not used.
- Not run: Storybook browser tests (Chromium for Playwright is not installed here), so the new `Select` story is checked
  by the same axe scan on the live control only. The page already overflows 432 px at 375 px inside the philosophy
  diagram (`size-96`), clipped by `overflow-x-hidden` on `body`; it is not caused by this change.

## Follow-up checks (analysis I1–I4, production build, Chrome)

- **First open slides in** (I1): fixed. `ThemeDrawer` reports once it is mounted and the trigger opens it on the next frame.
  Sampled popup position: the first and the second open both travel 1442 → 1040 px.
- **Matrix** (I2): axe `color-contrast` on the page, the open drawer and an open select for theme × appearance × accent
  (48 runs). Every combination passes except the orange accent (3.85 : 1 for white on orange, already a known gap).
  Font size 90 % and 110 % at 375 px with the drawer open: no horizontal scroll inside the drawer, no control outside it.
  Reduced motion with animations on: the drawer jumps to its final position with no travel. Content parity of Default
  and Wireframe on `/` and `/projects`: text, links and headings identical.
- **Layout shift** (I3): 0 across theme, radius, width, appearance, accent and animation changes with the drawer open.
- **Swipe and inert** (I4): a downward touch drag on the swipe handle closes the bottom sheet; with the drawer open the
  header, main, footer and the other root elements are `inert` or `aria-hidden`.
- **Still not run**: the Storybook browser tests (Chromium for Playwright is not installed).

## Revision 2026-10-18 – 2 scenarios

19. **Monochrome media** (FR-028): in Wireframe the avatar, project previews, raster logos, logo SVGs, interface icons and
    the corner crop marks show no hue, also inside the avatar lightbox; the chosen accent shows only on text, buttons
    and links. Switch to Default: colors
    return in the same frame. Logos stay recognizable.
20. **Sketch font** (FR-029): in Wireframe headings and body text use Patrick Hand, code blocks keep the monospace font.
    Reload with Wireframe saved: no flash of Outfit, no extra font request. Check 375 px, 90 % and 110 % font size, light
    and dark: no overlap or clipped text; emphasis (semibold, bold) is still visible.
21. **Description** (FR-030): the theme select lists "Wireframe, Sketch-based UI" and "Intense accent UI" for Default under the labels; the
    trigger shows only the label; a screen reader reads label and description.
22. **Cost**: script size within 2 % (no new client code); layout shift 0 on a switch; the 4x CPU trace shows no task over
    50 ms with the monochrome filter on a long page.

## Revision 2026-10-18 – 2 results (production build, Chrome)

- **Monochrome media** (19): in Wireframe `img` and `svg` (avatar, previews, logos, icons, crop marks) compute
  `filter: grayscale(1)`; in Default `none`. The header swatches and buttons keep the accent. `grayscale-0` was removed from
  `avatar.tsx` and `avatar-lightbox.tsx`.
- **Sketch font** (20): body and `h1` compute Patrick Hand in Wireframe, Outfit in Default. Both themes load the same two
  font files (no extra request). Checked 375 px at 110 % in dark: no overlap or clipped text, bold stays readable.
- **Description** (21): the open theme list reads "Default / Intense accent UI" and "Wireframe / Sketch-based UI"; the
  trigger shows the label only.
- **Cost** (22): gzip script size `/` 465 351 B (baseline 464 362, +0.2 %), `/projects` 435 376 B (baseline 448 695, −3.0 %).
  Layout shift: 0 after real clicks (the browser metric excludes shifts after input), but the raw shift of a switch to Wireframe
  is 0.14 on `/` and 0.05 on `/projects` because Patrick Hand wraps text differently: SC-009 as written ("0 shift contribution")
  is met only by that exclusion. Long tasks at 4x CPU: 50–65 ms with real Playwright clicks, none above 50 ms with in-page
  clicks on `/projects`; the earlier finding stands that the excess is Playwright hit-testing.
- **Orange** (T059): `oklch(0.58 0.237 31.3)` gives white text 4.8 : 1. axe `color-contrast` is clean in the drawer and the
  select for every accent. On `/projects` in dark, accent link text on the dark background still reports 3.5–3.8 : 1 (blue
  and orange alike): pre-existing, logged in `DESIGN.md` §16, outside this feature.
- **Touch targets** (T060): swatches have a 44 px high hit area (about 34 px wide); the switch row is `min-h-11`.
- **axe** (best practice): `region` (portaled select list, bottom bar) and `list` (separator in the projects `ul`) predate
  this feature (same result with the select markup reverted).
- **Storybook tests** (T061): `npx vitest run` with Chromium installed: 21 files, 50 tests pass. `addon-a11y` runs with
  `test: 'todo'`, so it reports but does not fail.
