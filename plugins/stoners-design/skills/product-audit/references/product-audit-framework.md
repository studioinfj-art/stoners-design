# Product Audit Framework

This framework is adapted from the user's `17-product-audit-questions-rajat.pdf`. It turns the product audit questions into a PRD review system.

## Core Rule

A product audit is not a UI critique. First identify what the product or feature is trying to achieve, then check whether the PRD gives enough evidence to make good product, design, growth, and revenue decisions.

## Coverage Scoring

Use coverage status for every question:

- `Answered`: clear decision, supporting rationale, metric, or flow detail exists in the PRD.
- `Partial`: the topic appears but the PRD lacks specificity, benchmark, dependency, owner, instrumentation, edge state, or validation.
- `Missing`: no meaningful answer appears.
- `Not applicable`: genuinely outside feature scope; explain why.

Optional numeric score:

- `1`: critical failure, likely costing users, revenue, trust, or delivery confidence.
- `2`: significant weakness below category expectation.
- `3`: baseline answer but not differentiated or not deeply evidenced.
- `4`: strong answer with clear rationale and measurable path.
- `5`: best-in-class answer worth preserving as a product decision reference.

Total score can be shown out of 85 when useful:

- `17-34`: critical state.
- `35-59`: developing state.
- `60-85`: strong state.

## The 17 Audit Questions For PRDs

### Revenue And Strategy

1. **Revenue model alignment**
   - PRD should answer: How does this feature support the product's revenue model?
   - Look for: business model, paid surface, conversion path, pricing implication, revenue-driving behavior.
   - Simple feature question: "How will this feature help the business make or protect money?"

2. **Primary metric clarity**
   - PRD should answer: What one primary metric should this feature move?
   - Look for: primary success metric, baseline, target, guardrails, measurement window.
   - Simple feature question: "What number should improve if this feature works?"

3. **Monetization gaps**
   - PRD should answer: Is the feature creating value that the business is not capturing?
   - Look for: high-intent moments, upsell surfaces, free-vs-paid boundary, trial or premium trigger, post-success monetization.
   - Simple feature question: "Where will users feel enough value that we can ask them to pay, upgrade, subscribe, or transact?"

4. **Strategic moat**
   - PRD should answer: What makes this feature hard for competitors to copy or beat?
   - Look for: data advantage, network effect, switching cost, workflow lock-in, brand trust, exclusive supply, proprietary integration.
   - Simple feature question: "Why would this feature still matter if a competitor copied the UI?"

### User And Behaviour

5. **User-design match**
   - PRD should answer: Who is this really for, and does the feature fit that actual user?
   - Look for: target segment, actual user evidence, jobs-to-be-done, use cases, exclusions, accessibility or context constraints.
   - Simple feature question: "Who will use this most, and are we designing for that real person?"

6. **Emotional state**
   - PRD should answer: What is the user's emotional state when they encounter this feature?
   - Look for: trigger, urgency, anxiety, confidence level, motivation, language tone, first-screen expectations.
   - Simple feature question: "How is the user feeling at this moment, and does the feature match that mood?"

7. **Assumed vs actual behaviour**
   - PRD should answer: What user behavior does the feature assume, and what evidence supports it?
   - Look for: behavioral assumptions, research, analytics, support signals, expected frequency, decision points, drop-off risks.
   - Simple feature question: "What are we assuming users will do, and how do we know they actually do it?"

8. **Trust asks**
   - PRD should answer: What does the feature ask from users before delivering value?
   - Look for: signup, permissions, personal data, payment, notifications, time investment, privacy concern, value before ask.
   - Simple feature question: "Are we asking for anything before users see enough value to trust us?"

### Design And Experience

9. **Friction index**
   - PRD should answer: How many steps, decisions, fields, and permissions sit between entry and first value?
   - Look for: step count, screens, form fields, required choices, time-to-value, benchmark against alternatives.
   - Simple feature question: "How fast can a new user get to the first useful outcome?"

10. **Information architecture**
   - PRD should answer: Can users find this feature using their own mental model?
   - Look for: entry points, navigation labels, hierarchy, search, discoverability, cross-linking, progressive disclosure.
   - Simple feature question: "Where will users expect to find this, and will the label make sense to them?"

11. **Empty states**
   - PRD should answer: What happens when the feature has no data, history, content, or setup yet?
   - Look for: future value, sample state, CTA, education, personalization, premium preview, next action.
   - Simple feature question: "When this area is empty, does it help users take the next step?"

12. **Error handling**
   - PRD should answer: How will the feature recover from errors while preserving trust?
   - Look for: failure states, payment ambiguity, validation errors, network issues, retry, refund or reversal clarity, support path.
   - Simple feature question: "When something fails, will users know what happened and what to do next?"

13. **Design system consistency**
   - PRD should answer: Does this feature reuse existing product patterns or introduce new ones intentionally?
   - Look for: component reuse, visual hierarchy, state patterns, accessibility, trust-sensitive surfaces, design-system gaps.
   - Simple feature question: "Will this feel like part of the same product, especially in high-trust moments?"

### Growth And Retention

14. **Aha moment**
   - PRD should answer: What is the first moment when the user understands the feature's core value?
   - Look for: first value event, onboarding path, activation definition, time-to-aha, drop-off before aha.
   - Simple feature question: "What is the moment where users will say, 'I get why this is useful'?"

15. **Re-engagement**
   - PRD should answer: How will dormant or incomplete users be brought back in a useful way?
   - Look for: reminders, push/email/SMS/in-app strategy, timing, personalization, escalation, opt-out, value-based messaging.
   - Simple feature question: "If users leave halfway or go quiet, what helpful reason brings them back?"

16. **Habit loop**
   - PRD should answer: What trigger, routine, and reward will make users return without constant marketing?
   - Look for: external trigger, internal motivation, recurring job, reward, progress, streak, saved effort, network pull.
   - Simple feature question: "What real-life trigger makes users come back again and again?"

### Competitive And Positioning

17. **Differentiation**
   - PRD should answer: Would users miss this feature if it disappeared, or would they use a competitor without friction?
   - Look for: unique value, unique segment, unique data, integration, community, workflow fit, position, proof of preference.
   - Simple feature question: "What can users do here that they cannot easily do elsewhere?"

## Priority Rules

Fix in this order unless the PRD context makes another issue clearly higher risk:

1. Q1 and Q2 if revenue model or primary metric is unclear.
2. Q8, Q9, and Q14 if activation or onboarding is weak.
3. Q12 if financial, privacy, trust, or support-heavy errors are involved.
4. Q11, Q15, and Q16 if engagement and retention are the goal.
5. Q3 if monetization or upgrade conversion is the goal.
6. Q17 if the feature lacks a strong reason to exist.

## Tailored Question Rules

For each weak or missing area:

1. Replace "the product" with the feature name.
2. Use the PRD's actual user segment, trigger, and metric when available.
3. Write in simple language; avoid jargon unless the PRD uses it.
4. Ask for a decision, not a vague discussion.
5. If the PRD is missing evidence, ask for the smallest evidence needed.

Examples:

- Generic: "Does the product have a clear primary metric?"
- Tailored: "For the saved carts feature, is the main goal more completed purchases, higher order value, or more repeat visits?"

- Generic: "Are trust asks proportionate to value delivered?"
- Tailored: "Before asking users to share location and notifications, what useful result do they see first?"

- Generic: "Does the product have a habit loop?"
- Tailored: "What weekly or daily moment will make users naturally open this feature without needing a discount push?"

## Suggestion Mapping With Founding Product Designer Judgment

Use this mapping to turn audit gaps into product recommendations.

For every suggestion, state:

- **Product move**: the concrete change.
- **User value**: what becomes easier, faster, safer, clearer, or more rewarding.
- **Business value**: why this can improve activation, retention, conversion, revenue, trust, or efficiency.
- **Metric**: primary metric and any guardrail.
- **Lever**: activation, engagement, retention, monetization, trust, or differentiation.
- **Tradeoff**: what might get worse or become more complex.
- **Validation**: analytics event, experiment, prototype test, support signal, user interview, or cohort check.

Engagement suggestion patterns:

- Bring the aha moment earlier.
- Reduce steps, form fields, and decisions before first value.
- Turn empty states into previews of future value with a clear CTA.
- Create useful re-engagement tied to user context, not generic reminders.
- Build a habit loop around an external trigger, recurring job, visible progress, or saved effort.
- Personalize the next best action based on the user's last meaningful action.

Monetization suggestion patterns:

- Place upsell at high-intent or post-success moments, not before trust is earned.
- Show premium value in empty states or locked previews without blocking core value.
- Create a free-to-paid boundary based on real user value, usage frequency, saved time, risk reduction, or better outcomes.
- Bundle conversion with trust signals: clear pricing, reversibility, guarantees, refund paths, social proof, or ROI.
- Increase transaction conversion by removing checkout friction and clarifying failure states.
- Tie monetization to the product's strategic moat so paid value feels defensible, not arbitrary.

## PRD Additions To Recommend

When the PRD has gaps, suggest adding concrete sections such as:

- Revenue model and feature monetization path.
- Primary metric, baseline, target, and guardrails.
- User segment, trigger, job-to-be-done, and emotional state.
- First-session flow with step count and time-to-value.
- Aha moment and activation event definition.
- Empty, loading, error, permission, and edge states.
- Re-engagement plan by dormancy stage.
- Instrumentation plan with event names and funnel.
- Experiment or validation plan.
- Competitive positioning and why the feature is defensible.
