@AGENTS.md

# Design and UX

Read these before changing or adding any UI:

- @DESIGN.md — design language: tokens, color, typography, layout, motion, themes, components, dos/don'ts, decision log.
- @UX_PRINCIPLES.md — UX principles, component behavior and interaction patterns.

Apply the six core design principles (DESIGN.md §1.1: context, system, problem-focused, business-aware, sustainable, the experience) to every UI decision, generated or hand-written. Their wording lives in `src/components/feature/design-principles`; reuse it, never retype it.

Update both files in the same change when a design or behavior decision changes.

# Figma sync

When you create or update a component (`src/components/ui`, `src/components/feature`), sync the related Figma component in the same task. File: Portfolio, key `yGICVbl9clikVNXP2Lkkue`; pages `↪ ui`, `↪ features`, `↪ tokens`. Load the `figma-use` skill before `use_figma` (and `figma-generate-library` for new components or tokens). New tokens get a Figma variable. Pure refactors with no visual or API change are exempt. If Figma is unreachable, say which component is out of sync. See DESIGN.md rule 10.

# Browsing the app (agents)

The typewriter intro covers the page for about 4 s and scroll reveals keep content hidden until it is in view. To inspect or screenshot the page at once, set `NEXT_PUBLIC_AGENT_MODE="true"` in `.env.local` (untracked, create it if missing) and restart `next dev`. Agent mode forces animations off before first paint, as the in-app animations switch does: no intro, every reveal in its final state, no transitions, no snowfall. Nothing is saved to the visitor's storage. Set it back to `false` or remove the line when done; editing `.env` (for example `touch .env`) makes a running dev server reload it, deleting `.env.local` alone does not.

## Reviewing animations (agents)

To build or judge motion, agent mode must be off: `NEXT_PUBLIC_AGENT_MODE` is `false` or missing (remove it from `.env.local`, then `touch .env`).

1. Open the page and read `document.documentElement.dataset.themeAnimations`. It must be `on`. Saved settings win over the default: `localStorage` key `dr-theme-animation` set to `false`, or the Wireframe theme (starts with animations off), keeps it `off`. Remove the key or switch the theme to Default with animations enabled, then reload.
2. The OS setting `prefers-reduced-motion: reduce` also skips the intro and the reveals. Do not emulate it unless you test reduced motion.
3. Keep the browser pane visible. In a hidden pane, transitions and animations stall, so a screenshot shows a half-finished state.
4. The intro plays once per load (about 4 s). Wait for it, or press a key to dismiss it. Reload to replay it.
5. Reveals play once when a section enters the viewport (100 px margin) and never replay. Reload and scroll the section into view to see it again.
6. Hover, press and focus transitions need a real pointer or key action. Take the screenshot after the 300 ms transition ends.
7. When done, set the page back to your starting state (flag, storage key, theme).
