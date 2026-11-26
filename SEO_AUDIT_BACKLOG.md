# Sitewide SEO Backlog — Stellar Global Supplies

Last reviewed: 2026-11-26\n\nChanges below are committed on a draft feature branch but are not live. Keep checkboxes open until PRs merge and the deployed site is verified.

## Baseline from Search Console

- Property: `sc-domain:stellarglobalsupplies.com`
- Reporting window: 2026-10-27 through 2026-11-23 (Search Console lag is expected)
- Organic web: 25 clicks, 987 impressions, 2.53% CTR, average position 7.61
- Previous-period comparison unavailable on the connected free plan.
- GA4 is not connected; traffic quality and conversion analysis are blocked until it is connected.
- Main sitemap: 43 submitted URLs, zero reported errors. A separate `stellarforge.stellarglobalsupplies.com` sitemap reports one error and is outside this domain's current repository scope.

## Priority backlog

### P1 — Sitewide crawl/index and metadata

- [ ] Homepage SEO title and description rewritten to remove unsupported superlatives, business-count claims and certification wording.
- [ ] Product-page metadata helper shortened to consistent supplier-intent titles; canonical URLs normalized to trailing slash.
- [ ] Promotional-products page metadata and visible claims revised to quote-based, specification-first wording.
- [ ] Blog index and article canonical/OG URLs changed from www to the non-www canonical host.
- [ ] Blog internal links normalized to trailing-slash routes.
- [ ] Static sitemap and next-sitemap configuration normalized to trailing-slash URLs; add published/new product-led blogs (review PR before merge).
- [ ] Blog schema image paths made absolute in blog index/article metadata and structured data.
- [ ] Remove Product Offer schema that claimed `InStock` without verified stock and had no price. Product specs are represented as properties instead.
- [ ] Move LocalBusiness markup off the global layout to the homepage where address/phone are visible; include existing geo coordinates.
- [ ] Add `public/llms.txt` with internal-only product/page links.
- [ ] Blog renderer whitelists only same-domain links and approved business contact destinations (WhatsApp/email/phone); other outbound Markdown links are rendered as text.
- [ ] Review all 43 sitemap URLs, then continue auditing any pages outside the 25-page crawl sample.
- [ ] Recheck URL Inspection and rich results after approved deployment; do not add prices or stock claims without verified data.

### P1 — Search performance opportunities

- [ ] Homepage: 195 impressions, 12 clicks, 6.15% CTR, average position 6.95 (period above). Continue improving its snippet and product-category relevance.
- [ ] SS Sheets: 97 impressions, 2 clicks, 2.06% CTR, position 7.97. Review query-specific snippet and content.
- [ ] MS Galvanised Sheets: 93 impressions, 1 click, 1.08% CTR, position 3.82. Improve title/description relevance while keeping specs factual.
- [ ] MS Chequered Plate: 91 impressions, 1 click, 1.10% CTR, position 3.47. Product page and buyer guide now targeted for review.
- [ ] Allen Bolts: 77 impressions, 1 click, 1.30% CTR, position 7.45.
- [ ] MS Sheet: 55 impressions, 1 click, 1.82% CTR, position 8.18.
- [ ] SS Round Bars: 41 impressions, 2 clicks, 4.88% CTR, position 9.98.
- [ ] No query met the configured 20-impression striking-distance threshold in this period; investigate low-volume query/page pairs as data accumulates.

### P2 — Technical and content quality

- [ ] Crawl all remaining site pages; current SEO audit sample is 25 of 43 sitemap URLs, not a full crawl.
- [ ] Audit image dimensions across templates. The auditor reports 24 images without explicit dimensions, while all sampled images have alt text. Many are `fill` images in fixed/aspect-ratio containers; validate CLS before changing.
- [ ] Broken-link finding `/cdn-cgi/l/email/protection` is a Cloudflare email-protection false positive from the scanner; visible mailto/email contact is retained. Confirm Cloudflare configuration/actual browser behavior rather than removing the contact CTA.
- [ ] Live AI crawler directives differ from the repository's generic `robots.txt`: audit says GPTBot and ClaudeBot are blocked while OAI-SearchBot and PerplexityBot are allowed. Confirm the Cloudflare/host-managed rules before allowing training crawlers; no robots change made without approval.
- [ ] Review the promotional-products and blog index copy for unsupported stock, discounts, delivery, certification and response-time claims; some claims were removed in this PR.
- [ ] Verify internal links to the blog index and product pages resolve directly, without redirects, after deployment.

### P3 — Structured data and AI-answer visibility

- [ ] Organization/WebSite schema remains sitewide; LocalBusiness schema is homepage-only and has geo.
- [ ] Product markup no longer asserts unverified availability or invents prices.
- [ ] Blog structured data uses absolute image and canonical URLs.
- [ ] FAQPage markup is retained for helpful on-page FAQ content/other consumers; it no longer guarantees Google FAQ rich results.
- [ ] Add genuine customer reviews only with consent and evidence; do not fabricate ratings.
- [ ] Add original measured statistics only after business supplies verifiable figures.
- [ ] Public pricing/comparison pages are not appropriate without quote data and the user's no-table/no-external-link preference; keep RFQ content instead.

## Content cadence and policy

- Blog cadence: Monday, Thursday, Saturday. Other days focus on sitewide audits, existing-page optimization and technical fixes.
- Blogs use headings, short paragraphs and bullets only—no Markdown tables.
- No third-party outbound links, citations, Further Reading or external CTAs. Internal website links and verified business contact links only.
- Keep all edits on feature branches; draft PRs only. Never merge, deploy, or push directly to main.
- Continue the backlog across daily runs; close items only after repository changes and post-deployment verification.
