---
name: my-portfolio
description: Create or update portfolio case studies as concise product-design trailers, especially in Figma. Use when asked to make a case study, portfolio story, product design presentation, Figma portfolio page, metric-led UX narrative, onboarding/dropoff/activation/retention story, or "wanna know how we did it" teaser using analytics, user story, solution process, empty design screens, and impact metrics.
---

# My Portfolio

## Purpose

Create portfolio case studies that read like trailers: enough evidence and product thinking to make the reader want a conversation, without turning the page into a full project report.

Use this skill for Figma portfolio pages and product-design narratives where the output needs strong headings, big visible metrics, short copy, clean navigation, and empty placeholders for final screens.

## Core Workflow

1. Identify the product, feature, funnel, and target page or artifact.
2. Use analytics first when available. If Mixpanel or another analytics source is connected and the project ID is known, query the relevant funnel, flow, retention, or event trend before inventing numbers.
3. If analytics access is missing, write plausible placeholder metrics and clearly mark them as placeholders in notes outside the design frame.
4. Build the case study in this order:
   - Problem: show the broken metrics in a dedicated big-number band, not only in body copy.
   - User story: write one convincing quote or synthesis that validates the problem qualitatively.
   - Solution process: explain the root problem, the product/process change, a famous-product reference, and the psychology or UX principle.
   - Basic design screens: add empty, labeled screen placeholders for the user to replace with final designs.
   - Impact: show after-metrics and end with "Wanna know how we did it? Let us talk about it."
5. Keep the narrative short. Each section should be skimmable in seconds.
6. Put all design notes outside the main design frame, below the frame.

Load `references/case-study-trailer.md` when writing the content, building the Figma layout, or adapting the structure to a new product.

## Figma Rules

Follow the Figma user's standing instructions:

- Keep text auto-width.
- Center-align all text, especially text inside pill designs.
- Never put design notes inside the design frame. Put notes below the frame.
- Use Safari only for browser automation if browser work is needed.
- Use relevant skills, apps, and MCP tools automatically.
- Run any timed automation early enough to finish by the mentioned time.

When writing to Figma, load and follow the Figma write skill before using `use_figma`. Inspect the target page first, place new frames away from existing content, return created node IDs, and visually validate the result with a screenshot or equivalent canvas check.

## Visual Direction

Prefer clean, confident, easy-to-navigate layouts:

- Use strong section hierarchy and visible numbering.
- Use big metrics as first-class content.
- Avoid hiding numbers in story paragraphs.
- Use pills for section labels and short metadata.
- Use large but readable headings.
- Use a restrained but memorable palette.
- Keep screen placeholders empty and clearly replaceable.
- Avoid generic card grids unless they serve metric comparison or screen placeholders.

## Quality Gate

Before finishing:

- Confirm the target artifact exists in the requested Figma page or file.
- Confirm the broken metrics are prominent and readable.
- Confirm story copy is qualitative and cannot hide the numbers.
- Confirm empty design screens are present.
- Confirm notes are outside the frame.
- Confirm no text is visibly clipped or overflowing.
- Mention whether metrics came from live analytics or are placeholders.
