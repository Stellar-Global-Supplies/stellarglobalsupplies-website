import { Metadata } from "next";
import ProductLandingPage, { buildMetadata, ProductPageData } from "@/components/ProductLandingPage";

const product: ProductPageData = {
  slug: "mb-lock-washer",
  name: "MB Lock Washer",
  category: "Industrial Fasteners",
  img: "/img/MB-Lock-Washer.jpg",
  tagline: "MB Lock Washer Supplier in Pune",
  headline: "MB Lock Washers — Tab Washer Supplier in Pune",
  desc: "DIN 5406 tab washers (MB washers) for use with KM lock nuts. One tab locks into shaft keyway, others fold over nut slots to prevent rotation.",
  longDesc: `MB tab washers (DIN 5406) are the complementary component to KM lock nuts. One external tab locates in the shaft keyway while multiple inner tabs fold into the KM nut slots to prevent rotation. A simple, reliable, and reusable bearing retention system for machine tools and gearboxes.`,
  specs: [
    [
        "Standard",
        "DIN 5406"
    ],
    [
        "Sizes",
        "MB10 to MB200 (matched to KM)"
    ],
    [
        "Material",
        "Carbon Steel"
    ],
    [
        "Finish",
        "Phosphated"
    ],
    [
        "Function",
        "Anti-rotation tab washer"
    ],
    [
        "Delivery",
        "Pan-India from Pune"
    ]
],
  applications: [
    "Bearing assemblies",
    "Machine tool retention",
    "Gearbox shafts",
    "Spindle lock",
    "Pump assemblies"
],
  keywords: "mb lock washer supplier pune, din 5406 tab washer india, bearing lock washer dealer, mb washer km nut pune, tab washer supplier",
  relatedProducts: [
    {
        "name": "KM Lock Nuts",
        "slug": "km-lock-nuts",
        "img": "/img/KM-Lock-Nuts.jpg"
    },
    {
        "name": "External Circlip",
        "slug": "external-circlip",
        "img": "/img/External-Circlip.png"
    },
    {
        "name": "Nylock Nuts",
        "slug": "nylock-nuts",
        "img": "/img/Nylock-Nuts.jpg"
    }
],
  faqs: [],
};

export const metadata: Metadata = buildMetadata(product);

export default function Page() {
  return <ProductLandingPage product={product} />;
}
