import { Metadata } from "next";
import ProductLandingPage, { buildMetadata, ProductPageData } from "@/components/ProductLandingPage";

const product: ProductPageData = {
  slug: "grub-screws",
  name: "Grub Screws",
  category: "Industrial Fasteners",
  img: "/img/Grub-Screws-1.jpg",
  tagline: "Grub Screw Supplier in Pune",
  headline: "Grub Screws — Set Screw Supplier in Pune",
  desc: "DIN 913 / ISO 4026 headless socket set screws (grub screws) for shaft-collar locking and position setting. Flat, cup, cone and dog point available.",
  longDesc: `DIN 913/912 headless socket set screws (grub screws) in grade 45H case-hardened steel lock collars, pulleys, and gears onto shafts without protruding above the surface. Multiple point styles — flat, cup, cone, dog, and oval — allow different levels of shaft grip and damage to the shaft surface.`,
  specs: [
    [
        "Standard",
        "DIN 913 / 914 / 915 / 916"
    ],
    [
        "Thread",
        "M3 to M36"
    ],
    [
        "Material",
        "Grade 45H (45 HRC min), SS 304"
    ],
    [
        "Drive",
        "Hex socket (Allen)"
    ],
    [
        "Point",
        "Flat / Cup / Cone / Dog / Oval"
    ],
    [
        "Delivery",
        "Pan-India from Pune"
    ]
],
  applications: [
    "Shaft-collar locking",
    "Pulley & gear fixing",
    "Encoder mounting",
    "Valve stem setting",
    "Machine elements"
],
  keywords: "grub screw supplier pune, set screw dealer india, din 913 screw pune, headless socket screw india, allen grub screw supplier",
  relatedProducts: [
    {
        "name": "Allen Bolts",
        "slug": "allen-bolts",
        "img": "/img/Allen-Bolts.jpg"
    },
    {
        "name": "Studs",
        "slug": "studs",
        "img": "/img/Studs.jpg"
    },
    {
        "name": "Dowel Pins",
        "slug": "dowel-pins",
        "img": "/img/Dowel-Pins.jpg"
    }
],
  faqs: [],
};

export const metadata: Metadata = buildMetadata(product);

export default function Page() {
  return <ProductLandingPage product={product} />;
}
