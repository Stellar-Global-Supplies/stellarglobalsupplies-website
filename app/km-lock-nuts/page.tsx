import { Metadata } from "next";
import ProductLandingPage, { buildMetadata, ProductPageData } from "@/components/ProductLandingPage";

const product: ProductPageData = {
  slug: "km-lock-nuts",
  name: "KM Lock Nuts",
  category: "Industrial Fasteners",
  img: "/img/KM-Lock-Nuts.jpg",
  tagline: "KM Lock Nut Supplier in Pune",
  headline: "KM Lock Nuts — Bearing Lock Nut Supplier in Pune",
  desc: "DIN 981 slotted round lock nuts for precision bearing retention on shafts. Used with MB tab washers for positive axial locking.",
  longDesc: `KM lock nuts (DIN 981) are slotted round nuts with metric fine thread used to retain rolling element bearings on precision shafts. Used together with MB tab washers for a positive two-component locking system. Essential in machine tools, gearboxes, and any assembly where bearing axial position must be maintained.`,
  specs: [
    [
        "Standard",
        "DIN 981"
    ],
    [
        "Thread",
        "M10\u00d71 to M200\u00d73 (metric fine)"
    ],
    [
        "Material",
        "Case Hardened Steel / Stainless"
    ],
    [
        "Finish",
        "Phosphated / Zinc Plated"
    ],
    [
        "Slots",
        "4 / 6 slots as per DIN"
    ],
    [
        "Delivery",
        "Pan-India from Pune"
    ]
],
  applications: [
    "Rolling bearing retention",
    "Spindle assemblies",
    "Machine tool shafts",
    "Gearbox shafts",
    "Pump assemblies"
],
  keywords: "km lock nut supplier pune, din 981 nut dealer pune, bearing lock nut india, shaft lock nut supplier, round nut with slots",
  relatedProducts: [
    {
        "name": "MB Lock Washer",
        "slug": "mb-lock-washer",
        "img": "/img/MB-Lock-Washer.jpg"
    },
    {
        "name": "External Circlip",
        "slug": "external-circlip",
        "img": "/img/External-Circlip.png"
    },
    {
        "name": "Internal Circlip",
        "slug": "internal-circlip",
        "img": "/img/Internal-Circlip.png"
    }
],
  faqs: [],
};

export const metadata: Metadata = buildMetadata(product);

export default function Page() {
  return <ProductLandingPage product={product} />;
}
