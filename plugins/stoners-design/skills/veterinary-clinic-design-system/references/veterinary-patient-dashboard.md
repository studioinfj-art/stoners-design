# Veterinary Patient Dashboard Design System

## Product Promise

Show only what moves the visit forward. Keep SOAP, AI Summary, vitals, and five quick actions easy to reach. Move records and customization lower on the page.

This system is for a veterinary clinic and hospital portal. The emotional tone should feel calm, trustworthy, clean, premium, and clinical without feeling cold.

## Page Order

1. Essential visit hero: patient, owner, today's priority, SOAP, AI Summary, vitals.
2. Quick actions: five top tasks plus Customize.
3. Clinical snapshot: vitals, reminders, calm AI help.
4. Detailed records: alerts, timeline, records, files.
5. Customization controls: role-based modules and quick-action settings.

## Color Tokens

| Token | Hex | Use |
|---|---:|---|
| `color/brand/primary` | `#2D5BE3` | Primary action blue for SOAP, selected nav, and key CTAs |
| `color/brand/primary-hover` | `#244DCC` | Hover/pressed state for primary CTA |
| `color/brand/teal` | `#087E72` | AI, clinical support, and healthy states |
| `color/surface/page` | `#F3F8FD` | Soft clinic page background |
| `color/surface/card` | `#FFFFFF` at about 74% | Main liquid-glass card surface |
| `color/surface/glass` | `#F8FBFF` at about 66% | Frosted glass surface for premium action groups |
| `color/border/glass` | `#FFFFFF` at about 72% | Soft border on glass containers |
| `color/text/primary` | `#111827` | Primary readable text |
| `color/text/secondary` | `#607089` | Supporting copy and labels |
| `color/text/muted` | `#8EA0BA` | Placeholder and low-priority labels |
| `color/status/success` | `#128A49` | Verified, healthy, complete |
| `color/status/warning` | `#D97706` | Missing vitals or needs attention |
| `color/status/danger` | `#C5221F` | Alerts and critical problems |
| `color/chip/blue` | `#EAF1FF` | Soft information chip background |
| `color/chip/green` | `#E8F8F0` | Soft positive chip background |
| `color/chip/amber` | `#FFF2DD` | Soft warning chip background |

## Typography

Use Inter. Do not scale font size with viewport width. Letter spacing stays `0`.

| Style | Size / Line | Weight | Use |
|---|---:|---|---|
| `Vet DS/Primary/Page title` | 32 / 40 | Bold | Patient name or page title only |
| `Vet DS/Secondary/Section title` | 22 / 30 | Semi Bold | Page sections and major panels |
| `Vet DS/Tertiary/Card title` | 18 / 26 | Semi Bold | Card titles |
| `Vet DS/Body/Default` | 15 / 22 | Regular | Body and helper copy |
| `Vet DS/Label/Metadata` | 12 / 16 | Medium | Metadata, small labels, chips |
| `Vet DS/Button/Label` | 15 / 20 | Semi Bold | Buttons and quick actions |

## Spacing, Radius, Effects

Spacing scale: `4`, `8`, `12`, `16`, `24`, `32`, `48`.

Radius scale:
- Control: `18px`
- Card: `28px`
- Panel: `34px`
- Full pill: `999px`

Effects:
- `Vet DS/Glass/CTA shadow`: blue-tinted soft shadow for SOAP and main action buttons.
- `Vet DS/Glass/Card shadow`: frosted premium card treatment with background blur.
- `Vet DS/Surface/Subtle shadow`: low-distraction cards and quick actions.

## Component Rules

Primary CTA:
- Use for `Start SOAP`.
- Keep prominent and easy to find, but not oversized.
- Use blue fill, white text, glass CTA shadow, rounded pill.

Secondary AI CTA:
- Use for `AI Summary` or calm AI assistance.
- Use glass surface and teal accent.
- Keep secondary to SOAP.

Tertiary action:
- Use for `Vitals` and lower-emphasis visit actions.
- Use white/glass surface and blue icon/text.

Quick actions:
- Show exactly five by default.
- Recommended set: Record vitals, Prescription, Vaccination, Invoice, More.
- Put Customize at the top-right of the section.
- Put additional actions behind Customize or More.

Status chips:
- Always use icon + text + color.
- Do not rely on color alone.
- Keep labels short and actionable: `Info verified`, `Vitals missing`, `Vaccines due`.

Glass panel:
- Use for focused action clusters and high-value sections such as `Ready for exam`.
- Avoid glass on every repeated record card.

## Interaction Guidance

SOAP note flow:
- SOAP should remain the primary action.
- Let vets edit generated SOAP sections before saving/exporting.
- If transcript-based notes are shown, allow revisiting transcript and fixing AI interpretation.
- Separate Subjective, Objective, Assessment, and Plan clearly.

AI Summary:
- Rename old Surgery Mode concepts to AI Summary when summarizing patient/visit context.
- Keep AI calm, contextual, and useful; avoid making it dominate the screen.

Customization:
- Admin/client customization should include visible modules, quick-action order, role defaults, and smart rules.
- Customization should feel powerful but should not clutter the vet's exam view.

Error and edge states:
- Missing vitals: amber chip and clear fix action.
- Vaccines due: blue informational chip and link to vaccination action.
- Alerts/problems: red only for true clinical risk.
- No data: say what is missing and provide the next best action.

## Plain-Language UX Notes

Use simple language for annotations and stakeholder-facing notes:
- Say "too much information at once" instead of "high cognitive load".
- Say "hard to find the next action" instead of "poor information hierarchy".
- Say "move this lower on the page" instead of "deprioritize below the fold".
- Say "show only what the vet needs during the visit" instead of "reduce clinical decision complexity".

## Product Source

Treat the user's named design-system page, variables, and dashboard reference frames as the current source of truth.
