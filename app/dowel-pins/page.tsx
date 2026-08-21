import { Metadata } from "next";
import ProductLandingPage, { buildMetadata, ProductPageData } from "@/components/ProductLandingPage";

const product: ProductPageData = {
  slug: "dowel-pins",
  name: "Dowel Pins",
  category: "Locking & Fastening",
  img: "/img/Dowel-Pins.jpg",
  tagline: "Dowel Pin Supplier in Pune",
  headline: "Dowel Pins — Precision Ground Pin Supplier in Pune",
  desc: "ISO 8734 hardened and ground cylindrical dowel pins for accurate alignment of machine components, jigs, and fixtures. Solid and hollow types.",
  longDesc: `ISO 8734 cylindrical dowel pins are hardened and ground to h6 or m6 tolerance for precision alignment of mating components in dies, moulds, jigs, and fixtures. Straight cylindrical design ensures repeatable, accurate location when components are disassembled and reassembled. Hollow dowels also available for weight reduction.`,
  specs: [
    [
        "Standard",
        "ISO 8734, DIN 6325"
    ],
    [
        "Diameter",
        "1 mm to 50 mm (h6/m6 tolerance)"
    ],
    [
        "Material",
        "Alloy Steel (hardened), SS 316"
    ],
    [
        "Hardness",
        "60\u201367 HRC (steel grades)"
    ],
    [
        "Finish",
        "Ground to h6 or m6"
    ],
    [
        "Delivery",
        "Pan-India from Pune"
    ]
],
  applications: [
    "Jig & fixture alignment",
    "Die & mould location",
    "CNC machine parts",
    "Press tool assembly",
    "Gear alignment"
],
  keywords: "dowel pin supplier pune, iso 8734 pin dealer india, precision pin supplier pune, alignment pin supplier, ground dowel pin india",
  relatedProducts: [
    {
        "name": "Spring Dowel Pins",
        "slug": "spring-dowel-pins",
        "img": "/img/spring-dowel-pin.jpg"
    },
    {
        "name": "Grub Screws",
        "slug": "grub-screws",
        "img": "/img/Grub-Screws-1.jpg"
    },
    {
        "name": "Allen Bolts",
        "slug": "allen-bolts",
        "img": "/img/Allen-Bolts.jpg"
    }
],
  faqs: [
    {
        "q": "What tolerance do your dowel pins come in?",
        "a": "Our standard ground dowel pins conform to ISO 8734 with h6 or m6 diameter tolerance. h6 is a sliding fit; m6 is a light press fit for permanent location. Specify your required fit on enquiry."
    }
],
};

export const metadata: Metadata = buildMetadata(product);

export default function Page() {
  return <ProductLandingPage product={product} />;
}
