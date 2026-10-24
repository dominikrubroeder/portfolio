# Data Model: Theme settings

> Naming: `animationsEnabled` is the stored and registry name; in the context it is `themeAnimationSettings.isEnabled`. They are the same value.

## ThemeDefinition (static, in code)

| Field                        | Type                             | Notes                                                                         |
| ---------------------------- | -------------------------------- | ----------------------------------------------------------------------------- |
| `id`                         | `'default' \| 'wireframe'`       | Unique. Future themes add an entry.                                           |
| `label`                      | string                           | "Default", "Wireframe". Shown in the selector.                                |
| `description`                | string                           | One short phrase. Wireframe: "Sketch-based UI". Default: "Intense accent UI". |
| `defaults.color`             | `ThemeColor`                     | Default: `blue`. Wireframe: `foreground` (neutral).                           |
| `defaults.animationsEnabled` | boolean                          | Default: `true`. Wireframe: `false`.                                          |
| `defaults.radius`            | `'none' \| 'sm' \| 'md' \| 'lg'` | Default: `md`. Wireframe: `none`.                                             |
| `defaults.containerWidth`    | `'default' \| 'wide' \| 'full'`  | Both: `default`.                                                              |

## ThemeSettings (runtime, persisted per device)

| Field             | Values                                                            | Storage key                | Reset on theme switch   |
| ----------------- | ----------------------------------------------------------------- | -------------------------- | ----------------------- |
| theme             | registry ids                                                      | `dr-theme`                 | n/a (the change itself) |
| appearance        | `light \| dark \| system`                                         | `dr-theme-appearance`      | No                      |
| fontSize          | `sm \| md \| lg`                                                  | `dr-theme-font-size`       | No                      |
| color             | `foreground \| blue \| violett \| orange` (plus legacy `primary`) | `dr-theme-color`           | Yes                     |
| animationsEnabled | boolean                                                           | `dr-theme-animation`       | Yes                     |
| radius            | `none \| sm \| md \| lg`                                          | `dr-theme-radius`          | Yes                     |
| containerWidth    | `default \| wide \| full`                                         | `dr-theme-container-width` | Yes                     |
| winter event      | boolean                                                           | `dr-theme-event-winter`    | No                      |
| persona           | `design \| dev`                                                   | `dr-theme-persona`         | No                      |

## Validation rules

- Unknown or invalid stored value → that theme's default (theme itself → `default`).
- Legacy stored color `primary` maps to `violett` on read.
- Storage unavailable → defaults, in-memory only.

## State transition

`setTheme(id)`: persist `theme`; replace color, animationsEnabled, radius, containerWidth with `definition.defaults` and
persist them; keep appearance and fontSize; sync `<html>` attributes.
