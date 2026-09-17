# Local visual review

Run `npm run smoke` to build the site, capture the full review matrix, generate the dashboard, and validate it. Requires the Playwright Chromium browser (`npx playwright install chromium` on a new machine).

The review lives at `reports/smoke-review-<version>/index.html`. Open it directly in Chrome or Edge. Generated screenshots stay local and are excluded from Git; the repeatable capture and dashboard tooling is committed under `scripts/smoke/`.

The matrix covers 33 active routes, 30 viewport widths, and actual 80%, 125%, 150%, and 200% browser zoom at 1440×1050 and 1920×1080: 1,254 captures. Capture records include source commit, app version, browser version, viewport, CSS size, image dimensions, timestamp, and automated warnings. Use a committed, freshly built source tree for an authoritative review. Interrupted captures resume for the same site source fingerprint, allowing later documentation/tooling-only commits while retaining the original capture commit.

To compare with an earlier review in PowerShell:

```powershell
$env:SMOKE_BASELINE_ROOT = 'reports/smoke-review-0.9.1'
npm.cmd run smoke
```

The builder retains baseline images inside the new review using hard links when possible, falling back to copies. Deleting the old review folder afterward does not remove those baseline images. It never deletes an old review automatically.

The issue queue groups related fixes across pages and sizes. **Fixed** means implemented and ready for human review; it does not mean visually approved. Each issue and each capture has a separate pending/fixed/approved decision. Notes are per capture. Filter by page, width, zoom, or capture status; use Alt+Left/Right to move through captures. Copy reference includes the capture note.

Before/current comparison has optional synchronized scrolling. Difference view blends images aligned at the page top; changed heights, layout reflow, and rendering differences also appear. It is a visual aid, not a pixel-perfect acceptance test.

Decisions and notes stay in browser storage. **Export review notes** backs them up as JSON; imports validate the version and source commit. Export before changing browsers or deleting a review. Nothing is sent to an external service.

To rebuild the dashboard without recapturing, set `SMOKE_REVIEW_ROOT` and run `node scripts/smoke/build-dashboard.cjs`. Set `SMOKE_BASELINE_ROOT` only when importing an earlier baseline. To validate an existing review, run `node scripts/smoke/check.cjs` with the same `SMOKE_REVIEW_ROOT`.
