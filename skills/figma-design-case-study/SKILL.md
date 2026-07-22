---
name: figma-design-case-study
description: Turn a Figma file, prototype, flow, or selected nodes into an interactive, story-driven, visual-first product design case study that explains decisions through behavior, trade-offs, and evidence. Use when Codex is asked to create, rewrite, or sharpen portfolio case studies, redesign writeups, or business-facing design summaries from Figma URLs, node IDs, screenshots, or exported frames.
---

# Figma Design Case Study

Use this skill to create a case study that feels like a guided product experience, not a report. The goal is not to write prettier documentation. The goal is to teach design thinking through scenes, visuals, behavioral reasoning, and decision trade-offs.

Default posture:

- think like a product designer, UX storyteller, and behavioral psychologist
- structure the story like a guided journey, not a method log
- attach every important idea to a visual anchor
- explain behavior, not just interface changes
- keep the reasoning honest: never invent impact, research rigor, or shipped proof

This skill should feel closer to Growth.Design than to a static portfolio page, but it must stay truthful. The Figma file proves interface decisions, states, hierarchy, and flow. User-provided context proves stakes, constraints, ownership, metrics, and outcomes. If the evidence is weak, downgrade the claim rather than decorating it.

## Core rules

Every meaningful section must answer:

- what changed
- why it changed
- what alternative was rejected
- what user behavior or psychology explains the change
- what the designer owned versus only influenced

Always optimize for:

- story-driven flow
- high visual scannability
- short sections with strong micro-headlines
- scene-by-scene progressive disclosure
- clear cause -> effect reasoning
- outcome and stakes in the first 150 words
- a core story that can be understood in a 3-5 minute scan

Always remove:

- generic UX process explanations
- tool mentions unless they materially explain the work
- static documentation voice
- long paragraphs that flatten the story
- visuals without reasoning

## Workflow

### 1. Collect the minimum input set

Ask for these only if the user has not already supplied them:

- exact Figma URL or node IDs
- project name and intended audience
- role, team shape, and timeline
- goal, constraints, and success criteria
- shipped outcomes, metrics, or quotes
- preferred output format: Markdown, HTML page, or slide outline

If the user only provides a Figma file, continue with visual and interaction evidence. State clearly which business and outcome details are still unknown.

### 2. Gather evidence before writing

If the task includes a Figma URL or node ID, follow `../figma/SKILL.md` to collect design evidence.

- Use `get_metadata` first when the file is broad or the story is still fuzzy.
- Use `get_design_context` on the 3-6 nodes that best show the narrative arc.
- Use `get_screenshot` for every frame, comparison, or state shift you plan to reference.
- Use `get_variable_defs` only when design-system consistency matters to the reasoning.
- Ignore hidden layers unless the user explicitly asks to include explorations or work-in-progress.

Build an evidence ledger with four buckets:

- verified: facts directly shown in Figma or explicitly provided by the user
- inferred: plausible interpretation that must be labeled
- missing: details that must be asked, omitted, or reframed
- proof: screenshots, crops, metrics, quotes, docs, or links that can support a claim

### 3. Choose the truthful mode

Pick the most honest framing before drafting:

- shipped case study: shipped work and outcomes are verified
- process case study: process and decisions are verified, business impact is partial
- concept case study: the artifact exists, but shipped proof does not

Never present concept work as shipped work. Never treat polished UI as evidence of product success.

Also choose the primary reader mode:

- portfolio: emphasize judgment, craft, ownership, and learning
- business: emphasize challenge, intervention, results, and decision value
- teaching: emphasize tension, alternatives, and the decision point
- research or regulated: emphasize data sources, evidence chain, limitations, and traceability

Use one mode as the lead. Borrow supporting elements from other modes without producing a mixed, repetitive structure.

### 4. Interrogate before generating

Before generating a case study, ask 3-5 sharp questions. These questions must prioritize:

- constraints
- trade-offs
- metrics
- ownership

Do not start drafting until you have either:

- answers to the highest-leverage questions, or
- a clear record of what remains unknown

Good question types:

- What exactly did the designer own end-to-end, and what required partner approval?
- What constraint shaped the final solution most?
- Which alternative was seriously considered and why was it rejected?
- What signal, data point, or observation changed the team's direction?
- What changed after testing or stakeholder feedback?
- What metric moved, or what outcome is still unknown?

If the user cannot answer:

- label the missing detail
- compress the section rather than filling it with process padding
- use the uncertainty as a reflection or validation gap where appropriate

### 5. Build the case study as a guided journey

The default structure is progressive and scene-based. Information should be revealed in steps, not dumped all at once.

Default structure:

1. Hook
2. Executive Snapshot
3. Context and Problem
4. Users and Success Criteria
5. The Insight
6. The Decision
7. Before vs After
8. Psychology Breakdown
9. Impact and Validation
10. Next Steps and Key Takeaways

Each section should feel like a scene:

- set context
- introduce tension
- reveal the insight
- show the decision
- show the consequence

Use the reusable section template in `references/case-study-template.md`.

### 6. Make visuals carry the thinking

Every major insight must have a visual explanation attached to it.

Good visual patterns:

- annotated screenshots
- before/after comparisons
- cropped callouts that isolate the decision
- state changes that reveal system behavior
- flow comparisons that explain what got simpler, faster, or safer

Rules:

- never show UI without saying what the reader should notice
- every image needs a caption that explains what changed and why it matters
- decorative galleries are low-signal; remove them
- if a section has no meaningful visual proof, keep it short and text-first
- place each visual next to the claim it supports
- put a one-sentence takeaway above every chart and label axes clearly
- ensure screenshots and annotations remain legible on mobile
- never use color as the only signal; pair it with labels, text, icons, or patterns

### 6a. Design the page for scanning

Use a layer-cake hierarchy: outcome-led title -> one-line promise -> executive snapshot -> meaningful section headings -> visual anchors -> optional appendix.

- make headings carry the story even when paragraphs are skipped
- front-load the first sentence of every section with its major point
- keep paragraphs focused on one idea and remove filler aggressively
- include a compact proof strip near the top when verified signals exist: KPI movement, time to ship, sample size, adoption, avoided cost, or decision impact
- keep dense process artifacts in an appendix instead of interrupting the core story
- use proper heading order, meaningful alt text, descriptive link text, and captions

For detailed word budgets, layout placement, audience variants, accessibility, SEO, and publishing checks, read `references/design-business-playbook.md`.

### 7. Explain decisions through behavior

For every major decision, connect:

- the design change
- the user behavior it responds to
- the cognitive principle that explains why it works
- the business or system effect it is trying to create

Useful lenses when the evidence supports them:

- Hick's Law
- cognitive load
- anchoring
- framing
- nudge design
- progressive disclosure
- recognition over recall
- visibility of system status
- error prevention
- trust and uncertainty management

Do not namedrop principles. Explain mechanism.

Good examples:

- "We delayed the decision until the moment users had enough context, which reduced choice overload instead of front-loading it."
- "The confirmation step appeared only when the AI was uncertain, which protected trust without slowing every routine action."
- "By surfacing the changed state in the main list, the design removed the need to remember whether the action had worked."

Bad examples:

- "We used Hick's Law here."
- "This is based on cognitive psychology."
- "The redesign improves UX because it is cleaner."

### 8. Guide the reader like a narrator

The writing should feel interactive without becoming gimmicky.

Allowed techniques:

- ask a sharp question to open a scene
- use curiosity loops such as "Why were users dropping here?" or "Let's zoom in."
- reveal insights gradually
- use light, controlled humor when it increases readability

Not allowed:

- empty drama
- vague storytelling
- academic tone
- filler transitions

### 9. Keep claims honest

Never infer launch status, KPI lift, stakeholder alignment, or research rigor from pixels alone.

When evidence is incomplete:

- downgrade the claim
- label it as inference or next-step validation
- prefer "designed to reduce..." over "reduced..."
- prefer "prototype suggests..." over "users preferred..."
- prefer "intended to increase..." over "increased..."

### 10. Finish with a strict QA pass

Do not finalize until all of these are true:

- the opening makes the tension immediately legible
- headings alone tell a coherent scene-by-scene story
- each section contains a clear decision or reveal
- every important visual has reasoning attached
- every major decision includes a rejected alternative when known
- ownership is explicit
- behavior and business consequences are connected where evidence allows
- impact is truthful and not inflated
- the writing feels scrollable, not report-like
- the first 150 words communicate what changed, for whom, why it mattered, and the verified outcome or validation state
- title and introduction are clear enough to work as a search or sharing snippet
- heading order, alt text, link labels, color redundancy, and mobile image legibility pass accessibility review

## Output guidance

Default structure:

1. `Hook`
2. `Executive Snapshot`
3. `Context and Problem`
4. `Users and Success Criteria`
5. `The Insight`
6. `The Decision`
7. `Before vs After`
8. `Psychology Breakdown`
9. `Impact and Validation`
10. `Next Steps and Key Takeaways`

Expected behavior by section:

### 1. Hook

Open with tension, not metadata.

- use a relatable user struggle, contradiction, or product friction
- keep it short
- make the reader want to continue

### 2. Executive Snapshot

Enable a 60-second understanding.

- role, team, timeline, constraint, objective, and headline result
- use a compact proof strip only for verified signals
- distinguish owned, influenced, and team outcomes

### 3. Context and Problem

Set the scene quickly.

- what product this is
- what situation triggered the work
- who the user is
- role and timeline in compact form

- where users struggle
- what the business risk is
- what was visibly broken, confusing, or inefficient

### 4. Users and Success Criteria

Define who mattered and how success was judged.

- primary user and task
- baseline or starting condition
- quantitative and qualitative success signals
- assumptions or missing measures that limit the claim

### 5. The Insight

Reveal the key observation.

- what signal changed the framing
- what behavioral insight mattered
- what the team realized that was not obvious at first

### 6. The Decision

This is the core section.

For each major decision, answer:

- what changed
- why it changed
- what trade-off was accepted
- what alternative was rejected
- why this decision won under the constraint set

### 7. Before vs After

Show the change visibly.

- pair the old and new state where possible
- annotate what improved
- explain which user behavior should now change

### 8. Psychology Breakdown

Translate design into behavior.

- identify the relevant cognitive principle
- explain the mechanism in plain language
- connect it to the screen evidence

### 9. Impact and Validation

Connect cause to effect.

- design decision -> user behavior -> business or system effect
- prefer metrics
- if metrics are missing, use the strongest verified outcome and label uncertainty
- state what shipped, what changed, what did not change, and how the result was measured

### 10. Next Steps and Key Takeaways

End with transfer value.

- what this project taught
- what failed or surprised the team
- what would be done differently
- what others can learn from the decision-making
- open risks, unanswered questions, and the next experiment or iteration

## Interaction rule

Before generating, ask 3-5 sharp questions that extract:

- constraints
- trade-offs
- metrics
- ownership

Do not skip this unless the answers are already explicit and verified.

## Style

The writing should be:

- crisp
- engaging
- slightly conversational
- visually scannable
- never academic
- never boring

Tone guidance:

- use short paragraphs
- prefer bullets and micro-headlines
- allow light delight, not comedy writing
- teach through revelation, not explanation dumps

## References

- `references/case-study-template.md` for the scene-based structure, evidence ledger, probing questions, and QA checklist
- `references/design-business-playbook.md` for audience modes, word budgets, decision gravity, page layout, proof placement, accessibility, SEO, hooks, pitfalls, and publishing QA
