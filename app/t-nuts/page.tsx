import type { Metadata } from "next";
import ProductLandingPage, { buildMetadata, ProductPageData } from "@/components/ProductLandingPage";

const product: ProductPageData = {
  slug: "t-nuts",
  name: "T-Nuts",
  category: "Industrial Fasteners",
  img: "/img/T-Nuts.jpg",
  tagline: "T-Nut Supplier in Pune",
  headline: "T-Nuts — Roll-In & Drop-In T-Nut Supplier in Pune",
  desc: "Precision T-nuts for aluminum extrusion profiles, delivering secure sliding or drop-in fastening for frames, enclosures, and modular assemblies.",
  longDesc: "T-nuts are specially profiled fasteners designed to slide or drop into the T-slot channel of aluminum extrusion profiles, providing a secure, adjustable anchor point for bolts without the need for tapping or welding. Roll-in T-nuts are inserted from the end of the profile and can be positioned anywhere along the slot, making them ideal for assemblies that require flexibility during design and modification. Drop-in (spring-loaded) T-nuts can be inserted directly into the slot at any point along its length, speeding up assembly on long extrusion runs. Both types distribute clamping load evenly across the slot walls, resisting pull-out and rotation under vibration. T-nuts are a core component in modular machine frames, CNC and 3D-printer builds, workstation and conveyor structures, solar panel mounting systems, and general fixture and jig fabrication. Stellar Global Supplies stocks T-nuts compatible with standard 20-series, 30-series, and 40-series aluminum extrusion profiles, ex-Pune with pan-India delivery.",
  specs: [
    ["Type", "Roll-in / Drop-in T-nut"],
    ["Compatibility", "20, 30 & 40-series aluminum extrusion slots"],
    ["Thread Size", "M4 to M8"],
    ["Material", "Carbon Steel / Stainless Steel"],
    ["Surface", "Zinc Plated / Nickel Plated"],
    ["Standard", "Industrial extrusion T-slot fastening"],
    ["Delivery", "Pan-India from Pune"],
  ],
  applications: [
    "Aluminum extrusion machine frames",
    "CNC & 3D-printer frame assembly",
    "Workstation & conveyor structures",
    "Solar panel mounting systems",
    "Fixtures, jigs & modular enclosures",
  ],
  keywords: "t-nuts supplier pune, roll-in t-nut dealer india, aluminum extrusion t-nut pune, drop-in t-nut supplier, t-slot nut dealer india, extrusion frame fastener pune, slot nut supplier india",
  relatedProducts: [
    { name: "Nylock Nuts", slug: "nylock-nuts", img: "/img/Nylock-Nuts.jpg" },
    { name: "Hex Bolts", slug: "hex-bolts", img: "/img/Hex-Bolts.jpg" },
    { name: "Allen Bolts", slug: "allen-bolts", img: "/img/Allen-Bolts.jpg" },
    { name: "Star Washers", slug: "star-washers", img: "/img/Star-Washers.jpg" },
  ],
  faqs: [
    {
      q: "What's the difference between roll-in and drop-in T-nuts?",
      a: "Roll-in T-nuts must be slid in from the open end of the extrusion profile before the frame is fully assembled, but they can be positioned anywhere along the slot. Drop-in T-nuts are spring-loaded and can be inserted directly into the slot at any point, even after the frame is built, making them faster for retrofits and long profile runs.",
    },
    {
      q: "Which extrusion profiles are your T-nuts compatible with?",
      a: "We stock T-nuts sized for standard 20-series, 30-series, and 40-series aluminum extrusion profiles, the most common sizes used in machine frames, enclosures, and workstation builds. Confirm your slot width with us via WhatsApp for exact fitment.",
    },
    {
      q: "Do T-nuts require special tools to install?",
      a: "No special tools are required. Roll-in T-nuts are simply slid into the slot from the profile end, while drop-in T-nuts are pressed into the slot opening and rotate into place. Standard hex keys or wrenches are used to tighten the bolt once the T-nut is positioned.",
    },
    {
      q: "What sizes do you stock in Pune?",
      a: "We stock T-nuts in M4, M5, M6, and M8 thread sizes for immediate dispatch from our Pune facility. Other thread sizes and custom finishes available on order — WhatsApp us your requirement.",
    },
  ],
};

export const metadata: Metadata = buildMetadata(product);

export default function Page() {
  return <ProductLandingPage product={product} />;
}
