# Webber Electro Corp — Brand Guidelines

Extracted from `Webber_brand_guideline.pdf`. This is the source of truth for
colors, typography, buttons, icons and imagery direction used across the
website. Implementation mapping (where each token lives in code) is noted
under each section.

## Logo

- Primary lockup: mark (three angled arrow strokes in a square) + "Webber"
  wordmark + "ELECTRO CORP" sub-lockup, set in white.
- Correct usage: logo in white/reversed form, placed on Uniform Blue,
  Aesthetic Blue, Teal, dark photography, or radial-glow blue backgrounds.
  Never placed directly on light/white backgrounds in the guideline's
  reference examples — always on a brand-color or dark tile.
- Implementation: `public/logos/webber-masthead.png`,
  `public/logos/webber-favicon-mark.png` (already in repo, used in
  `Header.tsx` / `Footer.tsx` / favicon config — no change needed).

## Color Palette

| Name            | Hex       | RGB              | Usage                                   |
| --------------- | --------- | ---------------- | ---------------------------------------- |
| Uniform Blue    | `#0F253F` | 15, 37, 63       | Darkest navy — body ink, deep surfaces  |
| Aesthetic Blue  | `#234F8F` | 35, 79, 143      | Primary brand blue — CTAs, links, accents |
| Spindle         | `#B3CDEB` | 179, 205, 235    | Light blue tint — soft backgrounds, tags |
| Anchor Gray     | `#54595F` | 84, 89, 96       | Secondary text / neutral gray            |
| Teal            | `#008080` | 0, 128, 128      | Secondary accent — hover state, storage/BESS domain, measured results |
| Full White      | `#FFFFFF` | 255, 255, 255    | Canvas / reversed text                   |
| Gradient        | `#215090` → `#0F253F` | — | Decorative panel gradient (hero/CTA tiles) |

Two additional colors were sampled directly from the button artwork (not
named as standalone swatches in the palette page, but used consistently
across every "click" and "disabled" button state):

| Role                     | Hex       |
| ------------------------ | --------- |
| Button pressed/click     | `#413E5F` |
| Button disabled          | `#9B9C9F` |

**Implementation:** `src/app/globals.css` `:root` — brand swatches are
defined as the source-of-truth custom properties (`--uniform-blue`,
`--aesthetic-blue`, `--spindle`, `--anchor-gray`, `--teal`,
`--pressed-indigo`, `--btn-disabled-gray`), and the pre-existing
`--blue-*` / `--grey-*` / `--ink*` / `--canvas*` scale used throughout every
component is re-derived from those swatches with `color-mix()` so the whole
site inherits the brand palette without touching each component file.

### Teal as the secondary color

**Project decision (2026-09-17), not extracted from the PDF.** The guideline
names Teal only as the button hover accent; it is used more widely on the site
as the brand's secondary color. To keep it a signal rather than decoration it
follows one rule — **Aesthetic Blue is primary and structural; Teal means one
of exactly two things:**

1. **The storage / BESS domain.** The BESS catalogue filter and its voltage
   sub-filters, the BESS chip on `ProductCard`, and the hero label on a BESS
   product's detail page. Automotive stays blue, so the two application
   families are told apart by color anywhere they sit side by side.
2. **A measured result or a live event.** The "after balancing" bars and the
   balancing-intervention markers in the technology charts, the pulse running
   the architecture spine, the footer electron, and the end of the CTA trace
   line — which terminates on a button whose own hover state is teal.

Everything else stays blue. Adding teal outside those two meanings dilutes it.

**Implementation:** `--teal-700` … `--teal-50` in `src/app/globals.css`
`:root`, derived from `--teal` with `color-mix()` exactly the way the blue
scale is derived from `--aesthetic-blue`. Exposed to Tailwind as
`text-teal-700` / `bg-teal-50` / `border-teal-300` etc., plus the
`.micro-label--teal` variant and `tone="teal"` on `TechnicalLabel`.

**Contrast:** `#008080` is 4.8:1 on white — AA for normal text, but with no
headroom at micro-label sizes, so `--teal-700` (6.1:1) is the step to use for
text. On Uniform Blue, raw teal is only 3.2:1, so `.band-dark` /
`.band-gradient` re-point the whole ramp lighter (~7:1) the same way they
re-point the blues to Spindle.

## Typography

- **Primary typeface (headings): Aguda, Black weight.** Aguda is a paid
  commercial display face from the Graviton foundry — it is not distributed
  on Google Fonts and no licensed files exist in this repo. Per project
  decision, headings use **Space Grotesk (700)** as a free, geometric
  substitute with a similar modular/display character.
- **Secondary typeface (body/UI): Roboto, Regular.** Loaded via
  `next/font/google`.
- The guideline specifies exactly these two typefaces — no third face.
  Technical/spec micro-labels (`.micro-label`, `.spec-value`, `.spec-tbc`,
  spec table headers) previously used IBM Plex Mono; they now use Roboto
  via `--font-mono`, keeping the uppercase + letter-spacing treatment for a
  technical feel without introducing a third font family.

**Implementation:** `src/app/layout.tsx` (font loaders: `Space_Grotesk`,
`Roboto`), `src/app/globals.css` (`--font-heading`, `--font-sans`,
`--font-mono` — aliased to Roboto — and the `.type-*` scale set to the
heading font at heavier weights).

## Buttons

Two variants, each with four states, sampled directly from the guideline's
button artwork:

### Primary (filled)

| State    | Fill      | Text      |
| -------- | --------- | --------- |
| Active   | `#234F8F` (Aesthetic Blue) | White |
| Hover    | `#008080` (Teal)           | White |
| Click    | `#413E5F` (pressed indigo) | White |
| Disabled | `#9B9C9F` (disabled gray)  | White |

### Secondary (outline)

| State    | Border / Text              | Fill  |
| -------- | --------------------------- | ----- |
| Active   | `#234F8F` (Aesthetic Blue)  | White |
| Hover    | `#008080` (Teal)            | White |
| Click    | `#413E5F` (pressed indigo)  | White |
| Disabled | `#9B9C9F` (disabled gray)   | White |

Shape: generously rounded rectangle (not a full pill) — roughly a quarter
of the button height. Implemented as `border-radius: 12px`.

**Implementation:** `src/app/globals.css` `.btn`, `.btn-primary`,
`.btn-secondary`.

## Icons

Thin outline (line-weight, not filled) icon style in Aesthetic Blue,
typically presented on a soft Spindle-tinted card background. Existing
inline SVG icons across the site should stay `stroke`-based at ~1.5–2px
weight, colored with `--aesthetic-blue` / `--grey-500`, consistent with this
style — no icon set swap was required since the codebase already uses thin
custom stroke icons.

## Imagery

EV-charging / mobility-tech photography with a cool blue color grade:
people using charging infrastructure, close-up battery/PCB macro shots
with a blue glow, and phone-in-hand payment/telematics moments. Existing
site imagery (`public/images/*`) already matches this direction — no
sourcing changes made as part of this pass.
