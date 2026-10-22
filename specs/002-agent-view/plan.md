# Implementation Plan: Agent View

**Branch**: `002-agent-view` | **Date**: 2026-10-18 | **Spec**: [spec.md](./spec.md)

**Input**: Feature specification from `/specs/002-agent-view/spec.md`

## Summary

Add `/agent-view`: one unstyled markdown document with the home content (`/`) first and the projects content
(`/projects`) below. Add an "Agent view" link, always in the footer, centered on its own line above the copyright line, rendered as a `Button` with `variant="text-foreground"` (change request 2026-10-22, supersedes the earlier header placement and `link-muted`). Not prefetched. The footer also loses its framework-version line and gets smaller vertical padding.

Approach: a **route handler** (`src/app/agent-view/route.ts`) returns the markdown as `text/plain; charset=utf-8`.
A route handler is not wrapped by the root layout, so no header, footer, theme script, fonts, CSS, cursor, intro or
snowfall can reach it. No styling is not "styled to look plain", it is absent. The text comes from a pure builder in a
new feature folder. The home and projects pages read their copy from the same extracted content modules, so the two
cannot drift (FR-006).

## Technical Context

**Language/Version**: TypeScript, Next.js 16 (App Router, `cacheComponents: true`), React 19

**Primary Dependencies**: none new

**Storage**: N/A (content lives in code: `projects-data.tsx`, `tools-data.ts`, `technologies-data.ts`, new content modules)

**Testing**: Vitest `unit` project (`src/**/*.test.ts`, node) for the builder; manual quickstart for the route and footer link

**Target Platform**: Vercel, all browsers, plus AI agents fetching over HTTP

**Project Type**: web application (single Next.js app)

**Performance Goals**: response is static text, built once at build time; no client JS on the route

**Constraints**: no new dependency; no `'use client'` file; the footer link must not add a client boundary; passes `npm run lint` and `npm run format`

**Scale/Scope**: 2 pages, about 8 projects, about 15 tool/technology groups, one short document

## Build and runtime verification

Both runtimes are part of done, not only the production build:

- `next dev`: starts cold with a clean log (no CSS, TypeScript or hydration warnings), `/`, `/projects` and `/agent-view`
  return 200, the browser console has no errors, and a hot-reload edit of a content module reaches the pages and
  `/agent-view`. Root cause and fix of the one dev-only warning found: [research.md](./research.md) R10.
- `npm run build` and `next start`: `/agent-view` is prerendered as static, no build warnings, no new client
  component (the link, builder and route are server code), same layout and keyboard results as in dev.
- Details: [quickstart.md](./quickstart.md), scenarios 9 and 10.

## Constitution Check

_GATE: passed before Phase 0, re-checked after Phase 1._

| Principle                       | Result                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| ------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| I. Design source of truth       | Pass. Footer link uses existing `Button` variants and tokens. `DESIGN.md` and `UX_PRINCIPLES.md` updated (new view, footer link, decision-log row).                                                                                                                                                                                                                                                                                                                                            |
| II. Existing architecture       | Pass. New code in `src/components/feature/agent-view/` with prefixed files and `index.ts`. `feature` consumes `ui` only. Route lives in `src/app`.                                                                                                                                                                                                                                                                                                                                             |
| III. ESLint and Prettier        | Pass by task: `npm run format` and `npm run lint` gate.                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| IV. Accessible by default       | Pass. The link sits only in the footer, so it never covers another control. Native anchor, visible text, focus ring, `text-foreground` on `background` (AA). Size stays `small` (about 20 px high): a standalone link in a dense, non-primary context; the footer row above and the © line below must stay at least 24 px away (verify in T049), so the WCAG 2.2 target-size spacing rule holds. Output is plain text with heading hierarchy in markdown. See [research.md](./research.md) R5. |
| V. Simplicity and content first | Pass. One route handler, one builder, content extraction only where copy is inline today. No dependency.                                                                                                                                                                                                                                                                                                                                                                                       |
| VI. Server-first, CSS-first     | Pass. No client component added. The link is a server-rendered anchor.                                                                                                                                                                                                                                                                                                                                                                                                                         |
| VII. Documentation and STORY.md | Pass by task: `DESIGN.md`, `UX_PRINCIPLES.md`, `feature/README.md`, `specs/002-agent-view/STORY.md`.                                                                                                                                                                                                                                                                                                                                                                                           |

Deviation to note: constitution and `DESIGN.md` rule 4 require `metadata` with the title pattern on a new page. A route
handler has no `<head>`; there is no title to set. The spec assumption on a page title is superseded: the document
starts with an `#` heading instead (research R2). Justified, no violation of intent.

No violations. Complexity Tracking not needed.

## Project Structure

### Documentation (this feature)

```text
specs/002-agent-view/
├── plan.md
├── research.md
├── data-model.md
├── quickstart.md
├── contracts/
│   ├── agent-view-route-contract.md
│   └── agent-view-markdown-contract.md
├── checklists/requirements.md
├── STORY.md              # created with tasks, finished before ship
└── tasks.md              # /speckit-tasks
```

### Source Code (repository root)

```text
src/
├── app/
│   ├── agent-view/route.ts                 # NEW  GET -> text/plain markdown
│   ├── page.tsx                            # EDIT read copy from home content
│   └── projects/page.tsx                   # EDIT read hero blockquote from projects content
├── components/feature/
│   ├── agent-view/                         # NEW
│   │   ├── index.ts
│   │   ├── agent-view-markdown.ts          # buildAgentViewMarkdown(): string (pure)
│   │   ├── agent-view-markdown.test.ts     # unit tests
│   │   └── agent-view-link.tsx             # footer link (server component, `text-foreground`)
│   ├── home/                               # NEW  (extracted copy)
│   │   ├── index.ts
│   │   └── home-content.ts                 # statements, intro paragraphs, principles
│   ├── header/header.tsx                   # EDIT remove the link again (2026-10-22)
│   ├── footer/footer.tsx                   # EDIT link centered above © line, always visible, remove version line, py-6
│   ├── philosophy/philosophy-core.tsx      # EDIT export petal labels data (no behavior change)
│   └── projects/projects-data.tsx          # EDIT export projects intro text
└── ...
DESIGN.md, UX_PRINCIPLES.md, src/components/feature/README.md   # EDIT
```

**Decision (resolved, 2026-10-22)**: the link lives only in the footer, centered on its own line directly above the
copyright line, at every width and container-width setting. The header link, its `lg` / `83rem` / `112rem` overlap
thresholds and the CSS visibility wrappers (`lg:hidden`, `in-data-[theme-container-width=…]:` variants) are removed:
there is one instance, so "exactly one visible" holds by construction and nothing can overlap a header control. The
Button is `variant="text-foreground"` (`text-foreground`, `hover:text-primary`); `size` stays `small` because the
change request names only the variant, and the footer is a dense, non-primary context (DESIGN.md rule 5).

Earlier decision (2026-10-18, superseded): header link from `lg` up, footer elsewhere, thresholds measured in T012 and T036.

**Structure Decision**: single Next.js app. Feature folder `agent-view` owns the builder and the link. Page copy that is
inline JSX today moves to `home-content.ts` so page and builder share one source.

## Complexity Tracking

None.
