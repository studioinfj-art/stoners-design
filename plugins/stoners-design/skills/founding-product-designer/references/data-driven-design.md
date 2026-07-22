# Data-Driven Design Reference

Use this reference when the task involves metrics, funnels, experiments, event tracking, research synthesis, or evidence-backed recommendations.

## Data Stance

Use data to sharpen judgment, not replace it. Good product design combines behavioral data, qualitative evidence, product strategy, and craft.

- Define success before proposing large design changes.
- Use leading indicators for learning and lagging indicators for business outcomes.
- Segment by intent, lifecycle stage, acquisition source, plan, persona, geography, or device when averages hide the truth.
- Pair quantitative signals with qualitative research when the "why" is unclear.
- Watch guardrails so a metric does not improve by harming trust, quality, accessibility, margin, or long-term retention.

## Metrics Hierarchy

Start with the product goal, then break it into measurable inputs.

- North Star: durable customer value that correlates with business success.
- Primary metric: the main behavior the design change should move.
- Input metrics: upstream behaviors that explain movement in the primary metric.
- Guardrail metrics: signals that should not degrade.
- Diagnostic metrics: lower-level events that explain where and why a flow changes.

Lifecycle examples:

- Acquisition: qualified visits, signups, source quality, intent match.
- Activation: setup completion, first successful action, time to first value.
- Engagement: frequency, depth, feature adoption, collaboration, content created.
- Retention: cohort return rate, repeated value moments, renewal intent, churn signals.
- Revenue: trial conversion, upgrade rate, expansion, checkout success, ARPU, margin.
- Quality: task success, error rate, undo/retry rate, support contacts, satisfaction.

## Funnel Design

For a flow, define:

- Entry: where the user comes from and what they expect.
- Intent: what job they are trying to complete.
- Steps: the few meaningful stages in the flow.
- Success: the event that proves the user got value.
- Drop-off: where users abandon, loop, hesitate, or fail.
- Recovery: how users resume, fix mistakes, or get help.

## Event Instrumentation Template

Use this shape when proposing tracking:

```text
event_name:
  Fires when:
  User intent:
  Key properties:
  User/account identifiers:
  Success/failure state:
  Related screen or flow:
  Notes:
```

Event naming should be readable, stable, and behavior-based. Prefer names like `onboarding_step_completed`, `search_result_selected`, or `draft_exported` over vague names like `button_clicked`.

## Experiment Template

Use this shape when proposing an A/B test, beta, prototype study, or rollout:

```text
Hypothesis:
Audience/segment:
Change:
Primary metric:
Input metrics:
Guardrail metrics:
Method:
Duration or sample:
Decision rule:
Risks:
```

Recommend experiments only when they are practical and ethical. For low-traffic or high-stakes products, prefer qualitative research, moderated usability tests, fake-door tests, concierge tests, or phased rollouts over statistically weak A/B tests.

## Research Synthesis

When qualitative evidence is available:

- Extract patterns, not isolated quotes.
- Connect each insight to product behavior and design implications.
- Identify contradictions between what users say and what they do.
- Mark confidence by sample size, user fit, recency, and proximity to real behavior.

## Metric Mapping Examples

Onboarding:

- Primary: first successful core action.
- Inputs: setup completion, time to first value, skipped steps, help usage.
- Guardrails: support tickets, privacy opt-outs, error rate.

Search and discovery:

- Primary: successful result selection or downstream completion.
- Inputs: query reformulation, zero-result rate, filter use, result dwell time.
- Guardrails: pogo-sticking, irrelevant selections, latency.

Checkout or conversion:

- Primary: purchase or upgrade completion.
- Inputs: plan comparison, coupon use, payment errors, form completion.
- Guardrails: refunds, chargebacks, support contacts, buyer regret.

Creation or productivity tools:

- Primary: completed artifact, shared artifact, or repeated creation.
- Inputs: template use, edits, collaboration, export, save success.
- Guardrails: abandonment, undo spikes, time wasted, failed exports.

AI assistant:

- Primary: accepted useful output or completed assisted task.
- Inputs: prompt success, clarification rate, retries, edits, citations opened.
- Guardrails: hallucination reports, user correction rate, cost, latency, escalations.
