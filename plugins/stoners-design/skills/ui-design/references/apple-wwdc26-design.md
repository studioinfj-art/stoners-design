# Apple WWDC26 Design Notes

Use these notes when designing Apple-platform, native-feeling, AI-assisted, search-heavy, branded, or custom-control interfaces.

## Sources

- Principles of great design: https://developer.apple.com/videos/play/wwdc2026/250/
- Build agentic app experiences with the Foundation Models framework: https://developer.apple.com/videos/play/wwdc2026/242/
- Design intuitive search experiences: https://developer.apple.com/videos/play/wwdc2026/292/
- Refine accessibility for custom controls: https://developer.apple.com/videos/play/wwdc2026/220/
- Communicate your brand identity on iOS: https://developer.apple.com/videos/play/wwdc2026/251/

## Product Judgment

- Start from purpose: every feature asks for time, attention, and trust. Remove what does not create value.
- Preserve agency: make state, options, consequences, and undo paths legible before the user commits.
- Treat responsibility as part of craft: privacy, safety, accessibility, and performance are design qualities.
- Use familiarity where it lowers effort. Break convention only when the product benefit is stronger than the learning cost.
- Design for flexibility across device sizes, input methods, content lengths, accessibility settings, and interrupted tasks.
- Simplicity means the important thing is easier to perceive and act on, not that the screen is empty.
- Delight should come from clarity, confidence, responsiveness, and thoughtful detail; avoid decorative celebration that interrupts work.

## Search UX

- Keep the recognizable search anatomy intact: search icon, useful placeholder, clear affordance, clear button, cancel behavior where relevant.
- Choose placement by scope. Inline search implies local scope; toolbar or sidebar search can imply broader app or split-view scope; a tab can support immersive global search.
- Provide recent searches, suggestions, filters, result refinement, no-results recovery, loading states, and partial-match handling as one coherent system.
- Match suggestions to the likely user intent: returning to known content, discovering related content, or narrowing broad content.
- Make filtering reversible and visible. Do not hide active query state or selected filters.

## Custom Controls And Accessibility

- Translate visual cues into assistive-technology cues: purpose, current value, available actions, and feedback.
- For custom sliders or value controls, expose label, value, adjustable trait, increment/decrement behavior, and live updates.
- For two-dimensional or multi-action controls, add custom actions with clear labels instead of forcing one-axis adjustability.
- For gesture-heavy controls, consider passthrough or direct touch only when needed, and provide alternate custom actions when possible.
- Rate-limit spoken or status announcements so feedback is useful rather than noisy.

## AI And Agentic UX

- Model phases as distinct modes with separate goals, tools, context, and capability boundaries.
- Use local/private models for lower-risk or review tasks and larger/server models only when the task needs broader reasoning or context.
- Make privacy, cost, quota, and availability fallbacks visible in persistent UI rather than dismissible alerts.
- Avoid pretending AI is deterministic. Design evaluation, correction, and recovery paths into the flow.
- When tool use is required, ensure there is a clear exit condition and a final answer path.

## Brand On iOS

- Separate the UI layer from the content layer. Let navigation and controls stay familiar; express brand more strongly in content, illustration, imagery, tone, and moments of value.
- Balance familiar system components with unique brand choices in typography, color, iconography, and interaction.
- Do not force web or marketing branding directly into app UI. Adapt the brand to platform context.
- Keep color, typography, and iconography systematic enough that the interface still feels reliable and native.
