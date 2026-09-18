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

## Follow-up: Home intro width (0.9.1 review)

Removed the Home intro paragraph's inherited 500/600px maximum width through 1050px, where the collage is below the copy. At 901px it now fills the 821px content column. Verified twelve stacked-layout widths from 320 to 1050px plus desktop controls at 1051, 1280, and 1920px: no overlap or page overflow, with desktop paragraph caps retained. Production build passed. Updated preview: `reports/home-intro-review/home--901x1024--z100.jpg`. Queued locally for the current review batch.

## Follow-up: Home dots at 125% zoom (0.9.1 review)

The `home--1440x1050--z125` capture has a 1152x840 CSS viewport, where the compact desktop header rule hid the dot accents along with the hero logo. Restored both accents from 1051 through 1279px: two purple columns in the left gutter beside the introduction and mint dots above the collage. The header retains its existing logo. Production build passed. Checked fifteen widths from 390 to 1920px and the exact 1440x1050/125% browser-zoom case; the affected range has no accent clipping or intersections with text or images. The unchanged 1280px layout still has the previously existing mint/collage bounding-box intersection, recorded separately. Updated preview and measurements: `reports/home-dots-review/`. Queued locally; the original smoke-review capture is unchanged.

## Follow-up: Home dots at 150% zoom (0.9.1 review)

The `home--1440x1050--z150` capture has a 960x700 CSS viewport and exposed the equivalent dot-hiding rule in the stacked tablet layout. Extended the shared accent styles down to 701px. In the 701-1050px layout, purple dots sit beside the introduction, and two mint rows fit in the existing gap between the buttons and collage. Production build passed. Checked 22 viewport widths plus actual 125%, 150%, and 200% browser zoom at 1440x1050 (25 checks); the restored accents have no clipping or intersections with text or images. Visually reviewed the exact 150% capture. Updated full-page preview: `reports/home-dots-review/home--1440x1050--z150.jpg`; viewport detail and measurements are in the same folder. Queued locally with the earlier review fixes.

## Follow-up: Full Home purple dot pattern at 1536px (0.9.1 review)

The `home--1536x800--z100` capture showed only two purple columns because the gutter correction applied across the entire 1280-1679px range. The compact pattern now applies only where the full accent would extend beyond the viewport, accounting for the shell's width change above 1600px. The 1536px capture now shows the original four columns and six rows, fully inside the left gutter. Production build and 32 viewport/zoom checks passed, including both sides of the new transitions and the earlier 125%/150%/200% cases. Visually reviewed `reports/home-dots-review/home--1536x800--z100.jpg`. Queued locally with the earlier review fixes.

The subsequent `home--1600x800--z100` review is covered by the same fix. Verified the exact 1600x800 viewport: all four purple columns and six rows render without clipping, text/image intersections, or page overflow. Saved and visually reviewed `reports/home-dots-review/home--1600x800--z100.jpg`; its measurements are in the adjacent JSON file. No additional layout change was needed.

## Follow-up: Home purple dots above 1600px (0.9.1 review)

The `home--1601x800--z100` review exposed the next gutter transition: the content shell widens above 1600px, and the compact accent still dropped two columns. Between 1600px and 1644px, the accent now preserves all four columns and six rows using 12px horizontal spacing in a 48px frame. Production build and 34 viewport/zoom checks passed, including 1599, 1600, 1601, 1602, 1643, and 1644px. Verified the exact 1601x800 capture with no purple-dot clipping or text/image intersections. Updated preview: `reports/home-dots-review/home--1601x800--z100.jpg`. Queued locally with the earlier review fixes.

## Follow-up: Complete Home dot pattern in compact gutters (0.9.1 review)

The `home--1920x1080--z150` capture has a 1280x720 CSS viewport. Its 32px purple accent still showed only two columns at the original 16px spacing. The remaining compact accent rules now use 8px horizontal spacing, preserving all four columns and six rows throughout the visible tablet and desktop layouts. This also updates the earlier 125% and 150% tablet fixes so they retain the full pattern. Production build and 35 viewport/zoom checks passed, including actual 1920x1080/150% browser zoom. Visually reviewed the exact capture; purple dots fit within the gutter without text/image intersections or clipping. Updated preview: `reports/home-dots-review/home--1920x1080--z150.jpg`. Queued locally with the earlier review fixes.

## Follow-up: About story heading on phones (0.9.1 review)

The `about--360x844--z100` review requested exactly two mobile lines for the story heading. Wrapped the two sentences in spans and, only through 700px, placed each sentence on its own unbroken line with type sized to the available width. Tablet and desktop retain one line. Production build passed; verified 14 widths from 320 to 1920px, with two lines on phones, one above 700px, and no heading or page overflow. Updated preview: `reports/about-story-review/about--360x844--z100.jpg`; heading detail and measurements are in the same folder. Queued locally with the earlier review fixes.

## Follow-up: About hero heading in stacked layouts (0.9.1 review)

The `about--701x1024--z100` review requested a single line for “Local talent. Trusted work.” whenever the collage sits below the copy. Extended the phone heading treatment through the stacked-layout breakpoint at 1050px, sizing the heading against its text column and hiding the explicit line break. Wider layouts retain two lines beside the collage. Production build passed; verified 16 widths from 320 to 1920px with the expected line counts, collage placement, and no heading or page overflow. Updated preview: `reports/about-hero-review/about--701x1024--z100.jpg`; heading detail and measurements are in the same folder. Queued locally with the earlier review fixes.

## Follow-up: About team heading natural wrapping (0.9.1 review)

The `about--900x1024--z100` review requested “Different skills. One shared purpose.” on one line wherever it fits without reducing the font size. Removed its forced line break, allowing natural wrapping at the existing type size. Production build passed; checked 13 widths from 320 to 1920px, comparing the unwrapped text width with the available column. Every layout with sufficient space uses one line, narrower columns wrap, and no heading or page overflow occurs. At 900px the heading fits on one line at the unchanged 28px size. Updated preview: `reports/about-team-review/about--900x1024--z100.jpg`. Queued locally with the earlier review fixes.

## Follow-up: Giving Back card title alignment (0.9.1 review)

The `about--1440x1050--z150` review requested centered titles across all three Giving Back cards whenever the longer titles wrap. Added a named container query on the equal-width card text areas: below 269px of text width, all three headings center together at their existing 19px size. This covers narrow phone cards as well as tablet columns, while wider cards retain their existing alignment. Production build and 22 viewport/zoom checks passed, including the exact 960x700 CSS viewport at actual 150% browser zoom. Serenity and Grow Jackson occupy two centered lines, and Jackson County Airport centers on one line; no heading or page overflow occurs. Updated full-page preview: `reports/about-giving-back-review/about--1440x1050--z150.jpg`; section details and measurements are in the same folder. Queued locally with the earlier review fixes.

## Follow-up: Narrow phone navigation labels (0.9.1 review)

The `contact--320x844--z100` review showed Contact wrapping onto its own row and leaving the Services divider behind. Navigation already uses 12px text on phones, retained as the minimum for this fix. The full labels need approximately 303px inside the header; at viewport widths through 330px, the shared Services link now hides only its “ & Pricing” suffix. At 331px and wider, “Services & Pricing” remains visible. All five links fit on one row at 320px without reducing text size. Production build, focused ESLint, and 45 checks across the five core routes and nine widths passed, with no clipped links or navigation overflow. Updated preview: `reports/narrow-navigation-review/contact--320x844--z100.jpg`; header details at 320/331px and measurements are in the same folder. Queued locally with the earlier review fixes.

## Follow-up: Center Contact photo in stacked layouts (0.9.1 review)

The `contact--701x1024--z100` review requested Kay's photo centered whenever it occupies its own row. Set the photo's grid alignment to center through the stacked-layout breakpoint at 1050px. Production build passed; checked 12 widths from 320 to 1920px, confirming exact horizontal centering in every stacked layout, no overflow, and the existing sidebar alignment above 1050px. Updated preview: `reports/contact-photo-review/contact--701x1024--z100.jpg`. Queued locally with the earlier review fixes.

## Follow-up: Services intro uses the stacked column width (0.9.1 review)

The review requested the full column width for “Professional work. Clear cost.” and the “Whimsy offers everything you need…” paragraph whenever the collage is below the copy. Through 1100px, removed the intro width cap and heading's forced line break, allowing natural wrapping at the existing font sizes. Production build passed; checked 13 widths from 320 to 1920px. Both text blocks fill the available column in stacked layouts without overflow; wider layouts retain the split composition and explicit heading break. Updated preview: `reports/services-intro-review/services--960x1024--z100.jpg`; intro detail and measurements are in the same folder. Queued locally with the earlier review fixes.

## Follow-up: Services collage vertical alignment (0.9.1 review)

The `services--1201x768--z100` review requested vertical centering when the collage occupies the second column beside taller text. Centered the collage within its grid row at 1101-1919px. Production build and 12 viewport checks passed: the collage aligns with the text's vertical center in the affected layouts without intersections or page overflow, and the stacked layout through 1100px is retained. At 1201px the 264px collage centers alongside the 464px text column. Updated preview: `reports/services-collage-centering-review/services--1201x768--z100.jpg`; hero detail and measurements are in the same folder. Queued locally with the earlier review fixes.

## Follow-up: Services collage clearance below navigation (0.9.1 review)

The `services--1601x800--z100` review requested that the collage never touch the navigation. The queued vertical-centering fix already creates a 32px header gap at that width. The remaining wide layout, from 1920px, still placed the collage against the header divider; added a 24px top margin to its hero. Production build and 15 width checks from 320 to 2560px passed, confirming at least 24px clearance below the header, no collage/pricing-card intersection, and no page overflow. Visually reviewed updated 1601px and 1920px previews under `reports/services-nav-gap-review/`. Queued locally with the earlier review fixes.

## Follow-up: Pricing-card clearance beneath the wide Services collage (0.9.1 review)

The `services--1920x1080--z80` review authorized extra spacing above the pricing boxes. Added 24px top padding to the pricing grid from 1920px upward, where the wide collage previously finished less than 2px above the cards. Production build and eight viewport/zoom checks passed. At actual 80% browser zoom (2400x1350 CSS pixels), the collage has approximately 24px clearance below the header and 26px above the pricing boxes, without page overflow. Updated preview: `reports/services-pricing-gap-review/services--1920x1080--z80.jpg`. Queued locally with the earlier review fixes.

## Follow-up: Ad Campaign intro fills its stacked column (0.9.1 review)

The `services--ad-campaign--1024x768--z100` review requested full-width intro paragraphs whenever the images sit below the copy. Removed the inherited 680px intro cap only for Ad Campaign through its 1050px stacking breakpoint. At 1024px, all three intro paragraphs now fill the 944px content column. Production build and 12 width checks passed, with no copy/image overlap or page overflow; the desktop intro cap remains in place. Updated preview: `reports/ad-campaign-intro-review/services--ad-campaign--1024x768--z100.jpg`; intro detail and measurements are in the same folder. Queued locally with the earlier review fixes.

## Follow-up: Ad Campaign included heading (0.9.1 review)

When the included-section introduction stacks above its four items (up to 1050 CSS pixels), its heading now wraps naturally instead of forcing a break between its two spans. Font sizing is unchanged. At 1024x768, “Four coordinated ads, ready to share.” fits on one line at 32px; narrower layouts wrap as needed, and the side-by-side desktop layout keeps its existing heading arrangement. Production build and 11 browser width checks (320–1600px) passed with no horizontal overflow. Preview and measurements: `reports/ad-campaign-included-review/`. Queued locally with earlier review fixes.

## Follow-up: Ad Campaign message heading at 1100px (0.9.1 review)

Extended the Ad Campaign article body's single-column layout through 1100 CSS pixels, giving “Four ads. One clear message.” enough room to fit on one line at its unchanged 44px font size at 1100x768. The accompanying requirements content stacks below the article at these widths. Production build and 10 browser width checks (360–1600px) passed without horizontal overflow. Preview and measurements: `reports/ad-campaign-message-review/`. Queued locally with earlier review fixes.

## Follow-up: Ad Campaign message heading at 1101px (0.9.1 review)

Extended the preceding stacked article-body adjustment through 1200 CSS pixels to include the 1101x768 capture and nearby tablet widths. The heading fits on one line at its unchanged 44.04px size at 1101px. Production build and nine browser width checks (360–1440px, including both sides of the 1200px boundary) passed without horizontal overflow. The desktop two-column layout resumes above 1200px. Preview: `reports/ad-campaign-message-review/message--1101x768.png`; measurements: `checks-1101.json` in the same directory. Queued locally.

## Follow-up: Ad Campaign message heading at 1201px and wider (0.9.1 review)

Supersedes the preceding 1100px and 1200px cutoffs: the Ad Campaign article body now retains one column at all widths, with requirements below the overview. This lets “Four ads. One clear message.” use the full row without changing its font sizing or reintroducing the wrap at the next desktop breakpoint. Production build and 12 browser checks from 320 through 2400 CSS pixels passed: heading on one line and no horizontal overflow in each. Exact preview: `reports/ad-campaign-message-review/message--1201x768.png`; measurements: `checks-wide.json` in the same folder. Queued locally.

## Follow-up: Ad Campaign consultation heading (0.9.1 review)

The Ad Campaign CTA heading now uses its natural text width as its flex basis, moving the consultation button below when necessary instead of compressing the heading beside it. Font sizing is unchanged; narrower headings can still wrap naturally. Verified at actual 1920x1080 / 200% zoom (960x540 CSS): one line at 42px with no horizontal overflow. Production build and ten browser checks spanning 320–1920 CSS pixels passed. Preview and measurements: `reports/ad-campaign-cta-review/`. Queued locally.

## Follow-up: Brand guidance headings at 320px (0.9.1 review)

The identity heading uses one sentence per line on mobile, scaling from approximately 20px at 320px to its existing 26px size when space permits. The section label uses “BRAND & STYLE GUIDANCE” in containers up to 330px wide, preserving its 18px font size; wider containers retain “and”. Production build, component lint, and eleven browser width checks (320–1440px) passed with no horizontal overflow. Preview and measurements: `reports/brand-guidance-review/`. Queued locally.

## Follow-up: Brand guide card heading at 320px (0.9.1 review)

The first brand-guide card heading uses balanced wrapping and mobile container-based font sizing, capped at its existing 20px. At 320x844 it is approximately 19px and fits on two lines. Production build, component lint, and eight browser width checks (320–1440px) passed with no horizontal overflow. Preview and measurements: `reports/brand-guide-card-review/`. Queued locally.

## Follow-up: Channel mix heading at 320px (0.9.1 review)

“Know where to show up, and what to say.” now breaks after the comma on mobile, with container-based sizing capped at the existing 26px. At 320x844 it fits on two lines at approximately 21.3px. Wider desktop headings retain natural wrapping. Production build, component lint, and seven browser width checks (320–1440px) passed with no horizontal overflow. Preview and measurements: `reports/brand-channels-heading-review/`. Queued locally.

## Follow-up: Google Business Profile heading at 320px (0.9.1 review)

The Google Business Profile card heading now scales with its mobile card width, capped at the existing 20px size. At 320x844 it fits on one line at approximately 18.5px. Production build, component lint, and eight browser width checks (320–1440px) passed with no horizontal overflow. Preview and measurements: `reports/brand-google-heading-review/`. Queued locally.

## Follow-up: Website and email heading at 320px (0.9.1 review)

The website/email card uses “Your website & email” when its content container is at most 256px wide, retaining “and” when it fits. At 320x844 the shorter heading fits on one line at the unchanged 20px font size; container-based sizing allows further adjustment in narrower cards. Production build, component lint, and ten browser width checks (320–1440px) passed with one-line headings and no horizontal overflow. Preview and measurements: `reports/brand-website-heading-review/`. Queued locally.

## Follow-up: Brand & Advertising Plan mobile title (0.9.1 review)

The main Brand & Advertising Plan heading now scales with its text column on mobile (up to 700px), capped at 48px, and stays on one line. At 360x844 it is approximately 23.6px; at 320px it is approximately 20.7px. Production build and nine browser width checks (320–1440px) passed with no horizontal overflow. Preview and measurements: `reports/brand-mobile-title-review/`. Queued locally.

## Follow-up: Brand plan consultation heading at 820px (0.9.1 review)

Applied natural-width flex sizing to the Brand & Advertising Plan CTA heading so the consultation button moves below when necessary. At 820x1024, “Let’s make the next step clear.” fits on one line at the unchanged 42px font size. Production build and nine browser width checks (320–1440px) passed without horizontal overflow. Preview and measurements: `reports/brand-cta-review/`. Queued locally.

## Follow-up: Brand plan stacked introduction width (0.9.1 review)

Removed the introductory paragraph width cap on Brand & Advertising Plan when the hero stacks (up to 1050 CSS pixels). All three paragraphs now fill their text column; the side-by-side layout keeps its existing cap. Production build and eleven browser width checks (320–1440px), including the 1050/1051 boundary, passed with no horizontal overflow. Exact 901x1024 preview and measurements: `reports/brand-intro-width-review/`. Queued locally.

## Follow-up: Brand plan included heading at 901px (0.9.1 review)

Removed the forced span break when the included introduction stacks above its four cards (up to 1050px). At stacked tablet widths (701–1050px), container-based sizing capped at 32px keeps the heading on one line; at 901x1024 it is approximately 28px. Phone text wraps naturally, and the side-by-side desktop arrangement retains its existing styling. Production build and ten browser width checks (320–1440px) passed without horizontal overflow. Preview and measurements: `reports/brand-included-heading-review/`. Queued locally.

## Follow-up: Consulting stacked introduction width (0.9.1 review)

Removed the introductory paragraph width cap on Business Consulting Session when the hero stacks (up to 1050 CSS pixels). Paragraphs now fill the column, including its 944px width at 1024x768. The side-by-side layout retains its existing cap. Production build and ten browser width checks (320–1440px), including both sides of the stacking breakpoint, passed without horizontal overflow. Preview and measurements: `reports/consulting-intro-width-review/`. Queued locally.

## Follow-up: Consulting consultation heading stays on one line (0.9.1 review)

The consulting CTA heading uses natural-width flex sizing, with the button moving below when necessary. Above the phone breakpoint its font scales with the column up to the existing 42px, and nowrap keeps the title on one line. Existing mobile sizing is preserved. Production build and eleven browser checks passed with one-line headings, no button overlap, and no horizontal overflow, including actual 1440x1050 at 150% zoom (960x700 CSS). Preview at equivalent CSS dimensions and measurements: `reports/consulting-cta-review/`. Queued locally.

## Follow-up: Five-page website updates label at 320px (0.9.1 review)

The five-page website's “Easy updates, included” label scales with its mobile header container, capped at the existing 18px, to fit one line. At 320x844 it is approximately 15.7px; at 360px it returns to 18px. Production build and seven browser width checks (320–1440px) passed with one-line labels and no horizontal overflow. Preview and measurements: `reports/five-page-updates-review/`. Queued locally.

## Follow-up: Five-page website publish heading at 320px (0.9.1 review)

On mobile, the publish step switches to “Publish when you're ready” when its content width is at most 254px and scales down only as needed. At 320x844 it fits one line at approximately 18.1px; at 360px the original wording fits at 21px. Desktop styling is preserved. Production build, component lint, and eight browser width checks passed with no horizontal overflow. Preview and measurements: `reports/five-page-publish-review/`. Queued locally.

## Follow-up: Five-page website real-use label at 320px (0.9.1 review)

The “Built for real use” label scales with its mobile text column, capped at the existing 18px. At 320x844 it fits one line at approximately 17.3px and returns to 18px at 360px. Production build and seven browser width checks (320–1440px) passed without horizontal overflow. Preview and measurements: `reports/five-page-real-use-review/`. Queued locally.

## Follow-up: Five-page website CMS heading on mobile (0.9.1 review)

“We build it. You can keep it up to date.” now uses balanced wrapping and container-based mobile sizing capped at 28px. It fits two lines at 320px (approximately 22.4px) and 360x844 (approximately 26px), and naturally uses one line when space permits. Production build and nine browser width checks (320–1440px) passed, with at most two lines on mobile and no horizontal overflow. Preview and measurements: `reports/five-page-cms-title-review/`. Queued locally.

## Follow-up: Five-page website mobile screenshot order (0.9.1 review)

On mobile (up to 700px), the Multiverse homepage screenshot now appears above the character-sheet screenshot in the responsive demonstration. Desktop ordering is unchanged. Production build and seven browser width checks (320–1024px) passed, verifying image order and no horizontal overflow. Exact 479x844 preview and measurements: `reports/five-page-mobile-image-order-review/`. Queued locally.

## Follow-up: Five-page website real-use label at 820px (0.9.1 review)

Extended the existing container-based “Built for real use” sizing beyond mobile to the side-by-side layout. At 820x1024 the label fits one line at approximately 17.2px, returning to its 18px cap when space permits. Production build and nine browser width checks (320–1440px) passed with one-line labels and no horizontal overflow. Preview: `reports/five-page-real-use-review/real-use--820x1024.png`; measurements: `checks-wide.json` in the same directory. Queued locally.

## Follow-up: Five-page website consultation heading at 900px (0.9.1 review)

The CTA heading now uses its natural width as its flex basis, moving the button below when needed. At 900x1024, “Let’s make the next step clear.” fits one line at the unchanged 42px font size. Production build and eight browser width checks (320–1440px) passed without horizontal overflow. Preview and measurements: `reports/five-page-cta-review/`. Queued locally.

## Follow-up: Photography price label at 320px (0.9.1 review)

The Photography · $100/hour hero label now scales with its mobile column, capped at the existing 18px, and stays on one line. Production build and eight browser width checks (320–1440px) passed without horizontal overflow. Exact 320x844 preview and measurements: `reports/photography-price-heading-review/`. Queued locally.

## Follow-up: Photography mobile tagline at 320px (0.9.1 review)

“Your people. Your work. Your story.” now scales with its mobile hero column, capped at the existing 21px, and stays on one line. At 320x844 it is approximately 17.8px. Production build and eight browser width checks (320–1440px) passed without horizontal overflow. Preview and measurements: `reports/photography-tagline-review/`. Queued locally.

## Follow-up: Photography coverage heading on mobile (0.9.1 review)

“People, places, and the things you create.” uses balanced wrapping and mobile container-based sizing capped at 28px. At 320x844 it fits two lines at approximately 21.3px and naturally uses one line when space permits. Production build and eight browser width checks (320–1024px) passed with at most two lines on mobile and no horizontal overflow. Preview and measurements: `reports/photography-coverage-heading-review/`. Queued locally.

## Follow-up: Photography business card heading at 320px (0.9.1 review)

“Business & brand photos” now scales with its mobile card column, capped at the existing 21px. It fits one line at 320x844 at approximately 19.4px and returns to 21px at 360px. Production build, page lint, and eight browser width checks (320–1440px) passed without horizontal overflow. Preview and measurements: `reports/photography-business-heading-review/`. Queued locally.

## Follow-up: Photography shoot label at 320px (0.9.1 review)

“A shoot shaped around you” now scales with its mobile planning column, capped at the existing 18px, and stays on one line. Production build and eight browser width checks (320–1440px) passed without horizontal overflow. Exact 320x844 preview and measurements: `reports/photography-shoot-heading-review/`. Queued locally.

## Follow-up: Single-page website publish heading at 320px (0.9.1 review)

Extended the existing mobile publish-step treatment to Single-page Website. At 320x844, “Publish when you're ready” fits one line at approximately 18.1px; wider mobile cards retain the full wording and 21px size when they fit. Production build and seven browser width checks (320–1440px) passed without horizontal overflow. Preview and measurements: `reports/single-page-publish-review/`. Queued locally.

## Follow-up: Standard service prices stay on one line (0.9.1 review)

All seven standard service pages now use a shared StandardPrice component. It measures the actual label and price after fonts load and when the column resizes, reducing the inherited font size only when necessary. The complete label remains on one line without separate rules for each price. Website Support at 320x844 uses approximately 16.6px; labels with sufficient space retain 18px. Production build, component/page lint, and 35 browser checks across all seven prices at five widths (320–1440px), including live resizing, passed with no overflow. Preview and measurements: `reports/standard-price-review/`. Queued locally.

## Follow-up: Shared stacked text-column widths (0.9.1 review)

Replaced the three service-specific introduction overrides with a shared rule for every standard service hero at its 1050px stacking breakpoint. This also fixes Website Support, Website Transfer, Single-page Website, and Five-page Website. Removed the stacked About hero's 700px text-column cap and the Contact and generic case-header introduction caps at the same breakpoint. Website Support at 1050x768 now uses the full 970px text column. Audited core routes and exported portfolio pages for constrained text; standalone editorial sections and image sizing retain their intended widths. Production build passed. Browser checks covered 78 route/width combinations plus five explicit About column checks. The older unlinked `/work/back-to-school-ads` page has a pre-existing 6px overflow at 320px, confirmed unchanged after restoring its original text cap; affected core routes had no overflow. Preview and measurements: `reports/stacked-text-width-review/`. Queued locally.

## Follow-up: Shared stacked service heading widths (0.9.1 review)

All shared deliverables/introduction headings now use inline spans and natural wrapping when their cards stack below (up to 1050px), replacing the earlier two-service exception. This covers Support, Transfer, Single-page, Five-page, Consulting, Brand Plan, Ad Campaign, and the shared Photography section. Also removed forced span breaks and width limits on service overview headings at stacked tablet widths (701–1050px); dedicated phone heading treatments remain. “The work you need, with a clear handoff.” fits one line at 1050x768 without a font-size change. Production build and 56 route/width checks across eight services (320–1440px) passed with no horizontal overflow. Preview and measurements: `reports/stacked-heading-width-review/`. Queued locally.

## Follow-up: Website Transfer mobile CMS headings (0.9.1 review)

Applied the existing responsive CMS heading treatment to Website Transfer. “Easy updates, included” fits one line and “We build it. You can keep it up to date.” stays within two lines on mobile, including 320x844. Production build and eight browser width checks (320–1440px) passed without horizontal overflow. Preview and measurements: `reports/transfer-cms-headings-review/`. Queued locally.

## Follow-up: Website Transfer remaining-cost heading at 320px (0.9.1 review)

“What might you still pay for?” now scales with its mobile text column, capped at the existing 21px. At 320x844 it fits one line at approximately 19.7px. Production build, component lint, and seven browser width checks (320–1440px) passed without horizontal overflow. Preview and measurements: `reports/transfer-cost-heading-review/`. Queued locally.

## Follow-up: Website Transfer handoff heading on mobile (0.9.1 review)

“Your website, with access and answers.” now uses balanced wrapping and container-based mobile sizing capped at 30px. At 320x844 it fits two lines at approximately 21.9px. Production build and eight browser width checks (320–1440px) passed with at most two lines on mobile and no horizontal overflow. Preview and measurements: `reports/transfer-handoff-heading-review/`. Queued locally.

## Follow-up: Website Transfer hero image uncropped (0.9.1 review)

The transfer hero now follows the source image's 3:2 aspect ratio with automatic height and object-fit contain. Removed the rounded clipping mask so the entire artwork, including top and bottom text, remains visible at every breakpoint. Production build and twelve browser checks passed across 320–2400 CSS pixels, including actual 1920x1080 at 200% zoom (960x540 CSS). Checks confirmed matching aspect ratios, contain sizing, no rounded clipping, and no horizontal overflow. Preview and measurements: `reports/transfer-hero-image-review/`. Queued locally.

## Follow-up: Work campaign label at 320px (0.9.1 review)

“Campaigns & community” now scales with its mobile header column, capped at the existing 18px, to stay on one line. At 320x844 it is approximately 15.5px. Production build and seven browser width checks (320–1440px) passed without horizontal overflow. Preview and measurements: `reports/work-campaign-label-review/`. Queued locally.

## Follow-up: Work filter chips centered on smaller screens (0.9.1 review)

The Work filter row now uses centered flex alignment up to 900px, centering each wrapped row of chips independently. Production build and nine browser width checks (320–1440px), including both sides of the breakpoint, passed without horizontal overflow; each smaller-screen row was centered within one pixel. Exact 320x844 preview and measurements: `reports/work-filter-alignment-review/`. Queued locally.

## Follow-up: Work titles use available row width (0.9.1 review)

Removed the forced hero line break when the Work hero stacks (up to 900px), retaining a space between its sentences. Removed the Alpha Koney gallery title's mobile-only forced split so it wraps naturally at every width. At 700x1024 both titles fit one line at their unchanged font sizes. Production build, page/gallery lint, and ten browser width checks (320–1440px) passed without horizontal overflow. Previews and measurements: `reports/work-natural-heading-review/`. Queued locally.

## Follow-up: Work gallery cards show complete images (0.9.1 review)

All Work gallery card images now use object-fit contain with centered placement at every breakpoint. Removed custom crop positions, the Fetch image's 1.5x zoom, and the conditional Lakeland cover treatment. The full source artwork remains visible inside each card frame, with unused space around images whose proportions differ from the frame. Production build and gallery lint passed. Browser checks verified 20 images at ten widths (320–2400px): all loaded, contained within their frames, with no transforms or page overflow. Full 700x1024 page preview, first-card detail, and measurements: `reports/work-card-image-review/`. Queued locally.

## Correction: Work card image height follows the desktop crop (0.9.2 review)

Supersedes the earlier “show complete images” change: the goal is to fill the card horizontally and preserve at least the visible vertical fraction of the original 1920x1080 composition, not letterbox the full image. Restored the original cover/crop settings, including existing software screenshot exceptions. Frames use the desktop 353:180 ratio with a 180px minimum height. At 700px the first frame is 670x341.64 instead of 670x180; its visible vertical fraction matches the 353x180 desktop reference. Production build and gallery lint passed. Verified all 20 cards across 14 widths (280 checks), plus actual 80%, 100%, 125%, 150%, and 200% browser zoom, with no horizontal overflow. Previews and measurements: `reports/work-card-crop-correction/`. This correction is local; the existing 0.9.2 smoke dashboard still records the previously captured release until a new capture run.

## Follow-up: Included introduction mobile padding (0.9.2 review)

Restored 20px right padding to the shared deliverables introduction at widths up to 700px, matching its left padding. The Ad Campaign “What’s included” text now stays inside the colored panel on 320px screens; other service introductions receive the same correction.

Validation: production build passed. Browser checks covered all eight service routes at 320, 360, 700, 701, 1050, and 1920px (48 panels), with no text overflow and the expected right clearance. Preview: `reports/included-padding-review/ad-campaign--320.png`; measurements: `reports/included-padding-review/checks.json`. This correction remains local; the release dashboard has not been recaptured.

## Follow-up: About team heading on mobile (0.9.2 review)

Split the mobile team heading into “Different skills.” and “One shared purpose.” on separate lines. Size it against the available text column, capped at the existing 28px mobile size, to keep both phrases intact at 320px. Wider layouts retain natural wrapping.

Validation: production build and About page lint passed. Browser checks at 320, 360, 390, 479, 700, 701, 820, 900, 901, and 1920px found no heading overflow; phone layouts have exactly two lines and the stacked 701–900px layouts retain one line. Preview and measurements are in `reports/about-team-heading-review/`. Changes remain local.

## Follow-up: About consulting role heading (0.9.2 review)

Keep “Consulting & business strategy” on one line on mobile by sizing this heading against its available column width, up to its existing 18px size. At 320px it uses 15.12px while retaining the panel padding.

Validation: production build and About page lint passed. Browser checks at 320, 360, 390, 479, 700, 701, 900, and 1920px confirmed one line with no heading overflow. Preview and measurements: `reports/about-consulting-heading-review/`. Changes remain local.

## Follow-up: About offerings heading on mobile (0.9.2 review)

Set the mobile offerings heading to two lines: “From the first idea” and “to the everyday details.” Size it against the section width, capped at 28px, while retaining natural wrapping above 700px.

Validation: production build and About page lint passed. Browser checks at 320, 360, 390, 479, 700, 701, 900, 1050, and 1920px confirmed two mobile lines without overflow and one line at the tested larger widths. Preview and measurements: `reports/about-offerings-heading-review/`. Changes remain local.

## Follow-up: About advertising heading on mobile (0.9.2 review)

Keep “Advertising & campaigns” on one line through the mobile breakpoint, sizing this title against the card heading width up to its existing 20px size. At 320px it uses 17.908px with the card padding preserved.

Validation: production build and About page lint passed. Browser checks at 320, 360, 390, 479, 700, 701, 900, and 1920px found no heading overflow and confirmed one line on mobile. Preview and measurements: `reports/about-advertising-heading-review/`. Changes remain local.

## Follow-up: About website care heading (0.9.2 review)

Renamed the offering to “Website care & transfer” and applied the mobile single-line heading treatment shared with Advertising & campaigns, preserving card padding.

Validation: production build and About page lint passed. Browser checks of both headings at 320, 360, 390, 479, 700, 701, 900, and 1920px confirmed no overflow and one line on mobile. Preview and measurements: `reports/about-website-care-review/`. Changes remain local.

## Follow-up: Fetch opening heading on mobile (0.9.2 Work review)

Size “Give people a taste of what’s coming.” against its mobile text column, capped at 28px, retaining balanced natural wrapping. At 320px the heading now occupies two lines at 23.36px.

Validation: production build passed. Browser checks at 320, 360, 390, 479, 700, 701, 900, and 1920px found no heading overflow and no more than two mobile lines. Preview and measurements: `reports/fetch-opening-heading-review/`. Changes remain local; the existing Work smoke captures retain their original build.

## Follow-up: Fetch launch heading on mobile (0.9.2 Work review)

Size “Build familiarity before the first visit.” against its mobile heading column, capped at 28px, so it occupies no more than two lines. At 320px it uses 23.36px with balanced wrapping.

Validation: production build passed. Browser checks at 320, 360, 390, 479, 700, 701, 900, and 1920px found no heading overflow and no more than two mobile lines. Preview and measurements: `reports/fetch-launch-heading-review/`. Changes remain local; the existing Work smoke captures retain their original build.

## Follow-up: Fetch archive heading spacing (0.9.2 Work review)

Removed the duplicate bottom margin from mobile archive headings and used a single 24px grid gap. The space below “A historic spot, with something new on the way.” is now 24px rather than 52px; both stacked archive chapters use this spacing.

Validation: production build passed. Browser measurements at 320, 360, 479, and 700px confirmed the 24px gap; 701 and 1920px retain the existing desktop styles. Preview and measurements: `reports/fetch-archive-spacing-review/`. Changes remain local; smoke captures have not been refreshed.

## Follow-up: Fetch takeaway heading on mobile (0.9.2 Work review)

Size “Make the business easier to discover.” against the takeaway panel's available mobile content width, capped at 28px. The heading fits two lines at 320px while retaining the panel padding.

Validation: production build passed. Browser checks at 320, 360, 390, 479, 700, 701, 900, and 1920px found no heading overflow and no more than two mobile lines. Preview and measurements: `reports/fetch-takeaway-heading-review/`. Changes remain local; smoke captures have not been refreshed.

## Follow-up: Heavenly Bakes next-step heading (0.9.2 Work review)

Size “Make the next step easy to find.” against its mobile card content width, capped at 28px, to fit within two lines while retaining padding.

Validation: production build passed. Browser checks at 320, 360, 390, 479, 700, 701, 1001, and 1920px found no heading overflow and no more than two mobile lines. Preview and measurements: `reports/heavenly-identity-heading-review/`. Changes remain local; smoke captures have not been refreshed.

## Follow-up: Heavenly Bakes product heading (0.9.2 Work review)

Apply the same mobile card-heading sizing to “Let the treats make the invitation.” as the adjacent next-step heading. Both fit within two lines while retaining card padding.

Validation: production build passed. Both headings were checked at 320, 360, 390, 479, 700, 701, 1001, and 1920px with no overflow and no more than two mobile lines. Preview and measurements: `reports/heavenly-products-heading-review/`. Changes remain local; smoke captures have not been refreshed.

## Follow-up: Student art show appreciation label (0.9.2 Work review)

Keep “The 2024 appreciation day” on one mobile line with column-relative sizing capped at its existing 18px size. At 320px it uses 16.936px.

Validation: production build and archive component lint passed. Browser checks at 320, 360, 390, 479, 700, 701, and 1920px confirmed one line without overflow. Preview and measurements: `reports/student-appreciation-heading-review/`. Changes remain local; smoke captures have not been refreshed.

## Follow-up: Lakeland performer gallery (0.9.2 Work review)

Stack the three bottom performance photographs when the enclosing card is at most 900px wide. Each stacked frame uses its image's natural aspect ratio, filling the available width without cropping the performers. Wider cards retain the asymmetric collage, with focal positions corrected to keep both DJs visible. Updated image sizes for the wider stacked frames.

Validation: production build and route component lint passed. Browser checks at 320, 360, 700, 800, 801, 900, 960, 1000, 1050, 1280, 1920, and 2400px found no horizontal overflow. Mobile and desktop gallery screenshots were visually inspected; both DJs and the fire performer are visible. Preview and measurements: `reports/lakeland-performers-review/`. Changes remain local; smoke captures have not been refreshed.

## Follow-up: Malloween music heading (0.9.2 Work review)

Size “Music, games, and reasons to stay.” against its mobile text column, capped at 30px, to fit within two lines with the panel padding preserved.

Validation: production build and archive component lint passed. Browser checks at 320, 360, 390, 479, 700, 701, and 1920px found no overflow and no more than two mobile lines. Preview and measurements: `reports/malloween-music-heading-review/`. Changes remain local; smoke captures have not been refreshed.

## Follow-up: Miss Crossroads mobile heading lengths (0.9.2 Work review)

Size “Help someone picture themselves applying.” against its mobile card content width, capped at 25px, so it fits two lines at 320px with padding preserved. Audited the other section headings on this page of the same length or shorter; they already fit within two mobile lines.

Validation: production build passed. All nine section headings were measured at 320, 360, 390, 479, 700, 701, 900, and 1920px. Every heading of 41 characters or fewer fits at most two lines without overflow at the mobile widths through 700px. Preview and measurements: `reports/crossroads-heading-review/`. Changes remain local; smoke captures have not been refreshed.

## Follow-up: Serenity community support heading (0.9.2 Work review)

Use the existing mobile two-line heading treatment for “Support also means” / “showing up to help.” Desktop retains natural wrapping.

Validation: production build and archive component lint passed. Browser checks at 320, 360, 390, 479, 700, 701, and 1920px confirmed two lines without overflow. Preview and measurements: `reports/serenity-support-heading-review/`. Changes remain local; smoke captures have not been refreshed.

## Follow-up: Sisters Smoothies journey heading (0.9.2 Work review)

Removed the forced mobile break from “Show the journey behind the counter.” Size the heading to its available column with a minimum of 21.33px, four typographic points above the 16px body copy, and allow natural wrapping when it cannot fit at that minimum.

Validation: production build and archive component lint passed. Checked 12 widths from 320 to 1920px: one line at 600, 700, 701, 900, 1280, 1600, and 1920px; two lines in the narrower text columns. No overflow or font size below the minimum. Preview and measurements: `reports/sisters-journey-heading-review/`. Changes remain local; smoke captures have not been refreshed.

## Follow-up: Sisters Smoothies flavor heading (0.9.2 Work review)

Size “Make each flavor easy to recognize.” against its mobile text column, capped at 30px, to fit within two lines.

Validation: production build and archive component lint passed. Browser checks at 320, 360, 390, 479, 700, 701, and 1920px found no overflow and no more than two mobile lines. Preview and measurements: `reports/sisters-flavor-heading-review/`. Changes remain local; smoke captures have not been refreshed.

## Follow-up: Sonic listening headings (0.9.2 Work review)

Fit “Choose a tab, then shape the response.” within two mobile lines and “The listening experience” on one line using their card's available content width, preserving padding.

Validation: production build passed. Both labels were checked at 320, 360, 390, 479, 700, 701, and 1920px without overflow and with the requested mobile line limits. Preview and measurements: `reports/sonic-listening-headings-review/`. Changes remain local; smoke captures have not been refreshed.

## Follow-up: Sonic profile and audio engine headings (0.9.2 Work review)

Fit “Personal preferences” on one mobile line and both “A listening profile the user can fine-tune.” and “Different sounds need different treatment.” within two lines using the available card widths, preserving padding.

Validation: production build passed. All three labels were checked at 320, 360, 390, 479, 700, 701, and 1920px without overflow and with the requested mobile line limits. Preview and measurements: `reports/sonic-profile-headings-review/`. Changes remain local; smoke captures have not been refreshed.

## Follow-up: Work-wide vertical spacing audit (0.9.2 Work review)

Audited all 21 Work routes across the 38 smoke-test CSS viewport configurations. Corrected Team Hope's excess label/heading gaps and cramped tablet closing layout, removed duplicate margin-plus-grid spacing in shared archive stories, Fetch, Cascades, Multiverse, and Sonic, and stopped Fetch headings stretching to match adjacent text.

Validation: production build passed; 798 final layout measurements have no remaining heading-spacing flags above the 32px review threshold. All 80 actual browser-zoom checks on affected pages passed. See `docs/work-spacing-audit.md` for scope and findings, and `reports/vertical-spacing-audit/` for measurements and previews. Changes remain local; smoke captures have not been refreshed.

## Follow-up: Warden detail headings (0.9.2 Work review)

Fit “Keep the current picture” and “Notify when it matters” on one mobile line using their card content widths, capped at the existing 20px size with padding preserved.

Validation: production build and software component lint passed. Both headings were checked at 320, 360, 390, 479, 700, 701, and 1920px without overflow and with one line on mobile. Previews and measurements: `reports/warden-detail-headings-review/`. Changes remain local; smoke captures have not been refreshed.

## Follow-up: Warden production label (0.9.2 Work review)

Keep “Production and beta” where its label column exceeds 250px; use “Production & beta” in narrower columns with slight font fitting when needed. Reset inherited decorative span margins so both variants align with the label and stay on one line.

Validation: production build and software component lint passed. Checked 320, 348, 349, 360, 390, 700, 701, 900, 1280, and 1920px, including both sides of the wording switch, with one line and no overflow. Preview and measurements: `reports/warden-production-heading-review/`. Changes remain local; smoke captures have not been refreshed.

## Follow-up: Shared Featured Partners layout (0.9.0 review)

The first review's partner-heading correction was incorrectly scoped to Contact. The same rule now applies to the shared `.partners` section on both Home and Contact: through 1050px, the heading spans its own centered row, its forced break is hidden, and the first logo's mint divider is removed. Shared horizontal padding is removed to keep the heading on one line at narrow phone widths. Contact retains its page-specific full-width section rule; wider desktop layouts retain their existing arrangement.

Production build passed. Both consumers were verified across the full 38-case viewport/zoom matrix (76 checks), with zero heading wrapping, centering, placement, overflow, or leading-divider failures in the stacked layouts. Visually reviewed Home at 701px. Updated preview: `reports/shared-partners-review/home-partners--701.jpg`. The user requested this batch be finalized with version 0.9.1 and a replacement smoke review at `reports/smoke-review-0.9.1/index.html`; older smoke-review sets are superseded and removed after replacement validation.

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
