# Frame Redesign Workflow

Use this reference when the user gives frames, screenshots, Figma URLs, frontend pages, or written UI flows and asks to redesign them through Google Design / Material 3.

## 1. Intake

Capture:

- Platform: Android, iOS, responsive web, desktop web, tablet, wearable, TV, or unspecified.
- Artifact type: Figma frame, image, code, prototype, or written flow.
- Primary user job and success moment.
- Brand constraints and whether Google/Material styling should dominate or only improve structure.
- Any hard constraints: existing components, design system, build stack, accessibility level, localization, dark mode, or screen sizes.

If the frame is visual, inspect it first. If a Figma URL is supplied, use the Figma design context and screenshot. If code exists, render it and compare against screenshots.

## 2. Audit

Score the current frame in these dimensions:

- UX: Does the screen make the user goal obvious? Is the next action clear? Are steps ordered naturally?
- UI: Is hierarchy visible through type, spacing, color roles, grouping, and component choice?
- Interaction: Are all controls familiar, reachable, stateful, reversible, and properly labeled?
- Ergonomics: Are primary actions reachable, targets large enough, dense areas scannable, and repeated tasks efficient?
- Accessibility: Contrast, touch targets, focus order, visible focus, labels, alt text, text resizing, motion reduction, and error messages.
- Content: Is microcopy plain, specific, localizable, and useful at decision points?
- System fit: Are Material 3 tokens/components used semantically?

## 3. Redesign Strategy

Decide the redesign posture:

- **Preserve and polish** when the flow is sound but weak in hierarchy, spacing, or states.
- **Recompose** when the information architecture or component selection blocks comprehension.
- **Reflow** when ergonomics, screen size, or task sequence is the core problem.
- **Reframe** when the screen solves the wrong user problem.

Use Google Design judgment:

- Reduce cognitive load before adding visual richness.
- Prefer familiar patterns when product behavior is novel or high stakes.
- Make the user's control and recovery options visible.
- Use motion to explain continuity, not to decorate.
- Make accessibility part of the concept, not a compliance pass at the end.

## 4. Material 3 Application

Map each major area:

- App structure: app bar, navigation bar, navigation rail, navigation drawer, tabs, search, sheets.
- Primary action: filled button, tonal button, FAB, extended FAB, split button, or icon button.
- Choice/input: chips, segmented buttons, radio buttons, checkboxes, switches, sliders, text fields, date/time pickers.
- Feedback: progress indicator, loading indicator, snackbar, tooltip, badge, dialog.
- Content grouping: list, card, carousel, divider, side sheet, bottom sheet.

Then apply:

- Color roles by purpose, not by preference: primary actions, secondary support, tertiary accents, surfaces, containers, outline, error.
- Typography by information role: display/headline for screen meaning, title for sections, body for readable content, label for controls.
- Shape and elevation to show grouping, containment, and hierarchy.
- Spacing with a consistent grid and enough breathing room around decisions.
- State layers for hover, focus, pressed, dragged, selected, and disabled states.

## 5. Interaction and Ergonomics

Check:

- Primary action is visible without hunting and reachable on the target device.
- Destructive or irreversible actions require confirmation or undo.
- Inputs support sensible defaults, validation, helper text, and clear errors.
- Long forms are chunked, resumable, and scannable.
- Navigation preserves place and orientation.
- Selection controls match intent: switch for immediate on/off, checkbox for multi-select, radio/segmented button for mutually exclusive options, chips for compact filtering or attributes.
- Gesture-only interactions have visible alternatives.

## 6. Deliverable

For a critique, return:

- Top issues by impact.
- Redesign principles.
- Specific frame-by-frame changes.
- Component/token mapping.
- Interaction/state notes.

For implementation, change the artifact directly and verify:

- Desktop and mobile layout where relevant.
- Text does not overflow.
- Interactive states exist.
- Icons/fonts/assets load.
- Accessibility basics pass.
