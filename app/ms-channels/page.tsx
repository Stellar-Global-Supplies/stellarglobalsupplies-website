import { Metadata } from "next";
import ProductLandingPage, { buildMetadata, ProductPageData } from "@/components/ProductLandingPage";

const product: ProductPageData = {
  slug: "ms-channels",
  name: "MS Channels",
  category: "Mild Steel",
  img: "/img/Channels.jpg",
  tagline: "MS Channel Supplier in Pune",
  headline: "MS Channels — Mild Steel C-Section Supplier in Pune",
  desc: "Mild steel C-section and ISMC channels for structural beams, support structures, and industrial frameworks. IS 2062 grade, ex-stock in Pune.",
  longDesc: `ISMC channels are one of the most common structural steel sections used in Indian construction and fabrication. From cable tray systems to industrial mezzanine floors and crane girders, MS channels provide excellent load-bearing capacity. We stock the full ISMC range from 75 to 400 at our Pune facility.`,
  specs: [
    [
        "Grade",
        "IS 2062, ISMC"
    ],
    [
        "Size Range",
        "ISMC 75 to ISMC 400"
    ],
    [
        "Flange Width",
        "40 mm to 100 mm"
    ],
    [
        "Length",
        "Standard 6 m or 12 m"
    ],
    [
        "Surface",
        "Mill Finish"
    ],
    [
        "Delivery",
        "Pan-India from Pune"
    ]
],
  applications: [
    "Structural beams",
    "Crane rails",
    "Cable trays",
    "Industrial frames",
    "Mezzanine floors"
],
  keywords: "ms channel supplier pune, ismc channel dealer pune, mild steel channel india, c-section steel pune, structural channel supplier",
  relatedProducts: [
    {
        "name": "MS Angles",
        "slug": "ms-angles",
        "img": "/img/MS-Angles.jpg"
    },
    {
        "name": "MS Flats",
        "slug": "ms-flats",
        "img": "/img/MS-Flats.jpg"
    },
    {
        "name": "MS Square Tubes",
        "slug": "ms-square-tubes",
        "img": "/img/Square-Tubes.jpg"
    }
],
  faqs: [],
};

export const metadata: Metadata = buildMetadata(product);

export default function Page() {
  return <ProductLandingPage product={product} />;
}
