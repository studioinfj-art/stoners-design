# Case Study Template

## Contents

- Evidence ledger
- Scene structure
- Executive snapshot
- Users and success criteria
- Decision pattern
- Before vs after pattern
- Psychology breakdown pattern
- Ownership check
- Probing questions
- Visual proof checklist
- QA checklist
- Pitfalls

## Evidence ledger

Create this before drafting. Keep it short, factual, and useful.

| Type | Item | Source | Status | How it should appear |
| --- | --- | --- | --- | --- |
| verified | Example: users had to leave the main task flow to access controls | Figma flow + user brief | usable | The Problem |
| verified | Example: the updated state appears in the main list view | Figma screens | usable | Before vs After |
| inferred | Example: likely reduced memory burden | design interpretation | label clearly | Psychology Breakdown |
| missing | Example: conversion or retention delta | not provided | ask or omit | Impact |
| proof | Example: annotated crop showing old vs new state | screenshot | usable | visual comparison |

Rules:

- Verified facts can come from Figma or the user.
- Inferred points must be labeled as interpretation.
- Missing items should trigger a question only if the answer materially improves the story.
- Proof must sit next to the claim it supports.

## Scene structure

Use this structure by default. The case study should feel like a guided experience, not a static report.

### 1. Hook

Purpose:

- open with tension
- make the reader curious

Use:

- a user struggle
- a contradiction
- a high-friction moment

Questions:

- What makes this problem instantly relatable?
- What tension makes the reader want to continue?
- What line can open the scene without sounding dramatic for the sake of it?

### 2. Executive Snapshot

Purpose:

- enable a 60-second understanding
- establish ownership, constraint, objective, and proof early

Include:

- role, team, and timeline
- owned, influenced, and team outcomes
- primary constraint and objective
- verified result or current validation state
- a 2-4 item proof strip when strong signals exist

### 3. Context and Problem

Purpose:

- set the product and situation quickly
- show the user and business stakes

Include:

- product
- moment in the product lifecycle
- user type
- role
- timeline

Questions:

- What does the reader need to know before the conflict makes sense?
- What can be compressed into one fast scene-setting block?
- Where exactly did users hesitate, drop, or get confused?
- What business or system cost did that create?
- What was visibly broken in the old experience?

### 4. Users and Success Criteria

Purpose:

- define who mattered and how success was judged

Include:

- primary user and task
- baseline or starting condition
- quantitative and qualitative success signals
- assumptions and missing measures that limit the claim

### 5. The Insight

Purpose:

- reveal the non-obvious thing the team learned

Questions:

- What signal changed the framing?
- What user behavior mattered more than the team first assumed?
- What did the team realize too late, or just in time?

### 6. The Decision

Purpose:

- show the core design judgment

For each decision block, answer:

- `What changed:`
- `Why it changed:`
- `Trade-off:`
- `Rejected alternative:`
- `Why this won:`

Target:

- 2-4 decision blocks max
- each block should feel like a reveal, not a checklist

### 7. Before vs After

Purpose:

- make the improvement visible

Use:

- paired screenshots
- annotations
- tight callouts

Questions:

- What exactly changed on screen?
- What should the reader notice first?
- Which behavior should now become easier, safer, or faster?

### 8. Psychology Breakdown

Purpose:

- connect interface choices to behavior

For each key decision, explain:

- the relevant cognitive principle
- the mechanism in plain language
- the user behavior it influences
- the evidence on the screen

Questions:

- Why would this design change behavior?
- What principle explains the change without sounding academic?
- What visual proof supports that explanation?

### 9. Impact and Validation

Purpose:

- connect design to consequence

Questions:

- What metric moved?
- What user behavior shifted?
- What system, team, or business outcome is verified?
- What remains unknown?

Rules:

- prefer quantitative proof
- if impact is not verified, say so directly
- state what shipped or reached testing, what changed, what did not change, and how it was measured

### 10. Next Steps and Key Takeaways

Purpose:

- end with insight, not self-congratulation

Questions:

- What failed or surprised the team?
- What would be done differently next time?
- What lesson transfers beyond this project?
- What risk, unanswered question, experiment, or iteration comes next?

## Decision pattern

Use this whenever you need to show design judgment clearly.

| What changed | Why it changed | Trade-off | Rejected alternative | Why this won | Proof |
| --- | --- | --- | --- | --- | --- |
| Moved critical actions into the conversation context | Users were leaving the main task flow just to act on something they already understood | Slightly denser local UI | Separate tools page | Kept action close to context and reduced navigation overhead | menu state and resulting action |
| Added confirmation only when the system was uncertain | Users needed speed in routine cases but reassurance in ambiguous ones | Occasional extra step | Always confirm or never confirm | Balanced trust with efficiency | uncertainty prompt and confirmed state |
| Reflected preferences directly in the list state | Users were unsure whether their action had worked | More status surface area | Success toast only | Reduced ambiguity after action without forcing memory | before/after state comparison |

Rules:

- show the rejected alternative when known
- explain why the winning option fit the real constraints better
- keep each decision block tight

## Before vs after pattern

Use this structure for visual comparisons:

- `Before:` what users saw or had to do
- `After:` what changed
- `Why it matters:` what behavior should now shift
- `Callout:` the one thing the reader should notice first

Good uses:

- fewer steps
- clearer defaults
- more visible state
- better timing of information
- safer recovery from errors

Bad uses:

- side-by-side screens with no annotations
- purely visual polish comparisons
- vague captions such as "cleaner interface"

## Psychology breakdown pattern

Use this when a design decision needs behavioral explanation.

| Principle | Behavior | Design move | Mechanism | Proof |
| --- | --- | --- | --- | --- |
| Hick's Law | Too many simultaneous options slow decisions | Deferred advanced options until the user had context | Fewer choices at the wrong moment reduced choice overload | progressive reveal states |
| Recognition over recall | Users should not have to remember what they just changed | Reflected updated preferences in the main view | The interface surfaced the answer instead of forcing memory | changed list state |
| Framing | Users react differently based on how uncertainty is presented | Used explicit confirmation only for uncertain cases | The system framed uncertainty as something fixable, not as failure | uncertainty sheet |
| Nudge | Users need a better default path without feeling forced | Promoted the intended action and de-emphasized secondary actions | The interface steered behavior without removing control | action hierarchy |

Rules:

- prefer clear mechanism over theory language
- use only the principles that genuinely clarify the decision
- never force a principle onto a screen that does not support it

## Ownership check

Ownership must be explicit and fast to scan.

Minimum required framing:

- `Owned:` decisions, deliverables, and workflows directly controlled
- `Influenced:` partner decisions, approvals, or implementation details shaped but not controlled
- `Not owned:` anything materially outside the designer's remit when relevant

If ownership is fuzzy, ask:

- Which decisions could the designer make alone?
- Which required PM, engineering, or stakeholder approval?
- Which visible outcomes should not be overstated as fully owned?

## Probing questions

Ask 3-5 of these before generating if the answers are not already verified.

### Constraints

- Which constraint shaped the final solution most?
- What was fixed versus negotiable?
- What limitation forced a compromise?

### Trade-offs

- What did the team knowingly sacrifice?
- Which option almost won?
- What did the final direction make worse, slower, or more complex?

### Metrics

- What metric moved, even slightly?
- What outcome was expected but never measured?
- If there is no metric, what is the strongest verified consequence?

### Ownership

- What did the designer own end-to-end?
- What did the designer influence but not control?
- What should not be framed as solely their decision?

## Visual proof checklist

- Prefer 3-6 strong visuals over a gallery.
- Use tight crops that isolate the decision.
- Put the visual next to the exact claim it supports.
- Caption each image with what changed, why it mattered, and what behavior it should affect.
- Use annotations, arrows, or labels when the difference is not obvious.
- Remove decorative screens that do not teach anything.

## QA checklist

Do not finalize until all of these are true:

- the opening creates immediate tension
- the structure reads like scenes, not documentation
- every important visual has reasoning attached
- every major decision includes why it changed and what alternative lost
- ownership is explicit
- behavior and business effects are connected where evidence allows
- impact is truthful and not inflated
- the writing feels scrollable and progressive
- the tone is engaging without becoming gimmicky

## Pitfalls

- Do not open with metadata when tension would work better.
- Do not show UI without saying what changed and why.
- Do not let the story become a generic UX process walkthrough.
- Do not use psychology as decoration.
- Do not confuse animation, polish, or density reduction with actual behavioral improvement.
- Do not invent business impact or certainty where none exists.
