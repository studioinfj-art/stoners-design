---
name: logo-creator
description: Create, refine, and package logos, brand marks, app icons, favicons, mascots, emblems, monograms, and wordmarks using available image generation tools, design critique, iteration galleries, and optional raster cleanup scripts. Use when the user asks to design a logo or visual identity mark, generate logo concepts, improve an existing logo, prepare logo assets, or compare logo directions.
---

# Logo Creator

Design practical logo concepts, iterate with the user, and package final assets for real use.

## Output Folder

Save work in:

```text
.skill-archive/logo-creator/<yyyy-mm-dd-brand-or-summary>/
```

Keep all generated directions, previews, notes, and final exports in the same folder unless the user asks for another location.

## Working Defaults

- Use the current date for folder names.
- Do not force a fixed shape, container, or aspect ratio. Use the format implied by the brand and final use case.
- Generate a focused first set of 4-8 distinct directions before expanding to larger batches.
- Prefer marks that remain recognizable at small sizes and in one color.
- Avoid tiny decorative detail, unreadable text, fake brand copy, and text-heavy compositions unless the user explicitly wants a wordmark or combination mark.
- If the user gives enough brand context, proceed with reasonable assumptions. Ask only for missing essentials that would materially change the result.

## Discovery

Gather or infer:

1. Brand or project name.
2. Product category and audience.
3. Logo type: symbol, wordmark, monogram, mascot, emblem, app icon, favicon, or combination mark.
4. Style direction. Use `references/styles.md` when choosing or explaining styles.
5. Color direction: monochrome, existing brand colors, or exploratory palette.
6. Required text and exact spelling, if any.
7. Final use cases: app icon, website header, social avatar, print, favicon, or pitch deck.
8. Reference images or existing brand assets, when provided.

When requirements are sparse, state the assumptions briefly and generate a first exploration instead of stalling.

## Logo Strategy Method

Use this process for from-scratch logo work, redesigns, and identity marks that need a stronger strategic case. The working mindset is: the designer is responsible for finding and defending an idea, not decorating a name.

### Mindset

- Start from an idea, not a style. Before generating or sketching, state the single idea the mark should carry.
- Treat the logo as a functional identifier. It does not need to explain the whole business, show every service, or contain a complete story.
- Aim for the difficult combination: extremely simple but still distinctive.
- Think like an expert. If the user asks for something that weakens recognition, contrast, scale, or meaning, explain the tradeoff and offer a better route.
- Build adoption into the process. A good logo that is not understood, tested, or presented well may never be used.

### Logo Quality Rubric

Score serious candidates against these criteria before showing them as finalists:

1. Simplicity: can the mark be reduced without losing its identity?
2. Distinctiveness: would it stand apart from competitors in the same category?
3. Appropriateness: does it fit the audience, category, and brand ambition?
4. Memorability: can someone remember the basic shape after one look?
5. Reproducibility: can it pass a quick doodle test from memory?
6. Scalability: does it work as a favicon, social avatar, app icon, and large sign?
7. One-color strength: does the silhouette still work in black, white, or one ink?
8. Timelessness: does it avoid trendy effects that will date quickly?
9. Typographic fit: if there is a wordmark, do letterforms support the same idea as the symbol?
10. Application range: can it live in real contexts without needing a special mockup to look good?

Reject or revise candidates that rely on tiny detail, fragile gradients, generic stock symbols, fake lettering, decorative cleverness, or an explanation that is stronger than the mark itself.

### Client Discovery

When the brief is thin, gather enough context to make a strategic recommendation. Ask only what changes the outcome; infer the rest and state assumptions.

Core questions:

1. What does the current logo do well or badly?
2. Does the current logo already have audience recognition?
3. Who are the primary and secondary audiences?
4. What future direction should the identity support over the next 5-10 years?
5. Who are the competitors and adjacent reference brands?
6. What single idea, feeling, or promise should the logo express?
7. Are there color constraints, cultural associations, or colors to avoid?
8. Where will the logo appear most often?
9. Is the brand name fixed, changing, abbreviated, or commonly shortened?
10. Who will approve the logo, and what will they likely worry about?

For redesigns, separate equity from problems. Keep what already has recognition unless there is a clear strategic reason to break from it.

### Choosing The Logo Mode

- Use a symbol when a compact visual idea can become recognizable without text, especially for apps, social avatars, icons, and brands that need a shorthand.
- Use a logotype when the name itself is the most ownable asset, the brand is new, the category is crowded with generic icons, or the spelling must become memorable.
- Use a monogram when initials are already meaningful, the full name is long, or a compact institutional mark is needed.
- Use a combination mark when the brand needs both name recognition and a symbol that can separate later.
- Avoid forcing a symbol when the concept is weak. A strong wordmark is better than a generic icon beside a name.

### Research And Inputs

Research for meaning before style:

1. Direct competitors: what symbols, colors, and type styles are overused?
2. Adjacent categories: what visual codes could make the brand feel fresh?
3. Audience context: where will people encounter the mark, and how fast must it be read?
4. Non-logo references: posters, architecture, art, product forms, tools, maps, objects, and cultural symbols.
5. Trademark risk: check whether the central visual idea appears already used, especially for simple geometric marks.

Use references to identify visual principles, not to copy shapes. Capture notes in the archive as `strategy-notes.md` when the project is substantial.

### Concept Territories

Before generating final-looking logos, define 2-4 concept territories. Each territory should represent a different strategic idea, not just a different style.

Use this structure in notes:

```text
Territory:
Single idea:
Audience reason:
Visual primitives:
Symbol approach:
Type approach:
Color approach:
Risks:
Best use cases:
Prompt seed:
```

Good territories create meaningful contrast, for example:

- Literal category cue versus abstract brand idea.
- Institutional trust versus expressive personality.
- Heritage/reference-led versus future-facing minimalism.
- Symbol-first system versus wordmark-first identity.
- Geometric precision versus human/organic mark-making.

### Concept Generation

Generate initial directions from concept territories, not from random style prompts. For each territory, create 2-3 visual directions with a short rationale. Prefer a first set of 6-8 options when the user gives enough context.

Each generated option should include:

- Strategic idea.
- Logo mode.
- What makes it ownable.
- Where it may fail.
- Whether it can work in one color.

Do not over-index on color in the first pass. A weak shape with good color is still weak; a strong logo should survive in black and white.

### Sketching And Refinement

Use a wide-to-narrow workflow:

1. Explore many rough shapes or generated routes.
2. Select only the few that communicate the clearest idea.
3. Refine proportion, silhouette, rhythm, spacing, and optical balance.
4. Test at very small sizes.
5. Pair or customize typography.
6. Recheck against the original idea.

Refinement checks:

- Remove details that vanish at 16-32 px.
- Check if negative space is intentional and legible.
- Avoid uneven stroke weights unless they are conceptually useful.
- Adjust geometry optically, not only mathematically.
- Make the lockup work horizontally, stacked, and icon-only if needed.
- Make sure the symbol and wordmark feel like one system.

### Doodle Test

Use the doodle test on serious candidates. A strong mark should be easy to describe and redraw as a rough memory sketch. If the mark needs exact gradients, texture, tiny internal lines, or a long explanation to be recognized, simplify it.

### Typography

Treat typography as part of the logo, not a caption under the symbol.

- The name is often the most meaningful part of the identity; design it with intent.
- Pick type based on the same strategic idea as the symbol.
- Check case, weight, width, terminals, contrast, spacing, and custom letter opportunities.
- Avoid default font pairings that make a strong symbol feel generic.
- For generated wordmarks, verify spelling manually and regenerate or rebuild when text is wrong.
- If the symbol is expressive, the type may need restraint. If the symbol is quiet, type may carry more personality.

### Critique And Selection

Do not choose by personal taste alone. Compare options against the brief and rubric.

Ask:

1. Which idea is clearest?
2. Which mark is most ownable?
3. Which candidate will still work when tiny, one-color, or seen quickly?
4. Which option fits the audience without blending into the category?
5. Which one can support the broadest identity system?
6. What is the simplest change that would improve the best candidate?

When gathering outside opinions, ask specific diagnostic questions. Avoid asking only "which do you like?"

### Application Testing

Before final recommendation, test the logo in realistic contexts. Choose contexts based on the use case:

- App icon and favicon.
- Website header and mobile nav.
- Social avatar.
- Dark and light backgrounds.
- One-color stamp.
- Business card or stationery.
- Packaging, label, or merchandise.
- Signage or environmental placement.
- Pitch deck title slide.
- Small watermark or footer.

Application tests are not decorative mockups. They reveal whether spacing, contrast, format, and recognition actually work.

### Presentation

Build a case, not a gallery. The presentation should make the client understand why the selected mark is the right answer.

Recommended order:

1. Restate the brief and business context.
2. Name the audience and desired perception.
3. State the single guiding idea.
4. Show the design criteria.
5. Show concept territories briefly.
6. Present the recommended mark.
7. Explain the symbol and/or wordmark in plain language.
8. Show refinement details only if they help the case.
9. Show one-color and small-size proof.
10. Show realistic applications.
11. End with the recommendation and next steps.

Avoid presenting too many near-identical options. Too many choices can move the conversation from strategy into personal preference.

### Client Resistance

When a client does not accept a proposal:

1. Ask what specifically feels wrong: idea, audience fit, tone, readability, recognition, color, or application.
2. Return to the agreed criteria and identify which criterion is failing.
3. Separate taste reactions from functional issues.
4. Make targeted refinements instead of restarting from scratch too quickly.
5. If the objection is valid, revise the mark. If the objection weakens the logo, explain why and show a safer alternative.
6. Bring the client along with context, application proof, and comparison, not defensiveness.

### Archive Documentation

For substantial logo work, keep a `strategy-notes.md` file in the archive folder with:

- Brief summary.
- Client/audience answers.
- Research observations.
- Concept territories.
- Generated directions and rationale.
- Critique rubric notes.
- Selected direction and why.
- Refinement decisions.
- Application-test observations.
- Final presentation notes and user feedback.

## Concept Generation

Use the strongest available image generation capability in the current environment. In Codex environments with an image generation tool or `$imagegen` skill available, use it directly. If another generator is configured locally, use it as long as outputs can be saved into the archive folder.

Prompt structure:

```text
<logo type> for <brand>, <product/category>, <symbol or concept>,
<style>, <color constraints>, clean vector-like logo, high contrast,
centered on plain background, works at small sizes, no mockup, no watermark
```

For text-based logos, include:

```text
exact text "<brand name>", legible typography, no misspellings
```

For icon-only marks, include:

```text
no text, simple symbol, readable silhouette
```

Create distinct directions by varying the strategic idea, not only colors. Useful axes:

- Literal symbol versus abstract symbol.
- Geometric versus organic.
- Premium versus playful.
- Flat versus dimensional.
- Monochrome-first versus color-led.

## Preview And Selection

After generating image files, build a local gallery:

```bash
python3 <skill_dir>/scripts/build_preview.py .skill-archive/logo-creator/<yyyy-mm-dd-brand-or-summary>
```

Open the generated `preview.html` for review when a browser is available. Ask the user to choose favorites by filename or number and describe what works or does not work.

If only chat-displayed images are available, show the strongest options in the thread and keep a short note of the prompts and decisions in the archive folder.

## Iteration

When the user chooses favorites:

1. Identify the shared traits of the chosen options.
2. Generate 4-10 refined variations around those traits.
3. Name refined outputs with the source direction, for example `logo-03-v1.png`.
4. Update the preview gallery.
5. Repeat until the user selects a final direction.

Push back gently when a requested change would damage small-size recognition, contrast, or legibility. Offer a practical alternative.

## Finalization

Once the user approves a logo, prepare assets as far as the local environment allows.

Crop whitespace:

```bash
python3 <skill_dir>/scripts/crop_logo.py input.png logo-cropped.png
```

Remove background when `REMOVE_BG_API_KEY` is available:

```bash
python3 <skill_dir>/scripts/remove_bg.py input.png logo-nobg.png
```

If optional tools or API keys are missing, deliver the available raster assets and say exactly which cleanup step could not be produced.

## Deliverables

Return a concise asset list:

```text
Final files:
- logo.png: selected source artwork
- logo-cropped.png: cropped PNG, if created
- logo-nobg.png: transparent PNG, if created
- preview.html: review gallery
```

Include the archive folder path and any constraints, such as missing API keys or image-generation limitations.

## References

- `references/styles.md`: logo style categories, prompt patterns, color guidance, and format guidance.
- `examples/opc-logo-creation.md`: example iteration flow from concept generation to final export.
