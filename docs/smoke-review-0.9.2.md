# Smoke review 0.9.2

Release source: `cc69698140fada47f6dce124fb0d39009e2abc94`.

The full active-page smoke matrix was regenerated after the responsive fixes: **1,254 full-page captures, 33 routes, zero automated warnings**. It includes 30 viewport widths at 100% and actual 80%, 125%, 150%, and 200% browser zoom at 1440×1050 and 1920×1080.

Open `reports/smoke-review-0.9.2/index.html` for the new local dashboard. It has 16 grouped review issues, page/width/zoom filters, before/current comparison, synchronized scrolling, a difference overlay, independent issue/capture decisions, notes, and JSON export/import. The 0.9.1 comparison images are retained inside the new review's `baseline/` directory. The old `reports/smoke-review-0.9.1` directory has been deleted.

Validation covered capture completeness and dimensions, all baseline files, dashboard filtering, scrolling, comparison modes, browser-storage persistence, export/import validation, issue decisions, empty filter results, and mobile dashboard width. The production build and all six existing unit tests passed. Human visual approval remains pending; issue groups marked fixed are ready for review.

Screenshots and review state remain local rather than being deployed with the website. Repeatable capture/dashboard tooling is committed under `scripts/smoke/`; see [visual-review.md](visual-review.md) for reruns and note backups.
