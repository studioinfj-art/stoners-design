# Frame Redesign Workflow

Use this when the user gives Figma frames, screenshots, mockups, or product UI and asks to redesign them using Microsoft Design.

## Intake

Identify:

- Product surface and primary user role.
- Main job-to-be-done for each frame.
- Current task phase: explore, decide, create, edit, review, hand off, or recover.
- Existing AI or assistant affordances.
- Constraints from the current design system.
- Whether the output should be critique, revised frames, frontend code, or both.

## UX Diagnosis

Look for:

- Unclear primary action.
- Repeated context entry.
- AI placed far from the work it affects.
- Suggestions that are generic rather than task-aware.
- Too many equal-weight options.
- Mode switches that hide the user's work.
- Missing history, memory, source, or recovery model.

## UI Diagnosis

Look for:

- Weak hierarchy between canvas, assistance, and controls.
- Overly decorative AI treatment.
- Floating panels that cover important content.
- Dense controls where the user needs calm scanning.
- Cards inside cards or unnecessary framed sections.
- Poor contrast between active, suggested, loading, and completed states.
- Inconsistent corner radius, spacing rhythm, or surface layering.

## Interaction Diagnosis

Look for:

- No clear entry point for assistance.
- No selected-object local actions.
- Missing transition from local action to broader reasoning.
- Suggestions that do not respond to current selection or task state.
- No visible handoff between surfaces.
- No dismiss, undo, revise, inspect, or source-check behavior.

## Ergonomic Diagnosis

Look for:

- Excessive pointer travel for repeated actions.
- Important controls outside comfortable reach zones.
- Hidden recovery paths.
- Long text prompts required for common actions.
- Context switching between separated panes.
- Repeated manual setup before AI can help.

## Redesign Moves

### Add A Dynamic Entry Point

Use when users need persistent access to help across a flow.

- Place near the work area edge or existing command zone.
- Keep size stable.
- Give it selected, listening, working, and completed states when relevant.
- Let it open Chat or trigger On-Canvas options depending on context.

### Add On-Canvas Assistance

Use when work happens on selectable content, cards, rows, documents, or objects.

- Anchor the UI to the selected object.
- Offer two to four precise actions.
- Keep destructive actions out of the first suggestion row.
- Provide inline preview when the action changes visible content.
- Include "open in Chat" for complex reasoning.

### Add Chat As Memory And Reasoning

Use when users need synthesis, comparison, planning, or long-form generation.

- Keep the user's canvas visible when possible.
- Reference the selected object or frame explicitly in the panel header.
- Preserve a history of useful actions and outputs.
- Provide insert, apply, refine, save, and share actions from outputs.

### Add Suggested User Actions

Use when the next step can be inferred from context.

- Favor actions over prompt examples.
- Show why the suggestion is relevant when ambiguity is high.
- Use short labels and supporting metadata.
- Limit quantity; stale suggestions are worse than none.

### Apply Throw & Catch

Use when an action moves between DAB, On-Canvas, and Chat.

- Start with a clear origin state.
- Animate or signal movement toward the destination surface.
- Keep the selected object highlighted or referenced.
- Let inactive surfaces recede visually.
- End with a clear result and next action.

## Recommended Deliverable Format

For critique:

| Priority | Current issue | Redesign action | Principle | Expected impact |
| --- | --- | --- | --- | --- |

For revised frames:

- State which frames were changed.
- List the new surfaces or components added.
- Explain the interaction path from entry point to result.
- Mention any unresolved assumptions.

For frontend implementation:

- Preserve existing project conventions.
- Use real components already in the codebase where possible.
- Verify responsive behavior and no text overlap.
- If adding motion, keep it subtle and state-driven.
