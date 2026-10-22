# Research: Agent View

## R1. How to escape the site styling

- **Decision**: Route handler `src/app/agent-view/route.ts`, not a page.
- **Rationale**: Root `layout.tsx` wraps every page in header, footer, theme script, fonts, `globals.css`, cursor CSS,
  intro, snowfall and analytics. A route handler is outside that tree, so nothing is applied. Satisfies FR-004, FR-005
  and FR-010 by construction, with no client JS.
- **Alternatives**: (a) Page under a route group with its own root layout: still ships global CSS and React runtime,
  and needs a file move of the whole app. (b) Page that resets styles: styling is still loaded, brittle. (c)
  Middleware rewrite: extra moving part.

## R2. Content type and title

- **Decision**: `Content-Type: text/plain; charset=utf-8`. Document starts with `# Dominik Rubröder, UX Engineer`.
- **Rationale**: Browsers display `text/plain` inline. Some (Chrome) download `text/markdown`. Agents read both. Raw
  markdown matches the spec assumption. No `<head>`, so no `<title>`; the first heading names the document.
- **Alternatives**: `text/markdown` (download risk in browsers); rendered HTML (violates "markdown only").

## R3. Single source of content

- **Decision**: Extract inline page copy into `feature/home/home-content.ts` (statements, intro blockquote and
  paragraphs, principles) and the projects hero blockquote into the projects feature. Pages and builder both import them.
  Tools, technologies, projects and philosophy petal labels already come from data modules.
- **Rationale**: FR-006 and SC-005. Copy duplicated into a markdown template would drift.
- **Alternatives**: Scrape rendered HTML and convert: needs a dependency, runs at request time, fragile. Hand-written
  `.md` file: duplicate copy.

## R4. Interactive content inline (FR-009)

- **Decision**: Include the full tools and technologies lists (from `tools`, `technologies`, grouped like the drawers)
  and both philosophy tabs (Core product UI, Holistic product UI with the petal labels) as markdown sections.
  Omit purely visual items: dividers, logos, preview images, crop marks, snowfall.
- **Rationale**: Drawer content is real content. Project preview images render as markdown images only when the page
  has meaningful alt text (`<Title> preview image`); decision: omit images, keep project URL.
- **Alternatives**: Only the visible main tools: hides content from agents.

## R5. Entry link

- **Decision (2026-10-22, user change request)**: server-rendered `Link` via `Button` `variant="text-foreground"`,
  size `small`, `href="/agent-view"`, label "Agent view", `prefetch={false}`. It sits only in the footer, centered on its
  own line directly above the copyright line ("© 2026 Dominik Rubröder"). The header link is removed.
- **Why this supersedes the header placement**: one instance and one place remove the overlap rule, the measured
  thresholds (`lg`, `83rem`, `112rem`) and the CSS show/hide pairs. Fewer layout states, no risk of covering the theme
  controls, no dependence on container width or text size.
- **Variant**: `text-foreground` is an existing `Button` variant (`text-foreground hover:text-primary`). It replaces
  `link-muted` (muted text, underline-free hover to foreground). Body text stays muted, so this link reads as a
  deliberate action in the footer. Contrast: `foreground` on `background` passes AA in every theme.
- **Size**: unchanged (`small`, `text-sm`, about 20 px high). The change request names only the variant. Footer is a
  dense, non-primary context (DESIGN.md rule 5); WCAG 2.2 target-size spacing exception needs no other target within
  24 px, to be re-verified with the certification buttons above and the © line below.
- **Footer** (unchanged from 2026-10-18): framework-version line removed, padding `py-6`, `space-y-4`.
- **No prefetch**: the target is a static text document, not a page. `Button` forwards `prefetch` to `Link` only.
- **Accessibility**: visible text is the accessible name; focus ring from `Button`. DOM order: certifications, link,
  copyright.
- **Superseded (2026-10-18)**: header link from `lg` (absolute, `right-4`) with footer fallback and measured overlap
  thresholds (default `lg`, wide `83rem`, full `112rem`); `link-muted`; before that `ghost-muted` `medium`.
- **Alternatives**: keep both header and footer (rejected by request); `text-muted` or `link-foreground` variants (not
  requested); `medium` size (44 px target, heavier than a quiet footer link wants).

## R6. Static output and caching

- **Decision**: `GET` returns a string built from module-level data; no request APIs, so it prerenders at build time
  even with `cacheComponents: true`. Verify in `next build` output that `/agent-view` is not dynamic.
- **Rationale**: Instant response, no per-request work (SC-006 and reliability).
- **Alternatives**: `export const dynamic = 'force-static'` is unnecessary and may conflict with Cache Components; read
  `node_modules/next/dist/docs/01-app/03-api-reference/03-file-conventions/route.md` before writing.

## R7. Return path (FR-008)

- **Decision**: Document opens with a line `[Back to the site](/)`. Browser back also works.
- **Alternatives**: Footer-style link at end only: harder to find for humans.

## R8. Links

- **Decision**: Internal links absolute using `ROUTING_PUBLIC_DOMAIN` so they work when the text is copied elsewhere;
  external links unchanged.

## R9. Search engines (2026-10-18)

- **Decision**: No `X-Robots-Tag` or canonical header. `/agent-view` is a `text/plain` response with no `<title>`, no
  `<head>` and no structured data, and the regular pages carry the title, description, Open Graph data and JSON-LD.
  The spec says search engines "may find" the page but it "must not replace the regular pages". The pages hold every
  ranking signal; the plain text holds none, so it is not expected to outrank them.
- **Rationale**: a `noindex` header would also hide the document from tools that respect it, which works against the
  purpose of agent view. The route handler stays minimal.
- **Revisit if**: `/agent-view` shows up above `/` for the site's own name in search. Then add
  `X-Robots-Tag: noindex, follow` to the headers in `src/app/agent-view/route.ts` and to the route contract.
- **Alternatives**: `noindex, follow` now (safe, but hides the document from tools that respect it); a canonical
  `Link` header pointing to `/` (wrong: the content is not a duplicate of the home page alone).

## R10. `next dev` and production bundle (2026-10-18)

- **Finding**: `npm run build` passed, but `next dev` printed `Warning: Parsing CSS source code failed … Invalid media
query` for `src/app/globals.css` on every request. Cause: Tailwind scans every file in the repo for class names.
  `research.md` quoted a class as prose with a literal ellipsis (`max-[…]:hidden!`); Tailwind took it as a real class
  and emitted `@media (width < …)`. The production minifier tolerated it, the dev CSS parser did not.
- **Decision**: (a) never write placeholder class names in documents; (b) tell Tailwind to ignore planning documents with
  `@source not '../../specs'` and `@source not '../../.specify'` in `src/app/globals.css`, so prose can never generate
  CSS or break the dev server.
- **Rationale**: the plan files quote real class names often (for example `lg:hidden`); one malformed quote must not
  break `next dev`. `DESIGN.md` and `UX_PRINCIPLES.md` still get scanned; they hold only real class names.
- **Alternatives**: only fix the one line (fragile, the next placeholder breaks dev again); `.gitignore` the specs
  (they must stay in the repository).
- **Verified**: `next dev` (cold start, no warnings or errors in the log or the browser console on `/`, `/projects`,
  `/agent-view`, a hot-reload edit of a content module shows on `/` and `/agent-view` and reverts cleanly) and the
  production build and `next start` (static `/agent-view`, no console problems, same layout results at 375–1900 px for
  default, wide and full container widths, keyboard, focus, no-JS). `AGENTS.md` is rewritten by `next dev` on start
  (a Next.js feature); commit it with the work.
