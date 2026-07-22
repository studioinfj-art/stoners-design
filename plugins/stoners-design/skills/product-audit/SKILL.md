---
name: product-audit
description: Product Audit skill for reviewing PRDs, product briefs, feature specs, wireframes, flows, or product proposals against a 17-question product audit framework. Use when Codex needs to check whether a PRD answers core product, user, UX, retention, monetization, and positioning questions; rewrite those questions in simple feature-specific language; identify missing answers; and suggest engagement and monetization improvements using founding-product-designer style product judgment.
---

# Product Audit

## Overview

Audit a PRD as evidence, not opinion. Check whether the document answers the 17 product audit questions, translate unanswered or weak areas into plain-language questions tailored to the feature, then recommend improvements that connect user value, engagement, monetization, metrics, effort, and validation.

Use this skill with the companion `founding-product-designer` skill when recommendations are requested. If that skill is available, load it before producing suggestions; apply its evidence discipline, founder-level product framing, metric mapping, tradeoffs, and validation standards.

## Workflow

1. Read the PRD or product brief and extract:
   - feature name, target user, user problem, trigger, use case, success path, lifecycle stage
   - business goal, revenue model, primary metric, guardrails, constraints
   - main flows, entry points, states, risks, analytics, launch or experiment plan
2. Load `references/product-audit-framework.md`.
3. Score PRD coverage for each audit question:
   - `Answered`: the PRD gives a clear answer with evidence or a decision.
   - `Partial`: the PRD hints at an answer but lacks specificity, metric, owner, flow detail, or validation.
   - `Missing`: the PRD does not answer the question.
   - `Not applicable`: only use when the feature scope genuinely makes the question irrelevant; explain why.
4. Tailor each weak or missing audit question to the feature in simple language. Phrase it like a PM, designer, or founder could ask in a review.
5. Generate suggestions for the highest-risk gaps. Map each suggestion to:
   - user benefit
   - business benefit
   - likely metric impact
   - engagement or monetization lever
   - effort and risk
   - experiment, instrumentation, or qualitative validation
6. Prioritize the output. Start with Q1 revenue alignment and Q2 primary metric when unclear; otherwise prioritize the gaps most likely to affect activation, retention, trust, or conversion.

## Output Shape

Return the artifact in this order unless the user asks for a different format:

1. **Audit Verdict**: short judgment on whether the PRD is ready, risky, or missing strategic answers.
2. **Coverage Scorecard**: table with `Q`, `Simple feature-specific question`, `Coverage`, `Evidence or gap`, and optional `Score`.
3. **Questions To Ask Next**: plain-language questions tailored to the feature, grouped by product strategy, user behavior, UX, retention, and monetization.
4. **Suggestions**: prioritized recommendations mapped through founding-product-designer judgment: user value, business value, metric, engagement/monetization lever, tradeoff, validation.
5. **PRD Additions**: concrete sections, bullets, metrics, flow details, or experiments the PRD should add.
6. **Unknowns**: assumptions that should be validated before high-cost execution.

## Review Standards

- Separate what the PRD explicitly says from what is inferred.
- Do not invent analytics, user research, or revenue assumptions. Label inferred points clearly.
- Prefer a few high-leverage recommendations over a long list of generic UX advice.
- Tie every suggestion to a measurable outcome: activation, time-to-value, repeat usage, retention, trust, conversion, ARPU, LTV, CAC payback, or support load.
- When the PRD lacks evidence, recommend the smallest test that could improve confidence.
- Keep tailored questions simple, specific, and feature-aware.

## Resources

- `references/product-audit-framework.md`: the 17-question audit framework, PRD coverage criteria, scoring, tailored-question rules, and recommendation mapping.
