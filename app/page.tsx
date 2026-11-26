import type { Metadata } from "next";
import Navbar              from "@/components/Navbar";
import PromoBanner         from "@/components/PromoBanner";
import Hero                from "@/components/Hero";
import PromotionalProducts from "@/components/PromotionalProducts";
import TrustBar            from "@/components/TrustBar";
import About               from "@/components/About";
import BentoGrid           from "@/components/BentoGrid";
import Products            from "@/components/Products";
import CTASection          from "@/components/CTASection";
import Footer              from "@/components/Footer";
import BackToTop           from "@/components/BackToTop";
import ChatWidget          from "@/components/ChatWidget";

export const metadata: Metadata = {
  title: { absolute: "Industrial Steel & Fasteners Supplier in Pune" },
  description: "Pune-based B2B supplier of stainless steel, mild steel sheets, angles, flats, pipes and industrial fasteners. Share your specifications and request a quotation.",
  keywords: [
    "Stellar Global Supplies",
    "industrial supplies Pune",
    "stainless steel products",
    "mild steel products",
    "MS angles flats pipes",
    "SS sheets round bars",
    "industrial fasteners",
    "MS NYLOCK NUT",
    "Nylock nuts",
    "circlips",
    "Nordlock washers",
    "locking washers",
    "retaining rings",
    "DIN 472 circlips",
    "DIN 471 circlips",
    "bolts nuts fasteners",
    "Pune industrial supplier",
    "wholesale industrial materials",
    "B2B industrial supplies",
    "fastener supplier India",
    "MS channels angles",
    "SS sheets plates",
    "promotional products",
    "bulk industrial sourcing",
    "industrial procurement quotation",
  ],
  openGraph: {
    title: "Industrial Steel & Fasteners Supplier in Pune",
    description: "Pune-based supplier of stainless steel, mild steel and industrial fasteners for B2B sourcing. Request a quotation for your material requirements.",
    type: "website",
    url: "https://stellarglobalsupplies.com",
    siteName: "Stellar Global Supplies",
    images: [
      {
        url: "/img/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Stellar Global Supplies - Premium Industrial Materials",
      },
    ],
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Industrial Steel & Fasteners Supplier in Pune",
    description: "Pune-based supplier of stainless steel, mild steel and industrial fasteners for B2B sourcing. Request a quotation for your material requirements.",
    images: ["/img/og-image.jpg"],
    site: "@stellarglobal",
  },
  alternates: {
    canonical: "https://stellarglobalsupplies.com",
  },
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://stellarglobalsupplies.com/#localbusiness",
  name: "Stellar Global Supplies",
  url: "https://stellarglobalsupplies.com/",
  image: "https://stellarglobalsupplies.com/img/logo.jpg",
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
  geo: { "@type": "GeoCoordinates", latitude: 18.6727, longitude: 73.8196 },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    opens: "09:00",
    closes: "18:00",
  },
};

export default function HomePage() {
  return (
    <>
      {/* ── SKIP NAV (WCAG) ─────────────────────────────── */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:px-4 focus:py-2 focus:rounded-lg focus:font-semibold focus:text-white focus:bg-primary-500"
      >
        Skip to main content
      </a>

      {/* ── PROMO ANNOUNCEMENT BAR ─────────────────────── */}
      <PromoBanner />

      {/* ── NAVIGATION ─────────────────────────────────── */}
      <Navbar />

      {/* ── MAIN CONTENT ───────────────────────────────── */}
      <main id="main-content">
        {/* 1. Hero — above the fold, primary CTA */}
        <Hero />

        {/* 2. Promotional Products — auto-scrolling featured products */}
        <PromotionalProducts />

        {/* 3. Trust Bar — animated stats in dark band */}
        <TrustBar />

        {/* 3. About — who we are + core values bento */}
        <About />

        {/* 4. Why Choose Us — 5-card bento grid */}
        <BentoGrid />

        {/* 5. Products — 3-tab filtered product catalogue */}
        <Products />

        {/* 6. CTA Banner + Contact cards */}
        <CTASection />
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