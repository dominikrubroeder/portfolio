# Feature Specification: Wireframe theme and theme-ready app

**Feature Branch**: `001-wireframe-theme`

**Created**: 2026-10-17

**Status**: Draft

**Input**: User description: "Make the app fully theme-compatible. Introduce a new theme \"Wireframe\" with a
wireframe-styled UI, selectable from a theme settings trigger in the header. Themes live-update the UI, now and for
future themes. Wireframe focuses on non-border UI elements, black and white initially, with an optional user-chosen
accent color. Same content as today, different appearance. Two themes after this task: \"Default\" (current look and
feel) and \"Wireframe\". Wireframe has no animations or fade-ins by default. Users can still control border radius,
container max-width and re-enable animations on purpose. Settings changes always update the UI live."

## Clarifications

### Session 2026-10-17

- Q: When a visitor switches theme, do their tweaks reset to the new theme's defaults or stay? → A: Reset to the new
  theme's defaults on every switch (appearance and font size are not theme-bound and stay).

### Session 2026-10-18

- Q: How should the page look behind the theme drawer on phones and tablets? → A: Same dim scrim as the other drawers
  (one drawer pattern; transparent from `xl`, where the live change stays visible).
- Q: In Wireframe, are all SVGs and images black and white, or only content graphics? → A: All of them: photos, project
  previews, logos, interface icons and the corner crop marks. The accent shows only on text, buttons and links.
- Q: Should black-and-white images be grayscale or strict two-tone? → A: Grayscale (all gray shades kept), so photos
  stay readable.
- Q: What phrase describes the Default theme? → A: "Intense accent UI". (No longer shown in the theme list since
  2026-10-22.)

## User Scenarios & Testing _(mandatory)_

### User Story 1 - Switch to the Wireframe theme (Priority: P1)

A visitor opens the theme settings from the header trigger, picks "Wireframe" and sees the whole site change to a
static, black-and-white, structure-first look. Content, order and links stay the same.

**Why this priority**: This is the feature. Without a selectable second theme there is no value.

**Independent Test**: Open any page, open theme settings from the header, choose "Wireframe". Compare to "Default": all
text, sections and links are identical; only the appearance differs.

**Acceptance Scenarios**:

1. **Given** the site in "Default", **When** the visitor chooses "Wireframe" in the theme settings, **Then** every
   visible element on the page changes to the Wireframe look without a page reload.
2. **Given** "Wireframe" is active, **When** the visitor navigates to another page, **Then** the same theme applies
   there.
3. **Given** "Wireframe" is active, **When** the visitor chooses "Default", **Then** the site returns to today's look
   and feel.
4. **Given** a visitor with "Wireframe" saved, **When** they return later or reload, **Then** the page shows Wireframe
   from the first paint, without a flash of the other theme.

---

### User Story 2 - Static by default, motion on purpose (Priority: P1)

In "Wireframe" nothing animates: no fade-in, no slide-in, no reveal on scroll, no typewriter or bounce effects. A
visitor who wants motion can turn animations on explicitly.

**Why this priority**: The static feel is a defining trait of the theme.

**Independent Test**: Select "Wireframe", scroll and navigate: content appears instantly. Enable animations in the
settings: motion appears. Switch to "Default": animations follow the Default setting again.

**Acceptance Scenarios**:

1. **Given** "Wireframe" is selected, **When** a page loads or the visitor scrolls, **Then** no element fades, slides or
   moves.
2. **Given** "Wireframe" is active, **When** the visitor enables animations, **Then** animations run immediately and the
   choice is kept.
3. **Given** the visitor enabled animations in "Wireframe", **When** they switch to "Default" and back to "Wireframe",
   **Then** animations are off again, because every theme switch resets tweaks to the theme defaults.
4. **Given** the visitor's system requests reduced motion, **When** animations are enabled, **Then** content still
   appears without movement.

---

### User Story 3 - Fine-tune the theme (Priority: P2)

A visitor adjusts border radius and accent color. Wireframe starts black and white; the visitor may
choose an accent color. All adjustments apply live.

**Why this priority**: Personal control is a core principle of the product, but the theme is useful without it.

**Independent Test**: With "Wireframe" active, change each setting once and watch the page update with no reload and no
"Apply" step.

**Acceptance Scenarios**:

1. **Given** "Wireframe" is active, **When** the visitor first selects it, **Then** the page is black and white, with no
   accent color.
2. **Given** "Wireframe" is active, **When** the visitor picks an accent color, **Then** accent-colored elements update
   immediately.
3. **Given** the visitor changes border radius, **When** they move to another value, **Then** all rounded elements
   follow immediately.
4. ~~**Given** the visitor changes container max-width, **When** they pick another width, **Then** the content column
   resizes immediately.~~ _Superseded 2026-10-22: the theme drawer has no container width control. A saved width still
   applies to the content column on load._
5. **Given** "Wireframe" is selected, **When** the visitor has not changed the radius, **Then** corners are square.

---

### User Story 4 - Theme-ready foundation (Priority: P2)

Every part of the site follows the active theme, so a future third theme needs no per-component rework and also updates
live.

**Why this priority**: Protects the investment: new themes become cheap to add.

**Independent Test**: Walk through every page and every drawer, dialog and panel in each theme, light and dark, and find
no element that keeps the other theme's look.

**Acceptance Scenarios**:

1. **Given** any theme, **When** the visitor visits every page and opens every overlay, **Then** no element shows
   leftover styling from another theme.
2. **Given** a theme change while an overlay is open, **When** the visitor picks another theme, **Then** the overlay and
   the page behind it update together.
3. **Given** the list of available themes, **When** a new theme is registered, **Then** it appears as a choice in the
   theme settings without changes to the settings layout.

---

### Edge Cases

- A saved theme value is invalid or unknown: fall back to "Default".
- Storage is unavailable (private mode): the theme works for the session and defaults on next load.
- Theme changes while the intro overlay is running: the intro finishes without breaking; no content is lost.
- Select list open inside the theme drawer: `Esc` closes the list first, then the drawer; scrolling the list does not
  start a swipe-to-dismiss.
- Theme drawer open on a small screen: the standard dim scrim covers the page (as for every drawer); from `xl` the scrim
  is transparent and the live change stays visible. Closing the drawer shows the result at once.
- Theme changes on a 375 px wide screen: the settings stay reachable and the page does not scroll horizontally.
- Wireframe with dark appearance and each accent color: text keeps WCAG AA contrast.
- Elements that rely on borders for meaning (focus, selected tab, disabled): remain distinguishable in Wireframe without
  borders.
- Brand logos and project images: stay recognizable in Wireframe.
- Seasonal winter scene: stays optional and does not break the static feel (off or non-animated in Wireframe by
  default).

## Requirements _(mandatory)_

### Functional Requirements

- **FR-001**: The site MUST offer exactly two themes: "Default" (today's look and feel) and "Wireframe".
- **FR-002**: The header MUST contain a trigger that opens the theme settings and shows that it relates to theme
  settings.
- **FR-003**: Users MUST be able to select a theme from the theme settings.
- **FR-004**: Selecting a theme MUST update the whole UI immediately, with no reload and no confirm step.
- **FR-005**: Every setting in the theme settings (theme, appearance, accent color, font size, animation, border radius)
  MUST update the UI immediately. (Container max-width is no longer a theme drawer setting since 2026-10-22, see
  FR-026.)
- **FR-006**: "Wireframe" MUST show the same content, order and navigation as "Default"; only appearance differs.
- **FR-007**: "Wireframe" MUST be black and white initially and MUST NOT show an accent color until the user picks one.
- **FR-008**: Users MUST be able to choose an accent color in "Wireframe".
- **FR-009**: "Wireframe" MUST NOT rely on borders, shadows or decorative effects to structure the page; structure comes
  from type, spacing and surface tone.
- **FR-010**: Animations MUST be off by default in "Wireframe": no fade-in, slide-in, scroll reveal, typewriter, bounce
  or looping effect.
- **FR-011**: Users MUST be able to turn animations on in "Wireframe" and the choice MUST take effect immediately.
- **FR-012**: Users MUST be able to change border radius in every theme. _(Container max-width removed from the visitor
  controls 2026-10-22, see FR-026.)_
- **FR-013**: "Wireframe" MUST start with square corners; user changes to radius MUST override this.
- **FR-014**: Switching theme MUST reset animation, accent color, border radius and container max-width to that theme's
  defaults. Appearance (light/dark/system) and font size MUST stay unchanged.
- **FR-015**: The selected theme and settings MUST persist across reloads and visits on the same device.
- **FR-016**: The saved theme MUST be applied before first paint, with no visible flash.
- **FR-017**: Every page, section, overlay (drawer, dialog, theme drawer, tooltip) and control MUST follow the active
  theme
  in light and dark appearance.
- **FR-018**: Adding a further theme MUST NOT require changes to individual page or component logic.
- **FR-019**: Both themes MUST meet WCAG AA contrast, visible focus states and keyboard operation.
- **FR-020**: Reduced-motion preference MUST be honored in every theme, even when animations are enabled.
- **FR-021**: The theme drawer MUST load only when the visitor opens it; pages that never open it MUST NOT pay
  for its controls.
- **FR-022**: The theme settings MUST open in a drawer that behaves like the other drawers of the site (floating bottom
  sheet on small screens, side panel from `xl`, swipe, `Esc`, scrim and a close control to dismiss, focus moves in and
  returns to the trigger). _(Manual edit 2026-10-18)_
- **FR-023**: The appearance setting (light, dark, system) MUST live in the theme drawer only; the header MUST NOT carry
  a separate appearance switch. _(Manual edit)_
- **FR-024**: The header MUST show the theme drawer trigger first, followed by exactly three accent swatches (blue,
  violett, orange) from the `sm` breakpoint up; below `sm` the swatches are available in the theme drawer only. The
  fourth, neutral (foreground/background) swatch MUST appear only in the theme drawer. _(Manual
  edit)_
- **FR-025**: Select controls in the theme drawer MUST use an accessible listbox pattern (arrow keys, typeahead, `Esc`
  closes the list first and the drawer
  only on a second press) and keep today's appearance. _(The user asked for the Base UI primitive; see plan D18.)_ _(
  Manual edit)_
- **FR-026**: The drawer MUST group the radius setting under "Border". It MUST NOT show a "Layout" group or a container
  width control. The container width setting stays in the store, the `data-theme-container-width` attribute, persistence
  and theme defaults, so a saved value still applies. _(Manual edit; "Layout" group removed by manual edit 2026-10-22)_
- **FR-027**: Changing a setting in the theme drawer SHOULD be announced to screen readers (for example "Radius:
  Large"),
  because the result may be out of view. _(Optional enhancement, plan D20.)_
- **FR-028**: In "Wireframe", every image and SVG graphic (photos, project previews, brand logos, logo SVGs,
  interface icons) MUST show in black and white (no hue, gray shades kept: grayscale, not
  two-tone). The visitor's accent color shows
  only on text, buttons, links and the page-frame corner crop marks (FR-034). _(Manual edit 2026-10-18 – 2; clarified 2026-10-18; crop marks excepted 2026-10-22)_
- **FR-029**: "Wireframe" MUST use the "Patrick Hand" font family for headings and body text; code keeps its monospace
  font. Default keeps its current fonts. _(Manual edit 2)_
- **FR-030**: ~~The theme list MUST describe each theme in one short phrase.~~ _Superseded 2026-10-22: the theme list
  shows only the theme names, with no description line. "Wireframe" is still called a "Sketch-based UI" and "Default"
  an "Intense accent UI" in the documentation._ _(Manual edit 2; removed by manual edit 2026-10-22)_
- **FR-031**: In "Wireframe", the page frame MUST have a hand-drawn (sketch-style) border, and the avatar MUST show a
  visible round border. Default is unchanged. _(Manual edit 2026-10-22)_
- **FR-032**: A select option that equals the active theme's default value for that setting MUST be marked "Default"
  in the open list (today: the radius select). _(Manual edit 2026-10-22)_
- **FR-034**: In "Wireframe", when the visitor has picked an accent color, the page-frame corner crop marks MUST show that color (not grayscale). With the neutral accent they stay black or white. _(Manual edit 2026-10-22)_
- **FR-033**: Theme drawer groups MUST have rounded corners that follow the radius setting, and the enabled indicator of
  the toggle MUST use the `background` color in "Wireframe". _(Manual edit 2026-10-22)_

### Key Entities

- **Theme**: A named look and feel (id, label, default settings). Two exist: Default, Wireframe.
- **Theme settings**: The visitor's current choices: theme, appearance, accent color, font size, animation on/off,
  border radius (container max-width is stored but has no control since 2026-10-22).
- **Theme defaults**: Per-theme starting values applied when a theme is selected.

## Success Criteria _(mandatory)_

### Measurable Outcomes

- **SC-001**: A visitor can open the theme settings and switch theme in 3 interactions or fewer (open the drawer, open
  the theme select, pick a theme).
- **SC-002**: After any setting change the page shows the result in under 300 ms with no reload.
- **SC-003**: 100 % of pages and overlays show no leftover other-theme styling in a review of both themes, light and
  dark.
- **SC-004**: In Wireframe with default settings, 0 elements animate on load, scroll or navigation.
- **SC-005**: Text meets WCAG AA contrast in 100 % of theme × appearance × accent combinations checked.
- **SC-006**: Returning visitors see their saved theme on first paint in 100 % of loads, with no visible flash.
- **SC-007**: Content in Wireframe matches Default exactly: 0 differences in text, links or section order.
- **SC-008**: Page usable with no horizontal scroll at 375 px in both themes.
- **SC-009**: A theme or setting change causes no layout shift (0 shift contribution) and no visible stutter.
- **SC-010**: A theme or setting change produces no single main-thread task longer than 50 ms on a mid-range mobile
  profile.
- **SC-011**: Pages that never open the theme settings load no more script for theming than the header trigger and the
  saved-settings restore (measured by comparing page script size before and after this feature, within 2 %).
- **SC-012**: Default theme output is visually unchanged from before this feature in the page content (0 visible
  differences in a before/after comparison of every page, light and dark). The header controls (trigger, swatches, no
  appearance switch) and the theme settings panel are excepted by FR-023, FR-024 and FR-022.

## Assumptions

- Much of the Wireframe groundwork already exists (theme option, monochrome tokens, animation off by default, settings
  panel). This feature completes, corrects and verifies it rather than starting from zero.
- The theme settings live in a theme drawer (revised 2026-10-18; the earlier sidebar panel is retired); the header
  trigger opens it.
- The border radius control exists as a placeholder or partial control today and becomes fully working. The container
  max-width control was built and then removed from the drawer on 2026-10-22.
- Unused theme values (`crazy-color`, `notes`) are not offered to visitors.
- "Border" in the user's request means shape settings (radius), not a new border-style editor.
- Settings are stored locally on the device only; no accounts or sync.
- Light and dark appearance remain independent of the theme.
- "Black and white" for images means monochrome (grayscale), not a two-tone threshold, so photos stay readable
  (confirmed 2026-10-18). The phrase for "Default" is "Intense accent UI" (owner-confirmed 2026-10-18).
- Out of scope: new content, new pages, and any third theme.

## Manual edits 2026-10-18 – 1

- Move dark / light mode into theme sidebar
- Make theme sidebar a theme drawer as known of the rest of the project
- Limit the theme color swatches to the three accent colors, show the fourth background/foreground color swatch only in
  the theme drawer
- Replace the current `select` component with the respective Base UI component but keep the style as it is now
- Move the theme drawer trigger before the color swatches in the header
- Group „Radius“ theme border setting in „Border“ group
- Make „Container width“ theme setting in „Layout“ group

## Manual edits 2026-10-18 – 2

- For the wireframe theme, svgs and images are black/white
- For the wireframe theme, another font family is implemented and used „Patrick Hand“
- Wireframe theme UI appearance is described as „Sketch-based UI“

## Manuel edits 2026-10-22

- Make a border of page frame src/components/feature/page-frame/page-frame.tsx also in sketch style, when the wireframe
  theme  
  is active
- Remove the additional description line of the themes during theme selection in the theme drawer
- For the avatar src/components/feature/avatar/avatar.tsx, make a rounded border when the wireframe theme is active
- Always provide a theme "Default" setting value to theme select options
- Remove the "Layout" theme setting group
- Make the toggle component src/components/ui/toggle/toggle.tsx pure `background` color for the enabled indicator
- Make rounded corners for theme drawer groups, like for the tools and technologies drawer

## Manuel edits 2026-10-22

- When in wireframe theme, and user has selected an accent color – make the
  src/components/feature/page-frame/page-frame.tsx ``
