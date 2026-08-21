import type { Metadata } from "next";
import PromoProductLandingPage, { buildPromoMetadata, PromoProductData } from "@/components/PromoProductLandingPage";

const product: PromoProductData = {
  slug: "external-circlip-din471",
  name: "External Circlips DIN 471",
  grade: "DIN 471",
  img: "/img/03_external_circlips_DIN471.png",
  tagline: "Reliable Shaft Retention Snap Rings",
  headline: "External Circlips DIN 471 — Shaft Snap Ring Supplier in Pune",
  metaDesc: "Buy DIN 471 External Circlips (A6–A100) from Stellar Global Supplies, Pune. Premium spring steel shaft retaining rings for gearboxes, motors & assemblies. Bulk orders. WhatsApp quote!",
  desc: "DIN 471 external circlips (shaft rings) in premium spring steel for axial retention of bearings, pulleys, and components on shafts. Stocked A6 to A100.",
  longDesc: "DIN 471 external circlips are precision-stamped from spring steel strip and seat in a groove on the outside of a shaft to provide a positive axial stop for assembled components including bearings, gears, pulleys, and bushes. The angled ear design allows installation and removal with standard external circlip pliers. They are one of the most cost-effective and widely used retention methods in rotating machinery. Our DIN 471 circlips are stocked in sizes A6 to A100 (shaft diameter 6 mm to 100 mm) ex-Pune, with larger sizes up to A300 and stainless steel grades available on order.",
  sizes: ["A6 to A100"],
  specs: [
    ["Standard", "DIN 471, IS 3075"],
    ["Shaft Diameter", "A6 mm to A100 mm (stocked)"],
    ["Material", "Spring Steel (65Mn / C75S)"],
    ["Finish", "Phosphated / Self-colour"],
    ["Groove Standard", "DIN 471 groove dimensions"],
    ["Delivery", "Pan-India from Pune"],
  ],
  features: [
    "Manufactured to DIN 471 specifications",
    "Premium spring steel — high fatigue resistance",
    "Precision formed for tight dimensional tolerance",
    "Phosphated for improved corrosion life",
    "Easy installation with standard pliers",
  ],
  applications: [
    "Bearing retention on shafts",
    "Gearbox & transmission shafts",
    "Motor output shafts",
    "Automotive axles & hubs",
    "Agricultural machinery",
  ],
  faqs: [
    { q: "How do I select the correct DIN 471 external circlip?", a: "External circlips are selected by shaft diameter. Specify the shaft diameter (e.g. A25 for a 25 mm shaft) and DIN 471 gives you the groove diameter, groove width, and circlip wire thickness. WhatsApp us your shaft diameter and we will confirm the correct part." },
    { q: "Do you supply stainless steel DIN 471 circlips?", a: "Yes, we supply SS 304 and SS 316 external circlips for corrosive, food processing, and marine applications. Standard sizes from A3 to A150 in stainless are available on order." },
    { q: "What pliers are needed for DIN 471 external circlips?", a: "External circlips require external (straight-nose) circlip pliers that compress the ring for installation. Choose pliers with tip pins matching the ear hole diameter of the circlip size." },
  ],
  relatedProducts: [
    { name: "Internal Circlips DIN 472", slug: "internal-circlips-din472", img: "/img/02_internal_circlips_DIN472.png" },
    { name: "MS Nylock Nut", slug: "ms-nylock-nut", img: "/img/01_nyloc_nut.png" },
    { name: "Dowel Pins", slug: "dowel-pins", img: "/img/Dowel-Pins.jpg" },
  ],
  keywords: "external circlip din 471 supplier pune, shaft snap ring dealer india, din 471 circlip pune, a6 a100 circlip india, shaft retaining ring supplier pune, external retaining ring india",
};

export const metadata: Metadata = buildPromoMetadata(product);

export default function Page() {
  return <PromoProductLandingPage product={product} />;
}
