import { Metadata } from "next";
import ProductLandingPage, { buildMetadata, ProductPageData } from "@/components/ProductLandingPage";

const product: ProductPageData = {
  slug: "nylock-nuts",
  name: "Nylock Nuts",
  category: "Industrial Fasteners",
  img: "/img/Nylock-Nuts.jpg",
  tagline: "Nylock Nut Supplier in Pune",
  headline: "Nylock Nuts — Nylon Insert Lock Nut Supplier in Pune",
  desc: "ISO 7042 / DIN 985 nylon insert lock nuts (nylock) for vibration-proof fastening. Available in Grade 8, SS 304 and SS 316 from M4 to M48.",
  longDesc: `Nylon insert lock nuts (ISO 7042 / DIN 985) are the go-to solution for vibration-proof fastening across automotive, conveyor, agricultural, and general engineering applications. The nylon insert creates interference with the bolt thread and prevents self-loosening under dynamic loads without damaging the mating bolt.`,
  specs: [
    [
        "Standard",
        "ISO 7042, DIN 985"
    ],
    [
        "Thread",
        "M4 to M48"
    ],
    [
        "Material",
        "Grade 8 MS, SS 304, SS 316"
    ],
    [
        "Insert",
        "Nylon (PA 66)"
    ],
    [
        "Finish",
        "Zinc / HDG / Self-colour"
    ],
    [
        "Delivery",
        "Pan-India from Pune"
    ]
],
  applications: [
    "Automotive assemblies",
    "Conveyor systems",
    "Pumps & motors",
    "Agricultural equipment",
    "Structural joints"
],
  keywords: "nylock nut supplier pune, nylon insert lock nut india, din 985 nut dealer pune, ms nylock nut pune, vibration proof nut supplier",
  relatedProducts: [
    {
        "name": "Castle Nuts",
        "slug": "castle-nuts",
        "img": "/img/Castle-nuts.jpg"
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
  faqs: [
    {
        "q": "Up to what temperature can nylock nuts be used?",
        "a": "Standard nylon insert lock nuts (PA 66 insert) are rated up to 120\u00b0C continuous. For higher temperatures, all-metal prevailing-torque lock nuts are recommended. Contact us for alternatives."
    },
    {
        "q": "Are nylock nuts reusable?",
        "a": "Nylock nuts can be reused a few times but their locking effectiveness reduces with each removal. For critical safety applications, it is best practice to use a new nut on each assembly."
    }
],
};

export const metadata: Metadata = buildMetadata(product);

export default function Page() {
  return <ProductLandingPage product={product} />;
}
