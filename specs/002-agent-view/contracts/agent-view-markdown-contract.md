# Contract: agent view markdown

```text
# Dominik Rubröder, UX Engineer

[Back to the site](<ROUTING_PUBLIC_DOMAIN>/)

- [GitHub](url)
- [LinkedIn](url)

## Home

<hidden h1 line, statements, philosophy, intro, principles, tools, technologies>

## Projects

> <hero blockquote>

### <Project title>
<companies> · <timeframe> [· Ongoing]

<description>

<subline>

Fields:
- <responsibility>

[View <Project title>](<url>)

## Certifications

- [Atomic Design](url)
- [Subatomic](url)
```

Rules:

1. Exactly one `#` heading, exactly three `##` headings (`Home`, `Projects`, `Certifications`), in that order. Identity and profile links sit before `## Home`, once.
2. Heading levels never skip.
3. No HTML tags, no images, no inline styles.
4. Every link is `[label](url)`; external URLs unchanged.
5. Home statements appear in the same order as on `/`.
6. Projects appear in the same order as on `/projects` (hero first).
7. Every text string shown on `/` and `/projects` appears in the document, including drawer content (tools,
   technologies) and both philosophy tabs.
8. Empty optional fields emit nothing.
9. Output ends with a single trailing newline.
