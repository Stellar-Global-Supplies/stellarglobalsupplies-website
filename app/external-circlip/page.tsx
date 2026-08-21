import { Metadata } from "next";
import ProductLandingPage, { buildMetadata, ProductPageData } from "@/components/ProductLandingPage";

const product: ProductPageData = {
  slug: "external-circlip",
  name: "External Circlip",
  category: "Industrial Fasteners",
  img: "/img/External-Circlip.png",
  tagline: "External Circlip Supplier in Pune",
  headline: "External Circlips — DIN 471 Shaft Snap Ring Supplier in Pune",
  desc: "DIN 471 external circlips (shaft rings) in spring steel and stainless steel for axial retention of components on shafts. Range Ø3 mm – Ø300 mm.",
  longDesc: `DIN 471 external circlips are stamped from spring steel strip and install in a precision groove on the outside of a shaft. They provide a positive axial stop for bearings, gears, and bushes and are installed with standard external circlip pliers. Available from Ø3 mm to Ø300 mm in spring steel and stainless steel grades.`,
  specs: [
    [
        "Standard",
        "DIN 471, IS 3075"
    ],
    [
        "Shaft Diameter",
        "\u00d83 mm to \u00d8300 mm"
    ],
    [
        "Material",
        "Spring Steel, SS 304, SS 316"
    ],
    [
        "Finish",
        "Phosphated / Self-colour"
    ],
    [
        "Thickness",
        "0.4 mm to 4.0 mm"
    ],
    [
        "Delivery",
        "Pan-India from Pune"
    ]
],
  applications: [
    "Bearing retention on shafts",
    "Gearboxes",
    "Motor assemblies",
    "Automotive axles",
    "Pump shafts"
],
  keywords: "external circlip supplier pune, din 471 circlip dealer india, shaft snap ring pune, retaining ring supplier pune, e-clip supplier india",
  relatedProducts: [
    {
        "name": "Internal Circlip",
        "slug": "internal-circlip",
        "img": "/img/Internal-Circlip.png"
    },
    {
        "name": "KM Lock Nuts",
        "slug": "km-lock-nuts",
        "img": "/img/KM-Lock-Nuts.jpg"
    },
    {
        "name": "Dowel Pins",
        "slug": "dowel-pins",
        "img": "/img/Dowel-Pins.jpg"
    }
],
  faqs: [
    {
        "q": "What is the difference between DIN 471 and DIN 472 circlips?",
        "a": "DIN 471 (external circlip / shaft ring) seats in a groove on the outside of a shaft. DIN 472 (internal circlip / bore ring) seats in a groove inside a bore or housing. Both are supplied by Stellar Global Supplies."
    },
    {
        "q": "Do you supply stainless steel circlips?",
        "a": "Yes, we supply SS 304 and SS 316 external and internal circlips for corrosive environments, food processing, and pharmaceutical applications."
    }
],
};

export const metadata: Metadata = buildMetadata(product);

export default function Page() {
  return <ProductLandingPage product={product} />;
}
