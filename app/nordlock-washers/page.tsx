import type { Metadata } from "next";
import ProductLandingPage, { buildMetadata, ProductPageData } from "@/components/ProductLandingPage";

const product: ProductPageData = {
  slug: "nordlock-washers",
  name: "Nordlock Washers",
  category: "Industrial Fasteners",
  img: "/img/Nordlock-Washer.jpg",
  tagline: "Wedge-Lock Washer Supplier in Pune",
  headline: "Nordlock Washers — Wedge-Lock Washer Supplier in Pune",
  desc: "Nordlock wedge-locking washers use cam-action technology to prevent bolt loosening under extreme vibration and dynamic loads — the industry standard for critical joints.",
  longDesc: "Nordlock washers work on a fundamentally different principle from conventional spring or split washers. Each pair consists of two washers with mating radial serrations on the inner faces and cam-profiled ramps on the outer faces. When tightened, the inner serrations grip the bolt and nut faces while the cams create a wedge angle steeper than the bolt thread pitch — meaning any vibration-induced loosening rotation is immediately countered by the wedge action, which requires the bolt to stretch further. The result is that clamp load is maintained even under extreme vibration, shock, and dynamic loading. Nordlock washers are reusable, compatible with standard hex bolts and nuts, and are the preferred choice in mining equipment, construction machinery, wind turbines, and rail infrastructure. Stellar Global Supplies stocks M6 to M24 ex-Pune with pan-India delivery.",
  specs: [
    ["Type", "Wedge-locking washer pair"],
    ["Size Range", "M6 to M24 (stocked ex-Pune)"],
    ["Material", "Hardened Carbon Steel"],
    ["Surface", "Delta Coat / Zinc Flake"],
    ["Compatibility", "Standard hex bolts & nuts, grade 8.8+"],
    ["Standard", "Wedge-locking principle (steeper than thread pitch)"],
    ["Delivery", "Pan-India from Pune"],
  ],
  applications: [
    "Mining & earthmoving equipment",
    "Construction & heavy machinery",
    "Wind turbine tower joints",
    "Rail & infrastructure bolted connections",
    "Heavy industrial machinery frames",
  ],
  keywords: "nordlock washer supplier pune, wedge lock washer dealer india, nordlock m6 m24 pune, bolt locking washer pune, anti-vibration washer supplier india, cam lock washer pune, nord-lock washer dealer",
  relatedProducts: [
    { name: "Nylock Nuts", slug: "nylock-nuts", img: "/img/Nylock-Nuts.jpg" },
    { name: "MB Lock Washer", slug: "mb-lock-washer", img: "/img/MB-Lock-Washer.jpg" },
    { name: "Hex Bolts", slug: "hex-bolts", img: "/img/Hex-Bolts.jpg" },
    { name: "KM Lock Nuts", slug: "km-lock-nuts", img: "/img/KM-Lock-Nuts.jpg" },
  ],
  faqs: [
    {
      q: "How are Nordlock washers different from spring washers?",
      a: "Spring washers rely on spring tension to resist loosening — but that force is overcome once vibration causes the nut to begin rotating. Nordlock washers use a wedge-cam geometry where any loosening rotation forces the bolt to stretch further, making self-loosening mechanically impossible as long as sufficient preload is maintained.",
    },
    {
      q: "Are Nordlock washers reusable?",
      a: "Yes. Nordlock washers can be reused multiple times. The hardened steel serrations and cam ramps maintain their geometry across repeated assembly and disassembly cycles. Inspect for wear or damage after heavy service before reuse.",
    },
    {
      q: "What bolt grade should be used with Nordlock washers?",
      a: "Nordlock washers require grade 8.8 bolts or higher to ensure sufficient bolt preload for the wedge-locking mechanism to be effective. Lower-grade bolts (4.6, 4.8) may not achieve the required clamp force.",
    },
    {
      q: "What sizes do you stock in Pune?",
      a: "We stock Nordlock washers in M6, M8, M10, M12, M16, M20, and M24 from our Pune facility for immediate dispatch. Other sizes available on order — WhatsApp us your requirement.",
    },
  ],
};

export const metadata: Metadata = buildMetadata(product);

export default function Page() {
  return <ProductLandingPage product={product} />;
}
