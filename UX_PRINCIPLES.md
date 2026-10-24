# UX_PRINCIPLES.md

How the portfolio **behaves**: recurring principles, component behavior and interaction patterns. For how it **looks**,
see [DESIGN.md](./DESIGN.md).

> Describes current behavior in code. When behavior changes, update this file in the same change.

## 1. Principles

1. **Content first, chrome second.** The reading column, statements and project work lead. Controls stay small and
   peripheral.
2. **One clear next step.** Each view has one dominant action. Home: "Selected work"; `/projects`: "Home" (sticky bottom bar). Project cards:
   "View <project>".
3. **The visitor is in control.** Appearance, accent color, font size and animation are user settings, remembered and
   never forced. Respect OS preferences by default (`system`, reduced motion).
4. **Instant feedback.** Every hover, press and toggle reacts visibly in ≤ 300 ms. State changes apply immediately —
   no "Save" step.
5. **Progressive disclosure.** Show the summary; put depth in drawers (tools, technologies, philosophy, education, UX)
   or external links (projects).
6. **Predictable and consistent.** Same component = same behavior everywhere. Same words for same things.
7. **No surprises.** No auto-opening overlays, no scroll hijacking, no unexpected new tabs for internal navigation, no
   sound.
8. **Delight with restraint.** Playful moments (intro phrases, snowfall, typewriter) are short, skippable or optional,
   and never block content.
9. **Accessible for everyone.** Keyboard, screen reader, touch, reduced motion, light/dark, and 90–110 % text scale all
   work equally.
10. **Mobile is a first-class layout.** Same hierarchy, re-arranged: bottom sheets instead of side panels, stacked
    button groups, full-width CTAs.
11. **Show button state in the button itself.** Loading, saving and progress live inside the button that triggered the
    action, never in a separate spinner, banner or page overlay. See [Button state](#button-state).

## 2. Information architecture

```
/                       Introduction (statements, philosophy, principles, tools, technologies)
/projects               Selected work 2016–2026
/agent-view             The home and projects content as plain markdown (no styling)
```

- Navigation is **content-led**: `HeroNavigation` ("More" list at the end of a page) links to the other top-level pages
  and hides the current page. There is no persistent main menu.
- The header carries identity (avatar, name, role), the theme settings
  trigger (a palette icon, labelled "Theme settings", visible at every width) and, from `sm` up, three accent swatches
  (blue, violett, orange). Appearance lives in the theme drawer.
- **Agent view** (`/agent-view`) is a text document for AI agents and readers who want the content without design. It lists identity and profile links, then the home content (statements, philosophy tabs, intro, principles, all tools and technologies, including drawer content), then the projects, then the certifications. It is not part of `HeroNavigation`; the only link lives in the footer, centered on its own line above the copyright line, at every width. It is a small `text-foreground` button (renders as an anchor). Same tab, no prefetch (`Button` accepts `prefetch={false}`, passed to the Next.js `Link`). The page has a "Back to the site" link and ignores all theme settings.
- Deep links to sections use `scroll-mt-responsive` so sticky bars never cover the target.
- `ScrollToTop` resets the scroll position on route change; `ButtonScrollToTop` is available for long pages.

## 3. Page patterns

### Page anatomy

Header → (optional intro) → sections in a `Container` → `HeroNavigation` → `Footer`.
Inner pages use `PageTemplate` (H1 + hero blockquote + content).

### Section reveal

Sections fade/slide in once when they enter the viewport (`Animate`, `once: true`). They never replay on scroll back.
Above-the-fold content uses delays (0.16 / 0.32 / 0.44 s) to stagger; below-the-fold uses viewport triggers.

### Sticky headings

`h2` sticks to the top of the viewport while its section scrolls (`sticky-headline`, offset below the mobile header).
This keeps context on long pages. Opt out with the `sticky-none` class where the heading sits inside a card or band.

### Sticky call to action

`PageNavigationBar` is a bottom bar (`sticky bottom-0`) on every page. It holds one primary link and the social links. The link is "Selected work"; on `/projects` it swaps to "Home" with a 300 ms cross-fade and slide (CSS only, `motion-safe:`; instant with reduced motion). The hidden button is `inert`, so keyboard and screen readers only reach the visible one. One bar per page, max.

### Intro

On first load a typewriter overlay shows a random short phrase (`IntroProvider`, `TypewriterOverlay`). Content
reveals after it finishes via `Animate active`. The overlay must never trap focus or delay content by more than a few
seconds.

### Statement sequence

Big statements separated by three-dotted dividers create a read-and-scroll rhythm. Keep one idea per statement.

## 4. Component behavior

### Button

- Renders `<button>`, `<Link>` or `<a>` depending on props — pick the semantic element via props, not wrappers.
- Internal `href` → client navigation, same tab. `https`/`.pdf` → new tab with `rel="noopener noreferrer"` and an
  arrow-up-right indicator (hide only with `hideExternalIndicator`).
- `mailto:` / `tel:` → accessible label ("Write email to …", "Call …").
- `download` → opens file in a new tab with a descriptive label.
- States: hover (color shift, radius tighter), active (`scale-95`), focus-visible ring, disabled (`not-allowed`
  cursor). Ghost buttons reveal a tinted pill on hover/press.
- Icon-only buttons set `iconOnly` and a `label`. The `label` is the accessible name and the `Tooltip` text; no native
  `title` is set (see [Accessibility](#7-accessibility-behavior)).
- Visible text is the accessible name. Do not override it with `aria-label`.
- Links that open a new tab add a visually hidden "(opens in a new tab)" (icon-only: appended to the `aria-label`).
- Min target: 44 px (`medium`, `large`).
- `prefetch={false}` on an internal `href` turns off Next.js prefetching. Use it for targets that are not pages (for
  example `/agent-view`, a plain text document).

#### Button state

Loading, saving and progress belong inside the button that triggered the action. Do not move feedback to a separate
spinner, banner or page overlay.

- Keep the button in place. Do not change its size, so the layout does not shift.
- Disable the button while the action runs, to prevent double submits.
- Swap the label to the active form of the action: "Save changes" becomes "Saving…". Add a spinner when the wait is
  noticeable.
- Show determinate progress in the button when the duration is known (for example "Uploading 40%").
- Resolve the state in the button: confirm success or show the failure, then return to the idle label.

### Button group

Wraps with `gap-2`. `stretchButtons`: stacked and full-width on mobile, inline from `sm`. `minimizeSpacing`: tight
segmented look for related toggles (e.g. appearance + accent).

### Links

Plain `a` elements get the `interactive` behavior (pointer, transition, `active:scale-95`) and turn `foreground` on
hover. Use `interactive-none` when a wrapper already handles the interaction (e.g. a link row with a group hover).
Use `ExternalLink` for inline links to other sites.

### Drawer

Used for secondary content (tools, technologies, philosophy, education, UX).

- Opens from a trigger button placed next to the section heading (e.g. "Main tools" ⟶ drawer button).
- Mobile: floating bottom sheet, inset from left, right and bottom, rounded corners, swipe down to dismiss, optional swipe
  handle. Large screens (≥ 1280 px): floating side panel from the right, inset from the edges, swipe right to dismiss.
- Modal: backdrop dims content (transparent on `xl`), focus is trapped, `Esc` and backdrop click close it, scroll is
  contained inside.
- Content is capped to the readable width; header and footer stay visible.

### Theme drawer ("Theme settings")

The theme settings open in a `Drawer`: floating bottom sheet below `xl`, side panel from `xl`, like every other drawer.

- Open via the header trigger (first control in the header). Close via **Done**, scrim click, `Esc` or swipe. Focus moves
  in, stays inside, and returns to the trigger on close; the page behind is inert.
- Loads on first open: pages whose visitor never opens it do not load its controls. The first open slides in like later
  opens.
- Standard scrim (dim below `xl`, transparent from `xl`, where the live change is visible behind the drawer).
- Changes apply live; the drawer only groups them: Base (theme, appearance, color with the neutral swatch), Typography
  (font size), Animation (one "Enable animations" switch), Border (radius). Each control shows
  its current value, also when the setting changed elsewhere (a header swatch or a theme switch).
- Selects are listboxes: arrow keys, typeahead, `Esc` closes the open list first and the drawer on the next press.
- A polite live region announces the changed setting ("Radius: Large") for screen readers.
- **Done** is always visible (sticky footer).

### Tabs

Base UI tabs. Arrow keys move between tabs, selection shows a `primary/10` tint (default) or an underline (`line`
variant). Panels are lazy-friendly and keep their own scroll.

### Dialog

Modal confirmation or focused content. Same close rules as drawers. Never used for marketing or unrequested prompts.

### Avatar

`variant="lightbox"`: the photo becomes a button (zoom-in cursor, `aria-label`). Click opens a modal with the photo
enlarged and centered (max `min(80vmin, 31.25rem)`, the source size). Close via click on photo, click on scrim or
`Esc`; focus returns to the thumbnail. Zoom-in/out animation is skipped with reduced motion. Default variant is
unchanged (link to home or plain image).

### Tooltip

Short text on hover and keyboard focus that explains an icon-only action. Opens after a short delay, closes on `Esc`
or blur, never holds interactive content. Fades in with `motion-safe:`. Touch has no hover, so the `aria-label` carries
the same text.

### Badge

Non-interactive status label ("Ongoing"). Never a button.

### Toggle / Select

Binary options use `Toggle` with a visible label. It renders a `button` with `role="switch"` and `aria-checked`, so it works with keyboard and screen readers; without a visible label pass `ariaLabel`. `Select` is a Base UI listbox (arrow keys, typeahead, `Esc` closes the list and returns focus to the trigger). Options may carry an icon and a "Default" tag (`isDefault`: the option equal to the active theme's default, shown in the open list and read as "Medium, Default", not in the trigger). It can be
controlled (`value`, an option `key`) so it follows a setting that changed elsewhere, and its name includes the setting
("Radius: Medium"). Multi-option settings use `Select` or segmented controls with the current value visible. Appearance is
a `Select` in the theme drawer with sun, moon and sparkles icons (Light, Dark, Auto).

### Divider

Visual rhythm only — `hr`, `dot` (meta separators like "Company · 2021–2024"), `three-dotted` (section break, rendered by `DotsDivider`, also separating projects on `/projects`). Hidden
from assistive tech or semantically plain; never carries meaning alone. `DotsDivider` stacks vertically by default; `alignment="horizontal"` lays the dots in a row; `animate={false}` keeps them still.

### Typewriter

Types phrase character by character; shows full text immediately when reduced motion is on.

### Brand / logo list

Grid of tools and technologies; each entry may link out. Logos inherit color tokens so they remain visible in dark and
wireframe themes.

### Cursor

Accent-colored dot instead of the system arrow, on devices with a fine pointer (`hover: hover`, `pointer: fine`).

- Clickable elements: the dot grows. Press (`:active`): the dot shrinks. Together they confirm "this is clickable" and
  "this registered".
- Unavailable (`:disabled`, `aria-disabled`, `data-disabled`, `.cursor-not-allowed`): the dot becomes a faded
  rounded rectangle with a bar. Shape, not only opacity, says "not available".
- Text fields: vertical pill, so the insertion point stays precise. Zoom, grab and busy states have their own shapes.
- Not applied under forced colors (system cursor stays) or on touch.
- Opt out with `data-theme-cursor='system'` on `<html>`. There is no settings control for it yet.
- Never rely on cursor shape alone: states are also shown in the element (focus ring, disabled styling, labels).
- Use `cursor-*` Tailwind classes as before; `cursor.css` maps them to the images.

### Snowfall (winter event)

Ambient decoration in the winter season only; can be turned off, remembered per visitor, pointer-events none.

## 5. Interaction patterns

### Settings persistence

Theme, appearance, accent, font size, animations, radius, container width, persona and winter toggle are saved to
`localStorage` (`dr-theme*`). An inline script applies them before first paint (as `data-theme-*` attributes on `<html>`)
to avoid a flash. Invalid or missing values fall back to the saved theme's defaults; an unknown theme falls back to
Default. If storage is unavailable (private window, blocked site data) a change still applies for the session and
defaults return on the next load. Settings are never sent to a server.

### Theme switching

- **Appearance**: light / dark / system, set in the theme drawer. `system` follows OS changes live.
- **Accent**: neutral (black/white), blue, violett, orange. Applies instantly.
- **Theme (style)**: Default ("Intense accent UI") / Wireframe ("Sketch-based UI"); the open list shows the two names only. Wireframe uses a handwritten font and grayscale images, icons and logos. Selecting a theme applies its defaults for accent, animations, radius and
  container width (Wireframe: neutral accent, animations off, square corners; Default: blue, animations on, 6px). The
  visitor's own tweaks in the previous theme are replaced; appearance and font size stay.
- **Radius**: none / small / medium / large. Applies instantly to every rounded element.
- **Container width**: default / wide / full. No control in the theme drawer (removed 2026-10-22); a saved value still applies to the reading column.
- **Animations**: one switch, in every theme. Off: content appears at once (no reveal, intro typing, bounce, pulse or
  snowfall). Turning it on later never replays the intro.
- **Font size**: small / medium / large scales the whole page from the root.

### Motion

#### Native CSS first

Animations run on the browser's native engine whenever possible. CSS transitions, `@keyframes` and Tailwind utilities
are declarative, run off the main thread, need no JavaScript bundle or hydration, and honor `prefers-reduced-motion`
through a single media query. JavaScript animation (`motion`) is the exception, not the default. It is reserved for what
CSS cannot do, such as scroll or viewport-triggered reveals with orchestration, gesture-driven or physics-based motion,
or animating values that CSS cannot interpolate.

- Always prefer CSS animation whenever possible. Switch to JavaScript animation only when the animation can not
  otherwise be achieved.

#### Behavior

- Every animation is `reduced-motion` aware: CSS uses `motion-safe:` or `prefers-reduced-motion`, JavaScript
  animation runs inside `MotionConfig reducedMotion="user"` or checks the preference itself.
- Reveals run once; hover/press feedback is immediate.
- With reduced motion enabled (OS) or animations disabled (in-app), content appears without movement and keeps its
  order and hierarchy.
- Nothing animates infinitely inside reading areas, except the three-dotted divider (small, sequential bounce; static
  when animations are off and with reduced motion).
- The in-app animation switch (`data-theme-animations`) and the OS reduced-motion setting both end motion; either one is
  enough. Wireframe starts with animations off.

### Navigation

- Internal links: same tab, scroll to top.
- External links: new tab, arrow indicator, descriptive label.
- Sticky elements must never hide a focused element or anchor target.

### Hover, focus, active

Every interactive element has: default → hover → focus-visible → active → disabled. Hover is never the only way to
reach information (touch, keyboard).

### Loading

Prefer server-rendered content and `Suspense` boundaries; images have fixed dimensions to prevent layout shift;
hero images use `preload`. No spinners for content that renders statically.

### Empty / error states

Optional data (company link, preview image, description) is simply omitted — layout adapts (`project.previewImage ?
image : logo`). Missing context never renders placeholder text.

### Copy

Short, concrete, first person. Sentence case. Labels name the outcome ("Selected work", "View Value Booster", "Done"),
not the mechanism ("Click here", "Submit").

## 6. Responsive behavior

| Width         | Behavior                                                                              |
| ------------- | ------------------------------------------------------------------------------------- |
| `< xs` (375)  | Single column, tightest gaps, statements `text-4xl`                                   |
| `xs` – `sm`   | Header shows only the theme trigger; statements `text-5xl`                            |
| `sm` (640) +  | Accent swatches in header; button groups inline; `text-7xl` statements                |
| `lg` (1024) + | Header becomes non-sticky; decorative SVG shapes appear; section scroll offsets reset |
| `xl` (1280) + | Drawers become side panels; scrim becomes transparent                                 |

Rules: no horizontal scroll (`overflow-x-hidden` on body is a safety net, not a design tool); touch targets ≥ 44 px;
primary action reachable with one thumb (bottom bar).

## 7. Accessibility behavior

- Tab order follows visual order; no positive `tabindex`.
- Overlays: focus moves in, is trapped, returns to the trigger on close.
- Live preferences: `prefers-color-scheme`, `prefers-reduced-motion` are honored by default.
- Links that open new tabs state it; icon buttons are labeled; images have meaningful `alt` (decorative = empty).
- Icon-only button actions always have a tooltip that explains what the action does, unless a clear visible label
  already does. The tooltip shows on hover and keyboard focus, never on hover alone.
- Color is never the only signal (active states also change tint/underline/weight).
- Text can scale 90–110 % without loss of content or overlap.

## 8. Do and don't

**Do**

- Reuse an existing pattern before inventing one.
- Give every action immediate, visible feedback.
- Keep overlays dismissible three ways: control, scrim, keyboard.
- Test keyboard-only, a 375 px viewport, dark mode, wireframe and reduced motion.
- Persist only preferences; keep storage keys prefixed `dr-`.

**Don't**

- Hide essential content or actions behind hover.
- Auto-open drawers or dialogs.
- Hijack scroll or snap pages.
- Stack sticky bars (header + one bottom bar is the maximum).
- Add a second primary CTA to a view.
- Open internal links in new tabs.
- Use animation to convey state that has no other cue.
- Block rendering on decorative elements (intro, snow, shapes).

## 9. Checklist for new UI

1. Which existing pattern does this extend?
2. What is the one primary action?
3. What happens on hover, focus, active, disabled, touch? For async actions: where do loading, progress, success and
   failure show in the button?
4. How does it look/behave with reduced motion, dark mode, wireframe, 110 % text?
5. Is it operable and understandable with keyboard and screen reader?
6. What does it do when data is missing?
7. Is the behavior documented here and in a story?
8. Does it work in every theme (Default, Wireframe), appearance, accent, radius setting and font size, and does it match the documented style patterns in DESIGN.md?
9. Did I run the accessibility checks (contrast, focus, keyboard, accessible names, landmarks, reduced motion) while building, and fix or report every violation?
