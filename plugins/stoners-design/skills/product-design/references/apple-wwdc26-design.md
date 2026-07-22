# Apple WWDC26 Product Design Notes

Use these notes when shaping product principles, UX flows, AI-assisted experiences, search, accessibility, and brand systems.

## Sources

- Principles of great design: https://developer.apple.com/videos/play/wwdc2026/250/
- Build agentic app experiences with the Foundation Models framework: https://developer.apple.com/videos/play/wwdc2026/242/
- Design intuitive search experiences: https://developer.apple.com/videos/play/wwdc2026/292/
- Refine accessibility for custom controls: https://developer.apple.com/videos/play/wwdc2026/220/
- Communicate your brand identity on iOS: https://developer.apple.com/videos/play/wwdc2026/251/

## Principles To Apply

- Purpose: clarify why the product or feature should exist before designing the interface.
- Agency: help people understand choices, consequences, state, and recovery paths.
- Responsibility: treat privacy, trust, accessibility, and safety as product requirements.
- Familiarity: follow platform and domain conventions where they reduce effort.
- Flexibility: support content variation, device variation, accessibility settings, and task interruption.
- Simplicity: focus attention on the next meaningful decision or action.
- Craft: use detail, performance, motion, typography, and iteration to build trust.
- Delight: create confidence and emotional clarity through the whole experience, not through decorative excess.

## Search Experience

- Decide whether search scope is local, section-level, or global before choosing placement.
- Design the whole lifecycle: empty prompt, recent searches, suggestions, query entry, loading, results, filters, no results, and recovery.
- Use clear, specific placeholder text to set scope.
- Make active filters and refinements visible and reversible.

## Accessibility For Custom Controls

- Translate visual meaning into assistive meaning: label, value, traits, available actions, and feedback.
- For one-dimensional value controls, expose adjustable behavior and live value updates.
- For two-dimensional or gesture-heavy controls, provide custom actions or direct touch only when appropriate.
- Make feedback useful but not noisy; throttle spoken or live-region updates when values change continuously.

## Agentic AI Product UX

- Split AI experiences into goal-based phases with distinct context, tools, capabilities, and privacy boundaries.
- Choose model capability by task need, not novelty. Prefer local/private or simpler paths when enough.
- Show persistent, actionable UI for limits, availability, failure, and uncertainty.
- Use evaluations or representative task examples to measure whether prompt, context, or model changes improve real outcomes.
- In multi-agent flows, decide whether a handoff should share full context or consult an isolated helper, then design the user-facing state accordingly.

## Brand Identity

- Express brand in the content layer first; keep navigation and system controls familiar unless there is a strong reason to customize.
- Use typography, color, iconography, and interaction to balance distinctiveness with platform trust.
- Do not copy a website brand one-to-one into an app. Adapt the expression to the product context.
