# Contract: theme state (feature/theme)

Existing `useTheme()` members stay. Changes:

| Member                                          | Change                                                                 |
| ----------------------------------------------- | ---------------------------------------------------------------------- |
| `theme` / `setTheme(option)`                    | `setTheme` applies registry defaults (clarification FR-014)            |
| `themeColor` / `setThemeColor`                  | Accepts `foreground` as the neutral choice                             |
| `themeAnimationSettings.isEnabled`              | Persisted; meaning: animations on                                      |
| `themeRadius`, `setThemeRadius`                 | NEW                                                                    |
| `themeContainerWidth`, `setThemeContainerWidth` | NEW                                                                    |
| `shouldAnimate`                                 | Removed; replaced by `themeAnimationSettings.isEnabled` (unused today) |

## Subscriptions and actions (constitution VI)

- `useThemeSetting(name)` (NEW): subscribes to one setting (`'theme' | 'color' | 'animations' | 'radius' | 'containerWidth' | …`)
  through a small external store (`useSyncExternalStore`). A change re-renders only components that read that setting.
- Setters/actions are one stable object; calling code never re-renders because a setter exists.
- `useTheme()` stays as a thin combined hook for existing callers. New code SHOULD prefer `useThemeSetting`.
- The store's server snapshot is the registry default. Components rendered on the server keep an `isInitialized` gate.

## Behavior

- Every setter updates the `<html>` attribute, storage and React state in the same call (live update), and always writes a
  valid value, never `undefined`.
- Storage reads and writes are wrapped in try/catch. If storage is unavailable the setting still applies for the session.
- `ui/animate` exports `AnimationsProvider({ enabled, children })`; `Animate` reads it. `ui` never reads `useTheme`.
  `feature/theme` renders the provider through a small bridge (`theme-animations-bridge.tsx`) that subscribes only to the
  animation setting.

## Revision 2026-10-18: theme drawer

- Removed: `ThemeSidebar`, `ThemeSidebarLazy`, `ThemeSidebarTrigger`, `useSidebar`, `SidebarProvider`.
- New: `ThemeDrawerTrigger` (header; client; owns open state, mounts `ThemeDrawer` on first click) and `ThemeDrawer`
  (`ui/drawer` plus grouped settings). Neither reads theme state except through `useThemeSetting` and `useThemeActions`.
- `ThemeColorSetting` gains `includeNeutral?: boolean` (default `true`); the header passes `false`.
- `Select` (`ui/select`): `value` is an option `key`; `onValueChange(option)` unchanged; `SelectOption` gains optional `icon`.
- `<html>` attribute contract is unchanged.

## Revision 2026-10-18 – 2: sketch theme

- `ThemeDefinition` gains `description: string` (data model). `THEME_OPTIONS` entries carry it as `SelectOption.description`.
- `SelectOption` (`ui/select`) gains optional `description?: string`, shown under the label in the option row.
- No new `<html>` attribute: the Wireframe font and the monochrome images are keyed on `data-theme='wireframe'`.
- CSS interface additions (`globals.css`): font role tokens `--font-role-heading`, `--font-role-body` (Outfit on `:root`,
  Patrick Hand under Wireframe); one rule `html[data-theme='wireframe'] :is(img, svg) { filter: grayscale(1) }` (no marker class).
