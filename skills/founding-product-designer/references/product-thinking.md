# Product Thinking Reference

Use this reference when the task needs strategic product judgment beyond surface UI feedback.

## Founding Designer Lens

Think like an early design leader responsible for product clarity, not only interface quality:

- Define the user and their urgent problem before polishing the solution.
- Find the smallest complete experience that creates real value end to end.
- Prefer speed to learning over big speculative builds.
- Design for trust, comprehension, and repeat use, not just first impression.
- Treat constraints as product inputs: engineering capacity, data availability, go-to-market motion, support load, pricing, and compliance.
- Make the product easier to explain, sell, onboard, and operate.

## Product Diagnostic

Use these questions internally. Ask the user only for the few that block progress.

- User: Who has the problem, how often does it occur, and what are they doing today?
- Pain: Is the pain urgent, expensive, frequent, risky, or emotionally salient?
- Trigger: What causes the user to enter the product or flow?
- Promise: What outcome does the product implicitly or explicitly promise?
- Activation: What moment proves value to the user?
- Retention: What makes the user come back without being pushed?
- Business: What behavior drives growth, revenue, margin, or defensibility?
- Channel: Where will users discover this, and does the product fit that channel?
- Cost: What operational, support, compute, trust, or policy cost does the design create?
- Risk: What could make the product misleading, harmful, hard to maintain, or hard to trust?

## UX Critique Checklist

Assess the experience across these layers:

- Value clarity: user can quickly understand what this is, who it is for, and why it matters.
- Flow logic: steps match user intent and avoid unnecessary decisions.
- Information architecture: important concepts are named, grouped, and ordered clearly.
- Hierarchy: the next meaningful action is obvious without visual noise.
- Interaction model: controls behave predictably and expose system status.
- State handling: loading, empty, success, error, offline, permissions, and edge cases are designed.
- Trust: claims are supported, risky actions are reversible or confirmable, and sensitive data is handled visibly.
- Accessibility: content, controls, contrast, keyboard flow, readable copy, and error recovery are usable.
- Performance perception: the product communicates progress and avoids making users wonder if it is broken.
- System coherence: patterns scale across surfaces and do not create one-off behavior.

## Prioritization Heuristics

Use prioritization methods as aids, not as fake precision.

- Choose the change that improves the highest-friction moment in the core value path.
- Prefer high-conviction, low-effort fixes when evidence is strong.
- Prefer small validation tests when confidence is low and build cost is high.
- Prioritize changes that compound: clearer mental model, better data capture, reusable components, or lower support load.
- Avoid optimizing a flow that solves the wrong problem or attracts the wrong user.

## Common Product Contexts

For AI products:

- Design for calibration: show what the system knows, does not know, and needs from the user.
- Build correction loops: edit, retry, approve, reject, cite, compare, and recover.
- Measure answer usefulness, time saved, trust, correction rate, escalation, cost, and latency.
- Avoid overclaiming intelligence; make uncertainty and source quality visible when stakes are high.

For dashboards and operational tools:

- Prioritize scanning, comparison, filtering, and repeated action over marketing-style storytelling.
- Surface exceptions, trends, thresholds, owners, and next actions.
- Keep density high but structured; reduce decorative friction.

For marketplaces and networked products:

- Balance both sides of the market and identify the constrained side.
- Design for liquidity, trust, matching quality, fraud prevention, and repeat transactions.

For onboarding and activation:

- Reduce time to first value.
- Ask for data or setup only when the user can see why it matters.
- Make progress, payoff, and next action visible.

For monetization:

- Tie pricing or upgrade moments to demonstrated value.
- Avoid interrupting the core value moment before the user understands the product.
