import { Metadata } from "next";
import ProductLandingPage, { buildMetadata, ProductPageData } from "@/components/ProductLandingPage";

const product: ProductPageData = {
  slug: "ss-channels",
  name: "SS Channels",
  category: "Stainless Steel",
  img: "/img/SS-Channels.jpg",
  tagline: "SS Channel Supplier in Pune",
  headline: "SS Channels — Stainless Steel Channel Supplier in Pune",
  desc: "Grade 304 and 316 stainless steel channels for hygienic, marine, and structural applications. Available in standard and custom profiles.",
  longDesc: `Stainless steel channels in grade 304 and 316 offer excellent corrosion resistance for hygienic, marine, and chemical environments. Used in food processing lines, pharmaceutical clean rooms, marine structures, and architectural facades. Our SS channels are available in standard mill and polished finishes from stock in Pune.`,
  specs: [
    [
        "Grade",
        "SS 304, SS 316, SS 316L"
    ],
    [
        "Size Range",
        "25\u00d713 mm to 150\u00d775 mm"
    ],
    [
        "Finish",
        "No.1, 2B, Mirror (#8)"
    ],
    [
        "Length",
        "3 m / 6 m or cut-to-size"
    ],
    [
        "Standards",
        "ASTM A276, AISI"
    ],
    [
        "Delivery",
        "Pan-India from Pune"
    ]
],
  applications: [
    "Food processing equipment",
    "Pharmaceutical fitouts",
    "Marine structures",
    "Architectural trim",
    "Chemical plants"
],
  keywords: "ss channel supplier pune, stainless steel channel pune, grade 304 channel india, ss 316 channel dealer, inox channel supplier pune",
  relatedProducts: [
    {
        "name": "SS Flats",
        "slug": "ss-flats",
        "img": "/img/SS-Flats.jpg"
    },
    {
        "name": "SS Sheets",
        "slug": "ss-sheets",
        "img": "/img/SS-Sheets.jpg"
    },
    {
        "name": "SS Round Bars",
        "slug": "ss-round-bars",
        "img": "/img/SS-Round-Bars.jpg"
    }
],
  faqs: [],
};

export const metadata: Metadata = buildMetadata(product);

export default function Page() {
  return <ProductLandingPage product={product} />;
}
