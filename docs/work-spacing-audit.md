# Work vertical spacing audit

Scope: Work and all 20 linked project pages, using all 38 CSS viewport sizes from the current smoke matrix (798 layouts). Separately verified the ten affected project pages at eight actual browser-zoom configurations (80 checks).

Changes:

- Team Hope: keep labels beside their headings vertically, use a 12px gap in the closing block, and stack that block through 1050px so the paragraph is not squeezed into a narrow column. Desktop columns can shrink without the heading forcing an oversized first column.
- Shared archive stories: remove heading bottom margins where the stacked grid already supplies spacing. This affects Alpha Koney, Student Art Show, Malloween, Serenity, and Sisters Smoothies.
- Fetch: remove the duplicate closing-heading margin and prevent archive headings from stretching to match the adjacent paragraphs.
- Cascades, Multiverse, and Sonic: remove heading margins that added to the gap before stacked body copy.

Validation: production build passed. The final 798-layout measurement pass found no remaining heading-adjacent gaps or empty heading-box space above the audit's 32px review threshold. This is a targeted spacing check, not a claim that every intentional section boundary should be 32px or less. All 80 actual zoom checks passed, including page overflow and Team Hope label-to-heading spacing. Team Hope screenshots were inspected at mobile and tablet widths; focused previews cover the other shared spacing fixes.

Measurements and previews: `reports/vertical-spacing-audit/`. Repeat the measurement pass with `node scripts/smoke/audit-spacing.cjs` while the static build is served at port 8766; set `AUDIT_PHASE` to choose the output prefix. The script uses the current Work smoke manifest's routes and CSS viewport matrix.

Changes remain local. The existing smoke review images were not overwritten, so their build references and review notes remain accurate.
