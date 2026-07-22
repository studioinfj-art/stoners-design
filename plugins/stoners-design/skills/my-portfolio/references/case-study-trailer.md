# Case Study Trailer Blueprint

Use this structure to create concise product-design portfolio case studies.

## Narrative Shape

The case study should feel like a trailer, not a report. It should show:

1. A clear product problem.
2. Big visible broken metrics.
3. A believable user story validating the metric problem.
4. A sharp root-cause diagnosis.
5. An intuitive solution with a familiar reference from a famous product.
6. Empty design screens that demonstrate the intended solution.
7. A clear metric lift and a conversation hook.

## Section Blueprint

### Hero

Include:

- Product or feature name.
- One-line transformation.
- Short teaser sentence.
- Three small pills for the main case-study themes.

Example:

```text
Example AI product
Fixing onboarding dropoff before the product pitch
A trailer-style case study about the moment users stop setting up and start seeing why the product matters.
```

### Problem

Max two lines of explanation, followed immediately by a big-number metric band.

Do:

- Show numbers large enough that they cannot be missed.
- Use 2 or 3 numbers max.
- Use labels that explain the funnel break.

Example:

```text
The problem was not interest.
It was setup fatigue.

68% Started onboarding
29% Completed setup
52% Dropped before value
```

Do not:

- Hide the numbers inside the user story.
- Use long paragraphs before the metrics.
- Use tiny supporting stats as the only proof.

### User Story

Use qualitative validation only. Keep numbers out unless they are already shown prominently above.

Example:

```text
"I signed up because the promise sounded useful, but the setup felt like homework.
Show me one smart output first, then I will finish the details."
```

Support with one short synthesis line:

```text
Research pointed to premature data collection. The decision was to move proof of value before heavy setup.
```

### Solution Process

Write this as product reasoning:

- Root issue: what in the flow/process caused the problem.
- Change: what needs to happen differently.
- Famous-product reference: use a recognizable pattern without copying the product.
- Psychology or UX principle: name the principle and how it helps.

Examples:

- Airbnb categories: browse intent before search.
- Duolingo: experience progress before account work.
- Slack onboarding: join the workspace before understanding every setting.
- Notion templates: start from a useful structure instead of a blank page.
- Apple setup flows: reduce visible decisions and reveal advanced steps later.

Useful principles:

- Recognition over recall.
- Hick's law.
- Progressive disclosure.
- Endowed progress.
- Commitment and consistency.
- Peak-end rule.
- Zeigarnik effect.

### Empty Design Screens

Add three empty placeholder screens. They should be clearly replaceable.

Common sets:

- Intent Picker, Prompt Preview, First Answer.
- Quick Start, AI Preview, Guided Setup.
- Problem Selection, Recommended Path, Success State.
- Setup Step, Value Preview, Completion Moment.

Each placeholder should include:

- Empty screen area.
- Short screen name.
- Short hint line.

### Impact

Show after-metrics in a big final band.

Example:

```text
29% -> 56% Onboarding complete
18% -> 46% First value reached
24% -> 39% Day-seven return
```

End with:

```text
Wanna know how we did it?
Let us talk about it.
```

## Metric Handling

If live analytics are available:

- Query the relevant Mixpanel funnel or event trend.
- Use the observed numbers.
- Mention the time window in notes outside the frame.

If live analytics are unavailable:

- Use plausible placeholder numbers.
- Keep them internally consistent.
- Mark them as placeholders in notes outside the frame.

Good placeholder patterns:

- Onboarding: started, completed setup, reached first value, returned day seven.
- Activation: visited feature, started first task, completed first useful result.
- Retention: returned week one, repeated key action, invited/shared/exported.
- Conversion: viewed offer, started checkout or plan selection, completed paid action.

## Figma Layout Rules

- Text nodes stay auto-width.
- Text stays center aligned.
- Pills use auto layout and center aligned text.
- Notes go outside the main frame below it.
- Empty screen placeholders stay empty.
- Numbers should be visibly large and placed near the problem, not only at the end.
- Validate that no text overflows.

## Copy Tone

Use short, direct copy:

- Concrete metrics over vague claims.
- Product reasoning over process theater.
- One convincing user quote over a long research section.
- One famous-product reference over a generic "benchmark".
- One psychology principle used correctly, not a list of buzzwords.

Avoid:

- Long paragraphs.
- Generic "users were confused" statements.
- Decorative design notes inside the frame.
- Tiny metrics that are easy to miss.
- Overexplaining the whole project.
