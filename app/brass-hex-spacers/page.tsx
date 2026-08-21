import { Metadata } from "next";
import ProductLandingPage, { buildMetadata, ProductPageData } from "@/components/ProductLandingPage";

const product: ProductPageData = {
  slug: "brass-hex-spacers",
  name: "Brass Hex Spacers",
  category: "Locking & Fastening",
  img: "/img/Brass-Hex-Spacers.jpg",
  tagline: "Brass Hex Spacer Supplier in Pune",
  headline: "Brass Hex Spacers — PCB Standoff Supplier in Pune",
  desc: "Male-to-female brass hex spacers and PCB standoffs for electronics, instrumentation, and panel assemblies. Fully threaded in M3 to M12.",
  longDesc: `Brass hex spacers (M-F standoffs) are precision-machined PCB mounting components used to maintain fixed spacing between printed circuit boards and panels in electronic assemblies. Made from IS 319 free-cutting brass with internal threads both ends, they resist corrosion and are available nickel-plated for improved conductivity.`,
  specs: [
    [
        "Material",
        "Free-Cutting Brass IS 319"
    ],
    [
        "Thread",
        "M3, M4, M5, M6, M8, M10, M12"
    ],
    [
        "Type",
        "M-F / F-F / M-M hex"
    ],
    [
        "Length",
        "5 mm to 80 mm"
    ],
    [
        "Finish",
        "Natural / Nickel Plated"
    ],
    [
        "Delivery",
        "Pan-India from Pune"
    ]
],
  applications: [
    "PCB mounting",
    "Control panels",
    "Telecom racks",
    "Sensor housings",
    "Instrumentation assemblies"
],
  keywords: "brass hex spacer supplier pune, pcb standoff supplier india, brass spacer dealer pune, m-f standoff supplier, hex pillar brass",
  relatedProducts: [
    {
        "name": "Studs",
        "slug": "studs",
        "img": "/img/Studs.jpg"
    },
    {
        "name": "Allen Bolts",
        "slug": "allen-bolts",
        "img": "/img/Allen-Bolts.jpg"
    },
    {
        "name": "Hex Bolts",
        "slug": "hex-bolts",
        "img": "/img/Hex-Bolts.jpg"
    }
],
  faqs: [],
};

export const metadata: Metadata = buildMetadata(product);

export default function Page() {
  return <ProductLandingPage product={product} />;
}
