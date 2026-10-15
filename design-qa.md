# Design QA — Burgas Logistics

final result: passed

No actionable P0/P1/P2 findings remain in the reviewed prototype scope.

## Sources, state and evidence

The selected visual direction is design/prototype-3.jpg (946 × 1663). The user subsequently requested the fuller structure of https://cargov.ru/. The expanded homepage intentionally exceeds the original short mockup: twelve main sections, a partner strip and footer. Full-page height is not a fidelity target for this extension.

- design/hero-form-comparison.jpg and design/comparison-final.jpg show the selected source and implementation together, using the same x0–946/y0–760 region at the same scale. Empty form, closed menus/dialogs, no focus or hover.
- Full structure reference: /workspace/reference-captures/cargov-desktop-full.png (1440 × 7579). Expanded implementation: qa/screenshots/desktop-1440-final.png (1440 × 8584). qa/screenshots/structure-comparison.jpg places both full captures together with identical scaling for section-order comparison; it is not a pixel-clone comparison.
- design/implementation-desktop.jpg and design/implementation-mobile.jpg are the current full-page browser captures at 1440 and 390 CSS px respectively.
- Focused inspection used actual capture crops qa/screenshots/inspect-desktop-*.jpg and inspect-mobile-*.jpg: services/routes, cargo/process, benefits/partners/reviews, guides/FAQ, office, bottom form and footer. These local QA files are ignored by Git.
- Browser: installed Chromium through Playwright. Local HTTP development page renders at http://terminal.local:4173/ with local-only proxy bypass. The Sites preview CLI/cloud-browser connector is unavailable; verification used the cloud machine's actual Chromium.
- qa/verification-results.json records 48 passed, 0 failed, no browser console/page errors, no form POSTs and no external-resource requests.

## Structure and intentional adaptations

Hero → company/figures → four services → route regions/map → six cargo categories → process → six benefits → illustrative partners → testimonials → three logistics guides → six FAQ items → Burgas office → bottom enquiry → footer.

The navy/lime hero and white quote card preserve option 3. Additional sections use its typography, spacing, violet, navy, lime and lavender palette. Guide articles fill the reference's news/editorial role without fabricating dated company events. Mobile stacks columns and services, keeps the map behind readable content, and uses a scrollable testimonial track. Added Cargo navigation intentionally replaces the compact header location label at intermediate widths; Burgas remains explicit in the hero and office section.

## Findings and corrections

- [P2, resolved] Five footer links made the new single-column footer overflow at 320 px. Allowed wrapping and set the grid track to minmax(0,1fr). Final responsive checks pass at all seven widths.
- [P2, resolved in initial implementation] Heading overflow, quote-card proportions, lightweight display type, panorama/text overlap and external favicon request were fixed before this extension and rechecked.
- Viewport changes initially yielded stale media-query measurements in the test harness. The harness now waits for layout/render settlement before measuring each width; assertions were retained.
- Focused visual inspection confirms clear text over both map and office panorama; service/cargo cards, review track, FAQ and both forms remain legible and aligned on desktop/mobile.

## Required fidelity surfaces

- Fonts/typography: bundled Inter variable, display weight 850, body/UI 400–650. The hero comparison retains headline hierarchy, wrapping and form density. Narrow headings reflow without clipping.
- Spacing/layout: rounded navy hero, two-column form/photo composition and consistent control rhythm retained; new alternating white/navy/violet sections form the requested longer homepage. Mobile uses one-column content, vertical process and wrapping footer links.
- Colors/tokens: navy #080c48, violet #5130ff, lime #e1ff67, lavender surfaces and muted text. Focus, selected tabs and invalid-field states are visible.
- Image quality/assets: generated port photo, Burgas panorama, hero background, transparent brand logo, Europe map and fictional partner marks are local and embedded in the build. All were inspected. UI icon paths come from Phosphor; no handcrafted illustration substitutes or unresolved placeholder images.
- Copy/content: English; confirmed office location Burgas, Bulgaria; provisional company name. The user explicitly requested fictional figures, routes, partners and testimonials. They are labelled illustrative on-page and maintained in src/content.js. Review/privacy copy correctly explains that enquiries remain local and no message is sent.

## Functional and environment checks

Frozen dependency installation previously passed; dependency declarations and lockfile are unchanged in this extension. npm test rebuilt the current page and passed all 48 checks: image/font rendering; menus and Escape/focus restoration; invalid/valid form fields; review and TXT download; independent bottom-form state; service/contact/privacy/terms dialogs; region tabs and keyboard navigation; route/cargo prefilling; articles; FAQ; carousel; unique IDs; widths 320/390/768/820/946/1024/1440; no console errors, outgoing form requests or external resources.

The production HTML was rendered with Playwright page.setContent in an offline browser context, including interactions and download. Direct file-scheme navigation is blocked by this machine's browser administrative policy, so direct file:// opening here is not claimed as verified. The development page was separately rendered over HTTP and its quote validation checked.

The build embeds images, font, scripts, styles, favicon and third-party license notices. preview/burgas-logistics.zip was refreshed; archive integrity passes and its index.html bytes exactly match the tested build.

## Implementation checklist

- [x] Inspect selected direction and full reference structure.
- [x] Generate, inspect and place all visual assets.
- [x] Extend responsive homepage and implement useful interactions.
- [x] Inspect full and focused comparisons; fix actionable findings.
- [x] Pass browser scenarios and standalone-build checks.
- [x] Refresh screenshots, result record and self-contained download.

## Remaining scope

P3 polish could refine hero baseline/image-crop alignment further. This is a frontend prototype. Before public business use, replace all demo claims with confirmed facts and approve company name, actual services/contacts/legal text. Enquiry delivery and public hosting are not configured. No newly restored cloud task was tested.

## Full-page comparison candidates

Three additional full-page candidates now extend the selected original visual
family without replacing the default site. See
[the comparison review](design/full-page-variants/design-qa.md), which passed visual
review and 48 browser checks per candidate (144 total). The comparison archive and
six full desktop/mobile screenshots are linked from
[the candidate overview](design/full-page-variants/README.md).
