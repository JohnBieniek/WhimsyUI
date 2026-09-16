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
