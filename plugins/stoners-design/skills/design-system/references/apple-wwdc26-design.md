# Apple WWDC26 Design System Notes

Use these notes when generating, auditing, or reviewing design systems for Apple-platform quality, search systems, custom controls, agentic AI, and brand expression.

## Sources

- Principles of great design: https://developer.apple.com/videos/play/wwdc2026/250/
- Build agentic app experiences with the Foundation Models framework: https://developer.apple.com/videos/play/wwdc2026/242/
- Design intuitive search experiences: https://developer.apple.com/videos/play/wwdc2026/292/
- Refine accessibility for custom controls: https://developer.apple.com/videos/play/wwdc2026/220/
- Communicate your brand identity on iOS: https://developer.apple.com/videos/play/wwdc2026/251/

## System Checks

- Purpose: every token, component, and pattern should support a real user or product need.
- Agency: components should expose state, feedback, reversibility, and consequences clearly.
- Responsibility: accessibility, privacy, performance, and failure handling belong in the system, not only in feature code.
- Familiarity: keep common controls recognizable unless the system documents why a custom pattern is better.
- Flexibility: define responsive behavior, text growth, localization, density, reduced motion, dark mode, keyboard use, and assistive-tech behavior.
- Simplicity: reduce competing variants and avoid redundant components.
- Craft: include specs for typography, spacing, motion, loading, error, empty, focus, hover, active, disabled, and selected states.

## Search Components

- Define search field anatomy: leading icon, placeholder, entered query, clear control, cancel/escape behavior, focus, disabled, and error states.
- Document placement rules by scope: local content, current view, app-wide, split view, sidebar, or tab.
- Include patterns for recent searches, suggestions, filters, result cards, empty results, partial matches, loading, and recovery.

## Custom Control Accessibility

- Component specs must include accessible label, value, role/trait, actions, feedback, keyboard behavior, and screen-reader behavior.
- For adjustable controls, document increment/decrement behavior and value announcements.
- For complex controls, provide custom action names and non-gesture fallbacks.
- For continuous feedback, define announcement throttling or live-region update rules.

## Agentic AI Components

- Add system patterns for model availability, quota/limit states, tool progress, failed tool recovery, uncertainty, source visibility, and final-answer handoff.
- Separate phases such as brainstorm, plan, execute, review, and verify with different UI states and trust affordances.
- Design persistent fallback UI for unavailable intelligence features rather than one-off alerts.

## Brand Layering

- Define which parts of the system should stay platform-familiar and which parts can carry stronger brand expression.
- Prefer brand expression in content, illustration, imagery, tone, color accents, and interaction details before altering core controls.
- Document typography, color, iconography, and motion as a system so brand does not break hierarchy or accessibility.
