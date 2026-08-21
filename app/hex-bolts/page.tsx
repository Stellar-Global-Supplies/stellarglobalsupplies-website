import { Metadata } from "next";
import ProductLandingPage, { buildMetadata, ProductPageData } from "@/components/ProductLandingPage";

const product: ProductPageData = {
  slug: "hex-bolts",
  name: "Hex Bolts",
  category: "Industrial Fasteners",
  img: "/img/Hex-Bolts.jpg",
  tagline: "Hex Bolt Supplier in Pune",
  headline: "Hex Bolts — Structural Hex Head Bolt Supplier in Pune",
  desc: "IS 1364 / DIN 931 / DIN 933 hex head bolts in grade 4.6, 8.8 and 10.9 for structural, automotive, and industrial assembly. Full and partial thread.",
  longDesc: `IS 1364 / DIN 931 hex head bolts are the standard threaded fastener for structural steel connections, flange joints, and heavy machinery assembly. Available in grade 4.6 through 10.9 and stainless steel grades for corrosive environments. We stock a comprehensive range of sizes from M6 to M100 at Pune.`,
  specs: [
    [
        "Standard",
        "IS 1364, DIN 931 / 933"
    ],
    [
        "Thread",
        "M6 to M100"
    ],
    [
        "Grade",
        "4.6 / 8.8 / 10.9 / SS 304 / SS 316"
    ],
    [
        "Type",
        "Fully Threaded & Part Threaded"
    ],
    [
        "Finish",
        "BZP / HDG / Self-colour"
    ],
    [
        "Delivery",
        "Pan-India from Pune"
    ]
],
  applications: [
    "Structural steel joints",
    "Flange connections",
    "Heavy machinery",
    "Bridge fabrication",
    "General engineering"
],
  keywords: "hex bolt supplier pune, structural bolt dealer india, din 931 bolt pune, grade 8.8 hex bolt india, hex head bolt supplier pune",
  relatedProducts: [
    {
        "name": "Allen Bolts",
        "slug": "allen-bolts",
        "img": "/img/Allen-Bolts.jpg"
    },
    {
        "name": "Nylock Nuts",
        "slug": "nylock-nuts",
        "img": "/img/Nylock-Nuts.jpg"
    },
    {
        "name": "Castle Nuts",
        "slug": "castle-nuts",
        "img": "/img/Castle-nuts.jpg"
    }
],
  faqs: [
    {
        "q": "What is the difference between grade 4.6, 8.8, and 10.9 hex bolts?",
        "a": "Grade 4.6 is a low-strength general purpose bolt (400 MPa tensile). Grade 8.8 is a medium-high strength bolt widely used in structural connections (800 MPa tensile). Grade 10.9 is a high-strength bolt for critical joints (1000 MPa tensile). Higher grades require proper torque tightening."
    },
    {
        "q": "Do you supply hot-dip galvanised (HDG) hex bolts?",
        "a": "Yes, we supply HDG hex bolts for outdoor structural applications where corrosion resistance is required. Available in grade 4.6 and 8.8."
    }
],
};

export const metadata: Metadata = buildMetadata(product);

export default function Page() {
  return <ProductLandingPage product={product} />;
}
