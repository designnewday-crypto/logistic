---
name: Burgas Logistics
description: Dark-blue logistics identity with port photography and direct shipment controls.
colors:
  navy: "#0b1736"
  deep: "#07112b"
  lime: "#e1ff67"
  muted: "#40516b"
  surface: "#eef3f6"
  surface-strong: "#e1eaf0"
  on-dark: "#d7e1ee"
  white: "#fff"
  error: "#a01d31"
typography:
  display:
    fontFamily: '"Inter Variable", sans-serif'
    fontSize: "clamp(40px, 6.4vw, 92px)"
    fontWeight: 850
    lineHeight: 1.03
    letterSpacing: "-0.04em"
  headline:
    fontFamily: '"Inter Variable", sans-serif'
    fontSize: "clamp(34px, 4.4vw, 60px)"
    fontWeight: 800
    lineHeight: 1.07
    letterSpacing: "-0.04em"
  title:
    fontFamily: '"Inter Variable", sans-serif'
    fontSize: "24px"
    fontWeight: 750
    lineHeight: 1.25
    letterSpacing: "-0.03em"
  body:
    fontFamily: '"Inter Variable", sans-serif'
    fontSize: "16px"
    lineHeight: 1.6
  label:
    fontFamily: '"Inter Variable", sans-serif'
    fontSize: "13px"
    fontWeight: 650
    lineHeight: 1.5
rounded:
  square: "0"
  control: "4px"
spacing:
  control-gap: "14px"
  content-gap: "24px"
  column-gap: "70px"
  page: "clamp(24px, 4.2vw, 60px)"
  section: "clamp(76px, 9vw, 130px)"
components:
  button-lime:
    backgroundColor: "{colors.lime}"
    textColor: "{colors.navy}"
    rounded: "{rounded.control}"
    padding: "14px 24px"
  button-navy:
    backgroundColor: "{colors.navy}"
    textColor: "{colors.white}"
    rounded: "{rounded.control}"
    padding: "14px 24px"
  button-quiet:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.navy}"
    rounded: "{rounded.control}"
    padding: "11px 18px"
  input:
    backgroundColor: "{colors.white}"
    textColor: "{colors.navy}"
    rounded: "{rounded.control}"
    padding: "0 14px"
    height: "52px"
  service-card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.navy}"
    rounded: "{rounded.square}"
    padding: "24px 28px"
  region-tab-selected:
    backgroundColor: "{colors.lime}"
    textColor: "{colors.navy}"
    rounded: "{rounded.control}"
    padding: "12px 18px"
---

# Design System: Burgas Logistics

## Overview

**Creative North Star: "Port departure board"**

This is a descriptive reading of the implemented interface, grounded in
`src/style.css`, `src/sections.js` and `src/main.js`. It is not a new brand proposal.
Dark blue, lime, heavy Inter and port photography retain the user-selected identity.
Broad type, clear origin/destination pairs and explicit action labels make shipment
information easy to scan.

The page alternates open white content with dark route/review surfaces and a lime
enquiry close. Photographs carry the logistics setting; typography and spacing
carry the hierarchy. `PRODUCT.md` records the durable constraints; homepage-specific
composition belongs to `.impeccable/surfaces/home.md`.

**Key Characteristics:**
- Heavy, tightly spaced Inter headings.
- Flat surfaces, square content panels and subtly rounded controls.
- Port photography and an unboxed route board.
- Clear English actions and visibly labelled demonstration content.

## Colors

### Primary

**Navy** carries headings, body text, route and review surfaces. **Deep** anchors the
hero and footer. **Lime** supplies the selected identity's emphatic heading fragment,
primary controls, selected route tabs, route icons and final enquiry background.
Its use is contextual; the implementation does not confine it to the hero.
Sidecar tonal ramps are synthesized display metadata, not additional shipped CSS tokens.

### Neutral

**White** forms the canvas, enquiry card and fields. **Surface** and
**Surface Strong** distinguish quiet panels and their hover state. **Muted** supports
secondary copy on light surfaces; **On Dark** supports copy on navy surfaces.
**Error** is reserved for field validation; bottom-form errors use a darker local
variant for the lime background. Canonical values are in the frontmatter.

**The Surface Contrast Rule.** Use the light-surface and dark-surface text pairings
already present; retain explicit field errors and keyboard focus indicators.

## Typography

Display and body share locally bundled **Inter Variable**, with a sans-serif fallback.
The selected identity deliberately uses substantial display weight. A generic-font
detector warning does not authorize replacing it.

The frontmatter records the recurring desktop roles. Hero display uses the display
role, major section headings the headline role, and service/cargo/guide titles the
title role. Body copy generally uses the body role; longer passages vary between
1.6 and 1.7 line height. Field labels and secondary notes use the label-size step,
with weight varying by purpose. Large prose uses the title-size step at normal or
medium weight. Testimonials have their own responsive quotation size.

Below the mobile-navigation breakpoint, display becomes
`clamp(40px, 8.7vw, 68px)` and headline becomes `clamp(34px, 5.7vw, 46px)`.
The footer wordmark is a separate oversized typographic gesture, not a body-text role.

**The One Family Rule.** Preserve Inter's heavy display and restrained body hierarchy
when extending this selected identity.

## Layout

Content containers stop at 1320px; full-width page panels stop at 1600px. The header
stops at 1440px. Page gutters and section spacing use the fluid frontmatter values.
Many desktop sections use unequal two-column grids with the shared column gap.
Services and guides stack readable actions; cargo and benefits use two-column groups.

At 900px and below, the header switches to an expandable menu and main two-column
sections become one column. Gutters become 28px, section spacing 76px. At 600px,
cargo, benefits and the bottom form also become single-column. At 360px, gutters
become 24px and paired hero fields stack. The 901–1190px range tightens gaps and
header content; above 1600px the hero receives additional internal padding.

## Elevation & Depth

The system is flat at rest: photographs, solid surface changes and whitespace create
depth. Content cards do not carry shadows. The floating desktop navigation menu uses
`0 18px 45px #07112b22`; that shadow disappears when the menu becomes inline on mobile.
The native dialog uses a dark translucent backdrop rather than a decorative halo.

Control feedback uses the shared easing curve with 200–220ms transitions. Optional
section arrivals last 700ms and the port photograph drifts subtly over 20s. Reduced
motion suppresses those animations and smooth scrolling.

## Shapes

Content panels, photographs, route rows and the page silhouette are square. Controls,
fields, the white enquiry card and dialog have subtle control-radius corners. Input
borders establish editable regions; the route board remains transparent over the
map. No universal prohibition on borders is inferred from the current page.

## Components

### Buttons

Lime buttons are emphatic actions, navy buttons act on lime or white, and quiet
surface buttons support header actions. Default buttons are at least 52px tall;
compact header buttons are at least 44px tall. Hover shifts a button upward by 2px;
active returns it and scales to 0.98. Focus uses a visible three-pixel outline, with
lime focus treatment on dark route/review/footer surfaces.

### Cards / Containers

Service and guide actions use quiet square panels, readable titles and explicit
text actions. Hover deepens the surface. Cargo and benefits are open text groups.
Testimonials present one large quotation per carousel position. These are distinct
patterns; extending the page should not turn every group into the same card.

### Inputs / Fields

Fields are white, 52px tall, bordered and subtly rounded. Labels remain visible.
Focus adds an offset three-pixel outline; invalid fields add a two-pixel error border
and explanatory text. Do not remove the local-review/download disclosure when
reusing the two enquiry forms.

### Navigation

Desktop links are compact, medium-weight and touch-sized. Dropdowns float on desktop
and flow within the expandable navigation on mobile. The active route region uses a
lime tab. Tabs have keyboard navigation and `aria-selected` state.

### Route Board

Origin/destination buttons are transparent rows with the same text hierarchy across
regions. Hover creates a darker surface. Selection prefills the enquiry rather than
starting a booking. On narrow screens the final decorative arrow disappears while
the origin and destination remain visible.

### FAQ and Dialogs

FAQ uses native disclosure semantics, a square quiet surface and a rotating plus
icon. Dialogs use a native modal surface, accessible heading and close action.

## Do's and Don'ts

### Do:
- **Do** preserve the selected dark-blue/lime identity and heavy Inter hierarchy.
- **Do** keep action labels, keyboard focus and field labels visible.
- **Do** reuse the existing flat surface and responsive spacing relationships.
- **Do** retain demo labels and the local-only enquiry disclosure.

### Don't:
- **Don't** replace the selected identity as a side effect of a detector warning.
- **Don't** turn every list, route row and paragraph group into an elevated card.
- **Don't** present generated imagery or fictional figures and reviews as verified proof.

Not canonized: contextual dialog-note labels are implementation copy, not a reusable
ornamental eyebrow typography system. No defect is legitimized by adding a token.
