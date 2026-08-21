import type { Metadata } from "next";
import PromoProductLandingPage, { buildPromoMetadata, PromoProductData } from "@/components/PromoProductLandingPage";

const product: PromoProductData = {
  slug: "ms-nylock-nut",
  name: "MS Nylock Nut",
  grade: "Grade 982",
  img: "/img/01_nyloc_nut.png",
  tagline: "Vibration-Proof Nylon Insert Lock Nut",
  headline: "MS Nylock Nuts — Grade 982 Nylon Insert Lock Nut Supplier in Pune",
  metaDesc: "Buy Grade 982 MS Nylock Nuts (M5–M10) from Stellar Global Supplies, Pune. Vibration-proof nylon insert lock nuts for automotive, machinery & structural use. Bulk orders welcome. Get WhatsApp quote!",
  desc: "Grade 982 MS Nylock Nuts with a nylon insert that deforms on installation to create a resilient thread lock — preventing loosening under vibration, shock, and dynamic loads.",
  longDesc: "MS Nylock Nuts (Nylon Insert Lock Nuts) are a go-to fastening solution wherever bolt loosening due to vibration is a risk. The nylon insert, made from PA 66 polyamide, deforms as the bolt passes through, creating an interference fit that maintains clamp load even under continuous vibration and thermal cycling. Our Grade 982 nuts conform to ISO 7042 / DIN 985 and are stocked in M5 to M10 from our Pune facility. They are suitable for automotive assemblies, conveyor systems, agricultural equipment, pumps, and general structural joints. Unlike prevailing-torque all-metal nuts, Nylock nuts are gentle on the mating bolt thread and can be reused several times without losing significant locking effectiveness.",
  sizes: ["M5×0.80", "M6×1.00", "M8×1.25", "M10×1.00", "M10×1.50"],
  specs: [
    ["Standard", "ISO 7042, DIN 985, Grade 982"],
    ["Thread Range", "M5 to M10 (stocked)"],
    ["Material", "Medium Carbon Steel (Grade 8)"],
    ["Insert", "PA 66 Nylon (−30°C to +110°C)"],
    ["Finish", "Zinc Plated / Self-colour"],
    ["Delivery", "Pan-India from Pune"],
  ],
  features: [
    "Nylon insert for superior vibration locking",
    "Reusable up to 10 times without losing lock",
    "Temperature rated −30°C to +110°C",
    "Zinc plated for corrosion resistance",
    "Conforms to ISO 7042 / DIN 985",
  ],
  applications: [
    "Automotive chassis & suspension",
    "Conveyor & material handling",
    "Agricultural equipment",
    "Pump & motor assemblies",
    "Structural steel connections",
  ],
  faqs: [
    { q: "Are Nylock nuts reusable?", a: "Yes, Grade 982 Nylock nuts can be reused up to 10 times. However, for safety-critical applications it is best practice to use a new nut on each assembly as the nylon insert gradually loses interference with repeated use." },
    { q: "Up to what temperature can Grade 982 Nylock nuts be used?", a: "The PA 66 nylon insert is rated from −30°C to +110°C continuous service. For higher-temperature applications, all-metal prevailing-torque lock nuts should be considered." },
    { q: "What sizes do you stock ex-Pune?", a: "We stock M5×0.80, M6×1.00, M8×1.25, M10×1.00, and M10×1.50. Other sizes in M4 to M48 can be sourced on order. WhatsApp us your requirement." },
  ],
  relatedProducts: [
    { name: "Castle Nuts", slug: "castle-nuts", img: "/img/Castle-nuts.jpg" },
    { name: "Hex Bolts", slug: "hex-bolts", img: "/img/Hex-Bolts.jpg" },
    { name: "External Circlips DIN 471", slug: "external-circlip-din471", img: "/img/03_external_circlips_DIN471.png" },
  ],
  keywords: "ms nylock nut supplier pune, grade 982 nylock nut india, nylon insert lock nut pune, din 985 nut dealer pune, m5 m6 m8 m10 nylock nut, vibration proof nut pune",
};

export const metadata: Metadata = buildPromoMetadata(product);

export default function Page() {
  return <PromoProductLandingPage product={product} />;
}
