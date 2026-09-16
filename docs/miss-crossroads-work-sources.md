# Miss Crossroads & Teen case study

Reviewed 2026-09-16 against the user's new artwork, Whimsy's local Facebook export, both archive catalog copies, and online program information.

## New advertising supplied by the user

All three files from `public/miss crossroads.zip` are copied unchanged into `public/work/miss-crossroads/`. Each appears once on the detail page, uncropped and linked to its original-size file.

| Original file | Published file | Dimensions | Content |
| --- | --- | --- | --- |
| `signal-2026-09-01-13-22-48-170.jpg` | `applications-open.jpg` | 1545 × 1999 | Black-and-gold recruitment advertisement with titleholder portraits, an application QR code, September 20 deadline, November 15, 2026 competition date, and Jackson Crossing partnership recognition. |
| `signal-2026-09-01-14-30-57-184.png` | `application-guide.png` | 1236 × 1600 | Program explanation, county eligibility, divisions, and application information. |
| `signal-2026-09-01-14-30-57-184-1.png` | `community-ambassador.png` | 1236 × 1600 | Program explanation and examples of community-ambassador involvement. |

The artwork carries Whimsy's mark. The case-study text describes the creative, its communication choices, and its practical value. It does not claim applicant totals, scholarships raised, or measurable recruitment results. The images give slightly different summaries of teen eligibility; the page does not restate age rules or present the artwork as an up-to-date registration guide.

## Archive search and community photography

Searched captions, descriptions, and OCR in both `archive/deliverables/whimsy_context_catalog/inventory.csv` and the matching catalog under `archive/Whimsy_Context_CatalogX/`. Also searched all JSON records in `archive/facebook-Experiencewhimsy-2026-08-08-Em8tGZD4.zip`, including posts, albums, uncategorized photos, and video records, for Crossroads spelling variants, Miss Jackson, scholarship, and pageant references.

The confirmed Miss Crossroads photo set is Whimsy's **June 13, 2026, 4:05 PM EDT** four-photo post (timestamp `1781381135`). Its caption thanks Miss Crossroads and Teen for coming to Jackson Crossing and supporting the community event. All four originals were visually checked and copied unchanged from the catalog's `media/` directory:

| Archive image | Published file | Dimensions | Visible content |
| --- | --- | --- | --- |
| `1436086908545589.jpg` | `community-carousel.jpg` | 2048 × 1536 | Both titleholders beside the carousel. Also used as the Work-gallery thumbnail; the detail-page hero is a different image. |
| `1436089745211972.jpg` | `sisters-smoothies-visit.jpg` | 1536 × 2048 | Both titleholders holding Sisters Smoothies drinks. |
| `1436089791878634.jpg` | `alpha-koney-visit.jpg` | 2048 × 1536 | Both titleholders at an Alpha Koney Island booth. |
| `1436089858545294.jpg` | `humane-society-visit.jpg` | 1536 × 2048 | Both titleholders meeting a cat at the humane society's mall location. |

The visit is presented as June 2026 community coverage, separate from the newer application campaign. The page does not name people from their appearances, claim that Whimsy ran the scholarship competition, or invent activities beyond the source material.

No further confirmed Miss Crossroads photo or video set was found. The old generic `miss-crossroads-visit` entry used `894475189373433.jpg`; visual inspection and its August 6, 2024 Facebook post identify that file as a Jackson County Fair admission advertisement. It is not included. The Rose Queen poster belongs to a different program and is also excluded.

## Online background

- [Miss Michigan — Local Competitions](https://missmichigan.org/local-competitions.php): lists both Miss Crossroads and Miss Crossroads' Teen, with November 15, 2026 as the competition date and links to the program's social pages. Supports its place in the Michigan scholarship-program network and corroborates the date printed on the new recruitment ad.
- [JTV — Events of December 5, 6, and 7, 2025](https://jtv.tv/events-of-december-5-6-and-7-2025/): describes the program's expansion from Miss Jackson Crossroads to Jackson, Ingham, and Hillsdale counties; its Miss America affiliation; and its education, community-service, and personal-development purpose. The page links to this source beside the short program background. The older event's date, prices, venue, and outgoing titleholders are not attached to the 2026 campaign.
- The Facebook address printed on the artwork, `https://www.facebook.com/MissJacksonCrossroads/`, did not expose usable page content during research. It was not treated as independently verified current application guidance.

## Presentation and replacement

The page at `/work/miss-crossroads` replaces Rose Parade in the selected Community Events category. The existing generic Miss Crossroads visit route is consolidated into it. The shared centered project header, purple All work link, and campaign call to action remain in place.

The black, gold, and cream palette follows the ads, with a light-purple companion card and value section. The two explanatory ad cards have equal desktop heights; the two landscape photos share an image height, as do the two portrait photos. All seven originals appear once per detail page without image cropping, and the mobile layout stacks.

Clean, trailing-slash, and `.html` URLs for `jackson-county-rose-parade`, `miss-crossroads-visit`, and the earlier `community-day` route point directly to `/work/miss-crossroads` with 301 rules in `public/_redirects`. This follows the [Cloudflare Pages redirects format](https://developers.cloudflare.com/pages/configuration/redirects/). The superseded routes are removed from generated static parameters, and the earlier Rose Parade source notes remain for historical reference.
