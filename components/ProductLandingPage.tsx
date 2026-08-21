import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

// ── TYPES ─────────────────────────────────────────────────────────────────────
export interface ProductPageData {
  slug: string;
  name: string;
  category: string;
  img: string;
  tagline: string;
  headline: string;
  desc: string;
  longDesc: string;
  specs: [string, string][];
  applications: string[];
  keywords: string;
  relatedProducts: { name: string; slug: string; img: string }[];
  faqs: { q: string; a: string }[];
}

// ── WHATSAPP CTA ──────────────────────────────────────────────────────────────
const WA_NUMBER = "919637655556";

function waLink(productName: string) {
  const msg = encodeURIComponent(
    `Hi, I'd like to get a quote for *${productName}* from Stellar Global Supplies. Please share availability and pricing.`
  );
  return `https://wa.me/${WA_NUMBER}?text=${msg}`;
}

// ── METADATA HELPER ───────────────────────────────────────────────────────────
export function buildMetadata(p: ProductPageData): Metadata {
  return {
    title: `${p.headline} | Stellar Global Supplies`,
    description: p.desc,
    keywords: p.keywords,
    alternates: { canonical: `https://stellarglobalsupplies.com/${p.slug}` },
    openGraph: {
      title: `${p.headline} | Stellar Global Supplies`,
      description: p.desc,
      url: `https://stellarglobalsupplies.com/${p.slug}`,
      siteName: "Stellar Global Supplies",
      images: [
        {
          url: `https://stellarglobalsupplies.com${p.img}`,
          width: 1200,
          height: 630,
          alt: `${p.name} – Stellar Global Supplies Pune`,
        },
      ],
      locale: "en_IN",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${p.headline} | Stellar Global Supplies`,
      description: p.desc,
      images: [`https://stellarglobalsupplies.com${p.img}`],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
    },
  };
}

// ── STRUCTURED DATA ───────────────────────────────────────────────────────────
function StructuredData({ p }: { p: ProductPageData }) {
  const product = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: p.name,
    description: p.desc,
    image: `https://stellarglobalsupplies.com${p.img}`,
    url: `https://stellarglobalsupplies.com/${p.slug}`,
    category: p.category,
    brand: { "@type": "Brand", name: "Stellar Global Supplies" },
    offers: {
      "@type": "Offer",
      priceCurrency: "INR",
      availability: "https://schema.org/InStock",
      seller: {
        "@type": "LocalBusiness",
        name: "Stellar Global Supplies",
        telephone: "+91-9637655556",
        email: "stellarglobalsupplies@gmail.com",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Survey No-169, Gala No-3, Pandurang Industrial Complex, Rupee Nagar, Talawade",
          addressLocality: "Pune",
          addressRegion: "Maharashtra",
          postalCode: "411062",
          addressCountry: "IN",
        },
      },
    },
  };

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://stellarglobalsupplies.com" },
      { "@type": "ListItem", position: 2, name: p.category, item: `https://stellarglobalsupplies.com/#products` },
      { "@type": "ListItem", position: 3, name: p.name, item: `https://stellarglobalsupplies.com/${p.slug}` },
    ],
  };

  const faqSchema = p.faqs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: p.faqs.map(f => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  } : null;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(product) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      {faqSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />}
    </>
  );
}

// ── MAIN PAGE COMPONENT ───────────────────────────────────────────────────────
export default function ProductLandingPage({ product: p }: { product: ProductPageData }) {
  return (
    <>
      <StructuredData p={p} />

      {/* ── STICKY WHATSAPP BAR (mobile) ───────────────────────────────── */}
      <div
        className="fixed bottom-0 left-0 right-0 z-50 sm:hidden"
        style={{ background: "var(--dark)", borderTop: "2px solid var(--primary)" }}
      >
        <a
          href={waLink(p.name)}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 py-3 text-white font-bold text-sm"
          aria-label={`Get WhatsApp quote for ${p.name}`}
        >
          <WhatsAppIcon />
          Get Quote on WhatsApp
        </a>
      </div>

      <main id="main-content" className="pb-20 sm:pb-0">

        {/* ── BREADCRUMB ─────────────────────────────────────────────────── */}
        <nav
          aria-label="Breadcrumb"
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-2 text-xs text-gray-500"
        >
          <ol className="flex items-center gap-1 flex-wrap">
            <li><Link href="/" className="hover:underline" style={{ color: "var(--primary)" }}>Home</Link></li>
            <li aria-hidden="true">›</li>
            <li><Link href="/#products" className="hover:underline" style={{ color: "var(--primary)" }}>{p.category}</Link></li>
            <li aria-hidden="true">›</li>
            <li className="text-gray-700 font-medium">{p.name}</li>
          </ol>
        </nav>

        {/* ── HERO ───────────────────────────────────────────────────────── */}
        <section
          className="relative overflow-hidden py-12 lg:py-20"
          style={{ background: "linear-gradient(135deg, var(--dark) 0%, #1a4a7a 100%)" }}
          aria-labelledby="product-heading"
        >
          {/* Decorative blob */}
          <div
            aria-hidden="true"
            className="absolute top-0 right-0 w-96 h-96 pointer-events-none opacity-10 blur-3xl rounded-full"
            style={{ background: "var(--primary)" }}
          />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

              {/* Text */}
              <div>
                <span
                  className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4"
                  style={{ background: "var(--primary)", color: "white" }}
                >
                  {p.category}
                </span>
                <h1
                  id="product-heading"
                  className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-4"
                >
                  {p.name}
                </h1>
                <p className="text-base sm:text-lg text-gray-300 leading-relaxed mb-6 max-w-lg">
                  {p.desc}
                </p>

                {/* Hero CTAs */}
                <div className="flex flex-wrap gap-3">
                  <a
                    href={waLink(p.name)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm text-white shadow-lg transition-transform hover:scale-105"
                    style={{ background: "#25D366" }}
                    aria-label={`WhatsApp quote for ${p.name}`}
                  >
                    <WhatsAppIcon />
                    Get Quote on WhatsApp
                  </a>
                  <a
                    href="tel:+919637655556"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm border-2 transition-colors hover:bg-white/10"
                    style={{ borderColor: "var(--primary)", color: "var(--primary)" }}
                    aria-label="Call Stellar Global Supplies"
                  >
                    📞 Call Us Now
                  </a>
                </div>

                {/* Trust badges */}
                <div className="flex flex-wrap gap-4 mt-6">
                  {["✅ Quality Verified", "🚚 Pan-India Delivery", "📦 Bulk Orders Welcome"].map((b) => (
                    <span key={b} className="text-xs text-gray-300 font-medium">{b}</span>
                  ))}
                </div>
              </div>

              {/* Product Image */}
              <div className="relative h-72 lg:h-96 rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src={p.img}
                  alt={`${p.name} – Stellar Global Supplies Pune`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                  priority
                />
                <div
                  className="absolute inset-0"
                  style={{ background: "linear-gradient(to bottom, transparent 60%, rgba(14,46,80,0.4))" }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* ── SPECS + LONG DESC ──────────────────────────────────────────── */}
        <section
          className="py-14 lg:py-20"
          style={{ background: "var(--light)" }}
          aria-labelledby="specs-heading"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

              {/* Specs Table */}
              <div>
                <h2 id="specs-heading" className="text-2xl font-extrabold mb-6" style={{ color: "var(--dark)" }}>
                  Specifications
                </h2>
                <div className="rounded-2xl overflow-hidden shadow-md border border-gray-100">
                  <table className="w-full text-sm" aria-label={`${p.name} specifications`}>
                    <tbody>
                      {p.specs.map(([label, value], i) => (
                        <tr
                          key={label}
                          className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}
                        >
                          <td className="px-4 py-3 font-semibold w-2/5" style={{ color: "var(--dark)" }}>
                            {label}
                          </td>
                          <td className="px-4 py-3 text-gray-600">{value}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Inline WhatsApp CTA */}
                <a
                  href={waLink(p.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm text-white shadow-lg transition-transform hover:scale-105"
                  style={{ background: "#25D366" }}
                >
                  <WhatsAppIcon />
                  Request Quote for {p.name}
                </a>
              </div>

              {/* Long Desc + Applications */}
              <div>
                <h2 className="text-2xl font-extrabold mb-4" style={{ color: "var(--dark)" }}>
                  About {p.name}
                </h2>
                <p className="text-gray-600 leading-relaxed mb-8 text-sm">{p.longDesc}</p>

                <h3 className="text-lg font-bold mb-4" style={{ color: "var(--dark)" }}>
                  Common Applications
                </h3>
                <ul className="space-y-2">
                  {p.applications.map((app) => (
                    <li key={app} className="flex items-start gap-2 text-sm text-gray-600">
                      <span className="mt-0.5 flex-shrink-0 text-base" style={{ color: "var(--primary)" }}>✓</span>
                      {app}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ── WHY STELLAR GLOBAL ──────────────────────────────────────────── */}
        <section className="py-14" style={{ background: "white" }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl font-extrabold mb-2" style={{ color: "var(--dark)" }}>
              Why Source {p.name} from Stellar Global Supplies?
            </h2>
            <p className="text-gray-500 text-sm mb-10 max-w-xl mx-auto">
              Pune's one-stop industrial procurement partner — quality verified, fast delivery, transparent pricing.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: "🏭", title: "Quality Verified", body: "Every batch sourced from certified suppliers and inspected before dispatch." },
                { icon: "🚚", title: "Pan-India Delivery", body: "Reliable logistics from Pune to anywhere in India, on time." },
                { icon: "💬", title: "Quick Quote via WhatsApp", body: "Share your spec on WhatsApp and get a competitive price within hours." },
                { icon: "📦", title: "Bulk & Custom Orders", body: "MOQ flexible. Custom sizes, grades, and cut-to-length available." },
              ].map((card) => (
                <div
                  key={card.title}
                  className="rounded-2xl p-6 text-left border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
                  style={{ background: "var(--light)" }}
                >
                  <div className="text-3xl mb-3" aria-hidden="true">{card.icon}</div>
                  <h3 className="font-bold text-sm mb-2" style={{ color: "var(--dark)" }}>{card.title}</h3>
                  <p className="text-xs text-gray-500 leading-relaxed">{card.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ ─────────────────────────────────────────────────────────── */}
        {p.faqs.length > 0 && (
          <section
            className="py-14"
            style={{ background: "var(--light)" }}
            aria-labelledby="faq-heading"
          >
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 id="faq-heading" className="text-2xl font-extrabold mb-8 text-center" style={{ color: "var(--dark)" }}>
                Frequently Asked Questions
              </h2>
              <div className="space-y-4">
                {p.faqs.map((faq, i) => (
                  <details
                    key={i}
                    className="group rounded-xl border border-gray-200 bg-white shadow-sm"
                  >
                    <summary className="flex items-center justify-between gap-4 px-5 py-4 cursor-pointer font-semibold text-sm list-none" style={{ color: "var(--dark)" }}>
                      {faq.q}
                      <span className="flex-shrink-0 text-gray-400 group-open:rotate-180 transition-transform duration-200" aria-hidden="true">▼</span>
                    </summary>
                    <div className="px-5 pb-4 text-sm text-gray-600 leading-relaxed">{faq.a}</div>
                  </details>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ── RELATED PRODUCTS ────────────────────────────────────────────── */}
        {p.relatedProducts.length > 0 && (
          <section className="py-14" style={{ background: "white" }}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-2xl font-extrabold mb-8 text-center" style={{ color: "var(--dark)" }}>
                You Might Also Need
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                {p.relatedProducts.map((r) => (
                  <Link
                    key={r.slug}
                    href={`/${r.slug}`}
                    className="group rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5"
                    style={{ background: "var(--light)" }}
                  >
                    <div className="relative h-32 bg-gray-50">
                      <Image
                        src={r.img}
                        alt={`${r.name} – Stellar Global Supplies`}
                        fill
                        sizes="(max-width: 640px) 50vw, 25vw"
                        className="object-cover"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-3">
                      <p className="text-xs font-bold" style={{ color: "var(--dark)" }}>{r.name}</p>
                      <p className="text-xs mt-1" style={{ color: "var(--primary)" }}>View Details →</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ── BOTTOM CTA BANNER ───────────────────────────────────────────── */}
        <section
          className="py-14 lg:py-20"
          style={{ background: "linear-gradient(135deg, var(--dark) 0%, #1a4a7a 100%)" }}
        >
          <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
              Ready to Order {p.name}?
            </h2>
            <p className="text-gray-300 text-sm mb-8">
              Share your requirement on WhatsApp — material grade, size, quantity, and delivery location. We'll respond with a competitive quote within hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={waLink(p.name)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-white text-sm shadow-xl transition-transform hover:scale-105"
                style={{ background: "#25D366" }}
              >
                <WhatsAppIcon />
                WhatsApp for Quote
              </a>
              <a
                href="tel:+919637655556"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-sm border-2 transition-colors hover:bg-white/10"
                style={{ borderColor: "var(--primary)", color: "var(--primary)" }}
              >
                📞 +91 96376 55556
              </a>
            </div>
            <p className="text-xs text-gray-400 mt-4">
              Mon–Sat, 9 AM–6 PM · Talawade, Pune – 411062
            </p>
          </div>
        </section>
      </main>
    </>
  );
}

// ── WHATSAPP SVG ICON ─────────────────────────────────────────────────────────
function WhatsAppIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 32 32" fill="currentColor" aria-hidden="true">
      <path d="M16 .5C7.44.5.5 7.44.5 16c0 2.84.74 5.51 2.04 7.83L.5 31.5l7.87-2.06A15.44 15.44 0 0016 31.5c8.56 0 15.5-6.94 15.5-15.5S24.56.5 16 .5zm0 28.33a12.8 12.8 0 01-6.54-1.8l-.47-.28-4.66 1.22 1.25-4.55-.31-.49A12.77 12.77 0 013.17 16C3.17 9.14 8.97 3.33 16 3.33S28.83 9.14 28.83 16 23.03 28.83 16 28.83zm7.02-9.57c-.38-.19-2.27-1.12-2.63-1.25-.35-.12-.61-.19-.87.19-.26.38-1 1.25-1.23 1.51-.22.26-.45.29-.84.1a10.6 10.6 0 01-3.13-1.93 11.7 11.7 0 01-2.16-2.69c-.23-.38-.02-.59.17-.77.17-.17.38-.45.57-.67.19-.22.25-.38.38-.64.12-.26.06-.48-.03-.67-.1-.19-.87-2.1-1.19-2.87-.31-.75-.63-.65-.87-.66h-.74c-.26 0-.67.1-1.02.48-.35.38-1.33 1.3-1.33 3.17s1.36 3.68 1.55 3.93c.19.26 2.68 4.09 6.49 5.74.91.39 1.62.63 2.17.8.91.29 1.74.25 2.4.15.73-.11 2.27-.93 2.59-1.82.32-.9.32-1.67.22-1.82-.09-.15-.35-.25-.74-.44z"/>
    </svg>
  );
}
