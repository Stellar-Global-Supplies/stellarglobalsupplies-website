# Sitewide SEO Backlog — Stellar Global Supplies

Last reviewed: 2026-11-28

This is the persistent sitewide backlog. Do not close items until the code change is merged and the live site is checked. Work on feature branches; never push directly to main. Blog cadence is Monday, Thursday and Saturday; on other days optimize existing pages and technical SEO.

## Search Console baseline

- Property: `sc-domain:stellarglobalsupplies.com`; Web search only.
- Latest reliable 7-day window: 2026-11-18 through 2026-11-24. 9 clicks, 312 impressions, 2.88% CTR, average position 7.47.
- Previous 7 days (2026-11-11–2026-11-17): 10 clicks, 271 impressions, 3.69% CTR, average position 7.10. Changes: clicks -10.0%, impressions +15.1%, CTR -0.81 percentage points, average position worsened by 0.37.
- Last 28 available days (2026-10-29–2026-11-24): 26 clicks, 973 impressions, 2.67% CTR, average position 7.66. The connected plan does not provide 28-day comparison history.
- Query opportunities with at least 20 impressions and position 4–20 returned no rows. Page opportunities returned 15 pages.
- Main submitted sitemap: 43 URLs, zero errors; last downloaded 2026-11-21. Live SEO audit and static source sitemap each report 46 URLs. Search Console's sitemap download date is stale; recheck after Google fetches the current sitemap.
- Search Console's domain property also includes `stellarforge.stellarglobalsupplies.com`, a separate subdomain with a pending sitemap (7 URLs, 1 error). Exclude those pages from this website's organic reporting where possible.
- GA4 conversion-quality reporting remains unavailable/not rechecked; do not include GA4 metrics.

## P0/P1 — Indexing, canonical and rich-result integrity

- [x] PR #21 schema/crawl/internal-link fixes merged; PR #22 backlog update merged. Production was rechecked on 2026-11-28: the non-www homepage, SS Sheets, promotional products and blog index serve the updated title, canonical and structured data. Homepage is indexed and Google crawled it on 2026-11-27.
- [x] **P1 — Product rich-result markup correction:** Product templates now use WebPage/about Thing + BreadcrumbList; homepage/promotional lists use ItemList without Product nodes. Production audits confirm this is live. Google URL Inspection for SS Sheets is stale (last crawl 2026-11-15) and still reports Product snippets/Merchant listings FAIL from the previous markup; request/recheck after Google recrawls.
- [x] **P1 — Sitemap 404 source cleanup:** stale MS Flats blog URL removed from the static source; current static sitemap contains 46 unique URLs and the live SEO audit reports 46. Direct fetch of live sitemap XML is unavailable in the audit/browser tools, so exact URL-removal verification remains pending.
- [ ] **P1 — Blog index discovery:** `/blog/` returns 200, is indexable and self-canonical, appears in the 46-URL sitemap and has internal links, but URL Inspection says “URL is unknown to Google” with no indexed crawl/referring URLs. Request indexing manually in Search Console; the connected tools cannot submit that request.
- [ ] **P1 — Host normalization:** 24 sampled www URLs canonicalize to non-www but the www host still responds without a redirect (the repository `public/_redirects` contains no host rule). This also explains the 24 “not in sitemap” audit findings: the sitemap uses non-www canonical URLs. Configure/verify a Cloudflare host redirect to non-www. Blocked here because Cloudflare account/rules access is unavailable; do not edit deployment/workflow settings.
- [ ] **P1 — Sitemap/Search Console consistency:** source and live audit each show 46 URLs, while Search Console lists 43 and last downloaded 2026-11-21. Submit/refresh the sitemap in Search Console manually if necessary, then verify download count and errors after Google fetches it.

## P1 — GSC page opportunities to refresh

Last 28 available days (2026-10-29–2026-11-24), clicks / impressions / CTR / average position. Prioritize snippet clarity and useful specification content; do not create near-duplicate pages.

- [ ] Homepage: 14 / 202 / 6.93% / 6.45. Production title and description are concise; keep strengthening catalogue/category relevance.
- [ ] SS Sheets: 2 / 98 / 2.04% / 7.80. Refresh buyer-intent snippet and contextual product links.
- [ ] Allen Bolts: 1 / 75 / 1.33% / 7.64. Saturday blog draft created to support this page; optimize page snippet and product content next.
- [ ] MS Nylock Nut: 1 / 53 / 1.89% / 7.58.
- [ ] MS Sheet: 0 / 52 / 0% / 8.13.
- [ ] External Circlip DIN 471: 0 / 45 / 0% / 5.07.
- [ ] External Circlip: 1 / 45 / 2.22% / 13.58.
- [ ] Internal Circlips DIN 472: 0 / 43 / 0% / 9.35.
- [ ] MS Flats: 0 / 41 / 0% / 8.59.
- [ ] SS Round Bars: 0 / 37 / 0% / 9.32.
- [ ] Nordlock Washers: 1 / 32 / 3.12% / 4.72.
- [ ] Nylock Nuts: 1 / 24 / 4.17% / 5.54.
- [ ] Hex Bolts: 0 / 23 / 0% / 15.22.
- [ ] T-Nuts: 0 / 23 / 0% / 9.57.
- [ ] MS Round Pipes: 0 / 20 / 0% / 7.50.
- [ ] Mobile CTR: 0 clicks / 133 impressions in the latest 7-day window. Review mobile snippets and usability; desktop had 9 clicks / 179 impressions.

## P2 — Crawl, UX, speed and content quality

- [ ] Continue sitewide crawl: 25 of 46 sitemap URLs read this run; sample pages all returned 200, all sampled images had alt text, and 70 of 79 internal links were checked. Complete remaining URLs and inspect route statuses, titles, descriptions, headings, canonical, sitemap membership and links.
- [ ] Image dimensions: scanner flagged 24 sampled images for explicit width/height. Shared components use Next Image `fill` in fixed-height/aspect-ratio containers (hero, product cards, blog cards), which reserve layout space. Treat as heuristic/false-positive until CLS data or a layout shift is observed; do not blindly add width/height or break responsive image layouts. Core Web Vitals were not measured.
- [ ] Broken-link scanner's `/cdn-cgi/l/email/protection` 404 is Cloudflare email-obfuscation false positive linked from 3 pages; keep approved email CTA and verify browser behavior.
- [ ] Verify host-managed robots/crawler rules. Repository `public/robots.txt` is generic Allow; earlier live checks reported host rules blocking some AI crawlers while allowing OAI-SearchBot/PerplexityBot. Cloudflare rules are not accessible here; don't change permissions without authorization.
- [ ] Review older blog posts for useful contextual internal links to actual catalogue pages, direct trailing-slash URLs and no external citations. The new Allen/Hex draft adds internal links to its matching products.
- [ ] Recheck navigation and related-product links across the catalogue; the shared product template already renders related-product cards, so avoid duplicating that section.
- [ ] Keep old/duplicate blog drafts closed until rewritten into genuinely distinct buyer-intent topics with complete frontmatter and verified catalogue facts. No duplicate NYLOCK or MS Angles buyer guide.
- [x] Saturday cadence: create product-led buyer guide draft for Allen Bolts vs Hex Bolts using catalogue standards, size ranges, listed grades/materials and finishes. Internal product links only; no external references. Included in the PR/sitemap for preview review.

## P3 — Structured data and AI-search readiness

- [x] Production audits confirm Organization/WebSite schema on homepage and shared site metadata; homepage/promotional products use ItemList, product page uses WebPage/BreadcrumbList, and blog index uses Blog. These types reflect the current production implementation.
- [ ] Continue validating breadcrumbs against canonical same-domain URLs and direct trailing-slash paths as remaining pages are sampled.
- [ ] Visible FAQs remain useful; FAQPage markup is not eligible for the retired Google FAQ rich-result feature. Do not add markup solely to chase a retired result.
- [ ] Add genuine reviews only with permission/evidence; never fabricate ratings.
- [ ] Add original business metrics only after owner supplies verifiable figures.
- [ ] Do not publish pricing/stock/delivery promises or external comparison/citation links. Use quotation CTAs until verified data exists.

## Completed work through PR #21 and #22

- PR #21 sitewide schema/crawl/content fixes and PR #22 backlog status update were merged. PR #22 is closed/merged, not an open PR.
- Production verification (2026-11-28): homepage title `Industrial Steel & Fasteners Supplier in Pune`, 160-character description, canonical, indexability, 916 words and Organization/WebSite/ItemList schema. SS Sheets title/description/canonical, 360 words and WebPage/BreadcrumbList. Promotional products title/description/canonical, 607 words and ItemList. Blog index title/description/canonical, 468 words and Blog schema. All sampled routes 200; no high/medium audit findings on these four pages.
- PR #21 merged on 2026-11-27: Product rich-result schema corrected, promo links added, stale blog URL removed from source, external references removed from MS-vs-SS article, title metadata shortened, unused preconnects removed and unsupported homepage claims replaced.
- Saturday 2026-11-28: new Allen Bolts vs Hex Bolts buyer-intent blog draft prepared from catalogue pages and added to static sitemap (subject to PR preview and merge gate).

## Merge and preview QA

- PR #21 merged by squash; exact merge commit `2fdb5964b33afedc65bdb929ab25b673235acfb2`. Cloudflare Preview for that exact commit, CodeQL and Analyze passed. CodeRabbit skipped (manual review required); reviewed manually.
- PR #22 backlog update merged on 2026-11-27.
- Production deployment is now **verified live** on 2026-11-28 through live SEO audits of the homepage, SS Sheets, promotional-products page and blog index. This is separate from the successful PR Preview.
- Local build/lint/test remain unavailable because network access blocked cloning/dependency installation; Cloudflare Preview build passed on PR #21.
- PR #21: https://github.com/Stellar-Global-Supplies/stellarglobalsupplies-website/pull/21
- PR #22: https://github.com/Stellar-Global-Supplies/stellarglobalsupplies-website/pull/22
- Remaining blockers: Cloudflare host redirect access; manual Search Console indexing/sitemap refresh; Google recrawl for SS Sheets rich-result status; full audit beyond the 25-page sample.

## Link, format and deployment policy

- Blogs, reports, PR descriptions and website content use headings, paragraphs and bullets only; no Markdown tables.
- No outbound links in blog/site content, including external citations, sources, further reading or external CTAs.
- Internal Stellar Global Supplies URLs and approved verified email/phone/WhatsApp contact destinations only.
- Commit only on feature branches. PRs should be ready for review when checks are ready.
- Merge only after the exact PR commit's Cloudflare Pages Preview is completed successfully and verified, all required checks pass, conflicts/high-risk issues are clear, link policy is verified, and the previewed SHA matches the PR head. Squash merge when supported. Verify production separately; never claim production is deployed without evidence.
