---
name: video-generator
description: AI video production workflow using Remotion. Use when creating videos, short films, commercials, product demos, social media videos, animated explainers, promotional videos, or any programmatic motion graphics content. Produces polished motion graphics rather than slideshow-style decks.
---

# Video Generator

Create professional motion graphics videos programmatically with React and Remotion.

## Default Workflow

Always follow this sequence unless the user explicitly narrows the request:

1. Scrape brand data first when the video features a product, company, or website.
2. Create the Remotion project in `output/<project-name>/`.
3. Write a short director's treatment: vibe, camera style, emotional arc, and pacing.
4. Define visual direction: brand colors, typography, layout style, and transition language.
5. Break the story into scenes with duration, on-screen text, motion, and transitions.
6. Build layered motion graphics, not static slides.
7. Install dependencies and fix scripts to use `npx remotion`.
8. Start Remotion Studio and expose the preview URL for review.
9. Iterate in source while Studio hot-reloads.
10. Render only when the user explicitly asks to export.

## Project Setup

Use the helper when starting a new project:

```bash
bash <path-to-video-generator>/scripts/remotion.sh init <project-name>
```

Create projects under the current workspace's `output/` directory:

```bash
mkdir -p output
cd output
npx --yes create-video@latest --blank --tailwind --no-skills <project-name>
cd <project-name>
npm install
npm install lucide-react
```

Keep `package.json` scripts in this shape:

```json
{
  "scripts": {
    "dev": "npx remotion studio",
    "build": "npx remotion bundle"
  }
}
```

Start Studio:

```bash
cd output/<project-name>
npm run dev
```

Expose the preview:

```bash
bash <path-to-video-generator>/scripts/tunnel.sh start 3000
```

Send the user the local Studio URL and the public tunnel URL when available. If Cloudflare is unavailable, state that the local preview is running and what dependency is missing for a public URL.

## Brand Scrape

When featuring a product, company, or website, run Firecrawl before designing:

```bash
bash <path-to-video-generator>/scripts/firecrawl.sh "https://example.com"
```

The script expects `FIRECRAWL_API_KEY` in the shell environment or a `.env` file in the current workspace. Use returned brand name, tagline, headline, description, features, logo, favicon, primary colors, CTA text, social links, screenshot, and OG image as design inputs.

Download useful assets into the Remotion project:

```bash
mkdir -p public/images/brand
curl -L "<logo-or-favicon-url>" -o public/images/brand/logo
curl -L "<og-image-url>" -o public/images/brand/og-image.png
curl -L "<screenshot-url>" -o public/images/brand/screenshot.png
```

If Firecrawl cannot run because the key is missing, tell the user and proceed only with assets and copy that can be obtained from provided materials or public pages.

## Motion Direction

Avoid slideshow patterns:

- Fading to black between scenes.
- Centered text on solid backgrounds as the dominant format.
- Reusing one transition everywhere.
- Static screens and linear robotic motion.
- Preset-looking slide-left, slide-right, cross-dissolve, or fade-blur transitions.
- Emoji icons. Use Lucide React icons.

Pursue motion graphics:

- Overlapping transitions where the next scene begins before the current scene fully exits.
- Layered background, midground, and foreground compositions.
- Spring physics and varied timing.
- Persistent elements that move across scenes.
- Custom transitions such as morphs, wipes, zoom-throughs, clip-path reveals, perspective flips, and panel unfolds.
- Short on-screen text that works without pausing.

## Scene Architecture

Use scene-based architecture with varied durations:

```tsx
const SCENE_DURATIONS = {
  intro: 90,
  problem: 120,
  solution: 105,
  features: 150,
  cta: 90,
};
```

Place persistent visual layers outside `Sequence` blocks:

```tsx
<AbsoluteFill>
  <AnimatedBackground frame={frame} />
  <Sequence from={0} durationInFrames={90}>
    <IntroScene />
  </Sequence>
  <Sequence from={80} durationInFrames={120}>
    <ProblemScene />
  </Sequence>
</AbsoluteFill>
```

For detailed Remotion patterns, read `references/composition-patterns.md`. For reusable component examples, read `references/components.md`.

## Visual Rules

- Use brand colors from the scrape as the primary palette.
- Avoid purple or indigo gradients unless the brand uses them or the user requests them.
- Prefer one display font and one body font.
- Use massive headlines only for hero moments; keep functional labels compact.
- Use asymmetric layouts, edge alignment, depth, and whitespace intentionally.
- Use Lucide React for icons.
- Keep all text short enough to read at video speed.

## Quality Checks

Before sending a preview, inspect the running Studio or render a still:

```bash
bash <path-to-video-generator>/scripts/remotion.sh still output/<project-name> <CompositionName> out/still.png --frame 45
```

Check:

- Mute test: the story works visually without sound.
- Squint test: hierarchy remains obvious.
- Timing test: motion feels natural.
- Consistency test: similar elements move similarly.
- Slideshow test: it does not look like a PowerPoint deck.
- Loop test: if intended to loop, the end returns smoothly to the start.

## Rendering

Render only when the user explicitly asks to export:

```bash
cd output/<project-name>
npx remotion render <CompositionName> out/video.mp4
```

After rendering, confirm the output file path and any render issues.
