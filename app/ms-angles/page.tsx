import { Metadata } from "next";
import ProductLandingPage, { buildMetadata, ProductPageData } from "@/components/ProductLandingPage";

const product: ProductPageData = {
  slug: "ms-angles",
  name: "MS Angles",
  category: "Mild Steel",
  img: "/img/MS-Angles.jpg",
  tagline: "MS Angle Supplier in Pune",
  headline: "MS Angles — Mild Steel Angle Supplier in Pune",
  desc: "Precision-rolled mild steel angles for structural frameworks, fabrication, and construction. IS 2062 grade, available in equal and unequal sections.",
  longDesc: `Mild steel angles are one of the most widely used structural steel sections in India. Rolled from IS 2062 E250 grade steel, they offer excellent weldability, formability, and structural integrity. Equal leg angles provide balanced load distribution, while unequal angles are used where different leg dimensions are required. Stellar Global Supplies stocks a comprehensive range of MS angles in Pune and ships pan-India, making us the preferred choice for fabricators, contractors, and OEMs.`,
  specs: [
    [
        "Grade",
        "IS 2062, E250"
    ],
    [
        "Size Range",
        "20\u00d720\u00d73 mm to 200\u00d7200\u00d720 mm"
    ],
    [
        "Section Type",
        "Equal & Unequal Leg"
    ],
    [
        "Length",
        "Standard 6 m / 12 m or cut-to-size"
    ],
    [
        "Surface",
        "Mill Finish / Painted"
    ],
    [
        "Delivery",
        "Pan-India from Pune"
    ]
],
  applications: [
    "Structural frameworks",
    "Roof trusses",
    "Tower fabrication",
    "Conveyor structures",
    "Industrial sheds"
],
  keywords: "ms angle supplier pune, mild steel angle pune, ms angle dealer india, structural steel angle pune, is 2062 angle supplier",
  relatedProducts: [
    {
        "name": "MS Flats",
        "slug": "ms-flats",
        "img": "/img/MS-Flats.jpg"
    },
    {
        "name": "MS Channels",
        "slug": "ms-channels",
        "img": "/img/Channels.jpg"
    },
    {
        "name": "MS Sheet",
        "slug": "ms-sheet",
        "img": "/img/MS-Sheet.jpg"
    }
],
  faqs: [
    {
        "q": "What is the standard length for MS angles?",
        "a": "The standard mill length for MS angles is 6 m or 12 m. We also offer cut-to-size service from our Pune facility for custom lengths."
    },
    {
        "q": "What grade of MS angle do you supply?",
        "a": "We supply IS 2062 E250 grade mild steel angles, which is the standard structural grade used in India. Custom grades available on request."
    },
    {
        "q": "Do you supply both equal and unequal MS angles?",
        "a": "Yes, we supply both equal leg and unequal leg mild steel angles across a full size range, stocked ex-Pune."
    }
],
};

export const metadata: Metadata = buildMetadata(product);

export default function Page() {
  return <ProductLandingPage product={product} />;
}
