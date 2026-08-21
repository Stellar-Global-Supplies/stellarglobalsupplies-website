import type { Metadata } from "next";
import PromoProductLandingPage, { buildPromoMetadata, PromoProductData } from "@/components/PromoProductLandingPage";

const product: PromoProductData = {
  slug: "nordlock-washers",
  name: "Nordlock Washers",
  grade: "Standard Grade",
  img: "/img/04_nordlock_washers.png",
  tagline: "Wedge-Locking Bolt Security Washers",
  headline: "Nordlock Washers — Wedge-Lock Washer Supplier in Pune",
  metaDesc: "Buy Nordlock Wedge-Locking Washers (M6–M24) from Stellar Global Supplies, Pune. Superior bolt security for mining, construction & heavy machinery. Eliminates loosening under vibration. WhatsApp quote!",
  desc: "Nordlock wedge-locking washers use cam-action technology to prevent bolt loosening under extreme vibration and dynamic loads — the industry standard for critical joints.",
  longDesc: "Nordlock washers work on a fundamentally different principle from conventional spring or split washers. Each pair consists of two washers with mating radial serrations on the inner faces and cam-profiled ramps on the outer faces. When tightened, the inner serrations grip the bolt and nut faces while the cams create a wedge angle steeper than the bolt thread pitch — meaning any vibration-induced loosening rotation is immediately countered by the wedge action, which requires the bolt to stretch further. The result is that the clamp load is maintained even under extreme vibration, shock, and dynamic loading. Nordlock washers are reusable, compatible with standard hex bolts and nuts, and are the preferred choice in mining equipment, construction machinery, wind turbines, and rail infrastructure.",
  sizes: ["M6", "M8", "M10", "M12", "M16", "M20", "M24"],
  specs: [
    ["Type", "Wedge-locking washer pair"],
    ["Size Range", "M6 to M24 (stocked)"],
    ["Material", "Hardened Carbon Steel"],
    ["Surface", "Delta Coat / Zinc Flake"],
    ["Compatibility", "Standard hex bolts & nuts, grade 8.8+"],
    ["Delivery", "Pan-India from Pune"],
  ],
  features: [
    "Cam-action wedge locking — not spring tension",
    "Effective under extreme vibration & dynamic loads",
    "Reusable multiple times without loss of locking",
    "Works with any standard bolt and nut",
    "Preferred in mining, construction & wind energy",
  ],
  applications: [
    "Mining & earthmoving equipment",
    "Construction machinery",
    "Wind turbine towers",
    "Rail & infrastructure joints",
    "Heavy industrial machinery",
  ],
  faqs: [
    { q: "How are Nordlock washers different from spring washers?", a: "Spring washers work by maintaining a spring force against the nut — but this force is lost under vibration once the nut starts to rotate. Nordlock washers use a wedge-cam geometry that means any loosening rotation requires the bolt to stretch further, making self-loosening mechanically impossible as long as the bolt has sufficient clamping force." },
    { q: "Are Nordlock washers reusable?", a: "Yes, Nordlock washers can be reused multiple times. The serrations and cam geometry are machined to maintain their effectiveness across repeated assembly cycles. Inspect for wear after heavy service." },
    { q: "What bolt grade should be used with Nordlock washers?", a: "Nordlock washers are designed for use with grade 8.8 bolts and above. Using lower-grade bolts (4.6, 4.8) may not provide sufficient preload for the wedge locking mechanism to function effectively." },
  ],
  relatedProducts: [
    { name: "MS Nylock Nut", slug: "ms-nylock-nut", img: "/img/01_nyloc_nut.png" },
    { name: "Hex Bolts", slug: "hex-bolts", img: "/img/Hex-Bolts.jpg" },
    { name: "MB Lock Washer", slug: "mb-lock-washer", img: "/img/MB-Lock-Washer.jpg" },
  ],
  keywords: "nordlock washer supplier pune, wedge lock washer dealer india, nordlock m6 m24 pune, bolt locking washer pune, anti-vibration washer supplier india, cam lock washer pune",
};

export const metadata: Metadata = buildPromoMetadata(product);

export default function Page() {
  return <PromoProductLandingPage product={product} />;
}
