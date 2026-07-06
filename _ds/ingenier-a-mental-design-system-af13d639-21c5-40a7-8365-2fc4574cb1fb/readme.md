# Ingeniería Mental — Design System

Design system for **Ingeniería Mental**, a bioenergetic wellness brand by **Sebastián Tarta**. The brand has **two real revenue lines**, and the system serves both:

1. **Cell Oscillator** — a high-ticket bioenergetic wellness **device** (PEMF, biophotons, programmable frequencies). This is the **flagship product**. Needs a strong product/sales page: testimonials, transparent price range, FAQ (use / safety / buying), and a qualification questionnaire.
2. **Online courses** — sold as products in their own right (3 right now: Electrocultura, Detox energético, Bioresonancia). Courses also act as a **funnel toward the device**. Needs a catalog, individual course pages, and checkout.

**Final site language is Spanish** — all sample copy here is in Spanish. The science story is central: *"tu cuerpo emite luz"* (biophotons) — hence dark surfaces with **light & energy** as accents.

## Sources provided
- Brand spec + direction (dark premium, colors, type, tone) supplied directly by the client.
- `uploads/IM-Logo-1-1.webp` — primary logo (stylized brain held by two cupped hands → care + mind). Copied to `assets/logo-mark.webp`.
- No codebase or Figma was attached; components and UI kits are built from the brand spec.

---

## Content fundamentals
- **Language:** Spanish (Spain), informal **"tú"** ("Aprende a sintonizar **tu** energía", "¿Es para **ti**?").
- **Tone — "mentor riguroso":** serious but warm. Sits deliberately **between cold-clinical** (NovoTHOR) **and quantum-spiritual** (AmpCoil). It is confident and evidence-minded without being sterile. Signature moves: name the science plainly ("PEMF", "biofotones", "frecuencias"), then reassure ("parámetros que puedes medir", "nada de promesas mágicas", "no sustituye al consejo médico").
- **What it avoids:** new-age clichés, mystical hype, "energía cósmica", miracle claims. Also avoids cold corporate/medical detachment.
- **Casing:** sentence case for headings and buttons. UPPERCASE only for short eyebrow/overline labels with wide tracking ("BIOENERGÉTICA CON BASE CIENTÍFICA").
- **CTAs:** verb-first and concrete — "Conoce el dispositivo", "Ver los cursos", "¿Es para mí?", "Hacer el cuestionario", "Inscribirme ahora".
- **Numbers:** Spanish formatting — decimal comma ("4,9/5"), "h" for hours, "€" before amount ("€1.890 – €2.640"), thousands with a dot.
- **Emoji:** used *sparingly* and only in friendly logged-in surfaces (a 👋 greeting, a 🔥 streak). Never in marketing or sales copy.

---

## Visual foundations — DARK PREMIUM
The marketing strategy mandates *"tonos oscuros con acentos de luz y energía"*. Dark is the default; a **light reading scope** is layered in for long-form reading.

- **Backgrounds (dark base):** page `#0A0D12`; raised surfaces `#12161D` (surface-1) and `#171C24` (surface-2, cards); inset/hover `#1E242E`. Mostly flat dark with soft radial **energy glows** (teal, low-opacity) behind hero/feature areas — never busy gradients.
- **Text on dark:** primary `#F7F9FB`, body `#C2CAD2` (the minimum for comfortable contrast), muted `#9AA2AB`.
- **Energy = teal:** base `#147C8E`; bright `#5FC6D6` and glow `#74D5E4` for accents, links, rings and highlights on dark.
- **Warm light = amber:** CTA gradient `#E2842F → #F4AC62`; accent text `#F4A862`. **Used sparingly** — primary CTAs and key highlights only. Warm, never neon.
- **No purples/violets anywhere.** No cosmic/sacred-geometry/mandala imagery. No cold clinical sterility.
- **Borders:** white at low alpha on dark — `rgba(255,255,255,0.07 / 0.12 / 0.28)` (soft / default / strong). Reading scope uses warm hairlines (`#E7E1D7`).
- **Typography:** **Fraunces** (elegant serif, weight 600, occasional italic for emphasis) for all headings/display; **Inter** (400/500/600) for body, UI and long-form reading. Two families only. Display uses tight tracking (`-0.02em`) and tight leading (1.08); eyebrows use wide tracking (`0.16em`) uppercase in Inter.
- **Corner radius:** 12px buttons/inputs, 16px cards, 24px hero/feature panels, pill for badges/tags/progress.
- **Depth:** on dark, depth comes from deep shadows (`rgba(0,0,0,0.35–0.55)`) **plus colored glows** — `--glow-teal`, `--glow-amber`, `--glow-soft-teal`. Cards rest on `shadow-sm`; hover lifts `-2px`, brightens the border to `--border-strong`, and deepens the shadow.
- **Buttons:** primary = amber gradient + glow (dark ink text); secondary = teal outline; soft = teal tint; ghost = text. Hover lifts `-2px`; press scales to `0.98`.
- **Cards:** dark `surface-2`, 1px white-alpha border, 16px radius, soft shadow; hover lift + glow.
- **Imagery vibe:** dark, teal-energy-leaning with warm amber light points. Optimistic but serious. Product shown as a glowing object inside concentric energy rings. (No stock photos shipped; thumbnails fall back to teal/amber gradient blocks.)

### Functional hybrid — light reading scope
Marketing / sales / brand / device pages are **dark**. For long-reading surfaces (course **player**, articles, lessons) apply `data-surface="reading"` to the region: it flips the semantic tokens to a **warm light palette** (paper `#FBF9F5`, card white, ink `#1A1F26`, body `#3C444E`) so reading isn't tiring. The lesson video stays dark inside the light reading page. Define both scopes — see `tokens/colors.css`.

---

## Motion guidelines
Premium and subtle. Easing `cubic-bezier(.22,1,.36,1)`; UI durations **150–250ms**. Nothing moves aggressively or all the time.
- **Fade-up on reveal** (`im-fade-up`) — content rises 16px + fades in. Used for hero copy, questionnaire steps, FAQ answers.
- **Slow pulsing energy glow** (`im-pulse-glow`, ~3s) — the teal halo behind the logo/device gently breathes.
- **Expanding/fading energy rings** (`im-energy-ring`, ~4s, staggered) — concentric rings radiate out from the device and fade.
- **Floating light particles** (`im-float`, ~3.4s) — a few amber points drift slowly.
- **Gentle hover lift** — `translateY(-2px)` + soft glow on buttons and cards.
- **No bounce, no jumping carousels, no constant motion.** All keyframes respect `prefers-reduced-motion: reduce` (defined in `tokens/spacing.css`).

---

## Iconography
- **No bundled icon set was provided.** Components that need a glyph (Checkbox tick, Select chevron) draw a single inline rounded-stroke `<svg>` (~2.5 weight). For broader needs use a **rounded line-icon set (e.g. Lucide, 2px stroke)** from CDN to match — flag any substitution.
- A few **unicode glyphs** (▶ ★ ⚙ ✓ → + 🔥 👋) are lightweight placeholders in the UI kits where production would use Lucide. Emoji only in friendly logged-in surfaces.
- **Logo:** `assets/logo-mark.webp` — works on dark base, dark surfaces, and the light reading paper. Do not recolor it.

---

## Index / manifest
**Root**
- `styles.css` — global entry (consumers link this). `@import`s the token files only.
- `tokens/` — `colors.css` (dark scope + `[data-surface="reading"]` light scope), `typography.css` (Fraunces + Inter), `spacing.css` (radius/shadow/glow/motion + keyframes), `fonts.css` (Google Fonts).
- `assets/logo-mark.webp` — primary logo. `readme.md` (this) · `SKILL.md`.

**Components** (`window.IngenierAMentalDesignSystem_af13d6.*`)
- `components/buttons/` — `Button`, `IconButton`
- `components/forms/` — `Input`, `Select`, `Checkbox`, `Switch`
- `components/display/` — `Card`, `Badge`, `Tag`, `Avatar`
- `components/content/` — `CourseCard`

**UI kits**
- `ui_kits/marketing/` — dark marketing site: **Home**, **Dispositivo (Cell Oscillator product page — how it works, testimonials, price, questionnaire, FAQ)**, Catálogo, Detalle de curso (+ Header/Footer).
- `ui_kits/student/` — student area: Panel (dashboard, dark) + Reproductor de curso (**light reading scope**) (+ Sidebar).

**Specimen cards** (Design System tab): Colors (4), Type (3), Spacing (2), Motion (1), Brand (2), Components (5), Marketing, Área de estudiante.

> Fonts (Fraunces + Inter) are loaded from Google Fonts — licensed binaries pending from the client.
