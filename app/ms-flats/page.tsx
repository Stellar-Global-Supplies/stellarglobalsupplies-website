import { Metadata } from "next";
import ProductLandingPage, { buildMetadata, ProductPageData } from "@/components/ProductLandingPage";

const product: ProductPageData = {
  slug: "ms-flats",
  name: "MS Flats",
  category: "Mild Steel",
  img: "/img/MS-Flats.jpg",
  tagline: "MS Flat Bar Supplier in Pune",
  headline: "MS Flats — Mild Steel Flat Bar Supplier in Pune",
  desc: "Precision-rolled mild steel flat bars for fabrication, construction, and industrial machinery. Available in a wide range of thicknesses and widths.",
  longDesc: `MS flat bars are precision-rolled mild steel sections used extensively across fabrication, construction, and industrial machinery. Available in a broad range of widths and thicknesses, they can be sheared, drilled, welded, and formed easily. Our IS 2062 E250 grade flats are sourced from reputed mills and quality-checked before dispatch from our Pune facility.`,
  specs: [
    [
        "Grade",
        "IS 2062, E250"
    ],
    [
        "Width Range",
        "12 mm to 300 mm"
    ],
    [
        "Thickness",
        "3 mm to 50 mm"
    ],
    [
        "Length",
        "Standard 6 m or cut-to-size"
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
    "Fabrication brackets",
    "Machine bases",
    "Grating bars",
    "Architectural frameworks",
    "Agricultural equipment"
],
  keywords: "ms flat bar supplier pune, mild steel flat pune, ms flat dealer india, flat bar steel pune, ms flat bar manufacturer",
  relatedProducts: [
    {
        "name": "MS Angles",
        "slug": "ms-angles",
        "img": "/img/MS-Angles.jpg"
    },
    {
        "name": "MS Channels",
        "slug": "ms-channels",
        "img": "/img/Channels.jpg"
    },
    {
        "name": "MS Square Tubes",
        "slug": "ms-square-tubes",
        "img": "/img/Square-Tubes.jpg"
    }
],
  faqs: [
    {
        "q": "Can MS flats be supplied in custom widths?",
        "a": "Yes, we offer custom widths via slitting from standard sheets or sourcing from our mill partners. Contact us with your exact requirement."
    },
    {
        "q": "What is the minimum order for MS flats?",
        "a": "We cater to both small and bulk orders. WhatsApp us your requirement and we will confirm the minimum quantity and pricing."
    }
],
};

export const metadata: Metadata = buildMetadata(product);

export default function Page() {
  return <ProductLandingPage product={product} />;
}
