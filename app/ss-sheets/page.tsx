import { Metadata } from "next";
import ProductLandingPage, { buildMetadata, ProductPageData } from "@/components/ProductLandingPage";

const product: ProductPageData = {
  slug: "ss-sheets",
  name: "SS Sheets",
  category: "Stainless Steel",
  img: "/img/SS-Sheets.jpg",
  tagline: "SS Sheet Supplier in Pune",
  headline: "SS Sheets — Stainless Steel Sheet Supplier in Pune",
  desc: "Grade 202, 304 and 316 stainless steel sheets in mirror, matte, hairline, and 2B finish. Cut-to-size service available from Pune.",
  longDesc: `Stainless steel sheets in grade 202, 304, and 316 are used across kitchen equipment, elevator interiors, pharmaceutical tables, and architectural cladding. We stock a wide range of thicknesses and finishes — from 2B and No.4 to mirror (#8) and hairline — and offer cut-to-size from our Pune warehouse.`,
  specs: [
    [
        "Grade",
        "SS 202, SS 304, SS 316"
    ],
    [
        "Thickness",
        "0.5 mm to 10 mm"
    ],
    [
        "Sheet Size",
        "1219\u00d72438 mm / 1500\u00d73000 mm"
    ],
    [
        "Finish",
        "2B / No.4 / Mirror (#8) / Hairline"
    ],
    [
        "Standards",
        "ASTM A240, JIS G4304"
    ],
    [
        "Delivery",
        "Pan-India from Pune"
    ]
],
  applications: [
    "Kitchen equipment",
    "Cladding & facades",
    "Chemical vessels",
    "Elevator interiors",
    "Pharmaceutical tables"
],
  keywords: "ss sheet supplier pune, stainless steel sheet pune, grade 304 sheet dealer, mirror finish ss sheet pune, ss 316 sheet india",
  relatedProducts: [
    {
        "name": "SS Circles",
        "slug": "ss-circles",
        "img": "/img/SS-Circles.jpg"
    },
    {
        "name": "SS Flats",
        "slug": "ss-flats",
        "img": "/img/SS-Flats.jpg"
    },
    {
        "name": "SS Channels",
        "slug": "ss-channels",
        "img": "/img/SS-Channels.jpg"
    }
],
  faqs: [
    {
        "q": "What is the difference between 2B and No.4 stainless steel finish?",
        "a": "2B is a cold-rolled, bright, slightly reflective finish \u2014 the standard mill finish used in most industrial applications. No.4 is a brushed (directional grain) finish with 150-180 grit, commonly used for kitchen equipment and architectural trim. Mirror (#8) is a highly reflective polished finish for decorative use."
    }
],
};

export const metadata: Metadata = buildMetadata(product);

export default function Page() {
  return <ProductLandingPage product={product} />;
}
