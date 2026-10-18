# Data Model: Agent View

No stored data. The document is derived at build time from existing content.

## Entities

### AgentViewDocument

A string of markdown. Sections in fixed order:

1. Title (identity from `header-content.ts`), back link and the profile links (GitHub, LinkedIn from `socials`), each once
2. `## Home` section (HomeSection)
3. `## Projects` section (ProjectsSection)
4. `## Certifications` (from `footer-content.ts`), once

### HomeSection (from `home-content.ts`, `philosophy`, `tools`, `technologies`)

| Field                                    | Source                       | Markdown                                |
| ---------------------------------------- | ---------------------------- | --------------------------------------- |
| heading (hidden h1 text)                 | `home-content.ts`            | one plain line directly under `## Home` |
| statements[]                             | `home-content.ts`            | `###` headings in page order            |
| philosophy tabs                          | `philosophy-core.tsx` labels | `###` per tab, list of petal labels     |
| intro blockquote + paragraphs + sign-off | `home-content.ts`            | `>` quote, paragraphs                   |
| principles[]                             | `home-content.ts`            | ordered list                            |
| mainTools[] / tools groups               | `tools-data.ts`              | `###` group, list of `[name](href)`     |
| mainTechnologies[] / groups              | `technologies-data.ts`       | same                                    |

### ProjectsSection (from `projects-data.tsx` + intro text)

| Field                        | Markdown                         |
| ---------------------------- | -------------------------------- |
| heroBlockquote               | `>` quote                        |
| project.title                | `###`                            |
| project.companies[]          | `label` (linked if `href`)       |
| project.timeframe, isActive  | `2025 – May 2026` plus "Ongoing" |
| project.description, subline | paragraphs                       |
| project.responsibilities[]   | list under "Fields"              |
| project.url                  | `[View <title>](url)`            |

Order: hero project (`Value Booster`) first, then the others in data order, as on `/projects`.

## Rules

- Omitted/empty optional fields produce no output line (no placeholder text).
- Images, logos and dividers are not emitted.
- Pure function: same input data gives same string.

## Content modules

The document and the pages read the same modules: `home/home-content.ts`, `projects/projects-content.ts`,
`philosophy/philosophy-data.ts`, `header/header-content.ts` (identity), `footer/footer-content.ts` (certifications),
plus the existing `socials`, `tools`, `technologies` and `projects` data files. The footer's framework-version line is
not content and is not in the document.
