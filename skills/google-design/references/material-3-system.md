# Material 3 System Reference

Use this as a compact operating guide to Material Design 3. Refresh from official sources when precision matters.

## Current Source Coverage

The official Material 3 site is organized around:

- Foundations: accessibility/overview, designing, writing, content design, layout, adaptive layout, interaction, gestures, selection, states, usability, and M3 Expressive application.
- Styles: color system, color roles, choosing a scheme, static color, dynamic color, advanced color, color resources, icons, shape, spacing, typography, elevation, motion overview, easing/duration, and transitions.
- Components: buttons, button groups, FABs, extended FABs, FAB menus, icon buttons, segmented buttons, split buttons, toolbars, app bars, bottom sheets, cards, carousel, chips, dialogs, dividers, menus, navigation bar/drawer/rail, loading indicators, progress indicators, radio buttons, search, side sheets, sliders, switches, text fields, tooltips, lists, badges, tabs, checkboxes, date pickers, time pickers, and snackbars.

## Core Principles

- Build adaptive, personal, accessible interfaces from roles and tokens.
- Use components for their semantic behavior, not just their shape.
- Make hierarchy clear through layout, type scale, color roles, elevation, and state.
- Maintain accessibility across color, touch, keyboard, screen reader, text resize, and reduced-motion contexts.
- Apply expressive styling only when it improves comprehension, emotion, or flow.

## Color

Material 3 color is role-based. Do not assign colors directly by visual taste; assign roles:

- `primary`: most important actions and active states.
- `on-primary`: content on primary.
- `primary-container` / `on-primary-container`: emphasized containers.
- `secondary`: less prominent actions and supporting UI.
- `tertiary`: complementary accent or contrasting expression.
- `surface`, `surface-container-*`, `on-surface`: app background, panels, sheets, cards, and readable content.
- `surface-variant`, `outline`, `outline-variant`: lower-emphasis boundaries and grouped surfaces.
- `error`, `on-error`, `error-container`: destructive or invalid states.

Use dynamic color when the platform/user context supports personalization. Use static color when brand control is more important. Always verify contrast for text, icons, controls, and disabled states.

## Typography

Use type roles, not arbitrary font sizes:

- Display: rare, high-emphasis page or hero moments.
- Headline: screen-level meaning.
- Title: section and component headers.
- Body: readable content.
- Label: controls, tabs, chips, buttons, metadata.

Use Roboto or Google Sans-like typography only when appropriate and available. Respect the product's brand font if one exists, but map it into the Material roles. Avoid tiny labels, overlong headings, and text that cannot resize.

## Layout and Spacing

- Start with the user's task path, then place surfaces and actions around it.
- Use adaptive layout across compact, medium, and expanded widths.
- Keep repeated spacing consistent. Favor 4/8dp rhythm and stable component dimensions.
- Use navigation bar on compact mobile, navigation rail on medium widths, and navigation drawer or permanent navigation on expanded/productivity surfaces.
- Use sheets and dialogs for focused tasks; do not bury primary flow in modals.

## Shape and Elevation

- Shape communicates component family and containment. Use rounded corners with restraint.
- Elevation separates surfaces only when hierarchy or layering needs it.
- Prefer tonal surfaces and clear spacing over heavy shadows.
- Dialogs, sheets, menus, and floating elements need clear layering and scrim/escape behavior.

## Motion

- Motion should communicate continuity, causality, hierarchy, and feedback.
- Prefer short, responsive transitions tied to user input.
- Use shared-axis, fade-through, container transform, and meaningful state transitions when they clarify what changed.
- Respect reduced-motion settings.
- Do not use motion to compensate for unclear hierarchy.

## Components

Choose components by user intent:

- **Buttons**: direct actions. Filled for primary, tonal/outlined/text for lower emphasis.
- **FAB / extended FAB**: one high-value contextual action, especially on mobile.
- **Icon buttons**: compact tool actions; require accessible labels/tooltips.
- **Segmented buttons**: mutually exclusive modes or filters with low item count.
- **Chips**: filters, input tokens, suggestions, or compact attributes.
- **Cards**: grouped content with a clear boundary, not page-section wrappers.
- **Lists**: scan-first repeated content.
- **Text fields**: structured input with labels, helper text, validation, and error states.
- **Search**: prominent when retrieval is a core task; support suggestions/history when useful.
- **Sheets**: supplemental tasks without losing context.
- **Dialogs**: blocking decisions only.
- **Snackbars**: brief feedback with optional undo/action.
- **Tabs**: peer content sections at the same hierarchy level.
- **Switches**: immediate binary setting.
- **Checkboxes**: independent or multi-select options.
- **Radio buttons**: mutually exclusive options in a form.
- **Sliders**: approximate numeric adjustment.
- **Progress/loading**: distinguish determinate, indeterminate, skeleton, and empty states.

## Accessibility and States

Design every component with:

- Default, hover, focus, pressed, selected, dragged, disabled, loading, error, and success states where relevant.
- Visible keyboard focus and logical focus order.
- Screen-reader names for icon-only and custom controls.
- Minimum 48dp touch target or equivalent hit area.
- Text contrast and non-color cues for status.
- Resizable text and responsive containers.

## Bundled Assets

`assets/material-symbols/` includes official Material Symbols variable fonts in Outlined, Rounded, and Sharp styles, plus the full codepoint index and Apache 2.0 license.

Use:

- Outlined for default UI actions.
- Rounded for friendlier consumer/product surfaces.
- Sharp for precise, technical, or dense tooling contexts.
- `FILL` axis for selected/active transitions.
- `wght` for stroke weight, `GRAD` for emphasis without changing size, and `opsz` for optical sizing.

Prefer 24dp icons with 20dp or 48dp optical sizing when the actual rendered size changes.
