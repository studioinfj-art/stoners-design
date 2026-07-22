# Apple WWDC26 Design Notes

Use these notes for Apple-influenced web UI, search flows, agentic AI interfaces, branded app surfaces, and custom interactive controls.

## Sources

- Principles of great design: https://developer.apple.com/videos/play/wwdc2026/250/
- Build agentic app experiences with the Foundation Models framework: https://developer.apple.com/videos/play/wwdc2026/242/
- Design intuitive search experiences: https://developer.apple.com/videos/play/wwdc2026/292/
- Refine accessibility for custom controls: https://developer.apple.com/videos/play/wwdc2026/220/
- Communicate your brand identity on iOS: https://developer.apple.com/videos/play/wwdc2026/251/

## Design Rules

- Purpose before polish: remove features, sections, controls, and animation that do not repay the user's time, attention, or trust.
- Agency before automation: show state, consequences, choices, and recovery paths before irreversible or high-impact actions.
- Familiarity before novelty: use recognizable controls and patterns unless the product benefit justifies teaching a new behavior.
- Flexibility is a first-class requirement: support responsive layouts, long text, keyboard input, assistive tech, reduced motion, and interrupted flows.
- Craft is trust: typography, spacing, responsiveness, performance, loading states, and error recovery all count as visual quality.

## Search Patterns

- Preserve standard search anatomy: recognizable icon, placeholder, clear button, cancel/escape behavior, and focus state.
- Match placement to scope: inline for local content, toolbar for current view, sidebar/tab/global entry for app-wide search.
- Treat search as a state machine: empty, focused, typed, suggestion, loading, results, filtered, no-results, error, and recovery.
- Include recent searches, scoped suggestions, visible filters, and reversible refinement when search is central to the task.

## Accessibility For Custom UI

- For every custom control, define accessible purpose, value, actions, and feedback before shipping.
- Prefer native controls when possible. When custom controls are necessary, expose equivalent keyboard and screen-reader interactions.
- For complex controls, provide named custom actions instead of relying only on visual gestures.
- Rate-limit live announcements and status updates so assistive feedback stays understandable.

## Agentic AI Interfaces

- Separate agent phases by user goal: brainstorm, plan, review, execute, verify, etc.
- Show meaningful progress when reasoning or tool use may take time.
- Build visible fallback states for unavailable models, quota limits, failed tools, and uncertain output.
- Keep the final response path clear when agents or tools hand work off internally.
- Evaluate AI behavior with task-level examples; do not judge reliability by one successful prompt.

## Brand Expression

- Keep global UI/navigation familiar and put stronger brand expression in content surfaces, imagery, type, color, and value moments.
- Adapt brand to the platform instead of copying marketing pages into product UI.
- Let color and type express identity without breaking hierarchy, accessibility, or expected control behavior.
