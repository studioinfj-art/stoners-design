---
name: google-design
description: Redesign, critique, or implement user-provided frames, screens, flows, prototypes, Figma nodes, screenshots, or frontend UI using current Google Design and Material Design 3 guidance. Use when the user asks for a Google-style, Material 3, Material You, M3 Expressive, Android-like, Google UX, interaction, ergonomic, accessibility, component-system, or design-quality upgrade across UX, UI, motion, content, navigation, controls, states, and responsive behavior.
---

# Google Design

Use this skill to turn given frames into a clearer, more usable, more accessible Google/Material-aligned experience. Treat Material Design 3 as the formal UI system and Google Design as the product-design judgment layer.

## Source References

Load only what is needed:

- `references/frame-redesign-workflow.md` for the end-to-end frame critique and redesign process.
- `references/material-3-system.md` for Material 3 foundations, styles, components, tokens, and asset usage.
- `references/google-design-principles.md` for Google Design product judgment, accessibility, AI, motion, and ergonomic heuristics.
- `references/sources.md` for official source links, asset license notes, and refresh guidance.

Use bundled assets from `assets/material-symbols/` when implementing iconography or supplying design/code assets. Use `scripts/find_material_symbol.py <query>` to search the bundled Material Symbols codepoint index.

## Workflow

1. Identify the artifact type: Figma frames, image screenshots, app code, web UI, mobile UI, wireframes, or a written flow.
2. Preserve the original intent and product domain. Do not make the UI generic; map the user's actual task, audience, constraints, and platform first.
3. Audit the current frames for hierarchy, task flow, input effort, navigation, information density, visual rhythm, component misuse, state coverage, accessibility, and ergonomic friction.
4. Choose Material 3 patterns that fit the job: navigation bars/rails/drawers, app bars, FABs, buttons, button groups, chips, cards, lists, sheets, dialogs, menus, search, text fields, tabs, sliders, switches, progress indicators, snackbars, date/time pickers, and tooltips.
5. Apply the system deliberately: color roles, typography scale, spacing, shape, elevation, icons, state layers, focus/hover/pressed/disabled states, and motion. Prefer real usability improvements over decorative Material styling.
6. Redesign or implement the frames. If using Figma tools, update the selected frames directly. If working in code, change the actual UI and verify rendered screenshots. If working from static images, return a concrete redesign spec or generated replacement visual as requested.
7. Validate accessibility and ergonomics: readable contrast, 48dp minimum touch targets, keyboard/focus order, screen-reader labels, predictable navigation, reduced cognitive load, reachable primary actions, and clear error/recovery paths.
8. Return a concise change summary with the biggest UX/UI/interaction improvements and any remaining assumptions.

## Design Rules

- Lead with usefulness, clarity, and trust. A Google-looking screen that makes the task harder is a failure.
- Use Material 3 components as semantic patterns, not visual stickers. If a component does not match the user goal, choose the simpler pattern.
- Keep Google/Material expression adaptive: personalized color, rounded shapes, motion, and playful iconography should support hierarchy and comprehension.
- Prefer familiar controls and progressive disclosure for complex tasks. Avoid inventing novel gestures or hidden mechanics unless the product explicitly needs them.
- Design states as part of the frame, not as afterthoughts: loading, empty, error, success, disabled, focused, selected, pressed, dragged, expanded, and offline where relevant.
- For AI experiences, make user control, confidence, feedback, and reversibility explicit.
- Do not copy Google Design editorial images, videos, or article layouts into user deliverables. Use them as source inspiration only. Bundled reusable assets are limited to open Material Symbols assets and local helper files.

## Output Expectations

For frame redesigns, provide or implement:

- A cleaned hierarchy and interaction model.
- Material 3 component mapping and token decisions.
- Accessibility/ergonomic fixes.
- Motion/state recommendations when the artifact supports interaction.
- Specific before/after rationale, focused on user impact.

When editing live design/code, verify the result visually before final response whenever the environment allows.
