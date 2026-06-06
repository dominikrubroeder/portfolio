# DESIGN.md

## Design Vision

Create a bold, modern, emotionally engaging web design engineer portfolio that communicates technical excellence, design
maturity, and frontend craftsmanship.

The experience should feel:

- Confident
- Fast
- Elegant
- Intentional
- Highly structured
- Technically precise
- Visually vibrant without becoming overwhelming

The portfolio should reflect modern frontend engineering culture using:

- React
- Next.js
- shadcn/ui
- Tailwind CSS
- Motion design systems
- Design tokens
- Component-driven architecture
- Atomic + Subatomic Design principles by Brad Frost

The visual language should prioritize clarity, hierarchy, readability, and delightful interaction.

---

# Core Design Principles

## 1. Bold Minimalism

Use strong typography, large spacing systems, expressive color contrast, and deliberate layout rhythm.

Avoid:

- Decorative clutter
- Excessive gradients
- Heavy glassmorphism
- Animation overload
- Unnecessary visual noise

Favor:

- Clear hierarchy
- Large intentional whitespace
- Sharp alignment
- Strong typography
- Structured composition
- Precision spacing

---

## 2. Design-to-Code Parity

The design system must maintain a close relationship between:

- Figma variables
- Design tokens
- CSS variables
- Tailwind tokens
- shadcn/ui theme values
- Motion timing values
- Border radius scales
- Typography scales
- Spacing systems

Every design token should exist as a single source of truth.

Never hardcode values directly inside components unless necessary.

All colors, spacing, typography, radii, shadows, motion curves, and durations should reference shared semantic tokens.

---

## 3. Theme-First Architecture

The system must be built for multi-theme support from the beginning.

Default appearance:

- Light mode

Secondary themes:

- Dark mode
- Experimental accent themes
- Seasonal or branded palettes

Themes must reuse the same semantic token structure.

Only primitive token values should change between themes.

Component logic and semantic naming must remain identical.

Example:

```txt
--background
--foreground
--primary
--secondary
--muted
--accent
--card
--border
--ring
```

Do not use theme-specific names like:

```txt
--blue-primary
--light-bg
```

Prefer semantic abstraction.

---

# Color System

## Color Philosophy

The portfolio should use intensive, vibrant primary colors balanced by calm neutrals.

The experience should feel energetic and premium.

Primary colors should create:

- Focus
- Direction
- Energy
- Brand memorability

Neutrals should preserve:

- Readability
- Sophistication
- Structure
- Breathing room

---

# 60/30/10 Color Rule

## 60% — Dominant Foundation

Use neutral light backgrounds and structural surfaces.

Purpose:

- Readability
- Layout clarity
- Spatial rhythm
- Calmness

Recommended:

```txt
Backgrounds
Surface layers
Cards
Sections
Grid structure
```

Suggested tones:

```txt
White
Off-white
Soft gray
Warm neutral
Light brown
```

---

## 30% — Secondary Structure

Use secondary colors for layout grouping and visual hierarchy.

Purpose:

- Section separation
- Navigation structure
- Interface organization
- Supporting surfaces

Recommended:

```txt
Muted surfaces
Sidebar layers
Borders
Secondary cards
Hover surfaces
```

Suggested tones:

```txt
Slate
Neutral gray
Cool gray
Muted desaturated tones
```

---

## 10% — Accent Energy

Use vibrant accent colors intentionally.

Purpose:

- CTA focus
- Interaction feedback
- Motion highlights
- Key portfolio moments
- Links
- Active states
- Interactive emphasis

Accent colors should feel:

- Electric
- Modern
- Intentional
- High-contrast
- Memorable

Recommended vibrant accent directions:

```txt
Electric blue
Ocean hue blue
Flower power violett
Firered
Hyper orange
Bright lime
Digital magenta
```

Accent colors should never dominate large surfaces.

Default primary color:

- Ocean hue blue

---

# Typography System

## Typography Philosophy

Typography should communicate engineering precision and modern product design maturity.

The typography system should feel:

- Structured
- Confident
- Technical
- Clean
- Spacious

---

## Recommended Font Pairing

### Primary Sans

Use modern geometric or neo-grotesk fonts.

Recommended:

```txt
Inter
Geist
Satoshi
Manrope
General Sans
```

### Monospace

Use monospace fonts sparingly for:

- Code snippets
- Technical labels
- Metadata
- Motion timing displays
- Component references

Recommended:

```txt
JetBrains Mono
Geist Mono
IBM Plex Mono
```

---

# Typography Scale

The typography styling references the Tailwind CSS typescale
approach: [https://tailwindcss.com/docs/font-size](https://tailwindcss.com/docs/font-size)

## Available

```txt
Hero       : `text-8xl`
H1         : 40–56px
H2         : 32–40px
H3         : 24–32px
H4         : 24–32px
H5         : 24–32px
H6         : 24–32px
Body Large : 18–20px
Body       : 16px
Small      : 14px
Caption    : 12px
```

Use consistent line-height ratios.

Recommended:

```txt
Display : 0.95–1.0
Headers : 1.05–1.2
Body    : 1.5–1.7
```

---

# Layout System

## Grid Philosophy

The layout should feel engineered rather than decorative.

Recommended:

```txt
Max-width containers
Consistent vertical rhythm, with highest impact sections at the top of the page – getting more into detail the larger the page is to the bottom
```

---

## Spacing Scale

The spacing references the Tailwind CSS spacing system
approach: [https://tailwindcss.com/docs/installation/using-vite](https://tailwindcss.com/docs/installation/using-vite)

Which means, predefined spacing values in a 16px = 1rem system.

Spacing should create:

- Rhythm
- Separation
- Focus
- Scanability

Avoid cramped layouts.

---

# Motion Design Guidelines

## Motion Philosophy

Animations should be:

- Subtle
- Smooth
- Intentional
- Elegant
- Performance-focused
- Emotionally pleasant
- Never intrusive

Motion exists to:

- Guide attention
- Clarify hierarchy
- Reinforce interactions
- Improve spatial understanding
- Add delight carefully

Motion should never distract from content.

---

# Motion Principles

## Use Motion For

```txt
Hover transitions
Content reveals
Page transitions
Scroll-triggered emphasis
Micro-interactions
Focus guidance
State changes
Loading transitions
```

## Avoid

```txt
Excessive bouncing
Aggressive parallax
Constant movement
Long dramatic transitions
Animation spam
Overly elastic motion
```

---

# Motion Timing

## Recommended Durations

```txt
Fast    : 120ms
Normal  : 180ms
Medium  : 240ms
Slow    : 320ms
Page    : 400–600ms
```

## Recommended Easings

```txt
Ease Out
Ease In-Out
Cubic Bezier:
0.16, 1, 0.3, 1
```

---

# Interaction Design

## Hover Behavior

Hover states should feel refined and tactile.

Recommended:

```txt
Soft elevation
Subtle color shifts
Border emphasis
Gentle scaling
Opacity transitions
```

Avoid dramatic transforms.

---

# Component Architecture

## Foundation

Use Atomic + Subatomic Design principles inspired by Brad Frost.

---

# Subatomic Layer

## Design Tokens

Primitive token layer.

Examples:

```txt
Colors
Spacing
Typography
Shadows
Radii
Motion curves
Motion durations
Opacity values
Z-index scales
```

These should map directly to:

- Figma Variables
- CSS Variables
- Tailwind Config
- shadcn/ui Tokens

---

# Atomic Layer

## Atoms

Smallest reusable UI elements.

Examples:

```txt
Button
Input
Label
Icon
Avatar
Badge
Tooltip
Spinner
```

Atoms should:

- Be highly reusable
- Avoid layout assumptions
- Be token-driven
- Remain accessible

---

# Molecular Layer

## Molecules

Combinations of atoms.

Examples:

```txt
Search Bar
Navigation Item
Project Card Header
Form Field
Social Link Row
```

Molecules should express:

- Interaction logic
- Small compositional structure
- Consistent spacing patterns

---

# Organisms

## Organisms

Complex composed sections.

Examples:

```txt
Hero Section
Project Grid
Experience Timeline
Navigation Bar
Footer
Case Study Section
```

Organisms define major layout structure.

---

# Templates

## Templates

Structural page arrangements.

Examples:

```txt
Portfolio Home
Project Detail
Blog Layout
About Layout
Contact Layout
```

Templates should prioritize consistency.

---

# Accessibility Standards

## Accessibility Requirements

Accessibility is mandatory.

Ensure:

```txt
WCAG AA contrast minimums
Visible focus states
Keyboard navigation
Reduced motion support
Semantic HTML
Screen reader compatibility
Accessible form states
```

---

# Reduced Motion

Support:

```css
prefers-reduced-motion
```

Reduced motion mode should:

- Remove non-essential transitions
- Minimize transform movement
- Preserve usability
- Preserve hierarchy clarity

---

# Border Radius System

## Radius Philosophy

Use modern rounded geometry.

Recommended:

```txt
sm  = 6px
md  = 10px
lg  = 14px
xl  = 18px
2xl = 24px
```

Maintain consistency across all components.

---

# Design Tokens

## Token Naming Strategy

Use modern React/Next.js/shadcn-ui naming conventions.

Examples:

```txt
--background
--foreground
--card
--card-foreground
--popover
--primary
--primary-foreground
--secondary
--secondary-foreground
--muted
--accent
--destructive
--border
--input
--ring
```

---

# Token Synchronization

## Required Synchronization

The following systems must stay aligned:

```txt
Figma Variables
Tailwind Theme
CSS Variables
Motion Tokens
shadcn/ui Tokens
```

Never allow visual drift between design and implementation.

---

# Tailwind + shadcn/ui Integration

## Design Requirements

Design components should map directly to:

```txt
shadcn/ui primitives
Tailwind utility patterns
Radix UI accessibility patterns
```

Favor composability over rigid page-specific components.

---

# Portfolio UX Direction

## Portfolio Personality

The portfolio should feel like:

```txt
A modern frontend product experience
A polished engineering showcase
A premium developer brand
A creative systems portfolio
```

The experience should communicate:

- Design engineering capability
- Systems thinking
- Frontend craftsmanship
- Motion sensitivity
- Accessibility awareness
- Technical precision

---

# Content Presentation

## Case Studies

Project presentations should emphasize:

```txt
Problem solving
Architecture
UI decisions
Design systems
Performance
Accessibility
Motion rationale
Technical implementation
```

Avoid purely decorative showcases.

Explain reasoning.

---

# Visual Hierarchy

## Priority Rules

Users should immediately identify:

1. Identity
2. Expertise
3. Selected work
4. Technical depth
5. Contact pathways

Primary CTAs should always remain visually obvious.

---

# Image & Media Guidelines

## Media Usage

Use:

```txt
High-quality mockups
Clean screenshots
Structured diagrams
Short subtle motion previews
```

Avoid:

```txt
Visual clutter
Low-quality imagery
Overly compressed screenshots
Stock-photo aesthetics
```

---

# Performance Philosophy

## Performance Requirements

The experience should feel extremely responsive.

Prioritize:

```txt
Fast rendering
Minimal layout shift
Optimized animations
Efficient hydration
Lazy-loaded media
GPU-friendly transforms
```

Motion should never harm performance.

---

# Responsive Design

## Responsive Philosophy

The portfolio must feel premium across:

```txt
Desktop
Laptop
Tablet
Mobile
Ultrawide displays
```

Mobile layouts should preserve hierarchy and visual confidence.

Never treat mobile as a simplified afterthought.

---

# Implementation Notes

## Preferred Stack

Recommended implementation stack:

```txt
Next.js
React
TypeScript
Tailwind CSS
shadcn/ui
Motion
```

Web UI frameworks like Radix UI or Base UI should be used based on the fact that they fulfill the desired task and
requirements of a solid, functional- and developer-friendly experience with awareness of visual appeal.

---

# Final Experience Goals

The final portfolio should feel:

```txt
Fast
Elegant
Confident
Modern
Intentional
Technically excellent
Visually memorable
Accessible
Systematic
Premium
```
