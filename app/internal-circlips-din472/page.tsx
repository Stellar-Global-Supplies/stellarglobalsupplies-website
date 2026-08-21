import type { Metadata } from "next";
import PromoProductLandingPage, { buildPromoMetadata, PromoProductData } from "@/components/PromoProductLandingPage";

const product: PromoProductData = {
  slug: "internal-circlips-din472",
  name: "Internal Circlips DIN 472",
  grade: "DIN 472",
  img: "/img/02_internal_circlips_DIN472.png",
  tagline: "Precision Bore Retention Snap Rings",
  headline: "Internal Circlips DIN 472 — Bore Snap Ring Supplier in Pune",
  metaDesc: "Buy DIN 472 Internal Circlips (B8–B100) from Stellar Global Supplies, Pune. High-grade spring steel bore retaining rings for bearings, housings & assemblies. Bulk orders welcome. WhatsApp quote!",
  desc: "DIN 472 internal circlips (bore rings) in high-grade spring steel for secure axial retention of bearings, shafts, and components inside housings and bores.",
  longDesc: "DIN 472 internal circlips are stamped from high-grade spring steel strip and seat in a precision groove machined inside a bore or housing, retaining bearings, shafts, and pins from axial movement. The inverted ear design requires internal circlip pliers for installation and removal. They are the standard retention solution for rolling element bearings in blind housings across automotive, pump, gearbox, and industrial machinery applications. Our DIN 472 circlips are stocked in sizes B8 to B100 (bore diameter 8 mm to 100 mm) at our Pune facility, with larger sizes and stainless steel grades available on order.",
  sizes: ["B8 to B100"],
  specs: [
    ["Standard", "DIN 472, IS 3075"],
    ["Bore Diameter", "B8 mm to B100 mm (stocked)"],
    ["Material", "Spring Steel (65Mn / C75S)"],
    ["Finish", "Phosphated / Self-colour"],
    ["Groove Standard", "DIN 472 groove dimensions"],
    ["Delivery", "Pan-India from Pune"],
  ],
  features: [
    "Manufactured to DIN 472 specifications",
    "High-grade spring steel — excellent fatigue life",
    "Precision formed for perfect groove fit",
    "Phosphated finish for corrosion resistance",
    "Smooth bearing contact surface",
  ],
  applications: [
    "Bearing housing retention",
    "Motor & gearbox housings",
    "Hydraulic cylinders",
    "Industrial pumps",
    "Automotive differentials",
  ],
  faqs: [
    { q: "What is the difference between DIN 471 and DIN 472 circlips?", a: "DIN 471 is an external circlip (shaft ring) that sits in a groove on the outside of a shaft. DIN 472 is an internal circlip (bore ring) that sits in a groove inside a bore or housing. Both are available from Stellar Global Supplies in Pune." },
    { q: "What tools are needed to install internal circlips?", a: "DIN 472 internal circlips require internal (bent-nose) circlip pliers that expand the ring to fit into the groove. The plier tip size must match the circlip ear hole diameter for the relevant size." },
    { q: "Do you supply DIN 472 circlips in stainless steel?", a: "Yes, SS 304 and SS 316 internal circlips are available for corrosive environments, food processing, and pharmaceutical applications. Contact us for availability and pricing." },
  ],
  relatedProducts: [
    { name: "External Circlips DIN 471", slug: "external-circlip-din471", img: "/img/03_external_circlips_DIN471.png" },
    { name: "KM Lock Nuts", slug: "km-lock-nuts", img: "/img/KM-Lock-Nuts.jpg" },
    { name: "MB Lock Washer", slug: "mb-lock-washer", img: "/img/MB-Lock-Washer.jpg" },
  ],
  keywords: "internal circlip din 472 supplier pune, bore snap ring dealer india, din 472 circlip pune, b8 b100 circlip india, bore retaining ring supplier pune, internal retaining ring india",
};

export const metadata: Metadata = buildPromoMetadata(product);

export default function Page() {
  return <PromoProductLandingPage product={product} />;
}
