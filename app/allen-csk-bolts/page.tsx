import { Metadata } from "next";
import ProductLandingPage, { buildMetadata, ProductPageData } from "@/components/ProductLandingPage";

const product: ProductPageData = {
  slug: "allen-csk-bolts",
  name: "Allen CSK Bolts",
  category: "Locking & Fastening",
  img: "/img/Allen-CSK-Bolts.jpg",
  tagline: "Allen CSK Bolt Supplier in Pune",
  headline: "Allen CSK Bolts — Countersunk Socket Head Bolt Supplier in Pune",
  desc: "ISO 10642 / DIN 7991 countersunk socket head cap screws (Allen CSK) for flush-surface assembly where bolt heads must sit below the surface.",
  longDesc: `ISO 10642 countersunk socket head cap screws (Allen CSK) have a 90° flat head that sits flush with or below the mating surface after installation. Essential wherever a smooth, snag-free external surface is required — furniture, automotive body panels, electronic enclosures, and machine guards.`,
  specs: [
    [
        "Standard",
        "ISO 10642, DIN 7991"
    ],
    [
        "Thread",
        "M3 to M24"
    ],
    [
        "Material",
        "Grade 8.8, 10.9, SS 304, SS 316"
    ],
    [
        "Drive",
        "Hex (Allen) socket"
    ],
    [
        "Head Angle",
        "90\u00b0"
    ],
    [
        "Delivery",
        "Pan-India from Pune"
    ]
],
  applications: [
    "Flush-mount assemblies",
    "Furniture & cabinetry",
    "Electronic enclosures",
    "CNC machine guards",
    "Automotive panels"
],
  keywords: "allen csk bolt supplier pune, countersunk socket screw india, din 7991 bolt dealer pune, csk cap screw supplier, flush bolt india",
  relatedProducts: [
    {
        "name": "Allen Bolts",
        "slug": "allen-bolts",
        "img": "/img/Allen-Bolts.jpg"
    },
    {
        "name": "Hex Bolts",
        "slug": "hex-bolts",
        "img": "/img/Hex-Bolts.jpg"
    },
    {
        "name": "Grub Screws",
        "slug": "grub-screws",
        "img": "/img/Grub-Screws-1.jpg"
    }
],
  faqs: [],
};

export const metadata: Metadata = buildMetadata(product);

export default function Page() {
  return <ProductLandingPage product={product} />;
}
