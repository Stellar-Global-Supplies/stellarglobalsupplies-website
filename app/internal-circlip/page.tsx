import { Metadata } from "next";
import ProductLandingPage, { buildMetadata, ProductPageData } from "@/components/ProductLandingPage";

const product: ProductPageData = {
  slug: "internal-circlip",
  name: "Internal Circlip",
  category: "Industrial Fasteners",
  img: "/img/Internal-Circlip.png",
  tagline: "Internal Circlip Supplier in Pune",
  headline: "Internal Circlips — DIN 472 Bore Snap Ring Supplier in Pune",
  desc: "DIN 472 internal circlips (bore rings) for retaining bearings and components inside bores and housings. Range Ø8 mm – Ø300 mm.",
  longDesc: `DIN 472 internal circlips (bore rings) install in a groove machined inside a housing or bore and retain shafts, bearings, and pins from moving axially outward. Available in Ø8 mm to Ø300 mm, they require internal circlip pliers for installation and are a standard solution for blind housing bearing retention.`,
  specs: [
    [
        "Standard",
        "DIN 472, IS 3075"
    ],
    [
        "Bore Diameter",
        "\u00d88 mm to \u00d8300 mm"
    ],
    [
        "Material",
        "Spring Steel, SS 304, SS 316"
    ],
    [
        "Finish",
        "Phosphated / Zinc Plated"
    ],
    [
        "Thickness",
        "0.6 mm to 4.0 mm"
    ],
    [
        "Delivery",
        "Pan-India from Pune"
    ]
],
  applications: [
    "Bearing housing retention",
    "Motor housings",
    "Hydraulic cylinders",
    "Gearbox bores",
    "Industrial pumps"
],
  keywords: "internal circlip supplier pune, din 472 circlip dealer india, bore snap ring pune, internal retaining ring supplier, b-series circlip india",
  relatedProducts: [
    {
        "name": "External Circlip",
        "slug": "external-circlip",
        "img": "/img/External-Circlip.png"
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
        "q": "How do I select the right internal circlip size?",
        "a": "Internal circlips are selected by bore (housing) diameter. The DIN 472 standard specifies bore diameter, groove diameter, groove width, and the correct circlip wire thickness. Share your bore diameter and we will confirm the correct size."
    }
],
};

export const metadata: Metadata = buildMetadata(product);

export default function Page() {
  return <ProductLandingPage product={product} />;
}
