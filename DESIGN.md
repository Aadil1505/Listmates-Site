# Design

## Theme & Mood

A cream-paper morning. Warm, hushed, intimate — the inside cover of a journal the two of you share. Light by default; dark mode is a deliberate counterpart, deep and inky like the iOS app's true black surface. The site should feel made of paper and glass, not pixels.

Scene sentence: a couple on a Sunday morning, laptop on the kitchen counter, soft window light, deciding what to add to the holiday list. That's the ambient temperature — quiet, considered, no rush.

## Color

OKLCH-defined, tinted toward the brand rose. **Strategy: Restrained.** A warm cream surface carries 80%+ of the page. Rose appears as a single accent — never bars, never gradients-for-decoration — and reaches saturation only at moments that matter (CTA, claim states, subtle highlights). One Cron-esque ambient warm-rose glow lives in the hero and one section break; nowhere else.

### Light tokens (default)

| Token | OKLCH | Hex (approx) | Use |
|---|---|---|---|
| `--bg` | `oklch(97% 0.005 25)` | `#F6F2F1` | Page background — warm cream, tinted to the brand hue |
| `--surface` | `oklch(99% 0.003 25)` | `#FCFAF9` | Elevated cards, sheets |
| `--surface-sunken` | `oklch(95% 0.006 25)` | `#EFEAE9` | Insets, code-like blocks, quiet rests |
| `--text` | `oklch(20% 0.01 25)` | `#1F1B1A` | Primary text — near-black, warm-tinted |
| `--text-muted` | `oklch(50% 0.008 25)` | `#7C7470` | Secondary text |
| `--text-subtle` | `oklch(65% 0.006 25)` | `#A39B97` | Captions, eyebrows |
| `--border` | `oklch(90% 0.005 25)` | `#E2DCDA` | Hairlines |
| `--accent` | `oklch(64% 0.18 18)` | `#E8536A` | Brand rose — CTAs, links, focus |
| `--accent-hover` | `oklch(58% 0.19 18)` | `#D63E58` | Hover state |
| `--accent-soft` | `oklch(94% 0.04 18)` | `#FBE4E7` | Tinted backgrounds for claim states, badges |
| `--success` | `oklch(70% 0.16 145)` | `#34C759` | Reserved for matching iOS green |

### Dark tokens

| Token | OKLCH | Hex (approx) | Use |
|---|---|---|---|
| `--bg` | `oklch(14% 0.005 25)` | `#0F0D0D` | Inky black, warm-tinted (matches app) |
| `--surface` | `oklch(18% 0.006 25)` | `#1B1818` | Cards |
| `--surface-sunken` | `oklch(11% 0.005 25)` | `#0A0908` | Below background |
| `--text` | `oklch(96% 0.005 25)` | `#F5F1F0` | Primary |
| `--text-muted` | `oklch(70% 0.008 25)` | `#B0A8A4` | Secondary |
| `--text-subtle` | `oklch(50% 0.006 25)` | `#7A726E` | Captions |
| `--border` | `oklch(25% 0.006 25)` | `#2C2826` | Hairlines |
| `--accent` | `oklch(70% 0.17 18)` | `#F0708C` | Slightly lifted for dark legibility |
| `--accent-hover` | `oklch(75% 0.16 18)` | `#F58A9F` | Hover |
| `--accent-soft` | `oklch(28% 0.06 18)` | `#3A2225` | Tinted backgrounds |

### Ambient glow (used sparingly)

A radial wash, `oklch(85% 0.08 18)` at ~12% opacity, fading to transparent over ~700px. Behind hero. One repeat behind the "claim" section. Disabled in `prefers-reduced-transparency`.

## Typography

iOS-native feel without iOS-only fonts. **Inter** for body and UI, **Instrument Serif** for occasional editorial display moments (a single italic word or phrase per section, not every headline). System fallback chain favors `-apple-system` and SF Pro Rounded so on Mac/iOS it renders identically to the app.

```css
--font-sans: "Inter", -apple-system, "SF Pro Rounded", "Segoe UI", sans-serif;
--font-serif: "Instrument Serif", "New York", Georgia, serif;
```

### Scale (1.333 ratio, generous)

| Step | Size | Line | Weight | Use |
|---|---|---|---|---|
| display | 72 / 88px | 1.02 | 600 | Hero headline |
| h1 | 48 / 56px | 1.05 | 600 | Section opener |
| h2 | 32 / 40px | 1.15 | 600 | Sub-section |
| h3 | 22 / 28px | 1.3 | 600 | Card / feature title |
| body-lg | 19px | 1.55 | 400 | Lead paragraphs |
| body | 17px | 1.6 | 400 | Default copy (matches iOS body) |
| small | 14px | 1.5 | 500 | Captions, metadata |
| eyebrow | 12px | 1.0 | 600, tracking 0.08em, uppercase | Section labels |

Display headline uses `-0.03em` tracking. Body uses `-0.005em`. Serif italic is rendered at the same size as the surrounding text but with optical-size adjustment via `font-feature-settings: "ss01"` if available.

## Layout

- Container: 1180px max, 32px gutter on desktop, 20px on mobile.
- Vertical rhythm: section padding `clamp(96px, 14vw, 200px)` top/bottom. Hero is taller.
- Generous, asymmetric spacing within sections — never an even grid of identical cards.
- Section breaks are hairlines (`--border`) with ~2px-wide dot in `--accent` centered, not full dividers.
- Mobile: collapse to single column; preserve all type scale (don't shrink display to 32px — it should still feel cinematic).

## Elevation & Surfaces

- **No drop shadows.** Use subtle borders, surface tone shifts, and a single soft inner glow on focused elements.
- Cards: `--surface` background, `1px solid --border`, `radius: 20px`. No nesting.
- Phone mockups: real iPhone frame at `radius: 56px` (matches device), `1px solid --border`, no drop shadow — sits on a pale rose ambient glow.

## Components (web)

| Component | Spec |
|---|---|
| Button (primary) | `--accent` bg, `--surface` text, `radius: 999px`, `padding: 14px 24px`, weight 600, hover lifts to `--accent-hover` over 180ms ease-out-quart |
| Button (ghost) | Transparent, `1px solid --border`, hover fills to `--surface-sunken` |
| App Store badge | Black pill, native asset, 48px tall on desktop, 56px on mobile |
| Eyebrow label | `--text-subtle`, eyebrow type style, with leading 6px rose dot |
| Feature block | Icon (28px, stroke 1.5, `--text` color) → h3 → body. Stacked. No card. |
| Phone frame | Real device PNG/SVG with composited screenshot, no chrome, sits in ambient glow |

## Motion

- Entrance: `opacity: 0 → 1` and `translateY(16px → 0)` over 600ms `cubic-bezier(0.22, 1, 0.36, 1)` (ease-out-quint) on viewport intersection. Stagger 60ms.
- Hero device: subtle parallax — `translateY` mapped to scroll, max ±24px. Disabled at `prefers-reduced-motion`.
- Hover: 180ms ease-out-quart on color and transform only. Never animate width/height/padding.
- Claim demo: scripted micro-interaction in hero — an item card receives a "claimed" badge with a soft rose pulse, then settles. Plays once per session.

## Anti-patterns (project-specific)

- No gradient text. No glass cards. No side-stripe borders.
- No "trusted by" logo wall. No testimonials carousel.
- No identical 3-column feature grid. Vary block sizes.
- No emoji used as icons in marketing copy.
- No stock couple photography. If we show people, it's their hands, the app screen, the device — not faces.
- No dark mode toggle in the nav (we'll respect `prefers-color-scheme` automatically).
