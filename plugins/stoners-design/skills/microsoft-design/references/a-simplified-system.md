# A Simplified System Reference

Source: https://microsoft.design/articles/a-simplified-system/
Author: Jon Friedman
Published: May 12, 2026

## What To Learn From The Article

The article describes an AI-forward Copilot Design System for Microsoft 365. The useful transfer is not a visual skin. It is a behavioral model for designing AI as a humane, contextual thought partner.

## Core Philosophy

- Design AI around human intent, not around model capability demos.
- Treat productivity as a broader system of behavior, context, memory, collaboration, and organizational habit.
- Build with customer feedback and user research instead of AI novelty.
- Make the assistant available across surfaces without making it intrusive.
- Use a unified design language so users understand where AI is, what it knows, and how to recover control.

## Cognitive Model

The article frames cognition as movement between two states:

- Exploration: zooming outward to synthesize, compare, ask, remember, and discover.
- Focus: zooming inward to refine, edit, select, and execute.

Design implication: put each AI affordance at the right level of the user's current focus. If intelligence appears at the wrong level, it feels interruptive.

## Four Architectural Elements

### Dynamic Action Button

Use as an always-available adaptive entry point. It should feel persistent but not noisy. It can open broader AI help, expose local suggestions, or indicate that assistance is available in the current context.

Frame-design translation:

- Place it where repeated reach is low.
- Make it visually stable across screens.
- Let its state adapt to selected content, task phase, or local context.
- Avoid using it as a generic floating chatbot button detached from the work.

### Chat

Use as the broad reasoning surface. It captures context, outputs, decisions, and memory across sessions or product areas.

Frame-design translation:

- Use a side panel, drawer, or dedicated workspace for longer reasoning.
- Preserve prior outputs, linked objects, and task decisions.
- Keep the user's primary canvas visible when possible.
- Give users a clear path back from exploration to execution.

### On-Canvas

Use as lightweight contextual UI that appears near selected content, objects, or current work.

Frame-design translation:

- Keep it compact and spatially connected to the target.
- Offer specific actions, edits, explanations, or transformations.
- Avoid covering the object the user is trying to inspect.
- Include dismiss, undo, and escalation to Chat when needed.

### Suggested User Actions

Use as contextual prompts and capabilities surfaced at the right moment.

Frame-design translation:

- Show suggestions only when they are tied to user intent or task state.
- Make suggestions easy to scan and easy to reject.
- Avoid generic "try asking" chips when better task-specific actions exist.
- Prioritize the next useful action over a large menu of possibilities.

## Throw & Catch Pattern

Throw & Catch is the coordinated handoff between surfaces such as DAB, On-Canvas, and Chat.

Design intent:

- Keep the user's focus and the assistant's focus mutually visible.
- Let one surface become active while another recedes.
- Use timing, signal, and motion to reduce uncertainty.
- Make the assistant feel like an extension of thinking, not a stack of fragmented features.

Frame-design translation:

- Show where an action started, where it is being handled, and how to return.
- Use active, loading, completed, and transferred states.
- Keep handoff motion light and purposeful.
- Preserve continuity of prompt, selection, and output across surfaces.

## Visual Language Extracted From The Page

Use these as inspiration, not rigid tokens:

- Backgrounds: warm off-white and soft gray instead of pure white.
- Text: dark neutral text with secondary gray metadata.
- Surface shape: rounded media panels and cards around 10-24 px.
- Layout: wide editorial grid, strong margins, two-column rhythm, sticky supporting media.
- Motion: autoplaying muted loops for interaction explanation, with explicit play/pause controls where needed.
- Accent colors from the flip-card system: pale yellow `#f1df9d`, orange `#E67240`, pink `#ee9bbb`.
- Typography: Segoe UI for product surfaces; Segoe Serif appears in the article for editorial character.

## Design Quality Bar

A successful Microsoft Design inspired redesign should:

- Make AI discoverable without interrupting the main workflow.
- Preserve task context across screens or modes.
- Offer local help at the point of work and broad help in a persistent reasoning surface.
- Show clear state and ownership during handoffs.
- Reduce cognitive load, not add one more panel.
- Keep the user in control with dismiss, undo, inspect, and recover options.
