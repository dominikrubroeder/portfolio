# Feature Specification: Agent View

**Feature Branch**: `002-agent-view`

**Created**: 2026-10-18

**Status**: Draft

**Input**: User description: "I want to introduce a new view: Agent view. This page should not show any styling, it should be markdown based and show the same content as the rest of the app, but in markdown only. For example, /agent-view should render the content of route / and /projects in markdown (first the home page content of / and then /projects below, on the same page /agent-view. You should be able to enter agent view via a link in the header top right "Agent view""

## Clarifications

### Session 2026-10-18

- Q: Which text outside the home and projects page bodies should agent view also include? → A: Option C: the identity (name, role), the profile links from the bottom bar (GitHub and LinkedIn; the bar has no email link) and the footer certifications ("Certified in: Atomic Design, Subatomic"), each shown once. Tech-stack credits in the footer stay out.
- Q: What happens when the header link would cover the theme controls (container width "wide" or "full")? → A: The link stays absolute at the viewport's right edge. Wherever the header link would overlap another control, the footer link shows instead, at any width.
- Q: Should visually hidden helper text appear in agent view? → A: Only the page's hidden h1 ("Design and code speak the same language"), as the intro line of the home section. Hover hints and drawer descriptions stay out.
- Q (user change request, 2026-10-18): How should the entry link look, and what happens to the footer? → A: The link is a small-text link, not a ghost button. In the footer it sits on its own line directly above "© 2026 Dominik Rubröder". The footer drops the "Next.js 16.4.2 | React 19.3 | Tailwind CSS 4.3.3" line and its vertical padding is reduced.

## User Scenarios & Testing _(mandatory)_

### User Story 1 - Read the whole portfolio as plain markdown (Priority: P1)

A visitor (human or AI agent) opens `/agent-view` and gets the full portfolio content as one unstyled markdown document: the home page content first, then the projects content below it. No theme, color, font, animation, decoration or app chrome is applied.

**Why this priority**: This is the feature. An agent can ingest the whole portfolio from one address in a format it reads best.

**Independent Test**: Open `/agent-view`. Confirm the page shows markdown text only, home content first, projects content after it, with no visual styling.

**Acceptance Scenarios**:

1. **Given** a visitor opens `/agent-view`, **When** the page loads, **Then** they see the home page content (`/`) as markdown followed by the projects content (`/projects`) as markdown on the same page.
2. **Given** the page is loaded, **When** the visitor inspects its appearance, **Then** no theme, accent color, custom font, animation, intro, snowfall, cursor, decorative shape or layout styling is applied.
3. **Given** the page is loaded, **When** the content is read as plain text, **Then** headings, lists, links and emphasis appear as valid markdown.
4. **Given** the visitor changed theme settings earlier, **When** they open `/agent-view`, **Then** those settings have no effect on the page.

---

### User Story 2 - Enter agent view from the header (Priority: P2)

A visitor on any page sees an "Agent view" link (header on wide screens, footer on narrow screens) and uses it to open `/agent-view`.

**Why this priority**: Without a visible entry point the view is hard to discover. The view itself still works at its address without the link.

**Independent Test**: On any page, find "Agent view" (header on wide screens, footer on narrow), activate it, and land on `/agent-view`.

**Acceptance Scenarios**:

1. **Given** a visitor is on any regular page, **When** they look at the header (wide screen) or footer (narrow screen), **Then** an "Agent view" link is visible.
2. **Given** the link is visible, **When** the visitor activates it with mouse, touch or keyboard, **Then** they open `/agent-view` in the same tab.
3. **Given** the visitor is on `/agent-view`, **When** they want to return, **Then** they can navigate back to the regular site (see FR-008).

---

### User Story 3 - Content stays in sync with the site (Priority: P3)

When the content of the home page or projects page changes, agent view shows the change without separate maintenance.

**Why this priority**: A duplicated copy would drift and mislead agents.

**Independent Test**: Change a project title or statement in the site's content. Confirm `/agent-view` shows the change.

**Acceptance Scenarios**:

1. **Given** content of the home or projects page is edited, **When** `/agent-view` is opened, **Then** it shows the updated content.

---

### Edge Cases

- Content that is purely visual (decorative shapes, logos as images, preview images, animations) has no text equivalent: it is omitted, or reduced to its alt text where meaningful.
- Interactive content (drawers, tabs, tooltips) shows its content inline, fully expanded, so nothing is hidden behind interaction.
- Links keep their destination and label; relative links stay usable.
- A visitor with JavaScript disabled still sees the full document.
- Search engines may find the page; it must not replace the regular pages as the primary result (see Assumptions).

## Requirements _(mandatory)_

### Functional Requirements

- **FR-001**: The site MUST provide a page at `/agent-view`.
- **FR-002**: The page MUST show the home page (`/`) content first and the projects page (`/projects`) content below it, in one continuous document.
- **FR-003**: The content MUST be presented as markdown text, with headings, lists, links and emphasis expressed in markdown.
- **FR-004**: The page MUST NOT apply site styling: no theme, accent, custom fonts, animation, intro overlay, seasonal effects, custom cursor, decorative shapes, header, footer or bottom bar.
- **FR-005**: The page MUST be unaffected by the visitor's saved theme settings.
- **FR-006**: The text content MUST match the content of the regular pages; it MUST come from the same source so the two do not drift.
- **FR-007**: The "Agent view" entry is a small-text link (plain text link style, no button background or pill) and MUST appear in the header, absolutely positioned at the right edge of the viewport (1 rem in), vertically centered, whenever it covers no other control. Otherwise (narrow screens, or a widened reading column that brings the header controls to the right edge) the link MUST appear in the footer instead, on its own line directly above the copyright line ("© 2026 Dominik Rubröder"). Exactly one link is visible at a time. It opens `/agent-view` in the same tab.
- **FR-008**: The visitor MUST be able to leave agent view and return to the regular site.
- **FR-009**: Content shown only through interaction on regular pages (drawers, tabs) MUST appear inline in agent view.
- **FR-010**: The page MUST be readable with no scripts running.
- **FR-011**: The "Agent view" link MUST be keyboard operable, have a visible focus state, and follow the existing header design and accessibility rules.
- **FR-012**: Header and footer content that carries meaning MUST appear in the document exactly once: the identity (name and role) and the profile links at the top, before the home content; the certifications at the end, after the projects content. Tech-stack credits (framework and library versions) MUST NOT appear.
- **FR-013**: The footer MUST NOT show the framework and library version line (Next.js, React, Tailwind CSS), and its vertical padding MUST be smaller than before (from 3 rem to 1.5 rem top and bottom, and a tighter gap between rows).

### Key Entities

- **Agent view document**: One markdown document composed of sections, in order: identity and profile links, home content, projects content, certifications.
- **Content section**: A page's content (home, projects) rendered as markdown; includes headings, statements, project entries with title, description, period and links.

## Success Criteria _(mandatory)_

### Measurable Outcomes

- **SC-001**: A visitor reaches `/agent-view` from any page in one action (a single click or tap on the link).
- **SC-002**: 100% of the body text of the home and projects pages (including drawer and tab content), plus the identity, profile links and certifications once each (FR-012), appears in agent view. The hidden home h1 appears once as the home intro line; other visually hidden helper text, hover hints and drawer descriptions are not content.
- **SC-003**: With any saved theme, appearance or font-size setting, agent view looks identical.
- **SC-004**: An AI agent given the `/agent-view` address can answer questions about identity, expertise and selected projects without visiting any other page.
- **SC-005**: A content edit on the home or projects page shows in agent view without a second edit.
- **SC-006**: The page is fully readable with scripts disabled.

## Assumptions

- "Without styling" means no site design applied; default browser rendering of plain text is acceptable.
- Markdown is shown as raw markdown text, not rendered into formatted HTML, since the goal is an agent-readable source.
- Only the home and projects pages are included for now; other pages (`/tools-and-technologies`, `/playground`) are out of scope.
- The header link needs `lg` (1024 px) and up, plus enough free space beside the reading column. With the default column this holds from `lg`; with a wider column it holds only on wider viewports (83 rem for "wide", 112 rem for "full", measured in the plan). Everywhere else the footer link is used.
- The link label is exactly "Agent view" (sentence case, per the copy rules). Its text size is small (`text-sm`); as a standalone link in a dense, non-primary context it follows the `small` size rule (not the 44 px target of `medium`).
- The document has no browser title (plain text); it starts with a top-level heading instead.
- The regular pages stay the primary search result; agent view is a secondary representation of the same content.
- `DESIGN.md` and `UX_PRINCIPLES.md` are updated with this new view and its link when implemented.
