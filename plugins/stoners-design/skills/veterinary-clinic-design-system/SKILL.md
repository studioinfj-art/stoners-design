---
name: veterinary-clinic-design-system
description: Design-system guidance for creating, reviewing, documenting, or updating a veterinary clinic patient dashboard, SOAP note entry, AI summary, vitals, quick actions, patient records, or customization controls. Use for vet clinic dashboards, patient dashboard UX/UI, SOAP note flows, low cognitive load for clinicians, calm clinical interfaces, or consistent veterinary product design.
---

# Veterinary Clinic Design System

Use this skill to keep veterinary patient-dashboard work consistent and vet-first: show only what moves the visit forward, while keeping client/admin customization powerful but lower on the page.

Read `references/veterinary-patient-dashboard.md` for the full token and component reference when making design decisions or writing Figma updates. If a user provides a product-specific design-system file, treat that file as the source of truth for product names, components, and tokens.

## Core Rules

1. Keep the vet's main view simple.
   Show patient, owner, today's priority, SOAP, AI Summary, vitals, and five quick actions first.

2. Put deeper information lower on the page.
   Alerts, timeline, records, files, billing, and customization can be available, but should not compete with the main exam flow.

3. Give admins control without adding cognitive load for vets.
   Customization controls belong below the clinical view or behind a clear Customize action.

4. Use the premium visual language carefully.
   Use liquid glass for CTAs, active focus areas, and important panels. Do not apply it to every section.

5. Use calm clinic colors.
   Default to soft page blue, white/glass surfaces, clinical blue for primary actions, teal for AI/healthy support, amber for missing information, red only for true alerts.

6. Use Material-style icons.
   Prefer Material Symbols Rounded or Material 3-style vector icons. Do not use text labels as icon substitutes in final UI.

## Figma Workflow

When editing Figma:
- Load the Figma write skill before any `use_figma` call.
- Inspect the existing file and relevant reference frames first.
- Do not edit a locked design-system page unless the user explicitly asks to update the system itself.
- If the product direction changes, duplicate the v1 page and create a v2 instead of silently rewriting the locked source.
- Keep generated frames named clearly with the product or design-system prefix supplied by the user.
- After writing, verify with a screenshot and fix clipping, overlap, crowded copy, or broken icon rendering.

## Review Checklist

Use this before finalizing any veterinary dashboard work:

- Is SOAP clearly primary without being oversized?
- Is AI Summary prominent but secondary to SOAP?
- Are only five quick actions visible by default?
- Can the vet understand the next action in under 5 seconds?
- Are customization controls present but visually separated from the exam flow?
- Are status states shown with icon, text, and color, not color alone?
- Is the page scrollable when needed instead of forcing everything into one cramped viewport?
- Are typography levels limited to primary, secondary, tertiary, body, label, and button?
- Are glass effects used selectively and with enough contrast?
- Are all icon samples real icons or clean vectors?
