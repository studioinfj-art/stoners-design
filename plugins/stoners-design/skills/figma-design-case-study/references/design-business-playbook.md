# Design and Business Case Study Playbook

## Contents

- Core promise
- Audience modes
- Decision gravity
- Recommended hybrid structure
- Word budgets
- Scannable page design
- Visual proof patterns
- Evidence and integrity
- Accessibility and sharing
- Hook patterns
- Pitfalls and fixes
- Publishing QA

## Core promise

Build a short story with receipts: establish the situation, expose a real constraint, build toward a consequential decision, and show verified consequences. Make the page useful to three readers at once:

- the skimmer needs the outcome, role, stakes, and proof quickly
- the skeptic needs traceable evidence, limitations, and decision logic
- the craft-focused reader needs artifacts, alternatives, trade-offs, and execution detail

Lead with the major point, then earn the detail. Engagement comes from clarity, stakes, proof, and controlled revelation rather than decorative drama.

## Audience modes

Choose one primary mode before outlining.

| Mode | Core sequence | Emphasize | Main risk |
| --- | --- | --- | --- |
| Portfolio | context -> problem -> decisions -> solution -> impact -> learning | ownership, judgment, craft, growth | becoming a generic process diary |
| Business | challenge -> intervention -> results -> recommendation | outcomes, economics, operational value | hiding the reasoning or sounding promotional |
| Teaching | narrative -> background -> decision point -> consequences -> prompts | tension, choices, defensible reasoning | under-showing artifacts and execution |
| Research | purpose -> sources -> analysis -> findings -> implications | evidence chain, rigor, limitations | becoming too slow and dense for general readers |
| Regulated or incident | summary -> case presentation -> action -> outcome -> discussion | traceability, risk, compliance, chronology | losing the product and user narrative |

Use the portfolio-business hybrid by default. Add research rigor or teaching tension only where the evidence and audience justify it.

## Decision gravity

A case study needs an inflection point. Do not present a chronological list of workshops and deliverables.

Build the narrative arc as:

1. `Setup:` context, user, objective, constraints, and baseline.
2. `Tension:` conflicting evidence, competing goals, risks, or a failed assumption.
3. `Decision:` options considered, trade-offs, chosen direction, and why it won.
4. `Execution:` the 2-4 design moves that implemented the decision.
5. `Resolution:` shipped output, validation, consequences, and limitations.
6. `Reflection:` learning, open risk, and next bet.

Every method or artifact must answer, "What did this change?" Move anything that cannot answer that question to the appendix or remove it.

## Recommended hybrid structure

### Title and one-line outcome

- State what changed, for whom, and the verified result or intended effect.
- Keep the title clear, concise, accurate, and understandable outside the portfolio.
- Avoid vague project names, internal codenames, and unsupported superlatives.

### Executive snapshot

Include:

- role and explicit ownership
- team and key partners
- timeline
- objective
- primary constraint
- headline result or validation state

Add a compact proof strip when verified data exists. Suitable proof includes KPI movement, time to ship, sample size, adoption, error reduction, revenue or cost effect, or a consequential decision such as stopping the wrong feature.

### Problem and stakes

- Show what was broken, costly, risky, or confusing.
- Name the evidence that established the problem.
- Explain why solving it mattered at that moment.

### Users and success criteria

- Identify the primary user and task.
- State baseline behavior or conditions.
- Define quantitative and qualitative success signals.
- Separate confirmed criteria from assumptions and missing measures.

### Approach and key decisions

For each of the 2-4 decisions that shaped the outcome, show:

- inputs and evidence
- options considered
- accepted trade-off
- rejected alternative
- final choice and why it fit the constraints
- artifact or screen that proves the choice

### Solution highlights

Present the solution in chapters organized around meaningful design moves, not screen inventory. Each chapter needs an annotated visual, a plain-language rationale, and the expected behavior change.

### Impact and validation

- State what shipped or reached testing.
- Report what moved, what did not move, and how it was measured.
- Combine quantitative and qualitative signals when available.
- Label directional results, proxies, hypotheses, and unmeasured outcomes precisely.

### Next steps and learning

- Name the next experiment, iteration, or validation need.
- Surface residual risks and unanswered questions.
- End with transferable principles: what to repeat, avoid, or change next time.

### Appendix and credits

Use the appendix for research notes, information architecture, complete flows, test summaries, extra explorations, and detailed data. Credit collaborators and link authoritative external sources instead of reproducing them.

## Word budgets

Treat these as editing constraints, not mandatory targets.

| Section | Suggested words |
| --- | ---: |
| Title and one-line outcome | 20-40 |
| Executive snapshot | 120-180 |
| Problem framing | 160-260 |
| Users and success criteria | 150-250 |
| Approach and key decisions | 350-600 |
| Solution highlights | 250-450 |
| Impact and validation | 200-400 |
| Next steps | 120-200 |
| Learnings | 100-200 |
| Appendix and references | as needed |

The essential story should be understandable in 3-5 minutes of scanning. Keep depth available but optional.

## Scannable page design

Use a layer-cake hierarchy:

1. Outcome-led title.
2. One-line promise or contradiction.
3. Executive snapshot card.
4. Proof strip.
5. Sections with meaning-bearing headings.
6. Visual anchors beside the claims they prove.
7. Optional appendix and references.

Apply these rules:

- Make headings summarize the argument, not merely label topics.
- Put the major point in the first sentence of each section.
- Keep paragraphs short and focused on one idea.
- Front-load meaning-bearing words because readers scan headings, first lines, and the left edge.
- Reserve strong color for meaning such as deltas, status, or emphasis.
- Add a text, icon, label, or pattern whenever color communicates meaning.
- Design for mobile: avoid dense multi-column screenshots and annotations that disappear when scaled.
- Keep key text as real text rather than embedding it inside screenshots when possible.

## Visual proof patterns

### Before and after

Pair comparable states and annotate the exact difference. Explain the behavior expected to change. Do not use visual polish alone as proof of improvement.

### Decision table

Show options, trade-offs, constraints, and why the chosen direction won. This is often the highest-signal artifact in the case study.

### Annotated artifact

Guide attention with concise callouts that answer what matters and why. Keep annotations close to the relevant element and readable at likely display sizes.

### Chart as argument

Put a one-sentence takeaway above the chart. Label axes, units, time periods, cohorts, and sources. Use a caption to explain what the reader should notice and what the chart cannot prove.

### Proof strip

Place 2-4 verified signals in or directly below the executive snapshot. Avoid vanity numbers. Prefer signals that connect directly to the objective and decision.

### Quote or observation

Use a quote only when its source and context are clear and it advances the argument. Do not use isolated praise as a substitute for validation.

## Evidence and integrity

- Attach every major claim to a metric, quote, artifact, observation, authoritative source, or clearly labeled assumption.
- Distinguish correlation, contribution, and causation.
- Do not attribute team-level or market-level outcomes solely to design.
- State sample size, method, timeframe, and known limitations when they affect interpretation.
- Link to authoritative sources for external claims and changing standards rather than duplicating long explanations.
- Replace adjectives with evidence. Specificity should create confidence.

## Accessibility and sharing

Accessibility improves both inclusion and persuasion because it lowers the effort required to understand the page.

- Use heading levels in logical order.
- Write meaningful alt text for informative images; mark decorative images as decorative.
- Use descriptive links that name the destination or action instead of "click here."
- Do not communicate status or change through color alone.
- Keep contrast, type size, line length, and whitespace readable.
- Ensure captions and annotations remain legible on smaller screens.
- Write a clear title and opening paragraph that can form an accurate search or sharing snippet.
- Place high-quality images near the text they explain.

## Hook patterns

Adapt these structures without inventing evidence:

- `Unexpected lever:` We improved [outcome] not by adding [expected solution], but by removing or changing [small decisive element].
- `Conflicting evidence:` Research suggested [A], while behavior showed [B]. We had [constraint] to decide which signal to trust.
- `Avoided failure:` The feature did not ship because the evidence showed [risk]. The decision prevented [credible consequence].
- `Hidden problem:` We thought the issue was [surface problem]. The real blocker was [underlying behavior or language].
- `Competing values:` Stakeholders needed [business goal], while users needed [user goal]. The design had to protect both.
- `Metric tension:` [Metric] improved while [trust, quality, or safety signal] weakened. The project became a decision about which outcome mattered.

Use only verified constraints and consequences. When impact is unknown, frame the hook around the decision or insight instead of a result.

## Pitfalls and fixes

| Pitfall | Fix |
| --- | --- |
| Methods dominate the story | Make every method explain a changed decision; move the rest to the appendix. |
| The outcome is buried | Put what changed, for whom, why, and the validation state in the first 150 words. |
| Headings are generic | Rewrite them as argument summaries that still tell the story alone. |
| Claims are unverifiable | Add evidence or relabel them as hypotheses, intended effects, or open validation. |
| Screens form a decorative gallery | Keep only visuals that prove a decision, state change, or consequence. |
| The tone is self-congratulatory | Replace hype and adjectives with constraints, choices, evidence, and limitations. |
| Accessibility is postponed | Check headings, alt text, links, color redundancy, contrast, and mobile legibility during layout. |
| The case study is too long | Preserve the 3-5 minute core story and move supporting depth to the appendix. |

## Publishing QA

### Fifteen-second test

- Can a reader state the project, user, problem, role, and outcome or validation state?
- Does the title promise the actual story rather than a generic redesign?

### Heading-only test

- Do the headings form a coherent setup -> tension -> decision -> resolution arc?
- Are the most important words near the beginning?

### Ownership test

- Can a stranger distinguish owned work, influenced work, and team outcomes?
- Are contributions and credits explicit?

### Evidence test

- Does every major claim have a signal or a clear uncertainty label?
- Can the reader trace inputs -> reasoning -> choice -> consequence?
- Are failed, neutral, or unmeasured outcomes included when material?

### Visual test

- Is every image placed near the claim it proves?
- Does every figure explain what changed, why it matters, and what to notice?
- Are charts arguments with takeaways, labels, sources, and limitations?

### Accessibility and mobile test

- Is heading order logical?
- Do informative images have meaningful alternatives?
- Are link labels descriptive?
- Is meaning preserved without color?
- Are screenshots, captions, and annotations readable on mobile?

### Editing test

- Can 15 percent of the prose be removed without losing meaning?
- Does the core story scan in under five minutes?
- Are confidence and specificity coming from evidence rather than hype?
