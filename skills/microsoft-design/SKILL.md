---
name: microsoft-design
description: Apply Microsoft Design's AI-forward Copilot design-system thinking to redesign product frames, screens, mockups, Figma files, screenshots, or frontend UI. Use when the user asks for Microsoft Design, Copilot Design System, Fluent-adjacent AI product design, "thought partner" experiences, or improvements to UX, UI, interaction, motion, contextual assistance, continuity, and ergonomics across user-provided frames.
---

# Microsoft Design

## Overview

Transform user-provided frames into a Microsoft Design inspired AI-forward experience. Focus on humane assistance, contextual surfaces, cross-surface continuity, light motion handoffs, and ergonomic reduction of cognitive friction.

This skill is grounded in Microsoft Design's article "A simplified system." Do not treat it as a full Fluent UI specification unless the user also asks for Fluent components.

## Core Workflow

1. Inspect the user's frame source.
   - If the user provides a Figma URL or selected Figma frames, use the Figma workflow/tools available in the environment.
   - If the user provides screenshots or local images, visually inspect them before proposing or editing.
   - If the user provides frontend code, inspect the live rendered UI when possible before changing it.

2. Read only the reference needed for the task.
   - For the article-derived design philosophy, read `references/a-simplified-system.md`.
   - For concrete redesign steps and critique criteria, read `references/frame-redesign-workflow.md`.
   - For source links, colors, and typography guidance, read `references/asset-manifest.md`.

3. Diagnose the current design across four lenses.
   - UX: user intent, workflow continuity, clarity of next action, task-state memory.
   - UI: hierarchy, density, layout rhythm, surface relationship, visual language.
   - Interaction: contextual entry points, handoffs, suggestions, state transitions, feedback.
   - Ergonomics: reach, scan cost, repeated action effort, attention shifts, interruption risk.

4. Map the redesign to the Copilot system primitives.
   - Dynamic Action Button: persistent adaptive entry point.
   - Chat: broader reasoning, memory, and captured outputs.
   - On-Canvas: precise contextual help at the object or selection level.
   - Suggested User Actions: timely prompts that appear only when useful.
   - Throw & Catch: a coordinated handoff between surfaces where one becomes active and the other recedes.

5. Apply changes directly when the environment allows it.
   - For Figma, edit the frames rather than only describing the changes.
   - For frontend code, implement the redesigned UI and verify it in a browser.
   - For static assets, provide annotated revised comps or a concrete edit plan if direct editing is not possible.

6. Explain the design changes in terms of user behavior, not decoration.
   - Connect each major change to flow, context, trust, discoverability, or cognitive load.
   - Keep rationale concise after the work is done.

## Redesign Principles

- Make AI feel like a thought partner, not a pop-up feature.
- Put intelligence at the user's current level of focus: global, local, or selection-specific.
- Preserve user control: suggestions should be useful, dismissible, and timed with intent.
- Keep assistance continuous across surfaces so users do not have to repeat context.
- Use motion and state changes to clarify handoffs, never as ornamental animation.
- Prefer calm visual systems: clear hierarchy, generous whitespace, restrained controls, and precise contextual affordances.
- Reduce ergonomic cost for repeated tasks: fewer attention shifts, fewer long reaches, and obvious recovery paths.

## Source Use

Open the original Microsoft Design article when visual references are needed. Do not imply Microsoft ownership or endorsement of the user's product. Avoid placing Microsoft logos, product marks, copied article media, proprietary fonts, or exact proprietary UI in production deliverables unless the user has the rights and explicitly asks for it.

## Output Standards

When reviewing frames, lead with a prioritized list of design interventions:

- Issue
- Microsoft Design principle applied
- Concrete frame change
- UX/UI/interaction/ergonomic impact
- Priority

When editing frames or code, make the changes first, then summarize what changed and how it maps to the system primitives.

Use Microsoft Design as a translation layer for better product behavior. Do not create a Microsoft fan skin that only changes color, blur, rounded corners, or type.
