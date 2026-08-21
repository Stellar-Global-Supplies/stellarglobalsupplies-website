import { Metadata } from "next";
import ProductLandingPage, { buildMetadata, ProductPageData } from "@/components/ProductLandingPage";

const product: ProductPageData = {
  slug: "spring-dowel-pins",
  name: "Spring Dowel Pins",
  category: "Industrial Fasteners",
  img: "/img/spring-dowel-pin.jpg",
  tagline: "Spring Dowel Pin Supplier in Pune",
  headline: "Spring Dowel Pins — Coiled Spring Pin Supplier in Pune",
  desc: "ISO 8750 / DIN 1481 slotted and coiled spring pins for self-locking, vibration-resistant pin joints. Absorb shock without cracking.",
  longDesc: `ISO 8750 coiled spring pins and ISO 8752 slotted roll pins are self-retaining, self-locking cylindrical pins that compress to fit and then expand to grip the hole wall. They absorb shock and vibration better than solid pins and are ideal for hinge pins, clevis joints, and light agricultural linkages.`,
  specs: [
    [
        "Standard",
        "ISO 8750, DIN 1481"
    ],
    [
        "Diameter",
        "1 mm to 25 mm"
    ],
    [
        "Material",
        "Carbon Steel, SS 304"
    ],
    [
        "Wall Type",
        "Light / Medium / Heavy duty"
    ],
    [
        "Finish",
        "Phosphated / Self-colour"
    ],
    [
        "Delivery",
        "Pan-India from Pune"
    ]
],
  applications: [
    "Hinge pins",
    "Clevis joints",
    "Shaft locking",
    "Agricultural linkages",
    "Furniture fittings"
],
  keywords: "spring dowel pin supplier pune, din 1481 roll pin dealer india, coiled spring pin pune, slotted spring pin supplier, roll pin india",
  relatedProducts: [
    {
        "name": "Dowel Pins",
        "slug": "dowel-pins",
        "img": "/img/Dowel-Pins.jpg"
    },
    {
        "name": "Grub Screws",
        "slug": "grub-screws",
        "img": "/img/Grub-Screws-1.jpg"
    },
    {
        "name": "External Circlip",
        "slug": "external-circlip",
        "img": "/img/External-Circlip.png"
    }
],
  faqs: [],
};

export const metadata: Metadata = buildMetadata(product);

export default function Page() {
  return <ProductLandingPage product={product} />;
}
