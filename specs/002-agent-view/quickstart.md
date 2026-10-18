# Quickstart: validate Agent View

## Prerequisites

`npm install`. Read `AGENTS.md` (Next.js differences).

## Run

```sh
npm run dev          # http://localhost:3000
npm test             # unit tests for the builder
npm run lint && npm run format
npm run build        # confirm /agent-view is prerendered (static)
```

## Scenarios

1. **Document (US1)**: `curl -i localhost:3000/agent-view`. Expect `200`, `content-type: text/plain; charset=utf-8`,
   body starts with `# Dominik Rubröder, UX Engineer`, `## Home` before `## Projects`, no `<` HTML tags.
2. **No styling (US1, FR-004/005)**: open `/agent-view` in a browser. Plain text only. Set Wireframe + dark + large
   font on `/`, reopen `/agent-view`: identical.
3. **No JS (FR-010)**: disable JavaScript, reload: full text shown. Response has no `<script>`.
4. **Completeness (SC-002)**: compare statements, principles, tools, technologies, philosophy tabs and every project on
   `/` and `/projects` with the document.
5. **Entry link (US2)**: on `/` and `/projects`, "Agent view" is a small text link (no button background). At `lg` (1024 px) and wider with the default column it is in the header, 1 rem from the right, vertically centered, covering no other control. Below `lg` (check 375 px and 1023 px), and with container width wide (below 83 rem) or full (below 112 rem), it is in the footer on its own line directly above "© 2026 Dominik Rubröder" and not in the header. The footer has no Next.js / React / Tailwind line and is visibly shorter than before. Never two visible at once. Network tab shows no prefetch request for `/agent-view`. Click, tap, and Enter via keyboard: lands
   on `/agent-view`, same tab. Check 375 px, 110 % font, dark, wireframe: no overlap, visible focus ring, and no other control within 24 px of the small link (WCAG 2.2 target-size spacing rule).
6. **Return (FR-008)**: use "Back to the site" link and browser back.
7. **Sync (US3, SC-005)**: edit a statement in `home-content.ts` and a project description in `projects-data.tsx`;
   both pages and `/agent-view` show the change.
8. **Agent check (SC-004)**: give the `/agent-view` text to an AI agent with no other context and ask: who is the author and what is the role, name two tools or technologies, name the hero project and its period. All three are answered from the document alone.
9. **`next dev` (2026-10-18)**: `rm -rf .next && npm run dev`; request `/agent-view`, `/` and `/projects`. Expect: no warning or error in the terminal (in particular no `Invalid media query` from `globals.css`), HTTP 200, no console errors in the browser, and a hot-reload edit of one statement in `home-content.ts` shows on `/` and `/agent-view` and disappears again when reverted.
10. **Production bundle (2026-10-18)**: `npm run build && npm start`; expect no build warnings, `/agent-view` listed as static (`○`), no console errors, the link behaves as in scenario 5, and no script on `/agent-view`.
11. **Docs**: `DESIGN.md`, `UX_PRINCIPLES.md`, `feature/README.md`, `STORY.md` describe the view and link.

## Verification log (2026-10-18, Chromium via Playwright, production build)

- **Entry link (US2, FR-011):** exactly one link visible at 375, 1023, 1024, 1100–1900 px for container width default, wide and full, also at 110 % text. Never overlaps the theme controls. 112 × 44 px (124 × 48 px at 110 %). Header link is Tab stop 6 at 1440 px, footer link is Tab stop 33 at 375 px. `:focus-visible` ring present in light, dark, Wireframe, 110 % text, with and without reduced motion. Enter opens `/agent-view` in the same tab. No request to `/agent-view` before the click (no prefetch). The hidden instance has zero size and is not in the Tab order.
- **No styling, no JS (scenarios 2 and 3):** `/agent-view` has 0 style sheets and 0 scripts; the text is identical with JavaScript off, and with saved Wireframe + dark + large font.
- **Sync (scenario 7):** a test edit of one home statement and one project description showed on `/` and `/projects` and, in both places, on `/agent-view`. Edits reverted.
- **Refactor (T026):** `main` screenshots and text of `/` and `/projects` at 375 and 1440 px, Default and Wireframe, are identical between the commit before this feature and this branch.
- **Small link and footer (2026-10-18, user change request):** link is `link-muted` `small`, 69 × 20 px at 100 % text (76 × 22 px at 110 %). Re-measured at 375–1900 px for default, wide and full, at 100 % and 110 % text: exactly one link visible, never over a control. Header thresholds: wide from 83 rem, full from 112 rem. Footer shows the link above the © line, the version line is gone, padding is `py-6` / `space-y-4`.
- **Agent check (SC-004, step 8):** answered from the `/agent-view` text alone, by the implementing session and not by a separate fresh agent (so it is weaker evidence). Q1 author and role: "Dominik Rubröder, UX Engineer" (first line). Q2 two tools or technologies: Next.js and TypeScript (both listed with links under Main technologies). Q3 hero project and period: Value Booster, mediawave commerce GmbH, 2024, ongoing. All three found without leaving the document. Re-run with a fresh agent before release if stronger evidence is wanted.
- **`next dev` and production (scenarios 9, 10):** found and fixed one dev-only problem (a placeholder class name in `research.md` made Tailwind emit an invalid media query; see R10). After the fix: cold `next dev` log is clean, no browser console problems, hot reload works and reverts; `npm run build` and `next start` are clean, `/agent-view` is static, entry-link layout identical at 375–1900 px (default, wide, full), keyboard and no-JS checks pass.
