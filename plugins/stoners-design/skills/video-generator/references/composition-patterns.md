# Remotion Composition Patterns

## Project Structure

```text
my-video/
├── src/
│   ├── index.ts
│   ├── Root.tsx
│   └── MyVideo/
│       ├── index.tsx
│       └── styles.ts
├── public/
├── remotion.config.ts
├── package.json
└── tsconfig.json
```

## Basic Composition

```tsx
import { Composition } from "remotion";
import { MyVideo } from "./MyVideo";

export const RemotionRoot = () => (
  <Composition
    id="MyVideo"
    component={MyVideo}
    durationInFrames={300}
    fps={30}
    width={1920}
    height={1080}
    defaultProps={{ title: "Hello World" }}
  />
);
```

## Common Aspect Ratios

- YouTube landscape: `1920x1080` or `1280x720`.
- Reels, TikTok, Shorts: `1080x1920`.
- Instagram feed: `1080x1350`.
- Square: `1080x1080`.

## Key APIs

```tsx
import {
  AbsoluteFill,
  Audio,
  Img,
  Sequence,
  Video,
  continueRender,
  delayRender,
  interpolate,
  spring,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
```

## Animation

```tsx
import {
  AbsoluteFill,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";

export const FadeInText: React.FC<{ text: string }> = ({ text }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const opacity = interpolate(frame, [0, 30], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const scale = spring({ frame, fps, config: { damping: 200 } });

  return (
    <AbsoluteFill className="items-center justify-center bg-black">
      <h1 style={{ opacity, transform: `scale(${scale})` }} className="text-white text-7xl font-bold">
        {text}
      </h1>
    </AbsoluteFill>
  );
};
```

## Sequences With Overlap

```tsx
<AbsoluteFill>
  <Sequence from={0} durationInFrames={100}>
    <Scene1 />
  </Sequence>
  <Sequence from={80} durationInFrames={100}>
    <Scene2 />
  </Sequence>
</AbsoluteFill>
```

## Input Props

Pass dynamic data through `defaultProps` or `--props`:

```tsx
export const MyVideo: React.FC<{ title: string; items: string[] }> = ({
  title,
  items,
}) => {
  return <div>{title}</div>;
};
```

```bash
npx remotion render MyVideo --props='{"title":"Demo","items":["a","b"]}'
```

## Audio

```tsx
import { Audio, Sequence, staticFile } from "remotion";

<Sequence from={0}>
  <Audio src={staticFile("audio/bg-music.mp3")} volume={0.5} />
</Sequence>
```

## Fetching Data

Use `delayRender` when render output depends on async data:

```tsx
const [handle] = useState(() => delayRender());

useEffect(() => {
  fetch("https://api.example.com/data")
    .then((response) => response.json())
    .then((data) => {
      setData(data);
      continueRender(handle);
    });
}, [handle]);
```

## Timing Reference

```tsx
const timing = {
  micro: "0.1-0.2s",
  snappy: "0.2-0.4s",
  standard: "0.5-0.8s",
  dramatic: "1.0-1.5s",
};

const springs = {
  snappy: { stiffness: 400, damping: 30 },
  bouncy: { stiffness: 300, damping: 15 },
  smooth: { stiffness: 120, damping: 25 },
};
```
