import { Metadata } from "next";
import ProductLandingPage, { buildMetadata, ProductPageData } from "@/components/ProductLandingPage";

const product: ProductPageData = {
  slug: "ms-round-pipes",
  name: "MS Round Pipes",
  category: "Mild Steel",
  img: "/img/MS-Round-Pipes.jpg",
  tagline: "MS Round Pipe Supplier in Pune",
  headline: "MS Round Pipes — Mild Steel Pipe Supplier in Pune",
  desc: "Seamless and ERW mild steel round pipes for fluid transport, structural, and mechanical applications. Available in schedule 20, 40, and 80 thickness.",
  longDesc: `Mild steel round pipes from Stellar Global Supplies are available in both ERW (Electric Resistance Welded) and seamless varieties, conforming to IS 1239 and IS 3589. Used in plumbing, structural columns, fluid conveying, and scaffolding systems, these pipes are stocked in a wide range of diameters and schedules for immediate dispatch from Pune.`,
  specs: [
    [
        "Grade",
        "IS 1239, IS 3589"
    ],
    [
        "OD Range",
        "\u00bd inch to 24 inch"
    ],
    [
        "Schedule",
        "Sch 20 / 40 / 80 / XH"
    ],
    [
        "Type",
        "ERW & Seamless"
    ],
    [
        "Surface",
        "Black / Galvanised"
    ],
    [
        "Delivery",
        "Pan-India from Pune"
    ]
],
  applications: [
    "Fluid pipelines",
    "Structural columns",
    "Scaffolding",
    "Hydraulic systems",
    "General fabrication"
],
  keywords: "ms round pipe supplier pune, mild steel pipe pune, erw pipe dealer pune, ms pipe manufacturer india, structural pipe supplier",
  relatedProducts: [
    {
        "name": "MS Square Tubes",
        "slug": "ms-square-tubes",
        "img": "/img/Square-Tubes.jpg"
    },
    {
        "name": "MS Channels",
        "slug": "ms-channels",
        "img": "/img/Channels.jpg"
    },
    {
        "name": "MS Sheet",
        "slug": "ms-sheet",
        "img": "/img/MS-Sheet.jpg"
    }
],
  faqs: [
    {
        "q": "What is the difference between ERW and seamless MS pipe?",
        "a": "ERW (Electric Resistance Welded) pipes are formed from rolled strip and welded longitudinally \u2014 cost-effective and suitable for most structural and fluid applications. Seamless pipes are extruded without a weld seam, making them suitable for high-pressure hydraulic and process applications."
    },
    {
        "q": "Do you supply galvanised MS round pipes?",
        "a": "Yes, we can supply galvanised (GI) round pipes for corrosion-resistant plumbing and water supply applications. Contact us for availability."
    }
],
};

export const metadata: Metadata = buildMetadata(product);

export default function Page() {
  return <ProductLandingPage product={product} />;
}
