import type { Metadata } from "next";
import Navbar              from "@/components/Navbar";
import Footer              from "@/components/Footer";
import BackToTop           from "@/components/BackToTop";
import ChatWidget          from "@/components/ChatWidget";
import Image               from "next/image";
import StructuredData     from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "Promotional Industrial Products | Special Offers | Stellar Global Supplies Pune",
  description:
    "Exclusive promotional industrial fasteners from Stellar Global Supplies, Pune. Special pricing on MS NYLOCK NUTs (M5-M10), Internal Circlips DIN 472 (B8-B100), External Circlips DIN 471 (A6-A100), and Nordlock Washers (M6-M24). Premium quality, ISO certified, bulk order discounts available. Get free quote today!",
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
      "Exclusive deals on premium industrial fasteners. MS NYLOCK NUTs, DIN Circlips, Nordlock Washers - special pricing for bulk orders. Quality guaranteed.",
    type: "website",
    url: "https://stellarglobalsupplies.com/promotional-products",
    siteName: "Stellar Global Supplies",
    images: [
      {
        url: "/img/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Stellar Global Supplies - Promotional Industrial Products",
      },
    ],
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Promotional Industrial Products | Special Offers | Stellar Global Supplies",
    description:
      "Exclusive deals on premium industrial fasteners. MS NYLOCK NUTs, DIN Circlips, Nordlock Washers - special pricing for bulk orders.",
    images: ["/img/og-image.jpg"],
    site: "@stellarglobal",
  },
  alternates: {
    canonical: "https://stellarglobalsupplies.com/promotional-products",
  },
  other: {
    "product:price:amount": "Contact for pricing",
    "product:price:currency": "INR",
    "product:availability": "in stock",
  },
};

// ── PROMOTIONAL PRODUCTS DATA ──────────────────────────────────────────────────
const PROMOTIONAL_PRODUCTS = [
  {
    id: "nylock-nut",
    name: "MS NYLOCK NUT",
    img: "/img/01_nyloc_nut.png",
    tagline: "Vibration-proof fastening solution",
    description:
      "Premium MS NYLOCK NUTS with nylon insert for superior locking performance. These Grade 982 nuts feature a nylon collar that deforms during installation, creating a resilient thread lock that prevents loosening due to vibration and shock. Ideal for automotive, machinery, and structural applications where safety is critical.",
    sizes: ["M5X0.80", "M6X1.00", "M8X1.25", "M10X1.00", "M10X1.50"],
    grade: "Grade 982",
    features: [
      "Nylon insert for superior locking",
      "Vibration and shock resistant",
      "Reusable up to 10 times",
      "Wide temperature range (-30°C to +110°C)",
      "Excellent corrosion resistance",
    ],
  },
  {
    id: "internal-circlips",
    name: "Internal Circlips DIN 472",
    img: "/img/02_internal_circlips_DIN472.png",
    tagline: "Precision bore retention rings",
    description:
      "High-quality internal circlips manufactured to DIN 472 standards. These precision-engineered rings are designed for secure retention in housings and bores, providing axial location for bearings, gears, and other components. Made from high-grade spring steel for maximum durability and fatigue resistance.",
    sizes: ["B8 to B100"],
    grade: "DIN 472",
    features: [
      "Manufactured to DIN 472 standards",
      "High-grade spring steel construction",
      "Precision formed for perfect fit",
      "Excellent fatigue resistance",
      "Smooth bearing surface",
    ],
  },
  {
    id: "external-circlips",
    name: "External Circlips DIN 471",
    img: "/img/03_external_circlips_DIN471.png",
    tagline: "Reliable shaft retention solution",
    description:
      "Durable external circlips conforming to DIN 471 specifications. These circlips are designed for secure retention on shafts and spindles, providing axial location for bearings, pulleys, and other components. Manufactured from premium spring steel with excellent tensile strength and fatigue properties.",
    sizes: ["A6 to A100"],
    grade: "DIN 471",
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
    tagline: "Advanced locking washer technology",
    description:
      "Premium Nordlock washers featuring innovative wedge-locking technology for superior bolt security. The unique design uses a cam action to create a powerful wedge effect that prevents bolt loosening, even under extreme vibration and dynamic loads. The preferred choice for critical applications in construction, mining, and heavy machinery.",
    sizes: ["M6 to M24"],
    grade: "Standard Grade",
    features: [
      "Wedge-locking technology",
      "Eliminates bolt loosening",
      "Reusable multiple times",
      "Works with standard bolts",
      "Superior to conventional lock washers",
    ],
  },
];

export default function PromotionalProductsPage() {
  return (
    <>
      {/* ── NAVIGATION ─────────────────────────────────── */}
      <Navbar />

      {/* ── MAIN CONTENT ───────────────────────────────── */}
      <main id="main-content">
        {/* Structured Data for SEO */}
        <StructuredData
          data={{
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: "Promotional Industrial Products",
            description: "Special promotional industrial fasteners and components from Stellar Global Supplies",
            url: "https://stellarglobalsupplies.com/promotional-products",
            numberOfItems: 4,
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                item: {
                  "@type": "Product",
                  name: "MS NYLOCK NUT",
                  description: "Premium Grade 982 MS NYLOCK NUTS with nylon insert for superior locking performance",
                  category: "Industrial Fasteners",
                  brand: "Stellar Global Supplies",
                  offers: {
                    "@type": "Offer",
                    priceCurrency: "INR",
                    availability: "https://schema.org/InStock",
                    seller: {
                      "@type": "Organization",
                      name: "Stellar Global Supplies",
                    },
                  },
                },
              },
              {
                "@type": "ListItem",
                position: 2,
                item: {
                  "@type": "Product",
                  name: "Internal Circlips DIN 472",
                  description: "High-quality internal circlips manufactured to DIN 472 standards",
                  category: "Industrial Fasteners",
                  brand: "Stellar Global Supplies",
                  offers: {
                    "@type": "Offer",
                    priceCurrency: "INR",
                    availability: "https://schema.org/InStock",
                    seller: {
                      "@type": "Organization",
                      name: "Stellar Global Supplies",
                    },
                  },
                },
              },
              {
                "@type": "ListItem",
                position: 3,
                item: {
                  "@type": "Product",
                  name: "External Circlips DIN 471",
                  description: "Durable external circlips conforming to DIN 471 specifications",
                  category: "Industrial Fasteners",
                  brand: "Stellar Global Supplies",
                  offers: {
                    "@type": "Offer",
                    priceCurrency: "INR",
                    availability: "https://schema.org/InStock",
                    seller: {
                      "@type": "Organization",
                      name: "Stellar Global Supplies",
                    },
                  },
                },
              },
              {
                "@type": "ListItem",
                position: 4,
                item: {
                  "@type": "Product",
                  name: "Nordlock Washers",
                  description: "Premium Nordlock washers featuring wedge-locking technology",
                  category: "Industrial Fasteners",
                  brand: "Stellar Global Supplies",
                  offers: {
                    "@type": "Offer",
                    priceCurrency: "INR",
                    availability: "https://schema.org/InStock",
                    seller: {
                      "@type": "Organization",
                      name: "Stellar Global Supplies",
                    },
                  },
                },
              },
            ],
          }}
        />

        {/* Hero Section */}
        <section className="py-16 lg:py-24 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="section-badge mb-4 inline-flex">Special Offers</span>
              <h1 className="text-4xl lg:text-5xl font-bold mb-4" style={{ color: "var(--dark)" }}>
                Premium <span className="text-gradient">Promotional Products</span>
              </h1>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Discover our exclusive selection of high-quality industrial fasteners and components. 
                Each product is quality-verified and available at special promotional pricing. 
                Enhance your operations with Stellar Global Supplies.
              </p>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {PROMOTIONAL_PRODUCTS.map((product) => (
                <article
                  key={product.id}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="grid md:grid-cols-2 gap-6 p-6">
                    {/* Product Image */}
                    <div className="relative h-64 md:h-80 bg-gray-50 rounded-xl overflow-hidden">
                      <Image
                        src={product.img}
                        alt={`${product.name} - promotional product`}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-contain p-4"
                      />
                    </div>

                    {/* Product Details */}
                    <div className="flex flex-col justify-between">
                      <div>
                        <span
                          className="inline-block px-3 py-1 rounded-full text-xs font-bold text-white mb-3"
                          style={{ background: "var(--primary)" }}
                        >
                          {product.grade}
                        </span>
                        <h2 className="text-2xl font-bold mb-2" style={{ color: "var(--dark)" }}>
                          {product.name}
                        </h2>
                        <p className="text-sm font-semibold mb-3" style={{ color: "var(--primary)" }}>
                          {product.tagline}
                        </p>
                        <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                          {product.description}
                        </p>

                        {/* Sizes */}
                        <div className="mb-4">
                          <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">
                            Available Sizes:
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {product.sizes.map((size) => (
                              <span
                                key={size}
                                className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md font-medium"
                              >
                                {size}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Features */}
                        <div className="mb-4">
                          <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">
                            Key Features:
                          </p>
                          <ul className="space-y-1">
                            {product.features.map((feature, idx) => (
                              <li key={idx} className="text-xs text-gray-600 flex items-start gap-2">
                                <span style={{ color: "var(--primary)" }}>✓</span>
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* CTA Button */}
                      <a
                        href="#contact"
                        className="btn-primary w-full mt-4 text-center block"
                        aria-label={`Enquire about ${product.name}`}
                      >
                        Enquire Now
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Bottom CTA Section */}
            <div className="mt-16 bg-gradient-to-r from-primary-500 to-primary-600 rounded-2xl p-8 lg:p-12 text-center text-white">
              <h2 className="text-3xl font-bold mb-4">
                Interested in These Promotional Products?
              </h2>
              <p className="text-lg mb-6 text-white/90 max-w-2xl mx-auto">
                Contact us today for special pricing, bulk orders, and customized solutions. 
                Our team is ready to assist you with all your industrial supply needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+919637655556"
                  className="inline-flex items-center justify-center gap-2 bg-white text-primary-600 px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors"
                >
                  📞 Call +91 9637655556
                </a>
                <a
                  href="mailto:stellarglobalsupplies@gmail.com"
                  className="inline-flex items-center justify-center gap-2 bg-primary-700 text-white px-8 py-3 rounded-xl font-semibold hover:bg-primary-800 transition-colors"
                >
                  ✉️ Email Us
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ── FOOTER ─────────────────────────────────────── */}
      <Footer />

      {/* ── BACK TO TOP ────────────────────────────────── */}
      <BackToTop />

      {/* ── FLOATING CHAT WIDGET ───────────────────────── */}
      <ChatWidget />
    </>
  );
}