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

## Entry link contract

| Aspect    | Value                                                                                    |
| --------- | ---------------------------------------------------------------------------------------- |
| Location  | Footer only: centered, own line directly above "© 2026 Dominik Rubröder". No header link |
| Style     | `Button` `variant="text-foreground"`, `size="small"`; no background or pill              |
| Instances | One. Visible at every width and container-width setting                                  |
| Label     | `Agent view` (visible text is the accessible name)                                       |
| Target    | `/agent-view`, same tab, no `target` attribute, `prefetch={false}`                       |
| Overlap   | Must not sit within 24 px of another target                                              |
| Keyboard  | Tab-reachable after the certification buttons, visible focus ring                        |
