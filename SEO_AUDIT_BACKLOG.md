# Sitewide SEO Backlog — Stellar Global Supplies

Last reviewed: 2026-11-27

This is the persistent sitewide backlog. Do not close items until the code change is merged and the live site is checked. Work on feature branches; never push directly to main. Blog cadence is Monday, Thursday and Saturday; on other days optimize existing pages and technical SEO.

## Search Console baseline

- Property: `sc-domain:stellarglobalsupplies.com`
- Web search window: 2026-10-30 through 2026-11-24 (Search Console data lag applies).
- 26 clicks, 937 impressions, 2.77% CTR, average position 7.81.
- Previous-period comparison is unavailable on the connected plan. Query opportunities with at least 40 impressions and average position 4–20 returned no rows; page opportunities are still available.
- Main sitemap in Search Console: 43 submitted URLs, zero reported errors. Live SEO audit sitemap: 47 URLs. Static source sitemap had 47 entries before this PR; one entry for a nonexistent MS Flats article is removed here, leaving 46. Investigate the generated/live sitemap mismatch after preview/deploy.
- Search Console also shows a separate `stellarforge.stellarglobalsupplies.com/sitemap.xml` pending with 1 error and 7 submitted URLs. It is outside this website/repository scope.
- GA4 conversion-quality reporting remains a prior backlog item; connection was previously reported unavailable and was not rechecked this run.

## P0/P1 — Indexing, canonical and rich-result integrity

- [x] PR #20 merged on 2026-11-26. Homepage title/content, unsupported claims, canonical metadata, trailing-slash internal links, sitemap configuration, internal-only `llms.txt`, contact/link policy and other sitewide SEO changes are now in main. Production homepage audit confirms the new title/description, 200 status, indexability and non-www canonical.
- [x] **P1 — Rich-result markup correction:** PR #21 merged. Shared product pages now use WebPage/about Thing + BreadcrumbList; homepage and promotional-products ItemLists use Thing, promotional cards link to detail pages, and FAQPage markup was removed while visible FAQs remain. Cloudflare Preview for the exact merge commit was successful and audited. **[ ] Recheck GSC rich-result verdicts after production deployment**; current live site still serves old Product markup.
- [x] **P1 — Sitemap 404 source fix:** `/blog/ms-flats-supplier-in-pune-b2b-industrial-supply-41f924/` is absent from the merged static sitemap and has no content file. Live production still returns 404 until the deployment is live; **[ ] confirm the URL is no longer submitted in the live sitemap** after deployment. No off-cadence blog was created.
- [ ] **P1 — Blog index discovery:** `/blog/` returns 200, is indexable and self-canonical in the live audit, but URL Inspection says “URL is unknown to Google” and shows no sitemap/referring URLs. It is listed in the site sitemap. The available Search Console tools inspect URLs but cannot request indexing; request indexing manually after the approved deployment and verify discovery.
- [ ] **P1 — Host normalization:** the audit crawled `www` URLs and found 24 canonical-to-non-www findings in its sample. Non-www pages are self-canonical, and URL Inspection selects non-www for the homepage. The live `www` host is still served (audit final URL stays www; `public/_redirects` has no host rule). Configure/verify a Cloudflare host redirect to non-www. This is blocked from this automation because Cloudflare account rules are not accessible here; do not edit deployment/workflow settings.
- [x] Static sitemap source validation: 46 unique URLs, all same-domain, trailing-slash normalized, and every URL maps to an existing app route or blog content file.
- [ ] **P1 — Sitemap consistency:** static source has 46 URLs; current live audit still reports 47 and GSC lists 43 submitted. The merged code is not yet reflected on production; reconcile the live/generated sitemap after deployment.

## P1 — GSC page opportunities to refresh

Prioritize metadata/content refresh on these pages; values are clicks / impressions / CTR / average position for the reporting window:

- [ ] Homepage: 14 / 190 / 7.37% / 6.70. Current live title and description are concise; continue improving category relevance and snippet CTR.
- [ ] SS Sheets: 2 / 96 / 2.08% / 7.90. Current description includes listed grades, finishes and cut-to-size; refresh buyer-intent copy and add useful internal links if needed.
- [ ] Allen Bolts: 1 / 74 / 1.35% / 7.73. Refresh title/snippet and specification-focused copy.
- [ ] MS Nylock Nut: 1 / 53 / 1.89% / 7.58.
- [ ] MS Sheet: 0 / 52 / 0% / 8.13.
- [ ] External Circlip: 1 / 45 / 2.22% / 13.58.
- [ ] External Circlip DIN 471: 0 / 43 / 0% / 5.26.
- [ ] Internal Circlips DIN 472: 0 / 41 / 0% / 9.76.
- [ ] MS Flats: 0 / 41 / 0% / 8.59.
- [ ] Review lower-volume queries for topic fit as more data accumulates; no query met the current 40-impression opportunities threshold.

## P2 — Crawl, UX, speed and content quality

- [ ] Complete the site audit: current whole-site crawl read 25 of 47 sitemap URLs. Continue by auditing pages outside the sample and validate all routes, status codes, titles, descriptions, headings, canonical tags, internal links and sitemap membership.
- [ ] Image dimensions: audit reports 24 images without width/height in the sample; all sampled images have alt text. Many are Next.js `Image fill` inside fixed/aspect-ratio containers. Validate CLS/Core Web Vitals before changing image layout. Speed/Core Web Vitals could not be measured by this audit.
- [ ] Broken-link finding `/cdn-cgi/l/email/protection` is a Cloudflare email-obfuscation scanner false positive. Keep the business email CTA; verify actual browser behavior after deployment.
- [ ] Recheck live robots/crawler directives: repository `public/robots.txt` is generic Allow, while prior live checks reported host-managed rules that block GPTBot/ClaudeBot but allow OAI-SearchBot/PerplexityBot. Confirm Cloudflare/host rules; do not change crawler permissions without authorization.
- [x] Audited all 9 existing blog Markdown files for required frontmatter, tables and link policy. No frontmatter gaps or tables; no disallowed outbound links after PR #21 removed two external references from the MS-vs-SS article and normalized its internal product links.
- [x] Add direct trailing-slash product-detail links to the five featured promotional-products cards in PR #21.
- [ ] Add relevant contextual product-page internal links to older blog posts that currently have none; keep anchors useful and paths direct/trailing-slash.
- [ ] Review internal navigation and related-product links for direct trailing-slash routes, useful relevance and no broken/redirecting paths.
- [ ] Keep old/duplicate blog drafts closed until rewritten as genuinely distinct topics with complete frontmatter and verified catalogue facts. No duplicate NYLOCK or MS Angles buyer guide.

## P3 — Structured data and AI-search readiness

- [ ] Organization/WebSite schema sitewide and LocalBusiness homepage-only remain accurate and consistent with visible contact details.
- [ ] Breadcrumbs use canonical same-domain URLs and direct trailing-slash paths.
- [ ] Visible FAQ content remains useful; FAQPage no longer has Google FAQ rich-result eligibility. Do not add markup solely to chase a retired result.
- [ ] Add genuine reviews only with permission and evidence; never fabricate ratings.
- [ ] Add original business metrics only after the owner supplies verifiable figures.
- [ ] Do not publish pricing/stock claims or external comparison/citation links. Quote-request content is appropriate until verified price/stock data exists.

## Completed this run — PR #21 merged

- Replaced incomplete Product rich-result markup with WebPage/about Thing and BreadcrumbList on shared product templates; removed Product nodes from the homepage and promotional-products lists and retired FAQPage schema. Visible specs/FAQs remain.
- Added five direct product-detail links on promotional cards and changed promotional-page title copy to featured-product wording.
- Shortened promotional-product title metadata and the MS-vs-SS blog SEO title.
- Corrected blog article `mainEntityOfPage` to the non-www trailing-slash canonical.
- Removed the stale MS Flats blog URL from the static sitemap.
- Removed two external references from MS-vs-SS article; normalized its internal links.
- Removed unused Google Fonts preconnects and obsolete/redundant head metadata.
- Replaced unsupported homepage catalogue claims with specification/quotation-first wording.

## Merge and preview QA

- PR #21 merged by squash on 2026-11-27. Merge commit: `2fdb5964b33afedc65bdb929ab25b673235acfb2`.
- Cloudflare Preview succeeded for the exact merge commit; homepage, SS Sheets, promotional products and MS-vs-SS blog preview pages returned 200. Product pages now emit WebPage/BreadcrumbList; catalogue pages emit ItemList without Product nodes. Preview noindex/canonical-to-production behavior is expected.
- CodeQL and Analyze passed on the merge commit. CodeRabbit was skipped (repository requires manual review); changes were manually reviewed.
- Local build/lint/test could not be run because network access blocked repository cloning/dependency install; Cloudflare Preview build passed.
- **Production is not yet verified:** current live audit still serves the old promotional title, Product schema on product pages, 68-character circlip title, old MS-vs-SS title and the stale MS Flats 404. Recheck after deployment; do not claim production success yet.

## Link, format and deployment policy

- Blogs, reports, PR descriptions and website content use headings, paragraphs and bullets only; no Markdown tables.
- No outbound links in blog/site content, including external citations, sources, further reading or external CTAs.
- Internal Stellar Global Supplies URLs and approved verified email/phone/WhatsApp contact destinations only.
- Commit only on feature branches. PRs should be ready for review when checks are ready.
- Merge only after the exact PR commit's Cloudflare Pages Preview is completed successfully and verified, all required checks pass, conflicts/high-risk issues are clear, link policy is verified, and the previewed SHA matches the PR head. Squash merge when supported. Verify production separately; never claim production is deployed without evidence.
