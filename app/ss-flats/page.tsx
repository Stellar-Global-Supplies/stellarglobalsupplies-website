import { Metadata } from "next";
import ProductLandingPage, { buildMetadata, ProductPageData } from "@/components/ProductLandingPage";

const product: ProductPageData = {
  slug: "ss-flats",
  name: "SS Flats",
  category: "Stainless Steel",
  img: "/img/SS-Flats.jpg",
  tagline: "SS Flat Bar Supplier in Pune",
  headline: "SS Flats — Stainless Steel Flat Bar Supplier in Pune",
  desc: "Polished stainless steel flat bars for food processing, pharmaceutical, and architectural applications. Grade 304 and 316, multiple finishes available.",
  longDesc: `Polished and mill-finish stainless steel flat bars in grade 304 and 316L are widely used in food machinery, handrails, marine fittings, and architectural trim. We stock multiple widths and thicknesses and can supply in No.4, 2B, and mirror finish from Pune.`,
  specs: [
    [
        "Grade",
        "SS 304, SS 316, SS 316L"
    ],
    [
        "Width",
        "10 mm to 200 mm"
    ],
    [
        "Thickness",
        "3 mm to 50 mm"
    ],
    [
        "Finish",
        "Hot Rolled, 2B, Mirror, No.4"
    ],
    [
        "Length",
        "3 m / 6 m or cut-to-size"
    ],
    [
        "Delivery",
        "Pan-India from Pune"
    ]
],
  applications: [
    "Food & pharma machinery",
    "Handrails & balustrades",
    "Marine fittings",
    "Conveyors",
    "Architectural cladding"
],
  keywords: "ss flat bar supplier pune, stainless steel flat pune, grade 304 flat dealer, ss 316 flat bar india, inox flat bar supplier",
  relatedProducts: [
    {
        "name": "SS Channels",
        "slug": "ss-channels",
        "img": "/img/SS-Channels.jpg"
    },
    {
        "name": "SS Round Bars",
        "slug": "ss-round-bars",
        "img": "/img/SS-Round-Bars.jpg"
    },
    {
        "name": "SS Sheets",
        "slug": "ss-sheets",
        "img": "/img/SS-Sheets.jpg"
    }
],
  faqs: [],
};

export const metadata: Metadata = buildMetadata(product);

export default function Page() {
  return <ProductLandingPage product={product} />;
}
