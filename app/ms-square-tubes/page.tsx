import { Metadata } from "next";
import ProductLandingPage, { buildMetadata, ProductPageData } from "@/components/ProductLandingPage";

const product: ProductPageData = {
  slug: "ms-square-tubes",
  name: "MS Square Tubes",
  category: "Mild Steel",
  img: "/img/Square-Tubes.jpg",
  tagline: "MS Square Tube Supplier in Pune",
  headline: "MS Square Tubes — Mild Steel Hollow Section Supplier in Pune",
  desc: "Mild steel square hollow sections (SHS) for construction, furniture, and general fabrication. Precision-welded with consistent wall thickness.",
  longDesc: `MS square hollow sections (SHS) are widely used in furniture, construction, and structural framing. Manufactured to IS 4923, our square tubes feature consistent wall thickness and clean welds, making them easy to work with. Available in a wide size range with standard 6 m lengths or cut-to-size from Pune.`,
  specs: [
    [
        "Grade",
        "IS 4923, IS 1239"
    ],
    [
        "Size Range",
        "12\u00d712 mm to 250\u00d7250 mm"
    ],
    [
        "Wall Thickness",
        "1.2 mm to 12 mm"
    ],
    [
        "Length",
        "6 m standard or cut-to-size"
    ],
    [
        "Surface",
        "Black / Painted"
    ],
    [
        "Delivery",
        "Pan-India from Pune"
    ]
],
  applications: [
    "Steel furniture",
    "Gates & grills",
    "Structural columns",
    "Trolley frames",
    "Industrial racking"
],
  keywords: "ms square tube supplier pune, mild steel hollow section pune, shs tube dealer pune, square pipe supplier india, ms box section",
  relatedProducts: [
    {
        "name": "MS Channels",
        "slug": "ms-channels",
        "img": "/img/Channels.jpg"
    },
    {
        "name": "MS Round Pipes",
        "slug": "ms-round-pipes",
        "img": "/img/MS-Round-Pipes.jpg"
    },
    {
        "name": "MS Flats",
        "slug": "ms-flats",
        "img": "/img/MS-Flats.jpg"
    }
],
  faqs: [],
};

export const metadata: Metadata = buildMetadata(product);

export default function Page() {
  return <ProductLandingPage product={product} />;
}
