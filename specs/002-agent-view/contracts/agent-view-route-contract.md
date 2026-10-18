# Contract: `/agent-view` route

| Aspect         | Value                                                                |
| -------------- | -------------------------------------------------------------------- |
| Method         | `GET` (others: 405)                                                  |
| Path           | `/agent-view`                                                        |
| Status         | `200`                                                                |
| `Content-Type` | `text/plain; charset=utf-8`                                          |
| Body           | Markdown, see [markdown contract](./agent-view-markdown-contract.md) |
| Caching        | Prerendered at build, same response for every visitor                |
| HTML wrapper   | None. No `<html>`, no CSS, no script, no cookies set                 |
| Theme settings | No effect                                                            |

## Header link contract

| Aspect                                                                                         | Value                                                                                                       |
| ---------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| Location, when it clears the header controls (from `lg`; wider threshold for wide/full column) | Header, absolute: `right-4` (1 rem), vertically centered; after the theme controls in DOM order             |
| Location, otherwise                                                                            | Footer, own line directly above "© 2026 Dominik Rubröder"                                                   |
| Style                                                                                          | Small-text link (`link-muted`, `small`), not a button; about 69 × 20 px at 100 % text size                  |
| Header thresholds                                                                              | Default column: from `lg` (1024 px). "Wide": from `83rem`. "Full": from `112rem`                            |
| Instances                                                                                      | Two renderings of one component; exactly one visible per width (CSS), the other `display: none`             |
| Label                                                                                          | `Agent view` (visible text is the accessible name)                                                          |
| Target                                                                                         | `/agent-view`, same tab, no `target` attribute, `prefetch={false}`                                          |
| Overlap                                                                                        | Must not cover any other control at any width and container-width setting                                   |
| Visibility                                                                                     | Every width and container-width setting: header link where it overlaps nothing, footer link everywhere else |
| Keyboard                                                                                       | Tab-reachable in visual order, visible focus ring                                                           |
