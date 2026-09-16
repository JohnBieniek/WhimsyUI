# Responsive layout audit ? September 16, 2026

## Scope and method

Crawled internal links starting at Home and found **33 active routes**: five core pages, eight service pages, and twenty project pages. The gallery's Lakeland link resolves to **/work/lakeland-cabaret**; /work/lakeland-website is an inactive route.

Audited the production static export in Chromium with fonts and images loaded. Checked full-page compositions, heading line breaks, text bounds, horizontal overflow, image loading, and browser errors. Reviewed full-page contact sheets for all active routes at 1440px and 768px, with larger captures for problem areas.

- **30 viewport widths:** 320, 360, 390, 430, 479, 480, 700, 701, 768, 820, 900, 901, 960, 1001, 1024, 1050, 1100, 1101, 1151, 1201, 1280, 1366, 1440, 1536, 1600, 1601, 1680, 1800, 1920, 2560 CSS pixels.
- **Heights:** 844px below 700px; 1024px at 700?959px; 768px at 960?1279px; 800px at 1280?1919px, except **1440 ? 1050**; **1920 ? 1080** and **2560 ? 1440**.
- **Actual Chromium zoom:** 80%, 125%, 150%, and 200% on both 1440 ? 1050 and 1920 ? 1080 base viewports, using chrome.tabs.setZoom. For example, 1440 ? 1050 at 125% produces a 1152 ? 840 CSS viewport and DPR 1.25. This was browser zoom, not a CSS transform or a DPR-only simulation.
- **Baseline protection:** compared every active route at 1920 ? 1080 and all 25 inactive project routes at 390px, 1440px, and 1920px.

## Findings and corrections

| Area | Finding | Correction |
| --- | --- | --- |
| Ad Campaign | The short title wrapped onto two lines at 1440px. | Size it to its text column and retain one line. Verified at 768, 1280, 1440, and 1920px. |
| Cascades Humane Society | Oversized desktop type and narrow tablet columns broke phrases into too many lines. | Keep the organization name together above Grand Opening; preserve the two introductory phrases; stack narrow tablet panels earlier. |
| Holiday in the Halls | Section labels occupied a narrow third column; long fixed-line headings distorted panels; the tablet closing image expanded beyond its grid. | Give labels a full row, constrain grid tracks, size headings to available space, and stack the large image/copy panels earlier. Restore readable closing copy on phones. |
| Home | Collage overflow at intermediate desktop widths; tablet hero logo crowded navigation; desktop tagline touched the collage. | Contain the collage, use the normal header logo on tablets, and give the tagline breathing room. |
| Services & Pricing | Eight desktop cards were squeezed into smaller screens; the tablet collage overlapped the introduction; the headline exceeded its column at 1536?1600px. | Use four cards on smaller desktops, two on tablets, one on narrow phones; put the tablet collage in document flow; size the headline to its column. |
| Project layouts | Several split panels and calls to action became narrow columns of words on tablets. | Add scoped type sizing and earlier stacking to the affected active pages. |
| Work gallery | Four columns made long project names cramped on smaller desktops. | Allow wider cards, keeping three columns at 1440px and two where needed. |
| Back to School / Team Hope | Tablet campaigns became long, single-column image sequences. | Keep two campaign images side by side at 701?800px. |
| About / Contact | About's tablet team panel squeezed its heading; Contact's title gained awkward extra lines at some desktop and phone widths. | Stack the team panel earlier and balance Contact's title within its column. |

## Route coverage

Every route below completed the viewport and zoom checks. Pages that already fit received no page-specific changes; shared responsive rules are limited to the active site.

| Route | Main responsive treatment |
| --- | --- |
| / | Collage bounds, tablet navigation/logo, tagline spacing |
| /about | Tablet team panel |
| /contact | Heading sizing and balance |
| /services | Hero, collage, pricing-card grid |
| /services/ad-campaign | One-line title |
| /services/brand-advertising-plan | Two-line section heading |
| /services/business-consulting-session | Checked; no page-specific change |
| /services/five-page-website | Checked; no page-specific change |
| /services/photography | Checked; no page-specific change |
| /services/single-page-website | Checked; no page-specific change |
| /services/website-support | Checked; no page-specific change |
| /services/website-transfer | Checked; no page-specific change |
| /work | Gallery columns and card headings |
| /work/alpha-koney-story | Active archive title, panels, call to action |
| /work/back-to-school-bash | Title, opening panel, tablet gallery, call to action |
| /work/cascades-ribbon-cutting | Title phrases, section headings, tablet panels |
| /work/fetch-market-launch | Title, tablet opening/place/takeaway panels |
| /work/happy-harvest | Title, section headings, tablet panels |
| /work/heavenly-bakes-and-cakes | Title, value heading, tablet panels |
| /work/holiday-in-the-halls | Section hierarchy, grid containment, images, heading sizing |
| /work/ingendahl-acres-branding | Title and tablet panels |
| /work/lakeland-cabaret | Title, copy spacing, tablet panels |
| /work/malloween | Active archive title, panels, call to action |
| /work/miss-crossroads | Active title and tablet call to action |
| /work/multiverse-adventurers-guild | Title, overview/library/mobile headings, tablet phone showcase |
| /work/serenity-support | Active archive title, panels, call to action |
| /work/sisters-smoothies-feature | Active archive title, panels, call to action |
| /work/sonic-shielding | Active title and tablet call to action |
| /work/student-art-show | Active archive title, panels, call to action |
| /work/team-hope-walk | Active title, tablet galleries, call to action |
| /work/valentines-at-jackson-crossing | Title, gift heading, tablet panels |
| /work/welcome-home-organization | Title, value heading, tablet panels |
| /work/whimsy-warden | Title, overview/chapter headings, tablet call to action |

## Validation and boundaries

The final matrix comprises **990 route/viewport checks** and **264 route/zoom checks**, with additional checks after the final Home and gallery refinements. No checked active route had horizontal page overflow, heading text exceeding its column by more than the 2px rasterization tolerance, missing images, HTTP failures, or page script errors. Long headings can still use sensible multiple lines on narrow phones; this is not a blanket no-wrapping rule.

All 33 active pages retained their baseline heading geometry and page dimensions at **1920 ? 1080**. The 25 inactive project pages retained their baseline geometry and dimensions in all 75 comparisons. New shared project rules require an active-project data attribute; inactive archive/software routes do not opt in. No project copy or image assets were replaced.

Validation commands:

- Production build: node node_modules/next/dist/bin/next build
- Unit tests: node node_modules/vitest/vitest.mjs run ? 6 passed. Updated one stale expectation for the existing Work page heading.
- Browser tests: Playwright against the production export ? 16 passed, including all active routes at eight widths and targeted regressions for Ad Campaign, Home, Services, and Holiday.
- ESLint: zero errors; one pre-existing unused Mountain import warning in src/app/page.tsx.

Regression coverage lives in tests/e2e/responsive.spec.ts. Raw measurements and screenshots are local, ignored artifacts under reports/responsive-audit/. This pass covers Chromium rendering; it does not claim separate Safari or Firefox visual verification.

## Follow-up: Home campaign image proportions

The screenshot review identified excessive image cropping at `home--700x1024--z100` in commit `8ef5851`. The full-width cards retained fixed 115px image frames (140px for Team Hope). This visual issue passed the automated text/overflow checks.

Home's campaign images now use 16:9 frames at widths up to 1050px, giving the 700px layout approximately 376px of image height. Wider desktop layouts retain their original image heights. Checked all four frames at 320, 390, 480, 700, 701, 768, 960, 1024, 1050, 1051, 1280, 1440, and 1920px, with no page or heading overflow. The original smoke-review document remains an immutable capture of `8ef5851`; updated Home previews are under `reports/home-card-review/`.

## Follow-up: Tablet header logo clipping

The `home--820x1024--z100` capture exposed a shared header problem: a roughly 102px-tall logo was centered in a 90px header, placing its top about 6px above the viewport. At 701–1050px, headers on active routes now size to their content with 12px vertical padding. The selector excludes inactive project routes.

Regression checks verify both vertical logo bounds on all 33 active routes at 701, 820, and 1050px. All three checks and the existing Home navigation test pass. Also checked Home at ten widths from 700 to 1920px, confirmed the 25 inactive headers retain their original height at 820px, and confirmed unchanged Home page heights at 1440/1920px. Production build and focused ESLint checks pass. Updated previews are under `reports/home-logo-review/`.

## Review batch approved for develop

The user cleared this batch for pushing to `develop`. Final validation: production build passed, all 34 browser regression tests passed against the production export, all six unit tests passed, focused ESLint passed, and `git diff --check` passed. The follow-up entries below describe work that was held locally during review; this batch includes those changes together. The original smoke-review document remains a reference capture of `8ef5851`, with updated local previews linked in each follow-up.

## Follow-up: Collage and text intersections

The `services--1101x768--z100` capture showed the desktop collage entering the Services text column immediately above the stacked-layout breakpoint. At 1101–1919px, Services now uses two explicit grid columns with a 32px gap; the collage stays within its column, and the heading scales to its available width. The existing composition at 1920px and above is retained.

Extended the audit to image/text intersections across all 33 active routes and all 1,254 original viewport/zoom combinations. Measurements use text-node rectangles and image bounds clipped by overflow ancestors, followed by review of flagged cases. Two additional defects were corrected: the enlarged Fetch image on the Work listing escaped its image frame into card text, and Holiday's square closing image stretched beyond its column around 1200–1280px. The Work image link now clips its image; Holiday's closing figure stays within its column at intermediate widths.

After fixes, the complete matrix was rechecked, with a final 38-case Services rerun following its heading adjustment. No unresolved unintended intersections remain. Deliberate Back to School/Team Hope captions, Holiday's Lakeland image link, and the existing wide Services decorative frame/transparent image bounds are documented exceptions, not a claim of zero geometric intersections. Reviewed summary: `reports/intersection-verification/reviewed-summary.json`; raw results in the same folder and its `services-final` subfolder. Production build, focused ESLint, and seven targeted browser tests passed. Updated previews include `services--1101--full.jpg`, `holiday--1280--after.jpg`, and `work-fetch--1280--after.jpg`. All changes remain local pending the review queue being cleared.

## Follow-up: Complete navigation verification

Rechecked the queued build across all 33 active routes using the original smoke matrix: 30 viewport sizes at 100%, plus actual browser zoom at 80%, 125%, 150%, and 200% for both 1440x1050 and 1920x1080. All 1,254 combinations passed: exactly one visible primary logo, no logo viewport/ancestor clipping, no logo/navigation intersections, no navigation outside the viewport, and no wrapped or overflowing navigation labels. This includes Contact at 900x1024. Chromium measurement results are saved locally at `reports/navigation-verification/results.json`; this check does not claim full-page visual approval. Nothing pushed.

## Follow-up: Contact mobile headings

Contact's single-column layout now follows intro, picture, Before you send, contact form, prices, then Featured Partners through 1050px. Previously, the tablet layout placed the form ahead of the sidebar content. In this range, the partner heading is centered on a single line above the logos, and the first logo has no leading mint divider. Verified ordering, heading line count/centering, divider removal, and page overflow at eleven widths from 320 to 1050px; checked desktop composition remains at 1051 and 1920px. Production build and focused ESLint passed. Updated captures include `reports/contact-heading-review/contact--701x1024--z100.jpg` and `partners--701.jpg`. Queued locally.

At widths through 700px, Contact's intro now uses two deliberate lines: “Tell us what you are” / “trying to accomplish.” Its type scales with the intro width. “Let’s make a plan.” scales within the padded form panel, keeping one line and its existing 25px maximum. Verified ten mobile widths from 320 to 700px: exactly two intro lines, one form-title line, and no heading overflow. Also checked 701, 1440, and 1920px retain existing typography. Production build and focused ESLint passed. Updated full-page previews are under `reports/contact-heading-review/`, including `contact--320x844--z100.jpg`. Queued locally.

## Follow-up: About story heading

The mobile hero heading “Local talent. Trusted work.” now appears on one line through 700px, with its forced break hidden and font size tied to the content width. Verified ten mobile widths from 320 to 700px: one line and no overflow. Checked 701, 768, 1440, and 1920px retain their existing two-line heading. Production build passed. Mobile previews are `reports/about-header-review/about--390x844--z100.jpg` (also 320px and 700px); changes remain queued locally.

The community heading, “Part of the community. Happy to lend a hand.”, now also fits on one line at 701–1050px. Its explicit line break is suppressed only in that tablet range, with type sized to the padded panel's content width. Checked 15 widths: all sampled tablet widths are single-line without overflow; phone and desktop retain their two-line composition. Production build passed. Updated the same About preview; changes remain local.

The same tablet sizing treatment also applies to “From the first idea to the everyday details.” following the next review item. Production build passed; checked 15 widths from 320 to 1920px, with a single line at all sampled widths from 700px upward and no text overflow. Updated the same About full-page preview; desktop sizing remains unchanged.

The review requested a single line for “Founded by Kay Pickett. Rooted in Jackson.” at 701px. Its 28px text measured 643px in a 621px column. At 701–1050px, its font size is now capped relative to the story container, producing approximately 26px at 701px and preserving the existing size wherever it fits. Phone wrapping and desktop typography remain unchanged. Production build passed; checked 17 widths from 320 to 1920px with no heading overflow and a single line at every sampled width from 700px upward. Updated full-page capture: `reports/about-header-review/about--701x1024--z100.jpg`. Queued locally.

## Follow-up: Tablet navigation crowding

The `about--701x1024--z100` review identified navigation crowding in addition to the previously corrected logo clipping. At 701–900px, active-page headers now place the centered logo above a separate navigation row, keep every link label on one line, and extend the header divider across the shell. Inactive project headers and desktop headers are excluded.

Production build and focused ESLint passed. Seven browser tests passed, including header containment, logo/navigation separation, and single-line navigation labels on all 33 active routes at 701, 820, 900, 901, 960, and 1050px. Visually reviewed the updated About header at 701px; full-page preview: `reports/about-header-review/about--701x1024--z100.jpg`. Changes remain queued locally.

## Follow-up: Home purple dots at 150% zoom

The `home--1920x1080--z150` capture has an effective 1280px CSS viewport. The queued collage-spacing fix resolves its text overlap, but the purple dot accent also extended 42px beyond the left viewport edge. At 1280–1679px, the accent now uses two complete dot columns positioned within the page gutter. The full-width desktop accent remains unchanged. Production build passed; measurements at eleven desktop widths plus the exact 1920x1080/150% browser-zoom case confirm the purple accent fits. Visually reviewed the updated full-page capture at `reports/home-collage-review/home--1920x1080--z150.jpg`. Changes remain queued locally.

## Follow-up: Home logo and collage overlap

The `home--1100x768--z100` capture exposed an intersection that the previous logo-clipping checks did not detect: the desktop hero logo overlapped both the collage and navigation just above the 1050px breakpoint.

Home now uses its compact header logo through 1279px, with a 32px gap between hero columns. At 1051–1600px, the collage no longer extends into the copy column, and the copy has additional right padding. These changes are scoped to Home; the 1920px layout is unaffected.

Production build, focused ESLint, and seven browser regression tests passed. Additional Home measurements passed at 32 widths from 320 to 2560px and eight actual browser-zoom combinations (80%, 125%, 150%, and 200% at 1440x1050 and 1920x1080), checking logo/collage, logo/navigation, text/collage intersections, logo clipping, and page overflow. The 1920x1080 page retains its 1435px full-page height. Updated full-page previews and measurements are under `reports/home-collage-review/`; the original smoke document still represents `8ef5851`. This fix is queued locally pending completion of the user's review queue.
