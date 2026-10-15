# Design QA — Burgas Logistics

final result: passed

No actionable P0/P1/P2 findings remain.

## Source, state and comparison evidence

- Selected option 3: design/prototype-3.jpg, 946 × 1663 px.
- Implementation reference viewport: 946 × 1663 CSS px, deviceScaleFactor 1. Full-page output is 946 × 1679 px.
- design/comparison-final.jpg places the actual source and implementation together at the same horizontal scale. No independent stretching or density scaling.
- design/hero-form-comparison.jpg compares the same x0–946/y0–760 regions together, at a readable scale, to inspect typography, form, brand, controls and image crop.
- design/implementation-desktop.jpg: 1440 px browser capture. design/implementation-mobile.jpg: 390 px browser capture.
- State: empty form; closed menus/dialogs; pointer away from controls; no keyboard focus. Interaction states were checked separately.
- Browser: installed Chromium through Playwright. The live development page was rendered at http://terminal.local:4173/ using local hostname resolution and local-only proxy bypass. Sites preview CLI/cloud-browser connector is unavailable; the actual cloud machine's Chromium was used.
- Results: qa/verification-results.json, produced by npm test: 32 passed, 0 failed, 0 console/page errors, 0 form POST requests, 0 external-resource requests.

## Comparison history

1. Initial: qa/screenshots/comparison-initial.jpg; implementation 946 × 1761.
   - [P2, resolved] Process/footer spacing added about 80 px. Reduced intermediate-width section/footer padding and restored concise process wording.
   - [P2, resolved] Quote card was too high and tall. Centred it vertically and reduced intermediate-width form gaps.
   - [P2, resolved] Text overflow at 320 and 820 px. Tuned narrow heading sizes and moved the single-column breakpoint to 900 px.
   - [P2, resolved] Missing favicon generated a 404. Inlined the generated brand image as the favicon.
2. Revised: qa/screenshots/comparison-revised.jpg and qa/screenshots/font-comparison.jpg.
   - [P2, resolved] Display type was optically lighter than the source. Compared Manrope 800 and Inter 850; selected locally hosted Inter 850 and adjusted wrapping.
   - [P2, resolved] Mobile panorama crossed service text. Confined the image to the section bottom and matched the surrounding sky tint.
   - The resulting 4–5 px heading overflow at 320/946/1024 px was removed by a final font-size adjustment.
3. Final: design/comparison-final.jpg, design/hero-form-comparison.jpg and design/implementation-mobile.jpg.
   - All seven tested widths have no viewport or heading overflow.
   - Major-region proportions, two-column hero, lime headline, white quote card, port photo, process, Burgas band and navy footer are retained.
   - Full-page height differs by 16 px, under 1%. Residual baseline/crop differences are P3 refinements.

## Required fidelity surfaces

- Fonts/typography: bundled Inter variable; display weight 850, body/UI weights 400–650. Focused comparison verifies the headline/form hierarchy, wrapping and optical weight. Mobile content reflows without clipping.
- Spacing/layout: source grid, rounded surfaces, image crop, control rhythm and section order retained. Mobile uses a vertical process and places the quote form before the photo; this is an intentional adaptation because no mobile target was supplied.
- Colors/tokens: navy #080c48, violet #5130ff, lime #e1ff67, lavender surfaces and muted body text. Focus and invalid-field states are visible; mobile text is clear of cranes and water.
- Image quality/assets: four generated raster assets grounded in inspected source crops: sunset port, panorama, navy route background and transparent logo. All are local and embedded in the build. UI icon paths come from Phosphor. No handcrafted SVG/CSS illustrations, generic placeholders or emoji substitutes.
- Copy/content: English throughout; confirmed location Burgas, Bulgaria. Name remains provisional. Unconfirmed business claims were removed. Privacy/review copy accurately describes local-only data handling; no message-sent or booking success is fabricated. Copyright corrected to 2026.

## Functional and environment checks

Frozen installation and npm test both passed. The 32 checks cover real image/font rendering; desktop/mobile menus; Escape and focus restoration; empty/invalid/corrected form fields; review content; downloaded TXT filename and contents; editing without data loss; contact/services/privacy/terms dialogs; widths 320/390/768/820/946/1024/1440; and absence of console errors or outgoing form requests.

The production HTML was rendered using Playwright page.setContent in an offline browser context, proving it requires no external resources. Direct file-scheme navigation is blocked by the cloud browser's administrative policy; direct file:// opening on this machine is not claimed as verified. The same HTML is ready for ordinary static hosting. The live HTTP development page was separately rendered and its quote validation checked.

The build embeds images, font, scripts, styles, favicon and third-party license notices. The download ZIP was checked for integrity and its index.html bytes match the tested build.

## Implementation checklist

- [x] Resolve and inspect selected option 3.
- [x] Generate and place every visual asset.
- [x] Implement responsive frontend and primary actions.
- [x] Fix P2 findings, recapture and compare full/focused regions.
- [x] Pass frozen install, browser scenarios and standalone-build checks.
- [x] Package the self-contained page.

## Follow-up polish and launch prerequisites

Optional P3: exact heading baselines, the 16 px page-height difference and a slightly closer photo crop.

Before public business use, confirm company name, actual services/contacts/legal text and connect enquiry delivery. No production email/backend integration, public hosting or validation in a newly restored task is claimed.
