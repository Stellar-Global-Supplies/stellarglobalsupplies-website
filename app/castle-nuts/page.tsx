import { Metadata } from "next";
import ProductLandingPage, { buildMetadata, ProductPageData } from "@/components/ProductLandingPage";

const product: ProductPageData = {
  slug: "castle-nuts",
  name: "Castle Nuts",
  category: "Industrial Fasteners",
  img: "/img/Castle-nuts.jpg",
  tagline: "Castle Nut Supplier in Pune",
  headline: "Castle Nuts — Slotted Nut Supplier in Pune",
  desc: "DIN 935 / IS 1364 castellated (castle) nuts for cotter pin security applications. Prevents nut rotation in dynamic load bearing assemblies.",
  longDesc: `DIN 935 castellated (castle) nuts have slots machined across the top face through which a cotter pin (split pin) is inserted after assembly to physically lock the nut against rotation. Used in safety-critical applications including axle wheel bearings, aircraft undercarriage, and steering joints.`,
  specs: [
    [
        "Standard",
        "DIN 935, IS 1364"
    ],
    [
        "Thread",
        "M6 to M100"
    ],
    [
        "Material",
        "Grade 4 / 6 / 8, SS 304"
    ],
    [
        "Slots",
        "6 (standard) per DIN"
    ],
    [
        "Finish",
        "BZP, HDG, Self-colour"
    ],
    [
        "Delivery",
        "Pan-India from Pune"
    ]
],
  applications: [
    "Axle & wheel bearings",
    "Steering joints",
    "Aircraft undercarriage",
    "Agricultural axles",
    "Marine propeller shafts"
],
  keywords: "castle nut supplier pune, din 935 nut dealer india, slotted nut supplier pune, castellated nut india, cotter pin nut supplier",
  relatedProducts: [
    {
        "name": "Nylock Nuts",
        "slug": "nylock-nuts",
        "img": "/img/Nylock-Nuts.jpg"
    },
    {
        "name": "Hex Bolts",
        "slug": "hex-bolts",
        "img": "/img/Hex-Bolts.jpg"
    },
    {
        "name": "Studs",
        "slug": "studs",
        "img": "/img/Studs.jpg"
    }
],
  faqs: [],
};

export const metadata: Metadata = buildMetadata(product);

export default function Page() {
  return <ProductLandingPage product={product} />;
}
