import type { Metadata } from "next";
import Navbar     from "@/components/Navbar";
import Footer     from "@/components/Footer";
import BackToTop  from "@/components/BackToTop";
import ChatWidget from "@/components/ChatWidget";
import Image      from "next/image";
import Link       from "next/link";
import StructuredData from "@/components/StructuredData";
import PromoBanner from "@/components/PromoBanner";
import { Phone, Mail, CheckCircle2, ArrowLeft, Package } from "lucide-react";

export const metadata: Metadata = {
  title: "Promotional Industrial Products | Special Offers | Stellar Global Supplies Pune",
  description:
    "Exclusive promotional industrial fasteners from Stellar Global Supplies, Pune. Special pricing on MS NYLOCK NUTs (M5–M10), Internal Circlips DIN 472 (B8–B100), External Circlips DIN 471 (A6–A100), and Nordlock Washers (M6–M24). Premium quality, ISO certified, bulk order discounts available. Get free quote today!",
  keywords: [
    "promotional industrial products",
    "MS NYLOCK NUT M5 M6 M8 M10",
    "Grade 982 Nylock nuts",
    "internal circlips DIN 472",
    "external circlips DIN 471",
    "Nordlock washers M6 M24",
    "industrial fasteners on sale",
    "special offer fasteners",
    "bulk order discounts",
    "Stellar Global Supplies promotional",
    "Pune fastener supplier",
    "vibration proof nuts",
    "locking washers",
    "retaining rings",
    "DIN standard circlips",
    "premium quality fasteners",
    "ISO certified industrial supplies",
    "wholesale industrial products",
    "fastener deals Pune",
    "industrial hardware promotions",
  ],
  openGraph: {
    title: "Promotional Industrial Products | Special Offers | Stellar Global Supplies",
    description:
      "Exclusive deals on premium industrial fasteners. MS NYLOCK NUTs, DIN Circlips, Nordlock Washers — special pricing for bulk orders. Quality guaranteed.",
    type: "website",
    url: "https://www.stellarglobalsupplies.com/promotional-products",
    siteName: "Stellar Global Supplies",
    images: [
      {
        url: "/img/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Stellar Global Supplies – Promotional Industrial Products",
      },
    ],
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Promotional Industrial Products | Special Offers | Stellar Global Supplies",
    description:
      "Exclusive deals on premium industrial fasteners. MS NYLOCK NUTs, DIN Circlips, Nordlock Washers — special pricing for bulk orders.",
    images: ["/img/og-image.jpg"],
    site: "@stellarglobal",
  },
  alternates: {
    canonical: "https://www.stellarglobalsupplies.com/promotional-products",
  },
};

// ── PRODUCT DATA ──────────────────────────────────────────────────────────────
const PRODUCTS = [
  {
    id: "nylock-nut",
    name: "MS NYLOCK NUT",
    img: "/img/01_nyloc_nut.png",
    tagline: "Vibration-proof fastening solution",
    grade: "Grade 982",
    description:
      "Premium MS NYLOCK NUTS with a nylon insert that deforms during installation, creating a resilient thread lock preventing loosening from vibration and shock. Ideal for automotive, machinery, and structural applications where safety is critical.",
    sizes: ["M5X0.80", "M6X1.00", "M8X1.25", "M10X1.00", "M10X1.50"],
    features: [
      "Nylon insert for superior locking",
      "Vibration and shock resistant",
      "Reusable up to 10 times",
      "Wide temperature range (−30°C to +110°C)",
      "Excellent corrosion resistance",
    ],
  },
  {
    id: "internal-circlips",
    name: "Internal Circlips DIN 472",
    img: "/img/02_internal_circlips_DIN472.png",
    tagline: "Precision bore retention rings",
    grade: "DIN 472",
    description:
      "High-quality internal circlips manufactured to DIN 472 standards. Designed for secure retention in housings and bores, providing axial location for bearings, gears, and other components. High-grade spring steel for maximum durability and fatigue resistance.",
    sizes: ["B8 to B100"],
    features: [
      "Manufactured to DIN 472 standards",
      "High-grade spring steel construction",
      "Precision formed for perfect fit",
      "Excellent fatigue resistance",
      "Smooth bearing surface finish",
    ],
  },
  {
    id: "external-circlips",
    name: "External Circlips DIN 471",
    img: "/img/03_external_circlips_DIN471.png",
    tagline: "Reliable shaft retention solution",
    grade: "DIN 471",
    description:
      "Durable external circlips conforming to DIN 471 specifications for secure retention on shafts and spindles. Provides axial location for bearings, pulleys, and other components. Premium spring steel with excellent tensile strength and fatigue properties.",
    sizes: ["A6 to A100"],
    features: [
      "Manufactured to DIN 471 standards",
      "Premium spring steel material",
      "High tensile strength",
      "Superior fatigue resistance",
      "Precision manufactured tolerances",
    ],
  },
  {
    id: "nordlock-washers",
    name: "Nordlock Washers",
    img: "/img/04_nordlock_washers.png",
    tagline: "Advanced wedge-locking technology",
    grade: "Standard Grade",
    description:
      "Premium Nordlock washers using innovative wedge-locking technology for superior bolt security. The cam-action design creates a powerful wedge effect that prevents bolt loosening even under extreme vibration and dynamic loads — the preferred choice for construction, mining, and heavy machinery.",
    sizes: ["M6 to M24"],
    features: [
      "Wedge-locking cam technology",
      "Eliminates bolt loosening completely",
      "Reusable multiple times",
      "Works with standard bolts & nuts",
      "Superior to conventional lock washers",
    ],
  },
];

// ── PRODUCT CARD ─────────────────────────────────────────────────────────────
function ProductCard({
  name, img, tagline, grade, description, sizes, features, index,
}: (typeof PRODUCTS)[0] & { index: number }) {
  const isEven = index % 2 === 0;

  return (
    <article
      className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300"
      aria-label={name}
    >
      <div className={`grid md:grid-cols-2 gap-0`}>

        {/* ── IMAGE PANEL ── */}
        <div
          className={`relative flex items-center justify-center bg-gradient-to-br from-gray-50 to-slate-100 ${
            isEven ? "md:order-1" : "md:order-2"
          }`}
          style={{ minHeight: "320px" }}
        >
          {/* Grade ribbon */}
          <div
            className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold text-white z-10"
            style={{ background: "var(--primary)" }}
          >
            {grade}
          </div>

          <div className="relative w-full h-72 p-8">
            <Image
              src={img}
              alt={`${name} – industrial fastener by Stellar Global Supplies`}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-contain p-4 hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>

        {/* ── DETAILS PANEL ── */}
        <div
          className={`flex flex-col justify-between p-7 lg:p-9 ${
            isEven ? "md:order-2" : "md:order-1"
          }`}
        >
          <div>
            <h2
              className="text-2xl lg:text-3xl font-extrabold mb-1 leading-tight"
              style={{ color: "var(--dark)" }}
            >
              {name}
            </h2>
            <p className="text-sm font-semibold mb-4" style={{ color: "var(--primary)" }}>
              {tagline}
            </p>
            <p className="text-sm text-gray-600 leading-relaxed mb-6">{description}</p>

            {/* Available sizes */}
            <div className="mb-5">
              <p className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-2">
                Available Sizes
              </p>
              <div className="flex flex-wrap gap-2">
                {sizes.map((s) => (
                  <span
                    key={s}
                    className="px-3 py-1 rounded-lg text-xs font-semibold text-gray-700"
                    style={{ background: "#f1f5f9", border: "1px solid #e2e8f0" }}
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>

            {/* Features */}
            <div className="mb-6">
              <p className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-2">
                Key Features
              </p>
              <ul className="grid grid-cols-1 gap-1.5">
                {features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-gray-600">
                    <CheckCircle2
                      size={14}
                      className="mt-0.5 flex-shrink-0"
                      style={{ color: "var(--primary)" }}
                      aria-hidden="true"
                    />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="tel:+919637655556"
              className="flex-1 inline-flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-bold text-white transition-all duration-200 hover:opacity-90 hover:-translate-y-0.5"
              style={{ background: "var(--primary)" }}
              aria-label={`Call to enquire about ${name}`}
            >
              <Phone size={14} aria-hidden="true" />
              Call to Enquire
            </a>
            <a
              href="mailto:stellarglobalsupplies@gmail.com"
              className="flex-1 inline-flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-bold transition-all duration-200 hover:-translate-y-0.5"
              style={{
                background: "transparent",
                border: "2px solid var(--dark)",
                color: "var(--dark)",
              }}
              aria-label={`Email to enquire about ${name}`}
            >
              <Mail size={14} aria-hidden="true" />
              Email Us
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}

// ── PAGE ──────────────────────────────────────────────────────────────────────
export default function PromotionalProductsPage() {
  return (
    <>
      {/* SEO Schema */}
      <StructuredData
        data={{
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "Promotional Industrial Products",
          description:
            "Special promotional industrial fasteners and components from Stellar Global Supplies",
          url: "https://www.stellarglobalsupplies.com/promotional-products",
          numberOfItems: PRODUCTS.length,
          itemListElement: PRODUCTS.map((p, i) => ({
            "@type": "ListItem",
            position: i + 1,
            item: {
              "@type": "Product",
              name: p.name,
              description: p.description,
              category: "Industrial Fasteners",
              brand: { "@type": "Brand", name: "Stellar Global Supplies" },
              offers: {
                "@type": "Offer",
                priceCurrency: "INR",
                availability: "https://schema.org/InStock",
                seller: { "@type": "Organization", name: "Stellar Global Supplies" },
              },
            },
          })),
        }}
      />

      <PromoBanner />
      <Navbar />

      <main id="main-content">
        {/* ── PAGE HERO ── */}
        <section
          className="relative overflow-hidden py-16 lg:py-20"
          style={{
            background: "linear-gradient(135deg, var(--dark) 0%, #1a4a7a 100%)",
          }}
          aria-labelledby="page-heading"
        >
          <div
            aria-hidden="true"
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage:
                "radial-gradient(circle at 20% 50%, #00B98E 0%, transparent 50%), radial-gradient(circle at 80% 20%, #FF6922 0%, transparent 40%)",
            }}
          />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" className="mb-6">
              <ol className="flex items-center gap-2 text-xs text-white/50">
                <li>
                  <Link href="/" className="hover:text-white transition-colors">Home</Link>
                </li>
                <li aria-hidden="true">/</li>
                <li className="text-white/80">Promotional Products</li>
              </ol>
            </nav>

            <div className="flex items-center gap-3 mb-4">
              <span
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold"
                style={{
                  background: "rgba(0,185,142,0.20)",
                  border: "1px solid rgba(0,185,142,0.40)",
                  color: "#4dffd4",
                }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" aria-hidden="true" />
                Special Offers
              </span>
            </div>

            <h1
              id="page-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4 leading-tight"
            >
              Premium{" "}
              <span
                style={{
                  background: "linear-gradient(90deg, #00B98E, #4dffd4)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Promotional Products
              </span>
            </h1>
            <p className="text-white/70 text-base lg:text-lg max-w-2xl leading-relaxed">
              Exclusive selection of high-quality industrial fasteners and components at special promotional pricing. 
              Each product is quality-verified and ready for bulk orders.
            </p>

            {/* Quick stat strip */}
            <div className="flex flex-wrap gap-4 mt-8">
              {[
                { label: "Products Featured", val: "4" },
                { label: "In Stock", val: "All" },
                { label: "Bulk Discounts", val: "Yes" },
                { label: "Delivery", val: "Fast" },
              ].map(({ label, val }) => (
                <div
                  key={label}
                  className="px-4 py-2 rounded-xl text-center"
                  style={{
                    background: "rgba(255,255,255,0.08)",
                    border: "1px solid rgba(255,255,255,0.12)",
                  }}
                >
                  <div className="text-lg font-extrabold text-white">{val}</div>
                  <div className="text-[10px] text-white/50 uppercase tracking-wide">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── PRODUCTS LIST ── */}
        <section
          className="py-12 lg:py-20"
          style={{ background: "#f8fafc" }}
          aria-label="Promotional products list"
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-8">
            {PRODUCTS.map((product, i) => (
              <ProductCard key={product.id} {...product} index={i} />
            ))}
          </div>
        </section>

        {/* ── BOTTOM CTA ── */}
        <section
          className="py-14 lg:py-20"
          style={{ background: "var(--dark)" }}
          aria-label="Contact us for promotional pricing"
        >
          <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
            <Package size={40} className="mx-auto mb-4 opacity-40 text-white" aria-hidden="true" />
            <h2 className="text-2xl lg:text-3xl font-extrabold text-white mb-3">
              Ready to Place a Bulk Order?
            </h2>
            <p className="text-white/70 text-base mb-8 max-w-xl mx-auto leading-relaxed">
              Contact us today for special pricing, volume discounts, and customised solutions. 
              Our team responds within 2 business hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+919637655556"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl font-bold text-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
                style={{ background: "var(--primary)", color: "#fff" }}
              >
                <Phone size={15} aria-hidden="true" />
                +91 9637655556
              </a>
              <a
                href="mailto:stellarglobalsupplies@gmail.com"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl font-bold text-sm transition-all duration-200 hover:-translate-y-0.5"
                style={{
                  background: "rgba(255,255,255,0.10)",
                  border: "1px solid rgba(255,255,255,0.25)",
                  color: "#fff",
                }}
              >
                <Mail size={15} aria-hidden="true" />
                stellarglobalsupplies@gmail.com
              </a>
            </div>
            <div className="mt-8">
              <Link
                href="/"
                className="inline-flex items-center gap-1.5 text-sm text-white/50 hover:text-white transition-colors duration-150"
              >
                <ArrowLeft size={13} aria-hidden="true" />
                Back to Home
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <BackToTop />
      <ChatWidget />
    </>
  );
}