# Implementation Plan: Agent View

**Branch**: `002-agent-view` | **Date**: 2026-10-18 | **Spec**: [spec.md](./spec.md)

**Input**: Feature specification from `/specs/002-agent-view/spec.md`

## Summary

Add `/agent-view`: one unstyled markdown document with the home content (`/`) first and the projects content
(`/projects`) below. Add an "Agent view" small-text link (not a button): in the header from `lg` up (absolute, `right-4`, vertically centered), in the footer (own line above the copyright line) wherever the header link does not fit. Not prefetched. The footer also loses its framework-version line and gets smaller vertical padding.

Approach: a **route handler** (`src/app/agent-view/route.ts`) returns the markdown as `text/plain; charset=utf-8`.
A route handler is not wrapped by the root layout, so no header, footer, theme script, fonts, CSS, cursor, intro or
snowfall can reach it. No styling is not "styled to look plain", it is absent. The text comes from a pure builder in a
new feature folder. The home and projects pages read their copy from the same extracted content modules, so the two
cannot drift (FR-006).

## Technical Context

**Language/Version**: TypeScript, Next.js 16 (App Router, `cacheComponents: true`), React 19

**Primary Dependencies**: none new

**Storage**: N/A (content lives in code: `projects-data.tsx`, `tools-data.ts`, `technologies-data.ts`, new content modules)

**Testing**: Vitest `unit` project (`src/**/*.test.ts`, node) for the builder; manual quickstart for the route and header link

**Target Platform**: Vercel, all browsers, plus AI agents fetching over HTTP

**Project Type**: web application (single Next.js app)

**Performance Goals**: response is static text, built once at build time; no client JS on the route

**Constraints**: no new dependency; no `'use client'` file; header link must not add a client boundary; passes `npm run lint` and `npm run format`

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

| Principle                       | Result                                                                                                                                                                                                                                                                                                                                                                                                                 |
| ------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| I. Design source of truth       | Pass. Header link uses existing `Button` variants and tokens. `DESIGN.md` and `UX_PRINCIPLES.md` updated (new view, header link, decision-log row).                                                                                                                                                                                                                                                                    |
| II. Existing architecture       | Pass. New code in `src/components/feature/agent-view/` with prefixed files and `index.ts`. `feature` consumes `ui` only. Route lives in `src/app`.                                                                                                                                                                                                                                                                     |
| III. ESLint and Prettier        | Pass by task: `npm run format` and `npm run lint` gate.                                                                                                                                                                                                                                                                                                                                                                |
| IV. Accessible by default       | Pass. The link never covers another control (header from `lg`, footer below). Native anchor, visible text, focus ring. The link is `small` (about 69 × 20 px at 100 % text): a standalone link in a dense, non-primary context, with no other target within 24 px of it, so the WCAG 2.2 target-size spacing rule holds. Output is plain text with heading hierarchy in markdown. See [research.md](./research.md) R5. |
| V. Simplicity and content first | Pass. One route handler, one builder, content extraction only where copy is inline today. No dependency.                                                                                                                                                                                                                                                                                                               |
| VI. Server-first, CSS-first     | Pass. No client component added. The link is a server-rendered anchor.                                                                                                                                                                                                                                                                                                                                                 |
| VII. Documentation and STORY.md | Pass by task: `DESIGN.md`, `UX_PRINCIPLES.md`, `feature/README.md`, `specs/002-agent-view/STORY.md`.                                                                                                                                                                                                                                                                                                                   |

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
│   │   └── agent-view-link.tsx             # header link (server component)
│   ├── home/                               # NEW  (extracted copy)
│   │   ├── index.ts
│   │   └── home-content.ts                 # statements, intro paragraphs, principles
│   ├── header/header.tsx                   # EDIT add link (lg+, absolute right-4)
│   ├── footer/footer.tsx                   # EDIT link above © line, remove version line, py-6
│   ├── philosophy/philosophy-core.tsx      # EDIT export petal labels data (no behavior change)
│   └── projects/projects-data.tsx          # EDIT export projects intro text
└── ...
DESIGN.md, UX_PRINCIPLES.md, src/components/feature/README.md   # EDIT
```

**Decision (resolved)**: an absolute link at viewport `right-4` would cover the theme trigger and swatches below about
44 rem. So: header link from `lg` up (absolute, `right-4`, vertically centered; the header is `lg:relative lg:h-24`),
footer link everywhere else. "Everywhere else" includes `lg` and up with container width wide or full, until the viewport is wide enough that the link clears the theme controls (clarified 2026-10-18). Thresholds are measured in T012 (re-measured for the small link in T036: wide `83rem`, full `112rem`) and set per `data-theme-container-width` in CSS (`in-data-[theme-container-width=…]:` variants). One `AgentViewLink` component, rendered in both places and shown or hidden by CSS
(`hidden lg:inline-flex` in the header, `lg:hidden` in the footer). No overlap at any width, no JS.

**Structure Decision**: single Next.js app. Feature folder `agent-view` owns the builder and the link. Page copy that is
inline JSX today moves to `home-content.ts` so page and builder share one source.

## Complexity Tracking

None.
