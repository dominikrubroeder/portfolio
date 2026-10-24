---
description: 'Task list for Agent view'
---

# Tasks: Agent View

**Input**: Design documents from `/specs/002-agent-view/`

**Prerequisites**: plan.md, spec.md, research.md, data-model.md, contracts/, quickstart.md

**Tests**: One small Vitest file for the pure markdown builder (plan: `src/**/*.test.ts`, node `unit` project). Everything else is verified by the quickstart.

**Organization**: Grouped by user story. Paths are relative to the repository root.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: US1–US3 from spec.md
- Before any task that touches framework code (route handler, `Link`), read the matching guide in `node_modules/next/dist/docs/` (`.../03-file-conventions/route.md`, Cache Components).
- Imports: ui → feature → lib, alphabetized (ESLint `import/order`). Every file in a feature folder is prefixed with the folder name. No new `'use client'` file.
- Run `npm run format` and `npm run lint` after each phase.

---

## Phase 1: Setup

- [x] T001 Re-read `DESIGN.md` (§6.3 z-index, §10 Components, §13, §14), `UX_PRINCIPLES.md` (§2 IA, §4 Button, §6 Responsive, §7) and `src/components/feature/README.md`; read `node_modules/next/dist/docs/01-app/03-api-reference/03-file-conventions/route.md`; run `npm run lint` and `npm run build` once and note that `/` and `/projects` build, as baseline
- [x] T002 Create the draft `specs/002-agent-view/STORY.md` (constitution VII): one page, plain language for a non-technical reader, three parts: purpose (let AI agents and readers take the whole portfolio as plain text), what it provides (one address, home then projects, no styling, link in header on wide screens and footer on narrow, always in sync), how it helps the visitor (fast, readable by tools) and the app (one content source, shows content separated from presentation); lead with the outcome, no jargon, no claim the feature does not deliver

---

## Phase 2: Foundational (blocks all user stories)

**Purpose**: One content source for pages and markdown. No visible change on `/` or `/projects`.

- [x] T003 [P] Create `src/components/feature/home/home-content.ts` and `src/components/feature/home/index.ts`: export `homeStatements` (string[], in page order: "I connect the worlds of design and code", "It's a craft about UI components and design systems", "Building things is about composing things", "Design is about care, intention and purpose", "Code is about functionality, efficiency and performance", "UX is about feel, satisfaction and delight", "Agents are about orchestration and execution", "We compose, direct and oversee", "So we shape the core product UI"), `homeIntro` ({ quote, paragraphs[], signature }) and `homePrinciples` (string[] of the six principles). Copy text verbatim from `src/app/page.tsx` (use real apostrophes `'`, not `&#39;`); the visually hidden h1 text "Design and code speak the same language" goes in as `homeHeading`
- [x] T004 [P] Export philosophy data from `src/components/feature/philosophy/philosophy-core.tsx` by moving `HOLISTIC_PETALS` labels into a new plain file `src/components/feature/philosophy/philosophy-data.ts`: `philosophyTabs = [{ title: 'Core product UI', labels: ['Design','Code','UX'], core: 'UI' }, { title: 'Holistic product UI', labels: [...labels from HOLISTIC_PETALS in order], core: 'UI' }]`; keep `HOLISTIC_PETALS` positions in the component, derived from the same labels; no behavior change; export from `src/components/feature/philosophy/index.ts`
- [x] T005 [P] Add `projectsHeroBlockquote` (the string currently inline in `heroBlockquote` of `src/app/projects/page.tsx`, verbatim) and `HERO_PROJECT_TITLE = 'Value Booster'` to a new `src/components/feature/projects/projects-content.ts`; export from `src/components/feature/projects/index.ts`
- [x] T005b [P] Extract the footer certifications ("Atomic Design" → `/certificates/atomic-design.pdf`, "Subatomic" → `/certificates/subatomic.pdf`) into `src/components/feature/footer/footer-content.ts` (`footerCertifications`, export from `src/components/feature/footer/index.ts`) and use it in `src/components/feature/footer/footer.tsx` (icons stay in the component, keyed by name); put identity (name "Dominik Rubröder", role "UX Engineer") into `src/components/feature/header/header-content.ts` and use it in `header.tsx`. Profile links reuse `socials` (GitHub and LinkedIn only, as in the bottom bar)
- [x] T006 Refactor `src/app/page.tsx` to render statements, intro, principles and h1 from `home-content.ts` (T003) and `src/app/projects/page.tsx` to read the blockquote and hero title from `projects-content.ts` (T005); markup, classes and animation unchanged. Verify `/` and `/projects` render identically (visual diff in light and Wireframe)

**Checkpoint**: pages unchanged, copy in one place.

---

## Phase 3: User Story 1 — Read the whole portfolio as plain markdown (Priority: P1) 🎯 MVP

**Goal**: `GET /agent-view` returns the home then projects content as unstyled markdown.

**Independent Test**: quickstart scenarios 1–4: `curl -i localhost:3000/agent-view`.

- [x] T007 [US1] Create `src/components/feature/agent-view/agent-view-markdown.ts` with pure `buildAgentViewMarkdown(): string` per `contracts/agent-view-markdown-contract.md`: `# Dominik Rubröder, UX Engineer` (from the identity constant); `[Back to the site](${ROUTING_PUBLIC_DOMAIN}/)`; the profile links GitHub and LinkedIn from `socials` as `- [name](href)`; `## Home` (first the line `homeHeading` as plain text, then statements from `homeStatements` as `###` headings, then philosophy tabs from `philosophyTabs` as `###` per tab with a list of labels, then `homeIntro` as `>` quote, paragraphs, signature, then `### Principles` as an ordered list, then `### Main tools` and `### Main technologies` from `mainTools`/`mainTechnologies` as `- [name](href)` lists, then `### More tools` and `### More technologies` with every group of `tools` and `technologies` sorted A–Z by group as `#### group` + link list, matching the drawers); `## Projects` (`>` `projectsHeroBlockquote`, then hero project first (`HERO_PROJECT_TITLE`), then the others in data order; per project: `### title`, line `companies · timeframe` plus `· Ongoing` when `isActive` (company linked when `href`), `description`, `subline`, `Fields:` + `- responsibility` list, `[View title](url)`); then `## Certifications` with `- [name](href)` from `footerCertifications` (absolute URLs via `ROUTING_PUBLIC_DOMAIN`; no tech-stack credits). Rules: heading levels never skip; no HTML, no images; empty optional fields emit nothing; single trailing newline; JSON-safe text only
- [x] T008 [US1] Add `src/components/feature/agent-view/agent-view-markdown.test.ts` (Vitest, node): exactly one `#` and three `##` headings in order Home, Projects, Certifications; profile links before `## Home`; `Home` text comes before `Projects`; every `homeStatements` entry present in order; every project title present, hero first; every tool and technology group present; no `<` HTML tag and no `![` image; empty `subline` produces no blank placeholder; heading levels never skip; ends with one `\n`. Run `npm test`
- [x] T009 [US1] Create `src/components/feature/agent-view/index.ts` exporting `buildAgentViewMarkdown`; create `src/app/agent-view/route.ts` with `export function GET()` returning `new Response(buildAgentViewMarkdown(), { headers: { 'Content-Type': 'text/plain; charset=utf-8' } })`; no request APIs, so it prerenders. Check `next build` lists `/agent-view` as static (not dynamic) under `cacheComponents`; if dynamic, adjust per the route docs read in T001
- [x] T010 [US1] Verify quickstart 1–4: status 200, content type, no `<script>`, no HTML wrapper, identical look under Wireframe + dark + large font, complete text compared with `/` and `/projects` (statements, principles, philosophy tabs, tools, technologies, every project)

**Checkpoint**: `/agent-view` works by address. MVP.

---

## Phase 4: User Story 2 — Enter agent view from the footer (Priority: P2)

**Goal**: "Agent view" link only in the footer, centered above the copyright line; no header link, no prefetch. (Changed 2026-10-22: earlier header-from-`lg` placement removed, see Phase 12.)

**Independent Test**: quickstart scenario 5 at 375 px, 1023 px, 1024 px and 1440 px.

- [x] T011 [US2] Create `src/components/feature/agent-view/agent-view-link.tsx` (server component, no `'use client'`): `Button` `variant="text-muted"` `size="medium"` `href="/agent-view"` `prefetch={false}`, visible text "Agent view", `className` passthrough for layout only. Confirm `Button` (`src/components/ui/button/button.tsx`, spreads `...rest` onto `Link`) accepts and forwards `prefetch`; if its types reject it, add `prefetch?: boolean` to `src/components/ui/button/types.ts` minimally. Export from `src/components/feature/agent-view/index.ts`
- [x] T012 (SUPERSEDED 2026-10-22: link is footer-only, no header placement or thresholds; see Phase 12) [P] [US2] Edit `src/components/feature/header/header.tsx`: render `<AgentViewLink className="absolute top-1/2 right-4 hidden -translate-y-1/2 lg:inline-flex" />` as the last child of `<header>` (after the theme controls in DOM order; `header` is `sticky`/`lg:relative`, so it is the positioning context). Measure the link width and the viewport width at which it clears the theme controls for container width default, wide and full (`data-theme-container-width`); show the header link only at or above that width per setting using CSS variants on that attribute (and `lg`), and record the measured values in `research.md` R5. Check it overlaps no control and keeps the 44 px target
- [x] T013 (SUPERSEDED 2026-10-22: link is footer-only, no header placement or thresholds; see Phase 12) [P] [US2] Edit `src/components/feature/footer/footer.tsx`: render `<AgentViewLink />` with the exact inverse visibility of the header link (visible whenever the header link is hidden, including `lg` and up with wide or full below their thresholds) centered in the footer (inside a `Container as="div" className="text-center"`, consistent with neighboring rows), so exactly one instance is visible per width
- [x] T014 (SUPERSEDED 2026-10-22: link is footer-only, no header placement or thresholds; see Phase 12) [US2] Verify quickstart 5–6: test container width default, wide and full at 375, 1023, 1024, 1100, 1280 and 1440 px, and at 90 % and 110 % text size: exactly one link visible each time, header link never over another control; Tab order and visible focus ring; the hidden instance is not focusable; Network tab shows no prefetch for `/agent-view`; link opens in the same tab; "Back to the site" returns; check light, dark, Wireframe, 110 % font, reduced motion

**Checkpoint**: both stories work independently.

---

## Phase 5: User Story 3 — Content stays in sync (Priority: P3)

**Goal**: A copy edit shows in pages and agent view with no second edit.

**Independent Test**: quickstart scenario 7.

- [x] T015 [US3] Verify sync: edit one statement in `home-content.ts` and one project description in `projects-data.tsx`; confirm `/`, `/projects` and `/agent-view` all show the change; revert the edits. Fix any copy still duplicated outside the content modules (search `src/app/page.tsx` and `src/app/projects/page.tsx` for leftover inline strings)

---

## Phase 6: Polish and cross-cutting

- [x] T016 (SUPERSEDED 2026-10-22: link is footer-only, no header placement or thresholds; see Phase 12) [P] Update `DESIGN.md`: add `AgentViewLink` and the unstyled `/agent-view` route to §10 (feature list), the header placement (absolute `right-4`, `lg` and up; footer below) to the layout/z-index notes if relevant, and a decision-log row (3.0.6 · Agent view is a route handler returning plain text, not a styled page · no theme, CSS or JS can reach it; content from the same modules as the pages)
- [x] T017 (SUPERSEDED 2026-10-22: link is footer-only, no header placement or thresholds; see Phase 12) [P] Update `UX_PRINCIPLES.md`: add `/agent-view` to §2 information architecture; header and footer link behavior (placement per breakpoint, same tab, no prefetch) to §2 and §6; document that content hidden in drawers and tabs appears inline in agent view
- [x] T018 [P] Update `src/components/feature/README.md` (new `agent-view` and `home` features, content-module rule: page copy lives in `*-content.ts`/data files shared with agent view) and add the two features to the list in `DESIGN.md` §10
- [x] T019 Finish `specs/002-agent-view/STORY.md` so it matches the shipped feature (no claim it does not deliver)
- [x] T020 Accessibility pass for the link (constitution IV): accessible name = "Agent view", role link, focus-visible ring, 44 px target, contrast in every accent and theme, does not obscure another control (WCAG 2.2 focus not obscured, target size); if a violation remains, record it in `DESIGN.md` §16 with its measured value
- [x] T021 Run `npm run format`, `npm run lint`, `npm test`, `npm run build`; confirm no new `'use client'` file (`grep -R "use client" src/components/feature/agent-view src/components/feature/home` is empty), `/agent-view` is static, and run the full `quickstart.md`

---

## Dependencies and execution order

- Phase 1 → Phase 2 → US1 (T007–T010) → US2 (T011–T014) → US3 (T015) → Polish.
- T003, T004, T005, T005b are parallel (different files); T006 needs T003 and T005.
- T007 needs T003–T005b; T008 needs T007; T009 needs T007.
- US2 needs only `/agent-view` to exist for a working link (T009), so T011–T013 can start after T009; T011 before T012 and T013 (T012 and T013 touch different files and run in parallel).
- US3 verifies work from Phase 2 and US1.
- T016–T018 are parallel (different files).

## Parallel examples

- Phase 2: T003, T004, T005 and T005b together.
- US2: after T011, T012 and T013 together.
- Polish: T016, T017 and T018 together.

## Implementation strategy

- **MVP**: Phase 1, Phase 2, US1. `/agent-view` works by address.
- **Increment 2**: US2 adds discoverability.
- **Increment 3**: US3 sync verification, then Polish and docs. Do not ship before documentation and `STORY.md` match the code.

## Notes

- Do not wrap the route in a layout or page; keep it a route handler (research R1).
- A task that finds a conflict with the plan stops and updates the plan first.

## Phase 7: Convergence

- [x] T022 Verify keyboard and theme behavior of `AgentViewLink` in a browser and record the result: Tab order reaches the visible instance only, visible focus ring, Enter opens `/agent-view` in the same tab, checked in light, dark, Wireframe, 90 % and 110 % text size and with reduced motion, and the Network tab shows no prefetch request for `/agent-view` per FR-011, T014 and Constitution IV (partial)
- [x] T023 Replace the hardcoded core-tab labels ("Design", "Code", "UX", "UI") in `src/components/feature/philosophy/philosophy-core.tsx` with the labels from `philosophyTabs` in `philosophy-data.ts`, so both tabs read from the single source per FR-006 and US3 (partial)
- [x] T024 Make the footer placement match the documents: `AgentViewLink` sits second in `src/components/feature/footer/footer.tsx`, below "Certified in:", while `DESIGN.md`, `UX_PRINCIPLES.md` and `STORY.md` say "top of the footer". Either move the link block first or change the three documents to say "in the footer" per T013 and Constitution VII (contradicts)
- [x] T025 Run quickstart scenarios 2, 3 and 7 and note the evidence in `specs/002-agent-view/quickstart.md` or the PR description: `/agent-view` identical under Wireframe + dark + large font and with JavaScript disabled, and a copy edit to one statement and one project description shows on `/`, `/projects` and `/agent-view`, then revert, per SC-003, SC-005, SC-006 and T015 (partial)
- [x] T026 Capture before/after screenshots of `/` and `/projects` (light and Wireframe, 375 px and 1440 px) and compare against `main`-branch rendering to confirm the content-module refactor changed nothing visible per T006 and the Phase 2 checkpoint (partial)
- [x] T027 Merge the duplicate imports of `@/components/feature/technologies/technologies-data` in `src/components/feature/agent-view/agent-view-markdown.ts` into one statement, and import `home-content`, `tools-data` and `technologies-data` through their feature `index.ts` barrels where a barrel exists and carries no client component; keep direct imports only for `philosophy-data` (its barrel exports a client component) and add a one-line comment saying why, per `src/components/feature/README.md` ("import another feature only through its `index.ts`") and Constitution II (partial)
- [x] T028 Add the SC-004 check to `specs/002-agent-view/quickstart.md`: give `/agent-view` to an AI agent and ask three fixed questions (who is the author and what is the role, name two tools or technologies, name the hero project and its period); expected: all answered from the document alone, per SC-004 (missing)
- [x] T029 State in `DESIGN.md` §14 rule 4 (or the Agent view section) that `/agent-view` is a route handler without `PageTemplate`, `metadata` and a `HeroNavigation` entry, with the reason, per the plan's constitution deviation note and the F9 analysis finding (missing)

## Phase 8: Convergence

- [x] T030 Decide and record how `/agent-view` relates to search engines in `specs/002-agent-view/research.md` (new section R9): either keep the response as is and state why plain text without a title does not compete with `/`, or add `X-Robots-Tag: noindex, follow` to the headers in `src/app/agent-view/route.ts`; if a header is added, add it to `contracts/agent-view-route-contract.md` and check it with `curl -I` per the spec edge case "must not replace the regular pages as the primary result" and the Assumptions (partial)
- [x] T031 Update `specs/002-agent-view/data-model.md` to match the shipped document: identity and profile links before `## Home`, the hidden home heading line, statements as `###` headings (remove "or bold lines"), `## Certifications` last, and the content modules `header-content.ts`, `footer-content.ts`, `projects-content.ts` and `philosophy-data.ts`; leave `plan.md` unchanged and list these files in `data-model.md` only, per FR-012 and Constitution VII (partial)
- [x] T032 Document the `Button` `prefetch` prop (Next.js `Link` prefetch; pass `false` for targets that are not pages, such as `/agent-view`) in the Button entry of `DESIGN.md` §10 and the Button section of `UX_PRINCIPLES.md` §4 per Constitution VII (partial)
- [x] T033 Run the SC-004 agent check from `quickstart.md` step 8: give the output of `/agent-view` to a fresh agent with no other context, ask the three fixed questions, and log the questions, answers and verdict in the verification log at the end of `quickstart.md` per SC-004 (partial)

## Phase 9: Change request (2026-10-18): small link, leaner footer

- [x] T034 Change `AgentViewLink` in `src/components/feature/agent-view/agent-view-link.tsx` from the ghost button (`ghost-muted`, `medium`) to a small-text link (`link-muted`, `small`) per FR-007
- [x] T035 Edit `src/components/feature/footer/footer.tsx`: move the link to its own line directly above "© 2026 Dominik Rubröder" (visibility wrapper classes unchanged in logic), remove the "Next.js 16.4.2 | React 19.3 | Tailwind CSS 4.3.3" line, and reduce vertical padding (`py-12` → `py-6`, `space-y-6` → `space-y-4`) per FR-007 and FR-013
- [x] T036 (SUPERSEDED 2026-10-22: link is footer-only, no header placement or thresholds; see Phase 12) Re-measure the header link (now 69 × 20 px at 100 %, 76 × 22 px at 110 %) at 375–1900 px for container width default, wide and full at 100 % and 110 % text, and set the header thresholds in `src/components/feature/header/header.tsx` and the inverse in the footer to `83rem` (wide) and `112rem` (full) per FR-007
- [x] T037 Re-run the keyboard, focus-ring, prefetch and same-tab checks for the small link in light, dark, Wireframe, 110 % text, with and without reduced motion, and check the footer visually at 375 px and 1440 px per FR-011 and Constitution IV
- [x] T038 Update `spec.md` (Clarifications, FR-007, new FR-013, Assumptions), `plan.md`, `research.md` (R5, R9), `contracts/agent-view-route-contract.md`, `data-model.md`, `quickstart.md`, `STORY.md`, `DESIGN.md` and `UX_PRINCIPLES.md` to match the small link, the footer change, the thresholds and the `prefetch` prop per Constitution VII

## Phase 10: Convergence

- [x] T039 Fix the stale acceptance wording in `specs/002-agent-view/quickstart.md` scenario 5: replace "44 px target" with a check that the small link has no other control within 24 px and keeps a visible focus ring, per FR-011, the 2026-10-18 small-link decision and `DESIGN.md` rule 5 (partial)
- [x] T040 Put the requirements in order in `specs/002-agent-view/spec.md`: move FR-011 above FR-012 and FR-013 without renumbering any requirement, so every `FR-###` reference elsewhere stays valid, per Constitution VII (partial)

## Phase 11: Dev server and production bundle (2026-10-18)

- [x] T041 Run `next dev` from a clean `.next` and request `/`, `/projects` and `/agent-view`; read the terminal log and the browser console for warnings and errors per the request "make sure next dev and production bundle are working perfectly"
- [x] T042 Fix the dev-only `Invalid media query` warning: remove the placeholder class name (`max-[…]:hidden!`) from `specs/002-agent-view/research.md` and add `@source not '../../specs'` and `@source not '../../.specify'` to `src/app/globals.css` so planning documents never generate CSS (R10)
- [x] T043 Verify hot reload in `next dev`: edit a statement in `src/components/feature/home/home-content.ts`, see it on `/` and `/agent-view`, revert it
- [x] T044 Run `npm run build` and `next start`; confirm no warnings, `/agent-view` is static, no console errors, and re-run the layout, keyboard, focus, prefetch and no-JS checks against the production server
- [x] T045 Record the finding, fix and evidence in `research.md` (R10), `plan.md` (Build and runtime verification) and `quickstart.md` (scenarios 9 and 10 and the verification log)

## Phase 12: Change request (2026-10-22): footer-only `text-foreground` link

- [x] T046 Edit `src/components/feature/agent-view/agent-view-link.tsx`: `variant="text-foreground"` (keep `size="small"`, `href`, `prefetch={false}`) per `spec.md` "Manual modifications 2026-10-22"
- [x] T047 [P] Edit `src/components/feature/header/header.tsx`: remove the `AgentViewLink` import and element (and any header layout class added only for it, such as `lg:relative` if unused otherwise)
- [x] T048 [P] Edit `src/components/feature/footer/footer.tsx`: render `<AgentViewLink />` always, centered, on its own line above the © line; remove the visibility wrapper classes (`lg:hidden`, `in-data-[theme-container-width=…]` variants)
- [x] T049 Verify quickstart 5 at 375, 1023, 1440 px, container width default, wide, full, 110 % text, light, dark, Wireframe: one centered footer link, none in the header, focus ring, hover `primary`, no target within 24 px, no prefetch, same tab
- [x] T050 Update `spec.md` (FR-007, FR-011, Assumptions, User Story 2 wording: footer only), `DESIGN.md` (§10 Agent view, §15 decision-log row) and `UX_PRINCIPLES.md` (§2, §4 Button, §6) and `STORY.md` to match; remove header-threshold text per Constitution VII
- [x] T051 Run `npm run format`, `npm run lint`, `npm run build`; confirm `/agent-view` stays static

## Phase 13: Convergence

- [x] T052 Verify the footer link in a browser (375, 1023, 1440 px; container width default, wide, full; 110 % text; light, dark, Wireframe): one centered link, none in the header, visible focus ring, hover turns `primary`, no prefetch, same tab; log results in the verification log of `quickstart.md`, per FR-007, FR-011 and T049 (partial)
- [x] T053 Measure the gap between the certification buttons and the `text-foreground` `small` link (`space-y-4` = 16 px, link about 20 px high); if another target lies within 24 px, increase the gap or the link size in `src/components/feature/footer/footer.tsx` so the WCAG 2.2 target-size spacing rule holds, per FR-011, Constitution IV and `DESIGN.md` rule 5 (partial)
- [x] T054 Update stale header-link wording in `plan.md` (Testing line 26, Constraints line 34, Constitution Check row I line 55) to the footer-only link, per FR-007 and Constitution VII (partial)
- [x] T055 Update `spec.md` Clarifications (2026-10-18 header-overlap Q&A, lines 22–23) and FR-011 ("existing header design") to state they are superseded by the footer-only link of 2026-10-22, per FR-007 (partial)
