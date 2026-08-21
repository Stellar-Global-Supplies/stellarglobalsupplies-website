import { Metadata } from "next";
import ProductLandingPage, { buildMetadata, ProductPageData } from "@/components/ProductLandingPage";

const product: ProductPageData = {
  slug: "ms-galvanised-sheets",
  name: "MS Galvanised Sheets",
  category: "Mild Steel",
  img: "/img/Galvanised-Sheets.jpg",
  tagline: "Galvanised Sheet Supplier in Pune",
  headline: "MS Galvanised Sheets — Zinc-Coated Sheet Supplier in Pune",
  desc: "Hot-dip and electro-galvanised mild steel sheets for superior corrosion resistance. Ideal for roofing, cladding, and outdoor structural applications.",
  longDesc: `Hot-dip galvanised (HDG) and electro-galvanised mild steel sheets are coated with zinc to provide long-lasting corrosion protection for outdoor, roofing, and electrical applications. Available in coating weights from Z120 to Z275 g/m², our GI sheets conform to IS 277 and are stocked for immediate dispatch from Pune.`,
  specs: [
    [
        "Grade",
        "IS 277, JIS G3302"
    ],
    [
        "Thickness",
        "0.25 mm to 3.2 mm"
    ],
    [
        "Coating",
        "Z120 / Z180 / Z275 g/m\u00b2"
    ],
    [
        "Type",
        "Hot-Dip (HDG) & Electro-Galvanised"
    ],
    [
        "Sheet Size",
        "1220\u00d72440 mm / Custom"
    ],
    [
        "Delivery",
        "Pan-India from Pune"
    ]
],
  applications: [
    "Roofing & cladding",
    "Electrical panels",
    "HVAC ducting",
    "Automotive body parts",
    "Agricultural sheds"
],
  keywords: "galvanised sheet supplier pune, gi sheet dealer india, zinc coated sheet pune, galvanised steel sheet pune, hdg sheet supplier",
  relatedProducts: [
    {
        "name": "MS Sheet",
        "slug": "ms-sheet",
        "img": "/img/MS-Sheet.jpg"
    },
    {
        "name": "MS Chequered Plate",
        "slug": "ms-chequered-plate",
        "img": "/img/Chequered-plate.jpg"
    },
    {
        "name": "MS Channels",
        "slug": "ms-channels",
        "img": "/img/Channels.jpg"
    }
],
  faqs: [],
};

export const metadata: Metadata = buildMetadata(product);

export default function Page() {
  return <ProductLandingPage product={product} />;
}
