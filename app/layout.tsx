import type { Metadata, Viewport } from "next";
import "./globals.css";
import PromoPopup from "@/components/PromoPopup";
// Inter is self-hosted via @fontsource/inter (imported in globals.css).
// No next/font/google needed — avoids network fetch failures in CF Pages builds.

// ── SEO METADATA ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  metadataBase: new URL("https://stellarglobalsupplies.com"),
  title: {
    default: "Stellar Global Supplies | Industrial Steel & Fasteners – Pune",
    template: "%s | Stellar Global Supplies",
  },
  description: "Pune-based B2B supplier of stainless steel, mild steel sheets, sections and industrial fasteners. Browse product pages and request a quotation.",
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
    
    
    "stainless steel supplier pune",
    "mild steel supplier india",
    "industrial fasteners pune",
    "SS channels pipes sheets",
    "MS angles flats pipes pune",
    "hex bolts allen bolts india",
    "industrial material supplier",
    "stellar global supplies pune",
    "industrial procurement india",
    "locking fastening products",
    "nylock nuts castle nuts india",
    "metal supplier talawade pune",
    "SS round bars pune",
    "MS square tubes supplier",
    "industrial steel distributor india",
    "stainless steel sheets pune",
    "mild steel plates india",
    "industrial fastener sourcing",
  ],
  authors: [{ name: "Stellar Global Supplies", url: "https://stellarglobalsupplies.com" }],
  creator: "Stellar Global Supplies",
  publisher: "Stellar Global Supplies",
  category: "Industrial Supplies",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://stellarglobalsupplies.com",
    siteName: "Stellar Global Supplies",
    title: "Industrial Steel & Fasteners Supplier in Pune",
    description: "Pune-based supplier of stainless steel, mild steel and industrial fasteners for B2B sourcing. Request a quotation for your material requirements.",
    images: [
      {
        url: "/img/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Stellar Global Supplies - Premium Industrial Materials",
      },
    ],
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
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  manifest: "/site.webmanifest",
  other: {
    "geo.region": "IN-MH",
    "geo.placename": "Pune",
    "geo.position": "18.6727;73.8196",
    "ICBM": "18.6727, 73.8196",
  },
};

export const viewport: Viewport = {
  themeColor: "#00B98E",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

// ── STRUCTURED DATA (JSON-LD) ─────────────────────────────────────────────────
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://stellarglobalsupplies.com/#organization",
      name: "Stellar Global Supplies",
      url: "https://stellarglobalsupplies.com",
      logo: {
        "@type": "ImageObject",
        url: "https://stellarglobalsupplies.com/img/logo.jpg",
        width: 200,
        height: 200,
      },
      description:
        "One-stop industrial supply partner specialising in Stainless Steel, Mild Steel and Fastening products.",
      foundingDate: "2025",
      address: {
        "@type": "PostalAddress",
        streetAddress:
          "Survey No - 169, Gala No - 3, Pandurang Industrial Complex, Rupee Nagar, Talawade",
        addressLocality: "Pune",
        addressRegion: "Maharashtra",
        postalCode: "411062",
        addressCountry: "IN",
      },
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+91-9637655556",
        contactType: "sales",
        areaServed: "IN",
        availableLanguage: ["English", "Hindi", "Marathi"],
      },
      email: "stellarglobalsupplies@gmail.com",
      sameAs: [],
    },
    {
      "@type": "WebSite",
      "@id": "https://stellarglobalsupplies.com/#website",
      url: "https://stellarglobalsupplies.com",
      name: "Stellar Global Supplies",
      publisher: { "@id": "https://stellarglobalsupplies.com/#organization" },
      inLanguage: "en-IN",
    },
  ],
};

// ── LAYOUT ────────────────────────────────────────────────────────────────────
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-IN">
      <head>
        {/* ── NEW RELIC BROWSER AGENT ──────────────────────────────
            Must be the FIRST script in <head> — before any other JS.
            Served as a static file from /nr.js (public/nr.js).
            To update, replace the content of public/nr.js with a
            fresh snippet from:
              New Relic → Add Data → Browser → Copy/paste JavaScript code
        ────────────────────────────────────────────────────────── */}
        <script id="newrelic-browser-agent" src="/nr.js" />

        {/* Preconnect for performance */}
        {/* New Relic data endpoint preconnect (EU region) */}
        <link rel="preconnect" href="https://bam.eu01.nr-data.net" />
        {/* Use this instead if your NR account is in the US region: */}
        {/* <link rel="preconnect" href="https://bam.nr-data.net" /> */}

        {/* DNS Prefetch for external resources */}
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />

        {/* Preload critical assets */}
        <link rel="preload" as="image" href="/img/logo.jpg" />
        <link rel="preload" as="image" href="/img/og-image.jpg" />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

      </head>
      <body className="font-sans antialiased">
        <PromoPopup />
        {children}
      </body>
    </html>
  );
}
