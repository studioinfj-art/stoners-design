# Apple WWDC26 Figma Implementation Notes

Use these notes when translating Figma designs that include Apple-platform patterns, search, custom controls, agentic AI states, accessibility, or brand expression.

## Sources

- Principles of great design: https://developer.apple.com/videos/play/wwdc2026/250/
- Build agentic app experiences with the Foundation Models framework: https://developer.apple.com/videos/play/wwdc2026/242/
- Design intuitive search experiences: https://developer.apple.com/videos/play/wwdc2026/292/
- Refine accessibility for custom controls: https://developer.apple.com/videos/play/wwdc2026/220/
- Communicate your brand identity on iOS: https://developer.apple.com/videos/play/wwdc2026/251/

## Implementation Checks

- Preserve purpose and hierarchy from the Figma design. Do not add explanatory notes inside the implemented UI.
- Keep familiar controls recognizable even when matching bespoke visuals.
- Map every visible custom-control cue to an accessible equivalent: label, value, role/trait, actions, and feedback.
- For search designs, preserve standard search anatomy and implement the full expected state set when the design implies it.
- For AI flows, implement visible states for tool progress, model availability, quota/limit handling, failure, uncertainty, and final output.
- For branded designs, keep navigation and core controls usable and familiar while translating stronger brand expression through content, color, type, imagery, and motion.
- Validate text growth, responsive behavior, focus order, keyboard interaction, reduced motion, and screen-reader labels against the design intent.
