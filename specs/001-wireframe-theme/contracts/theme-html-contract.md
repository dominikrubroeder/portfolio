# Contract: `<html>` attributes (CSS interface)

Set by the init script before first paint and kept in sync by `ThemeProvider`. CSS and components read only these.

| Attribute                    | Values                                    | Effect                                                               |
| ---------------------------- | ----------------------------------------- | -------------------------------------------------------------------- |
| `data-theme`                 | `default`, `wireframe`                    | Token set and structural selectors                                   |
| `data-theme-appearance`      | `light`, `dark`, `system`                 | Neutral tokens (class `theme-appearance-*` holds the resolved value) |
| `data-theme-color`           | `foreground`, `blue`, `violett`, `orange` | `--primary*` tokens                                                  |
| `data-theme-font-size`       | `sm`, `md`, `lg`                          | Root font size 90 / 100 / 110 %                                      |
| `data-theme-radius`          | `none`, `sm`, `md`, `lg`                  | `--radius` (0 / 4 / 6 / 10 px)                                       |
| `data-theme-container-width` | `default`, `wide`, `full`                 | `--spacing-container-readable` (40 / 64 / 90 rem)                    |
| `data-theme-animations`      | `on`, `off`                               | `off` forces final state on reveals, disables keyframe utilities     |

Rules: no attribute may be removed once set (setters always write a valid value, never `undefined`); invalid values never reach the DOM; reduced motion overrides `on`.
