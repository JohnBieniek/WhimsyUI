# Work visual review

Run `npm run smoke` to build the current site, capture Work and every project linked from its gallery, and generate and validate the review. Requires Playwright Chromium.

Open `reports/smoke-review-work/index.html` in Chrome or Edge. No server is required. Keep the adjacent `images/` directory. The dashboard shows one capture at a time with no baseline or comparison.

Choose a project from the searchable left sidebar. Switch screen sizes using the size buttons or Alt+Left/Right. Alt+Up/Down switches pages while retaining the selected size when available. Filter to phones, tablets, desktops, or browser zoom. Fit width displays narrow captures without enlarging them; Actual pixels allows horizontal scrolling for wide screenshots. Keep position preserves relative page depth when switching sizes.

Use **Approve & next**, or **Flag & add note**. Each capture starts unreviewed. Review status filters and per-page counts track progress. Open Notes and capture reference to copy a report. Notes and decisions save in browser storage; export JSON to back them up or share them. Import validates the exact captured build.

The matrix uses 30 viewport widths and actual browser zoom at 80%, 125%, 150%, and 200% for 1440x1050 and 1920x1080: 38 captures per page. The current gallery has 20 projects plus Work, totaling 798 captures. Routes are discovered from the freshly built Work page, so other site sections and unlinked project pages are excluded.

Captures identify the base Git commit, whether there are local source changes, and a fingerprint of the built HTML/CSS/JS. Local fixes are included without falsely labeling the build as the clean base commit. Interrupted runs resume only for a matching built source and route list. For a changed build, use a fresh output folder with `SMOKE_REVIEW_ROOT`, or remove the prior review after exporting any notes you want to retain.

To regenerate only the dashboard, run `node scripts/smoke/build-dashboard.cjs`. Validate with `node scripts/smoke/check.cjs`. Both default to the Work review folder and accept `SMOKE_REVIEW_ROOT`.

Automated checks cover full-page image dimensions, actual zoom, page and heading overflow, broken images, and dashboard interactions. Capture warnings appear beside the screenshot; visual review remains necessary. Generated reviews stay local and are excluded from Git.
