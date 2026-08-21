import { Metadata } from "next";
import ProductLandingPage, { buildMetadata, ProductPageData } from "@/components/ProductLandingPage";

const product: ProductPageData = {
  slug: "allen-bolts",
  name: "Allen Bolts",
  category: "Locking & Fastening",
  img: "/img/Allen-Bolts.jpg",
  tagline: "Allen Bolt Supplier in Pune",
  headline: "Allen Bolts — Socket Head Cap Screw Supplier in Pune",
  desc: "ISO 4762 / DIN 912 socket head cap screws (Allen bolts) for high-strength, compact assemblies where wrench access is limited. Grade 8.8 and 12.9.",
  longDesc: `ISO 4762 socket head cap screws (Allen bolts) deliver high clamping force in a compact format using a hex key drive. Grade 12.9 provides the highest tensile strength for hydraulic manifolds, CNC machine assembly, and robotics. Available from M3 to M48 in steel and stainless grades from our Pune facility.`,
  specs: [
    [
        "Standard",
        "ISO 4762, DIN 912"
    ],
    [
        "Thread",
        "M3 to M48"
    ],
    [
        "Grade",
        "8.8, 12.9, SS 304, SS 316"
    ],
    [
        "Drive",
        "Hex (Allen) socket"
    ],
    [
        "Head Type",
        "Cylindrical socket head"
    ],
    [
        "Delivery",
        "Pan-India from Pune"
    ]
],
  applications: [
    "CNC machine assembly",
    "Hydraulic manifolds",
    "Automotive components",
    "Robotics",
    "Precision instruments"
],
  keywords: "allen bolt supplier pune, socket head cap screw india, din 912 bolt dealer pune, grade 12.9 allen bolt, shcs supplier pune",
  relatedProducts: [
    {
        "name": "Hex Bolts",
        "slug": "hex-bolts",
        "img": "/img/Hex-Bolts.jpg"
    },
    {
        "name": "Allen CSK Bolts",
        "slug": "allen-csk-bolts",
        "img": "/img/Allen-CSK-Bolts.jpg"
    },
    {
        "name": "Grub Screws",
        "slug": "grub-screws",
        "img": "/img/Grub-Screws-1.jpg"
    }
],
  faqs: [
    {
        "q": "What is the difference between grade 8.8 and 12.9 Allen bolts?",
        "a": "Grade 8.8 Allen bolts have a tensile strength of 800 MPa and are suitable for most machine assembly work. Grade 12.9 has 1200 MPa tensile strength and is used in high-load hydraulic and power transmission applications. 12.9 bolts must not be welded or hot-galvanised."
    }
],
};

export const metadata: Metadata = buildMetadata(product);

export default function Page() {
  return <ProductLandingPage product={product} />;
}
