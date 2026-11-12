@AGENTS.md

# Design and UX

Read these before changing or adding any UI:

- @DESIGN.md — design language: tokens, color, typography, layout, motion, themes, components, dos/don'ts, decision log.
- @UX_PRINCIPLES.md — UX principles, component behavior and interaction patterns.

Update both files in the same change when a design or behavior decision changes.

# Figma sync

When you create or update a component (`src/components/ui`, `src/components/feature`), sync the related Figma component in the same task. File: Portfolio, key `yGICVbl9clikVNXP2Lkkue`; pages `↪ ui`, `↪ features`, `↪ tokens`. Load the `figma-use` skill before `use_figma` (and `figma-generate-library` for new components or tokens). New tokens get a Figma variable. Pure refactors with no visual or API change are exempt. If Figma is unreachable, say which component is out of sync. See DESIGN.md rule 10.
